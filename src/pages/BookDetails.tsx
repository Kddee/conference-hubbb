import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { publishedBooks, getBookPrice } from "@/data/booksData";
import { BookPurchaseModal } from "@/components/books/BookPurchaseModal";
import { BookReviewsSection } from "@/components/books/BookReviewsSection";
import { BookAnalyticsDashboard } from "@/components/books/BookAnalyticsDashboard";
import { PageHero } from "@/components/layout/PageHero";
import { 
  ArrowLeft, 
  ShoppingCart, 
  BookOpen, 
  ShieldCheck, 
  Globe, 
  User, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  CreditCard,
  Download,
  Star,
  BarChart3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  getBookAnalytics, 
  recordBookView, 
  subscribeToRecords, 
  BookAnalyticsRecord 
} from "@/services/bookRecordsService";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);
  const book = publishedBooks.find(b => b.id === id);

  const [analytics, setAnalytics] = useState<BookAnalyticsRecord | null>(null);

  useEffect(() => {
    if (book) {
      recordBookView(book.id);
      setAnalytics(getBookAnalytics(book.id));

      const unsubscribe = subscribeToRecords(() => {
        setAnalytics(getBookAnalytics(book.id));
      });
      return unsubscribe;
    }
  }, [book?.id]);

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  // Get other related books
  const relatedBooks = publishedBooks.filter(b => b.id !== id).slice(0, 3);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <PageHero
        eyebrow="Official ISBN Academic Publication"
        title={book.title}
        description={book.subtitle || "Published by Eminsphere Global Publishing (ISBN Registered)"}
        variant="aurora"
      />

      <section className="container py-12 md:py-20 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link 
            to="/books" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium text-sm group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Book Catalog
          </Link>

          <Button
            onClick={() => setIsAnalyticsModalOpen(true)}
            variant="outline"
            size="sm"
            className="rounded-xl font-bold gap-2 text-xs border-primary/30 text-primary hover:bg-primary/10 shadow-sm cursor-pointer"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            View Book Records & Metrics
          </Button>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: COVER & PURCHASE CARD */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-card border border-border/60 rounded-3xl shadow-xl flex flex-col items-center text-center overflow-hidden relative">
              <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 p-6 sm:p-8 rounded-2xl w-full flex flex-col justify-center items-center mb-6 shadow-inner border border-border/40">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-sm" 
                  loading="lazy" 
                />
                {book.wrapImage && (
                  <a 
                    href={book.wrapImage} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/25 hover:bg-accent hover:text-accent-foreground transition-all mt-4 shadow-sm"
                  >
                    <BookOpen className="h-3 w-3" /> View Complete Cover Wrap (Spine & Back)
                  </a>
                )}
              </div>

              <div className="w-full space-y-3 mb-6">
                <Button 
                  onClick={() => setIsPurchaseModalOpen(true)}
                  size="lg" 
                  className="w-full rounded-2xl shadow-xl py-6 font-bold text-base bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <CreditCard className="h-5 w-5 group-hover:scale-110 transition-transform" /> 
                  Buy Direct — ₹{getBookPrice(book, "ebook")}
                </Button>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground font-medium">
                  <Sparkles className="h-3.5 w-3.5 text-accent" /> Instant eBook Access • Free Express Delivery for Paperback
                </div>
                <Button asChild variant="outline" size="sm" className="w-full rounded-xl border-border/70 text-xs font-semibold">
                  <a href={book.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ShoppingCart className="h-4 w-4" /> Or Buy on Amazon
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="w-full text-xs font-semibold text-muted-foreground hover:text-foreground">
                  <a href="https://forms.gle/dnkfj4mUxXWHGmKXA" target="_blank" rel="noopener noreferrer">
                    Submit Similar Proposal
                  </a>
                </Button>
              </div>

              {/* SPECIFICATION LIST */}
              <div className="w-full text-left space-y-3 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                <div className="flex justify-between py-1 border-b border-border/30">
                  <span className="font-semibold text-foreground">eBook / Digital Price</span>
                  <span className="font-mono font-bold text-emerald-500">₹{getBookPrice(book, "ebook")}.00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/30">
                  <span className="font-semibold text-foreground">Paperback Price</span>
                  <span className="font-mono font-bold text-primary">₹{getBookPrice(book, "paperback")}.00</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/30">
                  <span className="font-semibold text-foreground">ISBN</span>
                  <span className="font-mono font-bold text-primary">{book.isbn}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/30">
                  <span className="font-semibold text-foreground">Publisher</span>
                  <span className="font-medium text-foreground">Eminsphere™</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/30">
                  <span className="font-semibold text-foreground">ISBN Agency</span>
                  <span className="font-medium text-foreground">RRRNA, Ministry of Education</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/30">
                  <span className="font-semibold text-foreground">Publication Date</span>
                  <span className="font-medium text-foreground">{book.date}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border/30">
                  <span className="font-semibold text-foreground">Format</span>
                  <span className="font-medium text-foreground">Paperback / Kindle eBook</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-foreground">Language</span>
                  <span className="font-medium text-foreground">English</span>
                </div>
              </div>
            </Card>

            {/* PUBLICATION IMPACT & RECORDS SNAPSHOT */}
            <Card className="p-5 bg-card border border-border/60 rounded-3xl text-xs space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-foreground flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-emerald-500" /> Publication Records
                </span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-600 font-bold px-2 py-0.5 rounded-full">
                  Live Metrics
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-muted/50 p-3 rounded-xl border border-border/40">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-medium">
                    Total Downloads
                  </span>
                  <span className="text-xl font-mono font-bold text-foreground flex items-center gap-1 mt-0.5">
                    <Download className="w-3.5 h-3.5 text-emerald-500" />
                    {analytics?.downloadsCount ?? 0}
                  </span>
                </div>

                <div className="bg-muted/50 p-3 rounded-xl border border-border/40">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-medium">
                    Direct Orders
                  </span>
                  <span className="text-xl font-mono font-bold text-foreground mt-0.5 block">
                    {analytics?.ordersCount ?? 0}
                  </span>
                </div>

                <div className="bg-muted/50 p-3 rounded-xl border border-border/40">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-medium">
                    Average Rating
                  </span>
                  <span className="text-xl font-mono font-bold text-amber-500 flex items-center gap-1 mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {analytics?.averageRating ?? 4.8}
                  </span>
                </div>

                <div className="bg-muted/50 p-3 rounded-xl border border-border/40">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block font-medium">
                    Verified Reviews
                  </span>
                  <span className="text-xl font-mono font-bold text-foreground mt-0.5 block">
                    {analytics?.reviewCount ?? 0}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => setIsAnalyticsModalOpen(true)}
                variant="ghost"
                size="sm"
                className="w-full text-xs font-semibold text-primary hover:text-accent gap-1.5 pt-2"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                View Detailed Catalog Analytics
              </Button>
            </Card>

            {/* TRUST BADGE CARD */}
            <Card className="p-5 bg-muted/40 border border-border/60 rounded-2xl text-xs space-y-3">
              <div className="flex items-center gap-2 font-bold text-primary">
                <ShieldCheck className="h-4 w-4 text-accent" /> Verified Academic Publication
              </div>
              <p className="text-muted-foreground leading-relaxed">
                This volume is officially cataloged and peer-reviewed with all rights reserved to the author under international copyright conventions.
              </p>
            </Card>
          </div>

          {/* RIGHT COLUMN: BOOK SYNOPSIS & AUTHOR DETAILS */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" /> Peer-Reviewed Volume
                </span>

                {/* Rating Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{analytics?.averageRating ?? 4.8}</span>
                  <span className="text-muted-foreground font-normal">
                    ({analytics?.reviewCount ?? 0} reviews)
                  </span>
                </div>

                {/* Download Badge */}
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
                  <Download className="w-3.5 h-3.5" />
                  <span>{analytics?.downloadsCount ?? 0} Downloads</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-3 leading-tight">
                {book.title}
              </h1>
              {book.subtitle && (
                <h2 className="text-lg sm:text-xl text-muted-foreground font-medium mb-6 italic">
                  {book.subtitle}
                </h2>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border/60">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <User className="h-4 w-4 text-primary" /> {book.authors}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-accent" /> {book.date}
                </span>
                <span>•</span>
                <span className="font-mono font-semibold text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                  ISBN: {book.isbn}
                </span>
              </div>
            </div>

            {/* ABOUT THE BOOK CONTENT */}
            <Card className="p-8 bg-card border border-border/60 rounded-3xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-accent" /> Synopsis & Academic Scope
              </h3>
              
              <div className="text-muted-foreground leading-relaxed text-base sm:text-lg space-y-5">
                {book.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* CALL TO ACTION FOR AUTHORS */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-transparent border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-serif font-bold text-xl text-primary mb-1">Interested in Publishing Your Research?</h4>
                <p className="text-sm text-muted-foreground">
                  We accept proposals for textbooks, monographs, and converted PhD theses year-round.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full shadow-lg font-semibold shrink-0">
                <a href="https://forms.gle/dnkfj4mUxXWHGmKXA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Submit Proposal <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* ACADEMIC REVIEWS & RATINGS SECTION */}
            <BookReviewsSection book={book} />
          </div>
        </div>

        {/* RELATED PUBLISHED TITLES */}
        <div className="mt-24 pt-12 border-t border-border/60">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary">Other Recent Publications</h3>
              <p className="text-sm text-muted-foreground">Explore more titles published by Eminsphere Global Publishing.</p>
            </div>
            <Button asChild variant="ghost" className="text-primary font-bold hover:text-accent">
              <Link to="/books" className="flex items-center gap-1.5">
                View All Titles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedBooks.map((relBook) => (
              <Card key={relBook.id} className="p-6 bg-card border border-border/60 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="bg-white p-4 rounded-xl flex justify-center mb-4 border border-border/40 h-[180px] items-center">
                    <img src={relBook.image} alt={relBook.title} className="max-h-[150px] object-contain drop-shadow-md group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="font-bold text-base text-primary mb-1 line-clamp-1 group-hover:text-accent transition-colors">{relBook.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{relBook.authors}</p>
                </div>
                <Link to={`/books/${relBook.id}`} className="text-xs font-bold text-primary hover:underline flex items-center gap-1 mt-3 pt-3 border-t border-border/40">
                  View Book Details <ArrowRight className="h-3 w-3" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RAZORPAY CHECKOUT MODAL */}
      <BookPurchaseModal
        book={book}
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
      />

      {/* BOOK ANALYTICS & RECORDS DASHBOARD */}
      <BookAnalyticsDashboard
        isOpen={isAnalyticsModalOpen}
        onClose={() => setIsAnalyticsModalOpen(false)}
        initialBookId={book.id}
      />
    </div>
  );
};

export default BookDetails;
