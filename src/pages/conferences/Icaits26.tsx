import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, Globe, BookOpen, Star, Trophy, Award, Search, Book, User, Crown, Lightbulb, Zap, Heart, Medal } from "lucide-react";
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
  id: "ICAITS-26",
  title: "International Conference on Artificial Intelligence & Intelligent Technology Systems",
  date: "26 July 2026",
  location: "Virtual Mode",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfN58Q2gYRO9ynO518Mai3mlWflPZ5F7i0acBtYo75ynxlIeA/viewform?usp=publish-editor",
  about: [
    "A premier global platform focusing on AI-driven intelligent systems, modern software architectures, and emerging digital technologies transforming industries worldwide.",
    "ICAITS-26 aims to bring together researchers, engineers, developers, and academicians to explore advancements in Artificial Intelligence, intelligent systems, and software technologies. The conference encourages innovation in automation, digital transformation, and scalable system design."
  ],
  glimpses: [glimpse1, glimpse2, glimpse3, glimpse4, glimpse5, glimpse6, glimpse7, glimpse8, glimpse9, glimpse10, glimpse11, glimpse12, glimpse13, glimpse14, glimpse15, glimpse16],
  callForPapers: "Researchers and professionals are invited to submit original contributions in AI, software systems, and emerging technologies.",
  objectives: [
    { title: "AI Innovation", desc: "Advancing intelligent algorithms and automation." },
    { title: "Software Excellence", desc: "Improving scalable and efficient systems." },
    { title: "Global Collaboration", desc: "Connecting researchers worldwide." },
    { title: "Future Technologies", desc: "Exploring next-gen computing solutions." }
  ],
  publication: [
    { title: "ISBN Proceedings", desc: "All accepted papers will be published with ISBN recognition." },
    { title: "Scopus Opportunity", desc: "Selected papers may be recommended for Scopus journals." },
    { title: "Web of Science", desc: "High-quality papers may be submitted to WoS journals." },
    { title: "Peer Review", desc: "Double-blind international peer review process." }
  ],
  awards: [
    "Best Paper Award",
    "Best Presentation Award",
    "Best Student Paper Award",
    "Innovation Award"
  ],
  tracks: [
    { title: "AI & Machine Learning", desc: "Deep learning, NLP, intelligent systems." },
    { title: "Software Engineering", desc: "System design, DevOps, architectures." },
    { title: "Cloud Computing", desc: "Distributed systems and cloud platforms." },
    { title: "Cybersecurity", desc: "Secure systems and digital protection." }
  ],
  timeline: [
    { date: "23 July 2026", label: "Submission", desc: "Deadline for paper submission" },
    { date: "24 July 2026", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "25 July 2026", label: "Final", desc: "Camera-ready submission" },
    { date: "26 July 2026", label: "Conference Date", desc: "Main event" }
  ],
  advisoryBoard: [
    {
      name: "Dr. Walida Ounruean",
      org: "Uttaradit Rajabhat University",
      country: "Thailand",
      img: advisoryImg1,
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Ezinne Esther Arisa",
      org: "Candy Rainbow Creations",
      country: "South Africa",
      img: advisoryImg2,
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    }
  ],
  judges: [
    {
      name: "Sourav Sarkar",
      org: "Senior Worldwide Specialist Solutions Architect",
      country: "USA",
      img: judgeImg1,
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Sravanthi Kondoju",
      org: "Data Platform Lead",
      country: "USA",
      img: judgeImg2,
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    }
  ],
  speakers: [
    {
      name: "PROF. CIGDEM DEMIR",
      org: "AHBV University, Ankara",
      country: "TURKEY",
      img: "/icaits26/prof.Cigdem-demir.jpeg",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Dr. Madeleine Pickles",
      org: "Associate Professor, Liverpool John Moores University",
      country: "England",
      img: "/icaits26/dr.madeline-pickles.jpeg",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Dr. Ghazal Abdolbaghi",
      org: "Shahid Beheshti University, Tehran",
      country: "Iran",
      img: "/icaits26/Dr.Ghazal-Abdolbaghi.jpeg",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Dr. Nikola Ilić",
      org: "Assistant Professor, University of Belgrade Faculty of Law",
      country: "Serbia",
      img: "/icaits26/dr.nikola-ilic.jpeg",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Roksolana Trach",
      org: "Independent Crypto Analyst and International Financial Market Analyst",
      country: "USA",
      img: "/icaits26/roksolana-trach.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "DR. Rahul Azmeera",
      org: "Independent Researcher, Univeristy Of The Cumberlands",
      country: "USA",
      img: "/icaits26/rahul-azmeera.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Abhiram Sanjay Patil",
      org: "AI Engineer",
      country: "USA",
      img: "/icaits26/abhiram-sanjay-patil.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Sourav Saha",
      org: "Assistant Vice President & Senior Software Engineer, U.S. Bank",
      country: "USA",
      img: "/icaits26/sourav-saha.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Dr. Jacinthe Rihan",
      org: "Professor, Ain Shams University, Cairo",
      country: "Egypt",
      img: "/icaits26/dr.jacinthe-rihan.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Hastimal Jangid",
      org: "University of Missouri–Kansas City",
      country: "USA",
      img: "/icaits26/hastimal-jangid.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Shamal Chandrakant Bhole",
      org: "Technical Leader, Crypto Risk & Compliance Infrastructure",
      country: "USA",
      img: "/icaits26/shamal-chandrakant-bhole.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Harsh Jangid",
      org: "Director of Engineering & Products",
      country: "USA",
      img: "/icaits26/harsh-jangid.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Abrar Ahmed Syed",
      org: "Advisor Application Designer, Gainwell Technologies",
      country: "USA",
      img: "/icaits26/abrar-ahmed-syed.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Hassan Mohammad Karimi",
      org: "Researcher, Amirkabir University of Technology",
      country: "Iran",
      img: "/icaits26/hassan-mohammad-karimi.png",
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Deepak Singh",
      org: "Principal Solution Architect, Healthcare Technology (Health IT)",
      country: "USA",
      img: deepakSinghImg,
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    },
    {
      name: "Taleb Hammad",
      org: "DBA / executive director",
      country: "USA",
      img: talebHammadImg,
      bio: ["Biography coming soon..."],
      publications: ["Publications coming soon..."],
      awards: ["Awards coming soon..."]
    }
  ]
};

