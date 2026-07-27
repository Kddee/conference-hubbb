import { useEffect } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Calendar, Users, ArrowRight, Award, Globe, Globe2, BookOpen, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Link } from "react-router-dom";

const recent2026 = [
  { id: "icaits-26", title: "ICAITS-26", date: "26 July 2026", type: "Virtual Mode" },
  { id: "iccemb-26", title: "ICCEMB-26", date: "31 May 2026", type: "Online Mode" },
  { id: "icqadts-2026", title: "ICQADTS-2026", date: "12 April 2026", type: "Hybrid Event" },
  { id: "icaidss-26", title: "ICAIDSS-26", date: "29 March 2026", type: "Hybrid Event" },
  { id: "icaeset-2026", title: "ICAESET-2026", date: "15 March 2026", type: "Hybrid Event" },
  { id: "icnse-26", title: "ICNSE-26", date: "01 March 2026", type: "Hybrid Event" },
  { id: "ictet-26", title: "ICTET-26", date: "15 February 2026", type: "Hybrid Event" },
  { id: "icmess-26", title: "ICMESS-26", date: "2026", type: "Hybrid Event" },
  { id: "icasit-26", title: "ICASIT-26", date: "2026", type: "Hybrid Event" },
];

// Additional sections data
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
  { step: "05", title: "Execution", desc: "Global academic gathering, keynote sessions, and technical paper presentations." },
];

const faqs = [
  { q: "Can I participate virtually?", a: "Yes, we offer fully virtual and hybrid modes for delegates who cannot travel internationally." },
  { q: "How long does the peer review take?", a: "Our expedited, yet rigorous review process typically takes 14 to 21 working days." },
  { q: "Are the proceedings Scopus indexed?", a: "Yes, all our partner proceedings and journals are indexed in Scopus, Web of Science, or UGC Care depending on the specific conference." },
  { q: "Is co-authorship allowed?", a: "Yes, up to 5 co-authors are permitted per paper submission." },
];

const recent2025 = [
  { id: "icmdia-25", title: "ICMDIA-25", date: "2025", type: "Hybrid Event" },
  { id: "icetsgc-25", title: "ICETSGC-25", date: "2025", type: "Hybrid Event" },
  { id: "iccinet-25", title: "ICCINET-25", date: "2025", type: "Hybrid Event" },
  { id: "icamet-2025", title: "ICAMET 2025", date: "2025", type: "Hybrid Event" },
];

const recent2024 = [
  { id: "icenta-2024", title: "ICENTA-2024", date: "2024", type: "Hybrid Event" },
  { id: "iceiis-2024", title: "ICEIIS-2024", date: "2024", type: "Hybrid Event" },
  { id: "icaids-2024", title: "ICAIDS-2024", date: "2024", type: "Hybrid Event" },
];

const stats = [
  { value: "45+", label: "Summits Executed" },
  { value: "10K+", label: "Delegates Hosted" },
  { value: "120+", label: "Keynote Speakers" },
  { value: "85+", label: "Countries Reached" },
];

const ConferenceGrid = ({ title, data }: { title: string, data: any[] }) => (
  <div className="mb-32">
    <div className="flex items-center gap-6 mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-black text-white whitespace-nowrap">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((c) => (
        <Card key={c.id} className="relative overflow-hidden group border-white/5 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(152,227,152,0.15)] rounded-3xl p-8">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
          
          <div className="flex-1 relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white tracking-widest uppercase">
                <CheckCircle2 className="h-3 w-3 text-primary" /> Completed
              </div>
              <Award className="h-6 w-6 text-white/20 group-hover:text-primary transition-colors" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-8 group-hover:text-primary transition-colors leading-tight">{c.title}</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground font-medium mb-10">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-black/60 border border-white/5 flex items-center justify-center shrink-0">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <span>{c.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-black/60 border border-white/5 flex items-center justify-center shrink-0">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <span>{c.type}</span>
              </div>
            </div>
          </div>
          
          <Button asChild variant="outline" className="w-full relative z-10 glass border-white/10 hover:bg-primary/10 hover:border-primary/30 hover:text-white group/btn h-14 rounded-xl font-bold">
            <Link to={["icaids-2024", "iccemb-26", "icaits-26"].includes(c.id) ? `/${c.id}` : `/recent-conferences/${c.id}`}>
              View Memories & Photos <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </Card>
      ))}
    </div>
  </div>
);

