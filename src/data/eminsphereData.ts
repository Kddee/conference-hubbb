export interface CompanyInfo {
  name: string;
  tagline: string;
  logo: string;
  trademarkInfo?: {
    applicationNo: string;
    act: string;
  };
  certifications: { name: string; badge: string; description?: string; }[];
}

export interface ConferenceData {
  id: string;
  title: string;
  date: string;
  location: string;
  isbn?: string;
  description: string;
  registrationLink?: string;
  collaboration?: string;
  thematicTracks?: string[];
  milestones?: { name: string; date: string; }[];
  speakers?: { name: string; designation: string; university: string; image: string; category?: string; }[];
  patron?: { name: string; role: string; description: string; organization: string; location: string; image: string; };
}

export interface ProceedingData {
  id: string;
  title: string;
  date: string;
  description: string;
  downloadLink?: string;
  abstractLink?: string;
  videos?: (string | { url: string; speaker?: string; title?: string })[];
  papers?: { title: string; authors: string; pdfLink: string; }[];
}

export const companyInfo: CompanyInfo = {
  name: "Eminsphere™",
  tagline: "Global Academic, Research & Innovation Platform",
  logo: "/assets/company logo .png",
  trademarkInfo: {
    applicationNo: "7244652",
    act: "Applied for under the Trade Marks Act, 1999 (Sec 18(1))"
  },
  certifications: [
    {
      name: "ISO 9001:2015 Certified",
      badge: "/assets/iso usab.jpg"
    }
  ]
};

