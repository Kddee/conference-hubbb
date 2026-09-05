import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Globe2, ArrowRight, BookOpen, Users, Award, ShieldCheck, MapPin, Clock, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const conferences = [
  {
    title: "AIFORGE 2026: International Conference on Agentic Intelligence for Foundations, Orchestration, Research, Governance and Engineering",
    city: "Hybrid Mode",
    country: "Global",
    date: "6 September 2026",
    topic: "AI & Engineering",
    isbn: "978-81-687765-9-3",
    link: "/aiforge-26",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "ICMREF-26: International Conference on Multidisciplinary Research & Emerging Frontiers in AI",
    city: "Tbilisi",
    country: "Georgia",
    date: "4 October 2026",
    topic: "Technology & AI",
    link: "/icmref-26",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
  }
];

const benefits = [
  { icon: BookOpen, title: "Scopus & WoS Indexing", desc: "All accepted papers are published in high-impact, globally indexed partner journals." },
  { icon: Users, title: "Global Networking", desc: "Interact with keynote speakers, industry leaders, and researchers from over 50 countries." },
  { icon: Award, title: "Awards & Recognition", desc: "Stand out with 'Best Paper' and 'Best Presenter' awards distributed at every summit." },
  { icon: ShieldCheck, title: "Rigorous Peer Review", desc: "We maintain a strict double-blind peer review process to ensure academic excellence." },
];

const timelines = [
  { step: "01", title: "Call for Papers", desc: "Official announcement and opening of the submission portal for abstracts and full papers." },
  { step: "02", title: "Double-Blind Review", desc: "Submitted manuscripts are assigned to our global review panel for technical screening." },
  { step: "03", title: "Notification", desc: "Authors receive detailed reviewer feedback and official letters of acceptance." },
  { step: "04", title: "Camera-Ready", desc: "Final formatting according to IEEE/Springer guidelines and copyright transfer." },
  { step: "05", title: "Execution", desc: "Global academic gathering, keynote sessions, and technical paper presentations." }
];

const faqs = [
  { q: "Can I participate virtually?", a: "Yes, we offer fully virtual and hybrid modes for delegates who cannot travel internationally." },
  { q: "How long does the peer review take?", a: "Our expedited, yet rigorous review process typically takes 14 to 21 working days." },
  { q: "Are the proceedings Scopus indexed?", a: "Yes, all our partner proceedings and journals are indexed in Scopus, Web of Science, or UGC Care depending on the specific conference." },
  { q: "Is co-authorship allowed?", a: "Yes, up to 5 co-authors are permitted per paper submission." }
];

