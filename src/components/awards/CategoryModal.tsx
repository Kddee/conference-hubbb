import React from "react";
import { Link } from "react-router-dom";
import { AwardCategory } from "@/data/awardsData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  FileText, 
  Target, 
  Users, 
  ArrowRight,
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

interface CategoryModalProps {
  category: AwardCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

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

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, isOpen, onClose }) => {
  if (!category) return null;

  const IconComponent = iconMap[category.iconName] || Award;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-card border-border/80 text-foreground max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <DialogHeader className="space-y-3 border-b border-border/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
              <IconComponent className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-accent">
                Category {category.number} • {category.group}
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-serif font-bold text-foreground mt-0.5">
                {category.title}
              </DialogTitle>
            </div>
          </div>
          <DialogDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2">
            {category.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Eligible Candidates */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-bold text-primary flex items-center gap-2">
              <Users className="h-4 w-4" /> Eligible Candidates
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
              {category.eligibleCandidates.map((item, i) => (
                <li key={i} className="flex items-start gap-2 bg-muted/30 p-2.5 rounded-lg border border-border/40">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Selection Criteria */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-bold text-accent flex items-center gap-2">
              <Target className="h-4 w-4" /> Selection & Evaluation Criteria
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {category.selectionCriteria.map((item, i) => (
                <li key={i} className="flex items-start gap-2 bg-muted/30 p-2.5 rounded-lg border border-border/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" /> Required Supporting Documents
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              {category.requiredDocuments.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Button variant="ghost" onClick={onClose} className="w-full sm:w-auto text-xs">
            Close
          </Button>
          <Button asChild className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 font-bold px-6 shadow-gold gap-2">
            <Link to={`/awards-recognition/apply?category=${category.id}`} onClick={onClose}>
              Nominate in This Category <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
