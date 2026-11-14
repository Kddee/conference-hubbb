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
  BookOpen,
  Calendar,
  GraduationCap,
  Landmark,
  ExternalLink,
  Briefcase,
  FileText,
  Lock
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
  { label: "Upcoming Conferences", to: "/upcoming-conferences", icon: Calendar },
  { label: "Recent Conferences", to: "/recent-conferences", icon: Landmark },
  { label: "Past Speakers", to: "/past-speakers", icon: Users },
  { label: "Digital Proceedings", to: "/recent-proceedings", icon: BookOpen },
  { label: "Innovation Challenge", to: "/innovation-challenge-2026", icon: Sparkles },
];

const awardsDropdownNav = [
  { label: "Overview", to: "/awards-recognition" },
  { label: "About the Awards", to: "/awards-recognition/about" },
  { label: "Award Categories (18 Disciplines)", to: "/awards-recognition/categories" },
  { label: "Eligibility Criteria", to: "/awards-recognition/eligibility" },
  { label: "Nomination Process", to: "/awards-recognition/nomination-process" },
  { label: "Apply for Recognition", to: "/awards-recognition/apply", highlight: true },
  { label: "Selection & Evaluation", to: "/awards-recognition/selection-process" },
  { label: "Awards Committee", to: "/awards-recognition/governance" },
  { label: "Advisory Board", to: "/awards-recognition/governance" },
  { label: "Award Recipients Directory", to: "/awards-recognition/awardees" },
  { label: "Certificate Verification Portal", to: "/verify-certificate" },
  { label: "FAQs", to: "/awards-recognition/faqs" },
  { label: "Policies & Disclaimer", to: "/awards-recognition/policies" },
];

