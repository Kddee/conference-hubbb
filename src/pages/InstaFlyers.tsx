import React, { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ExternalLink, Sparkles, Share2, Eye, Calendar, Globe, Award, CheckCircle } from "lucide-react";

interface Speaker {
  name: string;
  category: "Keynote Speaker" | "Plenary Speaker" | "Distinguished Speaker" | "Invited Speaker";
  role: string;
  org: string;
  country: string;
  img: string;
}

const part1Speakers: Speaker[] = [
  {
    name: "Hardeep Singh Tiwana",
    category: "Keynote Speaker",
    role: "Golden Kubestronaut, Creator",
    org: "The Kubernetes Show",
    country: "USA",
    img: "/speakers/hardeep-singh-tiwana.jpg"
  },
  {
    name: "Dr. Sravanthi Dontu",
    category: "Keynote Speaker",
    role: "Independent Researcher",
    org: "Univ. of the Cumberlands",
    country: "USA",
    img: "/speakers/dr-sravanthi-dontu.jpg"
  },
  {
    name: "Dr. Santosh Reddy Addula",
    category: "Keynote Speaker",
    role: "Dept. of Information Tech",
    org: "Univ. of the Cumberlands",
    country: "USA",
    img: "/speakers/dr-santosh-reddy-addula.png"
  },
  {
    name: "Dr. Peter Kamau, CPA-K",
    category: "Plenary Speaker",
    role: "Founder & CEO, Consultant",
    org: "PETKAM Solutions & NEA",
    country: "Kenya",
    img: "/speakers/dr-peter-kamau.jpg"
  },
  {
    name: "Parikshit Sahagal",
    category: "Keynote Speaker",
    role: "Technical Project Manager",
    org: "CoStar Group Inc",
    country: "USA",
    img: "/speakers/parikshit-sahagal.jpg"
  },
  {
    name: "Jaco Visagie",
    category: "Distinguished Speaker",
    role: "Professor of Statistics",
    org: "North-West University",
    country: "South Africa",
    img: "/speakers/jaco-visagie.jpg"
  },
  {
    name: "Wiktoria Gromowa-Cieślik",
    category: "Distinguished Speaker",
    role: "CEO, Chief Metrics Officer",
    org: "Human-Tech Fusion",
    country: "Poland",
    img: "/speakers/wiktoria-gromowa-cieslik.jpg"
  }
];

const part2Speakers: Speaker[] = [
  {
    name: "Mayank Atreya",
    category: "Keynote Speaker",
    role: "Tech & Engineering Leader",
    org: "Enterprise Architecture & AI",
    country: "USA",
    img: "/speakers/mayank-atreya.jpg"
  },
  {
    name: "Piyush Shukla",
    category: "Keynote Speaker",
    role: "Tech & Engineering Leader",
    org: "Enterprise Engineering & Cloud",
    country: "USA",
    img: "/speakers/piyush-shukla.jpg"
  },
  {
    name: "Dr. Dina Alkhodary",
    category: "Plenary Speaker",
    role: "Associate Professor",
    org: "Middle East University",
    country: "Jordan",
    img: "/speakers/dr-dina-alkhodary.jpg"
  },
  {
    name: "Dr. Eka Devidze",
    category: "Invited Speaker",
    role: "Affiliated Professor",
    org: "The University of Georgia",
    country: "Georgia",
    img: "/speakers/dr-eka-devidze.jpg"
  },
  {
    name: "Assoc. Prof. Dr. Muliati Sedek",
    category: "Invited Speaker",
    role: "Deputy Director (CAES)",
    org: "Univ. Teknikal Malaysia Melaka",
    country: "Malaysia",
    img: "/speakers/dr-muliati-sedek.jpg"
  },
  {
    name: "Dr. Noor Suhana Sulaiman",
    category: "Invited Speaker",
    role: "Dean, Research & Postgrad",
    org: "University College TATI",
    country: "Malaysia",
    img: "/speakers/dr-noor-suhana.jpg"
  },
  {
    name: "Sandeep Kumar Khandelwal",
    category: "Invited Speaker",
    role: "AI & DevOps Cloud Expert",
    org: "Cloud & AI Solutions",
    country: "USA",
    img: "/speakers/sandeep-kumar-khandelwal.jpg"
  }
];

