import React, { useState, useEffect } from "react";
import { Book } from "@/data/booksData";
import {
  BookReview,
  getBookReviews,
  voteReviewHelpful,
  subscribeToRecords,
} from "@/services/bookRecordsService";
import { BookReviewFormModal } from "./BookReviewFormModal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Star,
  ThumbsUp,
  ShieldCheck,
  PenLine,
  Sparkles,
  User,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

interface BookReviewsSectionProps {
  book: Book;
}

export const BookReviewsSection: React.FC<BookReviewsSectionProps> = ({ book }) => {
  const [reviews, setReviews] = useState<BookReview[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<number | "all">("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [votedMap, setVotedMap] = useState<Record<string, boolean>>({});

  const reloadReviews = () => {
    setReviews(getBookReviews(book.id));
  };

  useEffect(() => {
    reloadReviews();
    const unsubscribe = subscribeToRecords(() => {
      reloadReviews();
    });
    return unsubscribe;
  }, [book.id]);

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
    <section className="mt-16 pt-12 border-t border-border/60">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Peer Reviews & Reader Feedback
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Academic Reviews & Ratings
          </h3>
          <p className="text-sm text-muted-foreground">
            Verified evaluations from professors, researchers, and professional practitioners.
          </p>
        </div>
        <Button
          onClick={() => setIsFormOpen(true)}
          className="rounded-2xl font-bold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg px-6 py-5 cursor-pointer self-start md:self-auto"
        >
          <PenLine className="w-4 h-4 text-accent" />
          Write a Review
        </Button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
        {/* LEFT: RATINGS SUMMARY CARD */}
        <Card className="lg:col-span-5 p-6 sm:p-8 bg-card border border-border/70 rounded-3xl shadow-sm space-y-6">
          <div className="flex items-center gap-6">
            <div className="text-center bg-primary/5 p-5 rounded-2xl border border-primary/10">
              <span className="text-5xl font-serif font-black text-primary block leading-none">
                {averageRating}
              </span>
              <div className="flex items-center justify-center gap-0.5 mt-2">
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
              <span className="text-[11px] text-muted-foreground font-semibold mt-1 block">
                Out of 5 Stars
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="font-bold text-base text-foreground">
                Reader Consensus
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {totalReviews > 0
                  ? `Based on ${totalReviews} verified academic reviews.`
                  : "Curated peer assessments available."}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Verified Academic Acquisitions</span>
              </div>
            </div>
          </div>

          {/* RATING DISTRIBUTION BARS */}
          <div className="space-y-2.5 pt-4 border-t border-border/50">
            {breakdown.map(({ stars, count, percentage }) => (
              <button
                key={stars}
                onClick={() => setSelectedFilter(selectedFilter === stars ? "all" : stars)}
                className={`w-full flex items-center gap-3 text-xs text-left group transition-colors py-1 px-1.5 rounded-lg ${
                  selectedFilter === stars ? "bg-primary/10 font-bold" : "hover:bg-muted/50"
                }`}
              >
                <span className="w-12 text-muted-foreground flex items-center gap-1 shrink-0 font-medium group-hover:text-primary">
                  {stars} <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                </span>
                <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-12 text-right text-muted-foreground font-mono text-[11px]">
                  {percentage}% ({count})
                </span>
              </button>
            ))}
          </div>

          {selectedFilter !== "all" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedFilter("all")}
              className="w-full text-xs text-primary font-semibold"
            >
              Show All Reviews ({totalReviews})
            </Button>
          )}
        </Card>

        {/* RIGHT: REVIEWS LIST */}
        <div className="lg:col-span-7 space-y-4">
          {/* FILTER PILLS */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                selectedFilter === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All Reviews ({totalReviews})
            </button>
            {[5, 4, 3].map((star) => {
              const count = reviews.filter((r) => r.rating === star).length;
              if (count === 0) return null;
              return (
                <button
                  key={star}
                  onClick={() => setSelectedFilter(selectedFilter === star ? "all" : star)}
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1 ${
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
            <div className="space-y-4">
              {filteredReviews.map((rev) => (
                <Card
                  key={rev.id}
                  className="p-5 sm:p-6 bg-card border border-border/70 rounded-2xl shadow-sm hover:shadow-md transition-shadow space-y-3"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
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

                  {/* COMMENT BODY */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {rev.comment}
                  </p>

                  {/* THUMBS UP */}
                  <div className="pt-2 flex items-center justify-between border-t border-border/40 text-xs">
                    <span className="text-[11px] text-muted-foreground">
                      Scholarly review published on Eminsphere
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
                No reviews found for this rating
              </h5>
              <p className="text-xs text-muted-foreground">
                Be the first scholar or reader to write a review for this published title.
              </p>
              <Button
                onClick={() => setIsFormOpen(true)}
                size="sm"
                className="rounded-xl text-xs font-bold"
              >
                Write a Review
              </Button>
            </Card>
          )}
        </div>
      </div>

      <BookReviewFormModal
        book={book}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onReviewSubmitted={reloadReviews}
      />
    </section>
  );
};
