import { useParams, Link, Navigate } from "react-router-dom";
import { publishedBooks } from "@/data/booksData";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowLeft, ShoppingCart, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const book = publishedBooks.find(b => b.id === id);

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  return (
    <>
      <PageHero
        eyebrow="Book Details"
        title={book.title}
        description={book.subtitle || "A Comprehensive Guide"}
        variant="aurora"
      />

      <section className="container py-16 md:py-24 max-w-5xl mx-auto">
        <Link 
          to="/books" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Books
        </Link>

        <Card className="overflow-hidden border-0 shadow-elegant bg-card flex flex-col md:flex-row gap-8 p-8 md:p-12">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center items-start">
            <div className="bg-white p-4 rounded-xl shadow-md border border-border/50">
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-full max-w-[300px] h-auto object-contain drop-shadow-xl" 
                loading="lazy" 
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full md:w-2/3 flex flex-col">
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">{book.title}</h2>
            {book.subtitle && <h3 className="text-xl text-muted-foreground mb-6 font-medium">{book.subtitle}</h3>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-6 bg-muted/30 rounded-xl border border-border/50">
              <div>
                <strong className="block text-primary text-sm uppercase tracking-wider mb-1">Author(s)</strong>
                <span className="text-muted-foreground font-medium">{book.authors}</span>
              </div>
              <div>
                <strong className="block text-primary text-sm uppercase tracking-wider mb-1">ISBN</strong>
                <span className="text-muted-foreground font-medium">{book.isbn}</span>
              </div>
              <div>
                <strong className="block text-primary text-sm uppercase tracking-wider mb-1">Publication Date</strong>
                <span className="text-muted-foreground font-medium">{book.date}</span>
              </div>
            </div>

            <div className="mb-8 flex-1">
              <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                About This Book
              </h4>
              <div className="text-muted-foreground leading-relaxed text-lg space-y-4">
                {book.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-border/50 flex gap-4">
              <a 
                href={book.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex w-full md:w-auto justify-center items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <ShoppingCart className="h-5 w-5" />
                Buy on Amazon
              </a>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default BookDetails;
