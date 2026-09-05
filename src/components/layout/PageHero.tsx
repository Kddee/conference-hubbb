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
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-pulse" style={{animation: "float-orb-1 15s ease-in-out infinite"}} />
          <div className="absolute top-40 right-1/4 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[100px]" style={{animation: "float-orb-2 18s ease-in-out infinite"}} />
          <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[90px]" style={{animation: "float-orb-3 12s ease-in-out infinite"}} />
        </>
      );
    case "aurora":
      return (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-1/2 w-full h-96 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-3xl" style={{animation: "aurora-wave 8s ease-in-out infinite"}} />
            <div className="absolute top-1/3 -left-1/2 w-full h-80 bg-gradient-to-r from-transparent via-secondary/20 to-transparent blur-3xl" style={{animation: "aurora-wave 10s ease-in-out infinite 2s"}} />
          </div>
        </>
      );
    case "particles":
      return (
        <>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full blur-sm" style={{animation: "particle-drift-1 8s ease-out infinite"}} />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary/50 rounded-full blur-sm" style={{animation: "particle-drift-2 9s ease-out infinite 1s"}} />
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-accent/50 rounded-full blur-sm" style={{animation: "particle-drift-3 7s ease-out infinite 0.5s"}} />
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full blur-sm" style={{animation: "particle-drift-1 10s ease-out infinite 2s"}} />
          <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-secondary/40 rounded-full blur-sm" style={{animation: "particle-drift-2 8s ease-out infinite 1.5s"}} />
        </>
      );
    case "mesh":
      return (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] mix-blend-screen" style={{animation: "mesh-shift 20s ease-in-out infinite"}} />
          <div className="absolute -top-40 right-1/4 w-[450px] h-[450px] bg-secondary/12 rounded-full blur-[130px] mix-blend-screen" style={{animation: "mesh-shift 15s ease-in-out infinite 3s"}} />
          <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" style={{animation: "mesh-shift 18s ease-in-out infinite 1.5s"}} />
        </>
      );
    case "waves":
      return (
        <>
          <div className="absolute top-1/3 left-0 right-0 h-48 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent blur-2xl" style={{animation: "wave-motion 6s ease-in-out infinite"}} />
          <div className="absolute top-1/2 left-0 right-0 h-40 bg-gradient-to-b from-secondary/15 via-secondary/5 to-transparent blur-2xl" style={{animation: "wave-motion 8s ease-in-out infinite 1s", animationDirection: "reverse"}} />
        </>
      );
    case "bubbles":
      return (
        <>
          <div className="absolute left-1/4 bottom-0 w-32 h-32 border border-primary/30 rounded-full" style={{animation: "bubble-rise 8s ease-out infinite"}} />
          <div className="absolute left-1/3 bottom-0 w-24 h-24 border border-secondary/25 rounded-full" style={{animation: "bubble-rise 10s ease-out infinite 1s"}} />
          <div className="absolute right-1/4 bottom-0 w-28 h-28 border border-accent/20 rounded-full" style={{animation: "bubble-rise 9s ease-out infinite 0.5s"}} />
          <div className="absolute right-1/3 bottom-0 w-20 h-20 border border-primary/20 rounded-full" style={{animation: "bubble-rise 11s ease-out infinite 1.5s"}} />
        </>
      );
    default:
      return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
      );
  }
};

export const PageHero = ({ eyebrow, title, description, children, variant = "default" }: PageHeroProps) => {
  return (
    <section className="bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 text-foreground border-b border-border/50 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {getBackgroundElements(variant)}
      </div>
      
      <div className="container relative z-10 text-center max-w-4xl px-4 sm:px-6">
        {eyebrow && (
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-card border border-border/50 text-foreground text-xs font-semibold uppercase tracking-widest mb-6 animate-fade-in shadow-sm">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold mb-6 text-balance tracking-tight animate-fade-up break-words">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-balance animate-fade-up max-w-2xl mx-auto" style={{animationDelay: '100ms'}}>
            {description}
          </p>
        )}
        {children && <div className="mt-8 sm:mt-10 animate-fade-up" style={{animationDelay: '200ms'}}>{children}</div>}
      </div>
    </section>
  );
};
