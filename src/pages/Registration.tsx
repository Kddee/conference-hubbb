import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Star, ShieldCheck, Zap, ArrowRight, User, Mail, Globe, Building2, MapPin, Send, MessageSquare, Award, BookOpen, Users } from "lucide-react";

const benefits = [
  { 
    title: "Global Networking", 
    desc: "Connect with industry leaders, distinguished professors, and leading researchers from over 50 countries.",
    icon: <Users className="h-6 w-6 text-accent" />
  },
  { 
    title: "Publication Opportunities", 
    desc: "All accepted papers get published in Scopus & Web of Science indexed proceedings.",
    icon: <BookOpen className="h-6 w-6 text-accent" />
  },
  { 
    title: "Awards & Recognition", 
    desc: "Compete for Best Paper and Presentation awards, boosting your academic profile.",
    icon: <Award className="h-6 w-6 text-accent" />
  },
];

const Registration = () => (
  <main className="min-h-screen bg-background">
    {/* HERO */}
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-36 overflow-hidden bg-primary text-primary-foreground border-b">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
      <div className="container relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-bold text-sm tracking-wider uppercase mb-6 backdrop-blur-md border border-primary-foreground/20">
          <Star className="h-4 w-4 text-accent fill-accent" /> Join The Global Community
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white drop-shadow-md">
          Conference <span className="text-accent">Registration</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
          Interested in participating? Submit your details below to receive official registration guidelines, fee structures, and presentation schedules directly to your inbox.
        </p>
      </div>
    </div>

    {/* BENEFITS SECTION */}
    <section className="container py-0 -mt-24 relative z-20 mb-24">
      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((b, idx) => (
          <Card key={idx} className="relative overflow-hidden flex flex-col p-8 transition-all duration-300 shadow-lg border-border hover:border-accent/30 bg-card/95 backdrop-blur hover:-translate-y-1">
            <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              {b.icon}
            </div>
            <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-3">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
          </Card>
        ))}
      </div>
    </section>

    {/* FORM SECTION */}
    <section id="register-form" className="bg-muted py-24 border-t">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16 max-w-6xl mx-auto items-center">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">Request Registration Details</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Fill out the inquiry form to receive our official registration packet. Our team will review your profile and email you the appropriate registration links and institutional guidelines.
            </p>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-full bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Direct Communication</h4>
                  <p className="text-sm text-muted-foreground">Our organizing committee will reach out to you within 24 hours.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="h-14 w-14 rounded-full bg-background border border-border flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Privacy Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">Your details are secure and will only be used for official conference correspondence.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-0 bg-background rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
              
              <h3 className="font-serif text-2xl font-bold text-primary mb-8">Registration Inquiry Form</h3>
              
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const fullName = formData.get("Full Name");
                const email = formData.get("Email");
                const country = formData.get("Country");
                const affiliation = formData.get("Affiliation");
                const conference = formData.get("Conference");

                const subject = encodeURIComponent(`Registration Inquiry: ${fullName}`);
                const body = encodeURIComponent(
                  `Hello Eminsphere Team,\n\nI would like to request registration details for the upcoming conference.\n\nHere are my details:\n- Full Name: ${fullName}\n- Email: ${email}\n- Country: ${country}\n- Affiliation: ${affiliation}\n- Conference of Interest: ${conference}\n\nThank you.`
                );

                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@eminsphere.com&su=${subject}&body=${body}`;
                window.open(gmailUrl, '_blank');
                e.currentTarget.reset();
              }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-foreground font-semibold flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" /> Full Name</Label>
                    <Input name="Full Name" placeholder="Dr. John Doe" required className="h-12 bg-muted/30 border-border focus:bg-background focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground font-semibold flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /> Email Address</Label>
                    <Input name="Email" type="email" placeholder="john.doe@university.edu" required className="h-12 bg-muted/30 border-border focus:bg-background focus:border-accent" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-foreground font-semibold flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" /> Country</Label>
                    <Input name="Country" placeholder="United Kingdom" required className="h-12 bg-muted/30 border-border focus:bg-background focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground font-semibold flex items-center gap-2"><Building2 className="h-4 w-4 text-muted-foreground" /> Affiliation</Label>
                    <Input name="Affiliation" placeholder="Oxford University" required className="h-12 bg-muted/30 border-border focus:bg-background focus:border-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground font-semibold">Conference of Interest</Label>
                  <Select name="Conference" required>
                    <SelectTrigger className="h-12 bg-muted/30 border-border focus:bg-background focus:border-accent">
                      <SelectValue placeholder="Choose a conference..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ICAITS-26 — Virtual Mode">ICAITS-26 — Virtual Mode</SelectItem>
                      <SelectItem value="ICMREF-26 — Tbilisi, Georgia">ICMREF-26 — Tbilisi, Georgia</SelectItem>
                      <SelectItem value="ICCEMB-26 — Virtual Mode">ICCEMB-26 — Virtual Mode</SelectItem>
                      <SelectItem value="ICATES-26 — Virtual Mode">ICATES-26 — Virtual Mode</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" variant="hero" size="lg" className="w-full h-14 text-lg font-bold shadow-xl">
                    Submit Inquiry <Send className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    By submitting this form, your email client will open to send the inquiry securely.
                  </p>
                </div>
              </form>
            </Card>
          </div>

        </div>
      </div>
    </section>
  </main>
);

export default Registration;
