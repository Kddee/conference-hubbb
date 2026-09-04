import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star, PlayCircle } from "lucide-react";

const conferenceData = {
  id: "ICASIT-26",
  title: "International Conference on Applied Sciences, Innovation, and Technology",
  date: "25 January 2026",
  location: "Zurich, Switzerland (Hybrid Mode)",
  registrationLink: "https://forms.gle/PstefUnDBHcvjmdH9",
  about: [
    "ICASIT-26 is a premier international platform bringing together researchers, academicians, and industry experts.",
    "The conference is designed to facilitate the exchange of ideas and discoveries in applied sciences, innovation, sustainability, and emerging technologies.",
    "By fostering global networking and cross-disciplinary collaborations, ICASIT-26 aims to accelerate technological advancements and sustainable solutions."
  ],
  highlights: [
    { title: "Applied Sciences", desc: "Showcasing breakthroughs in modern scientific research." },
    { title: "Innovation & Tech", desc: "Exploring emerging technologies and disruptive innovations." },
    { title: "Sustainability", desc: "Focusing on sustainable development and eco-friendly technologies." },
    { title: "Global Impact", desc: "Connecting researchers and industry experts from around the world." }
  ],
  speakers: [
    { name: "Mr. Saptarshi Debnath", org: "Scalable Systems & Cloud Architecture", country: "USA", img: "https://static.wixstatic.com/media/30814e_1b4918e0fd854271a429a912bcb71060~mv2.jpeg" },
    { name: "Dr. Ruth Abiola Adimula", org: "University of Ilorin", country: "Nigeria", img: "https://static.wixstatic.com/media/30814e_164d8ef597e74e1a89f4e800e7c38a3f~mv2.jpeg" },
    { name: "Mr. Rajaguru Ganesan", org: "System Modernization & Cloud", country: "USA", img: "https://static.wixstatic.com/media/30814e_7e8d8afea4824824b0a36dc883235730~mv2.jpeg" },
    { name: "Dr. Ratna Raja Kumar Jambi", org: "G S Moze College of Engineering", country: "India", img: "https://static.wixstatic.com/media/30814e_68b76caedcdf48b6988367c0c06ab3c8~mv2.jpeg" },
    { name: "Dr. Walida Ounruean", org: "Uttaradit Rajabhat University", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
    { name: "Mr. Satish Kabade", org: "Product Technical Expert", country: "USA", img: "https://static.wixstatic.com/media/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
    { name: "Dr. Sadia Nazneen Karobi", org: "School of Environment and Life Sciences", country: "Global", img: "https://static.wixstatic.com/media/30814e_d7b9cf9312084baa9e85220ae3d0f383~mv2.png" },
    { name: "Mr. Amber Rastogi", org: "Distributed Systems & Cloud Computing", country: "USA", img: "https://static.wixstatic.com/media/30814e_e16da5320136479198a3e09ce0193ff2~mv2.jpeg" },
    { name: "Dr. Tiansheng Yang", org: "University of South Wales", country: "UK", img: "https://static.wixstatic.com/media/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg" },
    { name: "Karthikeyan Srinivasan", org: "Software Engineering & Architecture", country: "USA", img: "https://static.wixstatic.com/media/30814e_57facf9d3e004a5794bee03a1ce9feb6~mv2.jpeg" },
    { name: "Dr. Prashant Patil", org: "NGI's College of Engineering", country: "India", img: "https://static.wixstatic.com/media/30814e_c250e513d1c9430aac76d8bdd850e13e~mv2.jpg" },
    { name: "Hemang Upadhyay", org: "AI, E-commerce & Analytics", country: "USA", img: "https://static.wixstatic.com/media/30814e_d8f3f76a4383421eb967c779a89ac17f~mv2.jpeg" }
  ],
  tracks: [
    "Applied Sciences and Fundamentals",
    "Innovation & Sustainable Technologies",
    "Emerging Information Technologies",
    "Cloud Computing & Distributed Systems",
    "AI, Analytics & E-commerce",
    "Environmental Sciences & Sustainability"
  ],
  awards: [
    "ISBN: 978-81-996310-3-8 Conference Proceedings",
    "Double-Blind Peer Review Excellence",
    "International Indexing Opportunities",
    "Global Access Digital Library"
  ],
  delegates: [
    { name: "Katarzyna Antosz", org: "Rzeszow University of Technology", country: "Poland" },
    { name: "Mouhssin Ait El Mouden", org: "Ibn Tofail University", country: "Morocco" },
    { name: "Dr. Firas Zeidan", org: "Higher Education & Research", country: "Lebanon" },
    { name: "Dr. Reshma Sujal Sonar", org: "MIT World Peace University", country: "India" },
    { name: "Dr. Deepthi D Kulkarni", org: "KJEI's Trinity Academy of Engineering", country: "India" }
  ],
  timeline: [
    { date: "26 Dec 2025", label: "Abstract Submission", desc: "Abstract deadline" },
    { date: "05 Jan 2026", label: "Full Paper", desc: "Full paper submission" },
    { date: "15 Jan 2026", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "20 Jan 2026", label: "Final Submission", desc: "Final registration & submission" },
    { date: "25 Jan 2026", label: "Conference", desc: "Hybrid event in Zurich" }
  ],
  videos: [
    { url: "https://www.youtube.com/embed/03f2bVenPIM", title: "Keynote Talk by Mr. Rajaguru Ganesan" },
    { url: "https://www.youtube.com/embed/sQsk3HanogM", title: "Keynote Message (Shorts)" },
    { url: "https://www.youtube.com/embed/EAevp6yHQhc", title: "Keynote Highlight (Shorts)" },
    { url: "https://www.youtube.com/embed/CC0xyJIVl4c", title: "Keynote Message" },
    { url: "https://www.youtube.com/embed/wHzJecX9h3Q", title: "Keynote Video" }
  ],
  glimpses: [
    "/conferences/icasit-glimpse.png",
    "/conferences/icasit-glimpse-2.png"
  ]
};

const Icasit2026 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • ISBN: 978-81-996310-3-8
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
      <section className="bg-muted py-24 border-t">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Delegates */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <User className="h-8 w-8 text-accent" />
                Conference Experts
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

      {/* KEYNOTE VIDEO GALLERY */}
      {conferenceData.videos && conferenceData.videos.length > 0 && (
        <section className="container py-24 border-t">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 flex items-center justify-center gap-4">
              <PlayCircle className="h-10 w-10 text-accent" />
              Keynote Video Messages
            </h2>
            <p className="text-lg text-muted-foreground">Special messages from our distinguished keynote speakers at ICASIT-26.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {conferenceData.videos.map((video, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-lg group">
                <div className="relative pt-[177%] w-full bg-muted">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0 group-hover:scale-105 transition-transform duration-500"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Icasit2026;
