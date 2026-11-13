import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Users, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNav = [
  { label: "Upcoming Conferences", to: "/upcoming-conferences" },
  { label: "Recent Conferences", to: "/recent-conferences" },
  { label: "Past Speakers", to: "/past-speakers" },
  { label: "Digital Proceedings", to: "/recent-proceedings" },
  { label: "Innovation Challenge", to: "/innovation-challenge-2026" },
];

const awardsDropdownNav = [
  { label: "Overview", to: "/awards-recognition" },
  { label: "About the Awards", to: "/awards-recognition/about" },
  { label: "Award Categories (18 Disciplines)", to: "/awards-recognition/categories" },
  { label: "Eligibility Criteria", to: "/awards-recognition/eligibility" },
  { label: "Nomination Process", to: "/awards-recognition/nomination-process" },
  { label: "Apply for Recognition", to: "/awards-recognition/apply" },
  { label: "Selection & Evaluation", to: "/awards-recognition/selection-process" },
  { label: "Awards Committee", to: "/awards-recognition/governance" },
  { label: "Award Recipients Directory", to: "/awards-recognition/awardees" },
  { label: "Certificate Verification Portal", to: "/verify-certificate" },
  { label: "FAQs", to: "/awards-recognition/faqs" },
  { label: "Policies & Disclaimer", to: "/awards-recognition/policies" },
];

