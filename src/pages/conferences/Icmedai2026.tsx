import React, { useState, useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Globe,
  Cpu,
  Zap,
  Network,
  Database,
  HeartPulse,
  Laptop,
  FileCheck2,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Presentation,
  Flame,
  BadgeCheck,
  Building2,
  Activity,
  Dna
} from "lucide-react";

const REGISTRATION_DEADLINE_DATE = new Date("2026-12-18T23:59:59+08:00");
const CONFERENCE_TARGET_DATE = new Date("2026-12-20T09:00:00+08:00");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [countdown, setCountdown] = useState(calc);
  useEffect(() => {
    const timer = setInterval(() => setCountdown(calc()), 1000);
    return () => clearInterval(timer);
  }, []);
  return countdown;
}

const conferenceData = {
  id: "ICMEDAI-2026",
  shortTitle: "ICMEDAI-2026",
  fullTitle: "International Conference on Generative AI in Healthcare, Precision Medicine & Digital Biology",
  fullForm: "International Conference on Generative AI in Healthcare, Precision Medicine & Digital Biology (ICMEDAI-2026)",
  theme: "Next-Gen Bio-Intelligence: Foundation Models, Generative Drug Discovery & Autonomous Healthcare Systems",
  tagline: "The Premier Global Scientific Forum Connecting Medical AI Innovators, Clinical Researchers & Digital Biology Leaders",
  date: "Sunday, 20 December 2026",
  registrationDeadline: "18 December 2026",
  mode: "Hybrid Mode • Worldwide Virtual",
  registrationLink: "https://forms.gle/M6GiaTdkpqH8DWWe6",
  cmtLink: "https://cmt3.research.microsoft.com",
  
  about: [
    "The International Conference on Generative AI in Healthcare, Precision Medicine & Digital Biology (ICMEDAI-2026) is the leading global congress addressing transformative breakthroughs at the intersection of deep generative models, bioinformatics, medical diagnostics, and personalized therapeutics.",
    "Held in Hybrid Mode on Sunday, 20 December 2026, ICMEDAI-2026 convenes a premier international community of clinicians, biomedical engineers, pharmaceutical scientists, and AI architects from across 50+ countries. The conference provides an expedited double-blind peer-reviewed venue examining de novo molecular generation, clinical LLMs, protein language models, and AI-enabled robotic surgery.",
    "All accepted and registered papers will be published in official Conference Proceedings with assigned ISBN registration, submitted for global indexing across Google Scholar, with top-tier research fast-tracked for publication in partner Scopus and Web of Science (WoS) indexed special issues."
  ],

  highlights: [
    { stat: "50+", label: "Nations Represented", desc: "Global medical AI & biotech delegates" },
    { stat: "6", label: "Specialized Tracks", desc: "Drug Design, Medical LLMs & Bio-AI" },
    { stat: "20 Dec", label: "Conference Sunday", desc: "One-day high-impact global summit" },
    { stat: "ISBN", label: "Official Proceedings", desc: "Global Cataloging & DOI assigned" }
  ],

  pillars: [
    {
      icon: HeartPulse,
      title: "Generative HealthTech Focus",
      desc: "Dedicated to the world's most vital applied AI frontiers: De novo molecular generation, clinical foundation models, and patient digital twins."
    },
    {
      icon: Users,
      title: "Interdisciplinary Convergence",
      desc: "Connect clinicians, pharmaceutical innovators, computer scientists, and bioinformaticians from top medical schools and research hospitals."
    },
    {
      icon: BookOpen,
      title: "ISBN Proceedings & Scopus Fast-Track",
      desc: "All accepted papers receive official ISBN publication with permanent DOIs, with top 15% high-impact manuscripts recommended for Scopus/WoS partner journals."
    },
    {
      icon: Globe,
      title: "Global Dual-Stage Hybrid Platform",
      desc: "Participate either on-site or virtually via our low-latency interactive broadcast, synchronized across global time zones for international reach."
    },
    {
      icon: ShieldCheck,
      title: "Double-Blind Peer Review",
      desc: "Rigorous technical and clinical evaluation by our international review panel ensuring high scientific integrity and clinical applicability."
    },
    {
      icon: Award,
      title: "Prestigious Global Honors & Citations",
      desc: "Recognizing outstanding research with the Best Research Paper Gold Award, Best Clinical AI Innovation Award, and Best Student Presenter Citation."
    }
  ],

  tracks: [
    {
      id: "track-1",
      number: "01",
      icon: Cpu,
      title: "Generative AI for Molecular Design & De Novo Drug Discovery",
      topics: [
        "Chemical language models and generative diffusion models for molecular generation",
        "Target binding affinity prediction, lead optimization & ADMET profiling",
        "AI-accelerated virtual screening and quantitative structure-activity relationship (QSAR)",
        "Automated retrosynthesis planning and robotic chemical synthesis integration",
        "Generative peptide, antibody, and small-molecule therapeutics design"
      ]
    },
    {
      id: "track-2",
      number: "02",
      icon: HeartPulse,
      title: "Clinical Foundation Models & Medical Diagnostic Intelligence",
      topics: [
        "Multimodal medical foundation models (integrating EHR, pathology, genomics, and imaging)",
        "Clinical LLMs for automated medical documentation, discharge summaries & coding",
        "Radiology AI, automated MRI/CT lesion segmentation, and oncological prognosis",
        "Diagnostic reasoning benchmarks, clinical hallucination mitigation & factuality validation",
        "Clinical decision support systems (CDSS) with human-in-the-loop validation"
      ]
    },
    {
      id: "track-3",
      number: "03",
      icon: Dna,
      title: "Genomic AI, Protein Folding & Computational Bio-Intelligence",
      topics: [
        "Protein language models (ESM) and structural conformation forecasting",
        "CRISPR on-target/off-target prediction and genomic sequence transformers",
        "Single-cell RNA sequencing analytics and cellular spatial transcriptomics",
        "Deep learning for multi-omics integration and personalized cancer immunogenomics",
        "Evolutionary dynamics modeling and pathogen mutation trajectory forecasting"
      ]
    },
    {
      id: "track-4",
      number: "04",
      icon: Activity,
      title: "Digital Twins in Healthcare & Patient Simulation Ecosystems",
      topics: [
        "In-silico clinical trials and synthetic control arm generation",
        "Organ-level and cardiovascular digital twins for personalized hemodynamics",
        "Continuous physiological monitoring using wearable sensors and predictive AI",
        "Intensive care unit (ICU) predictive sepsis and deterioration modeling",
        "Simulation-based surgical training and patient-specific preoperative planning"
      ]
    },
    {
      id: "track-5",
      number: "05",
      icon: Zap,
      title: "Autonomous Surgical Robotics & Computer-Assisted Intervention",
      topics: [
        "Real-time intraoperative surgical navigation and augmented reality (AR) overlay",
        "Sub-millimeter autonomous tissue manipulation and suture planning",
        "Computer vision in laparoscopy, endoscopy, and robotic surgery",
        "Tactile and haptic feedback systems for minimally invasive robotic surgery",
        "Safety verification and autonomous fail-safe mechanisms in operating rooms"
      ]
    },
    {
      id: "track-6",
      number: "06",
      icon: ShieldCheck,
      title: "Health Data Privacy, Federated Learning & Ethical Bio-Governance",
      topics: [
        "Privacy-preserving federated learning across international hospital networks",
        "Differential privacy and cryptographic synthetic medical data generation",
        "HIPAA, GDPR, and global medical AI compliance frameworks",
        "Algorithmic fairness, demographic bias elimination in healthcare AI",
        "Post-quantum cryptographic security for electronic health records and bio-banks"
      ]
    }
  ],

  milestones: [
    {
      step: "01",
      title: "Call for Papers & Submissions",
      date: "Active & Open",
      desc: "Submissions portal accepting full research manuscripts, case studies, and clinical abstracts."
    },
    {
      step: "02",
      title: "Paper / Abstract Submission Deadline",
      date: "13 December 2026",
      desc: "Final deadline to submit papers for double-blind peer review."
    },
    {
      step: "03",
      title: "Final Registration & Camera-Ready",
      date: "18 December 2026",
      desc: "Deadline for author registration and final publication-ready manuscript upload."
    },
    {
      step: "04",
      title: "International Conference Sessions",
      date: "20 December 2026 (Sunday)",
      desc: "Keynote addresses, technical presentation tracks, clinical case sessions & global awards."
    }
  ],

  publication: [
    {
      title: "ISBN Conference Proceedings",
      img: "https://i.postimg.cc/VvnzKNKj/image.png",
      desc: "All accepted and registered papers will be published in official conference proceedings with an assigned ISBN Number, ensuring global visibility, citation, and academic recognition."
    },
    {
      title: "Google Scholar Indexing",
      img: "/google-scholar.svg",
      desc: "All published papers will be indexed in Google Scholar, providing broad international accessibility, citation tracking, and enhanced author visibility."
    },
    {
      title: "Web of Science & Scopus Fast-Track",
      img: "https://i.postimg.cc/0NX5QF6x/image.png",
      desc: "Selected high-impact papers may be recommended for submission to partner journals indexed in Scopus and Web of Science, based on quality and editorial evaluation."
    },
    {
      title: "DOI & Digital Preservation",
      img: "/doi-logo.svg",
      desc: "Each published manuscript will be assigned a permanent Digital Object Identifier (DOI) to ensure permanent accessibility and citation durability."
    }
  ],

  awards: [
    {
      title: "Best Research Paper Gold Award",
      desc: "Conferred upon the manuscript demonstrating outstanding scientific innovation, theoretical depth, and translational impact in AI for healthcare.",
      badge: "Gold Award"
    },
    {
      title: "Best Clinical AI Innovation Award",
      desc: "Honors groundbreaking research with demonstrable clinical trial relevance, diagnostics impact, or therapeutic advancement.",
      badge: "Healthcare Honor"
    },
    {
      title: "Best Student Presenter Award",
      desc: "Recognizes exceptional clarity, technical competence, and presentation mastery by student researchers.",
      badge: "Excellence"
    }
  ],

  faqs: [
    {
      q: "What is the primary scope of ICMEDAI-2026?",
      a: "ICMEDAI-2026 focuses on Generative AI in healthcare, molecular drug discovery, clinical foundation models, genomic AI, patient digital twins, and autonomous surgical robotics."
    },
    {
      q: "Can researchers participate and present virtually?",
      a: "Yes. ICMEDAI-2026 features a dual-stage hybrid platform allowing international authors to present live online with interactive Q&A sessions and digital certification."
    },
    {
      q: "How are the conference proceedings published and indexed?",
      a: "Accepted and registered papers are published in the official Conference Proceedings with assigned ISBN registration, submitted for indexing in Google Scholar, and assigned permanent DOIs. Select papers are fast-tracked for Scopus and Web of Science partner issues."
    },
    {
      q: "What is the review turnaround time?",
      a: "Our double-blind review process is expedited yet rigorous, providing authors with constructive reviewer critique within 3 to 5 business days."
    }
  ]
};

