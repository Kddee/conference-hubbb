import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  FileText, 
  Target, 
  Search, 
  Briefcase, 
  Users, 
  Sparkles, 
  Building2, 
  Scale, 
  Lock, 
  Mail, 
  ExternalLink, 
  AlertTriangle, 
  Info, 
  Check, 
  FileCheck2, 
  ChevronRight,
  ShieldAlert
} from "lucide-react";

const benefits = [
  {
    title: "Reviewer Panel Recognition",
    description: "Selected reviewers may be recognized as members of the EminSphere Reviewer Panel, validating your expertise and professional standing across international academic and industrial communities.",
    icon: Award,
    badge: "Professional Standing"
  },
  {
    title: "Certificates of Appreciation",
    description: "Certificates of Appreciation may be provided to reviewers who actively contribute to assigned review activities, acknowledging your technical contribution and dedication.",
    icon: FileCheck2,
    badge: "Formal Acknowledgment"
  },
  {
    title: "Early Access to Emerging Research",
    description: "Review high-quality manuscripts prior to presentation and stay ahead of emerging trends across multiple technical domains. All manuscripts received for review must be treated with strict confidentiality.",
    icon: BookOpen,
    badge: "Cutting-Edge Insights"
  },
  {
    title: "Global Scholarly & Industry Network",
    description: "Connect and collaborate with editors, keynote speakers, researchers, and technical leaders from leading universities, research centers, and technology enterprises worldwide.",
    icon: Globe,
    badge: "Global Network"
  }
];

const whoCanApply = [
  "Senior and experienced industry professionals",
  "Technology and engineering professionals",
  "R&D and innovation professionals",
  "Technical consultants and domain specialists",
  "Scientists and researchers",
  "Academicians and faculty members",
  "Postdoctoral researchers",
  "Professionals with significant research or technical experience",
  "Professionals with relevant publications, patents, projects, certifications, or industry contributions"
];

