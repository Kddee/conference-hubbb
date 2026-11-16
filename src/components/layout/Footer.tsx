import { Link } from "react-router-dom";
import { Mail, Linkedin, Youtube, MapPin, Landmark } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground mt-16 sm:mt-24">
      <div className="container py-12 sm:py-16 space-y-10 sm:space-y-12">
        {/* Top Section: About (left) + Contact & Office (right) */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 items-start">
          {/* About Eminsphere */}
          <div className="space-y-5 sm:space-y-6 lg:col-span-7">
            <div>
              <h2 className="font-serif font-black text-2xl text-foreground tracking-tight flex items-center gap-2">
                Eminsphere™
                <span className="text-[10px] tracking-widest font-sans font-bold uppercase text-[#c5a059] px-2 py-0.5 rounded bg-[#c5a059]/10 border border-[#c5a059]/30">
                  Global Platform
                </span>
              </h2>
              <div className="text-sm text-muted-foreground mt-1">Global Academic, Research & Innovation Platform</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Eminsphere™ is a professionally structured organization operating in alignment with applicable Indian regulatory frameworks, fostering research dissemination, global conferences, and merit-based professional honours.
            </p>
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-muted/50 text-xs text-muted-foreground border border-border">
                MSME Registered Enterprise
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-muted/50 text-xs text-muted-foreground border border-border">
                Registration details available upon request / as applicable
              </span>
            </div>

            {/* Follow Us Buttons */}
            <div className="pt-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">Follow Us</div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/company/106142250/admin/dashboard/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-9 w-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth shadow-sm hover:shadow-gold" 
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.youtube.com/@Eminsphere" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-9 w-9 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-smooth shadow-sm hover:shadow-gold" 
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Office */}
          <div className="lg:col-span-5 bg-muted/20 border border-border/40 rounded-2xl p-5 sm:p-6 space-y-4">
            <h4 className="font-sans font-bold text-base text-foreground">Contact & Office</h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex gap-3 items-center">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="mailto:info@eminsphere.com" className="hover:text-accent transition-colors font-medium">info@eminsphere.com</a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="h-4 w-4 shrink-0 text-destructive mt-0.5" />
                <div className="leading-relaxed text-xs">
                  Ground Floor, RAHEJA WOODS,<br />
                  Kalyani Nagar, Pune, Maharashtra 411006, India
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Landmark className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                <div className="leading-relaxed text-xs">
                  GSTIN: 27KNJPS9156R1ZH • MSME Registered
                </div>
              </li>
            </ul>

            <div className="pt-3 border-t border-border/40 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
              <Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
              <span className="text-border select-none">•</span>
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <span className="text-border select-none">•</span>
              <Link to="/awards-recognition/admin" className="text-muted-foreground/60 hover:text-muted-foreground transition-colors">Staff Admin Portal</Link>
            </div>
          </div>
        </div>

        {/* HORIZONTAL SECTIONS DIRECTLY BELOW FOLLOW US / TOP SECTION */}
        <div className="border-t border-border/50 pt-8 space-y-8">
          {/* Conferences - Horizontal Links */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-foreground">Conferences</h4>
              <div className="h-px flex-1 bg-border/40"></div>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
              <Link to="/upcoming-conferences" className="hover:text-accent transition-colors font-medium">Upcoming Conferences</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/recent-conferences" className="hover:text-accent transition-colors font-medium">Recent Conferences</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/recent-proceedings" className="hover:text-accent transition-colors font-medium">Digital Proceedings</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/past-speakers" className="hover:text-accent transition-colors font-medium">Past Speakers</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/innovation-challenge-2026" className="hover:text-accent transition-colors font-medium">Innovation Challenge</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/apply-reviewer" className="hover:text-accent transition-colors font-medium">Reviewer Panel</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/apply-advisory" className="hover:text-accent transition-colors font-medium">Join Advisory</Link>
            </div>
          </div>

          {/* Awards & Recognition - Horizontal Links */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#c5a059]">Awards & Recognition</h4>
              <div className="h-px flex-1 bg-[#c5a059]/20"></div>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground">
              <Link to="/awards-recognition" className="hover:text-[#c5a059] transition-colors font-medium">Awards Overview</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/awards-recognition/about" className="hover:text-[#c5a059] transition-colors font-medium">About the Awards</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/awards-recognition/categories" className="hover:text-[#c5a059] transition-colors font-medium">18 Award Categories</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/awards-recognition/eligibility" className="hover:text-[#c5a059] transition-colors font-medium">Eligibility & Criteria</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/awards-recognition/nomination-process" className="hover:text-[#c5a059] transition-colors font-medium">Nomination Process</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/awards-recognition/governance" className="hover:text-[#c5a059] transition-colors font-medium">Awards Committee</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/awards-recognition/apply" className="hover:text-[#c5a059] transition-colors font-semibold text-primary">Apply for Recognition</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/awards-recognition/awardees" className="hover:text-[#c5a059] transition-colors font-medium">Recipient Directory</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/verify-certificate" className="hover:text-[#c5a059] transition-colors font-medium">Verify Certificate</Link>
              <span className="text-border/60 select-none">•</span>
              <Link to="/awards-recognition/policies" className="hover:text-[#c5a059] transition-colors font-medium">Policies & Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 bg-background/50">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Eminsphere™. All rights reserved. Non-academic professional recognitions.</p>
          <div className="flex gap-6">
            <Link to="/awards-recognition/policies" className="hover:text-[#c5a059] transition-colors">Awards Disclaimer</Link>
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
