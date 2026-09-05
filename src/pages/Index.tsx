import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Calendar,
  Globe2,
  Users,
  BookOpen,
  Sparkles,
  Search,
  GraduationCap,
  Microscope,
  Heart,
  TrendingUp,
  Cpu,
  ChevronRight,
  Award,
  PlayCircle,
  Zap,
  Globe,
  MapPin,
  Clock,
  ShieldCheck
} from "lucide-react";
import heroImg from "@/assets/hero-conference.jpg";
import speakersImg from "@/assets/speakers.jpg";
import innovationImg from "@/assets/innovation.jpg";
import scopusInfoImg from "@/assets/scopus-infographic.jpg";
import globalConfImg from "@/assets/global-conferences-infographic.jpg";
import promoVideo from "@/assets/promo-video.mp4";

import glimpse1 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.34 AM.jpeg";
import glimpse2 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.35 AM (1).jpeg";
import glimpse3 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.35 AM (2).jpeg";
import glimpse4 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.35 AM.jpeg";
import glimpse5 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.54 AM (1).jpeg";
import glimpse6 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.54 AM.jpeg";
import glimpse7 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.55 AM (1).jpeg";
import glimpse8 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.55 AM (2).jpeg";
import glimpse9 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.55 AM (3).jpeg";
import glimpse10 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.55 AM.jpeg";
import glimpse11 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.47 PM.jpeg";
import glimpse12 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.48 PM (1).jpeg";
import glimpse13 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.48 PM (2).jpeg";
import glimpse14 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.48 PM.jpeg";
import glimpse15 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.49 PM.jpeg";
import glimpse16 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.41 PM (1).jpeg";
import glimpse17 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.41 PM.jpeg";
import glimpse18 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.42 PM (1).jpeg";
import glimpse19 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.42 PM (2).jpeg";
import glimpse20 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.42 PM.jpeg";
import glimpse21 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.43 PM (1).jpeg";
import glimpse22 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.43 PM.jpeg";
import glimpse23 from "@/assets/WhatsApp Image 2026-06-03 at 7.42.43 AM.jpeg";
import glimpse24 from "@/assets/WhatsApp Image 2026-06-03 at 7.42.44 AM.jpeg";

const stats = [
  { value: "500+", label: "Conferences Hosted", icon: Globe },
  { value: "120+", label: "Countries Represented", icon: MapPin },
  { value: "50K+", label: "Researchers Connected", icon: Users },
  { value: "200+", label: "Indexed Publications", icon: BookOpen },
];