const Icmedai2026 = () => {
  const countdown = useCountdown(CONFERENCE_TARGET_DATE);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#050B14] text-foreground selection:bg-primary selection:text-primary-foreground font-sans relative overflow-hidden">
      <SEOHead
        title="ICMEDAI-2026 | International Conference on Generative AI in Healthcare & Precision Medicine"
        description="Join ICMEDAI-2026 on Sunday, 20 December 2026. A premier global conference exploring Generative AI in medicine, drug discovery, clinical LLMs & digital biology. ISBN Proceedings & Scopus Fast-Track."
        canonical="https://www.eminsphere.com/icmedai-2026"
        schema={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: conferenceData.fullTitle,
          description: conferenceData.theme,
          startDate: "2026-12-20T09:00:00+08:00",
          endDate: "2026-12-20T19:00:00+08:00",
          eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          organizer: {
            "@type": "Organization",
            name: "Eminsphere International",
            url: "https://www.eminsphere.com"
          }
        }}
      />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-150px] left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px]" />
        <div className="absolute top-[100px] right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-white/10">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles className="h-4 w-4" />
            <span>Upcoming Hybrid Global Summit • December 2026</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto">
            {conferenceData.fullTitle}
          </h1>

          {/* Subtitle / Theme */}
          <p className="text-lg sm:text-2xl font-serif text-accent font-semibold mb-4 max-w-4xl mx-auto">
            "{conferenceData.theme}"
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            {conferenceData.tagline}
          </p>

          {/* COUNTDOWN TIMER */}
          <div className="max-w-xl mx-auto mb-10 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold flex items-center justify-center gap-2">
              <Clock className="h-3.5 w-3.5 text-accent" /> Countdown to Conference Sessions
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="bg-black/40 rounded-xl p-2 sm:p-3 border border-white/5">
                <div className="text-xl sm:text-3xl font-black text-primary font-mono">{countdown.days}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium">Days</div>
              </div>
              <div className="bg-black/40 rounded-xl p-2 sm:p-3 border border-white/5">
                <div className="text-xl sm:text-3xl font-black text-primary font-mono">{countdown.hours}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium">Hours</div>
              </div>
              <div className="bg-black/40 rounded-xl p-2 sm:p-3 border border-white/5">
                <div className="text-xl sm:text-3xl font-black text-primary font-mono">{countdown.minutes}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium">Mins</div>
              </div>
              <div className="bg-black/40 rounded-xl p-2 sm:p-3 border border-white/5">
                <div className="text-xl sm:text-3xl font-black text-accent font-mono">{countdown.seconds}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium">Secs</div>
              </div>
            </div>
          </div>

          {/* Quick Meta Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Conference: {conferenceData.date}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <span>{conferenceData.mode}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>Official ISBN Proceedings</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
              <Award className="h-4 w-4 text-accent" />
              <span>Scopus & WoS Track</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black h-12 sm:h-14 px-8 rounded-full shadow-gold hover:-translate-y-0.5 transition-all text-sm sm:text-base">
              <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer">
                Register Online (Before 18 Dec) <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-accent/15 hover:bg-accent/25 border-accent/40 text-accent font-bold h-12 sm:h-14 px-8 rounded-full shadow-md hover:-translate-y-0.5 transition-all text-sm sm:text-base">
              <a href={conferenceData.cmtLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Submit via CMT <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border-white/20 text-white font-bold h-12 sm:h-14 px-7 rounded-full transition-all text-sm sm:text-base">
              <a href="#tracks">Explore Bio-AI Tracks</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAST FACTS BAR */}
      <section className="container max-w-6xl relative z-20 -mt-8 sm:-mt-10 mb-16 sm:mb-24 px-4 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {conferenceData.highlights.map((h, i) => (
            <Card key={i} className="glass-strong border-white/10 p-5 rounded-2xl flex flex-col items-center text-center shadow-lg hover:border-primary/40 transition-colors">
              <div className="text-2xl sm:text-4xl font-serif font-black text-primary mb-1">{h.stat}</div>
              <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">{h.label}</div>
              <div className="text-[11px] text-muted-foreground">{h.desc}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* GLOBAL HEALTHCARE AI & BIOTECH LEADERSHIP BANNER */}
      <section className="container max-w-6xl mb-16 sm:mb-20 px-4 mx-auto">
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-primary/15 via-card to-accent/15 border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="h-3.5 w-3.5" /> International HealthTech & Bio-AI Network
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-2 leading-snug">
                Pioneering the Next Era of Generative Medicine & Computational Biology
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                ICMEDAI-2026 establishes an interdisciplinary summit uniting clinicians, pharma researchers, bioinformaticians, and AI computer scientists across 50+ nations. Authors gain rapid high-standard peer review, international citation reach, and access to global healthcare technology leadership.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Globe className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">50+ Nations Participating</div>
                  <div className="text-[10px] text-muted-foreground">USA, UK, Germany, Canada, Switzerland & more</div>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Hospital & Pharma Innovators</div>
                  <div className="text-[10px] text-muted-foreground">Academic medical centers & biotech laboratories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ATTEND / VALUE PILLARS */}
      <section className="py-12 sm:py-20 bg-card/20 border-y border-border/40">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
              <BadgeCheck className="h-4 w-4" /> Global Value Proposition
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Why Researchers & Clinicians Choose ICMEDAI-2026
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Engineered to meet the highest scientific standards of rigorous evaluation, career enhancement, and high-impact dissemination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferenceData.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Card key={idx} className="glass border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-all hover:-translate-y-1 group">
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* THEMATIC TRACKS */}
      <section id="tracks" className="py-16 sm:py-24 container max-w-6xl px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
            <Cpu className="h-4 w-4" /> Call For Papers (CFP)
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Six Specialized Medical AI Tracks
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Submissions are invited across specialized technical tracks spanning Molecular Drug Design, Clinical LLMs, Genomics, and Surgical Robotics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferenceData.tracks.map((t) => {
            const Icon = t.icon;
            return (
              <Card key={t.id} className="glass-strong border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-accent px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                      TRACK {t.number}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-4 leading-snug">
                    {t.title}
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {t.topics.map((topic, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full rounded-xl border-white/10 hover:border-primary/40 hover:bg-primary/5 text-xs">
                  <a href={conferenceData.cmtLink} target="_blank" rel="noopener noreferrer">
                    Submit to Track {t.number} <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>
      </section>

      {/* MILESTONES & TIMELINE */}
      <section className="py-16 sm:py-24 bg-card/30 border-y border-white/10">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
              <Calendar className="h-4 w-4" /> Important Deadlines
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Conference Timeline & Milestones
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Mark these key dates to ensure your paper is peer-reviewed and scheduled for presentation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {conferenceData.milestones.map((m, idx) => (
              <Card key={idx} className="glass border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-accent/40 transition-colors">
                <div className="text-4xl font-serif font-black text-white/10 mb-2">{m.step}</div>
                <div className="text-sm font-bold text-accent mb-1">{m.date}</div>
                <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATION & INDEXING */}
      <section className="py-16 sm:py-24 container max-w-6xl px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
            <BookOpen className="h-4 w-4" /> Scholarly Integrity
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Publication & Indexing Opportunities
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            All accepted and registered papers will be published in official proceedings with comprehensive global indexing, ISBN registration, and dissemination opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conferenceData.publication.map((item, idx) => (
            <Card key={idx} className="glass-strong border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <div className="h-14 flex items-center justify-center mb-4 p-2 bg-white/5 rounded-xl border border-white/5">
                  <img src={item.img} alt={item.title} className="max-h-10 max-w-full object-contain filter brightness-95" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-2 text-center">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed text-center">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Microsoft CMT Service Plain Acknowledgment & Submission */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black px-8 h-12 shadow-lg hover:-translate-y-0.5 transition-all text-sm sm:text-base">
            <a href={conferenceData.cmtLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              Submit via CMT <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* AWARDS & HONORS */}
      <section className="py-16 sm:py-24 bg-card/20 border-t border-white/10">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
              <Award className="h-4 w-4" /> Global Honors
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Conference Awards & Citations
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Honoring remarkable research contributions and innovations shaping the future of medicine and artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {conferenceData.awards.map((award, idx) => (
              <Card key={idx} className="glass-strong border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase mb-4">
                    {award.badge}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 sm:py-24 container max-w-4xl px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
            <HelpCircle className="h-4 w-4" /> Author Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Key details concerning submission requirements, peer review, and publication proceedings.
          </p>
        </div>

        <div className="space-y-4">
          {conferenceData.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <Card key={i} className="glass border-white/10 rounded-2xl overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white hover:text-primary transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#050B14] via-card to-[#050B14] border-t border-white/10">
        <div className="container max-w-4xl px-4 text-center mx-auto">
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mb-4">
            Ready to Share Your Medical AI Innovations?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Connect with clinical scientists, biotech pioneers, and AI engineers on Sunday, 20 December 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black px-8 h-12 sm:h-14 rounded-full shadow-gold hover:-translate-y-0.5 transition-all">
              <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer">
                Register for ICMEDAI-2026 <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border-white/20 text-white font-bold px-8 h-12 sm:h-14 rounded-full transition-all">
              <a href={conferenceData.cmtLink} target="_blank" rel="noopener noreferrer">
                Submit via CMT <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Icmedai2026;
