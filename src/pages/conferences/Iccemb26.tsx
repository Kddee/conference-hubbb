import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, BookOpen, Scale, Globe, FileCheck2, ScrollText, Users } from "lucide-react";
import navinImg from "@/assets/navin.png";
import pankajImg from "@/assets/WhatsApp Image 2026-05-29 at 11.21.06 AM.jpeg";
import ganeshImg from "@/assets/image copy 2.png";

import glimpse1 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.34 AM.jpeg";
import glimpse2 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.35 AM (1).jpeg";
import glimpse3 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.35 AM (2).jpeg";
import glimpse4 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.35 AM.jpeg";
import glimpse5 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.54 AM (1).jpeg";
import glimpse6 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.54 AM.jpeg";
import glimpse7 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.55 AM (1).jpeg";
import glimpse8 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.55 AM (2).jpeg";
import glimpse9 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.55 AM (3).jpeg";
import glimpse10 from "@/assets/WhatsApp Image 2026-06-03 at 6.41.55 AM.jpeg";
import glimpse11 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.47 PM.jpeg";
import glimpse12 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.48 PM (1).jpeg";
import glimpse13 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.48 PM (2).jpeg";
import glimpse14 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.48 PM.jpeg";
import glimpse15 from "@/assets/WhatsApp Image 2026-06-03 at 7.22.49 PM.jpeg";
import glimpse16 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.41 PM (1).jpeg";
import glimpse17 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.41 PM.jpeg";
import glimpse18 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.42 PM (1).jpeg";
import glimpse19 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.42 PM (2).jpeg";
import glimpse20 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.42 PM.jpeg";
import glimpse21 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.43 PM (1).jpeg";
import glimpse22 from "@/assets/WhatsApp Image 2026-06-03 at 7.24.43 PM.jpeg";
import glimpse23 from "@/assets/WhatsApp Image 2026-06-03 at 7.42.43 AM.jpeg";
import glimpse24 from "@/assets/WhatsApp Image 2026-06-03 at 7.42.44 AM.jpeg";

