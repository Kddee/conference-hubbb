import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, Globe, BookOpen, Star, Trophy, Award, Search, Book, User, Crown, Lightbulb, Zap, Heart, Medal, Database, Cpu, Network, Shield, Settings, Microscope, Sparkles } from "lucide-react";
import { useState } from "react";
import speakerImg from "@/assets/WhatsApp Image 2026-06-17 at 7.59.19 PM (1).jpeg";
import deepakSinghImg from "@/assets/WhatsApp Image 2026-07-25 at 10.08.48 AM.jpeg";
import advisoryImg1 from "@/assets/image copy 13.png";
import advisoryImg2 from "@/assets/image copy 14.png";
import talebHammadImg from "@/assets/image copy 15.png";
import judgeImg1 from "@/assets/image copy 16.png";
import judgeImg2 from "@/assets/image copy 17.png";
import glimpse1 from "@/assets/Screenshot 2026-07-26 185654.png";
import glimpse2 from "@/assets/Screenshot 2026-07-26 192304.png";
import glimpse3 from "@/assets/Screenshot 2026-07-26 192410.png";
import glimpse4 from "@/assets/Screenshot 2026-07-26 194531.png";
import glimpse5 from "@/assets/Screenshot 2026-07-26 200802.png";
import glimpse6 from "@/assets/Screenshot 2026-07-26 201646.png";
import glimpse7 from "@/assets/Screenshot 2026-07-26 203543.png";
import glimpse8 from "@/assets/Screenshot 2026-07-26 175052.png";
import glimpse9 from "@/assets/Screenshot 2026-07-26 175522.png";
import glimpse10 from "@/assets/Screenshot 2026-07-26 181210.png";
import glimpse11 from "@/assets/Screenshot 2026-07-26 183214.png";
import glimpse12 from "@/assets/Screenshot 2026-07-26 183500.png";
import glimpse13 from "@/assets/Screenshot 2026-07-26 171929.png";
import glimpse14 from "@/assets/Screenshot 2026-07-26 173127.png";
import glimpse15 from "@/assets/Screenshot 2026-07-26 174930.png";
import glimpse16 from "@/assets/Screenshot 2026-07-26 114953.png";