const RecentConferences = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <PageHero
        eyebrow="Legacy & Heritage"
        title="Recent Conferences"
        description="A look back at our most prestigious global gatherings of researchers, scholars, and industry innovators."
        variant="particles"
      />

      {/* ARCHIVES GRID */}
      <section className="container py-16 relative z-10">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <ConferenceGrid title="2026 Archive" data={recent2026} />
        <ConferenceGrid title="2025 Archive" data={recent2025} />
        <ConferenceGrid title="2024 Archive" data={recent2024} />
      </div>
    </section>

    {/* WHY ATTEND SECTION */}
    <section className="bg-primary/5 py-24 border-y border-white/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-4 border border-accent/20">
            Ecosystem Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Why Attend Recent Conferences?</h2>
          <p className="text-lg text-muted-foreground">Each conference is meticulously designed to provide unparalleled value to our delegates.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <Card key={title} className="p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary bg-card border-white/5 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* TIMELINE SECTION */}
    <section className="bg-card py-32 border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] mix-blend-screen" />
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Standard Submission Timeline</h2>
          <p className="text-lg text-muted-foreground">The typical lifecycle of a paper submission leading up to the conference day.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-6 relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />
          {timelines.map((t, i) => (
            <div key={i} className="relative pt-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="h-20 w-20 rounded-full bg-card border-2 border-primary flex items-center justify-center font-black text-2xl text-primary mx-auto mb-8 relative z-10 shadow-[0_0_30px_rgba(152,227,152,0.15)] bg-background">
                {t.step}
              </div>
              <div className="text-center px-2">
                <h4 className="font-bold text-white mb-3 text-lg">{t.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CALL FOR PAPERS SECTION */}
    <section className="container py-32">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal-left">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Call for Papers</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We invite original, unpublished research papers for presentation at our recent conferences. Submissions undergo a rigorous double-blind peer review process.
          </p>
          <ul className="space-y-6 text-muted-foreground mb-10 text-lg">
            <li className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0"><ArrowRight className="h-4 w-4 text-accent" /></div>
              <span>Plagiarism must be below 15% (Turnitin).</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0"><ArrowRight className="h-4 w-4 text-accent" /></div>
              <span>Paper formatting strictly as per IEEE/Springer guidelines.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0"><ArrowRight className="h-4 w-4 text-accent" /></div>
              <span>Full manuscript submissions are prioritized over abstracts.</span>
            </li>
          </ul>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-10 rounded-full font-bold text-lg shadow-gold hover:-translate-y-1 transition-smooth">
            <Link to="/registration">Submit Your Manuscript</Link>
          </Button>
        </div>
        <div className="lg:col-span-7 reveal-right">
          <Card className="glass-strong border-white/10 p-10 md:p-14 rounded-[3rem] relative overflow-hidden shadow-elegant">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold text-white mb-10">Author Presentation Formats</h3>
            <div className="space-y-6">
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-bold text-primary mb-3">Oral Presentation</h4>
                <p className="text-muted-foreground text-base leading-relaxed">Present your findings live via a 15‑minute session followed by Q&A. Available in both physical and virtual modes.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-bold text-primary mb-3">Poster Presentation</h4>
                <p className="text-muted-foreground text-base leading-relaxed">Visually communicate your research in our interactive poster gallery. Dedicated networking time allocated for feedback.</p>
              </div>
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-bold text-primary mb-3">Listener / Delegate</h4>
                <p className="text-muted-foreground text-base leading-relaxed">Attend the conference without presenting a paper. Gain access to all keynotes, technical sessions, and networking events.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>

    {/* CONFERENCE MODES SECTION */}
    <section className="bg-primary/5 py-32 border-y border-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <div className="lg:col-span-1 reveal-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Modes of Participation</h2>
            <p className="text-muted-foreground text-xl leading-relaxed mb-8">
              Eminsphere ensures global accessibility by offering multiple avenues for researchers to present their work seamlessly.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            <Card className="glass border-white/10 p-10 text-center hover:border-primary/50 transition-all hover:-translate-y-2 rounded-3xl reveal" style={{ transitionDelay: "0ms" }}>
              <Globe2 className="h-12 w-12 mx-auto text-primary mb-6" />
              <h4 className="font-bold text-white text-xl mb-3">Physical</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">In‑person gathering at top‑tier global venues.</p>
            </Card>
            <Card className="glass border-white/10 p-10 text-center hover:border-primary/50 transition-all hover:-translate-y-2 rounded-3xl reveal" style={{ transitionDelay: "100ms" }}>
              <Clock className="h-12 w-12 mx-auto text-primary mb-6" />
              <h4 className="font-bold text-white text-xl mb-3">Hybrid</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">A seamless blend of physical and remote attendees.</p>
            </Card>
            <Card className="glass border-white/10 p-10 text-center hover:border-primary/50 transition-all hover:-translate-y-2 rounded-3xl reveal" style={{ transitionDelay: "200ms" }}>
              <Globe className="h-12 w-12 mx-auto text-primary mb-6" />
              <h4 className="font-bold text-white text-xl mb-3">Virtual</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">100% online execution via HD video conferencing.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ SECTION */}
    <section className="container py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about joining our conferences.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="glass border-white/10 p-10 rounded-[2rem] hover:border-white/20 transition-colors reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <h4 className="font-bold text-white text-xl mb-4 flex items-start gap-4">
                <span className="text-primary font-black text-2xl mt-0.5">Q.</span> {faq.q}
              </h4>
              <p className="text-muted-foreground text-lg leading-relaxed flex items-start gap-4">
                <span className="text-muted-foreground/30 font-black text-2xl mt-0.5">A.</span> {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA SECTION */}
    <section className="bg-gradient-to-r from-background to-muted py-32 text-center border-t border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="container max-w-3xl relative z-10 reveal">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Ready to explore our <span className="text-primary">past breakthroughs?</span></h2>
        <p className="text-xl text-white/70 mb-12">Dive into the archives and discover the research that shaped today's innovations.</p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold h-16 px-12 text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,153,204,0.3)] hover:shadow-[0_0_40px_rgba(0,153,204,0.4)]">
          <Link to="/recent-proceedings">View Publications Database</Link>
        </Button>
      </div>
    </section>

    {/* IMPACT STATS */}
    <section className="bg-primary/5 border-y border-white/5 py-16">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 reveal">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-black font-serif text-white mb-2 tracking-tight">{s.value}</div>
              <div className="text-xs md:text-sm text-primary uppercase tracking-widest font-bold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCEEDINGS CTA */}
    <section className="py-32 bg-card relative overflow-hidden border-t border-white/5 text-center">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      <div className="container max-w-3xl relative z-10 reveal">
        <div className="h-20 w-20 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center mb-8 rotate-3 shadow-[0_0_30px_rgba(152,227,152,0.2)]">
          <BookOpen className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Looking for Research Papers?</h2>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Access the published manuscripts, Scopus-indexed journals, and academic proceedings from our past conferences.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-16 px-12 rounded-full font-bold text-lg shadow-gold hover:-translate-y-1 transition-smooth">
          <Link to="/recent-proceedings">View Publications Database</Link>
        </Button>
      </div>
    </section>
  </main>
  );
};

export default RecentConferences;
