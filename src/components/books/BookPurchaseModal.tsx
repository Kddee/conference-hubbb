import React, { useState } from "react";
import { Book, getBookPrice } from "@/data/booksData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Truck,
  Sparkles,
  Loader2,
  Copy,
  Check,
  Lock,
} from "lucide-react";
import { toast } from "sonner";
import {
  RAZORPAY_KEY_ID,
  loadRazorpayScript,
  createRazorpayOrder,
  verifyRazorpayPayment,
} from "@/services/razorpay";

interface BookPurchaseModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookPurchaseModal: React.FC<BookPurchaseModalProps> = ({
  book,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState<{
    orderId: string;
    paymentId: string;
  } | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!book) return null;

  const price = getBookPrice(book);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(label);
    toast.success(`${label} copied to clipboard`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanEmail = formData.email.trim();
    const cleanPhone = formData.phone.trim().replace(/\D/g, "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!emailRegex.test(cleanEmail)) {
      toast.error("Please enter a valid email address (e.g. name@gmail.com). Do not enter a UPI handle in the email field.");
      return;
    }
    if (cleanPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!formData.address.trim()) {
      toast.error("Please enter your delivery street address");
      return;
    }
    if (!formData.city.trim() || !formData.state.trim()) {
      toast.error("Please enter your city and state");
      return;
    }
    if (!formData.pincode.trim() || formData.pincode.length < 6) {
      toast.error("Please enter a valid 6-digit PIN code");
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Ensure Razorpay SDK is loaded
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error(
          "Could not load Razorpay SDK. Please check your internet connection."
        );
      }

      // 2. Call backend to create Order
      const amountInPaise = price * 100;
      const order = await createRazorpayOrder({
        amount: amountInPaise,
        currency: "INR",
        receipt: `rcpt_${book.id.slice(0, 8)}_${Date.now()}`,
        notes: {
          bookId: book.id,
          bookTitle: book.title,
          isbn: book.isbn,
          customerName: formData.name,
          customerPhone: formData.phone,
          customerEmail: formData.email,
          shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
        },
      });

      // 3. Configure Razorpay Standard Web Checkout
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "Eminsphere Global Publishing",
        description: `Order: ${book.title}`,
        image: typeof window !== "undefined" ? `${window.location.origin}/favicon.png` : undefined,
        order_id: order.order_id,
        prefill: {
          name: formData.name.trim(),
          email: cleanEmail,
          contact: cleanPhone.slice(-10),
        },
        notes: {
          book_title: book.title,
          isbn: book.isbn,
          shipping_address: `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
        },
        theme: {
          color: "#0284c7",
        },
        modal: {
          ondismiss: () => {
            toast.info("Payment window closed. You can retry whenever you are ready.");
            setIsProcessing(false);
          },
        },
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          try {
            setIsVerifying(true);
            // 4. Verify payment signature on backend
            await verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            // Set state to show success screen
            setPaymentSuccess({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
            });
            toast.success("Payment verified successfully! Your book order has been placed.");
          } catch (verificationError: any) {
            console.error("Verification failed:", verificationError);
            toast.error(
              verificationError.message ||
                "Payment verification failed. Please contact Eminsphere support with your payment ID."
            );
          } finally {
            setIsVerifying(false);
            setIsProcessing(false);
          }
        },
      };

      const razorpayInstance = new window.Razorpay(options);

      razorpayInstance.on("payment.failed", (errorData: any) => {
        console.error("Payment failed:", errorData);
        toast.error(
          `Payment failed: ${errorData.error?.description || "Transaction was declined."}`
        );
        setIsProcessing(false);
      });

      razorpayInstance.open();
    } catch (err: any) {
      console.error("Checkout initiation error:", err);
      toast.error(err.message || "Failed to initialize payment. Please try again.");
      setIsProcessing(false);
    }
  };

  const handleModalClose = () => {
    if (isProcessing || isVerifying) return;
    setPaymentSuccess(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl border-border bg-card">
        {paymentSuccess ? (
          /* SUCCESS SCREEN */
          <div className="p-8 text-center space-y-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 animate-in zoom-in duration-300">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Order Confirmed & Paid
              </span>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Thank You for Your Order!
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Your direct order for{" "}
                <span className="font-semibold text-foreground">"{book.title}"</span> has
                been confirmed.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-muted/40 rounded-xl p-5 border border-border/60 text-left space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-2 border-b border-border/40">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-bold text-base text-foreground">
                  ₹{price}.00 (All Inclusive)
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Order ID</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(paymentSuccess.orderId, "Order ID")}
                  className="inline-flex items-center gap-1 font-mono font-medium text-primary hover:underline"
                >
                  {paymentSuccess.orderId}{" "}
                  {copiedId === "Order ID" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Razorpay Payment ID</span>
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(paymentSuccess.paymentId, "Payment ID")
                  }
                  className="inline-flex items-center gap-1 font-mono font-medium text-primary hover:underline"
                >
                  {paymentSuccess.paymentId}{" "}
                  {copiedId === "Payment ID" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <div className="pt-1">
                <span className="text-muted-foreground block mb-1">
                  Shipping Delivery Address:
                </span>
                <p className="text-foreground font-medium leading-relaxed">
                  {formData.name} • {formData.phone}
                  <br />
                  {formData.address}, {formData.city}, {formData.state} - {formData.pincode}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
              <Truck className="w-4 h-4 text-primary" />
              <span>
                Estimated dispatch within 24–48 hours. Tracking details will be emailed to{" "}
                <strong>{formData.email}</strong>.
              </span>
            </div>

            <Button
              onClick={handleModalClose}
              size="lg"
              className="w-full rounded-xl font-bold bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground"
            >
              Done
            </Button>
          </div>
        ) : (
          /* CHECKOUT FORM */
          <div className="p-6 sm:p-8 space-y-6">
            <DialogHeader className="text-left space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <ShieldCheck className="w-3 h-3" /> Direct Publisher Order
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <Truck className="w-3 h-3" /> Free Express Delivery
                </span>
              </div>
              <DialogTitle className="text-2xl font-serif font-bold text-foreground">
                Order Paperback Edition (Step 1 of 2)
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
                Enter your shipping address below. After clicking Proceed, the secure Razorpay payment window will open where you select your payment method (UPI, Cards, NetBanking).
              </DialogDescription>
            </DialogHeader>

            {/* Selected Book Mini Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/40 border border-border/60">
              <img
                src={book.image}
                alt={book.title}
                className="w-16 h-20 object-contain rounded shadow-sm bg-white p-1 border border-border/40"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-serif font-bold text-sm sm:text-base text-foreground truncate">
                  {book.title}
                </h4>
                <p className="text-xs text-muted-foreground truncate">{book.authors}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    ISBN: {book.isbn}
                  </span>
                  <span>•</span>
                  <span className="text-sm font-bold text-primary font-mono">
                    ₹{price}.00
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping & Buyer Details Form */}
            <form onSubmit={handleCheckout} className="space-y-4">
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Delivery Details
                </h5>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="checkout-name" className="text-xs font-semibold">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="checkout-name"
                    name="name"
                    required
                    placeholder="e.g. Dr. Ramesh Sharma"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="h-10 text-sm rounded-xl"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="checkout-phone" className="text-xs font-semibold">
                    10-Digit Mobile Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="checkout-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-10 text-sm rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="checkout-email" className="text-xs font-semibold">
                  Email Address (for order receipt & tracking){" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="checkout-email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. name@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-10 text-sm rounded-xl"
                />
                <p className="text-[11px] text-muted-foreground">
                  Enter your email (e.g. name@gmail.com). Do NOT enter a UPI ID here.
                </p>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="checkout-address" className="text-xs font-semibold">
                  Complete Street Address (House / Dept / Flat, Area){" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="checkout-address"
                  name="address"
                  required
                  placeholder="e.g. Flat 402, Sunshine Heights, FC Road"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="h-10 text-sm rounded-xl"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="checkout-city" className="text-xs font-semibold">
                    City <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="checkout-city"
                    name="city"
                    required
                    placeholder="e.g. Pune"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="h-10 text-sm rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="checkout-state" className="text-xs font-semibold">
                    State <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="checkout-state"
                    name="state"
                    required
                    placeholder="Maharashtra"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="h-10 text-sm rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="checkout-pincode" className="text-xs font-semibold">
                    PIN Code <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="checkout-pincode"
                    name="pincode"
                    required
                    maxLength={6}
                    placeholder="411004"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="h-10 text-sm rounded-xl font-mono"
                  />
                </div>
              </div>

              {/* Price & Security Summary */}
              <div className="pt-4 border-t border-border/60 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Book Price (Paperback)</span>
                  <span className="font-semibold text-foreground">₹{price}.00</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping & Handling</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    FREE (Included)
                  </span>
                </div>
                <div className="flex items-center justify-between text-base font-bold pt-2 border-t border-border/40 text-foreground">
                  <span>Total Payable</span>
                  <span className="font-mono text-xl text-primary">₹{price}.00</span>
                </div>
              </div>

              {/* Trust Strip */}
              <div className="flex items-center justify-center gap-4 py-2 px-3 rounded-lg bg-muted/30 border border-border/40 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-500" /> Razorpay 256-bit Secure
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-primary" /> UPI / Cards / NetBanking
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleModalClose}
                  disabled={isProcessing || isVerifying}
                  className="sm:w-1/3 rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isProcessing || isVerifying}
                  size="lg"
                  className="sm:w-2/3 rounded-xl font-bold bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isProcessing || isVerifying ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {isVerifying ? "Verifying Payment..." : "Opening Razorpay..."}
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" /> Proceed to Payment (₹{price}) →
                    </>
                  )}
                </Button>
              </div>

              <p className="text-[11px] text-center text-muted-foreground pt-1">
                Next: The official Razorpay window will open to choose <strong>UPI (GPay / PhonePe)</strong>, <strong>Card</strong>, or <strong>NetBanking</strong>.
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
