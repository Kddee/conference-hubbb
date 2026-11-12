import React from "react";
import { Award, ShieldCheck, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DigitalBadgeProps {
  recipientName?: string;
  categoryTitle: string;
  awardYear: number;
  certificateId: string;
  verificationUrl?: string;
}

export const DigitalBadge: React.FC<DigitalBadgeProps> = ({
  recipientName,
  categoryTitle,
  awardYear,
  certificateId,
  verificationUrl = `https://www.eminsphere.com/verify-certificate/${certificateId}`
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Visual Badge Card */}
      <div 
        id={`badge-${certificateId}`}
        className="w-72 sm:w-80 rounded-2xl p-6 bg-gradient-to-b from-[#0b1329] via-[#080d1c] to-[#04060c] border-2 border-[#c5a059]/50 shadow-2xl relative overflow-hidden text-center text-white"
        style={{
          boxShadow: '0 15px 35px -10px rgba(0,0,0,0.7), 0 0 25px rgba(197, 160, 89, 0.2)'
        }}
      >
        {/* Shimmer overlay */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo Crest */}
          <div className="h-16 w-16 rounded-full bg-white p-1 border-2 border-[#c5a059] shadow-md flex items-center justify-center mb-3">
            <img src="/eminsphere-logo.png" alt="EminSphere" className="h-full w-full object-contain rounded-full" />
          </div>

          <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c5a059] mb-1">
            Official Digital Honor
          </div>

          <div className="text-sm font-serif font-black tracking-wider uppercase text-white mb-2">
            EMINSPHERE RECOGNITION AWARDEE
          </div>

          {recipientName && (
            <div className="text-base font-serif font-bold text-[#f3e5c8] mb-1">
              {recipientName}
            </div>
          )}

          <div className="text-xs font-medium text-white/80 line-clamp-2 px-2 mb-3">
            {categoryTitle}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 text-[#c5a059] text-xs font-bold mb-4">
            <Award className="h-3.5 w-3.5" /> Cycle {awardYear} Honoree
          </div>

          <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60 font-mono">
            <span>ID: {certificateId}</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="h-3 w-3" /> Verified
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          asChild 
          className="text-xs gap-1.5 border-border hover:bg-muted"
        >
          <a href={verificationUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5" /> View Public Record
          </a>
        </Button>
      </div>
    </div>
  );
};
