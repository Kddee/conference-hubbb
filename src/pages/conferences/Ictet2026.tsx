import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star } from "lucide-react";

const conferenceData = {
  id: "ICTET-26",
  title: "International Conference on Cutting-Edge Technologies",
  date: "15 February 2026",
  location: "Hybrid Mode (Online + Offline)",
  registrationLink: "https://forms.gle/MbNktkdVQzzLa6RUA",
  about: [
    "ICTET-26 is an international multidisciplinary conference aimed at bringing together researchers, academicians, industry professionals, entrepreneurs, and policy makers.",
    "The conference provides a premium platform to share innovations, research findings, and future-ready technologies across both technical and non-technical domains.",
    "Through keynote sessions, technical tracks, and collaborative discussions, ICTET-26 strives to foster global networking and advance the frontiers of cutting-edge technology."
  ],
  highlights: [
    { title: "Multidisciplinary Approach", desc: "Covers a wide spectrum of technical and non-technical domains." },
    { title: "Hybrid Mode", desc: "Flexible participation with both online and offline engagement options." },
    { title: "Global Networking", desc: "Connect with researchers, industry professionals, and policy makers worldwide." },
    { title: "High-Quality Publication", desc: "Accepted papers published in ISBN-approved proceedings." }
  ],
  speakers: [
    { name: "Dr. Walida Ounruean", org: "Uttaradit Rajabhat University", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
    { name: "Ezinne Esther Arisa", org: "Candy Rainbow Creations", country: "South Africa", img: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
    { name: "Mrugendra Madalagi", org: "Solution Architect", country: "USA", img: "https://static.wixstatic.com/media/30814e_91f0775a99254778a49bbb97171dfadb~mv2.jpeg" },
    { name: "RC Holmes", org: "Wealthy Results LLC", country: "USA", img: "https://static.wixstatic.com/media/502b14_25f6163bd55c4354a06f544c5e8ffa9e~mv2.png" },
    { name: "Sri Harsha Anand Pushkala", org: "Atlanticus Holdings", country: "USA", img: "https://static.wixstatic.com/media/30814e_cb5e002dc53f465688ce32280a1a93f3~mv2.jpeg" },
    { name: "Dr. Aida Mehrad", org: "C3S Business School", country: "Spain", img: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
    { name: "Dr. Mehwish (Mishy) Rashid", org: "Keiser University", country: "USA", img: "https://static.wixstatic.com/media/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
    { name: "Nadine Zeinoun", org: "President, ICF Chapter Ottawa", country: "Lebanon", img: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
    { name: "Prathap Raghavan", org: "Santander", country: "USA", img: "/speakers/prathap-raghavan.png" },
    { name: "Sudeep Annappa Shanubhog", org: "Tential Inc.", country: "USA", img: "https://static.wixstatic.com/media/30814e_d49cf5c47ba64a629f0bb3c0618967e6~mv2.jpeg" },
    { name: "Utkarsh Sharma", org: "AI–FinTech Leader", country: "USA", img: "https://static.wixstatic.com/media/30814e_150514da48cb41598e25829a5c686936~mv2.jpeg" },
    { name: "Shyam Kumar Gajula", org: "Cybersecurity Researcher", country: "United States", img: "https://static.wixstatic.com/media/30814e_c5f4a33e93c34938bf4f267806ac057c~mv2.jpg" },
    { name: "Yesha Patel", org: "Senior Solution Architect", country: "United States", img: "https://static.wixstatic.com/media/30814e_6354e00a70db405c823ee8721026e4f1~mv2.avif" }
  ],
  tracks: [
    "AI & Machine Learning (Generative AI, NLP, Deep Learning)",
    "Data Science (Big Data, Analytics, Forecasting)",
    "IoT & Smart Systems (Industry 4.0, CPS)",
    "Communication Systems (5G/6G, Networks)",
    "Management & Humanities (Innovation, Sustainability)",
    "Interdisciplinary Research (Healthcare, Education, Finance)"
  ],
  awards: [
    "ISBN: 978-81-998717-5-5 Conference Proceedings",
    "Scopus / WoS / UGC-CARE Indexing Opportunities",
    "Rigorous Peer Review Process",
    "Global Research Dissemination"
  ],
  delegates: [
    { name: "Dr. S. M. Shiyekar (Session Chair)", org: "D. Y. Patil College of Engineering", country: "India" },
    { name: "Dr. Prabhat Thakur (Session Chair)", org: "Alliance School of Applied Engineering", country: "India" }
  ],
  timeline: [
    { date: "15 Jan 2026", label: "Paper Submission", desc: "Full paper submission deadline" },
    { date: "25 Jan 2026", label: "Acceptance Notice", desc: "Notification of acceptance" },
    { date: "05 Feb 2026", label: "Registration", desc: "Final registration deadline" },
    { date: "15 Feb 2026", label: "Conference Date", desc: "Hybrid conference day" }
  ],
  glimpses: [
    "https://static.wixstatic.com/media/502b14_edb34fd966bd47828bf664f663abdbf9~mv2.png",
    "https://static.wixstatic.com/media/502b14_219e55d10fce4c84a137a2237cee8ea9~mv2.png",
    "https://static.wixstatic.com/media/502b14_2eaed030e42b41cd83cd53cdfd2e7c08~mv2.png",
    "https://static.wixstatic.com/media/502b14_60fdae1f90e94ac9bc4c901d9d3fab98~mv2.png",
    "https://static.wixstatic.com/media/502b14_ec71360407204e648fac1ff35d41c712~mv2.png",
    "https://static.wixstatic.com/media/502b14_c5b24e50b1a04652a81e622dfbc4101f~mv2.png",
    "https://static.wixstatic.com/media/502b14_0d1fcbd0b5824e94ac5ff878f38b3d15~mv2.png",
    "https://static.wixstatic.com/media/502b14_1ed526bb46584faba5572a59d62cc05c~mv2.png",
    "https://static.wixstatic.com/media/502b14_46cb554fd614451f977bb8e91e7ff44e~mv2.png",
    "https://static.wixstatic.com/media/502b14_8d85b964b4aa4760a4372158c98302bb~mv2.png",
    "https://static.wixstatic.com/media/502b14_a16af0a1732a45fcac7ecb2cd354d5c7~mv2.png"
  ]
};

const Ictet2026 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • ISBN: 978-81-998717-5-5
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
                Session Chairs & Delegates
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

export default Ictet2026;
