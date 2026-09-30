import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Users, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  FileText 
} from "lucide-react";

const REGISTRATION_FORM_URL = "https://forms.gle/ERnrg38rgf4hf16y5";

const benefits = [
  { 
    title: "Global Scholarly Network", 
    desc: "Connect directly with Silicon Valley GenAI architects, university chairs, and researchers across 50+ nations.",
    icon: <Users className="h-6 w-6 text-accent" />
  },
  { 
    title: "Official ISBN Proceedings", 
    desc: "All accepted papers receive official ISBN 978-81-981245-4-1 cataloging and persistent DOI indexing.",
    icon: <BookOpen className="h-6 w-6 text-accent" />
  },
  { 
    title: "Scopus & WoS Journal Track", 
    desc: "Top 15% high-impact manuscripts fast-tracked for publication in partner Scopus (Q1/Q2) & WoS indexed journals.",
    icon: <Award className="h-6 w-6 text-accent" />
  },
];

const highlights = [
  "Instant digital registration confirmation & paper submission routing",
  "Dual-Stage Hybrid participation credentials (Worldwide Virtual 24/7 interactive access)",
  "Official institutional Letter of Invitation for travel and academic clearance",
  "Assigned session slot with live interactive Q&A and verified presentation certification",
  "Permanent digital repository archiving across Google Scholar & academic indices"
];

const Registration = () => (
  <main className="min-h-screen bg-background text-foreground">
    <SEOHead
      title="Official Registration | WSGEN-2026 • World Summit on Generative AI & Autonomous Systems"
      description="Register for WSGEN-2026: World Summit on Generative AI, Frontier Technologies & Intelligent Autonomous Systems. Final registration deadline: 23 October 2026."
      canonical="https://www.eminsphere.com/registration"
    />

    {/* HERO */}
    <div className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-36 overflow-hidden bg-primary text-primary-foreground border-b border-border/40">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
      
      <div className="container relative z-10 text-center max-w-4xl px-4">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-bold text-xs sm:text-sm tracking-wider uppercase mb-4 sm:mb-6 backdrop-blur-md border border-primary-foreground/20">
          <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent fill-accent" /> Official Registration Portal
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black mb-4 sm:mb-6 leading-tight text-white drop-shadow-md break-words">
          Conference <span className="text-accent">Registration</span>
        </h1>
        
        <p className="text-sm sm:text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
          World Summit on Generative AI, Frontier Technologies & Intelligent Autonomous Systems (WSGEN-2026)
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-white/90">
          <span className="inline-flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Calendar className="h-3.5 w-3.5 text-accent" /> Summit: 27 October 2026
          </span>
          <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent font-bold px-3.5 py-1.5 rounded-full border border-accent/30">
            <Clock className="h-3.5 w-3.5" /> Closes: 23 October 2026
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Globe className="h-3.5 w-3.5 text-accent" /> Hybrid • Worldwide Virtual
          </span>
        </div>
      </div>
    </div>

    {/* BENEFITS SECTION */}
    <section className="container py-0 -mt-8 sm:-mt-16 md:-mt-24 relative z-20 mb-12 sm:mb-20 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {benefits.map((b, idx) => (
          <Card key={idx} className="relative overflow-hidden flex flex-col p-6 sm:p-8 transition-all duration-300 shadow-xl border-border hover:border-accent/40 bg-card/95 backdrop-blur hover:-translate-y-1 rounded-2xl sm:rounded-3xl">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
              {b.icon}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2 sm:mb-3">{b.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{b.desc}</p>
          </Card>
        ))}
      </div>
    </section>

    {/* REGISTRATION DIRECT PORTAL SECTION (FORMLESS) */}
    <section id="register-portal" className="py-12 sm:py-20 bg-muted/30 border-t border-border/40">
      <div className="container max-w-5xl px-4">
        <div className="relative rounded-3xl p-6 sm:p-12 bg-gradient-to-b from-card via-card to-background border border-accent/25 shadow-2xl overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="h-3.5 w-3.5" /> Official Google Forms Registration Portal
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white mb-4 leading-tight">
              Complete Your Registration Online
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              All author, speaker, and delegate registrations for <strong className="text-white">WSGEN-2026 (World Summit on Generative AI, Frontier Technologies & Intelligent Autonomous Systems)</strong> are submitted directly through the official registration portal.
            </p>

            {/* Direct Form CTA Button */}
            <div className="mb-10">
              <Button asChild size="lg" className="rounded-full bg-accent hover:bg-primary text-[#050B14] hover:text-white font-black text-base sm:text-lg px-8 sm:px-12 h-14 sm:h-16 shadow-[0_0_35px_rgba(16,185,129,0.35)] hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <FileText className="h-5 w-5" /> Open Official Registration Form <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
              <div className="mt-3 text-xs text-muted-foreground">
                Opens directly in a new tab: <span className="text-accent underline font-mono">{REGISTRATION_FORM_URL}</span>
              </div>
            </div>

            {/* Highlights Box */}
            <div className="text-left bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" /> What Happens After You Submit:
              </div>
              <ul className="space-y-3">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Desk Notice */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <span>Organized by Eminsphere Global Academic Publishing & Summits</span>
              <a href="mailto:info@eminsphere.com" className="text-accent hover:underline font-mono">
                Need Help? Contact: info@eminsphere.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Registration;
