// Razorpay Integration Service

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const RAZORPAY_KEY_ID =
  import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_TkwCXKlFUEjHhG";

/**
 * Loads the Razorpay checkout.js script dynamically if not already loaded
 */
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export interface CreateOrderResponse {
  order_id: string;
  amount: number;
  currency: string;
  receipt?: string;
}

/**
 * Creates a Razorpay order via the backend endpoint
 */
export async function createRazorpayOrder(params: {
  amount: number; // in paise (e.g. 69900)
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
}): Promise<CreateOrderResponse> {
  const response = await fetch("/api/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to initialize payment order");
  }

  return data;
}

export interface VerifyPaymentParams {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  message: string;
  order_id: string;
  payment_id: string;
}

/**
 * Verifies the Razorpay payment cryptographic signature on the backend
 */
export async function verifyRazorpayPayment(
  params: VerifyPaymentParams
): Promise<VerifyPaymentResponse> {
  const response = await fetch("/api/verify-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.error || "Payment verification failed");
  }

  return data;
}

export interface CustomerShippingDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}
