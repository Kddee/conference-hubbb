import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNav = [
  { label: "Upcoming Conferences", to: "/upcoming-conferences" },
  { label: "Recent Conferences", to: "/recent-conferences" },
  { label: "Past Speakers", to: "/past-speakers" },
  { label: "Digital Conference Proceedings", to: "/recent-proceedings" },
  { label: "Innovation Challenge", to: "/innovation-challenge-2026" },
];

const dropdownNav = [
  { label: "Advisory Members", to: "/advisory-members" },
  { label: "Apply as Reviewer", to: "/apply-reviewer" },
  { label: "Join Advisory Team", to: "/apply-advisory" },
  { label: "Research Funding", to: "/research-funding" },
  { label: "Books", to: "/books" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const isHome = location.pathname === "/";
  const textColor = isHome && !scrolled ? "text-white/90" : "text-foreground/90";
  const iconColor = isHome && !scrolled ? "text-white" : "text-foreground";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-elegant" : "bg-transparent py-2"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-gold transition-transform group-hover:scale-105 shrink-0 border border-white/10 p-0.5">
            <img src="/eminsphere-logo.png" alt="Eminsphere Logo" className="h-full w-full object-contain rounded-full" />
          </div>
          <div className="leading-tight">
            <div className={`font-serif font-black text-xl tracking-tight ${textColor.replace('/90', '')}`}>Eminsphere™</div>
            <div className="text-[9px] uppercase tracking-widest text-accent font-bold">Research & Innovation</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {mainNav.map((l) => (
            <RouterNavLink key={l.to} to={l.to} className={({ isActive }) => `text-[13px] font-bold tracking-wide transition-smooth hover:text-accent whitespace-nowrap ${isActive ? "text-accent" : textColor}`}>
              {l.label}
            </RouterNavLink>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-[13px] font-bold tracking-wide hover:text-accent transition-smooth outline-none whitespace-nowrap ${textColor}`}>
              More <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-xl border-border/10 shadow-elegant rounded-xl">
              {dropdownNav.map((m) => (
                <DropdownMenuItem key={m.to} asChild className="focus:bg-muted focus:text-accent cursor-pointer rounded-lg mx-1 my-1">
                  <Link to={m.to} className="text-foreground font-medium">{m.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden xl:block">
          <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-full font-black px-8 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm h-12">
            <Link to="/registration">Register Now</Link>
          </Button>
        </div>

        <button
          className={`xl:hidden p-2.5 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors ${iconColor}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-card/95 backdrop-blur-xl border-t border-white/10 animate-fade-in shadow-elegant border-b border-border/50">
          <div className="container py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto overscroll-contain">
            {[...mainNav, ...dropdownNav].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2.5 px-4 rounded-xl text-white font-medium hover:bg-white/10 hover:text-accent active:bg-white/15 transition-smooth text-base"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Button asChild className="bg-primary text-white rounded-xl h-12 font-black w-full uppercase tracking-wider text-sm shadow-gold">
                <Link to="/registration" onClick={() => setOpen(false)}>Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
