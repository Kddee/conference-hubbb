import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, Globe, BookOpen, Star, Trophy, Award, Search, Book, User, Crown, Lightbulb, Zap, Heart, Medal, Database, Cpu, Network, Shield, Settings, Microscope } from "lucide-react";
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
  date: "30 August 2026",
  location: "Hybrid Mode, Global",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdovsHUgDTtUSLoXdyufXRN67K59HSiLsxhmOUKQaE9VRcdwA/viewform?usp=publish-editor",
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
    { title: "Scopus Indexed Journals (Opportunity)", img: "https://i.postimg.cc/hPVGr2wS/image.png", desc: "Extended versions of selected high-quality papers may be recommended for publication in Scopus indexed journals, subject to journal scope, editorial decision, and an additional peer-review process." },
    { title: "Web of Science (Under Consideration)", img: "https://i.postimg.cc/0NX5QF6x/image.png", desc: "Selected papers may be considered for submission to journals indexed in Web of Science, based on quality, originality, and editorial evaluation." },
    { title: "DOI & Digital Access", img: "/doi-logo.png", desc: "Each published paper may be assigned a Digital Object Identifier (DOI) to ensure permanent accessibility and citation tracking." }
  ],
  awards: [
    "ISBN: 978-81-687765-9-3 Conference Proceedings",
    "Best Paper Award",
    "Best Presentation Award",
    "Best Student Paper Award",
    "Innovation Award"
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
    { date: "20 August 2026", label: "Paper Submission", desc: "Deadline for paper submission" },
    { date: "26 August 2026", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "28 August 2026", label: "Final Submission", desc: "Camera-ready submission" },
    { date: "30 August 2026", label: "Conference Date", desc: "Main event" }
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
    }
  ],
  judges: [],
  speakers: [
    {
      name: "Prof. Dr. Alexander Bull",
      org: "IU International University",
      country: "Germany",
      img: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg"
    },
    {
      name: "Nadine Zeinoun",
      org: "President, ICF Chapter Ottawa",
      country: "Lebanon",
      img: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg"
    },
    {
      name: "Marghescu Cristina-Florentina",
      org: "University Politehnica of Bucharest",
      country: "Romania",
      img: "https://static.wixstatic.com/media/30814e_fb0f8a532d8a413abf8b61b143684fed~mv2.png"
    },
    {
      name: "Roksolana Trach",
      org: "Independent Crypto Analyst & International Financial Market Analyst",
      country: "USA",
      img: "/icaits26/roksolana-trach.png"
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

            <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl">
              <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <div className="mt-16 pt-8 border-t border-border/50 max-w-4xl">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-[0.2em] mb-6">Organized & Published By</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="h-24 px-8 bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                  <img src="/eminsphere-logo.png" alt="Eminsphere" className="h-12 w-12 object-contain rounded-full" />
                  <span className="ml-4 font-bold text-foreground tracking-tight text-2xl">Eminsphere</span>
                </div>
                <div className="h-24 px-8 bg-white rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                  <img src="/iip-logo.jpg" alt="Iterative International Publishers (IIP)" className="h-16 w-16 object-contain" />
                  <span className="ml-3 font-bold text-slate-900 tracking-tight text-xl">IIP</span>
                </div>
                <div className="h-24 px-8 bg-white rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                  <img src="https://i.postimg.cc/VvnzKNKj/image.png" alt="ISBN Proceedings" className="h-14 object-contain" />
                </div>
                <div className="h-24 px-8 bg-white rounded-2xl border border-white/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
                  <img src="/doi-logo.png" alt="Crossref DOI" className="h-8 object-contain" />
                </div>
              </div>
            </div>
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

            <div className="mt-12 p-8 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Call for Papers</h3>
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
                className="group flex flex-col items-center text-center w-full max-w-sm"
              >
                <div className="relative h-40 w-40 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  {s.img ? (
                    <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
                  ) : (
                    <div className="relative h-full w-full rounded-full border-4 border-background shadow-lg z-10 bg-muted flex items-center justify-center">
                      <User className="h-12 w-12 text-muted-foreground" />
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
                className="group flex flex-col items-center text-center w-full max-w-sm"
              >
                <div className="relative h-40 w-40 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  {s.img ? (
                    <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
                  ) : (
                    <div className="relative h-full w-full rounded-full border-4 border-background shadow-lg z-10 bg-muted flex items-center justify-center">
                      <User className="h-12 w-12 text-muted-foreground" />
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

      {/* KEYNOTE SPEAKERS */}
      <section className="container py-24 border-t border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Keynote Speakers</h2>
          <p className="text-lg text-muted-foreground">The visionaries and academic leaders presenting at {conferenceData.id}.</p>
        </div>
        
        {conferenceData.speakers && conferenceData.speakers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center">
            {conferenceData.speakers.map((s, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center text-center w-full max-w-sm"
              >
                <div className="relative h-40 w-40 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  {s.img ? (
                    <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" style={s.name.includes("Nikola") ? { objectPosition: "center 15%" } : undefined} loading="lazy" />
                  ) : (
                    <div className="relative h-full w-full rounded-full border-4 border-background shadow-lg z-10 bg-muted flex items-center justify-center">
                      <User className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{s.org}</p>
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
              <h4 className="text-2xl font-serif font-bold text-white mb-3">Keynote Speakers</h4>
              <p className="text-muted-foreground text-lg">
                Our lineup of distinguished keynote speakers is currently being finalized. 
                Please check back soon for exciting announcements!
              </p>
            </div>
          </div>
        )}
      </section>

      {/* KEYNOTE AWARDS */}
      <section className="relative py-24 border-t border-border/50 overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20 shadow-sm backdrop-blur-md">
              <Star className="h-4 w-4" /> Excellence Recognized
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Keynote Awards</h2>
            <p className="text-lg text-muted-foreground">Celebrating outstanding contributions, innovation, and impact among our distinguished keynote speakers.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {[
              { title: "Best Keynote Speaker Award", icon: Crown, iconColor: "text-accent", glow: "bg-accent", bg: "from-accent/20 to-accent/5", border: "border-accent/20" },
              { title: "Most Innovative Talk Award", icon: Lightbulb, iconColor: "text-primary", glow: "bg-primary", bg: "from-primary/20 to-primary/5", border: "border-primary/20" },
              { title: "Most Impactful Presentation Award", icon: Zap, iconColor: "text-purple-400", glow: "bg-purple-400", bg: "from-purple-400/20 to-purple-400/5", border: "border-purple-400/20" },
              { title: "Audience Choice Keynote Award", icon: Heart, iconColor: "text-rose-400", glow: "bg-rose-400", bg: "from-rose-400/20 to-rose-400/5", border: "border-rose-400/20" },
              { title: "Outstanding Speaker Excellence Award", icon: Medal, iconColor: "text-emerald-400", glow: "bg-emerald-400", bg: "from-emerald-400/20 to-emerald-400/5", border: "border-emerald-400/20" }
            ].map((award, idx) => (
              <div 
                key={idx} 
                className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 hover:to-white/5 p-[1px] transition-all duration-500"
              >
                <Card className="relative h-full p-8 bg-card/90 backdrop-blur-xl border-0 flex flex-col items-center text-center justify-center rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 ${award.glow} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`}></div>
                    <div className={`relative h-16 w-16 rounded-full bg-gradient-to-br ${award.bg} border ${award.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                      <award.icon className={`h-8 w-8 ${award.iconColor} drop-shadow-md group-hover:text-white transition-colors duration-300`} />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-foreground transition-colors duration-300 relative z-10">{award.title}</h4>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATION & INDEXING */}
      <section className="bg-muted py-24 border-t border-border/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Publication & Indexing</h2>
            <p className="text-lg text-muted-foreground">
              All accepted and registered papers will be published in official proceedings with comprehensive global indexing and dissemination opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceData.publication.map((item, idx) => (
              <Card key={idx} className="p-6 bg-card hover:-translate-y-1 transition-transform border-t-4 border-t-primary shadow-sm text-center flex flex-col items-center">
                {item.img && <img src={item.img} alt={item.title} className="h-16 mb-6 object-contain" />}
                {!item.img && <Book className="h-12 w-12 text-primary mb-6" />}
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 flex items-center justify-center gap-3">
            <Trophy className="h-10 w-10 text-accent" />
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground">
            Honoring exceptional research, presentation quality, and innovative academic contributions across all conference tracks.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {conferenceData.awards.map((award, idx) => (
            <Card key={idx} className="p-6 bg-card flex flex-col items-center text-center justify-center hover:-translate-y-1 transition-transform border-t-4 border-t-accent shadow-md">
              <Award className="h-10 w-10 text-accent mb-3" />
              <h4 className="font-bold text-lg">{award}</h4>
            </Card>
          ))}
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

      <section className="container py-24 text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Submit Your Paper</h2>
        <Button asChild size="lg" className="rounded-full shadow-xl px-12 py-6 text-lg">
          <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
            Register Now
          </a>
        </Button>
      </section>
      
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />
    </div>
  );
};

export default Aiforge26;
