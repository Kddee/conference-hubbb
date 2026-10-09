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
  Leaf,
  HeartPulse,
  Laptop,
  FileCheck2,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Presentation,
  Flame,
  BadgeCheck,
  Plane,
  Building2,
  AlertTriangle,
  Bot,
  Book
} from "lucide-react";



const REGISTRATION_DEADLINE_DATE = new Date("2026-10-25T23:59:59+08:00");
const CONFERENCE_TARGET_DATE = new Date("2026-10-25T09:00:00+08:00");

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
  id: "ICGEN-2026",
  shortTitle: "ICGEN-2026",
  fullTitle: "International Conference on Generative AI, Frontier Technologies & Intelligent Autonomous Systems",
  fullForm: "International Conference on Generative AI, Frontier Technologies & Intelligent Autonomous Systems (ICGEN-2026)",
  theme: "Next-Gen Generative AI, Agentic Workflows & Frontier Autonomous Intelligence",
  tagline: "Where Silicon Valley GenAI Architects, Global AI Researchers, and NRI Technology Leaders Pioneer the Future of Intelligence",
  date: "Sunday, 25 October 2026",
  registrationDeadline: "23 October 2026",
  mode: "Hybrid Mode • Worldwide Virtual",
  isbn: "978-81-981245-4-1",
  registrationLink: "https://forms.gle/M6GiaTdkpqH8DWWe6",
  cmtLink: "https://cmt3.research.microsoft.com/ICGEN2026",
  
  about: [
    "The International Conference on Generative AI, Frontier Technologies & Intelligent Autonomous Systems (ICGEN-2026) is the premier global scientific and industry confluence dedicated to the most transformative technological shift of our generation: the rise of Generative AI, Autonomous Agentic Systems, Foundation Models, and Frontier Deep-Tech.",
    "Held in Hybrid Mode on Sunday, 25 October 2026, ICGEN-2026 convenes an elite international assembly of AI research scientists, Silicon Valley architects, European academic chairs, and prominent Non-Resident Indian (NRI) technology leaders from over 50 nations. The conference delivers a high-impact, peer-reviewed forum to dissect groundbreaking advancements in multi-agent orchestration, reasoning benchmarks, enterprise GenAI scale, and embodied physical intelligence.",
    "All accepted and registered papers will be published in official Conference Proceedings with assigned ISBN 978-81-981245-4-1, submitted for global cataloging across Google Scholar and leading scientific indices, with top-tier submissions fast-tracked for publication in partner Scopus and Web of Science (WoS) indexed special issues."
  ],

  highlights: [
    { stat: "50+", label: "Nations Represented", desc: "Global academic & Silicon Valley delegates" },
    { stat: "6", label: "Frontier AI Tracks", desc: "Agentic AI, LLMs to Embodied Systems" },
    { stat: "25 Oct", label: "Final Registration", desc: "Strict registration closing deadline" },
    { stat: "ISBN", label: "Official Proceedings", desc: "Assigned ISBN 978-81-981245-4-1" }
  ],

  pillars: [
    {
      icon: Bot,
      title: "Frontier GenAI & Agentic AI Focus",
      desc: "Anchored in the world's most trending tech domains: Autonomous Agents, Foundation Model Alignment, Multimodal LLMs, and Embodied Physical AI."
    },
    {
      icon: Users,
      title: "Silicon Valley & NRI Diaspora Confluence",
      desc: "Connect directly with prominent Indian-origin technology executives, US cloud innovators, and European research leaders driving Tier-1 enterprise GenAI systems."
    },
    {
      icon: BookOpen,
      title: "ISBN Proceedings & Scopus Fast-Track",
      desc: "All accepted papers receive official ISBN 978-81-981245-4-1 publication and permanent DOI identifiers, with top 15% high-impact manuscripts fast-tracked to Scopus (Q1/Q2) & Web of Science journals."
    },
    {
      icon: Globe,
      title: "Global Dual-Stage Hybrid Platform",
      desc: "Present either in person or virtually via our interactive low-latency global broadcast, synchronized across Americas, Europe, and Asia-Pacific time zones with full interactive digital participation."
    },
    {
      icon: ShieldCheck,
      title: "Strict Double-Blind Peer Review",
      desc: "Submissions undergo stringent evaluation by our international technical review board, providing authors with transparent, high-value editorial critique within 5 working days."
    },
    {
      icon: Award,
      title: "Prestigious Global Honors & Citations",
      desc: "Celebrate scientific excellence with the Best Research Paper Gold Award, Best Student Presenter Citation, and the Frontier AI Innovation Trophy awarded at the conference."
    }
  ],

  tracks: [
    {
      id: "track-1",
      number: "01",
      icon: Cpu,
      title: "Generative AI, Large Language Models & Foundation Models",
      topics: [
        "Architectures for Next-Gen LLMs, Multimodal Transformers & Mixture-of-Experts (MoE)",
        "Foundation model alignment, RLHF/DPO, reasoning benchmarks & synthetic data",
        "Context window expansion, KV-cache optimization & sub-quadratic attention",
        "Model distillation, quantization, LoRA & parameter-efficient fine-tuning",
        "Generative AI for automated code synthesis, formal verification & chip architecture"
      ]
    },
    {
      id: "track-2",
      number: "02",
      icon: Zap,
      title: "Autonomous Agentic AI, Multi-Agent Orchestration & Reasoning",
      topics: [
        "Autonomous multi-agent swarms, self-reflective cognitive loops & tool execution",
        "Hierarchical planning, goal decomposition & long-horizon episodic memory",
        "Neuro-symbolic computing & causal inference architectures in autonomous agents",
        "Multi-agent game theory, cooperative consensus & automated negotiation protocols",
        "Agentic benchmarking, safety bounds & human-in-the-loop oversight frameworks"
      ]
    },
    {
      id: "track-3",
      number: "03",
      icon: Database,
      title: "Enterprise GenAI, Scalable Cloud Systems & Sovereign LLMs",
      topics: [
        "Enterprise RAG (Retrieval-Augmented Generation) & high-dimensional vector databases",
        "Private on-premise & sovereign LLM deployment frameworks for critical sectors",
        "Kubernetes orchestration for distributed GPU/TPU training & inferencing clusters",
        "High-throughput model serving, vLLM & continuous latency optimization",
        "Zero-trust security, model confidentiality & enterprise compliance in generative AI"
      ]
    },
    {
      id: "track-4",
      number: "04",
      icon: Network,
      title: "Physical AI, Autonomous Robotics & Embodied Intelligence",
      topics: [
        "Embodied foundation models for dexterous robotic manipulation & locomotion",
        "Vision-Language-Action (VLA) models & real-time multimodal edge sensory fusion",
        "Industrial digital twins & predictive robotic automation at gigawatt scale",
        "Autonomous vehicles, spatial intelligence & coordinated drone swarm intelligence",
        "Ultra-low latency edge inferencing, neuromorphic processors & hardware accelerators"
      ]
    },
    {
      id: "track-5",
      number: "05",
      icon: ShieldCheck,
      title: "Frontier AI Safety, Alignment, Red-Teaming & Global Governance",
      topics: [
        "Frontier AI catastrophic risk mitigation, containment & model guardrailing",
        "Automated adversarial red-teaming, prompt injection & jailbreak defenses",
        "Explainable AI (XAI), mechanistic interpretability & internal representation mapping",
        "Watermarking, deepfake detection & cryptographic synthetic provenance tracking",
        "Global AI governance frameworks, regulatory compliance & international alignment"
      ]
    },
    {
      id: "track-6",
      number: "06",
      icon: HeartPulse,
      title: "AI in Science, Healthcare & High-Impact Frontiers",
      topics: [
        "AI-driven scientific discovery, computational biology, protein folding & drug design",
        "Multimodal clinical diagnostics, pathology AI & high-resolution medical imaging",
        "Privacy-preserving federated learning across international medical networks",
        "Quantum computing & quantum machine learning (QML) algorithms",
        "GenAI applications in quantitative finance, legal tech & predictive modeling"
      ]
    }
  ],

  milestones: [
    {
      step: "01",
      title: "Call for Papers & Submissions",
      date: "Active & Open",
      desc: "Submissions portal accepting full papers, short papers, and research abstracts."
    },
    {
      step: "02",
      title: "Paper / Abstract Submission Deadline",
      date: "23 October 2026",
      desc: "Final date to upload manuscripts for double-blind peer evaluation."
    },
    {
      step: "03",
      title: "Final Registration",
      date: "25 October 2026",
      desc: "Strict deadline for author registration and final publication-ready upload."
    },
    {
      step: "04",
      title: "International Conference Sessions",
      date: "25 October 2026 (Sunday)",
      desc: "Keynote addresses, technical paper defenses, live demos & global awards."
    }
  ],



  publication: [
    {
      title: "ISBN Conference Proceedings",
      img: "https://i.postimg.cc/VvnzKNKj/image.png",
      desc: "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number (ISBN: 978-81-687765-9-3), ensuring global visibility, citation, and academic recognition."
    },
    {
      title: "Google Scholar Indexing",
      img: "/google-scholar.svg",
      desc: "All published papers will be indexed in Google Scholar, providing broad global accessibility, citation tracking, and enhanced author visibility."
    },
    {
      title: "Web of Science (Under Consideration)",
      img: "https://i.postimg.cc/0NX5QF6x/image.png",
      desc: "Selected papers may be considered for submission to journals indexed in Web of Science, based on quality, originality, and editorial evaluation."
    },
    {
      title: "DOI & Digital Access",
      img: "/doi-logo.svg",
      desc: "Each published paper may be assigned a Digital Object Identifier (DOI) to ensure permanent accessibility and citation tracking."
    }
  ],

  awards: [
    {
      title: "Best Research Paper Gold Award",
      desc: "Conferred upon the manuscript demonstrating outstanding scientific innovation, methodological excellence, and measurable impact in GenAI & Autonomous Systems.",
      badge: "Gold Award"
    },
    {
      title: "Best Student Presenter Award",
      desc: "Recognizes exceptional technical clarity, presentation mastery, and defense by early-career and postgraduate researchers.",
      badge: "Excellence"
    },
    {
      title: "Frontier AI Innovation Trophy",
      desc: "Honors pioneering research with breakthrough practical applicability in multi-agent systems and enterprise intelligence.",
      badge: "Deep-Tech Honor"
    }
  ],

  speakers: [
    {
      name: "Heinz Dollberg",
      designation: "Executive Vice President (ret.), Allianz",
      organization: "Allianz",
      country: "Germany 🇩🇪",
      image: "/speakers/heinz-dollberg.jpg",
      category: "Keynote Speaker"
    },
    {
      name: "Peter Kasahara",
      designation: "CXO for AI & Data Leadership and Innovation / Fortune 200 Group Chief Data Officer",
      organization: "Zurich, Switzerland",
      country: "Switzerland 🇨🇭",
      image: "/speakers/peter-kasahara.jpg",
      category: "Keynote Speaker"
    },
    {
      name: "Pam Didner",
      designation: "AI Keynote Speaker | Making AI Make Sense for Business Professionals | 5x Author & Consultant | Inc Magazine Columnist",
      organization: "AI (Copilot & Claude) Workshops & Training | B2B Sales & Marketing",
      country: "Raleigh-Durham, Carolina, USA 🇺🇸",
      image: "/speakers/pam-didner.jpg",
      category: "Keynote Speaker"
    }
  ],

  faqs: [
    {
      q: "When is the final registration deadline?",
      a: "The final registration deadline is strictly Sunday, 25 October 2026. All presenting authors and global delegates must complete their registration and final publication-ready upload by this date to be included in the official proceedings and presentation schedule."
    },
    {
      q: "What is the timeline between paper submission and registration?",
      a: "Paper and abstract submissions close on 23 October 2026. Final author registration and publication-ready uploads conclude on 23 October 2026, before the International Conference convenes on Sunday, 25 October 2026."
    },
    {
      q: "Can international researchers, NRIs, and authors present virtually without traveling?",
      a: "Yes, absolutely. ICGEN-2026 is conducted in a full Dual-Stage Hybrid format. International delegates, NRIs, and scholars can present remotely from anywhere in the world through our high-definition interactive conference platform with dedicated live Q&A. Remote presentations carry identical academic validity, and official ISBN proceedings and presentation certificates are issued with full verification."
    },
    {
      q: "Do registered attendees receive official institutional invitation letters?",
      a: "Yes. All registered authors, keynote delegates, and co-authors receive an official institutional Letter of Invitation formatted to international academic standards to facilitate institutional, academic, and travel clearances."
    },
    {
      q: "How are the conference proceedings published and indexed?",
      a: "All accepted, registered, and presented manuscripts are published in the official Conference Proceedings with assigned ISBN 978-81-981245-4-1. The proceedings are submitted for comprehensive indexing across Google Scholar, research repositories, and assigned persistent DOIs for global scholarly citations."
    },
    {
      q: "What is the procedure for Scopus and Web of Science (WoS) journal recommendations?",
      a: "The top 15% of submissions evaluated by our double-blind international scientific review committee will be invited to submit an extended version of their manuscript for publication in partner Scopus (Q1/Q2) and Web of Science (ESCI/SCIE) indexed special issues, subject to respective journal editorial processes."
    },
    {
      q: "What formatting guidelines should authors follow?",
      a: "Authors must prepare manuscripts using standard IEEE or Springer two-column conference template (typically 6 to 8 pages including figures, tables, and references). Submissions must be entirely anonymized for double-blind review, with author names and institutional affiliations omitted from initial drafts."
    },
    {
      q: "What is the policy regarding academic integrity and plagiarism screening?",
      a: "Strict scientific ethics are enforced. All submitted manuscripts are screened using automated plagiarism detection software (Turnitin/iThenticate). Manuscripts displaying uncredited similarity exceeding 15% (excluding standard bibliography) will be automatically disqualified."
    }
  ]
};