const relevantExperienceItems = [
  "Professional experience in the relevant domain",
  "Technical leadership or management",
  "Research and development experience",
  "Publications and conference contributions",
  "Patents and innovations",
  "Major industry projects",
  "Technical certifications",
  "Product development",
  "Consulting or advisory experience",
  "Academic/research supervision"
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

const selectionSteps = [
  {
    step: "01",
    title: "Submit Application",
    description: "Complete the online reviewer application with your professional, technical, and domain details."
  },
  {
    step: "02",
    title: "Profile Assessment",
    description: "The EminSphere team reviews your professional background, expertise, experience, and area of specialization."
  },
  {
    step: "03",
    title: "Reviewer Selection",
    description: "Eligible candidates may be shortlisted based on the requirements of upcoming conferences and submitted research areas."
  },
  {
    step: "04",
    title: "Reviewer Onboarding",
    description: "Selected reviewers receive further information regarding the review process, timelines, and assigned areas."
  }
];

const responsibilities = [
  {
    title: "Expertise-Based Review",
    description: "Accept review assignments only when the subject matter falls within your area of professional, technical, or research expertise.",
    icon: Target
  },
  {
    title: "Objective Assessment",
    description: "Evaluate submissions based on their technical quality, originality, methodology, relevance, clarity, and overall contribution rather than the author's institution, nationality, seniority, or personal background.",
    icon: Scale
  },
  {
    title: "Constructive Feedback",
    description: "Provide detailed, objective, and constructive feedback to authors, helping them improve the quality, technical rigor, and clarity of their research.",
    icon: FileText
  },
  {
    title: "Balanced Workload & Availability",
    description: "Evaluations are typically requested within 2–3 weeks. Review assignments are made according to reviewer expertise and availability. Reviewers may accept or decline an assignment if the subject falls outside their expertise or if unable to complete within the specified timeframe.",
    icon: Clock
  },
  {
    title: "Plagiarism & Ethics Reporting",
    description: "Reviewers should identify and report any apparent concerns relating to plagiarism, duplicate publication, research integrity, conflicts of interest, or other ethical issues observed during review. Final investigation and editorial action remain the responsibility of the designated editorial/conference committee.",
    icon: Search
  },
  {
    title: "Editorial Authority Distinction",
    description: "Reviewers provide expert assessments and recommendations. Final editorial decisions regarding acceptance, revision, or rejection remain with the designated conference/editorial committee.",
    icon: ShieldCheck
  }
];

const informationRequiredList = [
  { label: "Full Name", note: "Primary contact name" },
  { label: "Professional Designation", note: "Current title / role" },
  { label: "Organization / Institution", note: "Company, university, or research lab" },
  { label: "Country", note: "Location of practice" },
  { label: "Professional Email", note: "Institutional or official work email" },
  { label: "LinkedIn / Professional Profile", note: "Public profile link" },
  { label: "Google Scholar / ORCID / ResearchGate", note: "Where applicable (optional for industry specialists)" },
  { label: "Years of Professional Experience", note: "Cumulative domain experience" },
  { label: "Areas of Expertise", note: "Primary technical competencies" },
  { label: "Research / Technical Interests", note: "Sub-specializations & interests" },
  { label: "Publications / Patents / Projects", note: "If applicable (any relevant evidence)" },
  { label: "Previous Reviewer Experience", note: "If applicable (not mandatory)" }
];

const ApplyReviewer = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="Editorial & Peer Review Panel"
        title="Join the EminSphere™ Reviewer Panel"
        description="Share your expertise. Support quality research. Contribute to global scholarly collaboration."
        variant="waves"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground/90 leading-relaxed">
            EminSphere invites experienced industry professionals, technical experts, researchers, academicians, scientists, R&D professionals, consultants, and domain specialists to serve as Reviewers for our upcoming international conferences and research initiatives.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="rounded-full px-6 sm:px-8 h-12 text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition-all">
              <a href="#apply-section">
                Apply to Join Panel <ChevronRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6 sm:px-8 h-12 text-sm sm:text-base border-border/80 hover:bg-muted/80">
              <a href="#selection-process">
                Selection Process
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-4 text-xs sm:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
              <Check className="h-3.5 w-3.5" /> No Application Fee
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
              <Building2 className="h-3.5 w-3.5" /> Industry & Academia Welcome
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium border border-border">
              <ShieldCheck className="h-3.5 w-3.5" /> Rigorous Peer Review
            </span>
          </div>
        </div>
      </PageHero>

      {/* 2. ROLE & IMPORTANCE OF A REVIEWER */}
      <section className="container py-12 sm:py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" /> Scholarly Stewardship
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary tracking-tight">
              Role & Importance of a Reviewer
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Reviewers play an important role in maintaining the quality, relevance, originality, and technical integrity of research presented through academic conferences and scholarly initiatives.
              </p>
              <p>
                As a reviewer, you will contribute directly to shaping impactful research while strengthening the credibility and reputation of global scholarly platforms. You provide vital expert assessment that helps bridge pioneering academic research with practical industrial applications.
              </p>
              <p>
                By providing constructive and rigorous feedback, you foster innovation, protect scientific integrity, and mentor authors from diverse geographical and institutional backgrounds.
              </p>
            </div>
          </div>
          
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant border border-border/50 group">
            <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" 
                alt="EminSphere Reviewer Panel collaborating on peer-reviewed research" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6 sm:p-8">
              <div className="bg-card/90 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-border/60 shadow-lg max-w-md">
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  "Peer review is the foundational cornerstone of verifiable knowledge, bridging theory with practical implementation."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY BECOME A REVIEWER / RECOGNITION & BENEFITS */}
      <section className="bg-primary/5 py-12 sm:py-20 md:py-24 border-y border-border/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Recognition & Benefits</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
              Why Join the EminSphere Reviewer Panel?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Experience global academic engagement and receive formal recognition for your technical contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <Card key={b.title} className="p-6 sm:p-8 hover:-translate-y-1 hover:shadow-elegant transition-smooth bg-card border-border/60 rounded-2xl sm:rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <b.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/60">
                      {b.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{b.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">{b.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECIAL INVITATION TO INDUSTRY PROFESSIONALS (HIGHLIGHT BOX) */}
      <section className="container py-12 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border-2 border-primary/20 p-6 sm:p-10 md:p-12 shadow-elegant">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Briefcase className="h-3.5 w-3.5" /> High-Priority Track
              </span>
              <span className="text-xs sm:text-sm font-semibold text-accent tracking-wide uppercase">
                Industry Expertise Matters
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary tracking-tight">
              Special Invitation to Industry Professionals
            </h2>

            <div className="space-y-4 text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="font-medium text-foreground">
                Industry expertise matters. EminSphere particularly welcomes experienced professionals from technology companies, R&D organizations, engineering firms, startups, consulting, product development, cybersecurity, manufacturing, healthcare, infrastructure, energy, and other technology-driven sectors.
              </p>
              <p className="text-muted-foreground">
                Your practical experience, technical knowledge, project expertise, and industry perspective can provide valuable insight into the relevance, scalability, and real-world applicability of emerging research.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-border/60">
                <div className="font-semibold text-sm text-foreground mb-1">Practical Applicability</div>
                <p className="text-xs text-muted-foreground">Validating theoretical research against current industry engineering constraints.</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-border/60">
                <div className="font-semibold text-sm text-foreground mb-1">Technical Leadership</div>
                <p className="text-xs text-muted-foreground">Bringing architecture, security, and deployment insights to peer evaluations.</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-border/60">
                <div className="font-semibold text-sm text-foreground mb-1">Market Relevance</div>
                <p className="text-xs text-muted-foreground">Identifying solutions that solve genuine operational and technological bottlenecks.</p>
              </div>
              <div className="bg-card/80 backdrop-blur-sm p-4 rounded-xl border border-border/60">
                <div className="font-semibold text-sm text-foreground mb-1">Collaborative Impact</div>
                <p className="text-xs text-muted-foreground">Bridging industry best practices with academic investigations and publications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO CAN APPLY & PROFESSIONAL ELIGIBILITY */}
      <section className="bg-muted/40 py-12 sm:py-20 md:py-24 border-y border-border/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Eligibility Overview</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
              Who Can Apply & Professional Eligibility
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              We evaluate candidates holistically based on demonstrated professional acumen and domain expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Card: Who Can Apply? */}
            <Card className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl sm:rounded-3xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary">Who Can Apply?</h3>
              </div>
              <ul className="space-y-3 sm:space-y-3.5">
                {whoCanApply.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm md:text-base text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Right Card: Professional Eligibility & Evidence */}
            <Card className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl sm:rounded-3xl shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary">Professional Eligibility</h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm md:text-base text-muted-foreground mb-6">
                  <p className="leading-relaxed">
                    We welcome applications from experienced industry professionals, technical experts, researchers, academicians, scientists, R&D professionals, consultants, and domain specialists with relevant expertise in their respective fields.
                  </p>
                  <div className="p-3.5 rounded-xl bg-muted/60 border border-border/60 text-xs sm:text-sm">
                    <span className="font-semibold text-foreground">Note on Ph.D. requirement: </span>
                    A Ph.D. or equivalent advanced research experience is advantageous but not mandatory where the applicant demonstrates substantial professional or technical expertise relevant to the review area.
                  </div>
                  <p className="leading-relaxed">
                    Applicants may demonstrate expertise through professional experience, technical leadership, research publications, patents, projects, industry contributions, professional certifications, or other relevant achievements.
                  </p>
                </div>

                <div className="pt-2">
                  <div className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-accent" /> Relevant Experience May Include:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                    {relevantExperienceItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. AREAS OF EXPERTISE */}
      <section className="container py-12 sm:py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Technical Domains</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
              Areas of Expertise Needed
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Reviewers are matched with submissions corresponding to their declared specializations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertise.map((item) => (
              <div 
                key={item} 
                className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-foreground font-medium text-xs sm:text-sm md:text-base leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REVIEWER RESPONSIBILITIES */}
      <section className="bg-primary/5 py-12 sm:py-20 md:py-24 border-y border-border/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Expectations & Standards</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3 sm:mb-4">
              Reviewer Responsibilities
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Clear principles upholding peer-review integrity and operational transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {responsibilities.map((r, i) => (
              <Card key={i} className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl sm:rounded-3xl hover:-translate-y-1 hover:shadow-elegant transition-smooth flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{r.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{r.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REVIEWER SELECTION PROCESS */}
      <section id="selection-process" className="container py-12 sm:py-20 md:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Onboarding Pathway</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
              Reviewer Selection Process
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              A transparent, four-step evaluation and onboarding procedure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionSteps.map((step) => (
              <Card key={step.step} className="p-6 rounded-2xl sm:rounded-3xl bg-card border-border/60 relative overflow-hidden group hover:shadow-elegant transition-all">
                <div className="text-4xl font-serif font-bold text-primary/15 group-hover:text-primary/30 transition-colors mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ETHICS, CONFIDENTIALITY & CONFLICT OF INTEREST */}
      <section className="bg-muted/40 py-12 sm:py-20 md:py-24 border-y border-border/50">
        <div className="container max-w-5xl">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Governance & Integrity</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
              Reviewer Ethics & Confidentiality
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Preserving research confidentiality and absolute impartiality is fundamental to our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Confidentiality */}
            <Card className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl sm:rounded-3xl space-y-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary">Confidentiality Policy</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                All manuscripts and research materials received for review must be treated as confidential and must not be shared, copied, distributed, or used for personal or professional purposes.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                Reviewers must respect the intellectual property of authors and maintain strict confidentiality throughout and following the peer-review process.
              </p>
            </Card>

            {/* Card 2: Conflict of Interest */}
            <Card className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl sm:rounded-3xl space-y-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-2">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary">Conflict of Interest</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Reviewers must disclose any personal, professional, institutional, financial, or other conflict of interest that may affect their impartiality.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">
                Reviewers should decline assignments where an objective and independent evaluation cannot be provided, including manuscripts authored by direct colleagues, collaborators, or institutional peers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 10. IMPORTANT INFORMATION / DISCLAIMER */}
      <section className="container py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4 sm:gap-5">
            <Info className="h-6 w-6 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="text-lg font-serif font-bold text-foreground">Important Note & Editorial Policy</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Reviewer selection does not guarantee manuscript assignments, publication opportunities, conference participation, authorship, or acceptance of any submitted research. Review assignments are made according to conference requirements, subject expertise, and editorial needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. INFORMATION REQUIRED BEFORE APPLYING */}
      <section className="bg-primary/5 py-12 sm:py-20 md:py-24 border-y border-border/50">
        <div className="container max-w-5xl">
          <div className="text-center mb-10 sm:mb-14">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Application Readiness</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
              Information Required
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Please have the following information ready prior to completing the online application form:
            </p>
          </div>

          <Card className="p-6 sm:p-10 bg-card border-border/60 rounded-2xl sm:rounded-3xl shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {informationRequiredList.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-muted/40 border border-border/50 space-y-1">
                  <div className="text-xs sm:text-sm font-semibold text-foreground flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {item.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground pl-3">
                    {item.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border/60 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Note for Industry Applicants: </span>
              Fields such as Google Scholar or ORCID are strictly optional for industry and engineering professionals. We evaluate candidates primarily on industry domain expertise, architecture, project contributions, and practical experience.
            </div>
          </Card>
        </div>
      </section>

      {/* 12. APPLY TO JOIN & SECURITY / ANTI-SCAM NOTICE */}
      <section id="apply-section" className="container py-16 sm:py-24 md:py-28 scroll-mt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Action Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground p-8 sm:p-12 md:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
                <Sparkles className="h-3.5 w-3.5" /> Official Application
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                Apply to Join the EminSphere Reviewer Panel
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
                Submit your professional profile through our official application form to be considered for upcoming conference tracks.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full bg-white text-primary hover:bg-white/95 shadow-lg hover:scale-105 transition-all"
                >
                  <a href="https://forms.gle/vgARCeUie6zzxWrS8" target="_blank" rel="noopener noreferrer">
                    Submit Reviewer Application <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-white/80 text-left sm:text-center">
                <div>
                  <span className="text-white/60 block text-[11px] uppercase tracking-wider">Official Page</span>
                  <a href="https://www.eminsphere.com/apply-reviewer" className="font-mono text-white hover:underline flex items-center justify-center gap-1 mt-0.5">
                    www.eminsphere.com/apply-reviewer <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div>
                  <span className="text-white/60 block text-[11px] uppercase tracking-wider">Official Contact</span>
                  <a href="mailto:info@eminsphere.com" className="font-mono text-white hover:underline flex items-center justify-center gap-1 mt-0.5">
                    <Mail className="h-3.5 w-3.5" /> info@eminsphere.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust, Zero Fee & Anti-Scam Notice */}
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border/80 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">Reviewer Application – No Payment Required</h3>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">100% Free Application</span>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-13">
              <p>
                <strong>No Application Fee: </strong>
                There is no fee to submit an application to join the EminSphere Reviewer Panel.
              </p>
              <p>
                EminSphere does not charge applicants any fee for submitting a reviewer application. Applicants should use only the official EminSphere website and official communication channels (<a href="mailto:info@eminsphere.com" className="text-primary hover:underline">info@eminsphere.com</a>) for reviewer-related communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplyReviewer;