const Icaits26 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Completed Conference
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
            </div>

            <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl">
              <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
                Register Now <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
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
            </div>

            <div className="mt-12 p-8 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Call for Papers</h3>
              <p className="text-muted-foreground text-lg">{conferenceData.callForPapers}</p>
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
          <p className="text-lg text-muted-foreground">The distinguished advisors guiding ICAITS-26.</p>
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
            <p className="text-lg text-muted-foreground">The distinguished judges evaluating submissions for ICAITS-26.</p>
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
          <p className="text-lg text-muted-foreground">The visionaries and academic leaders presenting at ICAITS-26.</p>
        </div>
        
        {conferenceData.speakers.length > 0 ? (
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
              { title: "Best Keynote Speaker Award", icon: Crown, iconColor: "text-amber-400", glow: "bg-amber-400", bg: "from-amber-400/20 to-amber-400/5", border: "border-amber-400/20" },
              { title: "Most Innovative Talk Award", icon: Lightbulb, iconColor: "text-blue-400", glow: "bg-blue-400", bg: "from-blue-400/20 to-blue-400/5", border: "border-blue-400/20" },
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

      {/* PUBLICATION & AWARDS */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <Book className="h-8 w-8 text-accent" />
                Publication & Indexing
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceData.publication.map((pub, idx) => (
                  <Card key={idx} className="p-6 bg-card hover:shadow-md transition-shadow border-t-4 border-t-primary">
                    <h4 className="font-bold text-lg mb-2">{pub.title}</h4>
                    <p className="text-sm text-muted-foreground">{pub.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <Trophy className="h-8 w-8 text-accent" />
                Awards & Recognition
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceData.awards.map((award, idx) => (
                  <Card key={idx} className="p-6 bg-card flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow border-t-4 border-t-accent">
                    <Award className="h-10 w-10 text-accent mb-3" />
                    <h4 className="font-bold text-lg">{award}</h4>
                  </Card>
                ))}
              </div>
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
                {conferenceData.tracks.map((track, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-5 flex items-start gap-4 hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{track.title}</h4>
                      <p className="text-sm text-white/60">{track.desc}</p>
                    </div>
                  </div>
                ))}
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

export default Icaits26;
