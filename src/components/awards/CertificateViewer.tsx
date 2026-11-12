import React, { useEffect, useState } from "react";
import { CertificateRecord } from "@/data/awardsData";
import { AwardsStorageService } from "@/services/awardsStorage";
import { Button } from "@/components/ui/button";
import { Download, Printer, ShieldCheck, CheckCircle2, AlertOctagon, Share2 } from "lucide-react";
import { toast } from "sonner";

interface CertificateViewerProps {
  certificate: CertificateRecord;
  showActions?: boolean;
}

export const CertificateViewer: React.FC<CertificateViewerProps> = ({ certificate, showActions = true }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  useEffect(() => {
    AwardsStorageService.generateQRCodeDataUrl(certificate.verificationUrl).then((url) => {
      setQrDataUrl(url);
    });
  }, [certificate.verificationUrl]);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(certificate.verificationUrl);
      toast.success("Verification link copied to clipboard!");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Action Bar */}
      {showActions && (
        <div className="w-full max-w-4xl flex flex-wrap items-center justify-between gap-3 mb-4 print:hidden bg-card/60 backdrop-blur-md p-3 rounded-xl border border-border">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                certificate.status === "Valid"
                  ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/30"
                  : certificate.status === "Suspended"
                  ? "bg-amber-500/10 text-amber-500 border border-amber-500/30"
                  : "bg-destructive/10 text-destructive border border-destructive/30"
              }`}
            >
              {certificate.status === "Valid" ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : (
                <AlertOctagon className="h-3.5 w-3.5" />
              )}
              Status: {certificate.status}
            </span>
            <span className="text-xs text-muted-foreground font-mono">ID: {certificate.certificateId}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleShare} className="text-xs gap-1.5">
              <Share2 className="h-3.5 w-3.5" /> Copy Link
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrint} className="text-xs gap-1.5">
              <Printer className="h-3.5 w-3.5" /> Print / Save PDF
            </Button>
          </div>
        </div>
      )}

      {/* Landscape A4 Certificate Container */}
      <div
        id="printable-certificate"
        className="w-full max-w-4xl aspect-[1.414/1] bg-[#070b14] text-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-2xl border-4 border-[#c5a059]/40 relative overflow-hidden flex flex-col justify-between selection:bg-[#c5a059]/30"
        style={{
          boxShadow: "0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(197, 160, 89, 0.15)",
        }}
      >
        {/* Intricate Certificate Border Overlay */}
        <div className="absolute inset-2 sm:inset-3 border border-[#c5a059]/30 pointer-events-none rounded-xl" />
        <div className="absolute inset-3 sm:inset-5 border-2 border-[#c5a059]/20 pointer-events-none rounded-lg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#101b33]/40 via-[#070b14] to-[#04060a] pointer-events-none" />

        {/* Corner Ornament Accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#c5a059]/70 pointer-events-none" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#c5a059]/70 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#c5a059]/70 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#c5a059]/70 pointer-events-none" />

        {/* Certificate Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <img src="/eminsphere-logo.png" alt="Watermark" className="w-96 h-96 object-contain" />
        </div>

        {/* TOP SECTION: Header & Organization */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#c5a059]/25 pb-4 sm:pb-5">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white p-1 shadow-md border border-[#c5a059]/50 flex items-center justify-center shrink-0">
              <img src="/eminsphere-logo.png" alt="EminSphere" className="h-full w-full object-contain rounded-full" />
            </div>
            <div>
              <div className="font-serif font-black text-xl sm:text-2xl tracking-tight text-white flex items-center gap-2">
                EminSphere™
                <span className="text-[10px] tracking-widest font-sans font-bold uppercase text-[#c5a059] px-2 py-0.5 rounded bg-[#c5a059]/10 border border-[#c5a059]/30">
                  Global Honors
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest font-sans font-semibold">
                Global Innovation & Excellence Awards
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[#c5a059] font-bold">
              Official Recognition Record
            </div>
            <div className="text-xs sm:text-sm font-mono text-white/80 font-bold mt-0.5">
              {certificate.certificateId}
            </div>
          </div>
        </div>

        {/* CENTER SECTION: Conferred Details */}
        <div className="relative z-10 my-auto text-center py-4 sm:py-6 space-y-2 sm:space-y-3">
          <div className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#c5a059] font-serif font-bold">
            Certificate of Recognition
          </div>

          <p className="text-[11px] sm:text-xs text-white/70 italic font-serif">
            This certificate is proudly presented to
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f3e5c8] to-[#c5a059] py-1">
            {certificate.recipientName}
          </h2>

          <p className="text-[11px] sm:text-xs text-white/70 max-w-xl mx-auto leading-relaxed">
            In recognition of outstanding achievements, pioneering innovation, and distinguished professional contributions in
          </p>

          <div className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide px-4 py-1 inline-block bg-white/5 rounded-full border border-white/10">
            {certificate.field}
          </div>

          <div className="pt-2 sm:pt-3">
            <div className="text-[10px] uppercase tracking-widest text-[#c5a059] font-semibold">
              Official Award Title
            </div>
            <div className="text-base sm:text-xl md:text-2xl font-serif font-bold text-[#f3e5c8] mt-0.5">
              {certificate.recognitionTitle}
            </div>
            <div className="text-[10px] sm:text-xs text-white/60 tracking-wider mt-0.5">
              Category: {certificate.awardCategory} • Cycle {certificate.awardYear}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Signatories, Issue Date, QR Code & Live URL */}
        <div className="relative z-10 pt-4 sm:pt-5 border-t border-[#c5a059]/25 flex flex-wrap items-end justify-between gap-4 text-left">
          {/* Signatory */}
          <div className="space-y-1">
            <div className="font-serif italic text-base sm:text-lg text-[#c5a059]">
              {certificate.signatoryName}
            </div>
            <div className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
              {certificate.signatoryTitle}
            </div>
            <div className="text-[9px] sm:text-[10px] text-white/60">
              EminSphere™ Global Innovation & Excellence Council
            </div>
          </div>

          {/* Issue Date & Status */}
          <div className="text-center sm:text-left space-y-0.5">
            <div className="text-[9px] uppercase tracking-wider text-white/50">Date of Conformance</div>
            <div className="text-xs sm:text-sm font-semibold text-white">{certificate.issueDate}</div>
            <div className="text-[9px] text-[#c5a059] flex items-center gap-1 font-mono">
              <ShieldCheck className="h-3 w-3 inline" /> Tamper-Proof Cryptographic ID
            </div>
          </div>

          {/* QR Code & Direct URL */}
          <div className="flex items-center gap-3 ml-auto">
            {qrDataUrl && (
              <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white p-1 rounded-md shadow-md shrink-0 border border-[#c5a059]">
                <img src={qrDataUrl} alt="Certificate Verification QR Code" className="h-full w-full object-contain" />
              </div>
            )}
            <div className="text-right">
              <div className="text-[9px] uppercase tracking-wider text-[#c5a059] font-bold">
                Scan to Verify Live
              </div>
              <div className="text-[9px] text-white/70 font-mono break-all max-w-[170px] leading-tight mt-0.5">
                eminsphere.com/verify-certificate/{certificate.certificateId}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
