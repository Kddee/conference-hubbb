import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { CertificateRecord } from "@/data/awardsData";
import { AwardsStorageService } from "@/services/awardsStorage";
import { CertificateViewer } from "@/components/awards/CertificateViewer";
import { DigitalBadge } from "@/components/awards/DigitalBadge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  AlertOctagon, 
  AlertCircle, 
  QrCode, 
  Clock, 
  Award, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";

export const AwardsVerifyCertificate: React.FC = () => {
  const { id: routeId } = useParams();
  const [searchParams] = useSearchParams();
  const queryId = searchParams.get("id");

  const [certInput, setCertInput] = useState<string>("");
  const [searched, setSearched] = useState<boolean>(false);
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);
  const [notFoundId, setNotFoundId] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"certificate" | "badge">("certificate");

  const handleVerify = (idToVerify: string) => {
    const cleanId = idToVerify.trim().toUpperCase();
    if (!cleanId) return;

    setSearched(true);
    setCertInput(cleanId);

    const found = AwardsStorageService.getCertificateById(cleanId);
    if (found) {
      setCertificate(found);
      setNotFoundId("");
    } else {
      setCertificate(null);
      setNotFoundId(cleanId);
    }
  };

  useEffect(() => {
    const target = routeId || queryId;
    if (target) {
      handleVerify(target);
    }
  }, [routeId, queryId]);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleVerify(certInput);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-28 sm:py-36">
      <SEOHead 
        title="Verify EminSphere Award Certificate | EminSphere"
        description="Verify the authenticity and status of an EminSphere recognition certificate using its unique certificate identification number."
        canonical="https://www.eminsphere.com/verify-certificate"
      />

      <div className="container max-w-5xl px-4 sm:px-6 space-y-10">
        {/* Page Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-card border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" /> Global Credential Verification
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-foreground tracking-tight">
            Verify an EminSphere Recognition Certificate
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            The EminSphere certificate verification portal enables institutions, employers, and peers to check the authenticity and status of certificates issued under eligible recognition programmes.
          </p>
        </div>

        {/* Verification Search Bar */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={onSearchSubmit} className="flex flex-col sm:flex-row gap-2 bg-card p-2 rounded-2xl border border-border shadow-elegant">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={certInput}
                onChange={(e) => setCertInput(e.target.value.toUpperCase())}
                placeholder="Enter Certificate ID (e.g. ES-GIA-2027-00001)"
                className="pl-10 font-mono uppercase bg-transparent border-none text-sm h-12 focus-visible:ring-0"
                required
              />
            </div>
            <Button type="submit" size="lg" className="h-12 px-8 bg-primary text-white hover:bg-primary/90 font-bold text-xs uppercase tracking-wider shadow-gold">
              Verify Certificate
            </Button>
          </form>

          {/* Quick Sample Links */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>Sample valid credentials:</span>
            <button 
              type="button" 
              onClick={() => handleVerify("ES-GIA-2027-00001")}
              className="font-mono text-accent hover:underline font-semibold"
            >
              ES-GIA-2027-00001
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => handleVerify("ES-GIA-2027-00002")}
              className="font-mono text-accent hover:underline font-semibold"
            >
              ES-GIA-2027-00002
            </button>
            <span>•</span>
            <button 
              type="button" 
              onClick={() => handleVerify("ES-GIA-2026-00088")}
              className="font-mono text-accent hover:underline font-semibold"
            >
              ES-GIA-2026-00088
            </button>
          </div>
        </div>

        {/* VERIFICATION RESULT */}
        {searched && (
          <div className="animate-fade-in space-y-8">
            {certificate ? (
              <div className="space-y-8">
                {/* Status Callout Card */}
                <div 
                  className={`p-6 sm:p-8 rounded-3xl border-2 flex flex-col md:flex-row items-center justify-between gap-6 ${
                    certificate.status === 'Valid'
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : certificate.status === 'Suspended'
                      ? 'bg-amber-500/10 border-amber-500/30'
                      : 'bg-destructive/10 border-destructive/30'
                  }`}
                >
                  <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="h-16 w-16 rounded-2xl bg-card flex items-center justify-center shrink-0 shadow-md">
                      {certificate.status === 'Valid' ? (
                        <CheckCircle2 className="h-9 w-9 text-emerald-400" />
                      ) : (
                        <AlertOctagon className="h-9 w-9 text-destructive" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
                        Verification Status
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-black text-foreground">
                        Official Record: {certificate.status}
                      </h2>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                        Verified at: {new Date().toUTCString()}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-center md:items-end gap-1">
                    <span className="text-xs font-mono font-bold text-accent bg-card px-3 py-1 rounded-full border border-border">
                      {certificate.certificateId}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Cycle {certificate.awardYear} • {certificate.issuingOrganization}
                    </span>
                  </div>
                </div>

                {/* Audit Details Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-card border border-border space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Recipient</span>
                    <div className="text-base font-bold text-foreground">{certificate.recipientName}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Recognition Title</span>
                    <div className="text-base font-bold text-[#c5a059]">{certificate.recognitionTitle}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Award Category</span>
                    <div className="text-base font-bold text-foreground">{certificate.awardCategory}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Conferred Date</span>
                    <div className="text-base font-bold text-foreground">{certificate.issueDate}</div>
                  </div>
                </div>

                {/* Toggle View: Official Certificate vs Digital Badge */}
                <div className="flex justify-center border-b border-border pb-4 gap-3">
                  <Button 
                    variant={activeTab === "certificate" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("certificate")}
                    className="text-xs font-bold"
                  >
                    Official Landscape Certificate
                  </Button>
                  <Button 
                    variant={activeTab === "badge" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("badge")}
                    className="text-xs font-bold"
                  >
                    Digital Recognition Badge
                  </Button>
                </div>

                {/* Render Selected View */}
                {activeTab === "certificate" ? (
                  <CertificateViewer certificate={certificate} />
                ) : (
                  <DigitalBadge 
                    recipientName={certificate.recipientName}
                    categoryTitle={certificate.recognitionTitle}
                    awardYear={certificate.awardYear}
                    certificateId={certificate.certificateId}
                  />
                )}

                {/* Privacy & Compliance Assurance Notice */}
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/60 text-xs text-muted-foreground space-y-1 text-center max-w-2xl mx-auto">
                  <div className="font-semibold text-foreground flex items-center justify-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" /> Privacy & Data Protection Safeguards
                  </div>
                  <p>
                    In accordance with applicable privacy standards, only publicly authorized recognition parameters are displayed. Sensitive applicant documents, personal phone numbers, and scoring sheets remain strictly confidential.
                  </p>
                </div>
              </div>
            ) : (
              /* NOT FOUND STATE */
              <div className="p-8 sm:p-12 rounded-3xl bg-card border-2 border-dashed border-border text-center space-y-4 max-w-xl mx-auto">
                <div className="h-16 w-16 rounded-full bg-destructive/10 text-destructive mx-auto flex items-center justify-center">
                  <AlertCircle className="h-8 w-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    Certificate Not Found
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    No certificate matching reference code <strong className="font-mono text-foreground">{notFoundId}</strong> was found in our active registry.
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Please confirm that the certificate identifier was typed correctly. If you believe this is an error, please reach out to <a href="mailto:info@eminsphere.com" className="text-primary hover:underline font-semibold">info@eminsphere.com</a> with a copy of your credential.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardsVerifyCertificate;
