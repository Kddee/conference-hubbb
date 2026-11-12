import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MapPin, 
  Landmark, 
  Send, 
  CheckCircle2, 
  Building2, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { toast } from "sonner";

export const AwardsContact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    referenceNumber: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      toast.success("Inquiry dispatched to EminSphere Awards & Recognition Desk!");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Contact Awards & Recognition Team | EminSphere"
        description="Get in touch with the official EminSphere Awards & Recognition Council for nomination inquiries, verification queries, and programme information."
        canonical="https://www.eminsphere.com/awards-recognition/contact"
      />

      <PageHero
        eyebrow="Direct Support"
        title="Contact the Awards & Recognition Team"
        description="For nomination assistance, application queries, credential verification support, and programme information, connect with our official team."
        variant="aurora"
      />

      <div className="container py-16 max-w-5xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Office & Verification Details */}
          <div className="md:col-span-5 space-y-6">
            <Card className="p-6 bg-card border-border/70 rounded-2xl space-y-5">
              <div>
                <h3 className="text-xl font-serif font-bold text-foreground">EminSphere™ Honours Desk</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Global Academic, Research & Innovation Recognition Council
                </p>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-muted-foreground">
                <li className="flex gap-3 items-center">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href="mailto:info@eminsphere.com" className="text-foreground hover:text-accent font-medium">
                    info@eminsphere.com
                  </a>
                </li>

                <li className="flex gap-3 items-start">
                  <MapPin className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    Ground Floor, RAHEJA WOODS,<br />
                    Kalyani Nagar, Pune,<br />
                    Maharashtra 411006, India
                  </div>
                </li>

                <li className="flex gap-3 items-start">
                  <Landmark className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    GSTIN: 27KNJPS9156R1ZH<br />
                    MSME Registered Enterprise
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-border/50 text-xs text-muted-foreground space-y-2">
                <div className="font-semibold text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" /> Operational Hours
                </div>
                <p>Monday – Friday: 09:30 – 18:30 IST</p>
                <p>Inquiries received over weekends are answered on the following business day.</p>
              </div>
            </Card>
          </div>

          {/* Contact Inquiry Form */}
          <div className="md:col-span-7">
            <Card className="p-6 sm:p-8 bg-card border-border/70 rounded-2xl shadow-elegant">
              {submitted ? (
                <div className="p-8 text-center space-y-4 animate-fade-in">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Your query has been logged with the Awards Desk. Our administrative team will reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", subject: "", referenceNumber: "", message: "" });
                    }}
                  >
                    Submit Another Query
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-foreground">Submit Application Inquiry</h3>
                    <p className="text-xs text-muted-foreground">
                      Reference your Application Reference ID if you have an active submission.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Full Name *</label>
                      <Input
                        value={formData.fullName}
                        onChange={(e) => setFormData(p => ({ ...p, fullName: e.target.value }))}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        placeholder="name@domain.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Subject *</label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                        placeholder="e.g. Nomination Status / Dossier Inquiry"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground block mb-1">Nomination Reference (Optional)</label>
                      <Input
                        value={formData.referenceNumber}
                        onChange={(e) => setFormData(p => ({ ...p, referenceNumber: e.target.value.toUpperCase() }))}
                        placeholder="ES-GIA-2027-XXXXX"
                        className="font-mono uppercase"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground block mb-1">Message *</label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="Please specify your question or request..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full bg-primary text-white hover:bg-primary/90 font-bold text-xs uppercase tracking-wider h-11 shadow-gold gap-2"
                  >
                    <Send className="h-3.5 w-3.5" />
                    {isSending ? "Sending Message..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsContact;
