import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  BookOpen, 
  BrainCircuit, 
  Cloud, 
  Database, 
  Network, 
  Briefcase, 
  Cpu, 
  ShoppingCart, 
  Search, 
  ShieldCheck, 
  Award, 
  Globe, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Copyright, 
  Layers, 
  GraduationCap, 
  Send, 
  Check, 
  BookMarked,
  FileCheck2,
  Library,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { publishedBooks } from "@/data/booksData";

// CATEGORIES & DISCIPLINES
const disciplines = [
  { id: "all", title: "All Disciplines", icon: BookOpen },
  { id: "ai", title: "Artificial Intelligence & ML", icon: BrainCircuit },
  { id: "cloud", title: "Cloud & Distributed Systems", icon: Cloud },
  { id: "data", title: "Data Science & Analytics", icon: Database },
  { id: "software", title: "Software Engineering & IT", icon: Cpu },
  { id: "health", title: "Healthcare & Medicine", icon: Network },
  { id: "math", title: "Mathematics & Physical Sciences", icon: GraduationCap },
  { id: "business", title: "Business & Management", icon: Briefcase },
];

// STATS
const stats = [
  { value: "100+", label: "Published Titles", desc: "Peer-reviewed academic & industry books" },
  { value: "100%", label: "Official ISBN", desc: "Approved by RRRNA, Ministry of Education" },
  { value: "50%", label: "Author Royalties", desc: "Transparent, highest-in-class profit share" },
  { value: "3-4 Wks", label: "Fast-Track Publishing", desc: "Swift double-blind review & production" },
  { value: "Global", label: "Amazon Distribution", desc: "Available worldwide in print & Kindle" },
];

// WHY PUBLISH WITH EMINSPHERE (VALUE PROPOSITIONS)
const publishingFeatures = [
  {
    icon: ShieldCheck,
    title: "Official ISBN Allocation",
    desc: "Every title receives an official ISBN registered with the Raja Rammohun Roy National Agency for ISBN, Department of Higher Education, Ministry of Education, Government of India.",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    iconColor: "text-blue-500"
  },
  {
    icon: Globe,
    title: "Worldwide Amazon Distribution",
    desc: "Global availability on Amazon marketplaces (USA, India, UK, Europe, Japan, Canada) in high-quality Print-on-Demand paperback and Kindle eBook formats.",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    iconColor: "text-amber-500"
  },
  {
    icon: Copyright,
    title: "100% Author Copyright Retention",
    desc: "Authors retain full intellectual property and moral rights. You maintain complete ownership of your academic ideas and scholarly contributions.",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-500"
  },
  {
    icon: Award,
    title: "Double-Blind Peer Review",
    desc: "Manuscripts undergo rigorous evaluation by subject matter experts to maintain academic merit, research integrity, and institutional accreditation standards.",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    iconColor: "text-purple-500"
  },
  {
    icon: FileCheck2,
    title: "Complete Typesetting & Design",
    desc: "End-to-end editorial support including LaTeX/Word interior formatting, professional cover art design, proofreading, and DOI allocation.",
    color: "from-rose-500/20 to-rose-500/5",
    border: "border-rose-500/20",
    iconColor: "text-rose-500"
  },
  {
    icon: Library,
    title: "Academic & Citation Indexing",
    desc: "Cataloged in national library bibliographies, Google Books, and Google Scholar, maximizing academic visibility and research citations.",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-500"
  }
];

// TYPES OF BOOKS ACCEPTED
const bookTypes = [
  {
    title: "Academic Textbooks",
    target: "UG & PG Engineering, Science & Management Curricula",
    desc: "Comprehensive course textbooks mapped to university syllabi, equipped with chapter summaries, case studies, problem sets, and pedagogical frameworks.",
    icon: BookOpen
  },
  {
    title: "Research Monographs",
    target: "Specialized Thematic Research Treatises",
    desc: "In-depth scholarly research treatises presenting novel algorithms, experimental results, empirical methodologies, and specialized breakthroughs.",
    icon: BrainCircuit
  },
  {
    title: "Edited Volumes & Chapter Collections",
    target: "Thematic Multi-Author Publications",
    desc: "Curated collections on emerging trends edited by distinguished academicians with peer-reviewed contributed chapters from international researchers.",
    icon: Layers
  },
  {
    title: "PhD Theses to Book Conversion",
    target: "Doctoral Scholars & Researchers",
    desc: "Transform your completed doctoral dissertation into a published, globally distributed academic book with ISBN registration and scholarly indexing.",
    icon: GraduationCap
  },
  {
    title: "Industry & Technical Handbooks",
    target: "Tech Executives, Engineers & Architects",
    desc: "Practical reference handbooks, reference architectures, DevOps blueprints, and production-ready implementation guides for practitioners.",
    icon: Cpu
  },
  {
    title: "Conference Proceedings Volumes",
    target: "International Symposia & Summits",
    desc: "Official proceedings of peer-reviewed international conferences with registered ISBN, DOI identifiers, and indexing dissemination.",
    icon: FileText
  }
];

