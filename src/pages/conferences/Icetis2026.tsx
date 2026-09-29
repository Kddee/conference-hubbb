import React, { useState, useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import navinImg from "@/assets/navin.png";
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
  Share2
} from "lucide-react";

interface Speaker {
  name: string;
  role: string;
  org: string;
  country: string;
  category: "Plenary Keynote" | "Keynote Speaker" | "NRI Tech Leader" | "Invited Speaker";
  type: "international" | "nri";
  image: string;
  objectPosition?: string;
}

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
  id: "ICETIS-2026",
  shortTitle: "ICETIS-2026",
  fullTitle: "World Congress on Frontier Technologies, Intelligent Systems & Sustainable Computing",
  theme: "Global Convergence: Frontier Intelligence, Quantum Horizons & Sustainable Deep-Tech Infrastructures",
  tagline: "Uniting Silicon Valley Visionaries, European Academicians, Global NRI Technology Executives & International Scholars Across 50+ Nations",
  date: "Sunday, 25 October 2026",
  mode: "Hybrid Mode • Singapore International Hub & Worldwide 24/7 Virtual Broadcast",
  isbn: "978-81-981245-4-1",
  registrationLink: "/registration",
  
  about: [
    "The World Congress on Frontier Technologies, Intelligent Systems & Sustainable Computing (ICETIS-2026) is a premier peer-reviewed international scientific summit convened to address seismic paradigm shifts across Artificial Intelligence, Quantum Architectures, Autonomous Cyber-Physical Systems, and Sustainable Global Computing.",
    "Held in Hybrid Mode on Sunday, 25 October 2026, ICETIS-2026 establishes a high-level confluence uniting global scholars, Silicon Valley architects, European university chairs, Asian research institutes, and prominent NRI technology directors. The congress delivers a prestigious, merit-driven forum to debate cutting-edge breakthroughs, publish double-blind peer-reviewed contributions with official ISBN proceedings, and accelerate real-world deep-tech applications for resilient, carbon-neutral digital economies.",
    "All accepted and registered papers will be published in the official Conference Proceedings with assigned ISBN 978-81-981245-4-1 and submitted for comprehensive cataloging across Google Scholar and leading indexing databases, with high-ranking papers recommended for publication in Scopus and Web of Science (WoS) partner journals."
  ],

  highlights: [
    { stat: "50+", label: "Nations Represented", desc: "Global academic & Silicon Valley delegates" },
    { stat: "6", label: "Frontier Research Tracks", desc: "Spanning Agentic AI to Green Computing" },
    { stat: "100%", label: "Double-Blind Review", desc: "Rigorous international scientific jury" },
    { stat: "ISBN", label: "Official Proceedings", desc: "Assigned ISBN 978-81-981245-4-1" }
  ],

  pillars: [
    {
      icon: Globe,
      title: "Global Dual-Stage Hybrid Platform",
      desc: "Present either in person at the Singapore international academic partner hub or virtually via our interactive low-latency global broadcast, synchronized across Americas, Europe, and Asia-Pacific time zones."
    },
    {
      icon: BookOpen,
      title: "ISBN Proceedings & Scopus Fast-Track",
      desc: "All accepted papers receive official ISBN 978-81-981245-4-1 publication and permanent DOI identifiers, with top 15% high-impact manuscripts fast-tracked to Scopus (Q1/Q2) & Web of Science journals."
    },
    {
      icon: Users,
      title: "Silicon Valley & NRI Diaspora Confluence",
      desc: "Engage with prominent Indian-origin technology executives, US cloud innovators, and European research leaders shaping the vanguard of global computing, enterprise systems, and AI."
    },
    {
      icon: ShieldCheck,
      title: "100% Merit-Based Double-Blind Review",
      desc: "Submissions undergo stringent evaluation by our international technical review board, providing authors with transparent, high-value editorial critique within 14 working days."
    },
    {
      icon: Award,
      title: "Prestigious Global Honors & Citations",
      desc: "Celebrate scientific excellence with the Best Research Paper Gold Award, Best Student Presenter Citation, and the Sustainable Deep-Tech Innovation Trophy awarded at the summit."
    },
    {
      icon: Plane,
      title: "Official Visa & Diplomatic Assistance",
      desc: "Registered international delegates and expatriates requesting entry to Singapore receive expedited official invitation letters with verifiable institutional endorsement."
    }
  ],

  tracks: [
    {
      id: "track-1",
      number: "01",
      icon: Cpu,
      title: "Frontier AI, Agentic Workflows & Foundation Models",
      topics: [
        "Autonomous multi-agent orchestration & self-reflective cognitive loops",
        "Large Language Models (LLMs) & foundation model safety, alignment & RLHF",
        "Neuro-symbolic computing & causal inference architectures",
        "Explainable AI (XAI), algorithmic fairness & enterprise governance",
        "Generative synthesis for automated software engineering & chip design"
      ]
    },
    {
      id: "track-2",
      number: "02",
      icon: Zap,
      title: "Quantum Computing, Post-Quantum Cryptography & Hardware Security",
      topics: [
        "Quantum algorithms for optimization, simulation & quantum chemistry",
        "Post-quantum cryptography (PQC) & quantum-resistant TLS frameworks",
        "Quantum machine learning (QML) & hybrid classical-quantum pipelines",
        "Hardware-level quantum error correction & superconducting qubit scaling",
        "Quantum key distribution (QKD) & decentralized quantum networks"
      ]
    },
    {
      id: "track-3",
      number: "03",
      icon: Network,
      title: "Autonomous Cyber-Physical Systems & Next-Gen 6G IoT",
      topics: [
        "Autonomous edge nodes & real-time embedded neural processing",
        "Industrial digital twins & predictive operational telemetry at scale",
        "Swarm robotics, autonomous vehicle coordination & spatial intelligence",
        "Smart city sensor fabrics & resilient critical infrastructure computing",
        "Ultra-reliable low-latency communications (URLLC) & 6G radio architectures"
      ]
    },
    {
      id: "track-4",
      number: "04",
      icon: Database,
      title: "Enterprise Cloud-Native, Distributed Systems & Sovereign Data",
      topics: [
        "Kubernetes orchestration, serverless frameworks & zero-trust service meshes",
        "High-throughput event streaming & federated consensus architectures",
        "Sovereign cloud compliance, multi-region residency & confidential computing",
        "Decentralized ledger architectures, verifiable credentials & Web3 infrastructure",
        "High-performance distributed storage & edge-accelerated databases"
      ]
    },
    {
      id: "track-5",
      number: "05",
      icon: Leaf,
      title: "Sustainable Deep-Tech, Green Datacenters & Net-Zero Computing",
      topics: [
        "Energy-efficient machine learning training & model weight quantization",
        "Carbon-neutral datacenter designs & liquid immersion cooling innovations",
        "Embodied carbon lifecycle assessment for computing silicon & servers",
        "Renewable energy integration via AI-driven predictive smart grids",
        "Circular electronics, e-waste abatement & sustainable computing metrics"
      ]
    },
    {
      id: "track-6",
      number: "06",
      icon: HeartPulse,
      title: "Precision Biomedical Informatics & Healthcare AI Systems",
      topics: [
        "AI-assisted clinical diagnostics & high-resolution biomedical imaging",
        "Privacy-preserving federated learning across international medical networks",
        "Wearable biosensing fabrics & real-time patient telemetry algorithms",
        "Computational genomics & in-silico therapeutic compound discovery",
        "Clinical decision support systems & strict HIPAA / GDPR health data compliance"
      ]
    }
  ],

  milestones: [
    {
      step: "01",
      title: "Call for Papers Announcement",
      date: "Active & Open",
      desc: "Portal accepting original full papers, short papers, and abstracts."
    },
    {
      step: "02",
      title: "Paper Submission Deadline",
      date: "05 October 2026",
      desc: "Final deadline to submit original manuscripts for double-blind review."
    },
    {
      step: "03",
      title: "Acceptance Notification",
      date: "12 October 2026",
      desc: "Double-blind review outcome letters and editorial critique dispatched."
    },
    {
      step: "04",
      title: "Camera-Ready & Final Registration",
      date: "18 October 2026",
      desc: "Final publication-ready manuscript submission and author seat confirmation."
    },
    {
      step: "05",
      title: "World Congress Sessions",
      date: "25 October 2026 (Sunday)",
      desc: "Plenary keynotes, international technical tracks, oral defenses & awards."
    }
  ],

  speakers: [
    {
      name: "Prof. Dr. Alexander Bull",
      role: "Professor & Computing Scientist",
      org: "IU International University",
      country: "Germany",
      category: "Plenary Keynote",
      type: "international",
      image: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg",
      objectPosition: "center 20%"
    },
    {
      name: "Dr. Joe Perez",
      role: "Senior Systems & Data Specialist",
      org: "NC Dept. of Health & Human Services",
      country: "Raleigh, NC, USA",
      category: "Keynote Speaker",
      type: "international",
      image: "/speakers/dr-joe-perez.jpg",
      objectPosition: "center 20%"
    },
    {
      name: "Hardeep Singh Tiwana",
      role: "Golden Kubestronaut & Creator",
      org: "The Kubernetes Show",
      country: "USA",
      category: "NRI Tech Leader",
      type: "nri",
      image: "/speakers/hardeep-singh-tiwana.jpg"
    },
    {
      name: "Dr. Madeleine Pickles",
      role: "Associate Professor in Computing",
      org: "Liverpool John Moores University",
      country: "United Kingdom",
      category: "Keynote Speaker",
      type: "international",
      image: "/icaits26/dr.madeline-pickles.jpeg"
    },
    {
      name: "Navin Kumar Chhibber",
      role: "AI/ML, GenAI & Data Platforms Leader",
      org: "Product Engineering & Enterprise Cloud",
      country: "USA",
      category: "NRI Tech Leader",
      type: "nri",
      image: navinImg
    },
    {
      name: "Wiktoria Gromowa-Cieślik",
      role: "CEO & Chief Metrics Officer",
      org: "Human-Tech Fusion (HTFusion)",
      country: "Poland",
      category: "Keynote Speaker",
      type: "international",
      image: "/speakers/wiktoria-gromowa-cieslik.jpg"
    },
    {
      name: "Dr. Sravanthi Dontu",
      role: "Corporate Professional & Academic Researcher",
      org: "University of the Cumberlands",
      country: "USA",
      category: "NRI Tech Leader",
      type: "nri",
      image: "/speakers/dr-sravanthi-dontu.jpg"
    },
    {
      name: "Gregg Clunis",
      role: "Author & Technology Founder",
      org: "Kojo Systems",
      country: "United States",
      category: "Keynote Speaker",
      type: "international",
      image: "/speakers/gregg-clunis.jpg"
    },
    {
      name: "Mayank Atreya",
      role: "Enterprise Architecture & AI/ML Leader",
      org: "Enterprise Solutions Division",
      country: "USA",
      category: "NRI Tech Leader",
      type: "nri",
      image: "/speakers/mayank-atreya.jpg"
    },
    {
      name: "Dr. Carolina Barandiaran",
      role: "Academic Leader & Researcher",
      org: "Academic Research & Innovation",
      country: "Argentina",
      category: "Invited Speaker",
      type: "international",
      image: "/speakers/dr-carolina-barandiaran.jpg"
    },
    {
      name: "Dr. Dina Alkhodary",
      role: "Associate Professor of Business Administration",
      org: "Middle East University",
      country: "Jordan",
      category: "Invited Speaker",
      type: "international",
      image: "/speakers/dr-dina-alkhodary.jpg"
    },
    {
      name: "Jim Saliba",
      role: "Principal Technology Consultant",
      org: "Enterprise Architect Advisory",
      country: "Silicon Valley, CA, USA",
      category: "Keynote Speaker",
      type: "international",
      image: "/speakers/jim-saliba.png"
    }
  ] as Speaker[],

  publications: [
    {
      title: "Official ISBN Conference Proceedings",
      badge: "Assigned ISBN",
      desc: "All accepted and presented papers are cataloged in official proceedings with ISBN 978-81-981245-4-1, ensuring permanent international academic attribution.",
      icon: BookOpen
    },
    {
      title: "Google Scholar Citation Indexing",
      badge: "Worldwide Visibility",
      desc: "Conference proceedings and published papers are indexed in Google Scholar to maximize worldwide citation discovery and author H-index impact.",
      icon: Globe
    },
    {
      title: "Scopus & WoS Journal Fast-Track",
      badge: "Indexed Track",
      desc: "Top 15% evaluated papers receive editorial recommendation for expedited publication in partner Scopus (Q1/Q2) & Web of Science journals.",
      icon: Award
    },
    {
      title: "Digital Object Identifier (DOI)",
      badge: "Persistent Link",
      desc: "Individual DOIs assigned to each paper enable persistent, verified citation resolution across international digital libraries.",
      icon: ShieldCheck
    }
  ],

  awards: [
    {
      title: "Best Research Paper Gold Award",
      desc: "Conferred upon the manuscript demonstrating outstanding scientific innovation, methodological excellence, and measurable impact.",
      badge: "Gold Award"
    },
    {
      title: "Best Student Presenter Award",
      desc: "Recognizes exceptional technical clarity, presentation mastery, and defense by early-career and postgraduate researchers.",
      badge: "Excellence"
    },
    {
      title: "Sustainable Deep-Tech Innovation Trophy",
      desc: "Honors pioneering research with exceptional practical applicability toward decarbonized systems and green computing.",
      badge: "Green Deep-Tech"
    }
  ],

  faqs: [
    {
      q: "Can international researchers, NRIs, and authors present virtually without traveling?",
      a: "Yes, absolutely. ICETIS-2026 is conducted in a full Dual-Stage Hybrid format. International delegates, NRIs, and scholars can present remotely from anywhere in the world through our high-definition interactive conference platform with dedicated live Q&A. Remote presentations carry identical academic validity, and official ISBN proceedings and presentation certificates are issued with full verification."
    },
    {
      q: "Do in-person attendees receive official visa invitation letters for Singapore?",
      a: "Yes. All registered in-person authors, keynote delegates, and co-authors receive an official institutional Letter of Invitation formatted to international diplomatic standards to facilitate consular visa processing for entry into Singapore."
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
      q: "How are sessions synchronized across different global time zones?",
      a: "The technical program is divided into synchronized regional broadcast blocks to ensure comfortable oral presentation slots for participants in the Americas (PST/EST), Europe/Middle East (CET/GST), and Asia-Pacific (SGT/IST)."
    },
    {
      q: "What is the policy regarding academic integrity and plagiarism screening?",
      a: "Strict scientific ethics are enforced. All submitted manuscripts are screened using automated plagiarism detection software (Turnitin/iThenticate). Manuscripts displaying uncredited similarity exceeding 15% (excluding standard bibliography) will be automatically disqualified."
    }
  ]
};

