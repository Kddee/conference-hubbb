import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Award, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  Cpu,
  Target
} from "lucide-react";

export const AwardsAbout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="About the Awards | EminSphere Global Innovation & Excellence"
        description="Learn about the origin, ethos, mission, and merit-based governance behind the EminSphere Global Innovation & Excellence Awards."
        canonical="https://www.eminsphere.com/awards-recognition/about"
      />

      <PageHero
        eyebrow="Programme Ethos"
        title="About the Awards"
        description="EminSphere Global Innovation & Excellence Awards celebrate extraordinary intellectual, technological, and societal breakthroughs shaping humanity."
        variant="aurora"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Nominate Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/awards-recognition/categories">
              Explore 18 Disciplines
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-16 max-w-5xl px-4 sm:px-6 space-y-16">
        {/* Mission & Purpose */}
        <section className="space-y-6">
          <div className="border-b border-border/50 pb-4">
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Purpose & Vision</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              Independent Global Recognition
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              EminSphere provides an independent platform dedicated to recognizing exceptional achievements, scholarly excellence, and pioneering technical contributions across diverse international communities.
            </p>
            <p>
              Through a structured evaluation framework, our recognition programmes acknowledge individuals and organizations whose sustained efforts foster intellectual advancement, technological progress, responsible leadership, and positive community transformation.
            </p>
            <p>
              We welcome submissions from researchers, university professors, corporate architects, startup visionaries, and community advocates across India and worldwide.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="space-y-6">
          <div className="border-b border-border/50 pb-4">
            <div className="text-xs uppercase tracking-widest text-accent font-bold">Guiding Values</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              Our Foundational Principles
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border/60 rounded-2xl space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground">Merit & Rigor</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Evaluations are conducted against published criteria, verified documentation, and reproducible research or technical impact.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/60 rounded-2xl space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground">Global Inclusivity</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Open to eligible contributors globally without geographical, demographic, or institutional prejudice.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/60 rounded-2xl space-y-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground">Transparency</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Published processes, clear conflict disclosures, and live online credential verification for all recipients.
              </p>
            </Card>
          </div>
        </section>

        {/* Integration into EminSphere Ecosystem */}
        <section className="p-8 rounded-3xl bg-card border border-border/80 space-y-4">
          <div className="text-xs uppercase tracking-wider font-bold text-primary">Ecosystem Synergies</div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
            Connected to the EminSphere Research & Conference Hub
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The Awards & Recognition portal seamlessly integrates with EminSphere’s international academic conferences, digital conference proceedings, scholarly books, and peer-review networks. Recipients join an active global community of authors, reviewers, and keynote leaders.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Button asChild variant="outline" size="sm" className="text-xs">
              <Link to="/upcoming-conferences">Upcoming Conferences</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="text-xs">
              <Link to="/recent-proceedings">Digital Proceedings</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="text-xs">
              <Link to="/advisory-members">Advisory Members</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AwardsAbout;