// REVIEW POLICIES & WORKFLOW
const reviewWorkflow = [
  {
    step: "01",
    title: "Proposal Submission & Plagiarism Check",
    desc: "Submit your book proposal or complete manuscript. Our editorial team conducts initial scope assessment and strict plagiarism screening (<10% similarity index via Turnitin / iThenticate).",
    timeframe: "2-3 Days"
  },
  {
    step: "02",
    title: "Double-Blind Peer Review",
    desc: "The manuscript is assigned to two independent subject matter reviewers who evaluate originality, technical depth, clarity, relevance, and academic soundness.",
    timeframe: "7-10 Days"
  },
  {
    step: "03",
    title: "Editorial Decision & Revisions",
    desc: "Authors receive comprehensive peer-review feedback. Any required revisions or improvements are incorporated with full support from our editorial desk.",
    timeframe: "5-7 Days"
  },
  {
    step: "04",
    title: "Interior Typesetting & Cover Artwork",
    desc: "Professional book formatting, typography layout, index generation, LaTeX mathematical formatting, and bespoke cover design crafted by creative designers.",
    timeframe: "4-6 Days"
  },
  {
    step: "05",
    title: "ISBN Allocation & Author Approval",
    desc: "Official ISBN assigned via RRRNA, Ministry of Education, Govt. of India. Digital galley proofs are sent to the author for final confirmation and sign-off.",
    timeframe: "2-3 Days"
  },
  {
    step: "06",
    title: "Worldwide Amazon & Global Launch",
    desc: "Publication on Amazon worldwide (Paperback & Kindle), distribution to academic libraries, and listing across international search catalogs.",
    timeframe: "Immediate"
  }
];

// AUTHOR GUIDELINES SUMMARY
const authorGuidelines = [
  {
    title: "Manuscript Structure",
    points: [
      "Title Page with Author Name(s), Affiliation, and Email",
      "Abstract & Keywords for each chapter (50-100 words)",
      "Table of Contents with logical chapter breakdown",
      "Uniform heading hierarchy (H1, H2, H3)",
      "Standard citation style (IEEE, APA, Harvard, or Springer format)"
    ]
  },
  {
    title: "Plagiarism & Academic Ethics",
    points: [
      "Strict similarity index policy: maximum permissible similarity < 10%",
      "Zero tolerance for uncredited text, data fabrication, or AI hallucination",
      "Proper permissions for previously published figures, tables, or schematics",
      "Authors must sign an official Publication Ethics & Copyright Agreement"
    ]
  },
  {
    title: "File Formats & Figures",
    points: [
      "Manuscripts accepted in Microsoft Word (.docx) or LaTeX (.tex/.zip)",
      "High-resolution figures (minimum 300 DPI in PNG, TIFF, or JPEG format)",
      "Editable vector charts or equations formatted in MathType / LaTeX",
      "Separate high-res author photo and 150-word biographical sketch"
    ]
  }
];

