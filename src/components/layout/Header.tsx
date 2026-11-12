import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Award, Sparkles, ShieldCheck } from "lucide-react";
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
  { label: "Awards Committee & Governance", to: "/awards-recognition/governance" },
  { label: "Advisory Board", to: "/awards-recognition/advisory-board" },
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
  const [awardsMobileOpen, setAwardsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setAwardsMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isAwardsSection = location.pathname.startsWith("/awards-recognition") || location.pathname.startsWith("/verify-certificate");
  const textColor = "text-foreground/90";
  const iconColor = "text-foreground";

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-20 bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-sm"
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-gold transition-transform group-hover:scale-105 shrink-0 border border-white/10 p-0.5">
            <img src="/eminsphere-logo.png" alt="Eminsphere Logo" className="h-full w-full object-contain rounded-full" />
          </div>
          <div className="leading-tight">
            <div className={`font-serif font-black text-xl tracking-tight ${textColor.replace('/90', '')}`}>Eminsphere™</div>
            <div className="text-[9px] uppercase tracking-widest text-accent font-bold">Research & Innovation</div>
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
              <Award className="h-3.5 w-3.5 text-[#c5a059]" />
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

        {/* Mobile Hamburger Toggle */}
        <button
          className={`xl:hidden p-2.5 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors ${iconColor}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="xl:hidden bg-card/98 backdrop-blur-2xl border-t border-white/10 animate-fade-in shadow-elegant border-b border-border/50">
          <div className="container py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto overscroll-contain">
            {/* Primary Action Button Mobile */}
            <div className="pb-3 grid grid-cols-2 gap-2">
              <Button asChild className="bg-primary text-white rounded-xl h-11 font-black uppercase tracking-wider text-xs shadow-gold">
                <Link to="/awards-recognition/apply" onClick={() => setOpen(false)}>
                  Nominate Now
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl h-11 font-bold text-xs">
                <Link to="/verify-certificate" onClick={() => setOpen(false)}>
                  Verify Certificate
                </Link>
              </Button>
            </div>

            {/* Awards & Recognition Mobile Expandable Section */}
            <div className="border rounded-xl border-[#c5a059]/30 bg-[#c5a059]/5 p-2 my-1">
              <button 
                type="button"
                onClick={() => setAwardsMobileOpen(!awardsMobileOpen)}
                className="w-full flex items-center justify-between p-2 text-sm font-bold text-[#c5a059]"
              >
                <span className="flex items-center gap-2">
                  <Award className="h-4 w-4" /> Awards & Recognition
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${awardsMobileOpen ? "rotate-180" : ""}`} />
              </button>

              {awardsMobileOpen && (
                <div className="pt-2 pl-2 space-y-1 border-t border-[#c5a059]/20 mt-1">
                  {awardsDropdownNav.map((m) => (
                    <Link
                      key={m.to}
                      to={m.to}
                      className="block py-2 px-3 rounded-lg text-xs font-medium text-foreground hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Main Nav Items Mobile */}
            {mainNav.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2.5 px-4 rounded-xl text-white font-medium hover:bg-white/10 hover:text-accent transition-smooth text-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-border/40">
              <div className="text-[10px] uppercase font-bold text-muted-foreground px-4 py-1">More Programs</div>
              {moreDropdownNav.map((m) => (
                <Link
                  key={m.to}
                  to={m.to}
                  className="block py-2 px-4 rounded-xl text-xs text-muted-foreground hover:text-foreground hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {m.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