const part3Speakers: Speaker[] = [
  {
    name: "Swarnabindu Roy",
    category: "Keynote Speaker",
    role: "Data Engineering & Architect",
    org: "Enterprise Data Architecture",
    country: "USA",
    img: "/speakers/swarnabindu-roy.jpg"
  },
  {
    name: "Payal R.",
    category: "Keynote Speaker",
    role: "Senior Data Engineer",
    org: "ETL & Data Pipelines",
    country: "USA",
    img: "/speakers/payal-r.jpg"
  },
  {
    name: "Dr. Carolina Barandiaran",
    category: "Keynote Speaker",
    role: "Academic Leader & Researcher",
    org: "Research & Innovation",
    country: "Argentina",
    img: "/speakers/dr-carolina-barandiaran.jpg"
  },
  {
    name: "Prof. Rehab Hegazy, PhD",
    category: "Invited Speaker",
    role: "Prof. of Pharmacology",
    org: "National Research Centre",
    country: "Egypt",
    img: "/speakers/prof-rehab-hegazy.jpg"
  },
  {
    name: "Prof. Intakhab Alam Khan",
    category: "Invited Speaker",
    role: "King Abdulaziz University",
    org: "Samarkand State Univ.",
    country: "Saudi Arabia",
    img: "/speakers/prof-intakhab-alam-khan.jpg"
  },
  {
    name: "Osman ARAYICI",
    category: "Invited Speaker",
    role: "Head of Scientific Committee",
    org: "Mimar Sinan Fine Arts / Modoko",
    country: "Turkey",
    img: "/speakers/osman-arayici.jpg"
  },
  {
    name: "Nino Devidze",
    category: "Distinguished Speaker",
    role: "Tourism Educator & Manager",
    org: "The University of Georgia",
    country: "Georgia",
    img: "/speakers/nino-devidze.jpg"
  },
  {
    name: "Lali Mikeladze",
    category: "Distinguished Speaker",
    role: "Head of BA in Tourism",
    org: "Caucasus International Univ.",
    country: "Georgia",
    img: "/speakers/lali-mikeladze.jpg"
  }
];