const Icgen2026 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const regCountdown = useCountdown(REGISTRATION_DEADLINE_DATE);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEOHead
        title="ICGEN-2026 | International Conference on Generative AI, Frontier Tech & Autonomous Systems"
        description="Official International Conference website for ICGEN-2026 on Sunday, 25 October 2026. Paper submission & final registration deadline: 23 October 2026. Convening global researchers, Silicon Valley architects, and NRI tech leaders in Generative AI, Agentic Workflows, and Frontier Deep-Tech."
        canonical="https://www.eminsphere.com/icgen-2026"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": conferenceData.fullTitle,
          "alternateName": conferenceData.shortTitle,
          "startDate": "2026-10-25T09:00:00+08:00",
          "endDate": "2026-10-25T18:00:00+08:00",
          "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "VirtualLocation",
            "name": "Worldwide Virtual Presentation & Global Broadcast",
            "url": "https://www.eminsphere.com/icgen-2026"
          },
          "description": conferenceData.about[0],
          "organizer": {
            "@type": "Organization",
            "name": "Eminsphere",
            "url": "https://www.eminsphere.com"
          }
        }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-32 border-b border-border/40">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-gradient-to-tr from-primary/25 via-accent/20 to-transparent blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="container relative z-10 max-w-6xl px-4">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Live Flagship Conference Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/30 text-xs sm:text-sm font-bold mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span>{conferenceData.shortTitle} • International Conference on Generative AI & Autonomous Systems</span>
            </div>

            {/* Main Conference Title */}
            <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-5">
              {conferenceData.fullTitle}
            </h1>

            {/* Trending Master Theme */}
            <p className="text-base sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent font-black mb-4 max-w-4xl mx-auto leading-snug">
              "{conferenceData.theme}"
            </p>

            {/* Global Slogan */}
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
              {conferenceData.tagline}
            </p>

            {/* URGENT REGISTRATION DEADLINE & COUNTDOWN BANNER */}
            <div className="mb-10 max-w-2xl mx-auto bg-gradient-to-r from-accent/10 via-card to-primary/10 backdrop-blur-md border border-accent/30 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(28,231,212,0.15)]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-accent font-black text-xs sm:text-sm uppercase tracking-wider">
                  <AlertTriangle className="h-4 w-4" /> Registration Closes: 23 October 2026
                </div>
                <div className="text-[11px] font-bold text-white/80 bg-accent/15 px-3 py-1 rounded-full border border-accent/30">
                  Conference: 25 Oct 2026
                </div>
              </div>

              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2">
                <Clock className="h-3.5 w-3.5" /> Registration Portal Closes In
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-serif font-black text-white">{regCountdown.days}</div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Days</div>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-serif font-black text-white">{regCountdown.hours}</div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Hours</div>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-serif font-black text-white">{regCountdown.minutes}</div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Mins</div>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-serif font-black text-accent">{regCountdown.seconds}</div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Secs</div>
                </div>
              </div>
            </div>

            {/* Key Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/90 font-medium mb-10">
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
                <span>ISBN: {conferenceData.isbn}</span>
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
                  Register Online (Before 25 Oct) <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-accent/15 hover:bg-accent/25 border-accent/40 text-accent font-bold h-12 sm:h-14 px-8 rounded-full shadow-md hover:-translate-y-0.5 transition-all text-sm sm:text-base">
                <a href={conferenceData.cmtLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Submit via CMT <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border-white/20 text-white font-bold h-12 sm:h-14 px-7 rounded-full transition-all text-sm sm:text-base">
                <a href="#tracks">Explore GenAI Tracks</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAST FACTS BAR */}
      <section className="container max-w-6xl relative z-20 -mt-8 sm:-mt-10 mb-16 sm:mb-24 px-4">
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

      {/* GLOBAL DIASPORA & SILICON VALLEY LEADERSHIP BANNER */}
      <section className="container max-w-6xl mb-16 sm:mb-20 px-4">
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-primary/15 via-card to-accent/15 border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="h-3.5 w-3.5" /> Silicon Valley & Global NRI Tech Network
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-2 leading-snug">
                Accelerating the Next Frontier of Generative AI & Autonomous Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                ICGEN-2026 provides a high-status international platform connecting prominent Non-Resident Indian (NRI) engineering executives from Tier-1 US tech firms, European university chairs, Asian AI researchers, and startup founders. Whether presenting virtually or in person, participants gain high-level peer feedback, international citation recognition, and direct access to global AI leadership circles.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Globe className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">50+ Nations Participating</div>
                  <div className="text-[10px] text-muted-foreground">USA, UK, Germany, Canada, Australia & more</div>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Silicon Valley & Enterprise AI</div>
                  <div className="text-[10px] text-muted-foreground">Architects from global cloud & AI enterprises</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ATTEND / VALUE PILLARS */}
      <section className="py-12 sm:py-20 bg-card/20 border-y border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
              <BadgeCheck className="h-4 w-4" /> Global Value Proposition
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Why Global Delegates, NRIs & Scholars Choose ICGEN-2026
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Engineered to meet the highest international standards of scholarly rigor, career impact, and global networking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferenceData.pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <Card key={idx} className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl glass border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* THEMATIC RESEARCH TRACKS (TRENDING GENAI & AGENTIC AI) */}
      <section id="tracks" className="py-16 sm:py-24 container max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
            <Presentation className="h-4 w-4" /> Comprehensive Call for Papers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Six Vanguard AI & Deep-Tech Tracks
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
            Authors and research teams are invited to submit original, unpublished manuscripts across these high-impact trending domains.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground font-black px-8 h-12 shadow-lg hover:-translate-y-0.5 transition-all text-sm">
              <a href={conferenceData.cmtLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Submit via CMT <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferenceData.tracks.map((track) => {
            const IconComponent = track.icon;
            return (
              <Card key={track.id} className="p-6 rounded-2xl sm:rounded-3xl glass border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col group hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-muted-foreground tracking-widest">
                    TRACK {track.number}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-3 group-hover:text-primary transition-colors">
                  {track.title}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mb-6 flex-grow">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-white/5 mt-auto">
                  <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold text-accent hover:text-white transition-colors">
                    Submit Paper to Track {track.number} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* IMPORTANT DATES / TIMELINE WITH 25 OCT REGISTRATION DEADLINE */}
      <section className="py-16 sm:py-24 bg-card/25 border-y border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
              <Clock className="h-4 w-4" /> Timelines & Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Important Conference Dates
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Please note the adjusted timeline leading up to the final registration closing on 25 October 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {conferenceData.milestones.map((m, i) => (
              <Card
                key={i}
                className={`p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  i === 2
                    ? "bg-accent/15 border-accent/60 shadow-[0_0_30px_rgba(28,231,212,0.2)]"
                    : i === 3
                    ? "bg-primary/15 border-primary/50 shadow-gold"
                    : "bg-card/40 border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="font-mono text-xs text-primary font-bold mb-2">STEP {m.step}</div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">{m.title}</h4>
                  <p className="text-xs text-muted-foreground mb-4">{m.desc}</p>
                </div>
                <div className={`pt-3 border-t border-white/10 font-mono text-xs sm:text-sm font-bold ${
                  i === 2 ? "text-accent text-sm font-black" : "text-primary"
                }`}>
                  {m.date}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DISTINGUISHED PLENARY & KEYNOTE SPEAKERS (OFFICIAL LINEUP UPDATE ANNOUNCEMENT) */}
      <section id="speakers" className="py-16 sm:py-24 container max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Users className="h-4 w-4" /> World-Class Keynote Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Distinguished Plenary & Keynote Speakers
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            World-renowned international corporate executives, enterprise leaders, and frontier AI practitioners delivering keynote addresses at ICGEN-2026.
          </p>
        </div>

        {/* KEYNOTE SPEAKERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {conferenceData.speakers.map((s, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-card/60 border border-white/10 hover:border-primary/40 backdrop-blur-md p-6 sm:p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all" />

              {/* Role Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 mb-5 shadow-sm uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                <span>{s.category}</span>
              </div>

              {/* Headshot Portrait Frame - Carefully proportioned with object-top to prevent face cropping */}
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 mb-5 overflow-hidden rounded-2xl border-2 border-primary/30 bg-[#030914] shadow-md group-hover:border-primary group-hover:shadow-primary/20 transition-all">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Country Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/25 mb-3.5 shadow-sm">
                <span>{s.country}</span>
              </div>

              {/* Speaker Name */}
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2 group-hover:text-primary transition-colors leading-snug">
                {s.name}
              </h3>

              {/* Designation */}
              <p className="text-xs sm:text-sm font-semibold text-accent mb-2 leading-relaxed">
                {s.designation}
              </p>

              {/* Affiliation / Organization */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {s.organization}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Speakers & Call for Invited Chairs */}
        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-card/80 via-card/50 to-primary/10 border border-white/10 shadow-lg text-center max-w-4xl mx-auto backdrop-blur-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="h-3.5 w-3.5" /> Additional Invited Speakers & Chairs
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
            The International Academic Advisory Committee of <strong className="text-white">ICGEN-2026</strong> is currently finalizing confirmations for additional invited plenary chairs and industry research leaders across the United States, Europe, and Asia-Pacific.
          </p>

          {/* Action Buttons & Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-6">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black px-8 py-6 rounded-full shadow-gold hover:-translate-y-0.5 transition-all text-sm">
              <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Register Online (Before 25 Oct) <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border-white/20 text-white font-bold px-8 py-6 rounded-full transition-all text-sm">
              <a href="#tracks" className="flex items-center gap-2">
                Explore Research Tracks
              </a>
            </Button>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-muted-foreground flex flex-wrap items-center justify-center gap-2">
            <span>Are you a senior researcher or tech leader interested in delivering an Invited Session?</span>
            <a href="mailto:info@eminsphere.com" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
              Contact Program Secretariat <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* PUBLICATION & INDEXING */}
      <section className="py-16 sm:py-24 bg-card/30 border-y border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Publication & Indexing
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              All accepted and registered papers will be published in official proceedings with comprehensive global indexing, ISBN registration, and dissemination opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceData.publication.map((item, idx) => (
              <Card
                key={idx}
                className="p-6 rounded-2xl bg-card hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-primary border-white/10 shadow-lg text-center flex flex-col items-center justify-between group"
              >
                <div className="w-full flex flex-col items-center">
                  <div className="h-16 w-full flex items-center justify-center mb-5">
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-14 max-w-[150px] object-contain mx-auto filter brightness-95 group-hover:brightness-110 transition-all"
                      />
                    ) : (
                      <BookOpen className="h-12 w-12 text-primary mb-5 mx-auto" />
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg mb-2.5 text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
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
        </div>
      </section>

      {/* AWARDS & HONORS */}
      <section className="py-16 sm:py-24 container max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Award className="h-4 w-4" /> Global Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Conference Awards & Citations
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Recognizing pioneering academic contributions, presentation excellence, and green engineering impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {conferenceData.awards.map((award, i) => (
            <Card key={i} className="p-6 rounded-2xl bg-card/40 border-white/10 flex flex-col justify-between hover:border-primary/40 transition-colors">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                  {award.badge}
                </span>
                <h3 className="font-serif font-bold text-lg text-white mb-2">{award.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{award.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 sm:py-24 bg-card/20 border-y border-border/40">
        <div className="container max-w-4xl px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
              <HelpCircle className="h-4 w-4" /> Delegate Information
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Essential guidance for international participants, NRI delegates, authors, and attendees.
            </p>
          </div>

          <div className="space-y-4">
            {conferenceData.faqs.map((faq, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-white/10 bg-card/40 transition-colors cursor-pointer"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                  <h4 className="font-semibold text-white text-sm sm:text-base">{faq.q}</h4>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>
                {openFaq === idx && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container max-w-3xl relative z-10 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/25">
            <Flame className="h-4 w-4" /> Registration Closes: 23 October 2026 • Conference: 25 October 2026
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Be Part of the International Conference on Generative AI & Autonomous Systems
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground mb-10 leading-relaxed">
            Submit your manuscript today to present before world-renowned academicians, Silicon Valley architects, and global NRI pioneers. Achieve international recognition with ISBN proceedings and Scopus/WoS publication recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black h-12 sm:h-14 px-8 rounded-full shadow-gold hover:-translate-y-1 transition-all text-sm sm:text-base w-full sm:w-auto">
              <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer">
                Register Online (Before 25 Oct)
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent/40 bg-accent/15 hover:bg-accent/25 text-accent font-bold h-12 sm:h-14 px-8 rounded-full shadow-md hover:-translate-y-1 transition-all text-sm sm:text-base w-full sm:w-auto">
              <a href={conferenceData.cmtLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Submit via CMT <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white font-semibold h-12 sm:h-14 px-8 rounded-full transition-all text-sm sm:text-base w-full sm:w-auto">
              <Link to="/upcoming-conferences">View All Upcoming Conferences</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Icgen2026;
