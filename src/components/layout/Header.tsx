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
  HelpCircle,
  FileText
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
  { label: "Awards Admin Portal", to: "/awards-recognition/admin", icon: ShieldCheck },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  // Default awards closed so conference & advisory sections are immediately visible to mobile visitors!
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
              {awardsDropdownNav.map((m) => (
                <DropdownMenuItem key={m.to} asChild className="focus:bg-muted focus:text-[#c5a059] cursor-pointer rounded-lg px-2.5 py-1.5 my-0.5">
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

        {/* CTA Buttons Header Right (Desktop) */}
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

      {/* FULL VIEWPORT MOBILE MENU DRAWER — SHOWCASES ALL SECTIONS EQUALLY */}
      {open && (
        <div 
          className="xl:hidden fixed top-20 inset-x-0 bottom-0 z-50 bg-[#060a17] text-foreground border-t border-border/60 flex flex-col shadow-2xl overscroll-contain animate-fade-in"
          style={{ height: 'calc(100dvh - 5rem)' }}
        >
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5 overscroll-contain pb-28">
            
            {/* 1. TOP QUICK ACTION BUTTONS (Conference + Awards + Verify) */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-xl h-11 font-black uppercase tracking-wider text-xs shadow-gold flex items-center justify-center gap-1.5">
                  <a href="https://forms.gle/M6GiaTdkpqH8DWWe6" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                    <Globe className="h-3.5 w-3.5" /> Register Now
                  </a>
                </Button>
                <Button asChild className="bg-gradient-to-r from-[#c5a059] to-[#dfc488] hover:opacity-90 text-[#060a17] rounded-xl h-11 font-black uppercase tracking-wider text-xs shadow-md flex items-center justify-center gap-1.5">
                  <Link to="/awards-recognition/apply" onClick={() => setOpen(false)}>
                    <Award className="h-3.5 w-3.5" /> Nominate Now
                  </Link>
                </Button>
              </div>
              <Button asChild variant="outline" className="w-full border-border/80 bg-card/60 text-foreground hover:bg-muted rounded-xl h-9 font-semibold text-xs flex items-center justify-center gap-1.5">
                <Link to="/verify-certificate" onClick={() => setOpen(false)}>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Verify Award / Certificate
                </Link>
              </Button>
            </div>

            {/* 2. ACADEMIC CONFERENCES & SUMMITS (DIRECTLY VISIBLE, PROMINENT FIRST) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-primary" /> Conferences & Summits
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">Main Navigation</span>
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

            {/* 3. AWARDS & RECOGNITION (COLLAPSIBLE, WITH CLEAR PREVIEW & EXPAND OPTION) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c5a059] flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-[#c5a059]" /> Awards & Recognition
                </span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30">
                  2026-27 Honours
                </span>
              </div>

              <div className="rounded-2xl border border-[#c5a059]/35 bg-[#c5a059]/5 overflow-hidden">
                {/* Header Toggle */}
                <button
                  type="button"
                  onClick={() => setAwardsMobileOpen(!awardsMobileOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-left bg-gradient-to-r from-[#c5a059]/15 to-transparent hover:bg-[#c5a059]/20 transition-colors"
                  aria-expanded={awardsMobileOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059] shrink-0 border border-[#c5a059]/30">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        Global Innovation & Excellence Awards
                      </div>
                      <div className="text-[10px] text-white/60">
                        {awardsMobileOpen ? "Tap to collapse 12 programmes" : "Tap to view 12 award categories & guides"}
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-[#c5a059] transition-transform duration-300 ${awardsMobileOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Direct quick links when collapsed */}
                {!awardsMobileOpen && (
                  <div className="p-2.5 pt-0 grid grid-cols-2 gap-1.5 text-center">
                    <Link
                      to="/awards-recognition"
                      onClick={() => setOpen(false)}
                      className="py-1.5 px-2 rounded-lg bg-card/60 hover:bg-card border border-border/50 text-[11px] font-medium text-foreground/90 block truncate"
                    >
                      🏆 Overview
                    </Link>
                    <Link
                      to="/awards-recognition/categories"
                      onClick={() => setOpen(false)}
                      className="py-1.5 px-2 rounded-lg bg-card/60 hover:bg-card border border-border/50 text-[11px] font-medium text-foreground/90 block truncate"
                    >
                      🎯 18 Categories
                    </Link>
                    <Link
                      to="/awards-recognition/apply"
                      onClick={() => setOpen(false)}
                      className="py-1.5 px-2 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/40 text-[11px] font-bold text-primary block truncate col-span-2"
                    >
                      ✍️ Apply for Recognition (Open)
                    </Link>
                  </div>
                )}

                {/* Expanded full list of 12 award sub-pages */}
                {awardsMobileOpen && (
                  <div className="p-2 space-y-1 bg-[#060a17]/90 border-t border-[#c5a059]/20">
                    {awardsDropdownNav.map((m) => {
                      const isItemActive = location.pathname === m.to;
                      return (
                        <Link
                          key={m.to}
                          to={m.to}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                            isItemActive 
                              ? "bg-[#c5a059]/20 text-[#c5a059] font-bold border border-[#c5a059]/40" 
                              : "text-foreground/90 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]" />
                            {m.label}
                          </span>
                          {m.highlight && (
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
            </div>

            {/* 4. ADVISORY, GRANTS & COMMUNITY (DIRECTLY ACCESSIBLE) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-accent" /> Advisory & Academic Programs
                </span>
                <span className="text-[10px] text-muted-foreground font-medium">Resources</span>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {moreDropdownNav.map((item) => {
                  const Icon = item.icon;
                  const isItemActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`flex flex-col justify-between p-2.5 rounded-xl text-xs font-semibold transition-all border ${
                        isItemActive
                          ? "bg-accent/20 text-accent border-accent/50 shadow-sm"
                          : "bg-card/70 text-foreground hover:bg-muted/60 border-border/60 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <Icon className="h-3.5 w-3.5 text-accent shrink-0" />
                        {item.badge && (
                          <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 rounded bg-accent/20 text-accent">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span className="truncate text-[11px]">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 5. SECRETARIAT & DIRECT CONTACT CARD */}
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
