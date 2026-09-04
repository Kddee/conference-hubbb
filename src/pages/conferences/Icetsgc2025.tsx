import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star, ExternalLink } from "lucide-react";

const conferenceData = {
  id: "ICETSGC-25",
  title: "International Conference on Emerging Technologies, Sustainability, and Global Collaboration",
  date: "November 16, 2025",
  location: "Barcelona, Spain (Hybrid Mode)",
  registrationLink: "https://forms.gle/X1Q5P3TkEKXCxNkz9",
  proceedingsLink: "https://www.eminsphere.com/proceeding-icetsgc-25",
  about: [
    "ICETSGC-25 unites academia, industry, policymakers, and innovators.",
    "Explore technological breakthroughs, sustainable practices, and global collaboration strategies to shape a better future.",
    "Collaborate, publish, and grow with a global academic community. Turn your vision into worldwide influence."
  ],
  highlights: [
    { title: "Emerging Technologies", desc: "AI, IoT, Cloud, Blockchain, Robotics." },
    { title: "Sustainability & Climate", desc: "Renewable energy, smart cities, green infrastructure." },
    { title: "Global Collaboration", desc: "Bridging universities, industries, governments." },
    { title: "Innovation", desc: "Encouraging startups & digital transformation." }
  ],
  speakers: [
    { name: "Dr. Zoha Rahman", org: "Centre for Big Data & Machine Learning", country: "USA", img: "/speakers/dr-zoha-rahman.jpg" },
    { name: "Dr. Uma A. Alkhudary", org: "Middle East University", country: "Jordan", img: "/speakers/dr-uma-alkhudary.jpg" },
    { name: "Mr. Akshay Sharma", org: "Pension Systems Expert", country: "USA", img: "/speakers/akshay-sharma.jpg" },
    { name: "Dr. Firas Zeidan", org: "Higher Education & Research", country: "Lebanon", img: "https://static.wixstatic.com/media/30814e_d725b17d6d374b3abf1081771e55f53f~mv2.jpeg" },
    { name: "Dr. Rana El Khawand", org: "UN-Habitat", country: "UN HABITAT", img: "/speakers/dr-rana-el-khawand.jpg" },
    { name: "Prof. Dr. Alexander Bull", org: "IU International University", country: "Germany", img: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
    { name: "Mouhssin Ait El Mouden", org: "Ibn Tofail University", country: "Morocco", img: "/speakers/mouhssin-ait-el-mouden.jpg" },
    { name: "Prof. Neha Singh", org: "PMM's BMMM College of Engineering", country: "India", img: "/speakers/prof-neha-singh.jpg" },
    { name: "Prof. Shweta N. Bansal", org: "D.Y. Patil College of Engineering", country: "India", img: "/speakers/prof-shweta-bansal.jpg" }
  ],
  glimpses: [
    "/conferences/icetsgc-glimpse.jpeg",
    "/conferences/icetsgc-glimpse-2.jpeg",
    "/conferences/icetsgc-banner.jpg"
  ],
  tracks: [
    "Emerging Technologies (AI, IoT, Cloud, Blockchain, Robotics)",
    "Sustainability & Climate (Renewable energy, smart cities, green infrastructure)",
    "Global Collaboration (Bridging universities, industries, governments)",
    "Innovation & Entrepreneurship (Encouraging startups & digital transformation)",
    "Inclusive Development (Ethics, human rights, policy-driven progress)"
  ],
  awards: [
    "Official Conference Proceedings",
    "Peer-Reviewed Research Contributions",
    "Sustainable Innovations Recognition",
    "Global Collaborations Showcase"
  ],
  delegates: [],
  timeline: [
    { date: "12 Nov 2025", label: "Paper Submission", desc: "Extended deadline" },
    { date: "13 Nov 2025", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "14 Nov 2025", label: "Final Paper", desc: "Final paper & registration" },
    { date: "16 Nov 2025", label: "Conference Date", desc: "Hybrid event in Barcelona" }
  ],
  videos: []
};

const Icetsgc2025 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Official Proceedings Live
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
                <a href={conferenceData.proceedingsLink} target="_blank" rel="noopener noreferrer">
                  View Proceedings <ExternalLink className="ml-2 h-5 w-5" />
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
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tracks */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Conference Tracks</h2>
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

      {/* MODERN SPEAKERS GRID - Conditionally Rendered */}
      {conferenceData.speakers && conferenceData.speakers.length > 0 && (
        <section className="container py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Keynote Speakers</h2>
            <p className="text-lg text-muted-foreground">Distinguished keynote speakers from academia, industry, and global organizations who bring unparalleled expertise in computational intelligence and emerging technologies.</p>
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
      )}

      {/* PUBLICATION */}
      <section className="bg-muted py-24 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-accent" />
              Conference Proceedings
            </h2>
            <Card className="p-8 md:p-12 bg-primary text-primary-foreground border-0 shadow-xl relative overflow-hidden">
              <Star className="absolute -right-6 -bottom-6 h-64 w-64 text-primary-foreground/5" />
              <div className="relative z-10 grid sm:grid-cols-2 gap-8">
                {conferenceData.awards.map((award, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <span className="font-bold text-lg">{award}</span>
                  </div>
                ))}
              </div>
              <div className="relative z-10 mt-10 text-center border-t border-primary-foreground/10 pt-8">
                <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent border-accent text-accent hover:bg-accent hover:text-primary">
                  <a href={conferenceData.proceedingsLink} target="_blank" rel="noopener noreferrer">
                    View Full Conference Proceedings <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Icetsgc2025;