const UpcomingConferences = () => (
  <main className="min-h-screen bg-background">
    <PageHero
      eyebrow="2026 Official Calendar"
      title="Upcoming Global Conferences"
      description="Reserve your seat at the world's most anticipated scientific gatherings. Explore our curated calendar of international academic conferences across every discipline."
      variant="aurora"
    />
    
    {/* UPCOMING CONFERENCES LISTING */}
    <section className="container py-16 sm:py-24 relative z-10">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
        {conferences.map((c) => (
          <Card key={c.title} className="group relative overflow-hidden rounded-2xl sm:rounded-[2rem] border-0 bg-card min-h-[480px] sm:h-[450px] flex flex-col justify-end">
            <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            
            <div className="relative z-10 p-5 sm:p-10 flex flex-col justify-end h-full">
              <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 sm:mb-5 w-max shadow-gold">
                {c.topic}
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-5 leading-tight group-hover:text-primary transition-colors">{c.title}</h3>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90 font-medium mb-6 sm:mb-8">
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> {c.date}</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> {c.city}, {c.country}</div>
                {c.isbn && (
                  <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> ISBN: {c.isbn}</div>
                )}
              </div>
              
              <Button asChild className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-primary hover:text-primary-foreground border border-white/20 text-white font-bold h-12 sm:h-14 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base">
                <Link to={c.link}>
                  View Full Details & Register <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>

    {/* WHY ATTEND SECTION */}
    <section className="bg-primary/5 py-16 sm:py-24 border-y border-white/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs sm:text-sm tracking-wider uppercase mb-4 border border-accent/20">
            Ecosystem Benefits
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">Why Attend Eminsphere Summits?</h2>
          <p className="text-sm sm:text-lg text-muted-foreground">Every conference is meticulously designed to provide unparalleled value to our delegates.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-6 sm:p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary bg-card border-white/5 rounded-2xl sm:rounded-3xl">
              <div className="h-14 w-14 sm:h-16 sm:w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5 sm:mb-6">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-3 sm:mb-4">{title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* TIMELINE SECTION */}
    <section className="bg-card py-16 sm:py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] mix-blend-screen" />
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">Standard Submission Timeline</h2>
          <p className="text-sm sm:text-lg text-muted-foreground">The typical lifecycle of a paper submission leading up to the conference day.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />
          
          {timelines.map((t, i) => (
            <div key={i} className="relative pt-4 sm:pt-6">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-card border-2 border-primary flex items-center justify-center font-black text-xl sm:text-2xl text-primary mx-auto mb-5 sm:mb-8 relative z-10 shadow-[0_0_30px_rgba(152,227,152,0.15)] bg-background">
                {t.step}
              </div>
              <div className="text-center px-2">
                <h4 className="font-bold text-white mb-2 sm:mb-3 text-base sm:text-lg">{t.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* SUBMISSION GUIDELINES / CALL FOR PAPERS */}
    <section className="container py-16 sm:py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">Call for Papers</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            We invite original, unpublished research papers for presentation at our upcoming conferences. Submissions undergo a rigorous double-blind peer review process.
          </p>
          <ul className="space-y-4 sm:space-y-6 text-muted-foreground mb-8 sm:mb-10 text-sm sm:text-lg">
            <li className="flex items-start gap-3 sm:gap-4">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
              </div>
              <span>Plagiarism must be below 15% (Turnitin).</span>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
              </div>
              <span>Paper formatting strictly as per IEEE/Springer guidelines.</span>
            </li>
            <li className="flex items-start gap-3 sm:gap-4">
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
              </div>
              <span>Full manuscript submissions are prioritized over abstracts.</span>
            </li>
          </ul>
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground h-14 sm:h-16 px-8 sm:px-10 rounded-full font-bold text-base sm:text-lg shadow-gold hover:-translate-y-1 transition-smooth">
            <Link to="/registration">Submit Your Manuscript</Link>
          </Button>
        </div>
        
        <div className="lg:col-span-7">
          <Card className="glass-strong border-white/10 p-5 sm:p-10 md:p-14 rounded-2xl sm:rounded-[3rem] relative overflow-hidden shadow-elegant">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6 sm:mb-10">Author Presentation Formats</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-black/40 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Oral Presentation</h4>
                <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">Present your findings live via a 15-minute presentation session followed by Q&A. Available in both physical and virtual modes.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Poster Presentation</h4>
                <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">Visually communicate your research in our interactive poster gallery. Dedicated networking time allocated for feedback.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">Listener / Delegate</h4>
                <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">Attend the conference without presenting a paper. Gain access to all keynotes, technical sessions, and networking events.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    {/* CONFERENCE MODES */}
    <section className="bg-primary/5 py-16 sm:py-24 md:py-32 border-y border-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-10 sm:gap-16 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 sm:mb-6">Modes of Participation</h2>
            <p className="text-muted-foreground text-base sm:text-xl leading-relaxed mb-6 sm:mb-8">
              Eminsphere ensures global accessibility by offering multiple avenues for researchers to present their work seamlessly.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <Card className="glass border-white/10 p-6 sm:p-10 text-center hover:border-primary/50 transition-all hover:-translate-y-2 rounded-2xl sm:rounded-3xl">
              <Globe2 className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-4 sm:mb-6" />
              <h4 className="font-bold text-white text-lg sm:text-xl mb-2 sm:mb-3">Physical</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">In-person gathering at top-tier global venues.</p>
            </Card>
            <Card className="glass border-white/10 p-6 sm:p-10 text-center hover:border-primary/50 transition-all hover:-translate-y-2 rounded-2xl sm:rounded-3xl">
              <Clock className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-4 sm:mb-6" />
              <h4 className="font-bold text-white text-lg sm:text-xl mb-2 sm:mb-3">Hybrid</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">A seamless blend of physical and remote attendees.</p>
            </Card>
            <Card className="glass border-white/10 p-6 sm:p-10 text-center hover:border-primary/50 transition-all hover:-translate-y-2 rounded-2xl sm:rounded-3xl">
              <Globe className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-primary mb-4 sm:mb-6" />
              <h4 className="font-bold text-white text-lg sm:text-xl mb-2 sm:mb-3">Virtual</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">100% online execution via HD video conferencing.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ SECTION */}
    <section className="container py-16 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <p className="text-base sm:text-xl text-muted-foreground">Everything you need to know about joining our conferences.</p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="glass border-white/10 p-5 sm:p-10 rounded-2xl sm:rounded-[2rem] hover:border-white/20 transition-colors">
              <h4 className="font-bold text-white text-base sm:text-xl mb-2 sm:mb-4 flex items-start gap-3 sm:gap-4">
                <span className="text-primary font-black text-xl sm:text-2xl mt-0.5">Q.</span> {faq.q}
              </h4>
              <p className="text-muted-foreground text-xs sm:text-lg leading-relaxed flex items-start gap-3 sm:gap-4">
                <span className="text-muted-foreground/30 font-black text-xl sm:text-2xl mt-0.5">A.</span> {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="bg-gradient-to-r from-background to-muted py-16 sm:py-24 md:py-32 text-center border-t border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="container max-w-3xl relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white mb-4 sm:mb-8">Ready to join the <span className="text-primary">global stage?</span></h2>
        <p className="text-base sm:text-xl text-white/70 mb-8 sm:mb-12">Select your preferred conference above and secure your registration today.</p>
        <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-bold h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
          <Link to="/registration">Register Now <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" /></Link>
        </Button>
      </div>
    </section>
  </main>
);

export default UpcomingConferences;
