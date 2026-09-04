import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star, PlayCircle } from "lucide-react";

const conferenceData = {
  id: "ICMDIA-25",
  title: "International Conference on Multidisciplinary Developments in Innovation and Advancement",
  date: "December 14, 2025",
  location: "Helsinki, Finland (Hybrid Mode)",
  registrationLink: "https://forms.gle/TBhdH7gPF4Y3wrxb7",
  about: [
    "The ICMDIA-25 unites researchers, scholars, and professionals from around the world to promote interdisciplinary innovation and sustainable advancement.",
    "This global forum fosters collaboration across engineering, technology, management, environmental sciences, social innovation, and AI-driven transformation.",
    "Register now to submit your research, attend sessions, and engage with global experts driving the future of innovation."
  ],
  highlights: [
    { title: "Interdisciplinary Innovation", desc: "Promote interdisciplinary innovation and sustainable advancement." },
    { title: "Global Forum", desc: "Unites researchers, scholars, and professionals from around the world." },
    { title: "Diverse Domains", desc: "Engineering, technology, management, environmental sciences, and AI." },
    { title: "Hybrid Mode", desc: "Attend in person in Helsinki, Finland or virtually from anywhere." }
  ],
  speakers: [
    { name: "Nilesh Charankar", org: "AI Technology Leader and Independent Researcher", country: "USA", img: "https://static.wixstatic.com/media/30814e_70debe4180c34f9f83be4d5219c41358~mv2.jpeg" },
    { name: "Dr. Prodhan Mahbub Ibna Seraj", org: "Associate Professor", country: "Bangladesh", img: "https://static.wixstatic.com/media/30814e_e2e5efeee2d54b41bd193b968595b89b~mv2.jpeg" },
    { name: "Dr. Nadia Adnan", org: "Prince Mohammad Bin Fahd University", country: "Saudi Arabia", img: "https://static.wixstatic.com/media/30814e_68479290bb114146b46b56f021a75155~mv2.png" },
    { name: "Dr. Muhammad Tahir Jan", org: "Associate Professor", country: "Malaysia", img: "https://static.wixstatic.com/media/30814e_c8a29d72204a4175811ef562943091af~mv2.jpeg" },
    { name: "Dr. Ayoub Regragui", org: "Mohammed V University, Rabat", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
    { name: "Veeramani Sampathkumar", org: "Fintech Technology Leader", country: "USA", img: "https://static.wixstatic.com/media/30814e_9166636afad548f9aab5e2b2d1b35e97~mv2.jpeg" },
    { name: "Hicham ELKHOUAJA", org: "Researcher", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_d1c8c65f9d4d4bd59632c05aa894aa71~mv2.jpeg" },
    { name: "Mr. Rakesh Ramakrishna Pai", org: "Independent Researcher", country: "USA", img: "https://static.wixstatic.com/media/30814e_3885202ba5374de6b70a506164566564~mv2.jpeg" },
    { name: "Jawaher Al-Zeidi", org: "English Language Lecturer", country: "Oman", img: "https://static.wixstatic.com/media/30814e_e23eb1bb3dab4126bc28ec5d56fc238f~mv2.jpg" },
    { name: "Dr. Ratna Raja Kumar Jambi", org: "G S Moze College of Engineering", country: "India", img: "https://static.wixstatic.com/media/30814e_68b76caedcdf48b6988367c0c06ab3c8~mv2.jpeg" },
    { name: "Yesha Patel", org: "Senior Solution Architect", country: "United States", img: "https://static.wixstatic.com/media/30814e_6354e00a70db405c823ee8721026e4f1~mv2.avif" },
    { name: "Yukti Goyal", org: "Lead Software Engineer", country: "USA", img: "https://static.wixstatic.com/media/30814e_f4baaf1857454707a3b7c0c8e5e10963~mv2.avif" }
  ],
  tracks: [
    "Engineering & Technology (AI, IoT, Cybersecurity, Smart Systems, Data Engineering)",
    "Business & Management (Digital transformation, sustainability strategies, and global trade)",
    "Environmental & Sustainable Sciences (Climate resilience, renewable resources, and green innovation)",
    "Computing & Artificial Intelligence (Machine learning, robotics, autonomous systems, and data ethics)",
    "Social Innovation & Humanities (Ethics, education, digital inclusion, governance, and policy studies)"
  ],
  awards: [
    "ISBN: 978-81-994624-6-5 Conference Proceedings",
    "Rigorous Double-Blind Peer Review",
    "International Indexing Opportunities",
    "Global Access Digital Library"
  ],
  delegates: [],
  timeline: [
    { date: "10 Nov 2025", label: "Abstract Submission", desc: "Abstract deadline" },
    { date: "20 Nov 2025", label: "Full Paper", desc: "Full paper submission" },
    { date: "28 Nov 2025", label: "Acceptance", desc: "Notification of acceptance" },
    { date: "03 Dec 2025", label: "Registration", desc: "Final registration deadline" },
    { date: "14 Dec 2025", label: "Conference Date", desc: "Hybrid event in Helsinki" }
  ],
  glimpses: [
    "/conferences/icmdia-glimpse.jpeg",
    "/conferences/icmdia-glimpse-2.jpeg"
  ],
  videos: []
};

const Icmdia2025 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • ISBN: 978-81-994624-6-5
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

      {/* MODERN SPEAKERS GRID - Conditionally Rendered */}
      {conferenceData.speakers && conferenceData.speakers.length > 0 && (
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
      )}

      {/* PUBLICATION (No Delegates in this conference) */}
      <section className="bg-muted py-24 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center justify-center gap-3">
              <Star className="h-8 w-8 text-accent" />
              Publication & Recognition
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
            </Card>
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
            <p className="text-lg text-muted-foreground">Special messages from our distinguished keynote speakers.</p>
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

export default Icmdia2025;
