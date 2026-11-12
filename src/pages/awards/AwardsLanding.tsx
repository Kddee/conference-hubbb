import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  AWARD_CATEGORIES, 
  AWARD_HIGHLIGHTS, 
  WHO_CAN_BE_NOMINATED, 
  WHY_EMINSPHERE, 
  NOMINATION_PROCESS_STEPS,
  DEFAULT_AWARD_CYCLE,
  AwardCategory
} from "@/data/awardsData";
import { AwardsStorageService } from "@/services/awardsStorage";
import { CategoryModal } from "@/components/awards/CategoryModal";
import { ApplicationTrackerModal } from "@/components/awards/ApplicationTrackerModal";
import { 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Search, 
  Globe, 
  Microscope, 
  Briefcase, 
  Rocket, 
  Trophy, 
  HeartHandshake, 
  ShieldCheck, 
  FileCheck, 
  QrCode,
  Users,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Cpu,
  BrainCircuit,
  Network,
  Cog,
  TrendingUp,
  Factory,
  Handshake,
  Medal,
  HelpCircle,
  FileText
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Microscope,
  BookOpen,
  Lightbulb,
  Cpu,
  BrainCircuit,
  Network,
  Cog,
  Briefcase,
  TrendingUp,
  Rocket,
  Award,
  Factory,
  Handshake,
  Globe,
  HeartHandshake,
  Trophy,
  Medal,
  ShieldCheck,
  FileCheck,
  QrCode
};

