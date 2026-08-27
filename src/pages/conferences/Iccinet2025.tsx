import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star, PlayCircle, Trophy, ExternalLink } from "lucide-react";
import ConferenceSections from "@/components/layout/ConferenceSections";

const conferenceData = {
  id: "ICCINET-25",
  title: "International Conference on Computational Intelligence and Emerging Technologies",
  date: "October 25–26, 2025",
  location: "Malmö, Sweden (Hybrid Mode)",
  registrationLink: "https://forms.gle/yKnLw3zwdRcaAbN18",
  about: [
    "ICCINET-25 is a premier global forum advancing innovation, research collaboration, and knowledge sharing in AI, computational intelligence, data science, and next-generation technologies.",
    "Join distinguished experts from academia, industry, and global organizations sharing knowledge, vision, and leadership in computational intelligence and emerging technologies.",
    "Present your research, network with global experts, and publish in ISBN-indexed proceedings and reputed international journals."
  ],
  highlights: [
    { title: "Global Research Collaboration", desc: "Strengthening international partnerships in AI and emerging technologies." },
    { title: "Showcasing Innovation", desc: "Latest breakthroughs in AI, ML, IoT, robotics, and sustainable tech." },
    { title: "Exploring Future Trends", desc: "Next-generation computing, automation, and intelligent systems." },
    { title: "Industry-Academia Synergy", desc: "Bridging research and industrial applications." }
  ],
  speakers: [
    { name: "Dr. Joe Perez", org: "NC Department of Health & Human Services", country: "United States", img: "/speakers/dr-joe-perez.jpg" },
    { name: "Mr. Satish Kabade", org: "Product Technical Expert", country: "USA", img: "https://static.wixstatic.com/media/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
    { name: "Gregg Clunis", org: "Founder, Kojo", country: "United States", img: "/speakers/gregg-clunis.jpg" },
    { name: "Nomi Khedawala", org: "Reddit", country: "USA", img: "/speakers/nomi-khedawala.png" },
    { name: "Mr. Bhushan B. Chaudhari", org: "Senior Technology Lead", country: "USA", img: "/speakers/bhushan-chaudhari.jpg" },
    { name: "Jim Saliba", org: "James Saliba Inc", country: "USA", img: "/speakers/jim-saliba.png" },
    { name: "Dr. Walida Ounruean", org: "Uttaradit Rajabhat University", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
    { name: "Dr. Tiansheng Yang", org: "University of South Wales", country: "UK", img: "https://static.wixstatic.com/media/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg" },
    { name: "Mr. Sudipkumar Ghanvat", org: "VMO Digital", country: "United States", img: "/speakers/sudipkumar-ghanvat.png" },
    { name: "Anup Kagalkar", org: "Product Technical Expert", country: "United States", img: "/speakers/anup-kagalkar.png" }
  ],
  tracks: [
    "Policy & Ethics: AI governance, data privacy, and technology-driven policies",
    "Computational Intelligence & Data Science",
    "Emerging Technologies (AI, ML, IoT, Robotics)",
    "Next-generation Computing & Automation",
    "Sustainable Technologies & Intelligent Systems"
  ],
  delegates: [
    { name: "Prof. Indranil Mukherjee", org: "Head, AIML, NESS", country: "India" },
    { name: "Mr. Sam Lawe", org: "Navico Group", country: "New Zealand" },
    { name: "Mrs. Meryem Gurel", org: "Point Energy Intelligence Services", country: "Turkey" },
    { name: "Katarzyna Antosz", org: "Rzeszow University of Technology", country: "Poland" },
    { name: "Dr. Nilesh Vitthal Limbore", org: "Navsahyadri Group of Institutions", country: "India" }
  ],
  awards: [
    { title: "Best Paper Award", desc: "For the most outstanding research paper submitted and presented." },
    { title: "Best Presentation Award", desc: "For delivering an exceptional and engaging presentation." },
    { title: "Outstanding Innovation Award", desc: "For creative, innovative, and impactful contributions in the field." }
  ],
  timeline: [
    { date: "10 Oct 2025", label: "Final Paper & Reg.", desc: "Final submission and registration deadline" },
    { date: "25 Oct 2025", label: "Conference Day 1", desc: "Hybrid event begins in Malmö" },
    { date: "26 Oct 2025", label: "Conference Day 2", desc: "Keynotes, panels & awards ceremony" }
  ],
  videos: [
    { url: "https://www.youtube.com/embed/03f2bVenPIM", title: "Dr. Joe Perez | Keynote Speaker Message | ICCINET-25" },
    { url: "https://www.youtube.com/embed/sQsk3HanogM", title: "Dr. Walida Ounruean | Keynote Speaker Message | ICCINET-25" }
  ],
  glimpses: [
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
  ]
};

const Iccinet2025 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • ISBN: 978-93-344-3140-7
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

      {/* MODERN SPEAKERS GRID */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Keynote Speakers</h2>
          <p className="text-lg text-muted-foreground">Knowledge. Vision. Leadership. Distinguished keynote speakers from academia, industry, and global organizations.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {conferenceData.speakers.map((s, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center bg-card/40 p-5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all shadow-sm hover:shadow-md">
              <div className="relative w-full aspect-[4/4.5] max-w-[180px] mb-4 overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted/60 shadow-lg group-hover:border-accent/50 group-hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <img src={s.img} alt={s.name} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <h4 className="font-bold text-primary text-base leading-tight mb-1">{s.name}</h4>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-grow">{s.org}</p>
              <span className="text-[11px] font-semibold text-accent uppercase tracking-wider flex items-center justify-center gap-1 mt-auto">
                <Globe className="h-3 w-3" /> {s.country}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* KEYNOTE SPOTLIGHT (Videos) */}
      <section className="bg-muted py-24 border-y">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 flex items-center justify-center gap-4">
              <PlayCircle className="h-10 w-10 text-accent" />
              Keynote Spotlight
            </h2>
            <p className="text-lg text-muted-foreground">Exclusive video messages from our keynote speakers.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {conferenceData.videos.map((video, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-xl group rounded-2xl">
                <div className="relative pt-[56.25%] w-full bg-slate-900">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 bg-primary text-primary-foreground text-center font-medium">
                  {video.title}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTS & AWARDS */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Delegates */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <User className="h-8 w-8 text-accent" />
              Conference Experts
            </h2>
            <p className="text-muted-foreground mb-8">Expertise. Insight. Guidance. Our esteemed conference experts from leading organizations provide exceptional leadership.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {conferenceData.delegates.map((d, idx) => (
                <Card key={idx} className="p-4 flex flex-col justify-center bg-card hover:shadow-md transition-shadow border border-muted-foreground/10">
                  <h4 className="font-bold text-foreground">{d.name}</h4>
                  <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                    <span className="truncate pr-4">{d.org}</span>
                    <span className="font-medium text-accent shrink-0">{d.country}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <Trophy className="h-8 w-8 text-accent" />
              Awards & Recognition
            </h2>
            <Card className="p-8 bg-gradient-to-br from-primary to-slate-800 text-primary-foreground border-0 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <Trophy className="absolute -right-6 -bottom-6 h-64 w-64 text-primary-foreground/5" />
              <div className="relative z-10 space-y-8">
                <p className="text-foreground/90 font-medium leading-relaxed mb-6">
                  The conference recognizes outstanding contributions in research and innovation. Awards will be presented to authors and presenters who demonstrate excellence.
                </p>
                {conferenceData.awards.map((award, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 shadow-inner">
                      <Star className="h-6 w-6 text-accent fill-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{award.title}</h4>
                      <p className="text-sm text-primary-foreground/70 mt-1">{award.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ConferenceSections
        conferenceName={conferenceData.id}
        glimpses={conferenceData.glimpses}
      />

      {/* GLIMPSES & PROCEEDINGS */}
      <section className="bg-gradient-to-r from-background to-muted py-24 border-t border-primary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Glimpses: ICCINET 2025</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {conferenceData.glimpses.map((img, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-lg group bg-slate-800">
                <div className="relative pt-[75%] w-full">
                  <img src={img} alt={`Glimpse ${idx + 1}`} className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto bg-primary/10 p-12 rounded-3xl backdrop-blur-sm border border-primary/30 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Official Launch of the ICCINET-25 Conference Proceedings
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              The International Conference on Computational Intelligence and Emerging Technologies (ICCINET-25), held on October 25, 2025, proudly releases its official conference proceedings. Explore peer-reviewed research contributions, innovative technologies, and global collaborations driving the future of intelligent systems.
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full shadow-xl bg-transparent border-accent text-accent hover:bg-accent hover:text-primary transition-all">
              <a href="https://www.eminsphere.com" target="_blank" rel="noopener noreferrer">
                View Conference Proceedings <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Iccinet2025;
