import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const REGISTRATION_URL = "https://forms.gle/M6GiaTdkpqH8DWWe6";

const Registration = () => {
  useEffect(() => {
    // Instant direct redirect to official Google Form
    window.location.replace(REGISTRATION_URL);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
      <SEOHead
        title="Redirecting to WSGEN-2026 Registration..."
        description="Redirecting to the official WSGEN-2026 Google Forms registration portal."
        canonical="https://www.eminsphere.com/registration"
      />

      <div className="max-w-xl mx-auto p-8 rounded-3xl bg-card border border-accent/30 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-6">
          <Sparkles className="h-4 w-4" /> WSGEN-2026 Official Registration
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-serif font-black text-white mb-3">
          Redirecting to Official Registration Form
        </h1>
        
        <p className="text-sm text-muted-foreground mb-8">
          Please wait while we redirect you to the official WSGEN-2026 Google Form registration portal. If you are not redirected automatically, please click below:
        </p>

        <Button asChild size="lg" className="rounded-full bg-accent hover:bg-primary text-[#050B14] hover:text-white font-black px-8 h-14 shadow-gold hover:scale-105 transition-all text-base w-full sm:w-auto">
          <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            Open Registration Form <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </main>
  );
};

export default Registration;
