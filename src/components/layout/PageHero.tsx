import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: "default" | "floating-orbs" | "aurora" | "particles" | "mesh" | "waves" | "bubbles";
}

const getBackgroundElements = (variant: string) => {
  switch (variant) {
    case "floating-orbs":
      return (
        <>
          <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-6 left-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[90px] pointer-events-none" />
        </>
      );
    case "aurora":
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-full h-96 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl opacity-60" />
          <div className="absolute top-1/3 -right-1/4 w-full h-80 bg-gradient-to-r from-transparent via-secondary/15 to-transparent blur-3xl opacity-50" />
        </div>
      );
    case "particles":
      return (
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full blur-sm" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary/50 rounded-full blur-sm" />
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-accent/50 rounded-full blur-sm" />
        </div>
      );
    case "mesh":
      return (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute -top-20 right-1/4 w-[450px] h-[450px] bg-secondary/12 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        </>
      );
    case "waves":
      return (
        <>
          <div className="absolute top-1/3 left-0 right-0 h-48 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-0 right-0 h-40 bg-gradient-to-b from-secondary/10 via-secondary/5 to-transparent blur-2xl pointer-events-none" />
        </>
      );
    case "bubbles":
      return (
        <>
          <div className="absolute left-1/4 bottom-4 w-32 h-32 border border-primary/20 rounded-full opacity-40 pointer-events-none" />
          <div className="absolute right-1/4 bottom-8 w-28 h-28 border border-accent/20 rounded-full opacity-40 pointer-events-none" />
        </>
      );
    default:
      return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      );
  }
};

export const PageHero = ({ eyebrow, title, description, children, variant = "default" }: PageHeroProps) => {
  return (
    <section className="bg-background pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-16 md:pb-20 text-foreground border-b border-border/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {getBackgroundElements(variant)}
      </div>
      
      <div className="container relative z-10 text-center max-w-4xl px-4 sm:px-6">
        {eyebrow && (
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-card border border-border/50 text-foreground text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold mb-6 text-balance tracking-tight break-words">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {children && <div className="mt-8 sm:mt-10">{children}</div>}
      </div>
    </section>
  );
};
