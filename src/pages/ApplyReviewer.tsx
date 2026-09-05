import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, BookOpen, Globe, ShieldCheck, ArrowRight, Clock, FileText, Target, Search } from "lucide-react";

const benefits = [
  {
    title: "Prestigious Academic Recognition",
    description: "Gain formal recognition as an official reviewer, enhancing your academic profile and professional standing at an international level. Certificates of appreciation are awarded to all active reviewers.",
    icon: Award
  },
  {
    title: "Early Access to Cutting-Edge Research",
    description: "Review high-quality manuscripts prior to publication and stay ahead of emerging trends across multiple technical domains before they are officially published.",
    icon: BookOpen
  },
  {
    title: "Global Scholarly Networking",
    description: "Collaborate with editors, keynote speakers, and researchers from leading universities, research centers, and industries worldwide. Build your professional academic network.",
    icon: Globe
  },
  {
    title: "Contribution to Research Excellence",
    description: "Uphold ethical research practices, improve manuscript quality, and guide authors toward impactful contributions. Play a vital role in maintaining the integrity of scientific literature.",
    icon: ShieldCheck
  }
];

const responsibilities = [
  {
    title: "Timely Evaluation",
    description: "Reviewers are expected to complete their evaluation of assigned manuscripts within the designated timeframe (typically 2-3 weeks).",
    icon: <Clock className="h-6 w-6 text-accent" />
  },
  {
    title: "Constructive Feedback",
    description: "Provide detailed, objective, and constructive feedback to authors, helping them improve the quality and clarity of their research.",
    icon: <FileText className="h-6 w-6 text-accent" />
  },
  {
    title: "Confidentiality",
    description: "Maintain absolute confidentiality regarding the manuscript content, authors, and the peer-review process at all times.",
    icon: <ShieldCheck className="h-6 w-6 text-accent" />
  },
  {
    title: "Plagiarism & Ethics Check",
    description: "Identify and report any instances of plagiarism, redundant publication, or ethical violations in the submitted research.",
    icon: <Search className="h-6 w-6 text-accent" />
  }
];

const expertise = [
  "Artificial Intelligence, Machine Learning & Data Science",
  "Electronics, Communication & Embedded Systems",
  "Computer Science, Cyber Security & Cloud Computing",
  "Electrical Engineering, Renewable Energy & Smart Grids",
  "Mechanical Engineering, Materials & Manufacturing",
  "Civil Engineering, Smart Infrastructure & Sustainability",
  "Biomedical Engineering & Health Informatics",
  "Interdisciplinary & Emerging Technologies"
];

const ApplyReviewer = () => (
  <>
    <PageHero
      eyebrow="Editorial Network"
      title="Call for Reviewers"
      description="EminSphere invites accomplished academicians, researchers, scientists, and industry professionals to serve as Reviewers for our upcoming international conferences."
      variant="waves"
    />
    
    {/* ROLE & ELIGIBILITY WITH IMAGE */}
    <section className="container py-12 sm:py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="space-y-8 sm:space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3 sm:mb-5">Role & Importance of a Reviewer</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              Reviewers are the cornerstone of high-quality academic publishing. Their expertise ensures that submitted research meets international standards of originality, technical depth, ethical integrity, and relevance.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
              As a reviewer, you will contribute directly to shaping impactful research while strengthening the credibility and reputation of global scholarly platforms. You provide the vital peer-review safety net that academia relies on.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3 sm:mb-5">Eligibility Criteria</h2>
            <ul className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base md:text-lg">
              <li className="flex gap-3"><Target className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0 mt-0.5" /> Must hold a Ph.D. or be a senior academician/researcher with equivalent experience.</li>
              <li className="flex gap-3"><Target className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0 mt-0.5" /> Must have a strong publication record in recognized peer-reviewed journals.</li>
              <li className="flex gap-3"><Target className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0 mt-0.5" /> Previous experience as a journal or conference reviewer is highly preferred.</li>
              <li className="flex gap-3"><Target className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0 mt-0.5" /> Postdoctoral researchers and experienced industry professionals may also apply.</li>
            </ul>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-elegant h-[280px] sm:h-[450px] md:h-[650px] border-4 border-muted">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop" 
            alt="Reviewers collaborating" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
      </div>
    </section>

    {/* RESPONSIBILITIES */}
    <section className="bg-primary/5 py-12 sm:py-20 md:py-28 border-y">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-3 sm:mb-4">Reviewer Responsibilities</h2>
          <p className="text-sm sm:text-lg text-muted-foreground">What we expect from our esteemed panel members.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {responsibilities.map((r, i) => (
            <Card key={i} className="p-5 sm:p-8 hover:-translate-y-1 hover:shadow-elegant transition-smooth border-0 bg-card rounded-2xl sm:rounded-3xl">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                {r.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{r.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* WHY JOIN */}
    <section className="bg-background py-12 sm:py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2 sm:mb-3">Benefits</div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-3 sm:mb-4">Why Join the EminSphere Reviewer Panel?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <Card key={b.title} className="p-5 sm:p-8 hover:-translate-y-1 hover:shadow-elegant transition-smooth group bg-card border-border/50 rounded-2xl sm:rounded-3xl">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform group-hover:bg-accent/20">
                <b.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2 sm:mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">{b.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* EXPERTISE */}
    <section className="bg-muted py-12 sm:py-20 md:py-28 border-t">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-8 sm:mb-12">Areas of Expertise Needed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 sm:gap-y-4 text-left bg-card p-5 sm:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-border/50">
            {expertise.map((item) => (
              <div key={item} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground font-medium text-xs sm:text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA - FIXED COLORS */}
    <section className="bg-gradient-to-r from-background to-muted py-16 sm:py-24 md:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      
      <div className="container max-w-4xl relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 text-white drop-shadow-md">Apply to Join Our <span className="text-primary">Reviewer Panel</span></h2>
        <p className="text-white/70 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base md:text-xl max-w-3xl mx-auto">
          If you are passionate about advancing research quality and contributing to internationally recognized academic initiatives, we invite you to formally apply.
        </p>
        <Button asChild size="lg" className="w-full sm:w-auto h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-all">
          <a href="https://forms.gle/vgARCeUie6zzxWrS8" target="_blank" rel="noopener noreferrer">
            Submit Reviewer Application <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </Button>
      </div>
    </section>
  </>
);

export default ApplyReviewer;
