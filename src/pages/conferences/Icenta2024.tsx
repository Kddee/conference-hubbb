import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, BookOpen, Download, FileText, ExternalLink } from "lucide-react";

const conferenceData = {
  id: "ICENTA-2024",
  title: "International Conference on Engineering Nexus & Technological Advancements",
  date: "December 15–16, 2024",
  location: "Mitte, Berlin, Germany (Virtual Mode)",
  registrationLink: "https://forms.gle/A4gJgze6ZR8qixLk8",
  proceedingsPdf: "https://297b13a4-bada-45bf-b67b-9769cba8e18a.filesusr.com/ugd/30814e_e664e4ead9f740e287d8bc56ce6e9362.pdf",
  about: [
    "ICENTA-2024 is a global initiative by Eminsphere to foster innovation, collaboration, and knowledge exchange in Engineering, AI, IoT, Robotics, and Sustainable Technologies.",
    "Renowned academicians, researchers, industry experts, and policymakers will discuss the future of engineering advancements.",
    "Submit your research on AI, IoT, Robotics, Renewable Energy, Cloud Computing, Human-Computer Interaction, and more."
  ],
  highlights: [
    { title: "Global Collaboration", desc: "Strengthen international research collaborations and engineering innovations." },
    { title: "Cutting-Edge Research", desc: "Present breakthroughs in AI, IoT, Industry 4.0, and automation." },
    { title: "Future Trends", desc: "Explore the intersection of engineering, sustainability, and smart technology." },
    { title: "Industrial-Academic Synergy", desc: "Bridge the gap between academia and industry for real-world applications." },
    { title: "Policy Discussions", desc: "Engage policymakers to drive technology-forward policies for global benefit." }
  ],
  speakers: [],
  glimpses: [
    "/conferences/icenta-berlin.jpg",
    "/conferences/icenta-book.jpeg"
  ],
  tracks: [
    "Artificial Intelligence (AI) & Machine Learning",
    "Internet of Things (IoT) & Industry 4.0",
    "Robotics & Automation",
    "Renewable Energy & Sustainable Technologies",
    "Cloud Computing & Edge Technologies",
    "Human-Computer Interaction (HCI)"
  ],
  delegates: [],
  awards: [],
  timeline: [
    { date: "05 Dec 2024", label: "Paper Submission", desc: "Initial abstract & paper submission deadline" },
    { date: "10 Dec 2024", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "12 Dec 2024", label: "Final Submission", desc: "Final paper submission & registration deadline" },
    { date: "15 Dec 2024", label: "Conference Day 1", desc: "Virtual event begins in Berlin" },
    { date: "16 Dec 2024", label: "Conference Day 2", desc: "Virtual presentations & closing ceremony" }
  ]
};

const Icenta2024 = () => {
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

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl">
                <a href={conferenceData.registrationLink} target="_blank" rel="noopener noreferrer">
                  Submit Paper / Register <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full shadow-xl bg-background/10 backdrop-blur-md border-primary-foreground/20 text-primary-foreground hover:bg-background/20 hover:text-white">
                <a href={conferenceData.proceedingsPdf} target="_blank" rel="noopener noreferrer">
                  Download Proceedings (PDF) <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
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
              <h3 className="text-xl font-bold text-primary mb-6">Key Objectives</h3>
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
      <section className="bg-gradient-to-r from-background to-muted py-24 mb-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tracks */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Research Topics</h2>
              <div className="grid sm:grid-cols-1 gap-4">
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
      
      {/* CONFERENCE PROCEEDINGS SHOWCASE */}
      <section className="bg-muted py-24 border-t">
        <div className="container max-w-4xl">
          <Card className="p-8 md:p-12 bg-card border border-border/50 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <img
                  src="/conferences/icenta-book.jpeg"
                  alt="ICENTA-2024 Conference Proceedings"
                  className="rounded-xl shadow-2xl max-h-72 object-cover border border-border/50 hover:scale-105 transition-transform"
                />
              </div>
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs">
                  <FileText className="h-3.5 w-3.5" /> Official Publication
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Conference Proceedings & Abstract Book
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The complete peer-reviewed papers and technical abstracts presented at ICENTA-2024 (Berlin) are compiled into the official conference proceedings volume.
                </p>
                <div className="pt-2">
                  <Button asChild size="lg" className="rounded-full gap-2 shadow-lg">
                    <a href={conferenceData.proceedingsPdf} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" /> Download Official Proceedings (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />
      </div>
  );
};

export default Icenta2024;
