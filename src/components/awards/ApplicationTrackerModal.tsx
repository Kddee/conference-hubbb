import React, { useState } from "react";
import { NominationApplication } from "@/data/awardsData";
import { AwardsStorageService } from "@/services/awardsStorage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileText, 
  Upload, 
  Calendar, 
  Building2, 
  Award,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { toast } from "sonner";

interface ApplicationTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRef?: string;
}

export const ApplicationTrackerModal: React.FC<ApplicationTrackerModalProps> = ({
  isOpen,
  onClose,
  initialRef = ""
}) => {
  const [referenceId, setReferenceId] = useState(initialRef);
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState(false);
  const [application, setApplication] = useState<NominationApplication | null>(null);
  const [uploadingDoc, setUploadingDoc] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!referenceId.trim()) {
      toast.error("Please enter your Application Reference ID");
      return;
    }

    const app = AwardsStorageService.getNominationById(referenceId.trim());
    setSearched(true);

    if (app) {
      if (email.trim() && app.email.toLowerCase() !== email.trim().toLowerCase()) {
        toast.error("Application found, but the provided email does not match registered records.");
        setApplication(null);
        return;
      }
      setApplication(app);
    } else {
      setApplication(null);
    }
  };

  const handleDocUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !application) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size exceeds 10 MB maximum limit");
      return;
    }

    setUploadingDoc(true);
    setTimeout(() => {
      const updatedDocs = [
        ...application.documents,
        {
          name: file.name,
          type: file.type || "application/pdf",
          size: file.size,
          category: "Additional Evidence"
        }
      ];

      // Update in storage
      const list = AwardsStorageService.getNominations();
      const idx = list.findIndex(n => n.id === application.id);
      if (idx !== -1) {
        list[idx].documents = updatedDocs;
        // Optionally update status back to Initial Screening for admin re-review
        AwardsStorageService.updateNominationStatus(
          application.id,
          'Initial Screening',
          application.firstName + ' ' + application.lastName,
          `Additional document uploaded: ${file.name}`
        );
      }

      setApplication({
        ...application,
        documents: updatedDocs,
        status: 'Initial Screening'
      });
      setUploadingDoc(false);
      toast.success("Additional document uploaded successfully! Status updated to Initial Screening.");
    }, 800);
  };

  const getStatusBadge = (status: NominationApplication['status']) => {
    switch (status) {
      case 'Selected':
      case 'Certificate Issued':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Under Evaluation':
      case 'Final Review':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Initial Screening':
      case 'Received':
      case 'Submitted':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Documents Required':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'Not Selected':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-card border-border/80 text-foreground max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <DialogHeader className="space-y-2 border-b border-border/50 pb-4">
          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
            <Search className="h-4 w-4" /> Live Portal Verification
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-serif font-bold text-foreground">
            Track Nomination Status
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Enter your unique Application Reference Number (e.g. ES-GIA-2027-10492) to view your real-time review progress.
          </DialogDescription>
        </DialogHeader>

        {/* Search Form */}
        <form onSubmit={handleTrack} className="space-y-4 pt-2">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">
                Application Reference ID *
              </label>
              <Input
                placeholder="ES-GIA-2027-XXXXX"
                value={referenceId}
                onChange={(e) => setReferenceId(e.target.value.toUpperCase())}
                className="font-mono bg-muted/40 uppercase"
                required
              />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">
                Registered Email (Optional)
              </label>
              <Input
                type="email"
                placeholder="nominee@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted/40"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold">
            <Search className="mr-2 h-4 w-4" /> Check Status
          </Button>
        </form>

        {/* Result Area */}
        {searched && (
          <div className="mt-6 border-t border-border/50 pt-6">
            {application ? (
              <div className="space-y-6">
                {/* Header overview */}
                <div className="p-4 rounded-xl bg-muted/40 border border-border/60 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">
                      Ref: {application.id}
                    </div>
                    <div className="text-lg font-serif font-bold text-foreground mt-0.5">
                      {application.firstName} {application.lastName}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1">
                      <Building2 className="h-3.5 w-3.5" /> {application.organization}
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${getStatusBadge(application.status)}`}>
                      <Clock className="h-3.5 w-3.5" />
                      {application.status}
                    </span>
                    <div className="text-[11px] text-muted-foreground mt-1">
                      Submitted: {new Date(application.submissionDate).toLocaleDateString('en-GB')}
                    </div>
                  </div>
                </div>

                {/* Award Category Info */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-accent">
                    Nominated Award Category
                  </div>
                  <div className="text-sm sm:text-base font-bold text-foreground">
                    {application.awardCategoryTitle}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Type: {application.nominationType} • Achievement Field: {application.primaryAchievementArea}
                  </div>
                </div>

                {/* If Documents Required, show upload interface */}
                {application.status === 'Documents Required' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-rose-300">Action Required: Supporting Evidence Needed</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          The review committee has requested additional documentation to proceed with evaluation.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Upload Requested Document (PDF, JPG, PNG up to 10 MB):
                      </label>
                      <input 
                        type="file" 
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleDocUpload}
                        disabled={uploadingDoc}
                        className="text-xs text-muted-foreground file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 cursor-pointer"
                      />
                    </div>
                  </div>
                )}

                {/* Status Timeline */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> Application Review History
                  </h4>
                  <div className="space-y-2">
                    {application.statusHistory?.map((step, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-muted/20 border border-border/40 text-xs space-y-1">
                        <div className="flex items-center justify-between font-semibold">
                          <span className="text-foreground">{step.status}</span>
                          <span className="text-muted-foreground font-mono text-[11px]">
                            {new Date(step.changedAt).toLocaleString('en-GB')}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{step.remarks}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Uploaded Documents List */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent" /> Submitted Documents ({application.documents?.length || 0})
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs">
                    {application.documents?.map((doc, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-muted/30 border border-border/40 flex items-center justify-between gap-2">
                        <span className="truncate text-foreground font-medium">{doc.name}</span>
                        <span className="text-[10px] text-muted-foreground uppercase shrink-0 font-mono">
                          {doc.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center space-y-2 bg-muted/20 rounded-xl border border-dashed border-border">
                <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto" />
                <h4 className="text-sm font-semibold text-foreground">No Application Record Found</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                  Please verify that you typed the Application Reference ID correctly (e.g. ES-GIA-2027-10492) or contact <a href="mailto:info@eminsphere.com" className="text-primary hover:underline">info@eminsphere.com</a> for assistance.
                </p>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
