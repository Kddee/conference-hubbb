import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, Globe, Users, ShieldCheck, ArrowRight, Lightbulb, Target, Briefcase, Award, CheckCircle2 } from "lucide-react";

const responsibilities = [
  { icon: Compass, title: "Strategic Guidance", desc: "Help shape the long-term scientific, technical, and editorial direction of our global conferences." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Maintain and uphold the integrity, rigor, and international standards of every EminSphere event." },
  { icon: Lightbulb, title: "Theme Development", desc: "Propose innovative conference themes, technical tracks, and special sessions aligned with emerging trends." },
  { icon: Target, title: "Keynote Nomination", desc: "Identify and nominate distinguished speakers, industry leaders, and researchers for plenary sessions." },
];

const benefits = [
  { icon: Globe, title: "Global Influence", desc: "Represent your academic discipline at the highest level and shape international research discourse." },
  { icon: Users, title: "Elite Network Access", desc: "Collaborate directly with leading scholars, university deans, and R&D heads across continents." },
  { icon: Award, title: "Prestigious Recognition", desc: "Gain formal recognition on our global platforms, enhancing your institutional profile and leadership standing." },
  { icon: Briefcase, title: "Complimentary Privileges", desc: "Enjoy VIP access, complimentary registrations, and special speaking opportunities at our flagship events." },
];

const eligibility = [
  "Must hold a Ph.D. or equivalent highest-level degree in their respective domain.",
  "Minimum of 10+ years of active research, academic, or high-level industrial experience.",
  "Significant publication record in high-impact (Scopus/WoS/SCI indexed) journals.",
  "Demonstrated leadership capabilities (e.g., Head of Department, Principal Investigator, Lab Director).",
  "Previous experience organizing, chairing, or advising international conferences is highly preferred."
];

const ApplyAdvisory = () => (
  <main className="min-h-screen bg-background">
    <PageHero
      eyebrow="Leadership & Strategy"
      title="Apply for the Advisory Board"
      description="We are honored to have distinguished professionals and academicians guiding our global academic initiatives. We invite you to join the highest tier of our leadership."
      variant="mesh"
    />

    {/* OVERVIEW SECTION */}
    <section className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">The Role of the Advisory Board</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The International Advisory Board is the core strategic pillar of EminSphere. Board members play a pivotal role in ensuring that our conferences remain at the forefront of global scientific and technological advancement.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As an Advisory Board Member, you will not be burdened with daily operational tasks; rather, your role is to provide high-level vision, endorse academic standards, and help expand our institutional network globally.
            </p>
          </div>
          
          <div className="bg-muted/50 p-8 rounded-2xl border border-border/50">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-accent" /> Eligibility Requirements
            </h3>
            <ul className="space-y-4">
              {eligibility.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden shadow-elegant h-[600px] border-4 border-muted/30">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop" 
            alt="Advisory Board Meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-10 pt-32">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Shape The Future</h3>
            <p className="text-primary-foreground/80">Join thought leaders from over 40 countries in driving global innovation.</p>
          </div>
        </div>
      </div>
    </section>

    {/* RESPONSIBILITIES GRID */}
    <section className="bg-primary/5 py-20 md:py-28 border-y">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-4">
            Core Duties
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Board Responsibilities</h2>
          <p className="text-lg text-muted-foreground">Advisory members provide executive oversight and strategic direction.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {responsibilities.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary bg-card">
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

    {/* BENEFITS GRID */}
    <section className="bg-background py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-4">
            Membership Perks
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Why Join the Advisory Board?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border-t-4 border-t-accent bg-card">
              <div className="h-16 w-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* PREMIUM CTA SECTION */}
    <section className="bg-gradient-to-r from-background to-muted py-24 md:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      
      <div className="container max-w-4xl relative z-10">
        <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/30 backdrop-blur-sm">
          <ShieldCheck className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-md">Step Into <span className="text-primary">Leadership</span></h2>
        <p className="text-white/70 mb-10 leading-relaxed text-xl max-w-3xl mx-auto">
          Share your expertise, collaborate globally, and help shape the future of academic excellence. Applications are reviewed by our executive committee on a rolling basis.
        </p>
        <Button asChild size="lg" className="h-16 px-10 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-all">
          <a href="https://forms.gle/GM3b7bqEQdHiKcCy8" target="_blank" rel="noopener noreferrer">
            Apply via Official Form <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  </main>
);

export default ApplyAdvisory;
