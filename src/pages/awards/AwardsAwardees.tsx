import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Awardee } from "@/data/awardsData";
import { AwardsStorageService } from "@/services/awardsStorage";
import { 
  Search, 
  Award, 
  Globe, 
  Building2, 
  ShieldCheck, 
  ExternalLink, 
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react";

export const AwardsAwardees: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [selectedAwardee, setSelectedAwardee] = useState<Awardee | null>(null);

  const awardees = AwardsStorageService.getAwardees().filter(a => a.published && a.consentObtained);

  const filtered = awardees.filter(a => {
    const matchesSearch = 
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.recognitionTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = yearFilter === "all" || a.awardYear.toString() === yearFilter;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="EminSphere Award Recipients & Recognition Directory"
        description="Explore distinguished recipients recognized through EminSphere's international professional recognition programmes, review their citations, and verify their credentials."
        canonical="https://www.eminsphere.com/awards-recognition/awardees"
      />

      <PageHero
        eyebrow="Honours Roll"
        title="Award Recipients Directory"
        description="Celebrating outstanding academicians, researchers, innovators, and leaders recognized through EminSphere's Global Innovation & Excellence Awards."
        variant="mesh"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Nominate Candidate <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/verify-certificate">
              Verify Credentials
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-16 max-w-6xl px-4 sm:px-6 space-y-10">
        {/* Search & Filter Toolbar */}
        <div className="p-4 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipients by name, country, or keyword..."
              className="pl-10 text-xs bg-muted/40 h-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Cycle Year:</span>
            {["all", "2027", "2026"].map(y => (
              <button
                key={y}
                onClick={() => setYearFilter(y)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  yearFilter === y
                    ? "bg-primary text-white"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {y === "all" ? "All Cycles" : `Cycle ${y}`}
              </button>
            ))}
          </div>
        </div>

        {/* Awardees Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((awardee) => (
            <Card 
              key={awardee.id} 
              className="overflow-hidden bg-card border-border/60 rounded-2xl hover:border-primary/40 transition-smooth flex flex-col justify-between group shadow-sm hover:shadow-elegant"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                  <img 
                    src={awardee.photoUrl} 
                    alt={awardee.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30">
                      Cycle {awardee.awardYear}
                    </span>
                    <span className="text-[10px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded backdrop-blur-md">
                      {awardee.country}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-accent">
                    {awardee.categoryTitle}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-foreground">{awardee.name}</h3>
                  <div className="text-xs font-medium text-foreground/90">{awardee.designation}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 shrink-0" /> {awardee.organization}
                  </div>

                  <div className="pt-2 text-xs font-serif italic text-[#c5a059] line-clamp-2">
                    "{awardee.citation}"
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border/40 mt-2 flex items-center justify-between gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setSelectedAwardee(awardee)}
                  className="text-xs font-bold"
                >
                  View Profile
                </Button>
                <Button 
                  asChild 
                  size="sm" 
                  variant="ghost"
                  className="text-xs text-accent hover:text-accent font-semibold gap-1"
                >
                  <Link to={`/verify-certificate/${awardee.certificateId}`}>
                    <ShieldCheck className="h-3.5 w-3.5" /> Verify ID
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Detail Modal */}
        <Dialog open={!!selectedAwardee} onOpenChange={(open) => !open && setSelectedAwardee(null)}>
          <DialogContent className="max-w-2xl bg-card border-border text-foreground max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            {selectedAwardee && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-border/50 pb-6 text-center sm:text-left">
                  <div className="h-24 w-24 rounded-2xl overflow-hidden shrink-0 border-2 border-[#c5a059]/40 shadow-md">
                    <img src={selectedAwardee.photoUrl} alt={selectedAwardee.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#c5a059] font-bold px-2 py-0.5 rounded bg-[#c5a059]/10 border border-[#c5a059]/20">
                      Cycle {selectedAwardee.awardYear} • Certificate #{selectedAwardee.certificateId}
                    </span>
                    <DialogTitle className="text-2xl font-serif font-black text-foreground">
                      {selectedAwardee.name}
                    </DialogTitle>
                    <div className="text-xs font-semibold text-accent">
                      {selectedAwardee.recognitionTitle}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center justify-center sm:justify-start gap-2">
                      <span>{selectedAwardee.designation}</span>
                      <span>•</span>
                      <span>{selectedAwardee.organization}</span>
                      <span>•</span>
                      <span>{selectedAwardee.country}</span>
                    </div>
                  </div>
                </div>

                {/* Official Citation */}
                <div className="p-4 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 text-xs sm:text-sm italic font-serif text-[#f3e5c8] leading-relaxed">
                  <strong>Official Citation: </strong>
                  "{selectedAwardee.citation}"
                </div>

                {/* Achievement Summary */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-primary">
                    Achievement Summary
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedAwardee.achievementSummary}
                  </p>
                </div>

                {/* Biography */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground">
                    Professional Biography
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {selectedAwardee.biography}
                  </p>
                </div>

                {/* Verification CTA */}
                <div className="pt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-muted-foreground font-mono">
                    ID: {selectedAwardee.certificateId}
                  </div>
                  <Button asChild className="bg-primary text-white font-bold text-xs gap-1.5 shadow-gold">
                    <Link to={`/verify-certificate/${selectedAwardee.certificateId}`}>
                      <ShieldCheck className="h-4 w-4" /> Verify Live Credential Record <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AwardsAwardees;
