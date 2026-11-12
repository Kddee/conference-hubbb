import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NOMINATION_PROCESS_STEPS } from "@/data/awardsData";
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Upload, 
  ShieldCheck, 
  Clock, 
  HelpCircle,
  Users
} from "lucide-react";

export const AwardsNominationProcess: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Nomination Process & How to Apply | EminSphere Awards"
        description="Detailed 7-step guide to applying for EminSphere Global Innovation & Excellence Awards, dossier submission requirements, and verification protocols."
        canonical="https://www.eminsphere.com/awards-recognition/nomination-process"
      />

      <PageHero
        eyebrow="Application Roadmap"
        title="Nomination & Submission Process"
        description="A structured step-by-step pathway from category selection and dossier compilation through administrative verification and final recognition."
        variant="waves"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Begin Online Application <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/awards-recognition/selection-process">
              Selection & Review Stages
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-16 max-w-5xl px-4 sm:px-6 space-y-12">
        {/* 7-Step Journey */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs uppercase tracking-widest text-accent font-bold">Standard Lifecycle</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Seven Steps to Official Recognition
            </h2>
          </div>

          <div className="space-y-4">
            {NOMINATION_PROCESS_STEPS.map((s, idx) => (
              <Card key={s.step} className="p-6 bg-card border-border/60 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-primary/40 transition-colors">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-lg shrink-0 border border-primary/20">
                  {s.step}
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-foreground">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Nomination Modes Callout */}
        <div className="grid sm:grid-cols-3 gap-4 pt-4">
          <Card className="p-5 bg-card border-border/60 rounded-2xl space-y-2">
            <div className="text-xs font-mono font-bold text-[#c5a059] uppercase">Mode A</div>
            <h4 className="text-sm font-bold text-foreground">Self-Nomination</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Achievers submit directly with their documented career achievements, portfolio, and publication records.
            </p>
          </Card>
          <Card className="p-5 bg-card border-border/60 rounded-2xl space-y-2">
            <div className="text-xs font-mono font-bold text-[#c5a059] uppercase">Mode B</div>
            <h4 className="text-sm font-bold text-foreground">Third-Party Peer Nomination</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Distinguished colleagues, collaborators, or mentors recommend an outstanding candidate with written endorsements.
            </p>
          </Card>
          <Card className="p-5 bg-card border-border/60 rounded-2xl space-y-2">
            <div className="text-xs font-mono font-bold text-[#c5a059] uppercase">Mode C</div>
            <h4 className="text-sm font-bold text-foreground">Institutional Nomination</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Universities, research laboratories, corporate enterprises, or professional bodies sponsor institutional leaders.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
            Ready to Submit Your Nomination Dossier?
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
            Prepare your CV and supporting evidence in advance. Applications are reviewed sequentially.
          </p>
          <Button asChild size="lg" className="bg-primary text-white font-bold px-8 shadow-gold rounded-full">
            <Link to="/awards-recognition/apply">
              Nominate Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AwardsNominationProcess;