const Icetis2026 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [speakerFilter, setSpeakerFilter] = useState<"all" | "international" | "nri">("all");
  const countdown = useCountdown(CONFERENCE_TARGET_DATE);

  const filteredSpeakers = conferenceData.speakers.filter((s) => {
    if (speakerFilter === "all") return true;
    return s.type === speakerFilter;
  });

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEOHead
        title="ICETIS-2026 | World Congress on Frontier Technologies, Intelligent Systems & Sustainable Computing"
        description="Official World Congress website for ICETIS-2026 on Sunday, 25 October 2026 in Singapore & Virtual Stage. Premier gathering uniting global researchers, Silicon Valley pioneers, and NRI technology leaders in Agentic AI, Quantum Computing, and Sustainable Deep-Tech."
        canonical="https://www.eminsphere.com/icetis-2026"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          "name": conferenceData.fullTitle,
          "alternateName": conferenceData.shortTitle,
          "startDate": "2026-10-25T09:00:00+08:00",
          "endDate": "2026-10-25T18:00:00+08:00",
          "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": [
            {
              "@type": "VirtualLocation",
              "url": "https://www.eminsphere.com/icetis-2026"
            },
            {
              "@type": "Place",
              "name": "Singapore International Innovation Hub",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Singapore",
                "addressCountry": "SG"
              }
            }
          ],
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-gradient-to-tr from-primary/20 via-accent/15 to-transparent blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="container relative z-10 max-w-6xl px-4">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Live Flagship Summit Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/25 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span>{conferenceData.shortTitle} • World Congress on Frontier Technologies 2026</span>
            </div>

            {/* Main Summit Title */}
            <h1 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6">
              {conferenceData.fullTitle}
            </h1>

            {/* Elevated Master Theme */}
            <p className="text-base sm:text-xl md:text-2xl text-accent font-semibold mb-4 max-w-4xl mx-auto leading-snug">
              "{conferenceData.theme}"
            </p>

            {/* Global Diaspora & International Slogan */}
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
              {conferenceData.tagline}
            </p>

            {/* LIVE COUNTDOWN TIMER */}
            <div className="mb-10 max-w-2xl mx-auto bg-card/60 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2">
                <Clock className="h-3.5 w-3.5" /> Summit Commences In
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-serif font-black text-white">{countdown.days}</div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Days</div>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-serif font-black text-white">{countdown.hours}</div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Hours</div>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-serif font-black text-white">{countdown.minutes}</div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Mins</div>
                </div>
                <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-2xl sm:text-4xl font-serif font-black text-accent">{countdown.seconds}</div>
                  <div className="text-[9px] sm:text-xs uppercase tracking-wider text-muted-foreground font-bold">Secs</div>
                </div>
              </div>
            </div>

            {/* Key Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/90 font-medium mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{conferenceData.date}</span>
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black h-12 sm:h-14 px-8 rounded-full shadow-gold hover:-translate-y-0.5 transition-all text-sm sm:text-base">
                <Link to={conferenceData.registrationLink}>
                  Submit Abstract / Register <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border-white/20 text-white font-bold h-12 sm:h-14 px-8 rounded-full transition-all text-sm sm:text-base">
                <a href="#tracks">Explore 6 Research Tracks</a>
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

      {/* GLOBAL DIASPORA & INTERNATIONAL LEADERSHIP BANNER */}
      <section className="container max-w-6xl mb-16 sm:mb-20 px-4">
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-primary/15 via-card to-accent/15 border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="h-3.5 w-3.5" /> High-Level Global Tech Confluence
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-2 leading-snug">
                Where International Academia Meets Silicon Valley & NRI Enterprise Leadership
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                ICETIS-2026 is strategically curated to foster collaborative synergies between prominent Indian-origin technology executives, North American innovators, European scholars, and Asian research institutes. Whether presenting virtually or in person in Singapore, participants gain unparalleled access to international academic panels, peer feedback, and cross-border innovation networks.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Globe className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">50+ Nations Participating</div>
                  <div className="text-[10px] text-muted-foreground">Europe, Americas, Asia-Pacific, Middle East</div>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Silicon Valley & NRI Network</div>
                  <div className="text-[10px] text-muted-foreground">Architects from Tier-1 global tech enterprises</div>
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
              Why Global Delegates, NRIs & Scholars Choose ICETIS-2026
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

      {/* THEMATIC RESEARCH TRACKS */}
      <section id="tracks" className="py-16 sm:py-24 container max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
            <Presentation className="h-4 w-4" /> Comprehensive Call for Papers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Six Cutting-Edge Thematic Tracks
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Authors and research teams are invited to submit original, unpublished manuscripts aligned with our core multidisciplinary themes.
          </p>
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
                  <Link to="/registration" className="inline-flex items-center text-xs font-bold text-accent hover:text-white transition-colors">
                    Submit Paper to Track {track.number} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* IMPORTANT DATES / TIMELINE */}
      <section className="py-16 sm:py-24 bg-card/25 border-y border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
              <Clock className="h-4 w-4" /> Timelines & Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Important Submission Dates
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Please note the strict deadlines for double-blind submission, reviewer notification, and camera-ready registration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {conferenceData.milestones.map((m, i) => (
              <Card
                key={i}
                className={`p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  i === 4
                    ? "bg-primary/15 border-primary/50 shadow-gold"
                    : "bg-card/40 border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="font-mono text-xs text-primary font-bold mb-2">STEP {m.step}</div>
                  <h4 className="font-bold text-white text-sm sm:text-base mb-1">{m.title}</h4>
                  <p className="text-xs text-muted-foreground mb-4">{m.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/10 font-mono text-xs sm:text-sm font-bold text-accent">
                  {m.date}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED KEYNOTE & PLENARY SPEAKERS (WORLD-CLASS INTERNATIONAL & NRI LINEUP) */}
      <section className="py-16 sm:py-24 container max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Users className="h-4 w-4" /> World-Class Keynote Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Distinguished Plenary & Keynote Speakers
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Renowned international scientists, European academic chairs, and prominent Silicon Valley NRI tech leaders addressing ICETIS-2026.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
            <button
              onClick={() => setSpeakerFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                speakerFilter === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white/5 text-muted-foreground hover:text-white border border-white/10"
              }`}
            >
              All Keynotes ({conferenceData.speakers.length})
            </button>
            <button
              onClick={() => setSpeakerFilter("international")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                speakerFilter === "international"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white/5 text-muted-foreground hover:text-white border border-white/10"
              }`}
            >
              International Scholars ({conferenceData.speakers.filter(s => s.type === "international").length})
            </button>
            <button
              onClick={() => setSpeakerFilter("nri")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                speakerFilter === "nri"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white/5 text-muted-foreground hover:text-white border border-white/10"
              }`}
            >
              Silicon Valley & NRI Leaders ({conferenceData.speakers.filter(s => s.type === "nri").length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSpeakers.map((s, idx) => (
            <Card key={idx} className="overflow-hidden glass border-white/10 bg-card/40 hover:bg-card/70 transition-all duration-300 group flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl sm:rounded-3xl hover:-translate-y-1 hover:border-primary/40">
              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3 border ${
                s.type === "nri" 
                  ? "bg-accent/15 text-accent border-accent/25" 
                  : "bg-primary/15 text-primary border-primary/25"
              }`}>
                {s.category}
              </span>

              {/* Best fit frame with zero clipping */}
              <div className="relative w-full aspect-square max-w-[120px] sm:max-w-[140px] mb-3 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all shadow-md shrink-0 bg-slate-950/80 flex items-center justify-center">
                <img
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-125 pointer-events-none"
                />
                <img
                  src={s.image}
                  alt={s.name}
                  style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined}
                  className="relative z-10 h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h4 className="font-serif font-bold text-white text-sm sm:text-base leading-tight mb-1 group-hover:text-primary transition-colors">
                {s.name}
              </h4>
              <div className="text-[11px] font-semibold text-accent mb-0.5 line-clamp-1">{s.role}</div>
              <div className="text-[11px] text-muted-foreground mb-3 line-clamp-1">{s.org}</div>

              <div className="mt-auto inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-white/80 uppercase tracking-wider">
                <Globe className="h-3 w-3 text-accent" /> {s.country}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PUBLICATION & GLOBAL INDEXING */}
      <section className="py-16 sm:py-24 bg-card/30 border-y border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
              <Award className="h-4 w-4" /> International Indexing Standards
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Publication, Indexing & Digital Archival
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every accepted paper undergoes rigorous double-blind vetting and receives permanent scholarly attribution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceData.publications.map((pub, i) => {
              const IconComp = pub.icon;
              return (
                <Card key={i} className="p-6 rounded-2xl bg-card/60 border-white/10 flex flex-col justify-between hover:border-primary/40 transition-all">
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/15 text-accent text-[10px] font-bold uppercase tracking-wider mb-2">
                      {pub.badge}
                    </span>
                    <h3 className="font-serif font-bold text-white text-base mb-2">{pub.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{pub.desc}</p>
                  </div>
                </Card>
              );
            })}
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <Flame className="h-4 w-4" /> Global Call for Papers • Sunday, 25 October 2026
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Be Part of the Premier Global Summit in Frontier & Sustainable Computing
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground mb-10 leading-relaxed">
            Submit your manuscript today to present your research before world-renowned academicians, Silicon Valley architects, and global NRI pioneers. Achieve international recognition with ISBN proceedings and Scopus/WoS publication recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-black h-12 sm:h-14 px-10 rounded-full shadow-gold hover:-translate-y-1 transition-all text-sm sm:text-base w-full sm:w-auto">
              <Link to="/registration">Submit Paper / Register Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white font-semibold h-12 sm:h-14 px-8 rounded-full transition-all text-sm sm:text-base w-full sm:w-auto">
              <Link to="/upcoming-conferences">View All Upcoming Summits</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Icetis2026;
