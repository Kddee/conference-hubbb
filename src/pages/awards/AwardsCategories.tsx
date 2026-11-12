import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AwardCategory, AWARD_CATEGORIES } from "@/data/awardsData";
import { AwardsStorageService } from "@/services/awardsStorage";
import { CategoryModal } from "@/components/awards/CategoryModal";
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  GraduationCap,
  Microscope,
  BookOpen,
  Lightbulb,
  Cpu,
  BrainCircuit,
  Network,
  Cog,
  Briefcase,
  TrendingUp,
  Rocket,
  Award,
  Factory,
  Handshake,
  Globe,
  HeartHandshake,
  Trophy,
  Medal
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Microscope,
  BookOpen,
  Lightbulb,
  Cpu,
  BrainCircuit,
  Network,
  Cog,
  Briefcase,
  TrendingUp,
  Rocket,
  Award,
  Factory,
  Handshake,
  Globe,
  HeartHandshake,
  Trophy,
  Medal
};

export const AwardsCategories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<AwardCategory | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = AwardsStorageService.getAwardCategories();

  const filtered = categories.filter(c => {
    const matchesSearch = 
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.eligibleCandidates.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesGroup = selectedGroup === "all" || c.groupKey === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  const handleOpenCategory = (cat: AwardCategory) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Global Excellence & Innovation Award Categories | EminSphere"
        description="Explore 18 professional recognition categories and submit nominations for outstanding achievements across academic, technology, business, and societal sectors."
        canonical="https://www.eminsphere.com/awards-recognition/categories"
      />

      <PageHero
        eyebrow="Recognition Directory"
        title="18 Recognition Categories"
        description="Comprehensive recognition disciplines spanning Academic Leadership, Cutting-Edge AI, Technology Innovation, Enterprise Growth, and Social Impact."
        variant="aurora"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Nominate Candidate Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/awards-recognition/eligibility">
              View Eligibility Matrix
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-12 max-w-7xl px-4 sm:px-6 space-y-8">
        {/* Search & Filter Toolbar */}
        <div className="p-4 rounded-2xl bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search categories, criteria, or keywords..."
              className="pl-10 text-xs bg-muted/40 h-10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { key: "all", label: "All Groups" },
              { key: "academic", label: "Academic" },
              { key: "technology", label: "Technology" },
              { key: "business", label: "Business" },
              { key: "professional", label: "Industry" },
              { key: "social", label: "Social" }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setSelectedGroup(tab.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedGroup === tab.key
                    ? "bg-primary text-white shadow-sm"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(cat => {
            const IconComp = iconMap[cat.iconName] || Award;
            return (
              <Card 
                key={cat.id} 
                className="p-6 bg-card border-border/60 rounded-2xl hover:border-primary/50 transition-smooth flex flex-col justify-between group shadow-sm hover:shadow-elegant"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                      #{cat.number}
                    </span>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-accent mb-1">
                      {cat.group}
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border/40">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Eligible Candidates
                    </div>
                    <ul className="text-[11px] text-muted-foreground space-y-1">
                      {cat.eligibleCandidates.slice(0, 2).map((cand, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 truncate">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="truncate">{cand}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleOpenCategory(cat)}
                    className="text-xs text-muted-foreground hover:text-foreground font-semibold px-2.5"
                  >
                    View Details
                  </Button>
                  <Button 
                    size="sm" 
                    asChild 
                    className="text-xs font-bold bg-primary/15 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Link to={`/awards-recognition/apply?category=${cat.id}`}>
                      Nominate Now <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <CategoryModal 
        category={selectedCategory} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
};

export default AwardsCategories;
