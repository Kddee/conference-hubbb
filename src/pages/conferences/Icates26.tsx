import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star, Trophy } from "lucide-react";

const conferenceData = {
  id: "ICATES-26",
  title: "International Conference on Artificial Intelligence, Technology & Engineering Systems",
  date: "12 July 2026",
  location: "Hybrid Mode",
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeVxWk6j8SbsuQ5uaRxmp8dVpdPoDIn0gZV-H2VZvCGW42bBA/viewform?usp=header",
  about: [
    "A premier international platform bringing together researchers, engineers, academicians, and industry professionals to explore cutting-edge advancements in Artificial Intelligence, engineering technologies, and intelligent systems driving the future of innovation.",
    "ICATES-26 focuses on the integration of Artificial Intelligence with engineering systems and modern technologies. The conference promotes interdisciplinary research and practical innovations across domains such as robotics, automation, smart infrastructure, cybersecurity, and digital transformation."
  ],
  highlights: [
    { title: "ISBN Proceedings", desc: "All accepted and registered papers will be published in conference proceedings with ISBN." },
    { title: "Scopus Opportunity", desc: "Selected papers may be recommended for publication in Scopus indexed journals." },
    { title: "Web of Science", desc: "Outstanding papers may be submitted to Web of Science indexed journals." },
    { title: "Industry Interaction", desc: "Collaborate with industry leaders and professionals." }
  ],
  speakers: [],
  tracks: [
    "Artificial Intelligence & Machine Learning",
    "Robotics & Automation",
    "IoT & Smart Systems",
    "Data Science & Engineering",
    "Cybersecurity & Blockchain",
    "Cloud & Edge Computing"
  ],
  delegates: [],
  timeline: [
    { date: "26 June 2026", label: "Paper Submission", desc: "Deadline for paper submission" },
    { date: "3 July 2026", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "9 July 2026", label: "Final Submission", desc: "Camera-ready submission" },
    { date: "12 July 2026", label: "Conference Date", desc: "Main event" }
  ]
};

const Icates26 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Upcoming Conference
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
          </div>
          
          <div className="lg:col-span-5">
            <Card className="p-8 bg-muted/50 border-0 shadow-inner h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Key Features</h3>
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
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Conference Scope</h2>
              <div className="grid sm:grid-cols-1 gap-4">
                {conferenceData.tracks.map((track, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3 hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{track}</span>
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

      {/* LEADERSHIP GRID - Only show if there are speakers */}
      {conferenceData.speakers.length > 0 && (
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Conference Leadership</h2>
            <p className="text-lg text-muted-foreground">The visionaries and academic leaders behind {conferenceData.id}.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {conferenceData.speakers.map((s, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative h-40 w-40 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
                </div>
                <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{s.org}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ORGANIZING COMMITTEE - Only show if there are delegates */}
      {conferenceData.delegates.length > 0 && (
        <section className="bg-muted py-24 border-t">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center justify-center gap-3">
                <User className="h-8 w-8 text-accent" />
                Organizing Committee
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {conferenceData.delegates.map((d, idx) => (
                  <Card key={idx} className="p-4 flex flex-col justify-center bg-card hover:shadow-md transition-shadow border-0 text-center">
                    <h4 className="font-bold text-foreground">{d.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{d.org}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Icates26;
