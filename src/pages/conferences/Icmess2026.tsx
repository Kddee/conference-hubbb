import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star } from "lucide-react";

const conferenceData = {
  id: "ICMESS-26",
  title: "International Conference on Management, Economics, and Social Sciences",
  date: "February 8, 2026",
  location: "Kuala Lumpur, Malaysia (Hybrid Mode)",
  registrationLink: "https://forms.gle/AqVPo6TzjZ9mnLZt8",
  about: [
    "ICMESS-26 brings together global scholars, researchers, and professionals to share insights on emerging challenges and solutions in management, economics, and social sciences.",
    "The conference emphasizes sustainable development, digital innovation, and interdisciplinary collaboration for a connected world.",
    "Participate in meaningful discussions that drive the evolution of management, economics, and social sciences in the digital age, and connect with a global network of thought leaders and innovators."
  ],
  highlights: [
    { title: "Sustainable Development", desc: "Focus on resilient and sustainable growth across economies." },
    { title: "Digital Innovation", desc: "Exploring the impact of technology on management and society." },
    { title: "Interdisciplinary Approach", desc: "Bridging economics, management, and social sciences." },
    { title: "Global Networking", desc: "Connect with researchers and professionals worldwide." }
  ],
  speakers: [
    { name: "Dr. Nadia Adnan", org: "Prince Mohammad Bin Fahd University", country: "Saudi Arabia", img: "https://static.wixstatic.com/media/30814e_68479290bb114146b46b56f021a75155~mv2.png" },
    { name: "Dr. Ranà El Khawand", org: "UN-Habitat", country: "UN HABITAT", img: "https://static.wixstatic.com/media/502b14_e3b96c6fde384f0ba16dd14be8710af3~mv2.png" },
    { name: "Vijayachandar Sanikal", org: "IEEE Senior Member", country: "USA", img: "https://static.wixstatic.com/media/502b14_0269601f3e7b4a9ba877aec373e7f5ee~mv2.png" },
    { name: "Bhavya Mehta", org: "Independent Researcher", country: "USA", img: "https://static.wixstatic.com/media/502b14_89220e1abdb549c79f1981b88df127d0~mv2.png" },
    { name: "Lawrence Mazaki Mashati", org: "IMFC", country: "Kenya", img: "https://static.wixstatic.com/media/502b14_ec9a529cdc7c4e6e852442836e4fed51~mv2.png" },
    { name: "Dr. Jitendra Pandey, FHEA", org: "Middle East College", country: "Oman", img: "https://static.wixstatic.com/media/30814e_bf66c69035bc4e41bc50c2345187c6f2~mv2.jpeg" },
    { name: "Mr. Satyabrata Pradhan", org: "Automotive Engineer", country: "USA", img: "https://static.wixstatic.com/media/502b14_603e64a9735f4b8d844465896d5fba01~mv2.png" },
    { name: "Dr. Thillainayagam Sankaravel", org: "MedArb International", country: "India", img: "https://static.wixstatic.com/media/502b14_798238cd07c2464b8935f17ff4bc40be~mv2.png" },
    { name: "Dr. Walida Ounruean", org: "Uttaradit Rajabhat University", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" }
  ],
  tracks: [
    "Business & Management (Corporate leadership, innovation)",
    "Economics & Finance (Global trade, sustainable growth)",
    "Social Innovation (Public policy, development studies)",
    "Human Capital & Education (Workforce evolution, learning systems)"
  ],
  awards: [
    "ISBN: 978-81-996310-7-6 Conference Proceedings",
    "Rigorous Double-Blind Peer Review",
    "Scopus / WoS Indexing Opportunities",
    "Global Academic Indexing"
  ],
  delegates: [
    { name: "Dr. Nadia Adnan", org: "Stanford Top 2% Scientist", country: "Saudi Arabia" },
    { name: "Dr. Ranà El Khawand", org: "UN-Habitat Technical Expert", country: "Global" },
    { name: "Vijayachandar Sanikal", org: "IEEE Senior Member", country: "USA" }
  ],
  timeline: [
    { date: "05 Jan 2026", label: "Abstract Submission", desc: "Abstract deadline" },
    { date: "15 Jan 2026", label: "Full Paper", desc: "Full paper submission" },
    { date: "25 Jan 2026", label: "Acceptance Notice", desc: "Notification of acceptance" },
    { date: "30 Jan 2026", label: "Registration", desc: "Final registration deadline" },
    { date: "08 Feb 2026", label: "Conference Date", desc: "Event day in Kuala Lumpur" }
  ],
  glimpses: [
    "/conferences/icmess-glimpse.jpg",
    "/conferences/icmess-glimpse-2.jpg"
  ]
};

const Icmess2026 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • ISBN: 978-81-996310-7-6
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
                Submit Paper / Register <ArrowRight className="ml-2 h-5 w-5" />
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
              <h3 className="text-xl font-bold text-primary mb-6">Key Highlights</h3>
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
                Featured Delegates
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
                <Star className="h-8 w-8 text-accent" />
                Publication
              </h2>
              <Card className="p-6 bg-primary text-primary-foreground border-0 shadow-xl relative overflow-hidden">
                <Star className="absolute -right-6 -bottom-6 h-48 w-48 text-primary-foreground/5" />
                <div className="relative z-10 space-y-6">
                  {conferenceData.awards.map((award, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
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

export default Icmess2026;
