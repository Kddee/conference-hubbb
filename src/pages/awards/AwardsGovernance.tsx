import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GOVERNANCE_MEMBERS } from "@/data/awardsData";
import { 
  Building2, 
  Globe, 
  Award, 
  Linkedin, 
  ArrowRight, 
  ShieldCheck, 
  Users,
  CheckCircle2
} from "lucide-react";

export const AwardsGovernance: React.FC = () => {
  const [filterRole, setFilterRole] = useState<string>("all");

  const filteredMembers = filterRole === "all"
    ? GOVERNANCE_MEMBERS
    : GOVERNANCE_MEMBERS.filter(m => m.roleCategory === filterRole);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Governing Council & Award Committee | EminSphere Awards"
        description="Meet the distinguished leadership, International Advisory Board, Governing Council, and evaluation specialists overseeing the EminSphere Awards."
        canonical="https://www.eminsphere.com/awards-recognition/governance"
      />

      <PageHero
        eyebrow="Leadership & Oversight"
        title="Governing Council & Awards Committee"
        description="A multi-disciplinary council of senior academicians, research directors, and industrial innovators safeguarding meritocracy and academic rigor."
        variant="particles"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Nominate a Leader <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/awards-recognition/selection-process">
              Review Selection Standards
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-16 max-w-6xl px-4 sm:px-6 space-y-16">
        {/* Governance Structure Hierarchy */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Organizational Oversight</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Programme Governance Hierarchy
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Structured separation of operational screening, strategic advisory, and final conferment authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { level: "01", title: "Programme Director", role: "Oversees overall programme administration, integrity, and operational execution." },
              { level: "02", title: "Governing Council", role: "Establishes policy frameworks, review standards, and annual cycles." },
              { level: "03", title: "International Advisory Board", role: "Provides strategic global guidance and interdisciplinary recommendations." },
              { level: "04", title: "Award Selection Committee", role: "Considers expert evaluation reports and makes documented final decisions." },
              { level: "05", title: "Evaluation Experts", role: "Conduct independent blind peer scoring within designated specializations." },
              { level: "06", title: "Nomination & Verification Team", role: "Manages administrative eligibility screening and evidence authenticity." },
              { level: "07", title: "Awards Administration Team", role: "Manages recipient registries, ceremony logistics, and public records." },
              { level: "08", title: "Verification & Audit Registry", role: "Maintains tamper-proof certificate database and public verification portal." }
            ].map((node) => (
              <div key={node.level} className="p-4 rounded-xl bg-card border border-border/60 space-y-1">
                <span className="text-xs font-mono font-bold text-accent">{node.level}</span>
                <h4 className="text-sm font-serif font-bold text-foreground">{node.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{node.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Member Profile Cards */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/50 pb-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-accent font-bold">Confirmed Appointments</div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Council & Board Members
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { key: "all", label: "All Members" },
                { key: "Programme Director", label: "Director" },
                { key: "Governing Council", label: "Governing Council" },
                { key: "International Advisory Board", label: "Advisory Board" },
                { key: "Award Selection Committee", label: "Selection Committee" }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setFilterRole(tab.key)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    filterRole === tab.key
                      ? "bg-primary text-white"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <Card 
                key={member.id} 
                className="overflow-hidden bg-card border-border/60 rounded-2xl hover:border-primary/40 transition-smooth flex flex-col justify-between group shadow-sm hover:shadow-elegant"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                    <img 
                      src={member.photoUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30">
                      {member.roleCategory}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-lg font-serif font-bold text-foreground">{member.name}</h4>
                    <div className="text-xs font-medium text-accent">{member.designation}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 shrink-0" /> {member.organization}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 shrink-0 text-emerald-400" /> {member.country}
                    </div>

                    <div className="pt-2 border-t border-border/40 text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                      {member.biography}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-border/30 mt-2 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#c5a059] font-medium truncate max-w-[180px]">
                    {member.expertise}
                  </span>
                  <a 
                    href="https://www.linkedin.com/company/106142250" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-muted/80 transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-muted/20 border border-border/50 text-center text-xs text-muted-foreground">
            * Only confirmed committee appointments with approved public disclosures are listed in accordance with institutional governance policies.
          </div>
        </section>
      </div>
    </div>
  );
};

export default AwardsGovernance;