const conferenceData = {
  id: "AIFORGE 2026",
  title: "International Conference on Agentic Intelligence for Foundations, Orchestration, Research, Governance and Engineering",
  isbn: "978-81-687765-9-3",
  date: "6 September 2026",
  location: "Hybrid Mode, Global",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdovsHUgDTtUSLoXdyufXRN67K59HSiLsxhmOUKQaE9VRcdwA/viewform?usp=publish-editor",
  cmtLink: "https://cmt3.research.microsoft.com/AIFORGE2026",
  about: [
    "A premier international platform bringing together researchers, engineers, academicians, and industry professionals to explore cutting-edge advancements in Agentic Intelligence, foundation models, and the orchestration of complex AI systems driving the future of innovation.",
    "AIFORGE 2026 focuses on the foundational research, orchestration, governance, and engineering of agentic AI. The conference promotes interdisciplinary research and practical innovations across domains such as multi-agent systems, AI alignment, robust AI engineering, and AI policy."
  ],
  glimpses: [],
  callForPapers: "Researchers and professionals are invited to submit original contributions in agentic AI, foundation models, AI orchestration, governance, and AI engineering.",
  objectives: [
    { title: "Agentic AI Innovation", desc: "Advancing autonomous and multi-agent systems." },
    { title: "AI Orchestration", desc: "Developing frameworks for managing complex AI workflows." },
    { title: "AI Governance", desc: "Formulating policies for safe, aligned, and ethical AI." },
    { title: "AI Engineering", desc: "Building robust, scalable, and secure AI foundations." }
  ],
  publication: [
    { title: "ISBN Conference Proceedings", img: "https://i.postimg.cc/VvnzKNKj/image.png", desc: "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number (ISBN: 978-81-687765-9-3), ensuring global visibility, citation, and academic recognition." },
    { title: "Google Scholar Indexing", img: "/google-scholar.svg", desc: "All published papers will be indexed in Google Scholar, providing broad global accessibility, citation tracking, and enhanced author visibility." },
    { title: "Web of Science (Under Consideration)", img: "https://i.postimg.cc/0NX5QF6x/image.png", desc: "Selected papers may be considered for submission to journals indexed in Web of Science, based on quality, originality, and editorial evaluation." },
    { title: "DOI & Digital Access", img: null, desc: "Each published paper may be assigned a Digital Object Identifier (DOI) to ensure permanent accessibility and citation tracking." }
  ],
  awards: [
    {
      title: "Global Innovation Excellence Award",
      desc: "Recognizes outstanding innovation and visionary solutions.",
      badge: "Visionary Innovation",
      icon: Lightbulb,
      glow: "bg-amber-400",
      bg: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/30",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      iconColor: "text-amber-400"
    },
    {
      title: "Industry Leadership Award",
      desc: "Honors excellence in demonstrating significant industry impact and leadership.",
      badge: "Executive Leadership",
      icon: Crown,
      glow: "bg-blue-400",
      bg: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/30",
      badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      title: "Research Impact Award",
      desc: "Awarded for exceptional contributions to research and technological advancement.",
      badge: "Scientific Advancement",
      icon: Microscope,
      glow: "bg-purple-400",
      bg: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/30",
      badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      title: "Emerging Professional Award",
      desc: "Celebrates promising talent and emerging leaders in the field.",
      badge: "Rising Talent",
      icon: Zap,
      glow: "bg-emerald-400",
      bg: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/30",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      title: "Outstanding Presentation Award",
      desc: "Recognizes the most compelling, clear, and impactful presentation.",
      badge: "Delivery Excellence",
      icon: Trophy,
      glow: "bg-rose-400",
      bg: "from-rose-500/20 to-rose-500/5",
      border: "border-rose-500/30",
      badgeColor: "bg-rose-500/15 text-rose-400 border-rose-500/30",
      iconColor: "text-rose-400"
    }
  ],
  tracks: [
    { title: "Foundation Models & LLMs", desc: "Architectures, pre-training, fine-tuning, and evaluation.", icon: Database },
    { title: "Agentic Intelligence", desc: "Autonomous agents, multi-agent collaboration, and planning.", icon: Cpu },
    { title: "AI Orchestration & Systems", desc: "Agent frameworks, deployment, scaling, and efficiency.", icon: Network },
    { title: "AI Governance & Ethics", desc: "AI safety, alignment, regulation, and policy frameworks.", icon: Shield },
    { title: "AI Engineering", desc: "DevOps for AI, ML pipelines, testing, and monitoring.", icon: Settings },
    { title: "Applied AI Research", desc: "Agentic AI in healthcare, finance, software engineering, etc.", icon: Microscope }
  ],
  timeline: [
    { date: "28 August 2026", label: "Paper Submission", desc: "Deadline for paper submission" },
    { date: "2 September 2026", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "4 September 2026", label: "Registration Deadline", desc: "Final camera-ready and registration deadline" },
    { date: "6 September 2026", label: "Conference Date", desc: "Main event" }
  ],
  advisoryBoard: [
    {
      name: "Dr. Walida Ounruean",
      role: "Conference General Chair",
      org: "Uttaradit Rajabhat University",
      country: "Thailand",
      img: advisoryImg1,
      bio: ["Dr. Walida Ounruean is a distinguished academic and researcher known for her impactful contributions to education and technology. Serving as a crucial bridge between innovative educational methodologies and modern AI applications, her work is internationally recognized."],
      publications: ["Selected Publications coming soon..."],
      awards: ["Excellence in Research Award"]
    },
    {
      name: "Ezinne Esther Arisa",
      role: "Conference Co-Chair",
      org: "Candy Rainbow Creations",
      country: "South Africa",
      img: advisoryImg2,
      bio: ["Ezinne Esther Arisa is an industry leader and visionary in digital transformation. Her strategic insights have guided numerous organizations through complex technological shifts, cementing her status as a prominent figure in global innovation."],
      publications: ["Selected Publications coming soon..."],
      awards: ["Industry Leadership Award"]
    },
    {
      name: "Marghescu Cristina-Florentina",
      role: "Advisory Board Member",
      org: "University Politehnica of Bucharest",
      country: "Romania",
      img: "https://static.wixstatic.com/media/30814e_fb0f8a532d8a413abf8b61b143684fed~mv2.png"
    },
    {
      name: "Nadine Zeinoun",
      role: "Advisory Board Member",
      org: "President, ICF Chapter Ottawa",
      country: "Lebanon",
      img: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg"
    },
    {
      name: "Dr. Mbombi Khizamane",
      role: "Advisory Board Member",
      org: "Nursing College Limpopo",
      country: "South Africa",
      img: "/speakers/dr-mbombi.jpg"
    },
    {
      name: "Dr. Tintin Flores",
      role: "Advisory Board Member",
      org: "Biomedical & Healthcare Technology, Valenzuela",
      country: "Philippines",
      img: "/speakers/dr-tintin-flores.jpg"
    }
  ],
  judges: [],
  speakers: [
    {
      name: "Wiktoria Gromowa-Cieślik",
      category: "Distinguished Speaker",
      designation: "CEO, Technology Executive, Chief Metrics Officer",
      org: "Human-Tech Fusion (HTFusion)",
      country: "Poland",
      img: "/speakers/wiktoria-gromowa-cieslik.jpg"
    },
    {
      name: "Prof. Dr. Alexander Bull",
      category: "Plenary Speaker",
      org: "IU International University",
      country: "Germany",
      img: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg"
    },
    {
      name: "Hardeep Singh Tiwana",
      category: "Keynote Speaker",
      designation: "Golden Kubestronaut, The Kubernetes Show Creator",
      org: "The Kubernetes Show",
      country: "USA",
      img: "/speakers/hardeep-singh-tiwana.jpg"
    },
    {
      name: "Dr. Sravanthi Dontu",
      category: "Keynote Speaker",
      designation: "Independent Researcher, Corporate Professional",
      org: "Department of Information Technology, University of the Cumberlands",
      country: "USA",
      img: "/speakers/dr-sravanthi-dontu.jpg"
    },
    {
      name: "Dr. Santosh Reddy Addula",
      category: "Keynote Speaker",
      designation: "Department of Information Technology",
      org: "University of the Cumberlands, Williamsburg, Kentucky",
      country: "USA",
      img: "/speakers/dr-santosh-reddy-addula.png"
    },
    {
      name: "Dr. Peter Kamau, CPA-K",
      category: "Plenary Speaker",
      designation: "Founder & CEO — PETKAM Solutions Ltd & PETKAM Elite Homes Ltd",
      org: "Government Consultant — Ministry of Labour & National Employment Authority (NEA)",
      country: "Kenya",
      img: "/speakers/dr-peter-kamau.jpg"
    },
    {
      name: "Parikshit Sahagal",
      category: "Keynote Speaker",
      designation: "Technical Project Manager",
      org: "CoStar Group Inc",
      country: "USA",
      img: "/speakers/parikshit-sahagal.jpg"
    },
    {
      name: "Jaco Visagie",
      category: "Distinguished Speaker",
      designation: "Professor of Statistics",
      org: "North-West University",
      country: "South Africa",
      img: "/speakers/jaco-visagie.jpg"
    },
    {
      name: "Dr. Dina Alkhodary",
      category: "Plenary Speaker",
      designation: "Associate Professor of Business Administration",
      org: "Middle East University",
      country: "Jordan",
      img: "/speakers/dr-dina-alkhodary.jpg"
    },
    {
      name: "Mayank Atreya",
      category: "Keynote Speaker",
      designation: "Technology & Engineering Leader",
      org: "Enterprise Architecture, AI/ML-Driven Modernization, Multi-Cloud Architecture",
      country: "USA",
      img: "/speakers/mayank-atreya.jpg"
    },
    {
      name: "Piyush Shukla",
      category: "Keynote Speaker",
      designation: "Technology & Engineering Leader",
      org: "Enterprise Engineering & Cloud Leadership",
      country: "USA",
      img: "/speakers/piyush-shukla.jpg"
    },
    {
      name: "Eka Devidze",
      category: "Invited Speaker",
      designation: "Chardins Voyages",
      org: "International Black Sea University",
      country: "Georgia",
      img: "/speakers/dr-eka-devidze.jpg"
    },
    {
      name: "Assoc. Prof. Dr. Muliati Hj. Sedek",
      category: "Invited Speaker",
      designation: "Deputy Director (Scholarship Excellence), CAES",
      org: "Universiti Teknikal Malaysia Melaka (UTeM)",
      country: "Malaysia",
      img: "/speakers/dr-muliati-sedek.jpg"
    },
    {
      name: "Assoc. Prof. Ts. Dr. Noor Suhana Binti Sulaiman",
      category: "Invited Speaker",
      designation: "Dean, Research & Postgraduate Management (JPPS)",
      org: "University College TATI (UC TATI)",
      country: "Malaysia",
      img: "/speakers/dr-noor-suhana.jpg"
    },
    {
      name: "Sandeep Kumar Khandelwal",
      category: "Invited Speaker",
      designation: "AI, DevOps & Cloud Computing Expert",
      org: "Enterprise Cloud & AI Solutions",
      country: "USA",
      img: "/speakers/sandeep-kumar-khandelwal.jpg"
    },
    {
      name: "Prof. Rehab Hegazy, PhD",
      category: "Invited Speaker",
      designation: "Professor of Pharmacology & Secretary-General",
      org: "Medical Research and Clinical Studies Institute, National Research Centre (NRC)",
      country: "Egypt",
      img: "/speakers/prof-rehab-hegazy.jpg"
    },
    {
      name: "Prof. Intakhab Alam Khan",
      category: "Invited Speaker",
      designation: "King Abdulaziz University | Visiting Prof, Samarkand State University",
      org: "King Abdulaziz University & Samarkand State University",
      country: "Saudi Arabia",
      img: "/speakers/prof-intakhab-alam-khan.jpg"
    },
    {
      name: "Osman ARAYICI",
      category: "Invited Speaker",
      designation: "Dept. of Interior Architecture / Head of Scientific Committee",
      org: "Mimar Sinan Fine Arts University / Modoko Academy",
      country: "Turkey",
      img: "/speakers/osman-arayici.jpg"
    },
    {
      name: "Swarnabindu Roy",
      category: "Keynote Speaker",
      designation: "Data Engineering, Data Architecture & Program Management",
      org: "Enterprise Data & Cloud Architecture",
      country: "USA",
      img: "/speakers/swarnabindu-roy.jpg"
    },
    {
      name: "Payal R.",
      category: "Keynote Speaker",
      designation: "Senior Data Engineer, Data Modeling & ETL Pipelines",
      org: "Data Warehousing & Enterprise Data Engineering",
      country: "USA",
      img: "/speakers/payal-r.jpg"
    },
    {
      name: "Dr. Carolina Barandiaran",
      category: "Keynote Speaker",
      designation: "Academic Leader & Researcher",
      org: "Academic Research & Innovation",
      country: "Argentina",
      img: "/speakers/dr-carolina-barandiaran.jpg"
    },
    {
      name: "Nino Devidze",
      category: "Distinguished Speaker",
      designation: "Tourism Educator & Program Manager",
      org: "The University of Georgia",
      country: "Georgia",
      img: "/speakers/nino-devidze.jpg"
    },
    {
      name: "Lali Mikeladze",
      category: "Distinguished Speaker",
      designation: "Head of the BA Program in Tourism",
      org: "Caucasus International University",
      country: "Georgia",
      img: "/speakers/lali-mikeladze.jpg"
    }
  ],
  sessionChairs: []
};

