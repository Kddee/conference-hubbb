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
  Bot
} from "lucide-react";

const REGISTRATION_DEADLINE_DATE = new Date("2026-11-20T23:59:59+08:00");
const CONFERENCE_TARGET_DATE = new Date("2026-11-22T09:00:00+08:00");

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
  id: "ICPAI-2026",
  shortTitle: "ICPAI-2026",
  fullTitle: "International Conference on Physical AI, Humanoid Robotics & Embodied Intelligence",
  fullForm: "International Conference on Physical AI, Humanoid Robotics & Embodied Intelligence (ICPAI-2026)",
  theme: "From Foundation Models to Embodied Action: Humanoids, Spatial Intelligence & Autonomous World Models",
  tagline: "The Premier Global Scientific Forum Connecting Silicon Valley Robotics Architects, Global Researchers & NRI Technology Leaders",
  date: "Sunday, 22 November 2026",
  registrationDeadline: "20 November 2026",
  mode: "Hybrid Mode • Worldwide Virtual",
  registrationLink: "https://forms.gle/M6GiaTdkpqH8DWWe6",
  cmtLink: "https://cmt3.research.microsoft.com",
  
  about: [
    "The International Conference on Physical AI, Humanoid Robotics & Embodied Intelligence (ICPAI-2026) is the premier global scientific forum dedicated to bridging digital foundation models with physical execution in the real world: the emergence of Embodied AI, Humanoid Robotics, Spatial Computing, and Autonomous Cyber-Physical Systems.",
    "Held in Hybrid Mode on Sunday, 22 November 2026, ICPAI-2026 brings together an elite international assembly of robotics engineers, AI researchers, Silicon Valley architects, and leading academic chairs across more than 50 countries. The conference delivers an expedited, high-impact double-blind peer-reviewed platform examining sensorimotor learning, whole-body dynamics, 3D world models, and industrial-scale physical autonomy.",
    "All accepted and registered papers will be published in official Conference Proceedings with assigned ISBN registration, submitted for global indexing across Google Scholar, with select high-caliber contributions fast-tracked for publication in partner Scopus and Web of Science (WoS) indexed special issues."
  ],

  highlights: [
    { stat: "50+", label: "Nations Represented", desc: "Global robotics & AI delegates" },
    { stat: "6", label: "Specialized Tracks", desc: "VLA models, Humanoids & Spatial AI" },
    { stat: "22 Nov", label: "Conference Sunday", desc: "One-day high-impact global summit" },
    { stat: "ISBN", label: "Official Proceedings", desc: "Global Cataloging & DOI assigned" }
  ],

  pillars: [
    {
      icon: Bot,
      title: "Embodied AI & Humanoids Focus",
      desc: "Anchored in today's most transformative physical deep-tech: Vision-Language-Action (VLA) models, dexterous manipulation, and humanoid robotics."
    },
    {
      icon: Users,
      title: "Global Diaspora & Industry Convergence",
      desc: "Connect directly with prominent robotics pioneers, Silicon Valley hardware/software architects, and leading European and Asian research laboratories."
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
      desc: "Rigorous technical screening by our international review committee ensuring objective evaluation and high academic credibility."
    },
    {
      icon: Award,
      title: "Prestigious Global Honors & Citations",
      desc: "Recognizing outstanding research with the Best Research Paper Gold Award, Best Student Presenter Citation, and the Physical AI Innovation Trophy."
    }
  ],

  tracks: [
    {
      id: "track-1",
      number: "01",
      icon: Cpu,
      title: "Embodied AI & Vision-Language-Action (VLA) Architectures",
      topics: [
        "End-to-end multimodal sensorimotor policies & action tokenization",
        "Vision-Language-Action (VLA) models for cross-embodiment generalization",
        "Reinforcement learning from human feedback for robotic teleoperation (RLHF-R)",
        "Self-supervised representation learning from massive video & interaction datasets",
        "Multimodal spatial reasoning and affordance prediction in complex environments"
      ]
    },
    {
      id: "track-2",
      number: "02",
      icon: Bot,
      title: "Humanoid Robotics, Dexterous Manipulation & Locomotion",
      topics: [
        "Bipedal dynamic locomotion, terrain adaptation & disturbance recovery",
        "Multi-fingered dexterous manipulation and tactile sensing integration",
        "Whole-body control (WBC) and model predictive control (MPC) frameworks",
        "Actuator design, high-torque density motors, and lightweight harmonic drives",
        "Human-robot collaboration, intuitive safety zones, and ergonomic co-presence"
      ]
    },
    {
      id: "track-3",
      number: "03",
      icon: Database,
      title: "Spatial Intelligence, World Models & 3D Neural Representations",
      topics: [
        "Generative 3D world models and predictive physics simulators",
        "Neural Radiance Fields (NeRFs) & 3D Gaussian Splatting for real-time robotic SLAM",
        "Geometric deep learning for 3D point cloud segmentation & semantic mapping",
        "Dynamic scene graph generation and temporal episodic spatial memory",
        "Visual odometry and LiDAR-inertial sensor fusion under extreme perceptual degradation"
      ]
    },
    {
      id: "track-4",
      number: "04",
      icon: Network,
      title: "Autonomous Vehicles, Aerial Drones & Multi-Robot Swarm Intelligence",
      topics: [
        "End-to-end autonomous driving foundation models and corner-case handling",
        "Decentralized multi-agent robot swarms and consensus-based task allocation",
        "Unmanned aerial vehicles (UAVs) for autonomous inspection, rescue & logistics",
        "Vehicle-to-Everything (V2X) communication protocols and collaborative sensing",
        "Fleet-level simulation, orchestration, and continuous over-the-air learning"
      ]
    },
    {
      id: "track-5",
      number: "05",
      icon: Zap,
      title: "Edge Neuromorphic Hardware & Real-Time Sensorimotor Actuation",
      topics: [
        "Event-based neuromorphic cameras and spiking neural networks (SNNs)",
        "Ultra-low latency edge tensor processing units (TPUs) for millisecond loop control",
        "Energy-efficient edge computing architectures for untethered mobile robots",
        "Embedded hardware-software co-design for high-bandwidth robotic proprioception",
        "Thermal management and power budgets in high-performance autonomous agents"
      ]
    },
    {
      id: "track-6",
      number: "06",
      icon: ShieldCheck,
      title: "Sim-to-Real Transfer, Industrial Twins & Safety Certification",
      topics: [
        "Domain randomization, system identification, and high-fidelity physics simulators",
        "Industrial digital twins for gigawatt-scale automated manufacturing lines",
        "Formal verification and fail-safe safety guarantees for autonomous robotics",
        "Adversarial robustness and cyber-physical security against physical spoofing",
        "International robotics standards, ISO compliance, and ethical autonomous deployment"
      ]
    }
  ],

  milestones: [
    {
      step: "01",
      title: "Call for Papers & Submissions",
      date: "Active & Open",
      desc: "Submissions portal accepting full research papers, work-in-progress, and technical abstracts."
    },
    {
      step: "02",
      title: "Paper / Abstract Submission Deadline",
      date: "15 November 2026",
      desc: "Final date to submit manuscripts for double-blind peer evaluation."
    },
    {
      step: "03",
      title: "Final Registration & Camera-Ready",
      date: "20 November 2026",
      desc: "Deadline for author registration and final publication-ready manuscript upload."
    },
    {
      step: "04",
      title: "International Conference Sessions",
      date: "22 November 2026 (Sunday)",
      desc: "Keynote addresses, technical presentation tracks, live robotics demonstrations & global awards."
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
      desc: "Top-ranking papers may be recommended for submission to partner journals indexed in Scopus and Web of Science, based on quality and editorial evaluation."
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
      desc: "Conferred upon the manuscript demonstrating outstanding scientific innovation, theoretical depth, and experimental rigor in Physical AI and Robotics.",
      badge: "Gold Award"
    },
    {
      title: "Best Student Presenter Award",
      desc: "Recognizes exceptional clarity, technical competence, and presentation mastery by student researchers.",
      badge: "Excellence"
    },
    {
      title: "Physical AI Innovation Trophy",
      desc: "Honors groundbreaking research with demonstrable practical impact in humanoid robotics, automation, and real-world autonomy.",
      badge: "Deep-Tech Honor"
    }
  ],

  faqs: [
    {
      q: "What is the primary scope of ICPAI-2026?",
      a: "ICPAI-2026 centers on Physical Artificial Intelligence, Embodied AI, Humanoid Robotics, Vision-Language-Action models, 3D Spatial Computing, and Autonomous Cyber-Physical Systems."
    },
    {
      q: "Can international authors participate and present online?",
      a: "Yes. ICPAI-2026 operates in a fully hybrid format. Authors and delegates can present their research virtually with real-time Q&A and digital certificate issuance, or attend in person."
    },
    {
      q: "How are the conference proceedings published and indexed?",
      a: "All accepted and registered papers are published in the official Conference Proceedings with assigned ISBN registration, submitted for indexing in Google Scholar, and assigned permanent DOIs. High-quality papers are considered for Scopus and Web of Science special issues."
    },
    {
      q: "How does the peer-review process work?",
      a: "All submissions undergo double-blind peer review by qualified domain experts. Authors receive constructive review feedback within 3 to 5 business days from submission."
    }
  ]
};

