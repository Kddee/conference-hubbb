import React from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Microscope, 
  Cpu, 
  Lightbulb, 
  Activity, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Download, 
  Calendar,
  GraduationCap,
  Briefcase
} from "lucide-react";

const ResearchFunding = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageHero
        eyebrow="Official Global Call"
        title="Research Funding & Grant Programs"
        description="Advancing Scientific Innovation, Academic Excellence, Healthcare Research & Global Collaboration."
        variant="particles"
      />

      {/* PRESS RELEASE SECTION */}
      <section className="container py-12 sm:py-16 pt-16 sm:pt-20">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            In The News
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-3 sm:mb-4">Official Press Release</h2>
          <p className="text-sm sm:text-lg text-muted-foreground">Eminsphere Global Grant Programs 2026 Featured In Major Publications</p>
        </div>
        <div className="max-w-4xl mx-auto bg-card rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 shadow-elegant border border-border hover:border-primary/30 transition-colors">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg relative group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <img src="https://hindustanmetro.com/uploads/images/202605/image_870x_6a03218b66b53.jpg" alt="Press Release" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="space-y-4">
              <a href="https://hindustanmetro.com/international-research-funding-applications-invited-under-eminsphere-global-grant-programs-2026" target="_blank" rel="noreferrer" className="block p-4 sm:p-5 rounded-2xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group hover:-translate-y-1 shadow-sm hover:shadow-md">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3 mb-2 sm:mb-3 text-sm sm:text-base">International Research Funding Applications Invited Under Eminsphere Global Grant Programs 2026</h4>
                <div className="flex justify-between items-center text-xs sm:text-sm text-muted-foreground">
                  <span className="font-bold text-accent uppercase tracking-wider text-[10px] sm:text-xs">Hindustan Metro</span>
                  <span className="flex items-center gap-1 font-medium group-hover:text-primary transition-colors">Read Article <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></span>
                </div>
              </a>
              <a href="https://trendinsider.in/2026/05/13/eminsphere-opens-research-funding-applications-for-2026-grant-cycle/" target="_blank" rel="noreferrer" className="block p-4 sm:p-5 rounded-2xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group hover:-translate-y-1 shadow-sm hover:shadow-md">
                <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3 mb-2 sm:mb-3 text-sm sm:text-base">Eminsphere Opens Research Funding Applications for 2026 Grant Cycle</h4>
                <div className="flex justify-between items-center text-xs sm:text-sm text-muted-foreground">
                  <span className="font-bold text-accent uppercase tracking-wider text-[10px] sm:text-xs">Trend Insider</span>
                  <span className="flex items-center gap-1 font-medium group-hover:text-primary transition-colors">Read Article <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HERO / INTRO SECTION */}
      <section className="container py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
            Eminsphere™ invites proposals from Medical Institutes, Universities, Research Organizations, Technology Institutes, Industrial R&D Centers, Innovation Hubs, Healthcare Institutions, and multidisciplinary academic bodies for institutional funding support, collaborative research programs, industrial innovation initiatives, and strategic academic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button size="lg" className="w-full sm:w-auto rounded-full shadow-xl px-6 sm:px-8 h-12 sm:h-14 text-base sm:text-lg font-bold">
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Download Official Brochure
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-bold" onClick={() => document.getElementById('submission')?.scrollIntoView({ behavior: 'smooth' })}>
              Submission Guidelines
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT THE INITIATIVE */}
      <section className="bg-muted py-16 sm:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
              Strategic Funding
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">Institutional Funding & Research Advancement</h2>
            <p className="text-sm sm:text-lg text-muted-foreground">The Eminsphere™ Funding Initiative supports innovative, high-impact, and interdisciplinary projects aligned with global scientific advancement, technology innovation, and sustainable academic excellence.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-t-4 border-t-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <Activity className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Medical & Healthcare</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Funding support for biomedical engineering, healthcare innovation, clinical research, diagnostics, pharmaceutical studies, telemedicine, and public health systems.</p>
            </Card>
            
            <Card className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-t-4 border-t-accent hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                <Cpu className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Technology & Engineering</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Grants supporting Artificial Intelligence, Robotics, Cybersecurity, Semiconductor Technology, Data Science, IoT, Cloud Computing, and advanced engineering systems.</p>
            </Card>

            <Card className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-t-4 border-t-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Industrial Innovation</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Industry-academia collaborative initiatives, product innovation, industrial R&D, sustainable manufacturing, and commercialization support programs.</p>
            </Card>

            <Card className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-t-4 border-t-accent hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-6">
                <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Academic Excellence</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Institutional development grants supporting faculty enhancement, laboratories, research centers, curriculum modernization, conferences, and international collaboration.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY TABLE */}
      <section className="container py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-3 sm:mb-6">Eligible Institutions</h2>
          <p className="text-sm sm:text-lg text-muted-foreground">Applications are invited from professionally compliant, recognized, and innovation-driven institutions globally.</p>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
          <table className="w-full min-w-[650px] text-left border-collapse bg-card rounded-2xl overflow-hidden shadow-elegant border border-border">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-4 sm:p-6 font-bold text-base sm:text-lg border-b border-primary/20">Applicant Category</th>
                <th className="p-6 font-bold text-lg border-b border-primary/20">Eligibility Requirements</th>
                <th className="p-6 font-bold text-lg border-b border-primary/20">Supported Areas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-4 sm:p-6 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base"><Activity className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" /> Medical Colleges & Hospitals</td>
                <td className="p-4 sm:p-6 text-muted-foreground text-xs sm:text-sm">Recognized institutions with ethical and regulatory compliance.</td>
                <td className="p-4 sm:p-6 font-medium text-xs sm:text-sm">Clinical Research, Healthcare Tech, Biomedical</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-4 sm:p-6 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base"><Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" /> Universities & Colleges</td>
                <td className="p-4 sm:p-6 text-muted-foreground text-xs sm:text-sm">Accredited academic institutions with active research programs.</td>
                <td className="p-4 sm:p-6 font-medium text-xs sm:text-sm">Academic Research, Innovation, Faculty Dev</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-4 sm:p-6 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base"><Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" /> Tech & Engineering Institutes</td>
                <td className="p-4 sm:p-6 text-muted-foreground text-xs sm:text-sm">Recognized technical institutions with research infrastructure.</td>
                <td className="p-4 sm:p-6 font-medium text-xs sm:text-sm">AI, Robotics, Cybersecurity, Smart Systems</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-4 sm:p-6 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base"><Microscope className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" /> Research Laboratories</td>
                <td className="p-4 sm:p-6 text-muted-foreground text-xs sm:text-sm">Registered scientific and R&D organizations.</td>
                <td className="p-4 sm:p-6 font-medium text-xs sm:text-sm">Scientific Research & Technology Development</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-4 sm:p-6 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base"><Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" /> Industrial Organizations</td>
                <td className="p-4 sm:p-6 text-muted-foreground text-xs sm:text-sm">Legally registered enterprises engaged in innovation activities.</td>
                <td className="p-4 sm:p-6 font-medium text-xs sm:text-sm">Industrial R&D, Product Development</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="p-4 sm:p-6 font-semibold flex items-center gap-2 sm:gap-3 text-sm sm:text-base"><Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" /> Startups & Innovation Hubs</td>
                <td className="p-4 sm:p-6 text-muted-foreground text-xs sm:text-sm">Registered startups and incubators with scalable models.</td>
                <td className="p-4 sm:p-6 font-medium text-xs sm:text-sm">Emerging Technologies & Innovation Programs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PRIORITY AREAS GRID */}
      <section className="bg-gradient-to-r from-background to-muted py-16 sm:py-24">
        <div className="container">
          <div className="max-w-3xl mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 text-white">Priority Research & Funding Areas</h2>
            <p className="text-sm sm:text-lg text-white/80">Eminsphere™ prioritizes transformative, scalable, and globally relevant projects aligned with innovation, sustainability, research excellence, and technological advancement.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-primary/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 backdrop-blur-sm">
              <Cpu className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Artificial Intelligence</h4>
              <p className="text-white/80 leading-relaxed text-xs sm:text-sm">AI systems, automation, intelligent analytics, and cognitive computing.</p>
            </div>
            <div className="bg-primary/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 backdrop-blur-sm">
              <Activity className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Healthcare Innovation</h4>
              <p className="text-white/80 leading-relaxed text-xs sm:text-sm">Diagnostics, telemedicine, biomedical systems, and public healthcare solutions.</p>
            </div>
            <div className="bg-primary/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 backdrop-blur-sm">
              <Building2 className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Smart Manufacturing</h4>
              <p className="text-white/80 leading-relaxed text-xs sm:text-sm">Industry 4.0 technologies, robotics, industrial automation, and sustainable production.</p>
            </div>
            <div className="bg-primary/10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 backdrop-blur-sm">
              <Microscope className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-4 sm:mb-6" />
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Scientific Research</h4>
              <p className="text-white/80 leading-relaxed text-xs sm:text-sm">Fundamental science, multidisciplinary innovation, and applied research initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBMISSION PROCESS */}
      <section id="submission" className="container py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            How to Apply
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">Proposal Submission Framework</h2>
          <p className="text-sm sm:text-lg text-muted-foreground">Applicants are encouraged to submit structured, professionally documented proposals aligned with institutional and regulatory standards.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative p-5 sm:p-8 bg-card rounded-2xl sm:rounded-3xl border-t-4 border-t-accent shadow-sm">
            <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg border-4 border-background">1</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 mt-3 sm:mt-4">Executive Summary</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Submit project objectives, innovation highlights, and expected impact outcomes.</p>
          </div>
          
          <div className="relative p-5 sm:p-8 bg-card rounded-2xl sm:rounded-3xl border-t-4 border-t-accent shadow-sm">
            <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg border-4 border-background">2</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 mt-3 sm:mt-4">Technical Documentation</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Provide methodology, implementation roadmap, and infrastructure requirements.</p>
          </div>

          <div className="relative p-5 sm:p-8 bg-card rounded-2xl sm:rounded-3xl border-t-4 border-t-accent shadow-sm">
            <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg border-4 border-background">3</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 mt-3 sm:mt-4">Institutional Credentials</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Include registrations, approvals, accreditation details, and investigator profiles.</p>
          </div>

          <div className="relative p-5 sm:p-8 bg-card rounded-2xl sm:rounded-3xl border-t-4 border-t-accent shadow-sm">
            <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg border-4 border-background">4</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 mt-3 sm:mt-4">Compliance Review</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">All proposals undergo technical, administrative, ethical, and financial evaluation.</p>
          </div>
        </div>
      </section>

      {/* DEADLINE HIGHLIGHT */}
      <section className="bg-muted py-16 sm:py-24 border-b">
        <div className="container">
          <div className="bg-card rounded-2xl sm:rounded-[40px] p-5 sm:p-10 md:p-16 shadow-elegant text-center relative overflow-hidden border border-border">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-100 text-red-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-6 sm:mb-8">
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Important Notification
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-primary mb-4 sm:mb-6">Official Submission Deadline</h2>
              <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12">
                All participating institutions, universities, research laboratories, medical organizations, innovation centers, startups, and industrial entities are requested to submit their complete institutional proposals before the official submission deadline.
              </p>

              <div className="w-full sm:w-auto inline-block bg-gradient-to-br from-primary to-primary/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-primary-foreground shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-accent font-bold tracking-[0.2em] text-xs sm:text-sm md:text-base mb-4 sm:mb-6">FINAL SUBMISSION DATE</div>
                  <div className="flex items-start justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    <span className="text-6xl sm:text-7xl md:text-9xl font-black leading-none">31</span>
                    <div className="flex flex-col text-left">
                      <span className="text-xl sm:text-2xl md:text-4xl font-bold">ST</span>
                      <span className="text-3xl sm:text-4xl md:text-6xl font-black tracking-widest leading-none mt-1 sm:mt-2">MAY</span>
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-5xl font-black text-primary-foreground/90 mb-6 sm:mb-8">2026</div>
                  <div className="inline-block bg-primary-foreground/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold border border-primary-foreground/20">
                    Applications Open • Global Funding Cycle 2026
                  </div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-6 sm:mt-8 max-w-lg mx-auto">
                *Late or incomplete submissions may not be considered for evaluation under the current funding cycle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResearchFunding;