const Aiforge26 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • ISBN: {conferenceData.isbn}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              {conferenceData.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-10 text-foreground/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="font-medium">{conferenceData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium">{conferenceData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <span className="font-medium">ISBN: {conferenceData.isbn}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl">
                <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full shadow-md border-white/20 bg-card/60 backdrop-blur-md hover:bg-card">
                <a href={conferenceData.cmtLink} target="_blank" rel="noreferrer">
                  Submit in Microsoft CMT <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATION & INDEXING */}
      <section className="bg-muted/50 py-20 border-b border-border/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Publication & Indexing</h2>
            <p className="text-lg text-muted-foreground">
              All accepted and registered papers will be published in official proceedings with comprehensive global indexing, ISBN registration, and dissemination opportunities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {conferenceData.publication.map((item, idx) => (
              <Card key={idx} className="p-6 bg-card hover:-translate-y-1 transition-transform border-t-4 border-t-primary shadow-sm text-center flex flex-col items-center justify-between">
                <div>
                  {item.img && <img src={item.img} alt={item.title} className="h-16 mb-5 object-contain mx-auto" />}
                  {!item.img && <Book className="h-12 w-12 text-primary mb-5 mx-auto" />}
                  <h3 className="font-bold text-base mb-2.5 text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TWO-COLUMN OVERVIEW */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <div className="h-8 w-2 bg-accent rounded-full"></div>
              About the Conference
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              
              <div className="mt-6 flex items-start gap-4 p-5 bg-accent/5 rounded-xl border border-accent/10">
                <Globe className="h-6 w-6 text-accent shrink-0 mt-1" />
                <p className="text-foreground text-base">
                  <strong className="text-primary font-semibold block mb-1">A Truly Global Gathering</strong> 
                  Join researchers, innovators, and thought leaders presenting from across the globe—including participants from the USA, Thailand, UK, Turkey, South Africa, and many more countries!
                </p>
              </div>

              <div className="mt-4 flex items-start gap-4 p-5 bg-primary/5 rounded-xl border border-primary/20">
                <BookOpen className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="text-primary font-semibold block mb-1">Official ISBN Publication</strong>
                  <p className="text-foreground text-base">
                    All accepted and registered papers will be officially published in the conference proceedings with <span className="font-mono font-bold text-accent">ISBN: {conferenceData.isbn}</span>.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-muted-foreground text-base leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Button asChild variant="default" className="rounded-xl shadow-lg gap-2 font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-95 transition-all">
                <a href={conferenceData.cmtLink} target="_blank" rel="noreferrer">
                  Submit Paper in Microsoft CMT <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl shadow-sm gap-2 font-semibold border-primary/30 hover:bg-primary/10">
                <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
                  Submit via Google Form <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <a 
                href={conferenceData.cmtLink} 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-medium text-muted-foreground hover:text-primary hover:underline break-all w-full mt-1"
              >
                Direct Portal URL: {conferenceData.cmtLink}
              </a>
            </div>

            <div className="mt-8 p-8 bg-accent/5 rounded-2xl border border-accent/20">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-primary">Call for Papers</h3>
                <Button asChild size="sm" className="rounded-full shadow-md gap-1.5 font-semibold bg-primary hover:bg-primary/90">
                  <a href={conferenceData.cmtLink} target="_blank" rel="noreferrer">
                    Submit Your Paper <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground text-lg mb-6">{conferenceData.callForPapers}</p>
              
              <div className="pt-6 border-t border-accent/10">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <p className="text-foreground text-base leading-relaxed">
                    <strong className="font-semibold text-primary">Who Should Attend: </strong>
                    Students, industry professionals, researchers, and academic professionals are highly encouraged to present their original ideas. This is an unparalleled opportunity to connect with international peers, foster collaborations, and even share and present your ongoing or completed PhD thesis work on a global stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="p-8 bg-muted/50 border-0 shadow-inner h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Conference Objectives</h3>
              <div className="space-y-6">
                {conferenceData.objectives.map((obj, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{obj.title}</h4>
                      <p className="text-sm text-muted-foreground">{obj.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ADVISORY BOARD MEMBERS */}
      <section className="container py-24 border-t border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Advisory Board Members</h2>
          <p className="text-lg text-muted-foreground">The distinguished advisors guiding {conferenceData.id}.</p>
        </div>
        
        {conferenceData.advisoryBoard && conferenceData.advisoryBoard.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {conferenceData.advisoryBoard.map((s, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center text-center w-full max-w-sm bg-card/40 p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
              >
                <div className="relative w-full aspect-[4/4.5] max-w-[220px] mb-5 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/60 shadow-lg group-hover:border-accent/50 group-hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  {s.img ? (
                    <img src={s.img} alt={s.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-muted">
                      <User className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
                {s.role && <p className="text-sm font-semibold text-accent mb-1">{s.role}</p>}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{s.org}</p>
                {s.country && <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-auto">{s.country}</p>}
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {/* JUDGES */}
      {conferenceData.judges && conferenceData.judges.length > 0 && (
        <section className="container py-24 border-t border-border/50">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Judges</h2>
            <p className="text-lg text-muted-foreground">The distinguished judges evaluating submissions for {conferenceData.id}.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {conferenceData.judges.map((s, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center text-center w-full max-w-sm bg-card/40 p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
              >
                <div className="relative w-full aspect-[4/4.5] max-w-[220px] mb-5 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/60 shadow-lg group-hover:border-accent/50 group-hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  {s.img ? (
                    <img src={s.img} alt={s.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-muted">
                      <User className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{s.org}</p>
                {s.country && <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-auto">{s.country}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* KEYNOTE, PLENARY, DISTINGUISHED & INVITED SPEAKERS */}
      <section id="speakers" className="container py-24 border-t border-border/50">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm mb-6 border border-primary/20 shadow-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-accent" /> Global Academic & Industry Luminaries
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Keynote, Plenary, Distinguished & Invited Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The visionary keynote leaders, plenary researchers, distinguished innovators, and invited experts presenting at AIFORGE 2026.
          </p>
        </div>
        
        {conferenceData.speakers && conferenceData.speakers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            {conferenceData.speakers.map((s, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center text-center w-full max-w-sm bg-card/40 p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
              >
                {/* Speaker Category Sub-heading / Role Badge */}
                {s.category && (
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full border mb-4 tracking-wide uppercase shadow-sm ${
                    s.category === "Keynote Speaker" 
                      ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
                      : s.category === "Plenary Speaker"
                      ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                      : s.category === "Distinguished Speaker"
                      ? "bg-purple-500/15 text-purple-400 border-purple-500/30"
                      : "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                  }`}>
                    <Sparkles className="h-3 w-3" />
                    {s.category}
                  </span>
                )}

                <div className="relative w-full aspect-[4/4.5] max-w-[220px] mb-5 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/60 shadow-lg group-hover:border-accent/50 group-hover:shadow-xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  {s.img ? (
                    <img 
                      src={s.img} 
                      alt={s.name} 
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                      loading="lazy" 
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-muted">
                      <User className="h-16 w-16 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
                {s.designation && <p className="text-xs font-semibold text-accent mb-1">{s.designation}</p>}
                <p className="text-sm text-muted-foreground mb-3 flex-grow">{s.org}</p>
                {s.topic && (
                  <div className="text-xs italic text-primary/90 mb-4 px-3 py-2 bg-primary/5 border border-primary/10 rounded-xl text-left w-full">
                    <span className="font-semibold not-italic block text-[11px] uppercase tracking-wider text-accent mb-1">Presentation</span>
                    "{s.topic}"
                  </div>
                )}
                {s.country && <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-auto">{s.country}</p>}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center py-8">
            <div className="bg-card border border-white/5 rounded-2xl p-8 max-w-2xl text-center shadow-lg w-full">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-6">
                <User className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-3">Speakers</h4>
              <p className="text-muted-foreground text-lg">
                No speakers found in this category.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="relative py-24 lg:py-32 border-t border-border/50 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
        {/* Ambient atmospheric glow effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-accent/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent font-semibold text-xs sm:text-sm mb-6 border border-accent/30 shadow-sm backdrop-blur-md">
              <Trophy className="h-4 w-4" /> Official Honours & Distinctions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Awards & Recognition
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Honoring outstanding innovation, visionary leadership, significant industry impact, cutting-edge research, and exceptional presentation delivery at AIFORGE 2026.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto mb-14">
            {conferenceData.awards.map((award, idx) => (
              <div 
                key={idx} 
                className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-white/25 hover:to-white/10 p-[1px] transition-all duration-500 flex flex-col"
              >
                <Card className="relative h-full p-8 bg-card/90 backdrop-blur-xl border-0 flex flex-col items-center text-center justify-between rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                  <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${award.bg} rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125`}></div>

                  <div className="w-full flex flex-col items-center">
                    {/* Badge */}
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full border mb-6 ${award.badgeColor}`}>
                      <Sparkles className="h-3 w-3" /> {award.badge}
                    </span>

                    {/* 3D Glowing Icon */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 ${award.glow} blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500 rounded-full`}></div>
                      <div className={`relative h-20 w-20 rounded-2xl bg-gradient-to-br ${award.bg} border ${award.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                        <award.icon className={`h-10 w-10 ${award.iconColor} drop-shadow-md group-hover:scale-105 transition-transform duration-300`} />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-serif font-bold text-xl text-primary mb-3 leading-tight group-hover:text-accent transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {award.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="w-full pt-4 border-t border-border/40 flex items-center justify-center gap-2 text-xs font-semibold text-accent">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Official Plaque & Certificate</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Bottom Evaluation Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card/70 backdrop-blur-md border border-primary/20 shadow-md text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary">Peer-Reviewed Evaluation</h4>
                <p className="text-xs text-muted-foreground">All awards are evaluated by the International Steering Committee and presented during the valedictory session.</p>
              </div>
            </div>
            <div className="shrink-0 font-mono text-xs font-bold text-accent bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              AIFORGE 2026 Honors
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS & TIMELINE COMPOSITE */}
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tracks */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Conference Tracks</h2>
              <div className="grid sm:grid-cols-1 gap-4">
                {conferenceData.tracks.map((track, idx) => {
                  const Icon = track.icon || BookOpen;
                  return (
                    <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-5 flex items-start gap-4 hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-white">{track.title}</h4>
                        <p className="text-sm text-white/60">{track.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Important Dates</h2>
              <div className="space-y-6">
                {conferenceData.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start relative">
                    {idx !== conferenceData.timeline.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-[-24px] w-px bg-white/20"></div>
                    )}
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 z-10">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <div className="pt-2">
                      <div className="text-xl font-bold text-accent">{item.date}</div>
                      <h4 className="font-semibold text-white mt-1">{item.label}</h4>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMIT YOUR PAPER CTA */}
      <section className="container py-24 text-center">
        <div className="max-w-4xl mx-auto p-10 md:p-14 rounded-3xl bg-gradient-to-b from-card/90 via-card/60 to-muted/40 border border-primary/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Submit Your Paper</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
            Submit your research manuscripts for double-blind peer review via the official Microsoft CMT portal or submit directly through the conference registration portal.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-xl px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:opacity-95 transition-all text-primary-foreground">
              <a href={conferenceData.cmtLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                Submit Paper in Microsoft CMT <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full shadow-md px-8 py-6 text-base font-semibold border-primary/30 hover:bg-primary/10">
              <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                Register & Submit Form <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />
    </div>
  );
};

export default Aiforge26;
