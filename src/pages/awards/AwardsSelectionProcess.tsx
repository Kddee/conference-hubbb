import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  FileCheck, 
  Lock, 
  AlertCircle,
  ArrowRight,
  Eye,
  Award
} from "lucide-react";

export const AwardsSelectionProcess: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Selection & Evaluation Process | EminSphere Awards"
        description="Explore the 6-stage independent evaluation framework, evidence verification protocols, conflict of interest safeguards, and committee decision policies."
        canonical="https://www.eminsphere.com/awards-recognition/selection-process"
      />

      <PageHero
        eyebrow="Merit-Based Governance"
        title="Selection & Evaluation Framework"
        description="How nominations are screened, verified, and independently evaluated to maintain absolute impartiality, academic rigor, and professional integrity."
        variant="floating-orbs"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Apply for Recognition <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/awards-recognition/governance">
              Awards Committee & Governance
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-16 max-w-5xl px-4 sm:px-6 space-y-16">
        {/* Intro */}
        <section className="p-6 sm:p-8 rounded-3xl bg-card border border-border space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Independent Framework</div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
            Structured 6-Stage Evaluation Framework
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            EminSphere adheres to established academic and industrial review standards. Every application progresses sequentially through six verifiable assessment stages prior to any final conferment.
          </p>
        </section>

        {/* 6 Stages Grid */}
        <div className="space-y-4">
          {[
            {
              stage: "Stage 1",
              title: "Administrative Screening",
              desc: "The nomination operations team conducts an initial compliance check: verification of application completeness, mandatory declaration consents, category suitability, and check for duplicate submissions."
            },
            {
              stage: "Stage 2",
              title: "Evidence & Document Verification",
              desc: "Independent verification of submitted CVs, institutional affiliations, published DOI research articles, patent filing records, or enterprise incorporation documents against public repositories."
            },
            {
              stage: "Stage 3",
              title: "Expert Evaluator Assignment",
              desc: "Eligible nominations are assigned to appointed domain specialists whose academic or industrial expertise directly aligns with the candidate's chosen discipline."
            },
            {
              stage: "Stage 4",
              title: "Independent Scoring & Recommendations",
              desc: "Evaluators score nominations against the published 6-parameter weighted evaluation framework (Achievement 30%, Experience 20%, Innovation 15%, Impact 15%, Leadership 10%, Evidence 10%) and submit confidential recommendation dossiers."
            },
            {
              stage: "Stage 5",
              title: "Award Selection Committee Review",
              desc: "The designated high-level Selection Committee convenes to review compiled evaluator scores, ensure scoring consistency across categories, and formally approve final selection decisions."
            },
            {
              stage: "Stage 6",
              title: "Official Communication & Documentation",
              desc: "Candidates are officially notified of their application status through their registered email addresses. Selected recipients receive certificate documentation and onboarding instructions."
            }
          ].map((s, idx) => (
            <Card key={idx} className="p-6 bg-card border-border/60 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
              <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20 shrink-0">
                {s.stage}
              </span>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-serif font-bold text-foreground">{s.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Conflict of Interest & Ethics Safeguards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl space-y-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Scale className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground">Conflict of Interest Policy</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Evaluators must disclose any personal, institutional, financial, or direct supervisory relationship with an applicant. When a conflict exists, the evaluator is recused from all discussions and scoring for that dossier.
            </p>
          </Card>

          <Card className="p-6 sm:p-8 bg-card border-border/60 rounded-2xl space-y-3">
            <div className="h-10 w-10 rounded-xl bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground">Documented Decision Policy</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Selection decisions must be formally recorded and approved by the authorized Selection Committee. EminSphere reserves the right to reject incomplete, inaccurate, misleading, or unsubstantiated nominations.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AwardsSelectionProcess;