const FlyerCardPreview = ({
  partNum,
  title,
  speakers
}: {
  partNum: string;
  title: string;
  speakers: Speaker[];
}) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center justify-between w-full max-w-4xl px-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
            Part {partNum} of 03
          </span>
          <span className="text-sm font-bold text-foreground">{title}</span>
        </div>
        <Button
          size="sm"
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold"
          onClick={() => window.open("/insta-flyers.html", "_blank")}
        >
          <Download className="w-4 h-4 mr-2" /> Download High-Res
        </Button>
      </div>

      {/* Styled Mockup matching Instagram 4:5 format */}
      <div className="w-full max-w-4xl bg-gradient-to-b from-[#0e1b38] via-[#050b18] to-[#020409] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="border-b border-white/10 pb-4 mb-6 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img src="/eminsphere-logo.png" alt="EminSphere" className="w-10 h-10 object-contain" />
              <div>
                <h4 className="font-extrabold text-white text-base leading-tight">EMINSPHERE™</h4>
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Global Research Platform</p>
              </div>
            </div>
            <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
              PART {partNum} / 03
            </span>
          </div>

          <div className="text-center mt-2">
            <span className="text-[10px] font-black tracking-widest text-cyan-400 uppercase">INTERNATIONAL CONFERENCE</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white bg-gradient-to-r from-white via-slate-100 to-amber-300 bg-clip-text text-transparent">
              AIFORGE 2026
            </h2>
            <p className="text-xs text-slate-300 max-w-xl mx-auto line-clamp-1 mt-0.5">
              Artificial Intelligence Engineering, Foundation Models & Agentic Systems
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-2.5">
              <span className="text-[10px] font-bold bg-amber-400/10 border border-amber-400/30 text-amber-300 px-2.5 py-0.5 rounded-full">
                🗓️ Sept 6, 2026
              </span>
              <span className="text-[10px] font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-2.5 py-0.5 rounded-full">
                🌐 Hybrid & Virtual
              </span>
              <span className="text-[10px] font-bold bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-0.5 rounded-full">
                📚 ISBN: 978-81-687765-9-3
              </span>
            </div>
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 relative z-10 my-4">
          {speakers.map((s, idx) => {
            const badgeClass =
              s.category === "Keynote Speaker"
                ? "bg-amber-500/15 text-amber-400 border-amber-500/40"
                : s.category === "Plenary Speaker"
                ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/40"
                : s.category === "Distinguished Speaker"
                ? "bg-purple-500/15 text-purple-400 border-purple-500/40"
                : "bg-emerald-500/15 text-emerald-400 border-emerald-500/40";

            const frameBorder =
              s.category === "Keynote Speaker"
                ? "border-amber-400 shadow-amber-400/20"
                : s.category === "Plenary Speaker"
                ? "border-cyan-400 shadow-cyan-400/20"
                : s.category === "Distinguished Speaker"
                ? "border-purple-400 shadow-purple-400/20"
                : "border-emerald-400 shadow-emerald-400/20";

            return (
              <div
                key={idx}
                className="bg-slate-950/70 border border-white/10 rounded-xl p-3 flex flex-col items-center text-center shadow-lg relative overflow-hidden"
              >
                <span className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 ${badgeClass}`}>
                  {s.category}
                </span>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 mb-2 shadow-md ${frameBorder}`}>
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm line-clamp-1 leading-tight mb-1">{s.name}</h4>
                <p className="text-[10px] text-cyan-400 font-semibold line-clamp-1 leading-tight mb-0.5">{s.role}</p>
                <p className="text-[9.5px] text-slate-400 line-clamp-1 leading-tight mb-2">{s.org}</p>
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20 mt-auto">
                  {s.country}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-3.5 mt-4 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg p-1">
              <img src="/aiforge-qr.png" alt="QR" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-[10px] font-extrabold text-white">Register & Submit Papers</p>
              <p className="text-[9px] text-cyan-400 font-bold">www.eminsphere.com</p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
            AIFORGE 2026 • EminSphere™
          </span>
        </div>
      </div>
    </div>
  );
};

const InstaFlyers = () => {
  const [activeTab, setActiveTab] = useState<"all" | "1" | "2" | "3">("all");

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHero
        eyebrow="Social Media Assets"
        title="AIFORGE 2026 — Instagram Post Flyers"
        description="Official high-resolution Instagram post carousel flyers introducing the speakers of AIFORGE 2026, divided across 3 professional 4:5 aspect ratio flyers."
      />

      <div className="container mx-auto px-4 max-w-5xl mt-8">
        {/* Action Header Card */}
        <Card className="p-6 bg-card/60 backdrop-blur border border-primary/20 rounded-2xl mb-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                3-Part Instagram Carousel Set
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Formatted at 1080 × 1350 px (Instagram 4:5 vertical portrait). Click below to open the full-screen canvas generator to download single or all flyers as high-res PNG images.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                onClick={() => window.open("/insta-flyers.html", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Launch Full-Screen Generator & Download
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-border/50">
            <div className="p-3 bg-muted/30 rounded-xl text-center">
              <p className="text-xs text-muted-foreground">Total Flyers</p>
              <p className="text-lg font-black text-amber-400">3 Parts</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-xl text-center">
              <p className="text-xs text-muted-foreground">Total Speakers</p>
              <p className="text-lg font-black text-cyan-400">22 Leaders</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-xl text-center">
              <p className="text-xs text-muted-foreground">Instagram Format</p>
              <p className="text-lg font-black text-purple-400">4:5 Portrait</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-xl text-center">
              <p className="text-xs text-muted-foreground">Resolution</p>
              <p className="text-lg font-black text-emerald-400">1080 × 1350 px</p>
            </div>
          </div>
        </Card>

        {/* Tab Controls */}
        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("all")}
            className="rounded-full"
          >
            All 3 Flyers
          </Button>
          <Button
            variant={activeTab === "1" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("1")}
            className="rounded-full"
          >
            Part 01 (7 Speakers)
          </Button>
          <Button
            variant={activeTab === "2" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("2")}
            className="rounded-full"
          >
            Part 02 (7 Speakers)
          </Button>
          <Button
            variant={activeTab === "3" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("3")}
            className="rounded-full"
          >
            Part 03 (8 Speakers)
          </Button>
        </div>

        {/* Flyers List */}
        <div className="space-y-16">
          {(activeTab === "all" || activeTab === "1") && (
            <FlyerCardPreview
              partNum="01"
              title="Keynote Luminaries & Plenary Leaders"
              speakers={part1Speakers}
            />
          )}

          {(activeTab === "all" || activeTab === "2") && (
            <FlyerCardPreview
              partNum="02"
              title="Global Keynotes & International Scholars"
              speakers={part2Speakers}
            />
          )}

          {(activeTab === "all" || activeTab === "3") && (
            <FlyerCardPreview
              partNum="03"
              title="Innovation Leaders & Distinguished Researchers"
              speakers={part3Speakers}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default InstaFlyers;