// FAQS
const faqs = [
  {
    q: "Is Eminsphere an officially recognized and licensed publisher?",
    a: "Yes. Eminsphere is an official commercial publisher registered with the Raja Rammohun Roy National Agency for ISBN (RRRNA), Department of Higher Education, Ministry of Education, Government of India. All our published titles receive verified, genuine ISBN numbers that are cataloged in national and international bibliographies."
  },
  {
    q: "Do authors retain the copyright to their work?",
    a: "Absolutely. We follow an author-centric philosophy where you retain 100% intellectual property and copyright of your scholarly work. We only require non-exclusive publishing and distribution rights."
  },
  {
    q: "Where will my published book be available for purchase?",
    a: "Your book will be distributed globally on Amazon marketplaces worldwide (Amazon.in, Amazon.com, Amazon.co.uk, Amazon.de, Amazon.ca, etc.) in high-quality paperback print and Kindle eBook editions, ensuring instant international purchasing access."
  },
  {
    q: "How long does the complete publication process take?",
    a: "Our streamlined peer-review and production pipeline typically delivers a fully published book with ISBN and Amazon availability within 3 to 4 weeks from receiving the complete manuscript."
  },
  {
    q: "Can I convert my completed PhD thesis into a book?",
    a: "Yes. We offer a dedicated Thesis-to-Book program. Our editorial board assists in restructuring your doctoral dissertation into a monograph or reference book, removing redundant thesis elements and enhancing readability for global academic audiences."
  },
  {
    q: "How are author royalties calculated and paid?",
    a: "Authors receive up to 50% author royalty on net profits from book sales on Amazon and authorized distribution channels, backed by transparent sales reporting."
  }
];

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Filter books based on search & discipline
  const filteredBooks = useMemo(() => {
    return publishedBooks.filter((book) => {
      const matchesSearch = 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.isbn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (book.subtitle && book.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (selectedDiscipline === "all") return true;
      if (selectedDiscipline === "ai") {
        return (
          book.title.toLowerCase().includes("ai") || 
          book.title.toLowerCase().includes("intelligence") || 
          book.title.toLowerCase().includes("learning") || 
          book.title.toLowerCase().includes("generative")
        );
      }
      if (selectedDiscipline === "cloud") {
        return (
          book.title.toLowerCase().includes("cloud") || 
          book.title.toLowerCase().includes("distributed") || 
          book.title.toLowerCase().includes("scale") || 
          book.title.toLowerCase().includes("iam")
        );
      }
      if (selectedDiscipline === "data") {
        return (
          book.title.toLowerCase().includes("data") || 
          book.title.toLowerCase().includes("analytics") || 
          book.title.toLowerCase().includes("event-driven")
        );
      }
      if (selectedDiscipline === "software") {
        return (
          book.title.toLowerCase().includes("software") || 
          book.title.toLowerCase().includes("computing") || 
          book.title.toLowerCase().includes("information technology") || 
          book.title.toLowerCase().includes("legacy")
        );
      }
      if (selectedDiscipline === "health") {
        return (
          book.title.toLowerCase().includes("health") || 
          book.title.toLowerCase().includes("compliance") || 
          book.title.toLowerCase().includes("public health")
        );
      }
      if (selectedDiscipline === "math") {
        return (
          book.title.toLowerCase().includes("geometry") || 
          book.title.toLowerCase().includes("transmission") || 
          book.title.toLowerCase().includes("radiowave")
        );
      }
      if (selectedDiscipline === "business") {
        return (
          book.title.toLowerCase().includes("energy") || 
          book.title.toLowerCase().includes("financial") || 
          book.title.toLowerCase().includes("analytics") || 
          book.title.toLowerCase().includes("sustainable")
        );
      }

      return true;
    });
  }, [searchQuery, selectedDiscipline]);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* GOVERNMENT RECOGNITION TOP STRIP */}
      <div className="bg-gradient-to-r from-primary/95 via-primary to-accent/95 text-primary-foreground py-2.5 px-4 text-xs sm:text-sm font-medium border-b border-white/10 shadow-sm">
        <div className="container max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center justify-center p-1 rounded-full bg-accent/20 text-accent">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span>
              <strong>Government Recognized Publisher:</strong> Registered with <strong>Raja Rammohun Roy National Agency for ISBN</strong>, Ministry of Education, Govt. of India.
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-6 text-xs text-primary-foreground/80">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> 100% Author Copyright</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Amazon Worldwide Distribution</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Double-Blind Peer Review</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-background via-muted/30 to-background border-b border-border/50">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
            <Sparkles className="h-4 w-4 text-accent" /> Official ISBN-Licensed Academic Publisher
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-6">
            Eminsphere™ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-accent">Global Academic</span> Book Publishing
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            Empowering researchers, professors, and industry leaders to publish peer-reviewed academic textbooks, research monographs, edited volumes, and PhD theses with <strong>official ISBN allotment</strong> and <strong>worldwide Amazon distribution</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="rounded-full shadow-xl px-8 py-6 text-base font-bold bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground">
              <a href="https://forms.gle/dnkfj4mUxXWHGmKXA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Submit Book Proposal <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full shadow-md px-8 py-6 text-base font-semibold border-primary/30 hover:bg-primary/10">
              <a href="#catalog" className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" /> Browse Published Catalog
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full px-6 py-6 text-base font-semibold text-muted-foreground hover:text-primary">
              <a href="#workflow" className="flex items-center gap-2">
                Review Policies & Workflow <ChevronDown className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* TRUST BADGES & LOGOS */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-6">
              Official Accreditations & Global Distribution Channels
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-85 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 bg-card px-5 py-2.5 rounded-xl border border-border/60 shadow-sm">
                <img src="https://static.wixstatic.com/media/30814e_5d49a33e7ad94a7fb551d35b324554be~mv2.png" alt="RRRNA ISBN Agency" className="h-9 object-contain" />
                <div className="text-left">
                  <div className="text-xs font-bold text-primary">RRRNA (Govt. of India)</div>
                  <div className="text-[10px] text-muted-foreground">National ISBN Agency</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card px-5 py-2.5 rounded-xl border border-border/60 shadow-sm">
                <img src="https://static.wixstatic.com/media/30814e_7d1e1a9e732a452e96bfd1d3b6e53799~mv2.png" alt="Amazon Global" className="h-8 object-contain" />
                <div className="text-left">
                  <div className="text-xs font-bold text-primary">Amazon Worldwide</div>
                  <div className="text-[10px] text-muted-foreground">Paperback & Kindle</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card px-5 py-2.5 rounded-xl border border-border/60 shadow-sm">
                <img src="https://static.wixstatic.com/media/30814e_1c5123d35814427e94f13afa05595c19~mv2.png" alt="Eminsphere Publishing" className="h-9 object-contain" />
                <div className="text-left">
                  <div className="text-xs font-bold text-primary">Eminsphere Academic</div>
                  <div className="text-[10px] text-muted-foreground">Peer-Reviewed Press</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS & STATS */}
      <section className="border-b bg-card/60">
        <div className="container max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {stats.map((s, idx) => (
            <div key={idx} className="p-8 text-center hover:bg-muted/40 transition-colors flex flex-col justify-center">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-1.5">{s.value}</div>
              <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{s.label}</div>
              <div className="text-[11px] text-muted-foreground">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PUBLISH WITH EMINSPHERE */}
      <section className="container py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Academic Excellence & Global Reach</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-5">Why Publish With Eminsphere?</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We provide world-class editorial rigor, rapid production pipelines, and international distribution that guarantees your scholarship achieves maximum global visibility and academic recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishingFeatures.map((f, idx) => {
            const Icon = f.icon;
            return (
              <Card key={idx} className={`p-8 bg-card border ${f.border} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 rounded-2xl relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.color} rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125`} />
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${f.color} border ${f.border} flex items-center justify-center mb-6`}>
                  <Icon className={`h-7 w-7 ${f.iconColor}`} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* TYPES OF BOOKS ACCEPTED */}
      <section className="bg-muted/40 py-20 lg:py-28 border-y border-border/50">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Diverse Publishing Formats</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-5">Publication Categories & Scope</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We welcome submissions across all major scholarly formats—from foundational textbooks for classroom teaching to groundbreaking research monographs and converted PhD dissertations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-7 bg-card border-0 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                        <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">{item.target}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-border/40">
                    <a 
                      href="https://forms.gle/dnkfj4mUxXWHGmKXA" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1.5 transition-colors"
                    >
                      Submit Proposal for this Category <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PEER REVIEW POLICY & EDITORIAL WORKFLOW */}
      <section id="workflow" className="container py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Rigor, Integrity & Speed</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-5">Editorial & Peer Review Policy</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our structured 6-step publishing lifecycle ensures every manuscript is double-blind peer-reviewed, strictly screened for originality, and professionally produced in record time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewWorkflow.map((step, idx) => (
            <div key={idx} className="relative bg-card p-8 rounded-2xl border border-border/70 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-3xl font-black text-primary/30 group-hover:text-primary transition-colors">{step.step}</span>
                <span className="text-xs font-bold px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {step.timeframe}
                </span>
              </div>
              <div className="mb-4">
                <h3 className="font-serif font-bold text-xl text-primary mb-2.5">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTHOR GUIDELINES & MANUSCRIPT STANDARDS */}
      <section className="bg-muted/30 py-20 lg:py-24 border-y border-border/50">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Author Submission Standards</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-5">Author Guidelines & Compliance</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              To expedite the review and production cycle, authors are requested to ensure their manuscript complies with the following academic publishing standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {authorGuidelines.map((g, idx) => (
              <Card key={idx} className="p-8 bg-card border-0 shadow-md rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-primary mb-6 flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-accent" /> {g.title}
                  </h3>
                  <ul className="space-y-3.5 text-sm text-muted-foreground">
                    {g.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h4 className="font-bold text-lg text-primary mb-2">Have questions about your book chapter or full manuscript?</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Our editorial assistance desk is available to help with formatting guidelines, LaTeX templates, and plagiarism screening assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="default" className="rounded-full shadow-md px-6 font-semibold">
                <a href="mailto:info@eminsphere.com" className="flex items-center gap-2">
                  <Send className="h-4 w-4" /> Email Editorial Desk (info@eminsphere.com)
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full font-semibold border-primary/30">
                <a href="https://forms.gle/dnkfj4mUxXWHGmKXA" target="_blank" rel="noopener noreferrer">
                  Submit Online Proposal Form
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BOOK CATALOG */}
      <section id="catalog" className="container py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Explore Our Publications</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-5">Published Academic Titles</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Discover cutting-edge academic volumes and professional treatises with registered ISBN numbers, authored by leading academicians, engineers, and scholars.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="mb-12 space-y-6 max-w-4xl mx-auto">
          {/* SEARCH BAR */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search by title, author name, ISBN, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-base rounded-2xl bg-card border-border/80 shadow-sm focus-visible:ring-primary"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground bg-muted px-2.5 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* DISCIPLINE PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {disciplines.map((d) => {
              const Icon = d.icon;
              const isSelected = selectedDiscipline === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDiscipline(d.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {d.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* BOOK CARDS GRID */}
        {filteredBooks.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <Card key={book.id} className="overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-0 bg-card group rounded-2xl shadow-md">
                <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 p-6 flex justify-center items-center border-b border-border/50 relative overflow-hidden h-[340px]">
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm z-10 flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" /> ISBN Approved
                  </div>
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="max-h-[290px] w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl rounded-sm" 
                    loading="lazy" 
                  />
                </div>

                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-primary leading-tight mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    {book.subtitle && (
                      <p className="text-muted-foreground text-xs font-medium mb-4 line-clamp-1 italic">
                        {book.subtitle}
                      </p>
                    )}

                    <div className="space-y-2 mt-4 mb-6 text-xs bg-muted/40 p-4 rounded-xl border border-border/40">
                      <div className="flex items-start gap-2">
                        <strong className="text-primary min-w-[70px]">Author(s):</strong>
                        <span className="text-muted-foreground font-medium line-clamp-1">{book.authors}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <strong className="text-primary min-w-[70px]">ISBN:</strong>
                        <span className="text-foreground font-mono font-semibold">{book.isbn}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <strong className="text-primary min-w-[70px]">Published:</strong>
                        <span className="text-muted-foreground">{book.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50 flex gap-3">
                    <Link 
                      to={`/books/${book.id}`}
                      className="inline-flex flex-1 justify-center items-center gap-2 bg-secondary text-secondary-foreground font-bold px-4 py-3 rounded-xl hover:bg-secondary/80 text-xs transition-colors shadow-sm"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-accent" />
                      Read Synopsis
                    </Link>
                    <a 
                      href={book.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex flex-1 justify-center items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-3 rounded-xl hover:bg-accent hover:text-accent-foreground text-xs transition-all shadow-md"
                    >
                      <ShoppingCart className="h-3.5 w-3.5" />
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-2xl border border-border/60 max-w-xl mx-auto p-8">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-bold text-xl text-primary mb-2">No matching titles found</h3>
            <p className="text-sm text-muted-foreground mb-6">Try searching with a different keyword or select "All Disciplines".</p>
            <Button onClick={() => { setSearchQuery(""); setSelectedDiscipline("all"); }} variant="outline" className="rounded-full">
              Reset Search & Filters
            </Button>
          </div>
        )}
      </section>

      {/* FAQS SECTION */}
      <section className="bg-muted/40 py-20 lg:py-28 border-t border-border/50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Author Queries & Answers</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-5">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Find clear answers regarding ISBN certification, copyright, distribution, and royalties.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <Card 
                  key={idx} 
                  className={`border border-border/60 transition-all rounded-2xl overflow-hidden ${
                    isOpen ? "bg-card shadow-md" : "bg-card/70 hover:bg-card"
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-primary"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-4">
                      {faq.a}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGH-IMPACT FINAL CTA */}
      <section className="container py-20 lg:py-28">
        <div className="max-w-5xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <BookMarked className="h-4 w-4 text-accent" /> Fast-Track Call for Book Proposals
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Ready to Publish Your Academic Book?
          </h2>

          <p className="text-base sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-10">
            Submit your book proposal or full manuscript today. Partner with an official ISBN-licensed academic publishing house and share your research with the world.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Button asChild size="lg" className="rounded-full shadow-2xl px-10 py-7 text-base font-bold bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all">
              <a href="https://forms.gle/dnkfj4mUxXWHGmKXA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Submit Book Proposal Online <ArrowRight className="h-5 w-5 text-accent" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full shadow-md px-8 py-7 text-base font-semibold border-white/40 text-white hover:bg-white/10">
              <a href="mailto:info@eminsphere.com" className="flex items-center gap-2">
                <Send className="h-5 w-5 text-accent" /> Contact Editorial Team
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