export const AwardsLanding: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AwardCategory | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [activeGroupFilter, setActiveGroupFilter] = useState<string>("all");

  const cycle = AwardsStorageService.getAwardCycle();
  const categories = AwardsStorageService.getAwardCategories();

  const filteredCategories = activeGroupFilter === "all"
    ? categories
    : categories.filter(c => c.groupKey === activeGroupFilter);

  const handleOpenCategory = (cat: AwardCategory) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SEOHead 
        title="EminSphere Global Innovation & Excellence Awards"
        description="Discover EminSphere's international recognition programmes celebrating excellence in research, technology, education, entrepreneurship, leadership, and professional achievement."
        canonical="https://www.eminsphere.com/awards-recognition"
      />

      {/* SECTION 1: HERO BANNER */}
      <section className="relative pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#060a17] via-[#091124] to-background border-b border-border/50">
        {/* Visual Backdrops & Stage Lighting Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden opacity-30">
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px]" />
          <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-[#c5a059]/20 rounded-full blur-[130px]" />
        </div>

        {/* Ambient Subtle Stars Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

        <div className="container relative z-10 px-4 sm:px-6 text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/90 border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold uppercase tracking-widest shadow-gold backdrop-blur-md animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" /> EminSphere™ Global Honours Programme
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.1] animate-fade-up">
            EminSphere™ Global Innovation & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#e5c98d] to-[#c5a059]">
              Excellence Awards
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl md:text-2xl font-serif italic text-white/90 tracking-wide animate-fade-up max-w-3xl mx-auto" style={{ animationDelay: '100ms' }}>
            Celebrating Excellence. Recognizing Innovation. Honouring Global Achievements.
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '150ms' }}>
            The EminSphere Global Innovation & Excellence Awards recognize outstanding individuals, professionals, researchers, academicians, entrepreneurs, innovators, and leaders whose achievements and contributions create meaningful impact across their respective fields.
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            Through a merit-based evaluation framework, EminSphere aims to celebrate excellence, encourage innovation, and recognize individuals contributing to professional advancement, research, technology, leadership, and societal development.
          </p>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '250ms' }}>
            <Button asChild size="lg" className="w-full sm:w-auto h-13 px-8 text-sm font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all uppercase tracking-wider">
              <Link to="/awards-recognition/apply">
                Nominate Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-13 px-8 text-sm font-bold rounded-full border-[#c5a059]/50 text-white hover:bg-[#c5a059]/10 transition-all uppercase tracking-wider">
              <a href="#categories-section">
                Explore Award Categories
              </a>
            </Button>

            <Button 
              size="lg" 
              variant="ghost" 
              onClick={() => setTrackerOpen(true)}
              className="w-full sm:w-auto h-13 px-6 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all gap-2"
            >
              <Search className="h-4 w-4" /> Track Existing Nomination
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-10 border-t border-border/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
            <div className="p-3 rounded-xl bg-card/40 border border-border/50">
              <div className="text-2xl sm:text-3xl font-serif font-black text-foreground">18</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">Recognition Categories</div>
            </div>
            <div className="p-3 rounded-xl bg-card/40 border border-border/50">
              <div className="text-2xl sm:text-3xl font-serif font-black text-emerald-400">100%</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">Merit-Based Assessment</div>
            </div>
            <div className="p-3 rounded-xl bg-card/40 border border-border/50">
              <div className="text-2xl sm:text-3xl font-serif font-black text-[#c5a059]">Global</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">International Eligibility</div>
            </div>
            <div className="p-3 rounded-xl bg-card/40 border border-border/50">
              <div className="text-2xl sm:text-3xl font-serif font-black text-accent">Tamper-Proof</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">QR Verified Credentials</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="container py-16 sm:py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-center bg-card/60 border border-border/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-elegant">
          <div className="md:col-span-8 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">
              Platform Overview
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground tracking-tight">
              Recognizing Excellence Across Disciplines
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              EminSphere provides an independent platform for recognizing exceptional achievements and professional contributions across diverse disciplines.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our awards aim to acknowledge individuals whose work demonstrates innovation, leadership, research excellence, entrepreneurship, professional expertise, and positive societal impact.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We welcome nominations from individuals across academic institutions, research organizations, industries, businesses, technology sectors, and professional communities.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3 border-t md:border-t-0 md:border-l border-border/60 pt-6 md:pt-0 md:pl-8">
            <div className="text-xs uppercase tracking-wider font-bold text-[#c5a059]">Programme Highlights</div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Independent peer-review
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Clear published criteria
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Transparent conflict policy
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> Public certificate registry
            </div>

            <div className="pt-3">
              <Button asChild variant="outline" size="sm" className="w-full text-xs font-bold">
                <Link to="/awards-recognition/about">
                  Learn More About EminSphere <ChevronRight className="h-3.5 w-3.5 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AWARD HIGHLIGHTS */}
      <section className="bg-primary/5 py-16 sm:py-24 border-y border-border/50">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Six Pillars of Distinction</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Core Recognition Highlights
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Each discipline honors authentic merit, demonstrated outcomes, and sustained professional integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARD_HIGHLIGHTS.map((hl) => {
              const IconComp = iconMap[hl.icon] || Award;
              return (
                <Card 
                  key={hl.id} 
                  className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl hover:-translate-y-1 hover:border-[#c5a059]/40 hover:shadow-elegant transition-smooth flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-xl bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center border border-[#c5a059]/20">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground">{hl.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: AWARD CATEGORIES (18 CATEGORIES) */}
      <section id="categories-section" className="container py-20 sm:py-28 max-w-7xl scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-accent font-bold">18 Comprehensive Categories</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Explore Our Recognition Categories
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Honouring outstanding achievers across academic, technological, entrepreneurial, and industrial frontiers.
          </p>

          {/* Group Filter Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {[
              { key: "all", label: "All 18 Categories" },
              { key: "academic", label: "Academic & Research" },
              { key: "technology", label: "Technology & Innovation" },
              { key: "business", label: "Business & Entrepreneurship" },
              { key: "professional", label: "Professional & Industry" },
              { key: "social", label: "Social Impact & Lifetime" }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveGroupFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeGroupFilter === tab.key
                    ? "bg-primary text-white shadow-gold"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 18 Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComp = iconMap[cat.iconName] || Award;
            return (
              <Card 
                key={cat.id} 
                className="p-6 bg-card border-border/60 rounded-2xl hover:border-primary/50 transition-smooth flex flex-col justify-between group shadow-sm hover:shadow-elegant"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                      #{cat.number}
                    </span>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-accent mb-1">
                      {cat.group}
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-border/50 flex items-center justify-between gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleOpenCategory(cat)}
                    className="text-xs text-muted-foreground hover:text-foreground font-semibold px-2.5"
                  >
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    asChild 
                    className="text-xs font-bold bg-primary/15 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Link to={`/awards-recognition/apply?category=${cat.id}`}>
                      Nominate Now <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: WHO CAN BE NOMINATED? */}
      <section className="bg-primary/5 py-16 sm:py-24 border-y border-border/50">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Diverse Global Reach</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Who Can Be Nominated?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Open to achievers and visionaries across the world whose contributions shape modern disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {WHO_CAN_BE_NOMINATED.map((nominee, idx) => (
              <div 
                key={idx} 
                className="p-3.5 rounded-xl bg-card border border-border/60 flex items-center gap-3 text-xs sm:text-sm font-medium text-foreground hover:border-[#c5a059]/40 transition-colors"
              >
                <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span>{nominee}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground italic">
            * Eligibility depends on the specific documented requirements of the chosen award category.
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY EMINSPHERE RECOGNITION? */}
      <section className="container py-20 sm:py-28 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest text-accent font-bold">Trust & Integrity</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
            Why EminSphere Recognition?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Celebrating contributions that matter through structured, verifiable evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_EMINSPHERE.map((feature) => {
            const IconComp = iconMap[feature.icon] || Award;
            return (
              <Card key={feature.id} className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl space-y-3">
                <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <IconComp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
          
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-card to-accent/10 border-2 border-primary/30 rounded-2xl flex flex-col justify-center text-center space-y-3">
            <h3 className="text-lg font-serif font-bold text-foreground">Verify Any Credential</h3>
            <p className="text-xs text-muted-foreground">
              Every certificate issued includes a live cryptographic QR code and unique ID.
            </p>
            <Button asChild size="sm" variant="outline" className="text-xs font-bold w-fit mx-auto">
              <Link to="/verify-certificate">
                Go to Verification Portal <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* SECTION 7: NOMINATION PROCESS */}
      <section className="bg-card/40 py-20 sm:py-28 border-y border-border/50">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Step-by-Step Pathway</div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              How to Apply: Nomination Process
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              A transparent 7-step journey from self or third-party nomination to official recognition.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {NOMINATION_PROCESS_STEPS.map((s, idx) => (
              <div 
                key={s.step} 
                className="p-4 rounded-xl bg-card border border-border/60 flex flex-col justify-between space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#c5a059] font-mono">Step {s.step}</span>
                  {idx < NOMINATION_PROCESS_STEPS.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-muted-foreground hidden md:block" />
                  )}
                </div>
                <h4 className="text-xs font-bold text-foreground leading-snug">{s.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-black px-10 shadow-gold rounded-full text-sm uppercase tracking-wider">
              <Link to="/awards-recognition/apply">
                Submit Your Nomination <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8: IMPORTANT DATES */}
      <section className="container py-20 sm:py-28 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-accent font-bold">Official Calendar</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
            Current Award Cycle Dates
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {cycle.cycleName} — All deadlines are strictly administered by the Awards Council.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Nomination Opening</div>
            <div className="text-base font-bold text-foreground">{cycle.nominationOpeningDate}</div>
            <div className="text-[11px] text-emerald-400">Portal Open for Submissions</div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Early Nomination Deadline</div>
            <div className="text-base font-bold text-[#c5a059]">{cycle.earlyNominationDeadline}</div>
            <div className="text-[11px] text-muted-foreground">Priority Screening Track</div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Final Nomination Deadline</div>
            <div className="text-base font-bold text-rose-400">{cycle.finalNominationDeadline}</div>
            <div className="text-[11px] text-muted-foreground">Portal Closes at 23:59 IST</div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Evaluation Period</div>
            <div className="text-base font-bold text-foreground">{cycle.evaluationPeriod}</div>
            <div className="text-[11px] text-muted-foreground">Independent Committee Review</div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Result Announcement</div>
            <div className="text-base font-bold text-accent">{cycle.resultAnnouncementDate}</div>
            <div className="text-[11px] text-muted-foreground">Direct Email & Public Listing</div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Recognition Ceremony</div>
            <div className="text-base font-bold text-[#f3e5c8]">{cycle.recognitionCeremonyDate}</div>
            <div className="text-[11px] text-emerald-400">Mode: {cycle.ceremonyMode} Ceremony</div>
          </div>
        </div>
      </section>

      {/* SECTION 9: AWARD RECOGNITION & BENEFITS */}
      <section className="bg-primary/5 py-16 sm:py-24 border-y border-border/50">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Recipient Honors</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Recognition That Celebrates Achievement
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Selected recipients under eligible award categories receive comprehensive honours documentation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Award Certificate", desc: "Official EminSphere landscape credential with unique tamper-proof ID" },
              { title: "Citation Letter", desc: "Formal executive citation acknowledging category-specific impact" },
              { title: "Digital Badge", desc: "High-resolution digital badge for professional profiles and websites" },
              { title: "Directory Listing", desc: "Permanent verified listing in the EminSphere Recipient Directory" },
              { title: "Public Announcement", desc: "Official press release and social media feature announcement" },
              { title: "Ceremony Invitation", desc: "Delegate invitation to the annual recognition ceremony" },
              { title: "Trophy / Memento", desc: "Commemorative bespoke award trophy where applicable" },
              { title: "Global Networking", desc: "Access to the international EminSphere professional consortium" }
            ].map((b, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-border/60 space-y-1 text-left">
                <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mb-2">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold text-foreground">{b.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            * All benefits are specified for the applicable award category and communicated transparently prior to any payment, if any.
          </div>
        </div>
      </section>

      {/* SECTION 10: CALL TO ACTION */}
      <section className="container py-20 sm:py-28 max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1429] via-[#091024] to-[#04060c] border-2 border-[#c5a059]/40 p-8 sm:p-14 md:p-16 text-center shadow-2xl text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#f3e5c8] text-xs font-bold uppercase tracking-wider border border-white/15">
            <Award className="h-4 w-4" /> Global Recognition Call
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold tracking-tight">
            Your Achievements Deserve Recognition
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have you made a meaningful contribution to research, technology, education, business, leadership, or society? Submit your nomination for consideration under the EminSphere Global Innovation & Excellence Awards.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto h-13 px-8 text-sm font-black rounded-full bg-primary text-white hover:bg-primary/90 shadow-gold uppercase tracking-wider">
              <Link to="/awards-recognition/apply">
                Nominate Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-13 px-8 text-sm font-bold rounded-full border-white/30 text-white hover:bg-white/10 uppercase tracking-wider">
              <a href="#categories-section">
                View Award Categories
              </a>
            </Button>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
            <span>Official Portal: eminsphere.com/awards-recognition</span>
            <span>•</span>
            <span>Inquiries: info@eminsphere.com</span>
          </div>
        </div>
      </section>

      {/* Category Modal Detail */}
      <CategoryModal 
        category={selectedCategory} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />

      {/* Application Tracker Modal */}
      <ApplicationTrackerModal 
        isOpen={trackerOpen} 
        onClose={() => setTrackerOpen(false)} 
      />
    </div>
  );
};

export default AwardsLanding;
