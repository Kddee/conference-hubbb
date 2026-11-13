import { Link } from "react-router-dom";
import { Mail, Linkedin, Youtube, MapPin, Landmark, Award, ShieldCheck } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground mt-16 sm:mt-24">
      <div className="container py-12 sm:py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Column 1: About */}
        <div className="space-y-5 sm:space-y-6 lg:col-span-2">
          <div>
            <h2 className="font-serif font-black text-2xl text-foreground tracking-tight flex items-center gap-2">
              Eminsphere™
              <span className="text-[10px] tracking-widest font-sans font-bold uppercase text-[#c5a059] px-2 py-0.5 rounded bg-[#c5a059]/10 border border-[#c5a059]/30">
                Global Platform
              </span>
            </h2>
            <div className="text-sm text-muted-foreground mt-1">Global Academic, Research & Innovation Platform</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Eminsphere™ is a professionally structured organization operating in alignment with applicable Indian regulatory frameworks, fostering research dissemination, global conferences, and merit-based professional honours.
          </p>
          <div className="space-y-2 flex flex-col items-start">
            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-muted/50 text-xs text-muted-foreground border border-border">
              MSME Registered Enterprise
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-muted/50 text-xs text-muted-foreground border border-border">
              Registration details available upon request / as applicable
            </span>
          </div>

          <div className="pt-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-2">Follow Us</div>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/106142250/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-smooth shadow-sm hover:shadow-gold">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.youtube.com/@Eminsphere" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-smooth shadow-sm hover:shadow-gold">
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Conferences & Programs */}
        <div>
          <h4 className="font-sans font-bold text-base mb-4 text-foreground">Conferences</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/upcoming-conferences" className="hover:text-accent transition-colors">Upcoming Conferences</Link></li>
            <li><Link to="/recent-conferences" className="hover:text-accent transition-colors">Recent Conferences</Link></li>
            <li><Link to="/recent-proceedings" className="hover:text-accent transition-colors">Digital Proceedings</Link></li>
            <li><Link to="/past-speakers" className="hover:text-accent transition-colors">Past Speakers</Link></li>
            <li><Link to="/innovation-challenge-2026" className="hover:text-accent transition-colors">Innovation Challenge</Link></li>
            <li><Link to="/apply-reviewer" className="hover:text-accent transition-colors">Reviewer Panel</Link></li>
            <li><Link to="/apply-advisory" className="hover:text-accent transition-colors">Join Advisory</Link></li>
          </ul>
        </div>

        {/* Column 3: Awards & Recognition (New Dedicated Column) */}
        <div>
          <h4 className="font-sans font-bold text-base mb-4 text-[#c5a059]">
            Awards & Recognition
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/awards-recognition" className="hover:text-[#c5a059] transition-colors">Awards Overview</Link></li>
            <li><Link to="/awards-recognition/about" className="hover:text-[#c5a059] transition-colors">About the Awards</Link></li>
            <li><Link to="/awards-recognition/categories" className="hover:text-[#c5a059] transition-colors">18 Award Categories</Link></li>
            <li><Link to="/awards-recognition/eligibility" className="hover:text-[#c5a059] transition-colors">Eligibility & Criteria</Link></li>
            <li><Link to="/awards-recognition/nomination-process" className="hover:text-[#c5a059] transition-colors">Nomination Process</Link></li>
            <li><Link to="/awards-recognition/governance" className="hover:text-[#c5a059] transition-colors">Awards Committee</Link></li>
            <li><Link to="/awards-recognition/apply" className="hover:text-[#c5a059] transition-colors font-semibold text-primary">Apply for Recognition</Link></li>
            <li><Link to="/awards-recognition/awardees" className="hover:text-[#c5a059] transition-colors">Recipient Directory</Link></li>
            <li><Link to="/verify-certificate" className="hover:text-[#c5a059] transition-colors">Verify Certificate</Link></li>
            <li><Link to="/awards-recognition/policies" className="hover:text-[#c5a059] transition-colors">Policies & Disclaimer</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Office */}
        <div>
          <h4 className="font-sans font-bold text-base mb-4 text-foreground">Contact & Office</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3 items-center">
              <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
              <a href="mailto:info@eminsphere.com" className="hover:text-accent transition-colors">info@eminsphere.com</a>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="h-4 w-4 shrink-0 text-destructive mt-0.5" />
              <div className="leading-relaxed text-xs">
                Ground Floor, RAHEJA WOODS,<br />
                Kalyani Nagar, Pune,<br />
                Maharashtra 411006, India
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Landmark className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
              <div className="leading-relaxed text-xs">
                GSTIN: 27KNJPS9156R1ZH<br />
                MSME Registered
              </div>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-border/40 text-xs text-muted-foreground space-y-1.5">
            <div><Link to="/terms" className="hover:text-accent">Terms & Conditions</Link></div>
            <div><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></div>
            <div><Link to="/awards-recognition/admin" className="text-muted-foreground/60 hover:text-muted-foreground">Staff Admin Portal</Link></div>
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
