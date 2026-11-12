import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  AWARD_CATEGORIES, 
  AwardCategory,
  NominationApplication
} from "@/data/awardsData";
import { AwardsStorageService } from "@/services/awardsStorage";
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Upload, 
  Trash2, 
  Download, 
  Printer, 
  Building2, 
  Award, 
  User, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Search
} from "lucide-react";
import { toast } from "sonner";

export const AwardsApply: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedCategory = searchParams.get("category");

  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedApp, setSubmittedApp] = useState<NominationApplication | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    countryOfResidence: "",
    stateProvince: "",
    city: "",
    email: "",
    mobile: "",
    whatsapp: "",
    linkedinUrl: "",
    websiteUrl: "",

    // Step 2: Professional
    designation: "",
    organization: "",
    industryField: "",
    department: "",
    yearsExperience: 5,
    highestQualification: "",
    specialization: "",
    profileSummary: "",
    biography: "",

    // Step 3: Award Selection
    awardCategoryId: preselectedCategory || "academic-leadership",
    nominationType: "Self-Nomination" as 'Self-Nomination' | 'Third-Party Nomination' | 'Institutional Nomination',
    primaryAchievementArea: "",
    reasonForNomination: "",
    majorAchievements: "",
    keyContributions: "",
    researchPublications: "",
    previousAwards: "",
    socialContributions: "",
    whyConsider: "",

    // Step 4: Documents Evidence
    documents: [] as { name: string; type: string; size: number; category: string }[],

    // Step 5: Nominator Info
    nominator: {
      fullName: "",
      designation: "",
      organization: "",
      email: "",
      contactNumber: "",
      relationship: "",
      reasonForRecommendation: "",
      confirmed: false
    },

    // Step 6: Declarations
    declarations: {
      accurateAndComplete: false,
      authorizeVerification: false,
      noGuaranteeUnderstood: false,
      agreeToPolicies: false,
      consentPersonalProcessing: false,
      noPublicWithoutConsent: false,
      receiveAnnouncements: false
    }
  });

  useEffect(() => {
    if (preselectedCategory) {
      setFormData(prev => ({ ...prev, awardCategoryId: preselectedCategory }));
    }
  }, [preselectedCategory]);

  const selectedCategoryObj = AWARD_CATEGORIES.find(c => c.id === formData.awardCategoryId) || AWARD_CATEGORIES[0];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNominatorChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      nominator: { ...prev.nominator, [field]: value }
    }));
  };

  const handleDeclarationChange = (field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      declarations: { ...prev.declarations, [field]: checked }
    }));
  };

  // Document Upload handling
  const handleFileUpload = (categoryLabel: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error(`File ${file.name} exceeds maximum allowed size of 10 MB.`);
      return;
    }

    const newDoc = {
      name: file.name,
      type: file.type || "application/pdf",
      size: file.size,
      category: categoryLabel
    };

    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents.filter(d => d.category !== categoryLabel), newDoc]
    }));
    toast.success(`Attached ${categoryLabel}: ${file.name}`);
  };

  const handleRemoveDoc = (categoryLabel: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(d => d.category !== categoryLabel)
    }));
  };

  // Step Validations
  const validateStep1 = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      toast.error("Please enter first and last name");
      return false;
    }
    if (!formData.nationality.trim() || !formData.countryOfResidence.trim()) {
      toast.error("Please enter nationality and country of residence");
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.mobile.trim()) {
      toast.error("Please enter mobile contact number");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.designation.trim() || !formData.organization.trim()) {
      toast.error("Please enter your current professional designation and organization");
      return false;
    }
    if (!formData.highestQualification.trim()) {
      toast.error("Please enter your highest educational qualification");
      return false;
    }
    if (!formData.biography.trim()) {
      toast.error("Please provide a professional biography");
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!formData.primaryAchievementArea.trim()) {
      toast.error("Please specify your primary achievement area");
      return false;
    }
    if (!formData.reasonForNomination.trim()) {
      toast.error("Please provide brief reason for nomination");
      return false;
    }
    if (!formData.majorAchievements.trim()) {
      toast.error("Please provide major professional achievements");
      return false;
    }
    return true;
  };

  const validateStep4 = () => {
    const hasCV = formData.documents.some(d => d.category.includes("CV") || d.category.includes("Resume"));
    if (!hasCV) {
      toast.error("Please upload your updated Professional CV / Resume (PDF required)");
      return false;
    }
    return true;
  };

  const validateStep5 = () => {
    if (formData.nominationType !== "Self-Nomination") {
      if (!formData.nominator.fullName.trim() || !formData.nominator.email.trim()) {
        toast.error("Please provide complete nominator contact details");
        return false;
      }
      if (!formData.nominator.confirmed) {
        toast.error("Nominator must confirm the recommendation declaration");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    if (step === 4 && !validateStep4()) return;
    if (step === 5 && !validateStep5()) return;
    setStep(s => Math.min(s + 1, 6));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep(s => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Final Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const d = formData.declarations;
    if (
      !d.accurateAndComplete ||
      !d.authorizeVerification ||
      !d.noGuaranteeUnderstood ||
      !d.agreeToPolicies ||
      !d.consentPersonalProcessing ||
      !d.noPublicWithoutConsent
    ) {
      toast.error("Please accept all mandatory declaration and consent checkboxes before submitting.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const app = AwardsStorageService.saveNomination({
          firstName: formData.firstName.trim(),
          middleName: formData.middleName.trim() || undefined,
          lastName: formData.lastName.trim(),
          gender: formData.gender || undefined,
          dateOfBirth: formData.dateOfBirth || undefined,
          nationality: formData.nationality.trim(),
          countryOfResidence: formData.countryOfResidence.trim(),
          stateProvince: formData.stateProvince.trim(),
          city: formData.city.trim(),
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          whatsapp: formData.whatsapp.trim() || undefined,
          linkedinUrl: formData.linkedinUrl.trim() || undefined,
          websiteUrl: formData.websiteUrl.trim() || undefined,

          designation: formData.designation.trim(),
          organization: formData.organization.trim(),
          industryField: formData.industryField.trim(),
          department: formData.department.trim() || undefined,
          yearsExperience: Number(formData.yearsExperience) || 0,
          highestQualification: formData.highestQualification.trim(),
          specialization: formData.specialization.trim(),
          profileSummary: formData.profileSummary.trim(),
          biography: formData.biography.trim(),

          awardCategoryId: formData.awardCategoryId,
          awardCategoryTitle: selectedCategoryObj.title,
          nominationType: formData.nominationType,
          primaryAchievementArea: formData.primaryAchievementArea.trim(),
          reasonForNomination: formData.reasonForNomination.trim(),
          majorAchievements: formData.majorAchievements.trim(),
          keyContributions: formData.keyContributions.trim(),
          researchPublications: formData.researchPublications.trim() || undefined,
          previousAwards: formData.previousAwards.trim() || undefined,
          socialContributions: formData.socialContributions.trim() || undefined,
          whyConsider: formData.whyConsider.trim() || formData.reasonForNomination.trim(),

          documents: formData.documents,
          nominator: formData.nominationType !== "Self-Nomination" ? formData.nominator : undefined,
          declarations: formData.declarations
        });

        setSubmittedApp(app);
        setIsSubmitting(false);
        toast.success(`Nomination ${app.id} successfully registered!`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err: any) {
        setIsSubmitting(false);
        toast.error("Error submitting nomination: " + err.message);
      }
    }, 1200);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-10 sm:py-16">
      <SEOHead 
        title="Apply for Global Excellence Awards | EminSphere"
        description="Submit your nomination for EminSphere's Global Innovation & Excellence Awards through the official nomination portal."
        canonical="https://www.eminsphere.com/awards-recognition/apply"
      />

      <div className="container max-w-4xl px-4 sm:px-6">
        {/* If Application is successfully submitted, show Part 3.2 Confirmation View */}
        {submittedApp ? (
          <div className="space-y-8 animate-fade-in">
            <div className="p-8 sm:p-12 rounded-3xl bg-card border-2 border-emerald-500/40 text-center shadow-elegant space-y-6">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-widest text-[#c5a059]">
                  Submission Acknowledgement
                </div>
                <h1 className="text-3xl sm:text-4xl font-serif font-black text-foreground">
                  Nomination Submitted Successfully!
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Thank you for submitting your nomination to the EminSphere Global Innovation & Excellence Awards.
                </p>
              </div>

              {/* Application Details Card */}
              <div className="p-6 rounded-2xl bg-muted/40 border border-border text-left max-w-xl mx-auto space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-border/60">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Nomination Reference</span>
                  <span className="text-base sm:text-lg font-mono font-bold text-accent">{submittedApp.id}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground block">Nominee Name:</span>
                    <span className="font-semibold text-foreground">{submittedApp.firstName} {submittedApp.lastName}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Submission Date:</span>
                    <span className="font-semibold text-foreground">{new Date(submittedApp.submissionDate).toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="col-span-2 pt-1">
                    <span className="text-muted-foreground block">Award Category:</span>
                    <span className="font-semibold text-foreground">{submittedApp.awardCategoryTitle}</span>
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed space-y-2 text-left bg-primary/5 p-4 rounded-xl border border-primary/20">
                <p>
                  Your application has been successfully received and assigned a unique nomination reference number.
                </p>
                <p>
                  Our nominations team will review your submission according to the applicable eligibility and evaluation criteria.
                </p>
                <p>
                  An acknowledgement dispatch has been routed to <strong>{submittedApp.email}</strong>.
                </p>
                <p className="text-[11px] text-amber-500 font-semibold pt-1">
                  Important: Application receipt is not an indication of selection or award confirmation.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button 
                  onClick={handlePrintReceipt}
                  className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 font-bold px-6 gap-2"
                >
                  <Download className="h-4 w-4" /> Download Application Receipt
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full sm:w-auto font-semibold px-6"
                >
                  <Link to="/awards-recognition">
                    Return to Awards Portal
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Multi-Step Application Form (Part 3.1) */
          <div className="space-y-8 animate-fade-in">
            {/* Header info */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-card border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" /> Official Application Portal
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-foreground tracking-tight">
                Apply for EminSphere Global Innovation & Excellence Awards
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Submit your nomination for consideration under the EminSphere Global Innovation & Excellence Awards. Please provide accurate information and supporting documents to enable a fair and comprehensive assessment.
              </p>
              <div className="p-3 bg-muted/40 rounded-xl border border-border/60 max-w-xl mx-auto text-xs text-muted-foreground flex items-center justify-center gap-2">
                <AlertCircle className="h-4 w-4 text-accent shrink-0" />
                <span>Submission of an application does not guarantee selection or recognition.</span>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="bg-card p-4 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-2">
                <span>Step {step} of 6</span>
                <span className="text-foreground">
                  {step === 1 && "Personal Information"}
                  {step === 2 && "Professional Information"}
                  {step === 3 && "Award Selection & Merits"}
                  {step === 4 && "Achievement Evidence (Uploads)"}
                  {step === 5 && (formData.nominationType === "Self-Nomination" ? "Nomination Mode" : "Nominator Details")}
                  {step === 6 && "Declaration & Consent"}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-primary h-2 transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 6) * 100}%` }}
                />
              </div>

              {/* Step Pills */}
              <div className="hidden sm:grid grid-cols-6 gap-2 mt-4 text-[10px] text-center font-medium">
                {["1. Personal", "2. Career", "3. Merits", "4. Evidence", "5. Nominator", "6. Consent"].map((label, i) => (
                  <div 
                    key={i} 
                    className={`py-1 rounded-md transition-colors ${
                      step === i + 1 ? "bg-primary/20 text-primary font-bold border border-primary/30" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* FORM CONTAINER */}
            <form onSubmit={handleSubmit} className="bg-card p-6 sm:p-10 rounded-3xl border border-border shadow-elegant space-y-6">
              {/* STEP 1: PERSONAL INFORMATION */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="border-b border-border/50 pb-3">
                    <h3 className="text-lg font-serif font-bold text-foreground">
                      Step 1: Personal Information
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Provide contact and demographic information of the candidate.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Dr. / Prof. / Mr. / Ms."
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Middle Name (Optional)</label>
                      <Input
                        value={formData.middleName}
                        onChange={(e) => handleInputChange("middleName", e.target.value)}
                        placeholder="Middle name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Gender (Optional)</label>
                      <select 
                        value={formData.gender} 
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        className="w-full h-10 px-3 rounded-md bg-background border border-input text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      >
                        <option value="">Select Gender (Optional)</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Date of Birth (Optional, if age eligibility applies)</label>
                      <Input
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        className="text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Nationality *</label>
                      <Input
                        value={formData.nationality}
                        onChange={(e) => handleInputChange("nationality", e.target.value)}
                        placeholder="e.g. Indian, British, American"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Country of Residence *</label>
                      <Input
                        value={formData.countryOfResidence}
                        onChange={(e) => handleInputChange("countryOfResidence", e.target.value)}
                        placeholder="e.g. India, United Kingdom, USA"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">State / Province *</label>
                      <Input
                        value={formData.stateProvince}
                        onChange={(e) => handleInputChange("stateProvince", e.target.value)}
                        placeholder="e.g. Maharashtra, California"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">City *</label>
                      <Input
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="e.g. Pune, London"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="name@domain.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Mobile Contact Number *</label>
                      <Input
                        value={formData.mobile}
                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">WhatsApp Number (Optional)</label>
                      <Input
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                        placeholder="WhatsApp contact"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">LinkedIn Profile URL (Optional)</label>
                      <Input
                        value={formData.linkedinUrl}
                        onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Website URL (Optional)</label>
                      <Input
                        value={formData.websiteUrl}
                        onChange={(e) => handleInputChange("websiteUrl", e.target.value)}
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: PROFESSIONAL INFORMATION */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="border-b border-border/50 pb-3">
                    <h3 className="text-lg font-serif font-bold text-foreground">
                      Step 2: Professional Information
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Candidate's institutional affiliations, career track record, and expertise.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Current Professional Designation *</label>
                      <Input
                        value={formData.designation}
                        onChange={(e) => handleInputChange("designation", e.target.value)}
                        placeholder="e.g. Professor / Senior Architect / CTO"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Organization / Institution Name *</label>
                      <Input
                        value={formData.organization}
                        onChange={(e) => handleInputChange("organization", e.target.value)}
                        placeholder="e.g. University / Enterprise name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Industry / Professional Field *</label>
                      <Input
                        value={formData.industryField}
                        onChange={(e) => handleInputChange("industryField", e.target.value)}
                        placeholder="e.g. Higher Education, AI, Biotechnology"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Department (Optional)</label>
                      <Input
                        value={formData.department}
                        onChange={(e) => handleInputChange("department", e.target.value)}
                        placeholder="e.g. Department of Computer Science"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Years of Professional Experience *</label>
                      <Input
                        type="number"
                        min="0"
                        value={formData.yearsExperience}
                        onChange={(e) => handleInputChange("yearsExperience", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Highest Educational Qualification *</label>
                      <Input
                        value={formData.highestQualification}
                        onChange={(e) => handleInputChange("highestQualification", e.target.value)}
                        placeholder="e.g. Ph.D., Postdoc, M.Tech, MBA, MD"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Specialization / Area of Expertise *</label>
                      <Input
                        value={formData.specialization}
                        onChange={(e) => handleInputChange("specialization", e.target.value)}
                        placeholder="e.g. Machine Learning, Structural Biology"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">Current Professional Profile Summary *</label>
                    <Textarea
                      rows={2}
                      value={formData.profileSummary}
                      onChange={(e) => handleInputChange("profileSummary", e.target.value)}
                      placeholder="Brief 2-3 sentence overview of candidate's executive or academic role"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">
                      Professional Biography (Maximum 500 Words) *
                    </label>
                    <Textarea
                      rows={4}
                      value={formData.biography}
                      onChange={(e) => handleInputChange("biography", e.target.value)}
                      placeholder="Comprehensive career summary detailing major milestones, responsibilities, and leadership track record."
                      required
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: AWARD SELECTION */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="border-b border-border/50 pb-3">
                    <h3 className="text-lg font-serif font-bold text-foreground">
                      Step 3: Award Selection & Merits
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Select target category and articulate specific contributions and innovations.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Select Award Category (18 Categories) *</label>
                      <select
                        value={formData.awardCategoryId}
                        onChange={(e) => handleInputChange("awardCategoryId", e.target.value)}
                        className="w-full h-10 px-3 rounded-md bg-background border border-input text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      >
                        {AWARD_CATEGORIES.map(cat => (
                          <option key={cat.id} value={cat.id}>
                            #{cat.number} - {cat.title} ({cat.group})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Nomination Type *</label>
                      <select
                        value={formData.nominationType}
                        onChange={(e) => handleInputChange("nominationType", e.target.value as any)}
                        className="w-full h-10 px-3 rounded-md bg-background border border-input text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      >
                        <option value="Self-Nomination">Self-Nomination</option>
                        <option value="Third-Party Nomination">Third-Party Nomination (Colleague / Peer)</option>
                        <option value="Institutional Nomination">Institutional Nomination (University / Employer)</option>
                      </select>
                    </div>
                  </div>

                  {/* Selected Category Snapshot Box */}
                  <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 text-xs text-muted-foreground space-y-1">
                    <div className="font-bold text-foreground flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" /> {selectedCategoryObj.title}
                    </div>
                    <p>{selectedCategoryObj.description}</p>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">Primary Achievement Area *</label>
                    <Input
                      value={formData.primaryAchievementArea}
                      onChange={(e) => handleInputChange("primaryAchievementArea", e.target.value)}
                      placeholder="e.g. Breakthrough Research in Cancer Therapy / Scaled Clean-Tech Energy Startup"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">
                      Brief Reason for Nomination (Maximum 300 Words) *
                    </label>
                    <Textarea
                      rows={2}
                      value={formData.reasonForNomination}
                      onChange={(e) => handleInputChange("reasonForNomination", e.target.value)}
                      placeholder="Summarize concisely why this nominee stands out in this specific recognition category."
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">
                      Major Professional Achievements (Maximum 500 Words) *
                    </label>
                    <Textarea
                      rows={3}
                      value={formData.majorAchievements}
                      onChange={(e) => handleInputChange("majorAchievements", e.target.value)}
                      placeholder="Outline measurable career milestones, patents, discoveries, growth metrics, or transformative initiatives."
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">
                      Key Contributions to the Field (Maximum 500 Words) *
                    </label>
                    <Textarea
                      rows={3}
                      value={formData.keyContributions}
                      onChange={(e) => handleInputChange("keyContributions", e.target.value)}
                      placeholder="Describe the long-term significance, innovation, originality, or industry/societal benefits produced."
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Research / Publications / DOI Links (Optional)</label>
                      <Textarea
                        rows={2}
                        value={formData.researchPublications}
                        onChange={(e) => handleInputChange("researchPublications", e.target.value)}
                        placeholder="List top papers, DOI URLs, or patent identifiers"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Previous Awards and Recognitions (Optional)</label>
                      <Textarea
                        rows={2}
                        value={formData.previousAwards}
                        onChange={(e) => handleInputChange("previousAwards", e.target.value)}
                        placeholder="List any notable fellowship, honor, or past industry prize"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: ACHIEVEMENT EVIDENCE (UPLOAD) */}
              {step === 4 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="border-b border-border/50 pb-3">
                    <h3 className="text-lg font-serif font-bold text-foreground">
                      Step 4: Achievement Evidence & Document Uploads
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Upload supporting documents. Maximum 10 MB per file (PDF, JPG, PNG). Files are securely processed for screening.
                    </p>
                  </div>

                  {/* Document upload fields */}
                  <div className="space-y-4">
                    {[
                      { key: "Professional CV / Resume", required: true, hint: "Comprehensive academic or industrial CV (PDF)" },
                      { key: "Educational Qualifications", required: false, hint: "Highest degree certificate or transcripts" },
                      { key: "Professional Experience Evidence", required: false, hint: "Appointment letters or corporate profile" },
                      { key: "Research Publications / DOI Dossier", required: false, hint: "Key papers, preprints, or bibliographic list" },
                      { key: "Patent / Innovation Documentation", required: false, hint: "Patent filing proofs or architecture whitepapers" },
                      { key: "Achievement Portfolio / Case Studies", required: false, hint: "Project decks, metrics, or client validations" },
                      { key: "Institutional Recommendation Letter", required: false, hint: "Endorsement from dean, supervisor, or director" },
                      { key: "Additional Supporting Documents", required: false, hint: "Any other verifiable evidence" }
                    ].map((item, idx) => {
                      const attached = formData.documents.find(d => d.category === item.key);
                      return (
                        <div key={idx} className="p-3.5 rounded-xl bg-muted/30 border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                              {item.key} {item.required && <span className="text-destructive">*</span>}
                            </div>
                            <div className="text-[11px] text-muted-foreground">
                              {item.hint}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {attached ? (
                              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg text-xs text-emerald-400">
                                <FileText className="h-4 w-4" />
                                <span className="max-w-[150px] truncate">{attached.name}</span>
                                <button 
                                  type="button" 
                                  onClick={() => handleRemoveDoc(item.key)}
                                  className="text-muted-foreground hover:text-destructive ml-1"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ) : (
                              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-semibold text-foreground hover:bg-muted transition-colors">
                                <Upload className="h-3.5 w-3.5 text-primary" /> Attach File
                                <input 
                                  type="file" 
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  className="hidden"
                                  onChange={(e) => handleFileUpload(item.key, e)}
                                />
                              </label>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 text-[11px] text-muted-foreground space-y-1">
                    <span className="font-semibold text-foreground">Upload Specifications: </span>
                    PDF, JPG, JPEG, PNG. Maximum 10 MB per file. Secure file validation. No public exposure of submitted evidence.
                  </div>
                </div>
              )}

              {/* STEP 5: NOMINATOR INFORMATION */}
              {step === 5 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="border-b border-border/50 pb-3">
                    <h3 className="text-lg font-serif font-bold text-foreground">
                      Step 5: Nominator Information
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {formData.nominationType === "Self-Nomination"
                        ? "This application is marked as a Self-Nomination. Your information from Step 1 serves as the primary contact."
                        : "Please provide the nominator's identity and professional relationship with the nominee."}
                    </p>
                  </div>

                  {formData.nominationType === "Self-Nomination" ? (
                    <div className="p-6 rounded-2xl bg-muted/20 border border-dashed border-border text-center space-y-2">
                      <User className="h-10 w-10 text-primary mx-auto" />
                      <h4 className="text-sm font-semibold text-foreground">Self-Nomination Selected</h4>
                      <p className="text-xs text-muted-foreground max-w-md mx-auto">
                        Candidate <strong>{formData.firstName} {formData.lastName}</strong> is submitting directly on their own behalf. No secondary nominator dossier required.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1">Nominator Full Name *</label>
                          <Input
                            value={formData.nominator.fullName}
                            onChange={(e) => handleNominatorChange("fullName", e.target.value)}
                            placeholder="Full name of nominator"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1">Nominator Designation *</label>
                          <Input
                            value={formData.nominator.designation}
                            onChange={(e) => handleNominatorChange("designation", e.target.value)}
                            placeholder="e.g. Dean / Vice President / Director"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1">Organization *</label>
                          <Input
                            value={formData.nominator.organization}
                            onChange={(e) => handleNominatorChange("organization", e.target.value)}
                            placeholder="Institution / Company"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1">Relationship with Nominee *</label>
                          <Input
                            value={formData.nominator.relationship}
                            onChange={(e) => handleNominatorChange("relationship", e.target.value)}
                            placeholder="e.g. Department Chair / Collaborative Partner"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1">Email Address *</label>
                          <Input
                            type="email"
                            value={formData.nominator.email}
                            onChange={(e) => handleNominatorChange("email", e.target.value)}
                            placeholder="nominator@domain.com"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-xs font-medium text-foreground block mb-1">Contact Number *</label>
                          <Input
                            value={formData.nominator.contactNumber}
                            onChange={(e) => handleNominatorChange("contactNumber", e.target.value)}
                            placeholder="+1 555-0199 / +91 ..."
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-foreground block mb-1">Reason for Recommendation *</label>
                        <Textarea
                          rows={3}
                          value={formData.nominator.reasonForRecommendation}
                          onChange={(e) => handleNominatorChange("reasonForRecommendation", e.target.value)}
                          placeholder="Why do you strongly recommend this candidate for recognition?"
                          required
                        />
                      </div>

                      <div className="flex items-start gap-2.5 pt-2">
                        <Checkbox
                          id="nom-confirm"
                          checked={formData.nominator.confirmed}
                          onCheckedChange={(checked) => handleNominatorChange("confirmed", !!checked)}
                        />
                        <label htmlFor="nom-confirm" className="text-xs text-muted-foreground leading-snug cursor-pointer">
                          I confirm that I am recommending this candidate based on verifiable merit and personal knowledge of their achievements.
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 6: DECLARATION & CONSENT */}
              {step === 6 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="border-b border-border/50 pb-3">
                    <h3 className="text-lg font-serif font-bold text-foreground">
                      Step 6: Declaration & Ethical Consent
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Please review each mandatory compliance statement before submitting your nomination dossier.
                    </p>
                  </div>

                  <div className="space-y-3.5 bg-muted/20 p-4 sm:p-6 rounded-2xl border border-border/60">
                    {[
                      { key: "accurateAndComplete", text: "I confirm that the information submitted is accurate and complete." },
                      { key: "authorizeVerification", text: "I authorize EminSphere to verify the information and supporting documents provided." },
                      { key: "noGuaranteeUnderstood", text: "I understand that submission of a nomination does not guarantee selection." },
                      { key: "agreeToPolicies", text: "I agree to the published nomination, evaluation, privacy, and recognition policies." },
                      { key: "consentPersonalProcessing", text: "I consent to the processing of my personal information for nomination evaluation and administration." },
                      { key: "noPublicWithoutConsent", text: "I understand that my information will not be published publicly without the required consent." }
                    ].map((item) => (
                      <div key={item.key} className="flex items-start gap-3">
                        <Checkbox
                          id={item.key}
                          checked={(formData.declarations as any)[item.key]}
                          onCheckedChange={(checked) => handleDeclarationChange(item.key, !!checked)}
                          className="mt-0.5"
                        />
                        <label htmlFor={item.key} className="text-xs sm:text-sm text-foreground font-medium leading-relaxed cursor-pointer">
                          {item.text} <span className="text-destructive">*</span>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-card border border-border/60 flex items-start gap-3">
                    <Checkbox
                      id="receiveAnnouncements"
                      checked={formData.declarations.receiveAnnouncements}
                      onCheckedChange={(checked) => handleDeclarationChange("receiveAnnouncements", !!checked)}
                      className="mt-0.5"
                    />
                    <label htmlFor="receiveAnnouncements" className="text-xs text-muted-foreground leading-snug cursor-pointer">
                      (Optional) I agree to receive future EminSphere research conference announcements and scholarly communications.
                    </label>
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="border-t border-border/50 pt-6 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={prevStep}
                    className="text-xs font-semibold gap-1.5"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" /> Previous Step
                  </Button>
                ) : (
                  <div />
                )}

                {step < 6 ? (
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="bg-primary text-white hover:bg-primary/90 font-bold px-6 text-xs gap-1.5 shadow-gold"
                  >
                    Next Step <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary text-white hover:bg-primary/90 font-black px-8 text-xs uppercase tracking-wider shadow-gold"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Nomination Dossier"}
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardsApply;