export const upcomingConferences: Record<string, ConferenceData> = {
  "icaist-26": {
    id: "icaist-26",
    title: "ICQADTS-2026",
    date: "14 June 2026",
    location: "Virtual Mode | Global Participation",
    description: "ICQADTS-2026 is a high-impact international research forum dedicated to the advancement of next-generation intelligent computational ecosystems. It focuses on the integration of Quantum Computing, AI, Autonomous Systems Engineering, and Cyber-Physical Digital Twin infrastructures. All submissions undergo a double-blind peer-review process, offering ISBN Proceedings and recommendations for Scopus/WoS indexed journals.",
    thematicTracks: [
      "Quantum Machine Intelligence (Hybrid learning, variational circuits)",
      "Autonomous Digital Twin Systems (Self-evolving environments, industrial twins)",
      "Cyber-Physical Intelligent Systems (Embedded AI, Edge/Fog computing)",
      "AI for Sustainable Systems (Energy-efficient frameworks, Green data centers)",
      "Secure & Post-Quantum Computing (Quantum-resistant cryptography, Blockchain trust)",
      "Human-Centric Intelligent Systems (Explainable AI, Brain-computer interfaces)"
    ],
    milestones: [
      { name: "Paper Submission Deadline", date: "8 June 2026" },
      { name: "Acceptance Notification", date: "12 June 2026" },
      { name: "Camera Ready & Registration", date: "13 June 2026" }
    ]
  },
  "icmref-26": {
    id: "icmref-26",
    title: "International Conference on Multidisciplinary Research & Emerging Frontiers in AI, Software Systems & Emerging Technologies (ICMREF-26)",
    date: "4 October 2026",
    location: "In-Person | Tbilisi, Georgia",
    collaboration: "Georgia Tech Events",
    description: "ICMREF-26 is an international academic forum dedicated to advancing multidisciplinary research across emerging domains in Artificial Intelligence, Software Systems, and Advanced Technologies. The conference aims to provide a structured platform for researchers, academicians, and industry professionals to present original contributions, exchange technical insights, and explore collaborative opportunities.",
    thematicTracks: [
      "Artificial Intelligence & Machine Learning (Deep learning, NLP)",
      "Software Engineering & Systems (Modern architectures, DevOps)",
      "Data Science & Analytics (Big data, predictive modeling)",
      "Emerging Technologies (IoT, Blockchain, AR/VR)",
      "Interdisciplinary Applications (AI in Healthcare/Business)",
      "Sustainable & Smart Systems (Green tech, smart infrastructure)"
    ],
    milestones: [
      { name: "Paper Submission", date: "14 September 2026" },
      { name: "Acceptance Notification", date: "21 September 2026" },
      { name: "Final Submission", date: "27 September 2026" }
    ],
    speakers: [
      { name: "Dr. Ayoub Regragui", designation: "Technical Program Committee", university: "Mohammed V University, Morocco", image: "https://static.wixstatic.com/media/30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif" },
      { name: "Dr. Marek Wasiluk", designation: "Clinical Research Expert", university: "", image: "https://static.wixstatic.com/media/30814e_adff5072ac724ad69a6f9634c9d672e0~mv2.jpg" },
      { name: "Hicham El Khodja", designation: "Researcher, Morocco", university: "", image: "https://static.wixstatic.com/media/30814e_d1c8c65f9d4d4bd59632c05aa894aa71~mv2.jpeg" },
      { name: "Prof. Dr. Alexander Bull", designation: "Germany", university: "", image: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
      { name: "Kateryna Antosz", designation: "Poland", university: "", image: "https://static.wixstatic.com/media/30814e_36d2bb3012e64343a18002662ca61e6b~mv2.avif" },
      { name: "Dr. Aida Mehrad", designation: "C3S Business School", university: "", image: "https://static.wixstatic.com/media/502b14_2f32591e100346daa035a4aaf27ef7d7~mv2.jpeg" },
      { name: "Dr. Mehwish Rashid", designation: "Keiser University, USA", university: "", image: "https://static.wixstatic.com/media/30814e_d030e1dbf7ef4028909beba2b99a69be~mv2.jpeg" },
      { name: "Nadine Zeinoun", designation: "ICF Ottawa", university: "", image: "https://static.wixstatic.com/media/30814e_332bdfce1cc5480f975812b50be780a8~mv2.jpeg" },
      { name: "Ezinne Esther Arisa", designation: "South Africa", university: "", image: "https://static.wixstatic.com/media/502b14_3adc2682f9064817b4728eca9cd4a0b1~mv2.jpeg" },
      { name: "Dr. Zoha Rahman", designation: "USA", university: "", image: "https://static.wixstatic.com/media/30814e_2a893f0530e74f178c18e5939b687048~mv2.jpg" },
      { name: "Dr. Dina A. Alkhodary", designation: "Jordan", university: "", image: "https://static.wixstatic.com/media/30814e_1feb45bda81f4dcdb4b55439a6f8d65a~mv2.jpg" },
      { name: "Dr. Firas Zeidan", designation: "Lebanon", university: "", image: "https://static.wixstatic.com/media/30814e_571b3e70d8ff476f8b1272ef84538d8f~mv2.jpeg" },
      { name: "Dr. Walida Ounruean", designation: "Thailand", university: "", image: "https://static.wixstatic.com/media/30814e_ac6c40d612254293a4f1f4479dfd7b61~mv2.avif" },
      { name: "Dr. Tiansheng Yang", designation: "UK", university: "", image: "https://static.wixstatic.com/media/30814e_3a6549a4d2904005a224db41ca5f9cd0~mv2.avif" },
      { name: "Mouhsine Ait El Mouden", designation: "Morocco", university: "", image: "https://static.wixstatic.com/media/30814e_b0c50d221b41483fa5ab8bfb50f719e5~mv2.avif" },
      { name: "Sam Lawe", designation: "New Zealand", university: "", image: "https://static.wixstatic.com/media/30814e_485133b243e34681b345c2286ad708b2~mv2.jpeg" },
      { name: "Meryem Gurel", designation: "Turkey", university: "", image: "https://static.wixstatic.com/media/30814e_6346862f510f41209c68b590a9da5215~mv2.jpeg" },
      { name: "Dr. Ruth Abiola Adimula", designation: "Nigeria", university: "", image: "https://static.wixstatic.com/media/30814e_d096ce6ec8ff4b05a2cc1c7db574278b~mv2.jpeg" },
      { name: "Emem Akpabio", designation: "South Africa", university: "", image: "https://static.wixstatic.com/media/30814e_2dad2d939abb4236bcb405093be55872~mv2.jpg" }
    ],
    patron: {
      name: "TBA",
      role: "Conference Patron",
      description: "Community Development Professional",
      organization: "Conference Hub",
      location: "Tbilisi, Georgia 🇬🇪",
      image: "https://static.wixstatic.com/media/30814e_86a164138da142578e674588143e3af3~mv2.jpeg"
    }
  },
  "icaits-26": {
    id: "icaits-26",
    title: "International Conference on Artificial Intelligence & Intelligent Technology Systems (ICAITS-26)",
    date: "26 July 2026",
    location: "Global Participation",
    description: "A prestigious platform for discussing cutting-edge innovations in engineering systems and computing paradigms. It provides an interdisciplinary forum for sharing research findings and practical experiences. All submissions undergo a double-blind peer-review process, offering ISBN Proceedings and recommendations for Scopus/WoS indexed journals.",
    thematicTracks: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Big Data Analytics",
      "Electronics & Communication Engineering",
      "IoT & Embedded Systems",
      "Robotics & Automation",
      "Cybersecurity & Blockchain",
      "Cloud & Edge Computing"
    ],
    milestones: [
      { name: "Paper Submission", date: "10 June 2026" },
      { name: "Final Acceptance", date: "18 June 2026" },
      { name: "Registration Deadline", date: "26 June 2026" }
    ]
  },
  "aiforge-26": {
    id: "aiforge-26",
    title: "AIFORGE 2026",
    isbn: "978-81-687765-9-3",
    date: "6 September 2026",
    location: "Hybrid Mode",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdovsHUgDTtUSLoXdyufXRN67K59HSiLsxhmOUKQaE9VRcdwA/viewform?usp=publish-editor",
    cmtLink: "https://cmt3.research.microsoft.com/AIFORGE2026",
    description: "International Conference on Agentic Intelligence for Foundations, Orchestration, Research, Governance and Engineering. A premier platform exploring advancements in Agentic AI, foundation models, and AI orchestration. It focuses on the integration of AI with robust engineering and governance frameworks. All submissions undergo a double-blind peer-review process, offering ISBN Proceedings (ISBN: 978-81-687765-9-3) with indexing across Google Scholar and Web of Science (WoS).",
    thematicTracks: [
      "Foundation Models & LLMs",
      "Agentic Intelligence",
      "AI Orchestration & Systems",
      "AI Governance & Ethics",
      "AI Engineering",
      "Applied AI Research"
    ],
    milestones: [
      { name: "Paper Submission", date: "28 August 2026" },
      { name: "Acceptance Notification", date: "2 September 2026" },
      { name: "Registration Deadline", date: "4 September 2026" }
    ],
    speakers: [
      { name: "Wiktoria Gromowa-Cieślik", category: "Distinguished Speaker", designation: "CEO & Chief Metrics Officer, Human-Tech Fusion (HTFusion)", university: "Poland", image: "/speakers/wiktoria-gromowa-cieslik.jpg" },
      { name: "Prof. Dr. Alexander Bull", category: "Plenary Speaker", designation: "IU International University", university: "Germany", image: "https://static.wixstatic.com/media/30814e_add55fc0895a4b0b9aebdd381f822484~mv2.jpeg" },
      { name: "Hardeep Singh Tiwana", category: "Keynote Speaker", designation: "Golden Kubestronaut, The Kubernetes Show Creator", university: "USA", image: "/speakers/hardeep-singh-tiwana.jpg" },
      { name: "Dr. Sravanthi Dontu", category: "Keynote Speaker", designation: "Independent Researcher, Corporate Professional, University of the Cumberlands", university: "USA", image: "/speakers/dr-sravanthi-dontu.jpg" },
      { name: "Dr. Santosh Reddy Addula", category: "Keynote Speaker", designation: "Department of Information Technology, University of the Cumberlands, Williamsburg, Kentucky", university: "USA", image: "/speakers/dr-santosh-reddy-addula.png" },
      { name: "Dr. Peter Kamau, CPA-K", category: "Plenary Speaker", designation: "Founder & CEO, PETKAM Solutions Ltd | Govt. Consultant, National Employment Authority", university: "Kenya", image: "/speakers/dr-peter-kamau.jpg" },
      { name: "Parikshit Sahagal", category: "Keynote Speaker", designation: "Technical Project Manager, CoStar Group Inc", university: "USA", image: "/speakers/parikshit-sahagal.jpg" },
      { name: "Jaco Visagie", category: "Distinguished Speaker", designation: "Professor of Statistics, North-West University", university: "South Africa", image: "/speakers/jaco-visagie.jpg" },
      { name: "Dr. Dina Alkhodary", category: "Plenary Speaker", designation: "Associate Professor of Business Administration, Middle East University", university: "Jordan", image: "/speakers/dr-dina-alkhodary.jpg" },
      { name: "Mayank Atreya", category: "Keynote Speaker", designation: "Technology & Engineering Leader, Enterprise Architecture & AI/ML", university: "USA", image: "/speakers/mayank-atreya.jpg" },
      { name: "Piyush Shukla", category: "Keynote Speaker", designation: "Technology & Engineering Leader", university: "USA", image: "/speakers/piyush-shukla.jpg" },
      { name: "Dr. Eka Devidze", category: "Invited Speaker", designation: "Affiliated Professor, The University of Georgia", university: "Georgia", image: "/speakers/dr-eka-devidze.jpg" },
      { name: "Assoc. Prof. Dr. Muliati Hj. Sedek", category: "Invited Speaker", designation: "Deputy Director (Scholarship Excellence), CAES, Universiti Teknikal Malaysia Melaka (UTeM)", university: "Malaysia", image: "/speakers/dr-muliati-sedek.jpg" },
      { name: "Assoc. Prof. Ts. Dr. Noor Suhana Binti Sulaiman", category: "Invited Speaker", designation: "Dean, Research & Postgraduate Management (JPPS), University College TATI (UC TATI)", university: "Malaysia", image: "/speakers/dr-noor-suhana.jpg" },
      { name: "Sandeep Kumar Khandelwal", category: "Invited Speaker", designation: "AI, DevOps & Cloud Computing Expert", university: "USA", image: "/speakers/sandeep-kumar-khandelwal.jpg" },
      { name: "Prof. Rehab Hegazy, PhD", category: "Invited Speaker", designation: "Professor of Pharmacology, Medical Research & Clinical Studies Institute, National Research Centre (NRC)", university: "Egypt", image: "/speakers/prof-rehab-hegazy.jpg" },
      { name: "Prof. Intakhab Alam Khan", category: "Invited Speaker", designation: "King Abdulaziz University, Saudi Arabia & Visiting Prof, Samarkand State University", university: "Saudi Arabia", image: "/speakers/prof-intakhab-alam-khan.jpg" },
      { name: "Osman ARAYICI", category: "Invited Speaker", designation: "Dept. of Interior Architecture, Mimar Sinan Fine Arts University / Modoko Academy", university: "Turkey", image: "/speakers/osman-arayici.jpg" },
      { name: "Swarnabindu Roy", category: "Keynote Speaker", designation: "Data Engineering, Data Architecture & Program Management", university: "USA", image: "/speakers/swarnabindu-roy.jpg" },
      { name: "Payal R.", category: "Keynote Speaker", designation: "Senior Data Engineer, Data Modeling, Data Warehousing & ETL Pipelines", university: "USA", image: "/speakers/payal-r.jpg" },
      { name: "Dr. Carolina Barandiaran", category: "Keynote Speaker", designation: "Academic Leader & Researcher", university: "Argentina", image: "/speakers/dr-carolina-barandiaran.jpg" },
      { name: "Nino Devidze", category: "Distinguished Speaker", designation: "Tourism Educator & Program Manager, The University of Georgia", university: "Georgia", image: "/speakers/nino-devidze.jpg" },
      { name: "Lali Mikeladze", category: "Distinguished Speaker", designation: "Head of the BA Program in Tourism, Caucasus International University", university: "Georgia", image: "/speakers/lali-mikeladze.jpg" }
    ]
  }
};

