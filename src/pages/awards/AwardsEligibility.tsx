import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  EVALUATION_PARAMETERS, 
  EVALUATION_BANDS, 
  AWARD_CATEGORIES 
} from "@/data/awardsData";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Target, 
  Award, 
  ArrowRight, 
  Scale, 
  FileCheck2, 
  HelpCircle,
  AlertCircle
} from "lucide-react";

export const AwardsEligibility: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Eligibility & Selection Criteria | EminSphere Awards"
        description="Review comprehensive eligibility benchmarks, category-specific evaluation parameters, and the weighted 6-parameter scoring framework of EminSphere Awards."
        canonical="https://www.eminsphere.com/awards-recognition/eligibility"
      />

      <PageHero
        eyebrow="Evaluation Standards"
        title="Eligibility & Assessment Framework"
        description="A transparent, merit-based framework ensuring independent, structured, and consistent evaluation across all recognition disciplines."
        variant="mesh"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/awards-recognition/selection-process">
              Read Selection Process
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-16 max-w-5xl px-4 sm:px-6 space-y-16">
        {/* General Considerations */}
        <section className="space-y-6">
          <div className="border-b border-border/50 pb-4">
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Foundational Baseline</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              General Eligibility Considerations
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Candidates should demonstrate achievements directly relevant to their selected award category.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Documented Track Record", desc: "Demonstrated professional or academic achievements over a verifiable timeframe." },
              { title: "Relevant Discipline Tenure", desc: "Active experience and sustained contribution in the nominated field or specialization." },
              { title: "Measurable Impact", desc: "Evidence of tangible outcomes (e.g., peer-reviewed papers, patents, enterprise scaling, societal programs)." },
              { title: "Professional Integrity", desc: "Unblemished professional conduct, research ethics, and commitment to institutional transparency." },
              { title: "Innovation & Leadership", desc: "Demonstrated originality in thought leadership, technical engineering, or mentoring." },
              { title: "Verifiable Portfolios", desc: "Availability of authentic supporting documentation, DOI links, and credentials." }
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category-Specific Criteria Table */}
        <section className="space-y-6">
          <div className="border-b border-border/50 pb-4">
            <div className="text-xs uppercase tracking-widest text-accent font-bold">Category-Specific Criteria</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              Suggested Assessment Parameters by Discipline
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted/50 border-b border-border text-foreground font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 w-16">#</th>
                  <th className="p-4">Award Category</th>
                  <th className="p-4">Primary Assessment Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                {AWARD_CATEGORIES.map((cat) => (
                  <tr key={cat.id} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-mono font-bold text-foreground">{cat.number}</td>
                    <td className="p-4 font-semibold text-foreground">{cat.title}</td>
                    <td className="p-4">{cat.selectionCriteria.join("; ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Weighted Evaluation Framework */}
        <section className="space-y-6">
          <div className="border-b border-border/50 pb-4">
            <div className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Scoring Methodology</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              Weighted Evaluation Framework (100% Total)
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Applications are scored by appointed independent evaluators against six weighted dimensions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {EVALUATION_PARAMETERS.map((p, idx) => (
              <Card key={idx} className="p-5 bg-card border-border/60 rounded-2xl flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-muted-foreground">Parameter 0{idx + 1}</span>
                  <span className="text-lg font-serif font-black text-accent">{p.weight}%</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{p.parameter}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Evaluation Bands */}
        <section className="space-y-6">
          <div className="border-b border-border/50 pb-4">
            <div className="text-xs uppercase tracking-widest text-accent font-bold">Standard Benchmarks</div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              Suggested Evaluation Bands
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {EVALUATION_BANDS.map((band, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-xl border flex flex-col justify-between space-y-2 ${
                  band.label === 'Outstanding'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-foreground'
                    : band.label === 'Strong'
                    ? 'bg-blue-500/10 border-blue-500/30 text-foreground'
                    : band.label === 'Competitive'
                    ? 'bg-amber-500/10 border-amber-500/30 text-foreground'
                    : 'bg-muted/40 border-border text-muted-foreground'
                }`}
              >
                <div>
                  <div className="text-xs font-mono font-bold">{band.range} pts</div>
                  <h4 className="text-base font-serif font-bold mt-0.5">{band.label}</h4>
                </div>
                <p className="text-xs leading-relaxed opacity-80">{band.description}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 text-xs text-muted-foreground space-y-1">
            <div className="font-semibold text-foreground flex items-center gap-1.5">
              <AlertCircle className="h-4 w-4 text-accent" /> Assessment Framework Notice
            </div>
            <p>
              These are proposed internal assessment standards developed for merit-based evaluation under EminSphere recognition programmes. They do not constitute an existing statutory accreditation, academic degree requirement, or externally validated university ranking.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AwardsEligibility;
