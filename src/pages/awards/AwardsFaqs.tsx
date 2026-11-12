import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { PageHero } from "@/components/layout/PageHero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/awardsData";
import { Search, HelpCircle, ArrowRight, Mail } from "lucide-react";

export const AwardsFaqs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = FAQS.filter(
    faq => faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
           faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Frequently Asked Questions (FAQs) | EminSphere Awards"
        description="Find answers to all common questions regarding eligibility, nomination procedures, verification, evaluation criteria, and independent recognition status."
        canonical="https://www.eminsphere.com/awards-recognition/faqs"
      />

      <PageHero
        eyebrow="Clarifications & Support"
        title="Frequently Asked Questions"
        description="Comprehensive answers concerning nomination procedures, eligibility frameworks, independent evaluation standards, and credential verification."
        variant="bubbles"
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full bg-primary text-white font-bold px-8 shadow-gold">
            <Link to="/awards-recognition/apply">
              Apply for Recognition <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/awards-recognition/contact">
              Contact Awards Team
            </Link>
          </Button>
        </div>
      </PageHero>

      <div className="container py-16 max-w-4xl px-4 sm:px-6 space-y-10">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs by question or keyword..."
            className="pl-10 text-xs bg-card h-12 rounded-2xl border-border"
          />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`faq-${idx}`} 
              className="bg-card border border-border/70 rounded-2xl px-6 py-1 shadow-sm"
            >
              <AccordionTrigger className="text-left font-serif font-bold text-sm sm:text-base text-foreground hover:text-primary transition-colors py-4">
                <span className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#c5a059] shrink-0">Q{idx + 1}.</span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2 pb-5 border-t border-border/40">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Help Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border text-center space-y-3 max-w-2xl mx-auto">
          <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary mx-auto flex items-center justify-center">
            <Mail className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-serif font-bold text-foreground">Have an Unanswered Question?</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Our official nomination support desk is available to assist you with eligibility inquiries or dossier verification.
          </p>
          <Button asChild variant="outline" size="sm" className="font-semibold text-xs">
            <Link to="/awards-recognition/contact">
              Submit an Inquiry to Awards Desk
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AwardsFaqs;
