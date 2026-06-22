import React from "react";
import { Card } from "@/components/ui/card";
import ConferenceSections from "@/components/layout/ConferenceSections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, CheckCircle2, User, Globe, BookOpen, Star, Trophy, Laptop, Lightbulb, FileCheck2, Search, Award, ShieldAlert, Percent, Ban, Scale, Users, EyeOff, Book, Copyright, Handshake, Mail } from "lucide-react";

const conferenceData = {
  id: "ICMREF-26",
  title: "International Conference on Multidisciplinary Research & Emerging Frontiers in AI, Software Systems & Emerging Technologies",
  date: "19th July 2026",
  location: "IMFC Kenya Headquarters, Nairobi, Kenya",
  registrationLink: "https://forms.gle/oY44ySZUNz3puve4A",
  about: [
    "ICMREF-26 is an international academic forum dedicated to advancing multidisciplinary research across emerging domains in Artificial Intelligence, Software Systems, and Advanced Technologies. The conference aims to provide a structured platform for researchers, academicians, and industry professionals to present original contributions, exchange technical insights, and explore collaborative opportunities.",
    "The scope of the conference spans applied and theoretical research in computing, engineering, data-driven systems, healthcare technologies, and sustainable innovation. Emphasis is placed on methodological rigor, reproducibility, and practical relevance, ensuring alignment with current global research and industry trends.",
    "ICMREF-26 fosters interdisciplinary collaboration by bringing together participants from academia, research institutions, and industry, supporting knowledge transfer and the development of impactful technological solutions."
  ],
  venue: {
    inPerson: {
      title: "In-Person Participation",
      address: "IMFC Kenya Headquarters\nKianda Kibera 42\nP.O. Box 410-00605\nUthiru, Nairobi, Kenya 🇰🇪",
      desc: "The physical venue provides a structured academic environment for paper presentations, technical sessions, and professional networking. Participants will have the opportunity to engage in direct discussions, panel interactions, and collaborative exchanges."
    },
    virtual: {
      title: "Virtual Participation",
      address: "Global Online Access",
      desc: "ICMREF-26 offers a fully integrated virtual participation mode to ensure accessibility for international attendees. The conference will be conducted through secure digital platforms enabling live presentations, interactive Q&A sessions, and virtual networking."
    }
  },
  callForPapers: [
    { title: "Topics of Interest", icon: <Lightbulb className="h-6 w-6" />, desc: "Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Internet of Things (IoT), Blockchain Technologies, Cybersecurity, Cloud & Distributed Computing, Edge Computing, Smart Systems, Human-Computer Interaction, and related interdisciplinary domains." },
    { title: "Submission Categories", icon: <FileCheck2 className="h-6 w-6" />, desc: "The conference accepts full-length research papers, short papers, technical reports, case studies, and industry-oriented contributions. All submissions must present original work and should not be under consideration in any other conference or journal." },
    { title: "Review & Evaluation", icon: <Search className="h-6 w-6" />, desc: "All submissions will undergo a structured peer-review process. Papers will be evaluated based on originality, technical quality, clarity of presentation, and relevance to the conference themes." },
    { title: "Recognition", icon: <Award className="h-6 w-6" />, desc: "Selected high-quality papers may be considered for recognition based on reviewer evaluations and program committee recommendations." }
  ],
  hostCity: [
    { title: "Technology & Innovation Ecosystem", img: "https://static.wixstatic.com/media/30814e_48df2905d6814c4ea131690fc1842119~mv2.avif", desc: "Emerging hub for startups, research labs, and digital infrastructure" },
    { title: "Urban & Academic Environment", img: "https://static.wixstatic.com/media/30814e_62f0ade182f54642aca12223c23c3986~mv2.avif", desc: "Modern facilities supporting research, education, and collaboration" },
    { title: "Natural Research Context", img: "https://static.wixstatic.com/media/30814e_de8aaece2df448a2884abc4fc620ed48~mv2.avif", desc: "Unique ecological landscapes offering environmental and sustainability insights" },
    { title: "Cultural & Global Connectivity", img: "https://static.wixstatic.com/media/30814e_543362c551fa4340a1bb7993b329fa3d~mv2.avif", desc: "Diverse cultural setting with strong international engagement" }
  ],
  publication: [
    { title: "ISBN Conference Proceedings", img: "https://i.postimg.cc/VvnzKNKj/image.png", desc: "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number, ensuring global visibility, citation, and academic recognition." },
    { title: "Scopus Indexed Journals (Opportunity)", img: "https://i.postimg.cc/hPVGr2wS/image.png", desc: "Extended versions of selected high-quality papers may be recommended for publication in Scopus indexed journals, subject to journal scope, editorial decision, and an additional peer-review process." },
    { title: "Web of Science (Under Consideration)", img: "https://i.postimg.cc/0NX5QF6x/image.png", desc: "Selected papers may be considered for submission to journals indexed in Web of Science, based on quality, originality, and editorial evaluation." },
    { title: "DOI & Digital Access", img: null, desc: "Each published paper may be assigned a Digital Object Identifier (DOI) to ensure permanent accessibility and citation tracking." }
  ],
  whyAttend: [
    { title: "International Academic Engagement", icon: <Globe className="h-6 w-6" />, desc: "Engage with researchers, academicians, and industry professionals from diverse geographical regions, facilitating cross-disciplinary knowledge exchange and global research collaboration." },
    { title: "Scholarly Dissemination", icon: <BookOpen className="h-6 w-6" />, desc: "Present and disseminate research findings through peer-reviewed conference proceedings, with opportunities for further consideration in relevant academic publication channels." },
    { title: "Research & Industry Interaction", icon: <Users className="h-6 w-6" />, desc: "Interact with experts from academia and industry, enabling discussions on current challenges, applied research, and potential collaborative initiatives." },
    { title: "Professional Development", icon: <Star className="h-6 w-6" />, desc: "Enhance academic and professional competencies through exposure to recent advancements, technical sessions, and structured discussions within specialized domains." }
  ],
  plagiarism: [
    { title: "Academic Integrity", icon: <ShieldAlert className="h-6 w-6" />, desc: "ICMREF-26 is committed to maintaining high standards of academic integrity. All submissions must represent original work and comply with established ethical guidelines for scholarly publishing." },
    { title: "Similarity Assessment", icon: <Percent className="h-6 w-6" />, desc: "Submitted manuscripts may be screened using plagiarism detection tools. Similarity levels will be evaluated in context, considering proper citation, reuse of standard terminology, and methodological references." },
    { title: "Policy Enforcement", icon: <Ban className="h-6 w-6" />, desc: "Submissions identified with significant overlap or unethical practices may be rejected during the review process. Authors may be requested to revise and address concerns where appropriate." },
    { title: "Ethical Compliance", icon: <Scale className="h-6 w-6" />, desc: "Authors are expected to follow internationally recognized academic practices, including proper citation, acknowledgment of sources, and transparency in research methodology and data reporting." }
  ],
  review: [
    { title: "Qualified Reviewers", icon: <Users className="h-6 w-6" />, desc: "All submissions are evaluated by qualified reviewers with relevant expertise in the respective subject domains, drawn from academia and industry." },
    { title: "Double-Blind Review", icon: <EyeOff className="h-6 w-6" />, desc: "The conference follows a double-blind peer review process, ensuring that both authors and reviewers remain anonymous to promote fairness and impartial evaluation." },
    { title: "Evaluation Criteria", icon: <Star className="h-6 w-6" />, desc: "Submissions are assessed based on originality, technical quality, clarity of presentation, methodological rigor, and relevance to the conference themes." },
    { title: "Decision Process", icon: <CheckCircle2 className="h-6 w-6" />, desc: "Final acceptance decisions are made by the Program Committee based on reviewer reports, ensuring consistency with academic standards and conference objectives." }
  ],
  ethics: [
    { title: "Publication Policy", icon: <Book className="h-6 w-6" />, desc: "Accepted and registered papers will be included in the official conference proceedings. Selected papers may be considered for further evaluation in appropriate publication venues, subject to editorial policies and scope." },
    { title: "Copyright & Usage", icon: <Copyright className="h-6 w-6" />, desc: "Authors retain the rights to their work while granting the conference permission to publish, distribute, and archive the accepted manuscripts for academic purposes." },
    { title: "Research Ethics", icon: <Scale className="h-6 w-6" />, desc: "All research must comply with established ethical standards, including appropriate approvals for studies involving human participants, animals, or sensitive data." },
    { title: "Conflict of Interest", icon: <Handshake className="h-6 w-6" />, desc: "Authors, reviewers, and committee members are required to disclose any potential conflicts of interest to ensure transparency and unbiased evaluation." }
  ],
  faq: [
    { q: "Is the conference conducted in hybrid mode?", a: "Yes, ICMREF-26 will be conducted in both in-person (Nairobi, Kenya) and virtual modes to facilitate broader participation." },
    { q: "Will all submitted papers be published?", a: "Only papers that are accepted through the peer review process and successfully registered will be included in the conference proceedings." },
    { q: "Are participation certificates provided?", a: "Certificates of participation/presentation will be issued to registered authors and attendees following the conference." },
    { q: "Are submissions checked for plagiarism?", a: "Yes, submissions may be screened using standard plagiarism detection tools as part of the review and quality assurance process." }
  ],
  fees: [
    { category: "Presentation (Without Publication)", india: "INR 4,000", intl: "USD 100" },
    { category: "Attendee / Listener (No Presentation)", india: "INR 2,000", intl: "USD 50" },
    { category: "Paper Publication (Accepted Papers – IGI Global)", india: "INR 9,000", intl: "USD 180" }
  ],
  speakers: [
    { name: "Lawrence Mazaki Mashati", org: "Conference Patron | Community Development Professional, IMFC", country: "Kenya", img: "https://static.wixstatic.com/media/30814e_86a164138da142578e674588143e3af3~mv2.jpeg" },
    { name: "Dr. Jitendra Pandey, FHEA", org: "Technical Program Committee Chair | Senior Faculty Member, Middle East College", country: "Oman", img: "https://static.wixstatic.com/media/30814e_bf66c69035bc4e41bc50c2345187c6f2~mv2.jpeg" }
  ],
  tracks: [
    "Artificial Intelligence, Machine Learning, Deep Learning, Data Science",
    "Internet of Things (IoT), Blockchain Technologies, Cybersecurity",
    "Cloud & Distributed Computing, Edge Computing",
    "Smart Systems, Human-Computer Interaction",
    "Related Interdisciplinary Domains"
  ],
  delegates: [
    { name: "Dr. Ayoub Regragui", org: "Mohammed V University", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
    { name: "Nadine Zeinoun", org: "ICF Ottawa", country: "Canada", img: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
    { name: "Ezinne Esther Arisa", org: "South Africa", country: "South Africa", img: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
    { name: "Dr. Zoha Rahman", org: "USA", country: "USA", img: "https://static.wixstatic.com/media/30814e_2a893f0530e74f178c18e5939b687048~mv2.jpg" },
    { name: "Dr. Dina A. Alkhodary", org: "Jordan", country: "Jordan", img: "https://static.wixstatic.com/media/30814e_1feb45bda81f4dcdb4b55439a6f8d65a~mv2.jpg" },
    { name: "Dr. Firas Zeidan", org: "Lebanon", country: "Lebanon", img: "https://static.wixstatic.com/media/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" },
    { name: "Dr. Walida Ounruean", org: "Thailand", country: "Thailand", img: "https://static.wixstatic.com/media/30814e_ac6c40d612254293a4f1f4479dfd7b61~mv2.avif" },
    { name: "Dr. Tiansheng Yang", org: "UK", country: "UK", img: "https://static.wixstatic.com/media/30814e_3a6549a4d2904005a224db41ca5f9cd0~mv2.avif" },
    { name: "Mouhsine Ait El Mouden", org: "Morocco", country: "Morocco", img: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
    { name: "Sam Lawe", org: "New Zealand", country: "New Zealand", img: "https://static.wixstatic.com/media/30814e_485133b243e34681b345c2286ad708b2~mv2.jpeg" },
    { name: "Meryem Gurel", org: "Turkey", country: "Turkey", img: "https://static.wixstatic.com/media/30814e_6346862f510f41209c68b590a9da5215~mv2.jpeg" },
    { name: "Dr. Ruth Abiola Adimula", org: "Nigeria", country: "Nigeria", img: "https://static.wixstatic.com/media/30814e_d096ce6ec8ff4b05a2cc1c7db574278b~mv2.jpeg" },
    { name: "Emem Akpabio", org: "South Africa", country: "South Africa", img: "https://static.wixstatic.com/media/30814e_2dad2d939abb4236bcb405093be55872~mv2.jpg" }
  ],
  timeline: [
    { date: "29 June 2026", label: "Paper Submission", desc: "Deadline for submitting papers" },
    { date: "6 July 2026", label: "Acceptance Notification", desc: "Notification of acceptance" },
    { date: "12 July 2026", label: "Final Camera-Ready Submission", desc: "Final submission deadline" },
    { date: "19th July 2026", label: "Conference Date", desc: "Main event in Nairobi, Kenya" }
  ]
};

const Icmref26 = () => {
  return (
    <div className="bg-background">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 lg:py-32 bg-background border-b border-border/50">
        <div className="absolute inset-0 gradient-overlay z-0"></div>
        <div className="relative z-10 container max-w-6xl">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/40 text-accent font-medium text-sm mb-8 backdrop-blur-md border border-accent/30">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span></span>
              {conferenceData.id} • Upcoming Conference
            </div>
            <p className="font-mono text-accent text-sm uppercase tracking-wider mb-4">In Collaboration with IMFC Kenya</p>
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

            <div className="mb-10 p-6 bg-card rounded-lg border border-border inline-block">
              <p className="text-sm text-muted-foreground mb-3 font-semibold uppercase tracking-wider">Publishing Partner</p>
              <img src="https://static.wixstatic.com/media/30814e_1cce99ce2356404eb0b67f75ecbafe63~mv2.png" alt="IGI Global" className="h-16" />
            </div>

            <div>
              <Button asChild variant="hero" size="lg" className="rounded-full shadow-xl">
                <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
                  Submit Paper / Register <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW & VENUE */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
              <div className="h-8 w-2 bg-accent rounded-full"></div>
              About the Conference
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              {conferenceData.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Venue & Attendance</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-card border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" /> {conferenceData.venue.inPerson.title}
                </h3>
                <p className="font-mono text-sm whitespace-pre-line mb-4 font-semibold">{conferenceData.venue.inPerson.address}</p>
                <p className="text-sm text-muted-foreground">{conferenceData.venue.inPerson.desc}</p>
              </Card>

              <Card className="p-6 bg-card border-l-4 border-l-accent shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-accent" /> {conferenceData.venue.virtual.title}
                </h3>
                <p className="font-mono text-sm whitespace-pre-line mb-4 font-semibold">{conferenceData.venue.virtual.address}</p>
                <p className="text-sm text-muted-foreground">{conferenceData.venue.virtual.desc}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CALL FOR PAPERS & PUBLICATION */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Call for Papers</h2>
            <p className="text-lg text-muted-foreground">ICMREF-26 invites the submission of original and unpublished research contributions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {conferenceData.callForPapers.map((item, idx) => (
              <Card key={idx} className="p-6 bg-card hover:-translate-y-1 transition-transform border-t-4 border-t-accent shadow-sm">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Publication & Indexing</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceData.publication.map((item, idx) => (
              <Card key={idx} className="p-6 bg-card hover:-translate-y-1 transition-transform border-t-4 border-t-primary shadow-sm text-center flex flex-col items-center">
                {item.img && <img src={item.img} alt={item.title} className="h-16 mb-6 object-contain" />}
                {!item.img && <Book className="h-12 w-12 text-primary mb-6" />}
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOST CITY */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Host City: Nairobi, Kenya 🇰🇪</h2>
          <p className="text-lg text-muted-foreground">Nairobi, the capital of Kenya, is recognized as one of Africa's leading centers for technological innovation and research-driven development.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {conferenceData.hostCity.map((item, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden shadow-lg border-t-4 border-accent">
              <img src={item.img} alt={item.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POLICIES GRID */}
      <section className="bg-gradient-to-r from-background to-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Peer Review Process</h2>
              <div className="space-y-4">
                {conferenceData.review.map((item, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-5 flex items-start gap-4">
                    <div className="text-primary shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Ethics & Plagiarism</h2>
              <div className="space-y-4">
                {conferenceData.plagiarism.map((item, idx) => (
                  <div key={idx} className="bg-primary/10 border border-primary/30 rounded-lg p-5 flex items-start gap-4">
                    <div className="text-primary shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-muted py-24">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Important Dates</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {conferenceData.timeline.map((item, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-accent relative overflow-hidden bg-card">
                <Calendar className="absolute -right-4 -bottom-4 h-24 w-24 text-accent/5" />
                <h4 className="text-sm font-bold text-muted-foreground mb-2">{item.label}</h4>
                <p className="text-2xl font-serif font-bold text-primary mb-2">{item.date}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION & FEES */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Registration & Fees</h2>
          <p className="text-lg text-muted-foreground">Publication fees are applicable only for accepted papers. Detailed payment instructions will be shared after acceptance notification.</p>
        </div>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-md border border-border">
          <div className="grid grid-cols-3 bg-accent text-accent-foreground font-bold p-4">
            <div className="col-span-1">Category</div>
            <div className="col-span-1 text-center">Indian Participants</div>
            <div className="col-span-1 text-center">International Participants</div>
          </div>
          <div className="divide-y divide-border">
            {conferenceData.fees.map((fee, idx) => (
              <div key={idx} className="grid grid-cols-3 p-4 hover:bg-muted/50 transition-colors">
                <div className="col-span-1 font-semibold">{fee.category}</div>
                <div className="col-span-1 text-center font-mono">{fee.india}</div>
                <div className="col-span-1 text-center font-mono">{fee.intl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CONTACT */}
      <section className="bg-muted py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {conferenceData.faq.map((item, idx) => (
                  <Card key={idx} className="p-6 bg-card border-l-4 border-l-primary shadow-sm">
                    <h4 className="font-bold text-lg mb-2">{item.q}</h4>
                    <p className="text-muted-foreground">{item.a}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Contact Us</h2>
              <div className="space-y-6">
                <Card className="p-8 bg-primary text-primary-foreground border-0 text-center flex flex-col items-center justify-center">
                  <Mail className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Have questions?</h3>
                  <p className="text-primary-foreground/80 mb-6">Reach out to our organizing committee for support.</p>
                  <a href="mailto:info@eminsphere.com" className="text-accent hover:underline font-bold text-xl">info@eminsphere.com</a>
                </Card>

                <div className="text-center mt-12 p-8 border-2 border-dashed border-border rounded-xl">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Join?</h3>
                  <Button asChild size="lg" className="rounded-full shadow-xl">
                    <a href={conferenceData.registrationLink} target="_blank" rel="noreferrer">
                      Register for ICMREF-26
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP GRID */}
      <section className="container py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Conference Patrons</h2>
          <p className="text-lg text-muted-foreground">The visionaries and academic leaders behind ICMREF-26.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {conferenceData.speakers.map((s, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="relative h-40 w-40 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <img src={s.img} alt={s.name} className="relative h-full w-full object-cover rounded-full border-4 border-background shadow-lg z-10" loading="lazy" />
              </div>
              <h4 className="font-bold text-primary text-lg leading-tight mb-1">{s.name}</h4>
              <p className="text-sm text-muted-foreground mb-2">{s.org}</p>
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
                  <p className="text-sm text-muted-foreground mb-2">{d.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ConferenceSections conferenceName={conferenceData.id} glimpses={conferenceData.glimpses ?? []} importantDates={conferenceData.timeline} sessionChairs={conferenceData.sessionChairs} />

    </div>
  );
};

export default Icmref26;