const Icpai2026 = () => {
  const countdown = useCountdown(CONFERENCE_TARGET_DATE);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#050B14] text-foreground selection:bg-primary selection:text-primary-foreground font-sans relative overflow-hidden">
      <SEOHead
        title="ICPAI-2026 | International Conference on Physical AI, Humanoid Robotics & Embodied Intelligence"
        description="Join ICPAI-2026 on Sunday, 22 November 2026. A premier international conference exploring Physical AI, Humanoids, VLA models, and Autonomous Robotics. ISBN Proceedings & Scopus Fast-Track."
        canonical="https://www.eminsphere.com/icpai-2026"
        schema={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: conferenceData.fullTitle,
          description: conferenceData.theme,
          startDate: "2026-11-22T09:00:00+08:00",
          endDate: "2026-11-22T19:00:00+08:00",
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
            <span>Upcoming Hybrid Global Summit • November 2026</span>
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
                Register Online (Before 20 Nov) <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-accent/15 hover:bg-accent/25 border-accent/40 text-accent font-bold h-12 sm:h-14 px-8 rounded-full shadow-md hover:-translate-y-0.5 transition-all text-sm sm:text-base">
              <a href={conferenceData.cmtLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Submit via CMT <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border-white/20 text-white font-bold h-12 sm:h-14 px-7 rounded-full transition-all text-sm sm:text-base">
              <a href="#tracks">Explore Robotics Tracks</a>
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

      {/* SILICON VALLEY & GLOBAL ROBOTICS LEADERSHIP BANNER */}
      <section className="container max-w-6xl mb-16 sm:mb-20 px-4 mx-auto">
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-primary/15 via-card to-accent/15 border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="h-3.5 w-3.5" /> Silicon Valley & Global Robotics Network
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-2 leading-snug">
                Accelerating the Next Frontier of Physical AI & Humanoid Intelligence
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                ICPAI-2026 establishes a premier international venue uniting robotics researchers, AI scientists, mechanical innovators, and industry leaders from across 50+ nations. Whether participating virtually or on-site, delegates gain high-level technical critique, international citation reach, and access to global deep-tech leadership.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Globe className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">50+ Nations Participating</div>
                  <div className="text-[10px] text-muted-foreground">USA, UK, Germany, Japan, Singapore & more</div>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Robotics & Physical Deep-Tech</div>
                  <div className="text-[10px] text-muted-foreground">Engineers from robotics & autonomous labs</div>
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
              Why Delegates & Researchers Choose ICPAI-2026
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Designed to meet rigorous international standards of academic excellence, career advancement, and high-impact dissemination.
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
            Six Frontier Physical AI Tracks
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Submissions are invited across specialized technical tracks spanning Embodied AI, Humanoid Robotics, Spatial Computing, and Industrial Autonomy.
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
              Mark these essential dates to ensure your research is peer-reviewed and indexed.
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
              Distinguishing outstanding research excellence across the global robotics and AI scientific community.
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
            Everything you need to know about submissions, hybrid presentations, and indexing.
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
            Ready to Present Your Physical AI Research?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Join international researchers, Silicon Valley architects, and robotics leaders on Sunday, 22 November 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black px-8 h-12 sm:h-14 rounded-full shadow-gold hover:-translate-y-0.5 transition-all">
              <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer">
                Register for ICPAI-2026 <ArrowRight className="ml-2 h-4 w-4" />
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

export default Icpai2026;
