import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle2,
  User,
  Globe,
  BookOpen,
  Award,
  ShieldCheck,
  Users,
  FileText,
  Sparkles,
  Cpu,
  Layers,
  Database,
  Bot,
  Plane,
  Building2,
  Hotel,
  Mail,
  Clock,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Laptop,
  Network,
  HelpCircle,
  Trophy,
  Compass,
  FileCheck2,
  Scale
} from "lucide-react";

import { toast } from "sonner";

const EMN_REGISTRATION_LINK = "#";

const ManilaNexus2027 = () => {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const handleRegistrationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Registration opening soon! The official registration portal link will be announced and updated shortly.");
  };

  const quickStats = [
    { label: "Conference Dates", value: "20–21 March 2027", sub: "Two-Day Global Summit", icon: Calendar },
    { label: "Host City", value: "Manila, Philippines", sub: "Southeast Asia Gateway", icon: MapPin },
    { label: "Participation Mode", value: "Hybrid Format", sub: "In-Person + Global Online", icon: Globe },
    { label: "Organizing Body", value: "Eminsphere™", sub: "ISO 9001:2015 Certified", icon: Award },
    { label: "Global Reach", value: "50+ Countries", sub: "Academics & Tech Leaders", icon: Users },
  ];

  const objectives = [
    { title: "Present Emerging Research", desc: "Showcase breakthrough discoveries in intelligent computing, generative architectures, and digital systems.", icon: Sparkles },
    { title: "Connect Academia & Industry", desc: "Bridge foundational university research with real-world enterprise engineering and industrial scale.", icon: Briefcase },
    { title: "Global Research Collaboration", desc: "Establish bilateral and multilateral international partnerships across top global universities and labs.", icon: Globe },
    { title: "Interdisciplinary Exchange", desc: "Stimulate cross-domain dialogue between computer science, cybersecurity, robotics, and social governance.", icon: Network },
    { title: "Empower Early-Career Scholars", desc: "Provide high-visibility platforms, mentorship, and presentation stages for doctoral scholars and junior faculty.", icon: GraduationCap },
    { title: "Navigate Emerging Challenges", desc: "Critically debate AI safety, explainability, quantum-readiness, data sovereignty, and algorithmic ethics.", icon: ShieldCheck },
    { title: "Pioneer Digital Futures", desc: "Chart actionable roadmaps for autonomous systems, digital twins, and next-generation societal computing.", icon: Cpu },
  ];

  const whyManilaPillars = [
    {
      title: "International Networking",
      desc: "Connect directly with prominent researchers, distinguished chairs, and enterprise tech architects from across the Asia-Pacific region, North America, Europe, and beyond.",
      icon: Users
    },
    {
      title: "Technology & Innovation",
      desc: "Manila stands at the forefront of Southeast Asia's accelerated digital transformation, with rapid expansion in AI centers of excellence, fintech hubs, and cloud infrastructure.",
      icon: Cpu
    },
    {
      title: "Industry Interaction",
      desc: "Engage with multinational technology leaders, visionary startup founders, and engineering executives deploying mission-critical systems in dynamic real-world environments.",
      icon: Briefcase
    },
    {
      title: "Global Collaboration",
      desc: "Establish long-term academic consortiums, joint grant proposals, and collaborative publication pipelines within a warm, world-class hospitable environment.",
      icon: Globe
    }
  ];

  const manilaGallery = [
    {
      title: "Manila Bay & Metropolitan Skyline",
      caption: "A vibrant global metropolis uniting heritage with high-tech urban dynamism.",
      img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Bonifacio Global City (BGC) Innovation District",
      caption: "The premier financial and technological nerve center of the Philippines.",
      img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Modern Architectural & Convention Spaces",
      caption: "World-standard auditoriums equipped with cutting-edge audiovisual systems.",
      img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Sunset over Manila Waterfront",
      caption: "Iconic sunsets and rich cultural avenues for an unforgettable delegate experience.",
      img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const tracks = [
    {
      number: "Track 01",
      title: "Intelligent Computing & Artificial Intelligence",
      icon: Bot,
      topics: [
        "Artificial Intelligence",
        "Generative AI & LLMs",
        "Agentic AI & Autonomous Agents",
        "Machine Learning & Deep Learning",
        "Explainable AI (XAI)",
        "AI Engineering & MLOps",
        "Intelligent Decision Support Systems",
        "Computer Vision & NLP",
        "Domain-Specific AI Applications"
      ]
    },
    {
      number: "Track 02",
      title: "Emerging Computing Systems",
      icon: Cpu,
      topics: [
        "Cloud Computing Architecture",
        "Edge & Fog Computing",
        "Distributed & Peer-to-Peer Systems",
        "High-Performance Computing (HPC)",
        "Quantum Computing & Quantum Algorithms",
        "Novel Computing Architectures",
        "Intelligent Infrastructure",
        "Next-Generation Serverless Paradigms"
      ]
    },
    {
      number: "Track 03",
      title: "Data, Analytics & Knowledge Systems",
      icon: Database,
      topics: [
        "Big Data Architectures",
        "Scalable Data Engineering",
        "Advanced Data Analytics",
        "Enterprise Business Intelligence",
        "Knowledge Graphs & Semantic Web",
        "Modern Data Science Methods",
        "Predictive & Prescriptive Analytics",
        "Decision Intelligence Frameworks"
      ]
    },
    {
      number: "Track 04",
      title: "Cybersecurity & Digital Trust",
      icon: ShieldCheck,
      topics: [
        "Cybersecurity & Threat Modeling",
        "Information & Network Security",
        "Privacy Engineering & Cryptography",
        "Decentralized Digital Identity",
        "Zero Trust Architecture (ZTA)",
        "Secure Hardware & Enclaves",
        "Adversarial AI & Model Defense",
        "Blockchain & Distributed Trust"
      ]
    },
    {
      number: "Track 05",
      title: "Smart Technologies & Digital Engineering",
      icon: Layers,
      topics: [
        "Industrial Internet of Things (IoT)",
        "Robotics & Mechatronics",
        "Industrial Automation & Control",
        "Digital Twins & Cyber-Physical Systems",
        "Smart Infrastructure & Smart Cities",
        "Intelligent Manufacturing (Industry 4.0)",
        "Autonomous Ground & Aerial Vehicles",
        "Human-Machine Co-Adaptation"
      ]
    },
    {
      number: "Track 06",
      title: "Future Digital Society & Governance",
      icon: Scale,
      topics: [
        "AI Governance & Safety Frameworks",
        "Responsible & Ethical AI Design",
        "Technology Ethics & Human Rights",
        "Digital Public Infrastructure (DPI)",
        "Human-AI Interaction & UX",
        "Enterprise Digital Transformation",
        "Future of Work & Automation Impact",
        "Socio-Technical Digital Policies"
      ]
    }
  ];

  const submissionCategories = [
    { title: "Full Research Papers", pages: "10–15 pages", desc: "Rigorous original experimental or theoretical contributions presenting novel methodologies, evaluations, and outcomes." },
    { title: "Applied Research Papers", pages: "8–12 pages", desc: "Real-world implementations, benchmark evaluations, testbed validation, and applied engineering systems." },
    { title: "Industry & Practice Papers", pages: "6–10 pages", desc: "Practical case studies, industrial deployment lessons, architectural patterns, and commercial innovations." },
    { title: "Short & Work-in-Progress", pages: "5–8 pages", desc: "Emerging concepts, pilot findings, novel problem formulations, and high-potential preliminary research." },
    { title: "Emerging Technology Reports", pages: "6–8 pages", desc: "In-depth surveys, state-of-the-art analyses, technology roadmaps, and emerging standard proposals." },
  ];

  const timelineDates = [
    { date: "15 October 2026", label: "Call for Papers Opens", desc: "Submission portal opens for draft manuscripts & abstracts", status: "Upcoming" },
    { date: "20 January 2027", label: "Paper Submission Deadline", desc: "Final date for full research paper & short paper uploads", status: "Critical" },
    { date: "10 February 2027", label: "Acceptance Notification", desc: "Peer-review feedback & formal acceptance letters sent", status: "Milestone" },
    { date: "25 February 2027", label: "Camera-Ready Paper Deadline", desc: "Final edited manuscripts and copyright assignments due", status: "Milestone" },
    { date: "25 February 2027", label: "Early-Bird Registration Deadline", desc: "Discounted registration rate deadline for all authors", status: "Milestone" },
    { date: "10 March 2027", label: "Final Registration Deadline", desc: "Closing date for in-person & online participant badges", status: "Critical" },
    { date: "20–21 March 2027", label: "Conference Dates", desc: "Main event in Manila, Philippines + Global Virtual Stream", status: "Main Event" },
  ];

  const submissionSteps = [
    { step: "01", title: "Prepare", desc: "Format your manuscript adhering strictly to conference structural, stylistic, and ethical guidelines." },
    { step: "02", title: "Submit", desc: "Upload your blinded PDF through the official Eminsphere online submission management portal." },
    { step: "03", title: "Peer Review", desc: "Submissions undergo double-blind technical review by minimum two qualified international referees." },
    { step: "04", title: "Decision", desc: "Receive comprehensive reviewer remarks, technical ratings, and formal acceptance or revision outcomes." },
    { step: "05", title: "Registration", desc: "Complete author conference registration and submit the finalized camera-ready manuscript." },
    { step: "06", title: "Presentation", desc: "Deliver your presentation live at the Manila venue or through the approved interactive virtual platform." }
  ];

  const speakers = [
    {
      name: "Dr. Jitendra Pandey, FHEA",
      title: "Technical Program Committee Chair & Senior Faculty Member",
      affiliation: "Middle East College",
      country: "Oman 🇴🇲",
      topic: "Cross-Disciplinary AI Foundations for Resilient Cyber Infrastructures",
      image: "https://static.wixstatic.com/media/30814e_bf66c69035bc4e41bc50c2345187c6f2~mv2.jpeg"
    },
    {
      name: "Mr. Bhushan Balkrishna Chaudhari",
      title: "Senior Technology Lead & Cloud Architect",
      affiliation: "Enterprise Computing Division",
      country: "New Jersey, USA 🇺🇸",
      topic: "Architecting Enterprise Zero-Trust & High-Performance Distributed Systems",
      image: "https://static.wixstatic.com/media/30814e_86a164138da142578e674588143e3af3~mv2.jpeg"
    },
    {
      name: "Dr. Ayoub Regragui",
      title: "Senior Research Scientist & Faculty of Sciences",
      affiliation: "Mohammed V University",
      country: "Morocco 🇲🇦",
      topic: "Deep Generative Models for Multi-Modal Predictive Decision Systems",
      image: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif"
    },
    {
      name: "Prof. Shweta N. Bansal",
      title: "Professor of Computer Engineering & IQAC Lead",
      affiliation: "D.Y. Patil College of Engineering",
      country: "India 🇮🇳",
      topic: "Knowledge Graph Engineering & Intelligent Decision Automation",
      image: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg"
    },
    {
      name: "Dr. Zoha Rahman",
      title: "Lead Researcher, Machine Learning & Analytics",
      affiliation: "Centre for Big Data & Machine Learning",
      country: "USA 🇺🇸",
      topic: "Next-Gen Quantum Computing Intersections with High-Dimensional Data Analytics",
      image: "https://static.wixstatic.com/media/30814e_2a893f0530e74f178c18e5939b687048~mv2.jpg"
    }
  ];

  const programDay1 = [
    { time: "08:00 – 09:00", title: "Registration, Delegate Badge Collection & Welcome Coffee", track: "Plenary Foyer" },
    { time: "09:00 – 09:30", title: "Official Opening Ceremony & Presidential Address", track: "Grand Ballroom" },
    { time: "09:30 – 10:15", title: "Opening Keynote: Frontier Intelligent Computing & Digital Futures", track: "Main Stage" },
    { time: "10:15 – 10:45", title: "Networking Coffee & Research Poster Exhibition", track: "Exhibition Hall" },
    { time: "10:45 – 12:30", title: "Technical Session I: Intelligent Computing & Machine Intelligence", track: "Rooms A, B & C" },
    { time: "12:30 – 13:30", title: "International Networking Luncheon", track: "Dining Pavilion" },
    { time: "13:30 – 15:00", title: "Technical Session II: Emerging Computing Systems & Cloud-Edge", track: "Rooms A, B & C" },
    { time: "15:00 – 15:30", title: "Afternoon Coffee & Industry Demonstration Showcase", track: "Exhibition Hall" },
    { time: "15:30 – 17:00", title: "Industry & Technology Forum: Applied Engineering at Enterprise Scale", track: "Auditorium" },
    { time: "17:00 – 18:00", title: "Executive Panel Discussion: The Future of Digital Trust & Zero-Trust Architecture", track: "Main Stage" },
    { time: "18:30 onwards", title: "Welcome Dinner & International Networking Reception", track: "Skyline Terrace" },
  ];

  const programDay2 = [
    { time: "09:00 – 09:45", title: "Morning Keynote: Quantum-Resistant Foundations & Next-Gen Digital Trust", track: "Main Stage" },
    { time: "09:45 – 11:15", title: "Technical Session III: Cybersecurity, Privacy & Distributed Trust", track: "Rooms A & B" },
    { time: "11:15 – 11:45", title: "Morning Coffee Break & Collaborative Synergy Lounge", track: "Exhibition Hall" },
    { time: "11:45 – 13:00", title: "Research Presentation Session: Smart Technologies, Robotics & Digital Twins", track: "Rooms A, B & C" },
    { time: "13:00 – 14:00", title: "Delegate Networking Luncheon", track: "Dining Pavilion" },
    { time: "14:00 – 15:30", title: "Emerging Technologies Forum: Responsible AI, Governance & Digital Society", track: "Auditorium" },
    { time: "15:30 – 16:30", title: "Distinguished Best Paper Finalist Presentations", track: "Main Stage" },
    { time: "16:30 – 17:00", title: "Conference Awards & Recognition Ceremony", track: "Main Stage" },
    { time: "17:00 – 17:30", title: "Valedictory Address, Closing Remarks & EMN 2028 Announcement", track: "Grand Ballroom" },
  ];

  const committee = [
    { role: "Conference General Chair", name: "Dr. Jitendra Pandey, FHEA", org: "Middle East College", country: "Oman" },
    { role: "Conference Co-Chair", name: "TBA", org: "Academic Advisory Board", country: "Philippines" },
    { role: "Technical Program Chair", name: "Dr. Ayoub Regragui", org: "Mohammed V University", country: "Morocco" },
    { role: "Publication Chair", name: "Prof. Shweta N. Bansal", org: "D.Y. Patil College of Engineering", country: "India" },
    { role: "Industry Relations Chair", name: "Mr. Bhushan Balkrishna Chaudhari", org: "Enterprise Cloud Architect", country: "USA" },
    { role: "International Relations Chair", name: "Dr. Zoha Rahman", org: "Big Data & ML Centre", country: "USA" },
    { role: "Local Organizing Chair", name: "Engr. Carlo Mendoza, Ph.D.", org: "Manila Tech Consortium", country: "Philippines" },
    { role: "Special Sessions Chair", name: "Dr. Dina A. Alkhodary", org: "Academic Forum", country: "Jordan" }
  ];

  const advisoryCountries = [
    { country: "Philippines 🇵🇭", role: "Host Academic Advisory & Industry Partnerships" },
    { country: "India 🇮🇳", role: "Computing Systems & Computational Intelligence" },
    { country: "United States 🇺🇸", role: "Enterprise Cloud, AI Safety & Big Data" },
    { country: "United Kingdom 🇬🇧", role: "Distributed Systems & Applied Machine Learning" },
    { country: "Australia 🇦🇺", role: "Data Science, Analytics & Privacy Frameworks" },
    { country: "Canada 🇨🇦", role: "Autonomous Systems & Intelligent Robotics" },
    { country: "Singapore 🇸🇬", role: "Smart City Infrastructure & FinTech Architectures" },
    { country: "Thailand 🇹🇭", role: "Digital Transformation & Cyber-Physical Security" },
    { country: "Japan 🇯🇵", role: "Human-Machine Interaction & Next-Gen Sensors" },
    { country: "Malaysia 🇲🇾", role: "Digital Governance & Sustainable Cloud Networks" },
  ];

  const venueFacilities = [
    { title: "Grand Plenary Hall", desc: "Acoustically tuned tiered auditorium accommodating 500+ delegates with dual panoramic LED displays." },
    { title: "Technical Parallel Rooms", desc: "4 specialized break-out halls with dedicated presentation podiums and hybrid streaming consoles." },
    { title: "Executive Speaker Lounge", desc: "Private briefing room with high-speed workstations, staging assistance, and green room amenities." },
    { title: "Registration & Info Desk", desc: "Automated badge issuance, welcome kit distribution, and multilingual concierge support." },
    { title: "High-Capacity Wi-Fi 6", desc: "Dedicated high-bandwidth enterprise internet across all conference halls and dining lounges." },
    { title: "Full Banquet Catering", desc: "Chef-curated international buffet luncheons, dietary-certified options, and continuous refreshments." }
  ];

  const awards = [
    { title: "Best Research Paper Award", desc: "Awarded to the paper demonstrating supreme originality, methodological rigor, and transformative scientific contribution.", icon: Trophy },
    { title: "Best Student Paper Award", desc: "Recognizing outstanding primary research conducted and presented by a registered doctoral or graduate student.", icon: Award },
    { title: "Emerging Researcher Recognition", desc: "Honoring an early-career investigator showing extraordinary promise and high-impact trajectory in intelligent systems.", icon: Sparkles },
    { title: "Distinguished Keynote Speaker Honor", desc: "Commemorating world-renowned invited plenary authorities who delivered visionary addresses at EMN 2027.", icon: User }
  ];

  const faqs = [
    {
      q: "Is Eminsphere Manila Nexus 2027 an in-person or online conference?",
      a: "EMN 2027 is structured as a premium hybrid conference. Registered delegates may participate physically at the contracted conference hotel venue in Manila, Philippines, or participate remotely via the interactive virtual conference portal."
    },
    {
      q: "Who is eligible to submit research manuscripts?",
      a: "Submissions are open globally to university faculty, independent researchers, research scholars, doctoral candidates, graduate students, and industry technology practitioners whose work aligns with the conference tracks."
    },
    {
      q: "Can international participants attend in person?",
      a: "Yes. International researchers and industry delegates are warmly welcomed. The organizing committee issues official formal invitation letters to registered attendees for visa facilitation upon request."
    },
    {
      q: "Can I attend the conference as a listener without presenting a paper?",
      a: "Yes. Academic scholars, students, and technology practitioners can register under the 'Attendee / Listener' category to access all keynotes, technical sessions, industry forums, and networking banquets."
    },
    {
      q: "What is the publication policy for accepted papers?",
      a: "Accepted and registered papers that are presented at the conference will be published in the official conference proceedings with a registered ISBN number and assigned permanent Digital Object Identifiers (DOI). Selected high-scoring papers will be recommended to partner indexed publication venues subject to external peer-review and editorial guidelines."
    },
    {
      q: "Where exactly will the conference be held in Manila?",
      a: "The conference will be hosted in a premier 5-star international conference hotel within Metro Manila's major business district (Bonifacio Global City / Makati / Pasay area). The exact contracted hotel property and delegate reservation code will be announced prior to the event."
    },
    {
      q: "Are the conference dates editable or subject to change?",
      a: "The core conference dates are scheduled for 20–21 March 2027. Any updates regarding deadline extensions or schedules will be immediately announced on the official conference portal and communicated to all registered authors."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030914] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 01 - TOP IN-PAGE ANCHOR NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-cyan-500/10 bg-[#030914]/90 backdrop-blur-xl">
        <div className="container max-w-7xl flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                EMN
              </div>
              <div className="hidden sm:block">
                <span className="text-sm font-bold tracking-wider text-white block leading-none">EMN 2027</span>
                <span className="text-[10px] text-cyan-400 tracking-widest font-mono uppercase">Manila Nexus</span>
              </div>
            </Link>
          </div>

          <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#why-manila" className="hover:text-cyan-400 transition-colors">Why Manila</a>
            <a href="#tracks" className="hover:text-cyan-400 transition-colors">Tracks</a>
            <a href="#cfp" className="hover:text-cyan-400 transition-colors">Call for Papers</a>
            <a href="#dates" className="hover:text-cyan-400 transition-colors">Dates</a>
            <a href="#speakers" className="hover:text-cyan-400 transition-colors">Speakers</a>
            <a href="#program" className="hover:text-cyan-400 transition-colors">Program</a>
            <a href="#committee" className="hover:text-cyan-400 transition-colors">Committee</a>
            <a href="#publication" className="hover:text-cyan-400 transition-colors">Publication</a>
            <a href="#venue" className="hover:text-cyan-400 transition-colors">Venue & Travel</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button asChild size="sm" variant="outline" className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 rounded-full text-xs font-semibold px-3 sm:px-4">
              <a href="#submission">Submit Paper</a>
            </Button>
            <Button
              size="sm"
              onClick={handleRegistrationClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full text-xs font-semibold px-3 sm:px-4 shadow-md shadow-cyan-500/25 cursor-pointer"
            >
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* 02 - HERO / HOME SECTION */}
      <section className="relative overflow-hidden pt-20 pb-28 md:py-32 border-b border-cyan-500/15">
        {/* Background Skyline Image with Deep Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1600&auto=format&fit=crop"
            alt="Manila Skyline Backdrop"
            className="w-full h-full object-cover object-center opacity-20 filter brightness-90 saturate-125 scale-105 animate-pulse [animation-duration:10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/95 via-[#030914]/80 to-[#030914]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))]" />
          {/* Subtle Tech Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 container max-w-6xl px-4 sm:px-6">
          <div className="max-w-4xl">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-semibold backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                EMN 2027 • Upcoming Global Conference
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60 text-xs font-mono">
                <span>Organized by Eminsphere™</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-semibold">
                <Globe className="h-3 w-3" /> Hybrid: In-Person + Online
              </div>
            </div>

            {/* Conference Title & Subtitle */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Eminsphere <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Manila Nexus</span> 2027
            </h1>
            
            <p className="text-lg sm:text-2xl text-cyan-100/90 font-medium leading-relaxed mb-4 max-w-3xl">
              International Conference on Intelligent Computing, Emerging Systems and Digital Futures
            </p>

            <p className="text-sm sm:text-base text-slate-400 italic mb-8 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400 shrink-0" />
              Connecting Global Research, Intelligent Technologies and the Digital Future.
            </p>

            {/* Meta Row: Date & City */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-10 text-slate-200 text-sm sm:text-base border-y border-white/10 py-4 max-w-2xl bg-white/[0.02] backdrop-blur-sm rounded-lg px-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Dates</div>
                  <div className="font-bold text-white">20–21 March 2027</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Location</div>
                  <div className="font-bold text-white">Manila, Philippines 🇵🇭</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Laptop className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono">Format</div>
                  <div className="font-bold text-white">Hybrid (In-Person + Online)</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 shadow-xl shadow-cyan-500/25 h-13 text-sm sm:text-base">
                <a href="#submission">
                  Submit Your Paper <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleRegistrationClick}
                className="rounded-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 h-13 px-8 text-sm sm:text-base cursor-pointer"
              >
                Register Now
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 rounded-full h-13 px-6 text-sm sm:text-base">
                <a href="#speaker-call">
                  Become a Speaker
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 03 — QUICK INFORMATION BAR */}
      <section className="border-b border-cyan-500/15 bg-[#050d1d] relative z-20">
        <div className="container max-w-7xl px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {quickStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${i > 0 ? "sm:pl-6" : ""}`}>
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">{stat.label}</div>
                    <div className="font-bold text-white text-sm sm:text-base">{stat.value}</div>
                    <div className="text-[11px] text-cyan-400/80">{stat.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 — ABOUT THE CONFERENCE */}
      <section id="about" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider">
              04 • Academic Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              About Eminsphere <br />
              <span className="text-cyan-400">Manila Nexus 2027</span>
            </h2>
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-white">Eminsphere Manila Nexus 2027</strong> is an international conference bringing together researchers, academics, technology professionals, industry leaders, innovators, and emerging scholars to explore the evolving landscape of intelligent computing, emerging digital systems, and future technologies.
              </p>
              <p>
                Hosted in <span className="text-cyan-300 font-medium">Manila, Philippines</span>, the conference provides an authoritative international forum for rigorous research presentation, high-level technical exchange, interdisciplinary dialogue, and impactful cross-border networking.
              </p>
              <p>
                The conference is deliberately designed to connect fundamental academic discovery with real-world technological deployment, enabling researchers and enterprise innovators to exchange validated insights, present novel computational paradigms, and form enduring international consortiums.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6">
                <a href="#cfp">Explore Call for Papers <ChevronRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-slate-700 text-slate-300 hover:bg-white/5 px-6">
                <a href="#committee">Meet the Committee</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-cyan-500/20 bg-gradient-to-b from-[#071329] to-[#040b18] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <Compass className="h-5 w-5 text-cyan-400" />
                Conference Core Objectives
              </h3>
              <div className="space-y-4">
                {objectives.map((obj, idx) => {
                  const Icon = obj.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{obj.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{obj.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — WHY MANILA? */}
      <section id="why-manila" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15 relative">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
              05 • Host Destination
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Why Manila? <br />
              <span className="text-cyan-400">A Gateway to Southeast Asia's Digital Future</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Manila provides a vibrant, dynamic environment for international academic, technological, and professional exchange. The conference gathers leading global researchers and tech visionaries in the Philippines to examine breakthroughs in intelligent systems across the world's most rapidly expanding digital economy.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyManilaPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Card key={idx} className="p-6 bg-[#071329]/80 border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                </Card>
              );
            })}
          </div>

          {/* Manila Photo Gallery */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {manilaGallery.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#071329] shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-[#040a16] via-[#040a16]/90 to-transparent">
                  <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-normal">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — CONFERENCE THEMES / 6 TRACKS */}
      <section id="tracks" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
            06 • Research Scope
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Conference Thematic Tracks
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Submissions are invited across six multidisciplinary tracks spanning the entire frontier of modern intelligent computing and societal digital systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-[#071329] to-[#040a17] p-6 flex flex-col justify-between hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/5 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {track.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-cyan-500/20 text-cyan-400 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {track.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {track.topics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs bg-white/[0.04] text-slate-300 border border-white/10 rounded-md px-2.5 py-1 hover:border-cyan-500/40 hover:text-white transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400">
                  <span>Track Papers Welcome</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 07 — CALL FOR PAPERS */}
      <section id="cfp" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider">
                07 • Submissions Open
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Call for Papers & <br />
                <span className="text-cyan-400">Scholarly Contributions</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Eminsphere Manila Nexus 2027 invites international researchers, academicians, industry professionals, practitioners, and doctoral candidates to submit original research contributions addressing emerging developments in intelligent computing, digital systems, and future technologies.
              </p>
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs sm:text-sm text-cyan-200">
                <p className="font-semibold mb-1">Double-Blind Peer Review Policy</p>
                <p className="text-slate-300">
                  All manuscripts undergo rigorous double-blind peer review by a panel of international domain specialists based on technical soundness, originality, clarity, and methodology.
                </p>
              </div>
              <div>
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 shadow-lg shadow-cyan-500/20">
                  <a href="#submission">
                    Go to Submission Portal <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {submissionCategories.map((cat, idx) => (
                  <Card key={idx} className="p-5 bg-[#071329] border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white text-base">{cat.title}</h4>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">{cat.pages}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
                  </Card>
                ))}
                <Card className="p-5 bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border-cyan-500/30 flex flex-col justify-center text-center items-center">
                  <Sparkles className="h-8 w-8 text-cyan-400 mb-2" />
                  <h4 className="font-bold text-white text-base mb-1">Align with Tracks</h4>
                  <p className="text-xs text-slate-300">Submissions should correspond to one or more of Tracks 01 to 06.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — IMPORTANT DATES */}
      <section id="dates" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
            08 • Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Important Dates & Timeline
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Please mark these key milestone deadlines in your academic calendar for EMN 2027.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {timelineDates.map((item, idx) => (
            <Card
              key={idx}
              className={`p-6 border relative overflow-hidden bg-[#071329] transition-all hover:-translate-y-1 ${
                item.status === "Main Event"
                  ? "border-cyan-400 shadow-lg shadow-cyan-500/10"
                  : "border-cyan-500/20"
              }`}
            >
              <Calendar className="absolute -right-4 -bottom-4 h-24 w-24 text-cyan-500/5 pointer-events-none" />
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">{item.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                  item.status === "Main Event" ? "bg-cyan-500 text-slate-950" : "bg-white/10 text-slate-300"
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">{item.date}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 09 — PAPER SUBMISSION PROCESS */}
      <section id="submission" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
              09 • Submission Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Paper Submission Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Follow our clear 6-step lifecycle from initial manuscript submission to conference presentation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {submissionSteps.map((step, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-[#071329] border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="text-2xl font-bold font-mono text-cyan-400/40 mb-3">{step.step}</div>
                <h3 className="font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-cyan-950/40 via-[#071329] to-blue-950/40 border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Ready to submit your manuscript?</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Direct all initial submissions through our designated submission portal or contact the editorial secretariat at <span className="text-cyan-300 font-mono">papers@eminsphere.com</span>.
              </p>
              <Button asChild size="lg" className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 shadow-xl shadow-cyan-500/25">
                <a href="mailto:papers@eminsphere.com?subject=EMN%202027%20Paper%20Submission">
                  Submit Paper Online <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 10 — KEYNOTE SPEAKERS */}
      <section id="speakers" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
            10 • Plenary & Invited Authorities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Global Voices. Emerging Ideas.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Hear from distinguished scholars, enterprise leaders, and researchers driving breakthroughs across the world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((sp, idx) => (
            <Card key={idx} className="bg-[#071329] border-cyan-500/20 overflow-hidden hover:border-cyan-500/40 transition-all hover:-translate-y-1 group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={sp.image}
                  alt={sp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono text-cyan-300 border border-white/10">
                  {sp.country}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-white mb-1 group-hover:text-cyan-300 transition-colors">{sp.name}</h3>
                <p className="text-xs text-cyan-400 font-medium mb-1">{sp.title}</p>
                <p className="text-xs text-slate-400 mb-4">{sp.affiliation}</p>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 mb-1">Keynote Topic</div>
                  <p className="text-xs text-slate-300 italic font-serif">"{sp.topic}"</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 11 — TECHNICAL PROGRAM */}
      <section id="program" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
              11 • Schedule of Events
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Conference Technical Program
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8">
              Two full days of keynotes, peer-reviewed paper presentations, high-impact forums, and global networking.
            </p>

            {/* Day Switcher Tabs */}
            <div className="inline-flex p-1.5 rounded-full bg-[#071329] border border-cyan-500/30">
              <button
                onClick={() => setActiveDay("day1")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeDay === "day1"
                    ? "bg-cyan-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Day 01 — 20 March 2027
              </button>
              <button
                onClick={() => setActiveDay("day2")}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeDay === "day2"
                    ? "bg-cyan-500 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Day 02 — 21 March 2027
              </button>
            </div>
          </div>

          {/* Timeline List */}
          <div className="max-w-4xl mx-auto space-y-3">
            {(activeDay === "day1" ? programDay1 : programDay2).map((slot, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#071329] border border-cyan-500/20 hover:border-cyan-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-bold text-cyan-300 min-w-[130px]">{slot.time}</span>
                  <span className="font-medium text-white text-sm sm:text-base">{slot.title}</span>
                </div>
                <div className="self-end sm:self-auto text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded border border-white/5 whitespace-nowrap">
                  {slot.track}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — COMMITTEE */}
      <section id="committee" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
            12 • Governance & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Conference Organizing Committee
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Dedicated academic chairs steering the review, publication, and international execution of EMN 2027.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committee.map((member, idx) => (
            <Card key={idx} className="p-6 bg-[#071329] border-cyan-500/20 hover:border-cyan-500/40 transition-all text-center">
              <div className="h-14 w-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <User className="h-6 w-6" />
              </div>
              <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase block mb-1">{member.role}</span>
              <h4 className="font-bold text-white text-base mb-1">{member.name}</h4>
              <p className="text-xs text-slate-400 mb-2">{member.org}</p>
              <span className="inline-block text-[11px] text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                {member.country}
              </span>
            </Card>
          ))}
        </div>
      </section>

      {/* 13 — INTERNATIONAL ADVISORY BOARD */}
      <section id="advisory" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
              13 • Global Standing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              International Advisory Board
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Representing senior academic leaders and industry research figures across ten strategic international territories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {advisoryCountries.map((adv, idx) => (
              <Card key={idx} className="p-5 bg-[#071329] border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all">
                <Globe className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <h4 className="font-bold text-white text-sm mb-1">{adv.country}</h4>
                <p className="text-[11px] text-slate-400 leading-normal">{adv.role}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 italic">
            Advisory appointments and peer-review appointments are conducted strictly in accordance with institutional formal consents.
          </div>
        </div>
      </section>

      {/* 14 — PUBLICATION & PROCEEDINGS */}
      <section id="publication" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider">
            14 • Scholarly Dissemination
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Publication & Official Proceedings
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            All accepted, registered, and presented research papers will be compiled into the official 
            <strong className="text-cyan-300"> Eminsphere Manila Nexus 2027 Conference Proceedings</strong> with an authorized ISBN number, ensuring perpetual academic visibility and citation tracking.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 text-left pt-6">
            <Card className="p-6 bg-[#071329] border-cyan-500/20">
              <BookOpen className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-2">ISBN Proceedings</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Registered proceedings volume with permanent ISBN identification for global library and institutional archival.
              </p>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20">
              <Network className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-2">Digital Object Identifier (DOI)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Permanent DOI assignment for every accepted paper to facilitate cross-referencing and academic discovery.
              </p>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20">
              <Award className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-2">Extended Journal Opportunity</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Selected high-ranking papers will be invited to submit expanded revisions for publication in partner indexed journals subject to independent peer review.
              </p>
            </Card>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <strong className="text-slate-300">Official Editorial Policy:</strong> Accepted and presented papers may be considered for publication through the conference's designated proceedings or publication partners, subject to applicable editorial, technical, and peer-review requirements.
          </div>
        </div>
      </section>

      {/* 16 — VENUE */}
      <section id="venue" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
            16 • Physical Host Location
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Conference Venue & Facilities
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Metro Manila, Philippines — Hosted in a five-star international convention venue equipped with cutting-edge academic presentation infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl relative aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop"
              alt="Conference Auditorium"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                Manila Convention Hub
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">Grand Ballroom & Technical Theatres</h3>
              <p className="text-xs text-slate-300 mt-1">Confirmed host hotel and reservation room block codes will be published upon agreement finalization.</p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            {venueFacilities.map((fac, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#071329] border border-cyan-500/20">
                <h4 className="font-bold text-white text-sm mb-1">{fac.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17 — TRAVEL & ACCOMMODATION */}
      <section id="travel" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
              17 • Logistics
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Travel to Manila & Delegate Support
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Essential airport, ground transit, lodging, and visa guidelines for incoming international participants.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-[#071329] border-cyan-500/20">
              <Plane className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="font-bold text-white text-base mb-2">International Gateway</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ninoy Aquino International Airport (NAIA) serves direct flights from Tokyo, Singapore, Dubai, Sydney, London, and San Francisco.
              </p>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20">
              <Compass className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="font-bold text-white text-base mb-2">Local Ground Transit</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Convenient airport express buses, metered taxis, and Grab ride-hailing app services are available 24/7 directly from all terminals.
              </p>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20">
              <Hotel className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="font-bold text-white text-base mb-2">Accommodation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A curated catalog of verified 4-star and 5-star partner hotels adjacent to the conference hub will be circulated with discounted delegate rates.
              </p>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20">
              <FileCheck2 className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="font-bold text-white text-base mb-2">Visa Facilitation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Official visa invitation letters are issued promptly to all registered international delegates to facilitate consular visa issuance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 19 & 20 — BECOME A SPEAKER / REVIEWER */}
      <section id="speaker-call" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* 19 - Become a Speaker */}
            <Card className="p-8 bg-[#071329] border-cyan-500/30 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
                  19 • Call for Speakers
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3">
                  Become an Invited Speaker
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Are you a researcher, academic leader, or technology industry innovator? Share your transformative insights before an international plenary audience at EMN 2027.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Keynote Address", "Invited Plenary", "Industry Tech Talk", "Expert Panelist"].map((tag, i) => (
                    <span key={i} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold">
                <a href="mailto:conference@eminsphere.com?subject=Expression%20of%20Interest%20-%20EMN%202027%20Speaker">
                  Express Interest as Speaker <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </Card>

            {/* 20 - Become a Reviewer */}
            <Card className="p-8 bg-[#071329] border-cyan-500/30 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
                  20 • Peer Review Panel
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3">
                  Join the Technical Review Panel
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Researchers holding doctorates and enterprise practitioners with verified technical publications are invited to contribute to our double-blind referee evaluation committee.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Official Certificate", "Global Academic Recognition", "Editorial Visibility", "Registration Concessions"].map((tag, i) => (
                    <span key={i} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild variant="outline" className="rounded-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10">
                <Link to="/apply-reviewer">
                  Apply as Technical Reviewer <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

          </div>
        </div>
      </section>

      {/* 21 — AWARDS */}
      <section id="awards" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
            21 • Excellence Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Conference Recognition & Awards
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Distinguished honors conferred by the Technical Program Committee during the valedictory ceremony.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((aw, idx) => {
            const Icon = aw.icon;
            return (
              <Card key={idx} className="p-6 bg-[#071329] border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all hover:-translate-y-1">
                <div className="h-14 w-14 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{aw.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{aw.desc}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* 22 — GALLERY */}
      <section id="gallery" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
              22 • Event Atmosphere
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Eminsphere Global Highlights
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              A glimpse into past Eminsphere academic summits and international researcher assemblies worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden border border-cyan-500/20 relative aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop"
                alt="Plenary Audience"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-medium text-white">Plenary Keynote Sessions</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-cyan-500/20 relative aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
                alt="Technical Presentation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-medium text-white">Technical Paper Presentations</span>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-cyan-500/20 relative aspect-video group">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                alt="International Networking"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-medium text-white">Bilateral Research Networking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 23 — FAQ */}
      <section id="faq" className="py-20 lg:py-28 container max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
            23 • Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Answers to common queries regarding hybrid participation, submissions, peer review, and logistics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((f, idx) => (
            <Card key={idx} className="p-6 bg-[#071329] border-cyan-500/20">
              <h3 className="font-bold text-white text-base sm:text-lg mb-2 flex items-start gap-2.5">
                <HelpCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                {f.q}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 pl-7 leading-relaxed">{f.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 24 — CONTACT */}
      <section id="contact" className="py-20 lg:py-28 bg-[#050d1c] border-y border-cyan-500/15">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-wider mb-4">
              24 • Inquiries & Secretariat
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Contact Conference Secretariat
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Reach out to specialized conference desks for submissions, registrations, partnerships, or logistical support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="p-6 bg-[#071329] border-cyan-500/20 text-center">
              <Mail className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">General Enquiries</h4>
              <a href="mailto:conference@eminsphere.com" className="text-cyan-400 hover:underline font-mono text-xs">
                conference@eminsphere.com
              </a>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20 text-center">
              <FileText className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">Paper Submissions</h4>
              <a href="mailto:papers@eminsphere.com" className="text-cyan-400 hover:underline font-mono text-xs">
                papers@eminsphere.com
              </a>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20 text-center">
              <User className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">Delegate Registration</h4>
              <a href="mailto:registration@eminsphere.com" className="text-cyan-400 hover:underline font-mono text-xs">
                registration@eminsphere.com
              </a>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20 text-center">
              <Briefcase className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">Industry Sponsorships</h4>
              <a href="mailto:sponsorship@eminsphere.com" className="text-cyan-400 hover:underline font-mono text-xs">
                sponsorship@eminsphere.com
              </a>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20 text-center">
              <Globe className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">International Relations</h4>
              <a href="mailto:international@eminsphere.com" className="text-cyan-400 hover:underline font-mono text-xs">
                international@eminsphere.com
              </a>
            </Card>

            <Card className="p-6 bg-[#071329] border-cyan-500/20 text-center">
              <Building2 className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">Host Location</h4>
              <p className="text-xs text-slate-400">Manila, Philippines</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 25 — FOOTER */}
      <footer className="border-t border-cyan-500/15 bg-[#02060f] py-12">
        <div className="container max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-sm">
                  EMN
                </div>
                <span className="font-serif font-bold text-lg text-white">Eminsphere Manila Nexus 2027</span>
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                International Conference on Intelligent Computing, Emerging Systems and Digital Futures. 20–21 March 2027 | Manila, Philippines.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#cfp" className="hover:text-cyan-400 transition-colors">Call for Papers</a>
              <a href="#tracks" className="hover:text-cyan-400 transition-colors">Tracks</a>
              <a href="#speakers" className="hover:text-cyan-400 transition-colors">Speakers</a>
              <a href="#committee" className="hover:text-cyan-400 transition-colors">Committee</a>
              <a href="#program" className="hover:text-cyan-400 transition-colors">Program</a>
              <a href="#venue" className="hover:text-cyan-400 transition-colors">Venue</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2027 Eminsphere™. All Rights Reserved. Manila Nexus is an official flagship academic initiative.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
              <Link to="/" className="hover:text-cyan-400">Eminsphere Global Hub</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ManilaNexus2027;