const conferenceData = {
  id: "ICCEMB-26",
  title: "International Conference on Computer Science, Education, Medical and Business",
  date: "31st May 2026",
  location: "Kenya, East Africa (online Mode)",
  registrationLink: "https://forms.gle/u6H8B5cd1KJrJRtQ7",
  about: [
    "The scope of ICCEMB-26 encompasses theoretical, experimental, and applied research contributions in the domains of Computer Science, Artificial Intelligence, Education Technologies, Medical Informatics, and Business Intelligence.",
    "The conference encourages interdisciplinary studies that integrate multiple domains to address contemporary technological and societal challenges."
  ],
  objectives: [
    { title: "Research Advancement", desc: "To promote cutting-edge research and innovation in interdisciplinary domains including AI, healthcare systems, education technology, and business analytics." },
    { title: "Knowledge Exchange", desc: "To provide a global platform for academicians, researchers, and professionals to exchange scientific knowledge and technical expertise." },
    { title: "Industry-Academia Collaboration", desc: "To strengthen collaboration between academia and industry for real-world problem solving and technology transfer." }
  ],
  highlights: [
    { title: "International Participation", desc: "Global representation from academia, industry, and research organizations." },
    { title: "Online Mode", desc: "Flexible participation through both physical and virtual platforms." },
    { title: "Expert Review Panel", desc: "Evaluation by experienced researchers and domain experts." },
    { title: "Publication Opportunities", desc: "Scope for indexed journal publications for selected papers." }
  ],
  policies: [
    { 
      title: "Peer Review & Publication Ethics", 
      icon: <Scale className="h-6 w-6" />,
      content: "All submissions to ICCEMB-26 will undergo a rigorous double-blind peer review process conducted by subject matter experts. Each manuscript will be evaluated based on originality, technical quality, clarity, methodological rigor, and relevance to the conference themes. The conference strictly adheres to international publication ethics and anti-plagiarism policies. Submissions with plagiarism exceeding acceptable limits or lacking scientific contribution will be rejected without review." 
    },
    { 
      title: "Publication & Indexing", 
      icon: <BookOpen className="h-6 w-6" />,
      content: "Accepted and registered papers will be published in the official conference proceedings with an ISBN. Selected high-quality papers may be recommended for publication in indexed journals (Scopus / Web of Science) subject to additional editorial review and publisher guidelines. Authors are required to follow standard formatting guidelines such as IEEE or APA and ensure proper citation and referencing practices." 
    },
    { 
      title: "Registration Guidelines", 
      icon: <ScrollText className="h-6 w-6" />,
      content: "At least one author of each accepted paper must complete registration to ensure inclusion in the conference proceedings. Registration includes access to all technical sessions, conference materials, and certification. Both virtual and physical participation options are available. Detailed fee structure and payment guidelines will be communicated to authors upon acceptance." 
    },
    { 
      title: "Code of Conduct", 
      icon: <Users className="h-6 w-6" />,
      content: "ICCEMB-26 is committed to providing a professional, inclusive, and respectful environment for all participants. Any form of discrimination, harassment, or unethical behavior will not be tolerated. Participants are expected to maintain academic integrity, respect intellectual property rights, and adhere to professional standards throughout the conference." 
    }
  ],
  speakers: [
    { name: "Aishwarya Tyagi", org: "10x Salesforce Certified, Global Process Analyst, Senior Solutions Consultant, San Francisco, USA", country: "USA", img: "https://static.wixstatic.com/media/30814e_9761c6907e784a2eaf242aa98ee4fb8c~mv2.jpg" },
    { name: "Dr. Marek Wasiluk", org: "Clinical Research Expert, Poland", country: "Poland", img: "/speakers/dr-marek-wasiluk.png" },
    { name: "Dr. Shashi Bala Rai", org: "Panipat Institute of Engineering & Technology, Haryana", country: "India", img: "https://static.wixstatic.com/media/30814e_4be5926d8adc4e43bff352ea1ccb6c2a~mv2.jpeg" },
    { name: "Karan Kumar Ratra", org: "Retail Technology", country: "USA", img: "https://static.wixstatic.com/media/30814e_b013ae4c49494f099151f25bbffb92fe~mv2.jpeg" },
    { name: "Navin Kumar Chhibber", org: "AI/ML, GenAI and Data Platforms Leader, Product Engineering and Digital Transformation Expert, USA", country: "USA", img: navinImg },
    { name: "Pankaj Arora", org: "Healthcare Supply Chain Transformation Leader, Raleigh, North Carolina", country: "USA", img: pankajImg },
    { name: "Dr. Aida Mehrad", org: "C3S Business School", country: "Spain", img: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
    { name: "Dr. Walida Ounruean", org: "Uttaradit Rajabhat University", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_73060115e6b34cb882286565559ff5e2~mv2.jpeg" },
    { name: "Hemang Upadhyay", org: "AI, E-commerce & Analytics", country: "USA", img: "https://static.wixstatic.com/media/30814e_d8f3f76a4383421eb967c779a89ac17f~mv2.jpeg" },
    { name: "Nadine Zeinoun", org: "ICF Ottawa", country: "Canada", img: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
    { name: "Dr. Ganesh Hinge", org: "Principal, Navsahyadri Group of Institutes, College of Engineering", country: "India", img: ganeshImg }
  ],
  tracks: [
    "Computer Science",
    "Artificial Intelligence",
    "Education Technologies",
    "Medical Informatics",
    "Business Intelligence"
  ],
  delegates: [
    { name: "Hicham El Khodja", org: "Researcher, Morocco", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_d1c8c65f9d4d4bd59632c05aa894aa71~mv2.jpeg" },
    { name: "Prof. Dr. Alexander Bull", org: "Germany", country: "Germany", img: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
    { name: "Dr. Aida Mehrad", org: "C3S Business School", country: "Spain", img: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
    { name: "Dr. Mehwish Rashid", org: "Keiser University, USA", country: "USA", img: "https://static.wixstatic.com/media/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
    { name: "Ezinne Esther Arisa", org: "South Africa", country: "South Africa", img: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
    { name: "Dr. Zoha Rahman", org: "USA", country: "USA", img: "https://static.wixstatic.com/media/30814e_2a893f0530e74f178c18e5939b687048~mv2.jpg" },
    { name: "Dr. Dina A. Alkhodary", org: "Jordan", country: "Jordan", img: "https://static.wixstatic.com/media/30814e_1feb45bda81f4dcdb4b55439a6f8d65a~mv2.jpg" },
    { name: "Dr. Firas Zeidan", org: "Lebanon", country: "Lebanon", img: "https://static.wixstatic.com/media/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" }
  ],
  timeline: [
    { date: "May 05, 2026", label: "Abstract Submission", desc: "Deadline" },
    { date: "May 15, 2026", label: "Full Paper Submission", desc: "Deadline" },
    { date: "May 20, 2026", label: "Acceptance Notification", desc: "Notification of acceptance" },
    { date: "May 25, 2026", label: "Final Submission & Registration", desc: "Deadline" },
    { date: "May 31, 2026", label: "Conference Date", desc: "Main event" }
  ],
  glimpses: [
    glimpse1, glimpse2, glimpse3, glimpse4, glimpse5, glimpse6,
    glimpse7, glimpse8, glimpse9, glimpse10, glimpse11, glimpse12,
    glimpse13, glimpse14, glimpse15, glimpse16, glimpse17, glimpse18,
    glimpse19, glimpse20, glimpse21, glimpse22, glimpse23, glimpse24
  ]
};

const Iccemb26 = () => {
  return (
    <div className="bg-background">
      {/* ENTERPRISE HERO */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Proceedings Live
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              {conferenceData.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-10 text-foreground/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="font-medium">{conferenceData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium">{conferenceData.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl">
                <Link to="/recent-proceedings/iccemb-26">
                  View Proceedings <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full shadow-xl bg-background/10 backdrop-blur-md border-primary-foreground/20 text-white hover:bg-background/20 hover:text-white">
                <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
                  Registration Info
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN OVERVIEW */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <div className="h-8 w-2 bg-accent rounded-full"></div>
              Scope of the Conference
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-primary mt-12 mb-8 flex items-center gap-3">
              <div className="h-8 w-2 bg-accent rounded-full"></div>
              Conference Objectives
            </h2>
            <div className="space-y-6">
              {conferenceData.objectives.map((obj, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{obj.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <Card className="p-8 bg-muted/50 border-0 shadow-inner h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Key Features</h3>
              <div className="space-y-6">
                {conferenceData.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{h.title}</h4>
                      <p className="text-sm text-muted-foreground">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* POLICIES & GUIDELINES */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Conference Policies & Guidelines</h2>
            <p className="text-lg text-muted-foreground">Essential information regarding submissions, publication, and participation at ICCEMB-26.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {conferenceData.policies.map((policy, idx) => (
              <Card key={idx} className="p-8 bg-card hover:shadow-md transition-shadow border-t-4 border-t-accent shadow-sm">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {policy.icon}
                </div>
                <h3 className="font-bold text-xl mb-4 text-primary">{policy.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{policy.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKS & TIMELINE COMPOSITE */}
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Tracks */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-white">Conference Tracks</h2>
              <div className="grid sm:grid-cols-1 gap-4">
                {conferenceData.tracks.map((track, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3 hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-sm text-white">{track}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Important Dates</h2>
              <div className="space-y-6">
                {conferenceData.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start relative">
                    {idx !== conferenceData.timeline.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-[-24px] w-px bg-primary/30"></div>
                    )}
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 z-10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="pt-2">
                      <div className="text-xl font-bold text-primary">{item.date}</div>
                      <h4 className="font-semibold text-white mt-1">{item.label}</h4>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISTINGUISHED GUEST OF HONOR */}
      <section className="container pt-24 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Distinguished Guest of Honor</h2>
          <p className="text-lg text-muted-foreground">Honorable Guest for ICCEMB-26.</p>
        </div>
        
        <div className="flex justify-center">
          <div className="group flex flex-col items-center text-center max-w-sm">
            <div className="relative h-48 w-48 mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              <img 
                src="https://static.wixstatic.com/media/30814e_bf66c69035bc4e41bc50c2345187c6f2~mv2.jpeg" 
                alt="Dr. Jitendra Pandey, FHEA" 
                className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" 
                loading="lazy" 
              />
            </div>
            <h4 className="font-bold text-primary text-2xl leading-tight mb-2">Dr. Jitendra Pandey, FHEA</h4>
            <p className="text-md text-muted-foreground mb-2 font-medium">Distinguished Guest of Honor</p>
            <p className="text-sm text-muted-foreground">Technical Program Committee Chair | Senior Faculty Member, Middle East College</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mt-2">Oman</p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP GRID */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Keynote Speakers</h2>
          <p className="text-lg text-muted-foreground">The visionaries and academic leaders presenting at ICCEMB-26.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {conferenceData.speakers.map((s, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="relative h-40 w-40 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                {s.img ? (
                  <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
                ) : (
                  <div className="relative h-full w-full rounded-full border-4 border-background shadow-lg z-10 bg-muted flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                )}
              </div>
              <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
              <p className="text-sm text-muted-foreground mb-1">{s.org}</p>
              {s.country && <p className="text-xs font-semibold uppercase tracking-wider text-accent">{s.country}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ORGANIZING COMMITTEE */}
      <section className="bg-muted py-24 border-t">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center justify-center gap-3">
              <User className="h-8 w-8 text-accent" />
              Technical Program Committee
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {conferenceData.delegates.map((d, idx) => (
                <div key={idx} className="group flex flex-col items-center text-center">
                  <div className="relative h-40 w-40 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    {d.img ? (
                      <img src={d.img} alt={d.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
                    ) : (
                      <div className="relative h-full w-full rounded-full border-4 border-background shadow-lg z-10 bg-muted flex items-center justify-center">
                        <User className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-primary text-lg leading-tight mb-1">{d.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{d.org}</p>
                  {d.country && <p className="text-xs font-semibold uppercase tracking-wider text-accent">{d.country}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCEEDINGS BANNER */}
      <section className="container py-20 text-center">
        <div className="max-w-4xl mx-auto bg-primary/10 p-12 rounded-3xl backdrop-blur-sm border border-primary/30 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Official ICCEMB-26 Conference Proceedings
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The proceedings of the International Conference on Computer Science, Education, Medical and Business (ICCEMB-26) are now officially available. Explore peer-reviewed research papers and keynote video presentations.
          </p>
          <Button asChild size="lg" className="rounded-full shadow-xl">
            <Link to="/recent-proceedings/iccemb-26">
              View Conference Proceedings <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Iccemb26;