const moreDropdownNav = [
  { label: "Advisory Members", to: "/advisory-members" },
  { label: "Apply as Reviewer", to: "/apply-reviewer" },
  { label: "Join Advisory Team", to: "/apply-advisory" },
  { label: "Research Funding", to: "/research-funding" },
  { label: "Books", to: "/books" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Awards Admin Portal", to: "/awards-recognition/admin" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [awardsMobileOpen, setAwardsMobileOpen] = useState(true);
  const [conferencesMobileOpen, setConferencesMobileOpen] = useState(false);
  const [moreMobileOpen, setMoreMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll lock background when mobile menu is open
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isAwardsSection = location.pathname.startsWith("/awards-recognition") || location.pathname.startsWith("/verify-certificate");
  const textColor = "text-foreground/90";

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-sm"
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group shrink-0"
          onClick={() => setOpen(false)}
        >
          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-gold transition-transform group-hover:scale-105 shrink-0 border border-white/10 p-0.5">
            <img src="/eminsphere-logo.png" alt="Eminsphere Logo" className="h-full w-full object-contain rounded-full" />
          </div>
          <div className="leading-tight">
            <div className={`font-serif font-black text-lg sm:text-xl tracking-tight ${textColor.replace('/90', '')}`}>Eminsphere™</div>
            <div className="text-[8.5px] sm:text-[9px] uppercase tracking-widest text-accent font-bold">Research & Innovation</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
          {mainNav.map((l) => (
            <RouterNavLink 
              key={l.to} 
              to={l.to} 
              className={({ isActive }) => `text-[13px] font-bold tracking-wide transition-smooth hover:text-accent whitespace-nowrap ${isActive ? "text-accent" : textColor}`}
            >
              {l.label}
            </RouterNavLink>
          ))}

          {/* New AWARDS & RECOGNITION Menu with Rich Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1.5 text-[13px] font-bold tracking-wide transition-smooth outline-none whitespace-nowrap px-2.5 py-1 rounded-lg ${
              isAwardsSection 
                ? "text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30" 
                : `hover:text-[#c5a059] ${textColor}`
            }`}>
              <span>Awards & Recognition</span>
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 bg-card/95 backdrop-blur-xl border-border/60 shadow-2xl rounded-xl p-1.5 max-h-[85vh] overflow-y-auto">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#c5a059]">
                Global Innovation & Excellence Awards
              </div>
              <DropdownMenuSeparator className="bg-border/50" />
              {awardsDropdownNav.map((m) => (
                <DropdownMenuItem key={m.to} asChild className="focus:bg-muted focus:text-[#c5a059] cursor-pointer rounded-lg px-2.5 py-1.5 my-0.5">
                  <Link to={m.to} className="text-foreground text-xs font-medium w-full flex items-center justify-between">
                    <span>{m.label}</span>
                    {m.to.includes("apply") && (
                      <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-primary/20 text-primary">Open</span>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-[13px] font-bold tracking-wide hover:text-accent transition-smooth outline-none whitespace-nowrap ${textColor}`}>
              More <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-xl border-border/60 shadow-elegant rounded-xl p-1.5">
              {moreDropdownNav.map((m) => (
                <DropdownMenuItem key={m.to} asChild className="focus:bg-muted focus:text-accent cursor-pointer rounded-lg px-2.5 py-1.5 my-0.5">
                  <Link to={m.to} className="text-foreground text-xs font-medium">{m.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* CTA Buttons Header Right */}
        <div className="hidden xl:flex items-center gap-2.5 shrink-0">
          <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-full font-black px-6 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 uppercase tracking-wider text-xs h-10">
            <Link to="/awards-recognition/apply">
              <Award className="h-3.5 w-3.5 mr-1 text-[#f3e5c8]" /> Nominate Now
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted rounded-full font-bold px-4 text-xs h-10">
            <a href="https://forms.gle/M6GiaTdkpqH8DWWe6" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="xl:hidden p-2 rounded-xl text-foreground hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 shrink-0"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* FULL VIEWPORT MOBILE MENU DRAWER (NEVER OVERLAPS UNDERLYING PAGE) */}
      {open && (
        <div 
          className="xl:hidden fixed top-20 inset-x-0 bottom-0 z-50 bg-[#060a17] text-foreground border-t border-border/60 flex flex-col shadow-2xl overscroll-contain animate-fade-in"
          style={{ height: 'calc(100dvh - 5rem)' }}
        >
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 overscroll-contain pb-28">
            
            {/* Quick Action Header Cards */}
            <div className="grid grid-cols-2 gap-2.5 pb-2">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-xl h-12 font-black uppercase tracking-wider text-xs shadow-gold flex items-center justify-center gap-1.5">
                <Link to="/awards-recognition/apply" onClick={() => setOpen(false)}>
                  <Award className="h-4 w-4 text-[#f3e5c8]" /> Nominate Now
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#c5a059]/40 bg-[#c5a059]/10 text-foreground hover:bg-[#c5a059]/20 rounded-xl h-12 font-bold text-xs flex items-center justify-center gap-1.5">
                <Link to="/verify-certificate" onClick={() => setOpen(false)}>
                  <ShieldCheck className="h-4 w-4 text-[#c5a059]" /> Verify Award
                </Link>
              </Button>
            </div>

            {/* SECTION 1: AWARDS & RECOGNITION (ACCORDION) */}
            <div className="rounded-2xl border border-[#c5a059]/35 bg-[#c5a059]/5 overflow-hidden transition-all shadow-sm">
              <button 
                type="button"
                onClick={() => setAwardsMobileOpen(!awardsMobileOpen)}
                className="w-full flex items-center justify-between p-3.5 text-left bg-gradient-to-r from-[#c5a059]/15 to-transparent hover:bg-[#c5a059]/20 transition-colors"
                aria-expanded={awardsMobileOpen}
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059] shrink-0 border border-[#c5a059]/30">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      Awards & Recognition
                      <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-black bg-[#c5a059] text-[#060a17]">
                        2026-27
                      </span>
                    </div>
                    <div className="text-[10px] text-white/60">EminSphere Honours Programme</div>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-[#c5a059] transition-transform duration-300 ${awardsMobileOpen ? "rotate-180" : ""}`} />
              </button>

              {awardsMobileOpen && (
                <div className="p-2 space-y-1 bg-[#060a17]/90 border-t border-[#c5a059]/20">
                  {awardsDropdownNav.map((m) => {
                    const isItemActive = location.pathname === m.to;
                    return (
                      <Link
                        key={m.to}
                        to={m.to}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-medium transition-all ${
                          isItemActive 
                            ? "bg-[#c5a059]/20 text-[#c5a059] font-bold border border-[#c5a059]/40" 
                            : "text-foreground/90 hover:bg-white/5 hover:text-white"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                          {m.label}
                        </span>
                        {m.to.includes("apply") && (
                          <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                            Open
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* SECTION 2: ACADEMIC CONFERENCES (ACCORDION) */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 overflow-hidden transition-all shadow-sm">
              <button 
                type="button"
                onClick={() => setConferencesMobileOpen(!conferencesMobileOpen)}
                className="w-full flex items-center justify-between p-3.5 text-left bg-gradient-to-r from-primary/15 to-transparent hover:bg-primary/20 transition-colors"
                aria-expanded={conferencesMobileOpen}
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0 border border-primary/30">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      Conferences & Summits
                    </div>
                    <div className="text-[10px] text-white/60">International Scientific Gatherings</div>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-primary transition-transform duration-300 ${conferencesMobileOpen ? "rotate-180" : ""}`} />
              </button>

              {conferencesMobileOpen && (
                <div className="p-2 space-y-1 bg-[#060a17]/90 border-t border-primary/20">
                  {mainNav.map((l) => {
                    const isItemActive = location.pathname === l.to;
                    return (
                      <Link
                        key={l.to}
                        to={l.to}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-medium transition-all ${
                          isItemActive 
                            ? "bg-primary/20 text-primary font-bold border border-primary/40" 
                            : "text-foreground/90 hover:bg-white/5 hover:text-white"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {l.label}
                        </span>
                      </Link>
                    );
                  })}
                  <a
                    href="https://forms.gle/M6GiaTdkpqH8DWWe6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-bold text-accent hover:bg-accent/10 transition-all border border-accent/20"
                    onClick={() => setOpen(false)}
                  >
                    <span>Register for Upcoming Conference</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* SECTION 3: ADVISORY, RESEARCH & COMMUNITY (ACCORDION) */}
            <div className="rounded-2xl border border-border/80 bg-card/60 overflow-hidden transition-all shadow-sm">
              <button 
                type="button"
                onClick={() => setMoreMobileOpen(!moreMobileOpen)}
                className="w-full flex items-center justify-between p-3.5 text-left hover:bg-muted/40 transition-colors"
                aria-expanded={moreMobileOpen}
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      Advisory & Academic Network
                    </div>
                    <div className="text-[10px] text-white/60">Community, Grants & Publishing</div>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${moreMobileOpen ? "rotate-180" : ""}`} />
              </button>

              {moreMobileOpen && (
                <div className="p-2 space-y-1 bg-[#060a17]/90 border-t border-border/50">
                  {moreDropdownNav.map((m) => {
                    const isItemActive = location.pathname === m.to;
                    return (
                      <Link
                        key={m.to}
                        to={m.to}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-medium transition-all ${
                          isItemActive 
                            ? "bg-accent/20 text-accent font-bold border border-accent/40" 
                            : "text-foreground/90 hover:bg-white/5 hover:text-white"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                          {m.label}
                        </span>
                        {m.to.includes("funding") && (
                          <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-accent/20 text-accent">
                            May 31
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Direct Support & Secretariat Footer */}
            <div className="pt-4 border-t border-border/50 text-xs text-muted-foreground space-y-2">
              <div className="p-3.5 rounded-xl bg-card/60 border border-border/60">
                <div className="font-bold text-foreground text-xs mb-1">Awards & Conference Secretariat</div>
                <div className="text-[11px] text-muted-foreground">
                  Official Inquiries & Nominations Support:
                </div>
                <a 
                  href="mailto:info@eminsphere.com" 
                  className="text-primary hover:underline font-semibold text-xs block mt-1"
                >
                  info@eminsphere.com
                </a>
              </div>
              <div className="text-[10px] text-muted-foreground/60 text-center px-2 leading-relaxed">
                © {new Date().getFullYear()} EminSphere™. Independent Global Academic & Corporate Recognition Platform.
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};