const categories = [
  { icon: Cpu, label: "Engineering & Technology", count: "120+ Events", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
  { icon: TrendingUp, label: "Business & Economics", count: "85+ Events", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { icon: GraduationCap, label: "Education & Learning", count: "60+ Events", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop" },
  { icon: Heart, label: "Health & Medicine", count: "140+ Events", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
  { icon: Microscope, label: "Science & Research", count: "210+ Events", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" },
  { icon: Globe2, label: "Social Sciences", count: "90+ Events", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" },
];

const servicesData = [
  { title: "Academic Publishing", description: "Publish your research in Scopus & Web of Science indexed journals with global reach.", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop" },
  { title: "Global Conference Management", description: "World-class execution of international scientific summits and corporate symposiums.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop" },
  { title: "Thesis & Dissertation Consulting", description: "Expert academic mentoring and editorial support for postgraduate researchers.", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop" },
  { title: "Executive Skill Development", description: "Professional upskilling programs certified by leading international universities.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" },
];

const recentConferencesData = [
  {
    title: "ICCEMB-26",
    date: "31 May 2026",
    images: [
      glimpse1, glimpse2, glimpse3, glimpse4, glimpse5, glimpse6,
      glimpse7, glimpse8, glimpse9, glimpse10, glimpse11, glimpse12,
      glimpse13, glimpse14, glimpse15, glimpse16, glimpse17, glimpse18,
      glimpse19, glimpse20, glimpse21, glimpse22, glimpse23, glimpse24
    ]
  },
  {
    title: "ICQADTS-2026",
    date: "12 April 2026",
    images: [
      "https://static.wixstatic.com/media/30814e_aa5619b82c7c450688561ea1aaf6094b~mv2.png",
      "https://static.wixstatic.com/media/30814e_8c54d1924aba40088caea88bc95dd1f1~mv2.png",
      "https://static.wixstatic.com/media/30814e_a0bcfce7303842b0b1088e7e959df749~mv2.png",
      "https://static.wixstatic.com/media/30814e_6efd9af6f58d41d1a813fd517f039b4e~mv2.png",
      "https://static.wixstatic.com/media/30814e_09571674cb8b483fa4476eccf53d73d8~mv2.png",
      "https://static.wixstatic.com/media/30814e_db36abbe77f24a72b15ee08927f1d62e~mv2.png",
      "https://static.wixstatic.com/media/30814e_a81e3ce5a5ad4f39a5827cc6f3757f2c~mv2.png",
      "https://static.wixstatic.com/media/30814e_605ee2e7551548308a37980f16e3f05c~mv2.png",
      "https://static.wixstatic.com/media/30814e_25032ed10f6040e4b648c22f8e779cff~mv2.png",
      "https://static.wixstatic.com/media/30814e_f38207f174624162a70afa18615cb002~mv2.png",
    ]
  },
  {
    title: "ICAIDSS-2026",
    date: "29 March 2026",
    images: [
      "https://static.wixstatic.com/media/30814e_e2ab8291c65443b08037daea7ef6a78d~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_6a64ae4eab594e29acaa5124ade0d3f7~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_d917132ef2df4159b65db1a83a1c9bc2~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_91552c0f2ecb4d3ca64d3150790b5f6b~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_9a7ec9347a0a41b799a175f951ce48fe~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_f202f06835db41d88aa73f77f3c7b9de~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_dc40a06ecd3044baa2cf785c5f8bfe1e~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_174db642e9584aa784d19c461ae29bad~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_be514a5a7b134873aec6cd5aa0de916f~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_b9b43af3aa7e40768b779058320b59b9~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_199d91bd8cb848539fc8f0e37c18b155~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_f86882c18c1444b1a13616a827c6775f~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_745ecb8123d14e4c9405418d54492332~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_23a41863b4d346e4852747feb1e9f896~mv2.jpeg",
    ]
  },
  {
    title: "ICAESET-2026",
    date: "15 March 2026",
    images: [
      "https://static.wixstatic.com/media/30814e_33d4e51ec9b548869dc79ff1d169efaa~mv2.png",
      "https://static.wixstatic.com/media/30814e_5e715a3196b14d579d140d5b3eb1ddca~mv2.png",
      "https://static.wixstatic.com/media/30814e_93a8f9332aef4c4aa7fd4f0e49546811~mv2.png",
      "https://static.wixstatic.com/media/30814e_a9f31589b453419d80070cb9359201c8~mv2.png",
      "https://static.wixstatic.com/media/30814e_d86d730b88634ffd973c45f6ce16ebeb~mv2.png",
      "https://static.wixstatic.com/media/30814e_d7cee65f8eb14561ad4ef13530292baa~mv2.png",
    ]
  },
  {
    title: "ICNSE-26",
    date: "1 March 2026",
    images: [
      "https://static.wixstatic.com/media/502b14_a0dbb2f7139047a08a766656bd0f7454~mv2.png",
      "https://static.wixstatic.com/media/502b14_9126573200ea4347ad45216bf5d5d0cc~mv2.png",
      "https://static.wixstatic.com/media/502b14_09e44ae6e60446d5a50f320be751f625~mv2.png",
      "https://static.wixstatic.com/media/502b14_3795a6d8c1e04913be8f9f278820b1f5~mv2.png",
      "https://static.wixstatic.com/media/502b14_a1d2cd32d08743ca8aff3aef4fa76139~mv2.png",
      "https://static.wixstatic.com/media/502b14_4314189cd9e44cd680613f130b26535f~mv2.png",
      "https://static.wixstatic.com/media/502b14_2202fa7fa65c48fbb7c21fedceb02752~mv2.png",
      "https://static.wixstatic.com/media/502b14_21b36ee9a54e4019ad6c50441ba55b96~mv2.png",
    ]
  },
  {
    title: "ICTET-26",
    date: "15 February 2026",
    images: [
      "https://static.wixstatic.com/media/502b14_edb34fd966bd47828bf664f663abdbf9~mv2.png",
      "https://static.wixstatic.com/media/502b14_219e55d10fce4c84a137a2237cee8ea9~mv2.png",
      "https://static.wixstatic.com/media/502b14_2eaed030e42b41cd83cd53cdfd2e7c08~mv2.png",
      "https://static.wixstatic.com/media/502b14_60fdae1f90e94ac9bc4c901d9d3fab98~mv2.png",
      "https://static.wixstatic.com/media/502b14_ec71360407204e648fac1ff35d41c712~mv2.png",
      "https://static.wixstatic.com/media/502b14_c5b24e50b1a04652a81e622dfbc4101f~mv2.png",
      "https://static.wixstatic.com/media/502b14_0d1fcbd0b5824e94ac5ff878f38b3d15~mv2.png",
      "https://static.wixstatic.com/media/502b14_1ed526bb46584faba5572a59d62cc05c~mv2.png",
      "https://static.wixstatic.com/media/502b14_46cb554fd614451f977bb8e91e7ff44e~mv2.png",
      "https://static.wixstatic.com/media/502b14_8d85b964b4aa4760a4372158c98302bb~mv2.png",
      "https://static.wixstatic.com/media/502b14_a16af0a1732a45fcac7ecb2cd354d5c7~mv2.png",
    ]
  },
];

const rotations = [-3, 2, -1.5, 3, -2, 1, -2.5, 2.5, -1, 3, -3, 1.5, -2, 2];

const upcoming = [
  { title: "AIFORGE 2026: Agentic Intelligence", city: "Hybrid Mode", date: "6 September 2026", topic: "AI & Engineering", isbn: "978-81-687765-9-3", link: "/aiforge-26", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" },
  { title: "ICMREF-26: Multidisciplinary Research & AI", city: "Tbilisi, Georgia", date: "4 October 2026", topic: "Technology & AI", link: "/icmref-26", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" },
];

const CONFERENCE_DATE = new Date("2026-07-05T09:00:00+05:30");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [countdown, setCountdown] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setCountdown(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return countdown;
}

const Index = () => {
  const [activeConf, setActiveConf] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const handleConfSwitch = (idx: number) => {
    if (idx === activeConf) return;
    setActiveConf(idx);
    setAnimKey(k => k + 1);
  };

  return (
    <main className="bg-background noise">
      {/* HERO SECTION - AI4 STYLE */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 overflow-hidden">
        {/* Background Image with Dark Cyan Tint Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop" alt="High Tech Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#021618]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000508]" />
        </div>

        {/* Side Decorative Texts */}
        <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-white/50 text-sm font-bold tracking-[0.5em] uppercase whitespace-nowrap z-10 pointer-events-none">
          Eminsphere Global
        </div>
        <div className="hidden xl:block absolute right-8 top-[60%] text-white/50 text-sm font-bold tracking-[0.5em] uppercase whitespace-nowrap z-10 pointer-events-none">
          <span className="block mb-1">Global</span>
          <span className="text-primary text-lg">2026</span>
        </div>

        <div className="relative container z-10 max-w-5xl mx-auto px-4 flex flex-col items-center text-center mt-10">
          
          {/* MASSIVE TYPOGRAPHY */}
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-sans font-extrabold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
            Join Us at The Forefront <br/> of Global Innovation
          </h1>
          
          {/* SUBHEADING */}
          <p className="text-base md:text-lg text-white/70 max-w-2xl mb-12 drop-shadow-lg font-medium leading-relaxed">
            Eminsphere™ is the world's largest gathering of academic leaders and researchers. Join thousands of visionaries and technology innovators at the epicenter of the global community.
          </p>

          {/* PILL BOX BUTTON */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md p-1.5 pl-8 shadow-[0_0_30px_rgba(28,231,212,0.15)] hover:shadow-[0_0_40px_rgba(28,231,212,0.25)] transition-all duration-300">
            <div className="flex flex-col text-left mr-6">
              <span className="text-white text-[13px] font-bold tracking-widest leading-tight">MAY 31 2026</span>
              <span className="text-white/70 text-[10px] font-semibold tracking-wider leading-tight">RESEARCH FUNDING DEADLINE</span>
            </div>
            <div className="w-px h-10 bg-white/20 mx-2"></div>
            <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90 h-[52px] px-10 text-sm font-black uppercase tracking-wider transition-all duration-300 ml-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Link to="/research-funding">Apply Now</Link>
            </Button>
          </div>
        </div>

        {/* BOTTOM STATS BAR */}
        <div className="absolute bottom-0 inset-x-0 bg-[#0a0a0a]/90 border-t border-white/5 py-8 backdrop-blur-md z-20">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
              {stats.map((s, i) => (
                <div key={s.label} className={`flex flex-col items-center text-center px-4 ${i !== 0 ? 'md:border-l border-white/10' : ''}`}>
                  <div className="text-4xl md:text-5xl font-sans font-black text-white mb-2 tracking-tight drop-shadow-lg">
                    {s.value.replace('+', '')}
                    <span className="text-primary">+</span>
                  </div>
                  <div className="text-[10px] md:text-xs text-white/70 uppercase tracking-[0.2em] font-bold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE FLOATING TICKET BANNER FOR AIFORGE 2026 */}
      <div className="relative z-30 container px-4 mx-auto max-w-5xl mt-16 mb-8">
        <div className="relative group rounded-[2.5rem] bg-gradient-to-r from-accent via-primary to-secondary p-1 shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.3)] transition-all duration-500 transform hover:-translate-y-2">
          
          <div className="relative h-full w-full bg-[#050B14] rounded-[2.4rem] overflow-hidden flex flex-col md:flex-row">
            
            {/* Top Tape overlay */}
            <div className="absolute top-0 left-0 w-full bg-accent/10 border-b border-accent/20 flex justify-between px-8 py-2 z-20 backdrop-blur-md">
              <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">Limited Availability</span>
              <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">Priority Access</span>
            </div>

            {/* Left - Image Context */}
            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10"></div>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="AIFORGE 2026" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-60 grayscale hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050B14] via-transparent to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 z-20">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center border-2 border-[#050B14] shadow-lg">
                  <Award className="w-6 h-6 text-[#050B14]" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="md:w-3/5 p-8 md:p-12 relative z-10 flex flex-col justify-center pt-12 md:pt-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-4 self-start">
                <Sparkles className="w-3 h-3" /> Featured Conference
              </div>
              
              <h3 className="text-4xl md:text-5xl font-serif font-black text-white mb-2 tracking-tight">
                AIFORGE 2026
              </h3>
              <p className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent mb-6 leading-snug">
                Agentic Intelligence for Foundations, Orchestration, Research, Governance & Engineering
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <Calendar className="w-4 h-4 text-accent" /> 6 September 2026
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                  <Globe className="w-4 h-4 text-accent" /> Hybrid Mode, Global
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <Button asChild size="lg" className="rounded-full bg-accent hover:bg-primary text-[#050B14] font-black uppercase tracking-wider px-8 h-14 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                  <Link to="/aiforge-26" className="flex items-center gap-2">
                    Register Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <div className="hidden sm:flex flex-col">
                  <span className="text-white font-bold text-sm flex items-center gap-1"><Zap className="w-3 h-3 text-accent" /> Selling fast</span>
                  <span className="text-white/50 text-xs">Join global innovators</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* PROMO VIDEO SECTION */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Experience The <span className="text-primary">Future</span> of Research</h2>
            <p className="text-lg text-white/70">Watch how Eminsphere connects global innovators and academic leaders.</p>
          </div>
          
          <div className="max-w-5xl mx-auto relative group">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-500" />
            
            {/* Video Container */}
            <div className="relative rounded-[2rem] overflow-hidden bg-black border border-white/10 shadow-2xl">
              <video 
                src={promoVideo} 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full aspect-video object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES - FLOATING CARDS */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-4">
                <Zap className="h-4 w-4" /> Disciplines
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">Explore Global Events by Expertise</h2>
            </div>
            <Button asChild variant="outline" className="glass rounded-full px-8 h-14 hover:bg-white/10 font-bold">
              <Link to="/upcoming-conferences">View All Categories <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ icon: Icon, label, count, image }) => (
              <Link to="/upcoming-conferences" key={label} className="block group h-full">
                <Card
                  className="relative overflow-hidden border-0 bg-black p-0 h-[340px] shadow-2xl transition-all duration-500 rounded-3xl cursor-pointer hover:shadow-[0_20px_40px_-15px_rgba(28,231,212,0.2)]"
                >
                  <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000508] via-[#000508]/60 to-transparent transition-colors duration-500" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:-translate-y-2 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">
                      <Icon className="h-7 w-7 text-white group-hover:text-black transition-colors duration-500" />
                    </div>
                    
                    <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                      <h3 className="font-sans font-black text-2xl text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-500">{label}</h3>
                      <div className="flex items-center text-white/70 font-bold text-sm group-hover:text-white transition-colors duration-500 uppercase tracking-widest">
                        <span>{count}</span>
                        <ArrowRight className="ml-3 h-4 w-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED UPCOMING CONFERENCES - PARALLAX STYLE */}
      <section className="relative py-32 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-black to-background" />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Upcoming Flagship Summits</h2>
            <p className="text-xl text-muted-foreground">Reserve your seat at the world's most anticipated scientific gatherings.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {upcoming.map((c, idx) => (
              <Card key={c.title} className="group relative overflow-hidden rounded-[2rem] border-0 bg-card h-[500px]">
                <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 w-max">
                    {c.topic}
                  </div>
                  <h3 className="font-serif font-bold text-3xl text-white mb-4 leading-tight group-hover:text-primary transition-colors">{c.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 font-medium mb-8">
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {c.date}</div>
                    <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {c.city}</div>
                    {c.isbn && (
                      <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> ISBN: {c.isbn}</div>
                    )}
                  </div>
                  
                  <Button asChild className="w-full bg-white/10 backdrop-blur-md hover:bg-primary hover:text-primary-foreground border border-white/20 text-white font-bold h-14 rounded-xl transition-all duration-300">
                    <Link to={c.link}>
                      Register Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="glass border-primary/30 hover:bg-primary/10 text-primary h-14 px-10 rounded-full font-bold">
              <Link to="/upcoming-conferences">View Complete Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GLOBAL CONFERENCES INFOGRAPHIC SECTION */}
      <section className="relative py-32 bg-background overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side (Left) */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-6">
                <Globe2 className="h-4 w-4" /> Worldwide Reach
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-foreground mb-6 leading-[1.1] tracking-tight">
                Global Conferences <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">That Drive Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                Join a dynamic global network of researchers and industry leaders. Our hybrid conferences blend virtual accessibility with unparalleled in-person networking opportunities.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { title: "Connect & Collaborate", desc: "Network with international experts and leaders in your field." },
                  { title: "Publish in Indexed Journals", desc: "Showcase your work in high-impact factor journals." },
                  { title: "Experience Hybrid Formats", desc: "Attend virtually or in-person with seamless integration." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-black px-10 h-14 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm">
                  <Link to="/upcoming-conferences">Explore Conferences <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>

            {/* Infographic Image Container (Right) */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border group order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img src={globalConfImg} alt="Global Conferences That Drive Impact" className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" />
            </div>

          </div>
        </div>
      </section>

      {/* FAST-TRACK PUBLISHING SECTION (SCOPUS INFOGRAPHIC) */}
      <section className="relative py-32 bg-[#000810] overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Infographic Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(28,231,212,0.15)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img src={scopusInfoImg} alt="Swift Publishing SCOPUS Indexed Journals" className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700" />
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-6">
                <BookOpen className="h-4 w-4" /> Global Recognition
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white mb-6 leading-[1.1] tracking-tight">
                Swift Publishing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">SCOPUS</span> Indexed Journals
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
                Eminsphere provides a guaranteed, fast-track publishing pipeline for multidisciplinary research. Ensure your work reaches the global academic community with maximum visibility and prestige.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { title: "Boost Your Research Visibility", desc: "Gain unparalleled exposure among global institutions." },
                  { title: "Collaborate with Leading Experts", desc: "Connect with top-tier academics in your specific discipline." },
                  { title: "Get Indexed in Scopus", desc: "Secure your legacy with recognized, indexed publications." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-black text-primary">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-full font-black px-10 h-14 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm">
                  <Link to="/recent-proceedings">Publish Your Work Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY EMINSPHERE — TRUST & CREDIBILITY SECTION */}
      <section className="relative py-32 overflow-hidden bg-[#000d14]">
        <div className="absolute inset-0 dot-pattern opacity-5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-5">
              <ShieldCheck className="h-4 w-4" /> Globally Recognised
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Why Researchers Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Eminsphere</span></h2>
            <p className="text-lg text-white/60 leading-relaxed">
              At Eminsphere, we bring together world-class researchers, academic institutions, and industry pioneers under one roof. Our conferences offer unparalleled opportunities to stay updated on cutting-edge technological developments, major breakthroughs, and global achievements. We are committed to advancing knowledge, fostering collaboration, and upholding the highest standards of academic integrity — making every Eminsphere event a globally credible milestone in your research journey.
            </p>
          </div>

          {/* GLOBAL REACH — ANIMATED COUNTRIES */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
                <Globe2 className="h-4 w-4" /> International Presence
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Every Corner of the World.</span>
              </h3>
              <p className="text-white/50 max-w-2xl mx-auto text-sm">
                Eminsphere conferences unite researchers, professors, and industry leaders from across the globe. Our past speakers have represented over 20 nations — each bringing unique perspectives that make our events truly international.
              </p>
            </div>

            {/* Animated Scrolling Country Pills */}
            <div className="overflow-hidden space-y-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000d14] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000d14] to-transparent z-10 pointer-events-none" />

              {/* Row 1 — scroll left */}
              <div className="flex w-max animate-[scroll_40s_linear_infinite]">
                {[
                  { flag: "🇴🇲", name: "Oman" },
                  { flag: "🇷🇸", name: "Serbia" },
                  { flag: "🇹🇷", name: "Turkey" },
                  { flag: "🇯🇴", name: "Jordan" },
                  { flag: "🇺🇸", name: "United States" },
                  { flag: "🇪🇸", name: "Spain" },
                  { flag: "🇦🇿", name: "Azerbaijan" },
                  { flag: "🇩🇿", name: "Algeria" },
                  { flag: "🇮🇷", name: "Iran" },
                  { flag: "🇵🇭", name: "Philippines" },
                  { flag: "🇰🇬", name: "Kyrgyzstan" },
                  { flag: "🇬🇧", name: "United Kingdom" },
                  { flag: "🇱🇧", name: "Lebanon" },
                  { flag: "🇲🇦", name: "Morocco" },
                  { flag: "🇮🇳", name: "India" },
                  { flag: "🇲🇾", name: "Malaysia" },
                  { flag: "🇸🇦", name: "Saudi Arabia" },
                  { flag: "🇧🇩", name: "Bangladesh" },
                  // Duplicate for seamless loop
                  { flag: "🇴🇲", name: "Oman" },
                  { flag: "🇷🇸", name: "Serbia" },
                  { flag: "🇹🇷", name: "Turkey" },
                  { flag: "🇯🇴", name: "Jordan" },
                  { flag: "🇺🇸", name: "United States" },
                  { flag: "🇪🇸", name: "Spain" },
                  { flag: "🇦🇿", name: "Azerbaijan" },
                  { flag: "🇩🇿", name: "Algeria" },
                  { flag: "🇮🇷", name: "Iran" },
                  { flag: "🇵🇭", name: "Philippines" },
                  { flag: "🇰🇬", name: "Kyrgyzstan" },
                  { flag: "🇬🇧", name: "United Kingdom" },
                  { flag: "🇱🇧", name: "Lebanon" },
                  { flag: "🇲🇦", name: "Morocco" },
                  { flag: "🇮🇳", name: "India" },
                  { flag: "🇲🇾", name: "Malaysia" },
                  { flag: "🇸🇦", name: "Saudi Arabia" },
                  { flag: "🇧🇩", name: "Bangladesh" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 mx-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 flex-shrink-0 hover:bg-white/10 hover:border-primary/40 transition-colors cursor-default">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="text-white/80 font-semibold text-sm whitespace-nowrap">{c.name}</span>
                  </div>
                ))}
              </div>

              {/* Row 2 — scroll right (reverse) */}
              <div className="flex w-max animate-[scroll_50s_linear_infinite_reverse]">
                {[
                  { flag: "🇺🇸", name: "USA" },
                  { flag: "🇮🇳", name: "India" },
                  { flag: "🇬🇧", name: "UK" },
                  { flag: "🇱🇧", name: "Lebanon" },
                  { flag: "🇲🇦", name: "Morocco" },
                  { flag: "🇸🇦", name: "Saudi Arabia" },
                  { flag: "🇧🇩", name: "Bangladesh" },
                  { flag: "🇲🇾", name: "Malaysia" },
                  { flag: "🇩🇿", name: "Algeria" },
                  { flag: "🇵🇭", name: "Philippines" },
                  { flag: "🇹🇷", name: "Turkey" },
                  { flag: "🇯🇴", name: "Jordan" },
                  { flag: "🇷🇸", name: "Serbia" },
                  { flag: "🇦🇿", name: "Azerbaijan" },
                  { flag: "🇰🇬", name: "Kyrgyzstan" },
                  { flag: "🇮🇷", name: "Iran" },
                  { flag: "🇴🇲", name: "Oman" },
                  { flag: "🇪🇸", name: "Spain" },
                  // Duplicate for seamless loop
                  { flag: "🇺🇸", name: "USA" },
                  { flag: "🇮🇳", name: "India" },
                  { flag: "🇬🇧", name: "UK" },
                  { flag: "🇱🇧", name: "Lebanon" },
                  { flag: "🇲🇦", name: "Morocco" },
                  { flag: "🇸🇦", name: "Saudi Arabia" },
                  { flag: "🇧🇩", name: "Bangladesh" },
                  { flag: "🇲🇾", name: "Malaysia" },
                  { flag: "🇩🇿", name: "Algeria" },
                  { flag: "🇵🇭", name: "Philippines" },
                  { flag: "🇹🇷", name: "Turkey" },
                  { flag: "🇯🇴", name: "Jordan" },
                  { flag: "🇷🇸", name: "Serbia" },
                  { flag: "🇦🇿", name: "Azerbaijan" },
                  { flag: "🇰🇬", name: "Kyrgyzstan" },
                  { flag: "🇮🇷", name: "Iran" },
                  { flag: "🇴🇲", name: "Oman" },
                  { flag: "🇪🇸", name: "Spain" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-2 mx-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 flex-shrink-0 hover:bg-white/10 hover:border-primary/40 transition-colors cursor-default">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="text-white/80 font-semibold text-sm whitespace-nowrap">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Country count strip */}
            <div className="flex justify-center mt-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <Globe2 className="h-5 w-5 text-primary" />
                <span className="text-white font-bold text-sm">20+ Countries · 45+ Past Speakers · 5 Continents</span>
              </div>
            </div>
          </div>

          {/* Enterprise Services — Interactive Accordion */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-14">Our Enterprise Solutions</h3>
            <div className="divide-y divide-white/5">
              {[
                {
                  num: "01",
                  title: "Academic Publishing",
                  tag: "Scopus · Web of Science",
                  description: "Publish your research in globally recognized Scopus and Web of Science indexed journals. Our editorial team ensures your work meets the highest standards of peer-reviewed academic publishing.",
                  icon: BookOpen,
                  color: "hsl(var(--primary))",
                },
                {
                  num: "02",
                  title: "Global Conference Management",
                  tag: "Virtual · In-Person · Hybrid",
                  description: "World-class end-to-end execution of international scientific summits and corporate symposiums — from keynote curation to certificate issuance, handled with institutional precision.",
                  icon: Globe2,
                  color: "hsl(var(--primary))",
                },
                {
                  num: "03",
                  title: "Thesis & Dissertation Consulting",
                  tag: "PhD · Masters · Research",
                  description: "Expert academic mentoring and editorial support for postgraduate researchers. Our advisors have decades of combined research experience across engineering, medicine, and social sciences.",
                  icon: GraduationCap,
                  color: "hsl(var(--primary))",
                },
                {
                  num: "04",
                  title: "Executive Skill Development",
                  tag: "Certified · International",
                  description: "Professional upskilling programs certified by leading international universities. Designed for industry leaders, researchers, and institutions looking to expand competency and global standing.",
                  icon: Award,
                  color: "hsl(var(--primary))",
                },
              ].map((s, i) => (
                <div
                  key={s.num}
                  className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_auto] gap-6 md:gap-10 items-center py-8 px-4 md:px-8 cursor-default hover:bg-white/3 rounded-2xl transition-all duration-500 relative overflow-hidden"
                >
                  {/* Animated left border */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full"
                    style={{ backgroundColor: s.color }}
                  />

                  {/* Big Number */}
                  <div
                    className="font-black text-5xl md:text-7xl leading-none tabular-nums transition-colors duration-500 group-hover:opacity-100 opacity-20"
                    style={{ color: s.color }}
                  >
                    {s.num}
                  </div>

                  {/* Title + Description */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors">{s.title}</h4>
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{ color: s.color, borderColor: `${s.color}40`, backgroundColor: `${s.color}10` }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed max-w-2xl max-h-0 overflow-hidden group-hover:max-h-24 group-hover:text-white/70 transition-all duration-700">
                      {s.description}
                    </p>
                  </div>

                  {/* Icon (desktop only) */}
                  <div
                    className="hidden md:flex w-16 h-16 rounded-2xl items-center justify-center flex-shrink-0 border transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${s.color}10`, borderColor: `${s.color}30` }}
                  >
                    <s.icon className="h-7 w-7 transition-colors duration-500" style={{ color: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credibility Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
            {[
              { value: "Double-Blind", label: "Peer Review Process", icon: ShieldCheck },
              { value: "ISO Aligned", label: "Event Management Standards", icon: Award },
              { value: "100%", label: "Plagiarism-Free Policy", icon: BookOpen },
              { value: "15+ Years", label: "Academic Publishing Experience", icon: Globe2 },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center justify-center text-center p-8 bg-white/3 hover:bg-white/6 transition-colors">
                <Icon className="h-6 w-6 text-primary mb-4" />
                <div className="text-2xl font-black text-white mb-1">{value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-bold">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONFERENCE GALLERY — INTERACTIVE POLAROID SWITCHER */}
      <style>{`
        @keyframes polaroidIn {
          0% { opacity: 0; transform: scale(0.7) translateY(30px) rotate(var(--rot)); }
          100% { opacity: 1; transform: scale(1) translateY(0) rotate(var(--rot)); }
        }
      `}</style>
      <section className="py-32 bg-[#000508] overflow-hidden border-t border-white/5">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
              <Sparkles className="h-4 w-4" /> Legacy of Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Glimpses from Our Conferences</h2>
            <p className="text-white/50">Select a conference below to explore its moments.</p>
          </div>

          {/* Conference Tab Switcher */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {recentConferencesData.map((conf, idx) => (
              <button
                key={conf.title}
                onClick={() => handleConfSwitch(idx)}
                className={`px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeConf === idx
                    ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {conf.title}
                <span className={`ml-2 text-[10px] font-normal ${activeConf === idx ? 'text-[#000508]/70' : 'text-white/30'}`}>{conf.date}</span>
              </button>
            ))}
          </div>

          {/* Staggered Polaroid Photo Grid */}
          <div key={animKey} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recentConferencesData[activeConf].images.map((img, idx) => {
              const rot = rotations[idx % rotations.length];
              return (
                <div
                  key={`${animKey}-${idx}`}
                  className="group cursor-zoom-in"
                  style={{
                    opacity: 0,
                    animation: `polaroidIn 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                    animationDelay: `${idx * 60}ms`,
                    ['--rot' as string]: `${rot}deg`,
                  }}
                >
                  <div
                    className="bg-white p-2 pb-8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:rotate-0 transition-transform duration-400"
                    style={{ transform: `rotate(${rot}deg)` }}
                  >
                    <img
                      src={img}
                      alt={`${recentConferencesData[activeConf].title} moment ${idx + 1}`}
                      className="w-full aspect-video object-cover block"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA below gallery */}
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 h-12 font-bold">
              <Link to="/recent-conferences">View All Conference Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PUBLICATION CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center bg-fixed" />
        <div className="container relative z-10 max-w-5xl">
          <Card className="glass-strong border-primary/20 p-12 md:p-20 text-center rounded-[3rem] shadow-[0_0_100px_rgba(152,227,152,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-20 pointer-events-none" />
            <BookOpen className="h-20 w-20 mx-auto text-primary mb-8" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
              Get Published in Scopus & Web of Science
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Elevate your academic profile. All accepted conference papers undergo rigorous double-blind peer review and are published in globally indexed partner journals and proceedings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-10 rounded-full font-bold text-lg shadow-gold hover:-translate-y-1 transition-all">
                <Link to="/registration">Submit Your Manuscript</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full font-bold text-lg border-white/20 text-white hover:bg-white/10 transition-all">
                <Link to="/recent-proceedings">View Digital Conference Proceedings</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Index;
