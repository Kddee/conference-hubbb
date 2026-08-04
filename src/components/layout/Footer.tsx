import { Link } from "react-router-dom";
import { Mail, Linkedin, Youtube, MapPin, Landmark } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: About */}
        <div className="space-y-6">
          <div>
            <h2 className="font-serif font-black text-2xl text-foreground tracking-tight">Eminsphere™</h2>
            <div className="text-sm text-muted-foreground mt-1">Global Academic, Research & Innovation Platform</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Eminsphere™ is a professionally structured and compliant organization, operating in alignment with regulatory frameworks established by the Government of India.
          </p>
          <div className="space-y-3 flex flex-col items-start">
            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-muted/50 text-xs text-muted-foreground border border-border">
              Recognized as an MSME Registered Enterprise
            </span>
            <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-muted/50 text-xs text-muted-foreground border border-border">
              Compliant with Maharashtra Shop & Establishment Regulations
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-sans font-bold text-base mb-6 text-foreground">Quick Links</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3">Conferences</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/upcoming-conferences" className="hover:text-accent transition-colors">Upcoming</Link></li>
                <li><Link to="/recent-conferences" className="hover:text-accent transition-colors">Recent</Link></li>
                <li><Link to="/recent-proceedings" className="hover:text-accent transition-colors">Proceedings</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3">Get Involved</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/registration" className="hover:text-accent transition-colors">Registration</Link></li>
                <li><Link to="/apply-reviewer" className="hover:text-accent transition-colors">Reviewer</Link></li>
                <li><Link to="/apply-advisory" className="hover:text-accent transition-colors">Advisory</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3">Follow Us</div>
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

        {/* Column 3: Contact & Registered Office */}
        <div>
          <h4 className="font-sans font-bold text-base mb-6 text-foreground">Contact & Registered Office</h4>
          <ul className="space-y-5 text-sm text-muted-foreground">
            <li className="flex gap-3 items-center">
              <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
              <a href="mailto:info@eminsphere.com" className="hover:text-accent transition-colors">info@eminsphere.com</a>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="h-4 w-4 shrink-0 text-destructive mt-0.5" />
              <div className="leading-relaxed">
                Ground Floor, RAHEJA WOODS,<br />
                Kalyani Nagar, Pune,<br />
                Maharashtra 411006, India
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Landmark className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
              <div className="leading-relaxed">
                GST Identification Number (GSTIN):<br />
                27KNJPS9156R1ZH
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Linkedin className="h-4 w-4 shrink-0 text-[#0077b5]" />
              <a href="https://www.linkedin.com/company/106142250/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn Presence</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal & Compliance */}
        <div>
          <h4 className="font-sans font-bold text-base mb-6 text-foreground">Legal & Compliance</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            All operations are conducted in accordance with applicable laws of India, ensuring transparency, regulatory compliance, and professional governance standards.
          </p>
        </div>
      </div>

      <div className="border-t border-border/50 bg-background/50">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Eminsphere™. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