const moreDropdownNav = [
  { label: "Advisory Members", to: "/advisory-members", icon: Users },
  { label: "Apply as Reviewer", to: "/apply-reviewer", icon: GraduationCap },
  { label: "Join Advisory Team", to: "/apply-advisory", icon: Users },
  { label: "Research Funding", to: "/research-funding", icon: Sparkles, badge: "May 31" },
  { label: "Books", to: "/books", icon: BookOpen },
  { label: "Blog", to: "/blog", icon: FileText },
  { label: "Careers", to: "/careers", icon: Briefcase },
  { label: "Awards Admin Portal", to: "/awards-recognition/admin", icon: Lock },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [awardsMobileOpen, setAwardsMobileOpen] = useState(false);
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

          {/* AWARDS & RECOGNITION Menu with Rich Dropdown */}
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
              {awardsDropdownNav.map((m, idx) => (
                <DropdownMenuItem key={`${m.to}-${idx}`} asChild className="focus:bg-muted focus:text-[#c5a059] cursor-pointer rounded-lg px-2.5 py-1.5 my-0.5">
                  <Link to={m.to} className="text-foreground text-xs font-medium w-full flex items-center justify-between">
                    <span>{m.label}</span>
                    {m.highlight && (
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

      {/* FULL VIEWPORT MOBILE MENU DRAWER — SHOWS ALL SECTIONS OF THE WEBSITE */}
      {open && (
        <div 
          className="xl:hidden fixed top-20 inset-x-0 bottom-0 z-50 bg-[#060a17] text-foreground border-t border-border/60 flex flex-col shadow-2xl overscroll-contain animate-fade-in"
        >
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6 overscroll-contain pb-28">
            
            {/* 1. AWARDS & RECOGNITION (OPENS WHEN CLICKED — SHOWS ALL 13 SECTIONS) */}
            <div className="rounded-2xl border-2 border-[#c5a059]/40 bg-[#c5a059]/5 overflow-hidden transition-all shadow-md">
              <button
                type="button"
                onClick={() => setAwardsMobileOpen(!awardsMobileOpen)}
                className="w-full flex items-center justify-between p-4 text-left bg-gradient-to-r from-[#c5a059]/20 via-[#c5a059]/10 to-transparent hover:bg-[#c5a059]/25 transition-colors cursor-pointer"
                aria-expanded={awardsMobileOpen}
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[#c5a059]/25 flex items-center justify-center text-[#c5a059] shrink-0 border border-[#c5a059]/40 shadow-sm">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-serif font-black text-white flex items-center gap-2">
                      Awards & Recognition
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-black bg-[#c5a059] text-[#060a17]">
                        2026–27
                      </span>
                    </div>
                    <div className="text-[11px] text-[#c5a059]/90 font-medium">
                      {awardsMobileOpen ? "Tap to close awards directory" : "Tap to open all 13 award sections & categories"}
                    </div>
                  </div>
                </div>
                <div className="h-7 w-7 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059] shrink-0 border border-[#c5a059]/30">
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${awardsMobileOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* When opened, ALL 13 award sections show with clean, mobile-compatible styling */}
              {awardsMobileOpen && (
                <div className="p-2 space-y-1 bg-[#060a17]/95 border-t border-[#c5a059]/30 animate-fade-in">
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold text-[#c5a059] flex items-center justify-between">
                    <span>EminSphere Global Honours Directory</span>
                    <span className="text-[9px] font-normal text-white/50">13 Sections</span>
                  </div>
                  {awardsDropdownNav.map((m, idx) => {
                    const isItemActive = location.pathname === m.to;
                    return (
                      <Link
                        key={`${m.to}-${idx}`}
                        to={m.to}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                          isItemActive 
                            ? "bg-[#c5a059]/20 text-[#c5a059] font-bold border border-[#c5a059]/50 shadow-sm" 
                            : "text-foreground/90 hover:bg-white/10 hover:text-white border border-transparent"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059] shrink-0" />
                          <span>{m.label}</span>
                        </span>
                        {m.highlight ? (
                          <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-primary text-white border border-primary/40 shadow-sm">
                            Open
                          </span>
                        ) : (
                          <span className="text-white/30 text-[10px]">→</span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. CONFERENCES & SUMMITS (ALL 5 SECTIONS VISIBLE) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-primary" /> Conferences & Summits
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">5 Programs</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {mainNav.map((item) => {
                  const Icon = item.icon;
                  const isItemActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all border ${
                        isItemActive
                          ? "bg-primary/20 text-primary border-primary/50 shadow-sm"
                          : "bg-card/70 text-foreground hover:bg-muted/60 border-border/60 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <span className="text-muted-foreground text-[10px]">→</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 3. ADVISORY & ACADEMIC NETWORK */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-accent" /> Advisory & Community
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">Network</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {[
                  { label: "International Advisory Board", to: "/advisory-members", icon: Users },
                  { label: "Apply as Peer Reviewer", to: "/apply-reviewer", icon: GraduationCap },
                  { label: "Join Advisory Team", to: "/apply-advisory", icon: Users },
                ].map((item) => {
                  const Icon = item.icon;
                  const isItemActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all border ${
                        isItemActive
                          ? "bg-accent/20 text-accent border-accent/50 shadow-sm"
                          : "bg-card/70 text-foreground hover:bg-muted/60 border-border/60 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 border border-accent/20">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <span className="text-muted-foreground text-[10px]">→</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 4. RESEARCH, PUBLICATIONS & CAREERS */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-emerald-400" /> Research & Publishing
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">Resources</span>
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {[
                  { label: "Research Funding Grant", to: "/research-funding", icon: Sparkles, badge: "May 31" },
                  { label: "Scopus & Academic Books", to: "/books", icon: BookOpen },
                  { label: "Research Blog & Insights", to: "/blog", icon: FileText },
                  { label: "Academic Careers", to: "/careers", icon: Briefcase },
                ].map((item) => {
                  const Icon = item.icon;
                  const isItemActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-semibold transition-all border ${
                        isItemActive
                          ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-sm"
                          : "bg-card/70 text-foreground hover:bg-muted/60 border-border/60 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-accent/20 text-accent border border-accent/30">
                            {item.badge}
                          </span>
                        )}
                        <span className="text-muted-foreground text-[10px]">→</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 5. CREDENTIAL VERIFICATION & ADMIN */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline" className="border-border/80 bg-card/60 text-foreground hover:bg-muted rounded-xl h-10 font-semibold text-xs flex items-center justify-center gap-1.5">
                  <Link to="/verify-certificate" onClick={() => setOpen(false)}>
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Verify Award
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-border/80 bg-card/60 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl h-10 font-semibold text-xs flex items-center justify-center gap-1.5">
                  <Link to="/awards-recognition/admin" onClick={() => setOpen(false)}>
                    <Lock className="h-3.5 w-3.5" /> Staff Admin
                  </Link>
                </Button>
              </div>
            </div>

            {/* 6. SECRETARIAT & DIRECT CONTACT CARD */}
            <div className="pt-2 text-xs text-muted-foreground space-y-2">
              <div className="p-3.5 rounded-xl bg-card/60 border border-border/60">
                <div className="font-bold text-foreground text-xs mb-1">EminSphere™ Secretariat & Support</div>
                <div className="text-[11px] text-muted-foreground">
                  Official Conference & Award Inquiries:
                </div>
                <a 
                  href="mailto:info@eminsphere.com" 
                  className="text-primary hover:underline font-semibold text-xs block mt-1"
                >
                  info@eminsphere.com
                </a>
              </div>
              <div className="text-[10px] text-muted-foreground/60 text-center px-2 leading-relaxed">
                © {new Date().getFullYear()} EminSphere™. Global Academic, Research & Corporate Recognition Platform.
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
