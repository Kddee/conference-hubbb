import React, { useState } from "react";
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
  Flame
} from "lucide-react";

interface Speaker {
  name: string;
  role: string;
  org: string;
  country: string;
  category: string;
  image: string;
}

const conferenceData = {
  id: "ICETIS-2026",
  shortTitle: "ICETIS-2026",
  fullTitle: "International Conference on Emerging Technologies, Intelligent Systems & Sustainable Computing",
  theme: "Bridging Autonomous Intelligence, Quantum Horizons & Sustainable Computing Infrastructures",
  date: "Sunday, 25 October 2026",
  mode: "Hybrid Mode • Singapore Hub & Global Virtual Access",
  isbn: "978-81-981245-4-1",
  registrationLink: "/registration",
  cmtLink: "https://cmt3.research.microsoft.com/ICETIS2026",
  
  about: [
    "The International Conference on Emerging Technologies, Intelligent Systems & Sustainable Computing (ICETIS-2026) is a premier peer-reviewed global forum convened to address transformative technological shifts across computing, artificial intelligence, cyber-physical ecosystems, and environmental sustainability.",
    "Held in Hybrid Mode on Sunday, 25 October 2026, ICETIS-2026 brings together international researchers, computer scientists, industry architects, and doctoral scholars. The conference provides an interdisciplinary platform to debate foundational breakthroughs, publish double-blind peer-reviewed contributions with ISBN proceedings, and pioneer real-world innovations for high-efficiency, sustainable digital societies.",
    "All accepted and registered papers will be published in official Conference Proceedings with assigned ISBN Numbers and submitted for indexing across Google Scholar, with select high-ranking papers recommended for publication in Scopus and Web of Science (WoS) partner journals."
  ],

  highlights: [
    { stat: "6", label: "Research Tracks", desc: "Spanning Agentic AI to Green Tech" },
    { stat: "50+", label: "Nations Represented", desc: "Global academic & industry delegates" },
    { stat: "100%", label: "Double-Blind Review", desc: "Unbiased, merit-based screening" },
    { stat: "ISBN", label: "Official Proceedings", desc: "Assigned ISBN 978-81-981245-4-1" }
  ],

  tracks: [
    {
      id: "track-1",
      number: "01",
      icon: Cpu,
      title: "Agentic AI & Generative Intelligence",
      topics: [
        "Autonomous multi-agent orchestration & reasoning frameworks",
        "Large language models (LLMs) & foundation model alignment",
        "Neuro-symbolic computing & causal AI architectures",
        "Explainable AI (XAI) and ethical decision governance",
        "Generative models for automated code & system synthesis"
      ]
    },
    {
      id: "track-2",
      number: "02",
      icon: Zap,
      title: "Quantum Computing & Post-Quantum Security",
      topics: [
        "Quantum algorithms for optimization & quantum simulation",
        "Post-quantum cryptography (PQC) & quantum-resistant TLS",
        "Quantum machine learning (QML) & hybrid quantum-classical computing",
        "Hardware-level quantum error correction & noise mitigation",
        "Quantum communications & distributed quantum key infrastructure"
      ]
    },
    {
      id: "track-3",
      number: "03",
      icon: Network,
      title: "Cyber-Physical Systems & Intelligent IoT",
      topics: [
        "Autonomous edge nodes & real-time embedded intelligence",
        "Industrial digital twins & predictive operational telemetry",
        "Smart city sensor networks & urban computing",
        "Robotic automation & swarm intelligence systems",
        "Ultra-reliable low-latency communications (URLLC) in 5G/6G"
      ]
    },
    {
      id: "track-4",
      number: "04",
      icon: Database,
      title: "Cloud-Native & Distributed Architectures",
      topics: [
        "Microservices, service mesh & containerized orchestration",
        "High-throughput data streaming & event-driven platforms",
        "Zero-trust security & sovereign cloud compliance",
        "Decentralized ledger architectures & verifiable credentials",
        "Fault-tolerant distributed storage & edge caches"
      ]
    },
    {
      id: "track-5",
      number: "05",
      icon: Leaf,
      title: "Sustainable Computing & Green Technologies",
      topics: [
        "Energy-efficient machine learning & model quantization",
        "Carbon-neutral datacenter designs & cooling innovations",
        "Lifecycle carbon assessment for electronic hardware",
        "Renewable energy optimization via AI predictive grids",
        "E-waste reduction & sustainable computing circularity"
      ]
    },
    {
      id: "track-6",
      number: "06",
      icon: HeartPulse,
      title: "Healthcare Informatics & Applied Systems",
      topics: [
        "AI-assisted clinical diagnostics & biomedical imaging",
        "Privacy-preserving federated learning in healthcare",
        "Wearable biosensors & remote patient telemetry",
        "Computational genomics & drug discovery acceleration",
        "Healthcare cybersecurity & HIPAA/GDPR clinical compliance"
      ]
    }
  ],

  milestones: [
    {
      step: "01",
      title: "Call for Papers Announcement",
      date: "Active",
      desc: "Submissions open for full papers, short papers, and abstracts."
    },
    {
      step: "02",
      title: "Paper Submission Deadline",
      date: "05 October 2026",
      desc: "Final deadline to submit original manuscripts via CMT portal."
    },
    {
      step: "03",
      title: "Acceptance Notification",
      date: "12 October 2026",
      desc: "Double-blind peer review outcome letters dispatched to authors."
    },
    {
      step: "04",
      title: "Camera-Ready & Final Registration",
      date: "18 October 2026",
      desc: "Final publication-ready file submission and author registration."
    },
    {
      step: "05",
      title: "Conference Day",
      date: "25 October 2026 (Sunday)",
      desc: "Keynotes, technical track sessions, oral defenses & awards ceremony."
    }
  ],

  speakers: [
    {
      name: "Wiktoria Gromowa-Cieślik",
      role: "CEO & Chief Metrics Officer",
      org: "Human-Tech Fusion (HTFusion)",
      country: "Poland",
      category: "Keynote Speaker",
      image: "/speakers/wiktoria-gromowa-cieslik.jpg"
    },
    {
      name: "Hardeep Singh Tiwana",
      role: "Golden Kubestronaut & Creator",
      org: "The Kubernetes Show",
      country: "USA",
      category: "Keynote Speaker",
      image: "/speakers/hardeep-singh-tiwana.jpg"
    },
    {
      name: "Dr. Sravanthi Dontu",
      role: "Corporate Professional & Academic Scholar",
      org: "University of the Cumberlands",
      country: "USA",
      category: "Keynote Speaker",
      image: "/speakers/dr-sravanthi-dontu.jpg"
    },
    {
      name: "Prof. Dr. Alexander Bull",
      role: "Professor & Computing Scientist",
      org: "IU International University",
      country: "Germany",
      category: "Plenary Speaker",
      image: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg"
    },
    {
      name: "Dr. Peter Kamau, CPA-K",
      role: "Founder & CEO | Government Consultant",
      org: "PETKAM Solutions Ltd",
      country: "Kenya",
      category: "Plenary Speaker",
      image: "/speakers/dr-peter-kamau.jpg"
    },
    {
      name: "Dr. Dina Alkhodary",
      role: "Associate Professor of Business Administration",
      org: "Middle East University",
      country: "Jordan",
      category: "Invited Speaker",
      image: "/speakers/dr-dina-alkhodary.jpg"
    },
    {
      name: "Mr. Bhushan Balkrishna Chaudhari",
      role: "Senior Technology Lead & Cloud Architect",
      org: "Enterprise Computing Division",
      country: "USA",
      category: "Invited Speaker",
      image: "/speakers/bhushan-chaudhari.jpg"
    },
    {
      name: "Dr. Carolina Barandiaran",
      role: "Academic Leader & Researcher",
      org: "Academic Research & Innovation",
      country: "Argentina",
      category: "Invited Speaker",
      image: "/speakers/dr-carolina-barandiaran.jpg"
    }
  ],

  publications: [
    {
      title: "Official ISBN Conference Proceedings",
      badge: "Assigned ISBN",
      desc: "All accepted and registered papers will be published in official proceedings with ISBN 978-81-981245-4-1, ensuring permanent scholarly attribution.",
      icon: BookOpen
    },
    {
      title: "Google Scholar Indexing",
      badge: "Global Citation",
      desc: "Proceedings and papers are cataloged in Google Scholar to maximize worldwide readership, citation metrics, and academic impact.",
      icon: Globe
    },
    {
      title: "Scopus & WoS Journal Recommendations",
      badge: "Indexing Track",
      desc: "Top 15% evaluated papers will be recommended for fast-track review in Scopus and Web of Science (WoS) indexed partner journals.",
      icon: Award
    },
    {
      title: "DOI Assignment",
      badge: "Digital Identifier",
      desc: "Digital Object Identifiers (DOIs) provide persistent, resolvable digital hyperlinks for citation verification in research literature.",
      icon: ShieldCheck
    }
  ],

  fees: [
    {
      category: "Author Presentation & Publication",
      price: "$180 / ₹9,500",
      type: "Oral / Virtual Presentation",
      perks: [
        "Full paper publication in ISBN Proceedings",
        "Oral presentation slot in technical track",
        "Official presentation certificate",
        "Eligibility for Best Paper Award",
        "Access to all keynote and technical sessions"
      ],
      featured: true
    },
    {
      category: "Student / Research Scholar",
      price: "$140 / ₹7,500",
      type: "Student Author",
      perks: [
        "Full paper publication in ISBN Proceedings",
        "Dedicated student track presentation",
        "Official presentation certificate",
        "Eligibility for Best Student Presenter Award",
        "Mentorship feedback from international reviewers"
      ],
      featured: false
    },
    {
      category: "Attendee / Listener",
      price: "$60 / ₹3,000",
      type: "Non-Presenting Delegate",
      perks: [
        "Full access to all keynote and technical tracks",
        "Official Certificate of Participation",
        "Digital copy of Conference Proceedings",
        "Virtual networking room access"
      ],
      featured: false
    }
  ],

  awards: [
    {
      title: "Best Research Paper Award",
      desc: "Honors original scientific rigor, groundbreaking findings, and exceptional methodology.",
      badge: "Gold Award"
    },
    {
      title: "Best Student Presenter Award",
      desc: "Recognizes outstanding defense and clarity of presentation by early-career scholars.",
      badge: "Excellence"
    },
    {
      title: "Sustainable Computing Innovation Award",
      desc: "Celebrates research with profound practical impact on energy efficiency and green technology.",
      badge: "Green Tech"
    }
  ],

  faqs: [
    {
      q: "When and how will ICETIS-2026 take place?",
      a: "ICETIS-2026 takes place on Sunday, 25 October 2026. The conference operates in Hybrid Mode, allowing authors and delegates to participate either physically at our Singapore academic partner hub or virtually via our interactive global streaming portal."
    },
    {
      q: "What formatting guidelines should authors follow?",
      a: "Authors must prepare papers in standard IEEE or Springer two-column conference format (maximum 6 to 8 pages including references). All manuscripts must be completely anonymized for double-blind peer review."
    },
    {
      q: "What is the policy on plagiarism?",
      a: "Academic integrity is strictly enforced. All submissions undergo automated plagiarism screening using Turnitin/iThenticate. Submissions with a similarity index exceeding 15% (excluding references) will be rejected."
    },
    {
      q: "Are the proceedings indexed?",
      a: "Yes. All accepted and presented papers are published in the official proceedings with ISBN 978-81-981245-4-1 and indexed in Google Scholar. Outstanding papers are recommended to Scopus/WoS partner journals."
    },
    {
      q: "Can international authors present virtually?",
      a: "Yes. Remote presenters receive dedicated live slots with interactive Q&A, and their certificates and proceedings are delivered with equal academic validity."
    }
  ]
};