export const proceedings: Record<string, ProceedingData> = {
  "icaits-26": {
    id: "icaits-26",
    title: "Proceeding ICAITS-26",
    date: "2026",
    description: "Official proceedings and presentations from the International Conference on Artificial Intelligence & Intelligent Technology Systems (ICAITS-26).",
    videos: [
      "https://youtu.be/W0fjUwSOBJE",
      "https://youtu.be/Taf51th6xXk",
      "https://youtu.be/ZKErROWtHKI",
      "https://youtu.be/-Vca3iW3g8g",
      "https://youtu.be/H5OqtMlefKw",
      "https://youtu.be/Uu5lF5DKfc8",
      "https://youtu.be/ycau7w9AD3o",
      "https://youtu.be/WUYocAXmnAk",
      "https://youtu.be/PIJdSaoq76o",
      "https://youtu.be/TUGkMH1Jig4",
      "https://youtu.be/6Dd60RlN6kA"
    ]
  },
  "iccemb-26": {
    id: "iccemb-26",
    title: "Proceeding ICCEMB-26",
    date: "2026",
    description: "Official proceedings from the International Conference on Computer Science, Education, Medical and Business (ICCEMB-26).",
    videos: [
      { url: "https://youtu.be/YvStQzCwJu0", speaker: "Dr. Aida Mehrad", title: "Organizational Change Management in the Digital Age" },
      { url: "https://youtu.be/jOqUqje9u4Y", speaker: "Prof. Dr. G. A. Hinge", title: "Keynote Presentation" },
      { url: "https://youtu.be/hFJAwML-wOg", speaker: "Amit Kukker", title: "Keynote Presentation" },
      { url: "https://youtu.be/twORFj05SmY", speaker: "Dr. Marek Wasiluk", title: "AI in Medical Science" },
      { url: "https://youtu.be/fT3-4J49wyo", speaker: "Nadine Zeinoun", title: "Emotional Intelligence" },
      { url: "https://youtu.be/_lRKU-kWXrk", speaker: "Navin Kumar Chhibber", title: "Getting Ready for Post-Quantum Security" },
      { url: "https://youtu.be/tohOP6Haq3I", speaker: "Pankaj Arora", title: "Garbage In, Failure Out" },
      { url: "https://youtu.be/2rPpVN4eixk", speaker: "Dr. Shashi Bala Rai", title: "Use of AI in Teaching & Research" },
      { url: "https://youtu.be/ZG568Lr4Njs", speaker: "Aishwarya Tyagi", title: "Salesforce Innovation and Process Excellence" },
      { url: "https://youtu.be/TZo9LyI9Gcw", speaker: "Dr. Walida Ounruean", title: "Differentiated Instructions" },
      { url: "https://youtu.be/8nyv0CqSCTo", speaker: "Karan Kumar Ratra", title: "System-Triggered Customer Self-Remediation" },
      { url: "https://youtu.be/oJXkP4vankk", speaker: "Dr. Jitendra Pandey", title: "Opening Address" }
    ]
  },
  "copy-of-proceeding-icaeset-2026-26": {
    id: "copy-of-proceeding-icaeset-2026-26",
    title: "Proceeding ICAIDSS-2026",
    date: "2026",
    description: "Official proceedings from the International Conference on Artificial Intelligence and Data Science Solutions.",
    videos: [
      "https://youtu.be/5FesuF9NCsA?si=dGvSfg_JP_N5Acoz",
      "https://youtu.be/7gOZPwm2ofs?si=dRRNCYZ_NpllBsFH",
      "https://youtu.be/STRttiIu_Yk?si=AFXiRTr6EDYqoA2G",
      "https://youtu.be/IC1OsPGVGsc?si=tni84cgtvvBfKt6Q",
      "https://youtu.be/Em0Haiohr5g?si=eF4uwc4pGyX6DPz-",
      "https://youtu.be/-YYG4z0ZjM8?si=zhrjZGTuUMJJ_ZPb",
      "https://youtu.be/Ty_rUYeDdks?si=6flNYgBm805Ec7Yr",
      "https://youtu.be/ajY0Y0PlC_I?si=A28sx0BUM2Xs6jsb"
    ]
  },
  "copy-of-proceeding-icnse-26": {
    id: "copy-of-proceeding-icnse-26",
    title: "Proceeding ICAESET-2026",
    date: "2026",
    description: "Full research compendium and journal abstracts from the ICAESET-2026 conference.",
    videos: ["PpccRDDsw1k", "ujuwrmFSCZQ", "TWzp3ADxfIc", "Xxs7Kpf7hT4", "u8gCmG1Qm8M", "EqtDxy590fg", "cDVmhL3SUzE", "FZRTxgOAL4Y"]
  },
  "copy-of-proceeding-ictet-26": {
    id: "copy-of-proceeding-ictet-26",
    title: "Proceeding ICNSE-26",
    date: "2026",
    description: "Published papers and author presentations from ICNSE-26 focusing on Networking and Software Engineering.",
    videos: ["WAu3ZK-aMCs", "wpLib8tqUIE", "tgQMY3oxIHQ", "YOJIRoZyHDo", "O1blIF-S36k", "wpXhq4XFfqU", "VD7L-JnF-3c", "8Q1RaaVd--M", "ziZk6ZH65jE"]
  },
  "copy-of-proceeding-icmess-26": {
    id: "copy-of-proceeding-icmess-26",
    title: "Proceeding ICTET-26",
    date: "2026",
    description: "Technology and Engineering Trends conference papers from ICTET-26.",
    videos: ["V3SIabuurjU", "ivagv4eUKMw", "qaH31wvepRs", "C8CIqoNOM64", "3bB9Tt9XgRE", "G61IgITTEL0", "49haAp1yEGI", "R2wuwgkvbTo", "-j5edNSt3RI", "g0-SUB_tCr4", "jke6pZyTvRA", "ELlIR_EJ-zQ", "RWHaBSxiD9c", "7-EBlGl7Ubk"]
  },
  "copy-of-proceeding-icasit-26": {
    id: "copy-of-proceeding-icasit-26",
    title: "Proceeding ICMESS-26",
    date: "2026",
    description: "Management, Economics, and Social Sciences conference proceeding archives.",
    videos: ["CEc9Jsc_kCc", "ALLLQmylkLo", "9Mo2hFyA9Jk", "F6JSF4hOASA"],
    papers: [
      {
        title: "Digital Ecosystems and The Future of Autonomous Agents",
        authors: "Dr. L. Kumar, Prof. S. Ramesh",
        pdfLink: "#"
      },
      {
        title: "Economic Impacts of Cloud Scalability in Enterprise Environments",
        authors: "Dr. A. Patel, Mr. J. Singh",
        pdfLink: "#"
      },
      {
        title: "Advances in Management Strategies for Tech Innovation",
        authors: "S. Desai, K. Joshi",
        pdfLink: "#"
      }
    ]
  },
  "proceeding-icasit-26": {
    id: "proceeding-icasit-26",
    title: "Proceeding ICASIT-26",
    date: "2026",
    description: "Advanced Science and Information Technology proceedings compendium.",
    videos: ["bqBRsRe8yAo", "7WN2uLBqkpw", "D8DxzPEe4Rs", "V3SIabuurjU", "_PloauKDo3I", "GIF8ljGrvBc", "8g2Aow3zMUA", "REa4QqDDuyA"]
  },
  "icmdia-25-1": {
    id: "icmdia-25-1",
    title: "Proceeding ICMDIA-25",
    date: "2025",
    description: "The International Conference on Multidisciplinary Developments in Innovation and Advancement (ICMDIA-25), held on December 14, 2025, successfully brought together researchers, academicians, and industry experts from across the globe. The conference featured insightful keynote sessions, technical presentations, and engaging discussions, highlighting emerging trends, innovative ideas, and interdisciplinary collaboration. ICMDIA-25 served as a dynamic platform for knowledge exchange and global academic networking.",
    videos: ["CEc9Jsc_kCc", "cRawYUUGvfE", "sK4t6-_YA0M", "WabTO7zXvWQ", "1lmwe5oqGxU", "-tWPmWroZmY", "KNRVvkplZtA", "cA1B82hXh8I", "jsaNkjwExeQ", "JyBorQ10xbA", "-FNVs3CNVwQ", "TFzKCm8tyns"]
  },
  "proceeding-icetsgc-25": {
    id: "proceeding-icetsgc-25",
    title: "Proceeding ICETSGC-25",
    date: "2025",
    description: "We are pleased to officially launch the Conference Proceedings of the International Conference on Emerging Technologies, Sustainability, and Global Collaboration (ICETSGC-25). This compilation brings together high-quality research papers, keynote contributions, and innovative ideas presented by scholars, academicians, and industry experts from around the world. The proceedings reflect the conference’s commitment to fostering global collaboration, advancing sustainable technological solutions, and promoting impactful research across diverse domains. We extend our sincere appreciation to all contributors, reviewers, and participants for their valuable efforts in making this publication a significant milestone in the ICETSGC series.",
    videos: ["9Mo2hFyA9Jk", "F6JSF4hOASA", "ombTUtaHuWA", "paKzapZAkC4", "5dpDefLhDDk"]
  },
  "icamet25": {
    id: "icamet25",
    title: "Proceeding ICAMET 2025",
    date: "2025",
    description: "International Conference on AI, Management, Engineering, and Technology (ICAMET 2025) held in Pune, India at Genba Sopanrao Moze College of Engineering, an accredited institution approved by AICTE and affiliated to Savitribai Phule Pune University. ISBN Number: 978-93-342-5206-4.",
    videos: ["CEc9Jsc_kCc", "cRawYUUGvfE", "sK4t6-_YA0M", "WabTO7zXvWQ"],
    papers: [
      {
        title: "Integration of Artificial Intelligence in Engineering Paradigms",
        authors: "Dr. V. Sharma, Prof. P. Deshmukh",
        pdfLink: "#"
      },
      {
        title: "Algorithmic Efficiency in Network Security and Blockchain",
        authors: "Mr. T. Gupta, Dr. N. Patil",
        pdfLink: "#"
      },
      {
        title: "Next-Generation Materials for Electronics Engineering",
        authors: "A. Singh, M. Kaur",
        pdfLink: "#"
      }
    ]
  },
  "icenta-2024": {
    id: "icenta-2024",
    title: "Proceeding ICENTA-2024",
    date: "2024",
    description: "International Conference on Engineering Nexus & Technological Advancements 2024 (ICENTA-2024) held in Mitte, Berlin, Germany. Theme: Bridging Innovation & Technology for a Smarter Future. ISBN Number: 978-93-342-5598-0. ISBN-13: 979-8314318546. Date: December 15-16, 2024. Mode: Virtual (Global Participation). Organized by Eminsphere.",
    videos: ["PpccRDDsw1k", "ujuwrmFSCZQ", "TWzp3ADxfIc", "Xxs7Kpf7hT4"],
    papers: [
      {
        title: "Bridging the Nexus Between Software Systems and Hardware Architecture",
        authors: "Dr. H. Schmidt, K. Mueller",
        pdfLink: "#"
      },
      {
        title: "Smarter Futures: The Role of Quantum Computing in Engineering",
        authors: "Prof. L. Wagner, Dr. J. Klein",
        pdfLink: "#"
      },
      {
        title: "Technological Advancements in Autonomous Vehicle Infrastructure",
        authors: "M. Becker, S. Richter",
        pdfLink: "#"
      }
    ]
  },
  "iceiis24": {
    id: "iceiis24",
    title: "Proceeding ICEIIS-2024",
    date: "2024",
    description: "International Conference on Edge AI & Intelligent Infrastructure Systems (ICEIIS-2024), focused on the deployment of intelligent systems at the edge, integrating AI with real-world infrastructure including smart cities, industrial automation, and IoT ecosystems. Date: 04 Feb 2024 | Virtual. The conference explores real-time intelligent systems operating under constrained environments, enabling scalable, energy-efficient, and adaptive infrastructure solutions.",
    videos: ["WAu3ZK-aMCs", "wpLib8tqUIE", "tgQMY3oxIHQ", "YOJIRoZyHDo"],
    papers: [
      {
        title: "Edge AI Frameworks for Real-Time Infrastructure Monitoring",
        authors: "Dr. R. Desai, Prof. A. Mehta",
        pdfLink: "#"
      },
      {
        title: "Optimizing IoT Ecosystems Through Intelligent Node Deployment",
        authors: "N. Kumar, S. Shah",
        pdfLink: "#"
      },
      {
        title: "Energy-Efficient Algorithms for Smart City Sensor Networks",
        authors: "Dr. M. Joshi, P. Bhat",
        pdfLink: "#"
      }
    ]
  },
  "icaids-2024": {
    id: "icaids-2024",
    title: "Proceeding ICAIDS-2024",
    date: "2024",
    description: "International Conference on Autonomous AI & Distributed Intelligence Systems (ICAIDS-2024), bringing together researchers and practitioners exploring scalable artificial intelligence, multi-agent systems, and distributed intelligent architectures. Date: 10 March 2024 | Virtual Mode. The conference focuses on decentralized decision-making, autonomous system coordination, and resilient AI infrastructures.",
    videos: ["V3SIabuurjU", "ivagv4eUKMw", "qaH31wvepRs", "C8CIqoNOM64"],
    papers: [
      {
        title: "Decentralized Decision-Making in Multi-Agent Systems",
        authors: "Dr. K. Raghavan, Dr. P. Iyer",
        pdfLink: "#"
      },
      {
        title: "Resilient Architectures for Autonomous AI Deployment",
        authors: "S. Nair, V. Menon",
        pdfLink: "#"
      },
      {
        title: "Trust and Verification in Distributed Intelligent Networks",
        authors: "Prof. R. Krishnan",
        pdfLink: "#"
      }
    ]
  },
  "conference-proceedings": {
    id: "conference-proceedings",
    title: "Proceeding ICCINET-25",
    date: "2025",
    description: "The International Conference on Computational Intelligence and Emerging Technologies (ICCINET-25), held on October 25, 2025, proudly announces the official launch of its conference proceedings. The proceedings comprise a collection of peer-reviewed research papers presented during the conference, highlighting the latest advancements, innovative methodologies, and emerging applications in computational intelligence, machine learning, and smart technologies. This publication reflects the collaborative efforts of researchers, academicians, and industry experts from across the globe, contributing to the growing body of knowledge in intelligent systems and emerging technologies.",
    videos: ["ALLLQmylkLo", "t_0RhQn7Esw", "RJo9N0ciMF4", "v8dKQ--66qk", "7fUH0kegnu0", "Y1lMMQOjvPo", "NFuRe39dIl4", "xROSdLVB-_A"],
    papers: [
      {
        title: "An Exploration of Game-Based Learning and Incidental Learning",
        authors: "Gaura Kumar Gupta, Shubhangi Sachin Pharande",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_61dfcc3a38164d7c8c60e54efe7e41ea.pdf?index=true"
      },
      {
        title: "Sustainable Digital Transformation: Ethics and Security in Smart Organizations",
        authors: "Dr. Mrunal Pandit, Ashwini Mohite, Dr. Tanaji Dabade",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_77cd07b51ae7481790323616b9fc8f62.pdf?index=true"
      },
      {
        title: "Artificial Intelligence and Machine Learning: Foundations, Applications, and Future Directions",
        authors: "Dr. Shaikh Abdul Waheed, Prof. Vrushali More, Prof. Indranil Mukherjee",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_84c6325a69d640eeb23d596c6957ec5e.pdf?index=true"
      },
      {
        title: "Embodied Multimodal Artificial Intelligence for Real Time Physical Interaction",
        authors: "Pallavi Shingade, Mr. Rakesh Ramakrishna Pai, Dileep Kumar Pandiya",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_0ef09a31c4264e5298e7eafe785e530e.pdf"
      },
      {
        title: "Design of Artificial Intelligence Sensors Using Physics Tools",
        authors: "Dr. Tushar Jagdale, Shital Dhaigude, Dr S A Patil",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_8f152363b8b74f61bb5722b301e4f64c.pdf"
      },
      {
        title: "Smart Healthcare Assistant: AI Powered Chatbot For Remote Medical Support and Guidance.",
        authors: "Miss.Pawar Vrushali Subhash, Dr.D.B. Hanchate, Dr.S. S.Bere",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_4bd161e7b9744d53b83e4b55c71eef94.pdf"
      },
      {
        title: "Deep Learning Approaches for Predicting Student Academic Performance in Higher Education",
        authors: "Poornima Vishal Bhumkar, Dr.Suhas Pakhare, Ramesh Kakade, Pratik Mandlik, Dr. Tanaji Dabade",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_d886379f59794c5a96cc41e4179c3ae9.pdf"
      },
      {
        title: "A Computational Performance Analysis of Artificial Intelligence Models for Classification Tasks",
        authors: "Rohit Sunil Dhende",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_c871804bb98a44d180571d2dc43ca26e.pdf"
      },
      {
        title: "Leveraging Databases to Enhance Business Intelligence (BI) and Statistical Accuracy (SA)",
        authors: "Shubhangi Sachin Pharande, Gaurav Kumar Gupta, Dr. Tanaji Dabade",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_72507c3662fc452e99948ba44970a626.pdf?index=true"
      },
      {
        title: "Artificial Intelligence in the Construction Industry and Its Role in Building a Sustainable Future",
        authors: "Dr Sambhaji Patil, Dr. Ushadevi Patil, Prof. Salunkhe Abhijit Ashok, Dr Neha Patil",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_336e9096d9294e7183d2758f3cafa5cf.pdf"
      },
      {
        title: "Advancements and Applications of Artificial Intelligence: A Data-Driven Analysis",
        authors: "Neelam Jain, Dr. Dikshendra Sarpate, Vatsala Priya Indramohan, Prof.Pranjali N. Kharate, Deepak K. Sharma",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_8384e12d3df34505a5fc99ea633d88a3.pdf"
      },
      {
        title: "EBG for wireless communication",
        authors: "Pooja Kailas Raut, Dr. mrs.Vaishali M. Dhede, Dr. Rahul M. Muljakar",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_5008d902f5634160a6b828624e2a763d.pdf"
      },
      {
        title: "Design & optimization of AI-Integrated Devices using Physics Tools: A Review",
        authors: "Miss Shital Dhaigude, Dr Tushar Jagdale",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_54694b05b76d41feb26b384ecc4bf822.pdf"
      },
      {
        title: "Harnessing AI for Competitive Advantage in Marketing Management: A Futuristic Perspective",
        authors: "Amruta Kale Jadhav, Dipali Dhumal Jadhav, Seema Jadhav Pagare, Dr. Tanaji Dabade",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_5979e9af3f5d40eab642d07ea2366032.pdf"
      },
      {
        title: "AI and the Future of Education: Disruptions, Dilemmas and Directions",
        authors: "Mouhssin AIT EL MOUDEN, Bani KOUMACHI, Ali AIT SI MHAMED, Moulay Sadik MALIKI, Lahcen AIT IDIR",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_0cab9a8e6a074fdd84161cf9c14b8888.pdf"
      },
      {
        title: "An Analytical Review of Issues and Growth Prospects of Migrated Students from Satara to Pune",
        authors: "Sandhya Vijay Sankpal, Dr. Vishal Pandurang Deshmukh",
        pdfLink: "https://www.eminsphere.com/_files/ugd/30814e_da52d8b1002947c887a06378a1aef80b.pdf"
      }
    ]
  }
};
