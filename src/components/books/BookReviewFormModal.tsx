import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, CheckCircle, ShieldCheck, Sparkles, BookOpen } from "lucide-react";
import { Book } from "@/data/booksData";
import { addBookReview } from "@/services/bookRecordsService";
import { toast } from "sonner";

interface BookReviewFormModalProps {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
  onReviewSubmitted?: () => void;
}

export const BookReviewFormModal: React.FC<BookReviewFormModalProps> = ({
  book,
  isOpen,
  onClose,
  onReviewSubmitted,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [edition, setEdition] = useState<"ebook" | "paperback">("ebook");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ratingDescriptions: Record<number, string> = {
    5: "5 Stars — Exceptional Academic Reference & Publication",
    4: "4 Stars — Very Good & Academically Rigorous",
    3: "3 Stars — Good Practical Insights",
    2: "2 Stars — Fair / Needs More Depth",
    1: "1 Star — Needs Significant Revision",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!title.trim()) {
      toast.error("Please enter a short review headline");
      return;
    }

    if (!comment.trim() || comment.trim().length < 15) {
      toast.error("Please provide a review of at least 15 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      addBookReview({
        bookId: book.id,
        userName: userName.trim(),
        userRole: userRole.trim() || "Verified Academic Reader",
        userEmail: userEmail.trim() || undefined,
        rating,
        title: title.trim(),
        comment: comment.trim(),
        edition,
        isVerified: true,
      });

      toast.success("Thank you! Your book review has been published successfully.");
      
      // Reset form
      setTitle("");
      setComment("");
      setRating(5);
      
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-card border-border/80 rounded-3xl shadow-2xl">
        <DialogHeader className="space-y-2 text-left">
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Reader & Peer Review</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-serif font-bold text-primary leading-snug">
            Write a Review for {book.title}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Share your scholarly critique or reading experience with the global academic community.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-3">
          {/* RATING SELECTOR */}
          <div className="space-y-2 bg-muted/40 p-4 rounded-2xl border border-border/50">
            <Label className="text-xs font-semibold text-foreground block">
              Overall Academic Rating *
            </Label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 focus:outline-none transition-transform hover:scale-125 cursor-pointer"
                >
                  <Star
                    className={`w-7 h-7 ${
                      (hoverRating || rating) >= star
                        ? "text-amber-400 fill-amber-400"
                        : "text-muted-foreground/30"
                    } transition-colors`}
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-primary ml-2">
                {rating} / 5 Stars
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground font-medium italic">
              {ratingDescriptions[hoverRating || rating]}
            </p>
          </div>

          {/* EDITION SELECTOR */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setEdition("ebook")}
              className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold flex items-center justify-between ${
                edition === "ebook"
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "border-border/60 hover:border-border text-muted-foreground"
              }`}
            >
              <span>eBook / Digital Edition</span>
              {edition === "ebook" && <CheckCircle className="w-4 h-4 text-emerald-500" />}
            </button>
            <button
              type="button"
              onClick={() => setEdition("paperback")}
              className={`p-3 rounded-xl border text-left transition-all text-xs font-semibold flex items-center justify-between ${
                edition === "paperback"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/60 hover:border-border text-muted-foreground"
              }`}
            >
              <span>Paperback Edition</span>
              {edition === "paperback" && <CheckCircle className="w-4 h-4 text-primary" />}
            </button>
          </div>

          {/* NAME & ROLE */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="review-name" className="text-xs font-semibold">
                Your Name *
              </Label>
              <Input
                id="review-name"
                placeholder="e.g. Dr. Rameshwar Patil"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="rounded-xl text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="review-role" className="text-xs font-semibold">
                Designation / Institution (Optional)
              </Label>
              <Input
                id="review-role"
                placeholder="e.g. Professor, CSE Dept, COEP Pune"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="rounded-xl text-sm"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="space-y-1.5">
            <Label htmlFor="review-email" className="text-xs font-semibold">
              Email Address (Optional & Private)
            </Label>
            <Input
              id="review-email"
              type="email"
              placeholder="For verification only (won't be shown publicly)"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="rounded-xl text-sm"
            />
          </div>

          {/* REVIEW HEADLINE */}
          <div className="space-y-1.5">
            <Label htmlFor="review-title" className="text-xs font-semibold">
              Review Headline *
            </Label>
            <Input
              id="review-title"
              placeholder="e.g. Invaluable text for advanced machine learning research"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="rounded-xl text-sm"
            />
          </div>

          {/* REVIEW COMMENTS */}
          <div className="space-y-1.5">
            <Label htmlFor="review-comment" className="text-xs font-semibold">
              Your Review / Scholarly Critique *
            </Label>
            <Textarea
              id="review-comment"
              placeholder="Describe your reading experience, key takeaways, academic relevance, and practical applications..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              required
              className="rounded-xl text-sm leading-relaxed resize-none"
            />
          </div>

          {/* FOOTER ACTIONS */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/50">
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Reviews are verified under Eminsphere Academic Standards</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="rounded-xl text-xs flex-1 sm:flex-initial"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl text-xs font-bold bg-primary hover:bg-primary/90 text-primary-foreground flex-1 sm:flex-initial"
              >
                {isSubmitting ? "Publishing..." : "Submit Review"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
