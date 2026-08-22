import { useParams, Link, Navigate } from "react-router-dom";
import { publishedBooks } from "@/data/booksData";
import { PageHero } from "@/components/layout/PageHero";
import { 
  ArrowLeft, 
  ShoppingCart, 
  BookOpen, 
  ShieldCheck, 
  Globe, 
  Copyright, 
  User, 
  Calendar, 
  Sparkles, 
  Share2, 
  ArrowRight,
  Send
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const book = publishedBooks.find(b => b.id === id);

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
        <Link 
          to="/books" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium text-sm group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Book Catalog
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: COVER & PURCHASE CARD */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-card border border-border/60 rounded-3xl shadow-xl flex flex-col items-center text-center overflow-hidden relative">
              <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 p-8 rounded-2xl w-full flex justify-center items-center mb-6 shadow-inner border border-border/40">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full max-w-[240px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-sm" 
                  loading="lazy" 
                />
              </div>

              <div className="w-full space-y-3 mb-6">
                <Button asChild size="lg" className="w-full rounded-2xl shadow-xl py-6 font-bold text-base bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all">
                  <a href={book.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <ShoppingCart className="h-5 w-5" /> Buy on Amazon
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full rounded-xl border-border/70 text-xs font-semibold">
                  <a href="https://forms.gle/dnkfj4mUxXWHGmKXA" target="_blank" rel="noopener noreferrer">
                    Submit Similar Proposal
                  </a>
                </Button>
              </div>

              {/* SPECIFICATION LIST */}
              <div className="w-full text-left space-y-3 pt-4 border-t border-border/50 text-xs text-muted-foreground">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="h-3.5 w-3.5" /> Peer-Reviewed Volume
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
    </div>
  );
};

export default BookDetails;