const Icetis2026 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEOHead
        title="ICETIS-2026 | International Conference on Emerging Technologies, Intelligent Systems & Sustainable Computing"
        description="Official summit website for ICETIS-2026 on Sunday, 25 October 2026. Hybrid conference featuring Agentic AI, Quantum Computing, IoT, ISBN Proceedings, and Scopus journal recommendations."
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
              "name": "Singapore Academic Hub",
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
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-border/40">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="container relative z-10 max-w-6xl px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Live Upcoming Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>{conferenceData.shortTitle} • Upcoming International Conference</span>
            </div>

            {/* Main Conference Title */}
            <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.15] mb-6">
              {conferenceData.fullTitle}
            </h1>

            <p className="text-base sm:text-xl text-muted-foreground font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
              {conferenceData.theme}
            </p>

            {/* Key Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90 font-medium mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{conferenceData.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>{conferenceData.mode}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>ISBN: {conferenceData.isbn}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 sm:h-14 px-8 rounded-full shadow-gold hover:-translate-y-0.5 transition-all text-sm sm:text-base">
                <Link to={conferenceData.registrationLink}>
                  Submit Paper / Register <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border-white/20 text-white font-semibold h-12 sm:h-14 px-8 rounded-full transition-all text-sm sm:text-base">
                <a href="#tracks">Explore Tracks & Topics</a>
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

      {/* ABOUT & SCOPE */}
      <section className="container max-w-6xl py-12 sm:py-16 px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-4 w-4" /> About ICETIS-2026
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
              An International Flagship Forum for Scientific & Technological Pioneers
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="pt-2">
              <Button asChild className="bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-full font-semibold">
                <Link to="/registration">Download Call for Papers (CFP)</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-8 rounded-3xl bg-card/60 border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-5 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Key Academic Commitments
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Double-Blind Peer Review:</strong> Impartial evaluation by qualified international subject experts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>ISBN Proceedings:</strong> Published with official ISBN 978-81-981245-4-1 for global discoverability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Global Indexing:</strong> Cataloged in Google Scholar with assigned Digital Object Identifiers (DOI).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Journal Fast-Track:</strong> Top 15% submissions recommended for Scopus & Web of Science partner issues.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* THEMATIC TRACKS */}
      <section id="tracks" className="py-16 sm:py-24 bg-card/20 border-y border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
              <Presentation className="h-4 w-4" /> Call for Papers
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Thematic Research Tracks
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Authors are invited to submit original, unpublished research papers across 6 specialized conference tracks.
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

                  <div className="pt-2 border-t border-white/5 mt-auto">
                    <Link to="/registration" className="inline-flex items-center text-xs font-bold text-accent hover:text-white transition-colors">
                      Submit to this track <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES / TIMELINE */}
      <section className="py-16 sm:py-24 container max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Clock className="h-4 w-4" /> Key Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Important Conference Dates
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Please observe the following strict deadlines for manuscript submission, peer evaluation, and camera-ready registration.
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
      </section>

      {/* PUBLICATION & INDEXING */}
      <section className="py-16 sm:py-24 bg-card/30 border-y border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
              <Award className="h-4 w-4" /> Academic Dissemination
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Publication & Global Indexing
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Peer-reviewed scholarly output published with international cataloging standards and citation tracking.
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

      {/* FEATURED KEYNOTE & PLENARY SPEAKERS */}
      <section className="py-16 sm:py-24 container max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Users className="h-4 w-4" /> Distinguished Roster
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Keynote & Invited Speakers
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Eminent scientists, authors, and industry technology pioneers leading plenary addresses at ICETIS-2026.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {conferenceData.speakers.map((s, idx) => (
            <Card key={idx} className="overflow-hidden glass border-white/10 bg-card/40 hover:bg-card/70 transition-all duration-300 group flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl sm:rounded-3xl hover:-translate-y-1 hover:border-primary/40">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/15 text-primary mb-3 border border-primary/20">
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
                  className="relative z-10 h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h4 className="font-serif font-bold text-white text-sm sm:text-base leading-tight mb-1 group-hover:text-primary transition-colors">
                {s.name}
              </h4>
              <div className="text-[11px] font-semibold text-accent mb-0.5 line-clamp-1">{s.role}</div>
              <div className="text-[11px] text-muted-foreground mb-3 line-clamp-1">{s.org}</div>

              <div className="mt-auto inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-white/70 uppercase tracking-wider">
                <Globe className="h-3 w-3 text-accent" /> {s.country}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* REGISTRATION & DELEGATE CATEGORIES */}
      <section className="py-16 sm:py-24 bg-card/20 border-y border-border/40">
        <div className="container max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-3">
              <FileCheck2 className="h-4 w-4" /> Registration & Fees
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Participation Categories
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Transparent registration tiers for authors, scholars, and global industry attendees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {conferenceData.fees.map((fee, i) => (
              <Card
                key={i}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  fee.featured
                    ? "glass-strong border-primary/50 shadow-gold scale-105 z-10"
                    : "glass border-white/10 bg-card/40"
                }`}
              >
                {fee.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">{fee.type}</div>
                  <h3 className="font-serif font-bold text-xl text-white mb-4">{fee.category}</h3>
                  <div className="font-serif font-black text-2xl sm:text-3xl text-primary mb-6">{fee.price}</div>

                  <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground mb-8">
                    {fee.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className={`w-full rounded-full font-bold h-12 ${fee.featured ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold" : "bg-white/10 hover:bg-white/15 text-white"}`}>
                  <Link to="/registration">Register Now</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & HONORS */}
      <section className="py-16 sm:py-24 container max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
            <Award className="h-4 w-4" /> Excellence Recognitions
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Conference Awards & Honors
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Recognizing exemplary academic contributions, presentation prowess, and green engineering impact.
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
              <HelpCircle className="h-4 w-4" /> Delegate Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
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
            <Flame className="h-4 w-4" /> Next Month • Sunday, 25 October 2026
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Shape the Future of Intelligent & Sustainable Computing
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground mb-10 leading-relaxed">
            Submit your manuscript today to present your breakthroughs before an esteemed international audience and achieve worldwide publication in ISBN proceedings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 sm:h-14 px-10 rounded-full shadow-gold hover:-translate-y-1 transition-all text-sm sm:text-base w-full sm:w-auto">
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
