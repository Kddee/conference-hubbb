import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { POLICIES } from "@/data/awardsData";
import { 
  ShieldCheck, 
  Scale, 
  Lock, 
  AlertTriangle, 
  FileCheck2, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

export const AwardsPolicies: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Policies & Legal Disclaimer | EminSphere Awards"
        description="Review comprehensive policies governing nominations, ethics, conflicts of interest, candidate privacy, and the official non-academic recognition disclaimer."
        canonical="https://www.eminsphere.com/awards-recognition/policies"
      />

      <PageHero
        eyebrow="Governance & Compliance"
        title="Policies & Statutory Disclaimers"
        description="Transparent regulatory disclosures, evaluation ethics, confidentiality charters, and the official statutory recognition disclaimer."
        variant="mesh"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Nominate Candidate Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/awards-recognition/selection-process">
              Selection Framework
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-16 max-w-4xl px-4 sm:px-6 space-y-12">
        {/* Prominent Statutory Disclaimer Box (Part 11.7 Highlight) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                Statutory Notice
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                Official Recognition Disclaimer
              </h2>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-foreground/90 leading-relaxed pl-0 sm:pl-13">
            <p>
              EminSphere is an independent non-governmental organization operating its own recognition programmes. Awards, fellowships, memberships, certificates, and distinctions issued under these programmes are non-academic recognitions.
            </p>
            <p>
              They do not constitute university degrees, honorary doctoral degrees, PhD qualifications, government-recognized academic credentials, statutory accreditation, or professional licences.
            </p>
            <p>
              EminSphere does not claim to be a university or a statutory degree-awarding institution. Recognition does not automatically establish academic equivalence, university affiliation, government endorsement, or professional licensing rights.
            </p>
          </div>
        </div>

        {/* Detailed Policies List */}
        <div className="space-y-6">
          {POLICIES.map((policy) => (
            <Card key={policy.id} id={policy.id} className="p-6 sm:p-8 bg-card border-border/70 rounded-2xl space-y-3 scroll-mt-24">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground flex items-center gap-2">
                <FileCheck2 className="h-5 w-5 text-primary shrink-0" />
                {policy.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {policy.content}
              </p>
            </Card>
          ))}
        </div>

        {/* Compliance Footer */}
        <div className="p-6 rounded-2xl bg-muted/20 border border-border/50 text-xs text-muted-foreground text-center space-y-1">
          <p>
            All operations are conducted in alignment with applicable Indian regulatory frameworks, professional governance standards, and international peer-review ethics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardsPolicies;
