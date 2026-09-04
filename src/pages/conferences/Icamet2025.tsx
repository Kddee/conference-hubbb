import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star, Trophy } from "lucide-react";

const conferenceData = {
  id: "ICAMET-25",
  title: "International Conference on Advancements in Modern Engineering and Technology",
  date: "Date: TBD",
  location: "G. S. Moze College of Engineering, Pune, India (Hybrid)",
  registrationLink: "#",
  about: [
    "Genba Sopanrao Moze College of Engineering is a premier engineering institution in Pune, Maharashtra, India. Established in 1999, the college offers seven undergraduate and two postgraduate programs, and is dedicated to high-quality technical education, innovative research, and professional development.",
    "ICAMET 2025 provides a platform for academia, industry, and research organizations to present advancements and research outcomes across engineering, AI, Data Analytics, and Environmental Sustainability."
  ],
  highlights: [
    { title: "Research Publications", desc: "Accepted papers published in reputed international journals." },
    { title: "Networking Opportunities", desc: "Interact with global leaders, researchers, and professionals." },
    { title: "Workshops & Tutorials", desc: "Learn from industry and academic experts in curated sessions." },
    { title: "Awards & Recognition", desc: "Best paper and presentation awards encouraging excellence." }
  ],
  speakers: [
    { name: "Hon. Shri. Rambhau Moze", org: "Chief Patron | President, Former MLA", country: "India", img: "/speakers/rambhau-moze.jpg" },
    { name: "Dr. Ratnaraja Kumar Jambi", org: "Conference Convener | Principal, G. S. Moze COE", country: "India", img: "https://static.wixstatic.com/media/30814e_68b76caedcdf48b6988367c0c06ab3c8~mv2.jpeg" },
    { name: "Prof. Deepak K. Sharma", org: "Co-Convener | Head of AIDS and IQAC", country: "India", img: "/speakers/prof-deepak-sharma.jpg" },
    { name: "Dr. Ushadevi Patil", org: "Co-Convener | Dean of R&D", country: "India", img: "/speakers/dr-ushadevi-patil.jpg" }
  ],
  glimpses: [
    "/conferences/icamet-campus.jpg"
  ],
  isbn: "978-93-342-5206-4",
  tracks: [
    "Advancements in Modern Engineering Practices",
    "Artificial Intelligence & Machine Learning",
    "Data Analytics & Big Data",
    "Environmental Sustainability & Green Technology",
    "Smart Systems & Next-Gen Computing"
  ],
  delegates: [
    { name: "Prof. Sai Sudha", org: "H.O.D (Computer Engineering)", country: "India" },
    { name: "Prof. Sana Shaikh", org: "H.O.D (Information Technology)", country: "India" },
    { name: "Prof. Deepak K. Sharma", org: "H.O.D (AI & DS)", country: "India" },
    { name: "Prof. Pallavi Patil", org: "H.O.D (AI & ML)", country: "India" },
    { name: "Prof. Sushma Pathawardhan", org: "H.O.D (E&TC)", country: "India" },
    { name: "Prof. Seema Sheiykar", org: "H.O.D (Civil Engineering)", country: "India" },
    { name: "Dr. Santosh Sandanshiv", org: "H.O.D (Mechanical Engineering)", country: "India" },
    { name: "Prof. Dhananjay Alagavadi", org: "H.O.D (First Year Engineering)", country: "India" },
    { name: "Prof. Deepak Kulkarni", org: "H.O.D (MBA)", country: "India" },
    { name: "Prof. Mukta Deshpande", org: "H.O.D (MCA)", country: "India" }
  ],
  timeline: [
    { date: "TBD", label: "Paper Submission", desc: "Deadline to be announced" },
    { date: "TBD", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "TBD", label: "Conference Date", desc: "Dates to be announced" }
  ]
};

const Icamet2025 = () => {
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
            </div>

            <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl">
              <a href="mailto:info@eminsphere.com">
                Contact Organizers <ArrowRight className="ml-2 h-5 w-5" />
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
                      <div className="absolute left-6 top-10 bottom-[-24px] w-px bg-primary-foreground/20"></div>
                    )}
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 z-10">
                      <Calendar className="h-5 w-5 text-accent" />
                    </div>
                    <div className="pt-2">
                      <div className="text-xl font-bold text-accent">{item.date}</div>
                      <h4 className="font-semibold text-white mt-1">{item.label}</h4>
                      <p className="text-sm text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP GRID */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Conference Leadership</h2>
          <p className="text-lg text-muted-foreground">The visionaries and academic leaders behind ICAMET 2025.</p>
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

      {/* ORGANIZING COMMITTEE */}
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
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Icamet2025;
