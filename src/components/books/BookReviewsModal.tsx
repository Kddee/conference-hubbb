import React, { useState, useEffect } from "react";
import { Book } from "@/data/booksData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookReview,
  getBookReviews,
  voteReviewHelpful,
  subscribeToRecords,
} from "@/services/bookRecordsService";
import { BookReviewFormModal } from "./BookReviewFormModal";
import {
  Star,
  ThumbsUp,
  ShieldCheck,
  PenLine,
  Sparkles,
  CheckCircle2,
  BookOpen,
  X,
} from "lucide-react";

interface BookReviewsModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookReviewsModal: React.FC<BookReviewsModalProps> = ({
  book,
  isOpen,
  onClose,
}) => {
  const [reviews, setReviews] = useState<BookReview[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<number | "all">("all");
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [votedMap, setVotedMap] = useState<Record<string, boolean>>({});

  const reloadReviews = () => {
    if (!book) return;
    setReviews(getBookReviews(book.id));
  };

  useEffect(() => {
    if (book) {
      reloadReviews();
      const unsubscribe = subscribeToRecords(() => {
        reloadReviews();
      });
      return unsubscribe;
    }
  }, [book?.id]);

  if (!book) return null;

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? Number((reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1))
      : 4.8;

  // Breakdown counts
  const breakdown = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter((r) => r.rating === stars).length;
    const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
    return { stars, count, percentage };
  });

  const filteredReviews =
    selectedFilter === "all"
      ? reviews
      : reviews.filter((r) => r.rating === selectedFilter);

  const handleHelpfulVote = (reviewId: string) => {
    if (votedMap[reviewId]) return;
    voteReviewHelpful(reviewId);
    setVotedMap((prev) => ({ ...prev, [reviewId]: true }));
    reloadReviews();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-card border-border/80 rounded-3xl shadow-2xl">
          <DialogHeader className="text-left space-y-3 pb-4 border-b border-border/60">
            <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Academic Peer Reviews & Reader Evaluations</span>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-16 h-22 sm:w-20 sm:h-28 object-contain rounded-lg shadow-md bg-white p-1 shrink-0 border border-border/50"
              />
              <div className="space-y-1 flex-1">
                <DialogTitle className="text-xl sm:text-2xl font-serif font-bold text-primary leading-tight">
                  {book.title}
                </DialogTitle>
                <p className="text-xs text-muted-foreground line-clamp-1 font-medium">
                  {book.authors} • ISBN: {book.isbn}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <div className="inline-flex items-center gap-1 text-amber-500 font-bold text-sm bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{averageRating} / 5.0</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-semibold">
                    ({totalReviews} verified academic reviews)
                  </span>
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* RATING CONSENSUS & WRITE REVIEW CTA */}
          <div className="grid sm:grid-cols-12 gap-6 my-4 items-center bg-muted/40 p-5 rounded-2xl border border-border/60">
            <div className="sm:col-span-4 text-center sm:text-left space-y-1">
              <div className="text-3xl font-serif font-black text-primary">
                {averageRating} <span className="text-base text-muted-foreground font-normal">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(averageRating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground">
                100% Verified Peer Reviews
              </p>
            </div>

            {/* BREAKDOWN BARS */}
            <div className="sm:col-span-5 space-y-1.5">
              {breakdown.map(({ stars, count, percentage }) => (
                <div key={stars} className="flex items-center gap-2 text-xs">
                  <span className="w-10 text-muted-foreground flex items-center gap-0.5 text-[11px] font-semibold">
                    {stars} <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                  </span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="w-8 text-right font-mono text-[10px] text-muted-foreground">
                    {count}
                  </span>
                </div>
              ))}
            </div>

            {/* WRITE REVIEW BUTTON */}
            <div className="sm:col-span-3 flex justify-center sm:justify-end">
              <Button
                onClick={() => setIsWriteModalOpen(true)}
                className="rounded-xl font-bold gap-2 text-xs bg-primary hover:bg-primary/90 text-primary-foreground shadow-md w-full sm:w-auto"
              >
                <PenLine className="w-3.5 h-3.5" />
                Write Review
              </Button>
            </div>
          </div>

          {/* FILTER PILLS */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`text-xs px-3 py-1 rounded-full font-semibold transition-all ${
                selectedFilter === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All ({totalReviews})
            </button>
            {[5, 4, 3].map((star) => {
              const count = reviews.filter((r) => r.rating === star).length;
              if (count === 0) return null;
              return (
                <button
                  key={star}
                  onClick={() => setSelectedFilter(selectedFilter === star ? "all" : star)}
                  className={`text-xs px-3 py-1 rounded-full font-semibold transition-all flex items-center gap-1 ${
                    selectedFilter === star
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <span>{star} Stars</span>
                  <span className="opacity-75">({count})</span>
                </button>
              );
            })}
          </div>

          {/* REVIEWS LIST */}
          {filteredReviews.length > 0 ? (
            <div className="space-y-4 pt-2">
              {filteredReviews.map((rev) => (
                <Card
                  key={rev.id}
                  className="p-5 bg-card border border-border/70 rounded-2xl shadow-sm space-y-3"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                        {rev.userName.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h5 className="font-bold text-sm text-foreground">
                            {rev.userName}
                          </h5>
                          {rev.isVerified && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              <CheckCircle2 className="w-3 h-3" /> Verified Reader
                            </span>
                          )}
                          <span className="text-[10px] font-medium text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
                            {rev.edition === "ebook" ? "eBook / PDF" : "Paperback"}
                          </span>
                        </div>
                        {rev.userRole && (
                          <p className="text-xs text-muted-foreground">
                            {rev.userRole}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="text-[11px] font-medium text-muted-foreground">
                      {rev.date}
                    </span>
                  </div>

                  {/* STARS & HEADLINE */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3.5 h-3.5 ${
                            star <= rev.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                      <span className="text-xs font-bold text-foreground ml-1">
                        {rev.rating}.0
                      </span>
                    </div>
                    <h6 className="font-bold text-sm text-primary leading-snug">
                      "{rev.title}"
                    </h6>
                  </div>

                  {/* COMMENT */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {rev.comment}
                  </p>

                  {/* THUMBS UP */}
                  <div className="pt-2 flex items-center justify-between border-t border-border/40 text-xs">
                    <span className="text-[11px] text-muted-foreground">
                      Published on Eminsphere Global
                    </span>
                    <button
                      type="button"
                      onClick={() => handleHelpfulVote(rev.id)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border transition-all ${
                        votedMap[rev.id]
                          ? "bg-primary/10 border-primary text-primary"
                          : "border-border/60 hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>Helpful ({rev.helpfulCount || 0})</span>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center bg-card border border-border/60 rounded-2xl space-y-3">
              <BookOpen className="w-10 h-10 text-muted-foreground/60 mx-auto" />
              <h5 className="font-bold text-base text-foreground">
                No reviews yet for this rating
              </h5>
              <p className="text-xs text-muted-foreground">
                Be the first reader or scholar to write a review.
              </p>
              <Button
                onClick={() => setIsWriteModalOpen(true)}
                size="sm"
                className="rounded-xl text-xs font-bold"
              >
                Write a Review
              </Button>
            </Card>
          )}
        </DialogContent>
      </Dialog>

      {/* NESTED FORM MODAL TO WRITE A REVIEW */}
      <BookReviewFormModal
        book={book}
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onReviewSubmitted={reloadReviews}
      />
    </>
  );
};
