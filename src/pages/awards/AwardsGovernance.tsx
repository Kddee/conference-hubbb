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
        title="Awards Committee & Governing Council | EminSphere Awards"
        description="Meet the distinguished educators, researchers, and global industry executives serving on the EminSphere Awards Committee and Governing Council."
        canonical="https://www.eminsphere.com/awards-recognition/governance"
      />

      <PageHero
        eyebrow="Leadership & Selection Oversight"
        title="Awards Committee & Governing Council"
        description="An esteemed body of international academicians, researchers, senior corporate executives, and technology leaders overseeing merit evaluation, neutrality, and recognition standards."
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
              Structured separation of operational screening, expert evaluation, and final conferment authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { level: "01", title: "Programme Directorate", role: "Oversees overall programme administration, integrity, and operational execution." },
              { level: "02", title: "Governing Council", role: "Establishes policy frameworks, review standards, and annual recognition cycles." },
              { level: "03", title: "Award Selection Committee", role: "Considers expert evaluation reports and makes documented final conferment decisions." },
              { level: "04", title: "Evaluation & Peer Review Experts", role: "Conduct independent blind peer scoring within designated disciplinary specializations." },
              { level: "05", title: "Nomination & Verification Team", role: "Manages administrative eligibility screening and evidence authenticity." },
              { level: "06", title: "Verification & Audit Registry", role: "Maintains tamper-proof certificate records and public online verification portal." }
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
                Awards Committee & Council Members
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { key: "all", label: "All Members (13)" },
                { key: "Award Selection Committee", label: "Selection Committee" },
                { key: "Governing Council", label: "Governing Council" }
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
                className="overflow-hidden bg-card/90 border border-border/60 rounded-2xl p-6 hover:border-primary/40 transition-smooth flex flex-col justify-between items-center text-center group shadow-sm hover:shadow-elegant relative"
              >
                {/* Role Category Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 text-[#c5a059] text-[10px] font-bold uppercase tracking-wider mb-4 border border-[#c5a059]/25 self-center">
                  <ShieldCheck className="h-3 w-3" /> {member.roleCategory}
                </div>

                {/* Portrait Frame: Centered, portrait 3:3.8 ratio, object-contain with ambient backdrop */}
                <div className="relative aspect-[3/3.8] w-full max-w-[210px] mx-auto mb-5 rounded-2xl overflow-hidden bg-muted/40 border-2 border-primary/20 shadow-md group-hover:border-accent/50 group-hover:shadow-xl transition-all flex items-center justify-center shrink-0">
                  {/* Soft ambient blurred backdrop */}
                  <img 
                    src={member.photoUrl} 
                    alt="" 
                    aria-hidden="true" 
                    className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-125 pointer-events-none" 
                  />
                  {/* Clean uncropped contained portrait */}
                  <img 
                    src={member.photoUrl} 
                    alt={member.name}
                    className="relative z-10 h-full w-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105" 
                    loading="lazy" 
                  />
                </div>

                {/* Member Details */}
                <div className="space-y-2.5 w-full">
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {member.name}
                  </h4>
                  <div className="text-xs font-semibold text-accent leading-relaxed line-clamp-2 px-1">
                    {member.designation}
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground pt-1">
                    <span className="inline-flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <span className="line-clamp-1">{member.organization}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Globe className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      <span>{member.country}</span>
                    </span>
                  </div>

                  <div className="pt-3 border-t border-border/40 text-[11.5px] text-muted-foreground leading-relaxed line-clamp-3">
                    {member.biography}
                  </div>
                </div>

                {/* Card Footer: Expertise & LinkedIn */}
                <div className="w-full pt-4 mt-5 border-t border-border/40 flex items-center justify-between text-xs gap-2">
                  <span className="text-[11px] text-[#c5a059] font-medium truncate text-left" title={member.expertise}>
                    <Award className="h-3.5 w-3.5 inline mr-1 text-[#c5a059] shrink-0" />
                    {member.expertise}
                  </span>
                  <a 
                    href="https://www.linkedin.com/company/106142250" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                    className="h-7 w-7 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-muted transition-colors shrink-0"
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
