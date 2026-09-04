import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Award, Globe, BookOpen, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

const conferenceData = {
  id: "ICQADTS-2026",
  title: "International Conference on Quantum-AI Driven Autonomous Digital Twin Systems",
  date: "12 April 2026",
  location: "Virtual Mode",
  registrationLink: "#",
  about: [
    "ICQADTS-2026 is conceived as a high-impact international research forum dedicated to the advancement of next-generation intelligent computational ecosystems.",
    "The conference focuses on the deep integration of Quantum Computing, Artificial Intelligence, Autonomous Systems Engineering, and Cyber-Physical Digital Twin infrastructures to address complex, real-world challenges across scientific and industrial domains.",
    "By bringing together researchers, academicians, and industry professionals, the conference seeks to accelerate innovation in intelligent systems capable of self-adaptation, real-time decision-making, and sustainable operation in dynamic environments."
  ],
  highlights: [
    { title: "Quantum Machine Intelligence", desc: "Quantum-enhanced optimization & variational circuits." },
    { title: "Autonomous Digital Twins", desc: "Self-evolving simulations & real-time synchronization." },
    { title: "Cyber-Physical Systems", desc: "Edge/fog computing & smart actuation systems." },
    { title: "Secure Computing", desc: "Post-quantum cryptography & blockchain trust systems." }
  ],
  speakers: [
    { name: "Dr. Ayoub Regragui", org: "Mohammed V University", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
    { name: "Suyash Rai", org: "Telecom Systems Expert", country: "USA", img: "https://static.wixstatic.com/media/30814e_73a9a72f460b41268da5f5a621c388c3~mv2.jpeg" },
    { name: "Pravin Barapatre", org: "AI & Robotics Leader", country: "USA", img: "https://static.wixstatic.com/media/30814e_b190cb540fe940dcb0c96cd2ceab143f~mv2.png" },
    { name: "Trupti Raikar", org: "SAP Technology Architect", country: "USA", img: "https://static.wixstatic.com/media/30814e_ca6075e6cef84116937f732636db6914~mv2.jpeg" },
    { name: "Anshuman Khandelwal", org: "Cloud Computing Architect", country: "USA", img: "https://static.wixstatic.com/media/30814e_2cb5972bc61d457eb6a1c8153a563e05~mv2.jpeg" },
    { name: "Hari Rowtu", org: "AI-Driven Technologies", country: "USA", img: "/speakers/hari-rowtu.jpg" },
    { name: "Dr. Marek Wasiluk", org: "GxP Auditor", country: "Poland", img: "https://static.wixstatic.com/media/30814e_adff5072ac724ad69a6f9634c9d672e0~mv2.jpg" },
    { name: "Prof. Dr. Alexander Bull", org: "IU International University", country: "Germany", img: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" }
  ],
  tracks: [
    "Quantum Machine Intelligence",
    "Autonomous Digital Twin Systems",
    "Cyber-Physical Intelligent Systems",
    "AI for Sustainable Systems",
    "Secure & Post-Quantum Computing",
    "Human-Centric Intelligent Systems"
  ],
  awards: [
    "ISBN Conference Proceedings",
    "Scopus Indexing Opportunity",
    "Web of Science Indexing",
    "Quality Peer Review Certification"
  ],
  delegates: [
    { name: "Dr. Zoha Rahman", org: "Founder & Country Director", country: "USA" },
    { name: "Dr. Dina A. Alkhodary", org: "Associate Professor", country: "Jordan" },
    { name: "Sam Lawe", org: "Infrastructure Manager", country: "New Zealand" },
    { name: "Meryem Gurel", org: "Founder", country: "Turkey" },
    { name: "Dr. Ruth Abiola Adimula", org: "Associate Professor", country: "Nigeria" },
    { name: "Hemang Upadhyay", org: "Independent Researcher", country: "USA" }
  ],
  timeline: [
    { date: "2 April 2026", label: "Submission Deadline", desc: "Final date for paper submission" },
    { date: "6 April 2026", label: "Review Notification", desc: "Authors receive review results" },
    { date: "10 April 2026", label: "Camera Ready", desc: "Final paper submission deadline" },
    { date: "12 April 2026", label: "Conference Date", desc: "Virtual conference day" }
  ],
  glimpses: [
    "https://static.wixstatic.com/media/30814e_aa5619b82c7c450688561ea1aaf6094b~mv2.png",
    "https://static.wixstatic.com/media/30814e_8c54d1924aba40088caea88bc95dd1f1~mv2.png",
    "https://static.wixstatic.com/media/30814e_a0bcfce7303842b0b1088e7e959df749~mv2.png",
    "https://static.wixstatic.com/media/30814e_6efd9af6f58d41d1a813fd517f039b4e~mv2.png",
    "https://static.wixstatic.com/media/30814e_09571674cb8b483fa4476eccf53d73d8~mv2.png",
    "https://static.wixstatic.com/media/30814e_db36abbe77f24a72b15ee08927f1d62e~mv2.png",
    "https://static.wixstatic.com/media/30814e_a81e3ce5a5ad4f39a5827cc6f3757f2c~mv2.png",
    "https://static.wixstatic.com/media/30814e_605ee2e7551548308a37980f16e3f05c~mv2.png",
    "https://static.wixstatic.com/media/30814e_25032ed10f6040e4b648c22f8e779cff~mv2.png",
    "https://static.wixstatic.com/media/30814e_f38207f174624162a70afa18615cb002~mv2.png"
  ]
};

const Icqadts2026 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Call for Papers
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
              <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer">
                Submit Full Paper <ArrowRight className="ml-2 h-5 w-5" />
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
              Conference Overview
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="p-8 bg-muted/50 border-0 shadow-inner h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Key Focus Areas</h3>
              <div className="space-y-6">
                {conferenceData.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{h.title}</h4>
                      <p className="text-sm text-muted-foreground">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* TRACKS & TIMELINE COMPOSITE */}
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tracks */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Technical Tracks</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceData.tracks.map((track, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3 hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-sm text-white">{track}</span>
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
                      <div className="absolute left-6 top-10 bottom-[-24px] w-px bg-primary/30"></div>
                    )}
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 z-10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="pt-2">
                      <div className="text-xl font-bold text-primary">{item.date}</div>
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

      {/* MODERN SPEAKERS GRID */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Distinguished Speakers</h2>
          <p className="text-lg text-muted-foreground">Hear from our panel of international experts and industry leaders.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {conferenceData.speakers.map((s, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="relative h-40 w-40 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
              </div>
              <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{s.org}</p>
              <span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center justify-center gap-1">
                <Globe className="h-3 w-3" /> {s.country}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* DELEGATES & PUBLICATION */}
      <section className="bg-muted py-24 border-y">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Delegates */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <User className="h-8 w-8 text-accent" />
                International Delegates
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceData.delegates.map((d, idx) => (
                  <Card key={idx} className="p-4 flex flex-col justify-center bg-card hover:shadow-md transition-shadow border-0">
                    <h4 className="font-bold text-foreground">{d.name}</h4>
                    <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                      <span className="truncate pr-4">{d.org}</span>
                      <span className="font-medium text-accent shrink-0">{d.country}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Publication */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <FileText className="h-8 w-8 text-accent" />
                Publication
              </h2>
              <Card className="p-6 bg-primary text-primary-foreground border-0 shadow-xl relative overflow-hidden">
                <FileText className="absolute -right-6 -bottom-6 h-48 w-48 text-primary-foreground/5" />
                <div className="relative z-10 space-y-6">
                  {conferenceData.awards.map((award, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Award className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-bold text-lg">{award}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />
      </div>
  );
};

export default Icqadts2026;
