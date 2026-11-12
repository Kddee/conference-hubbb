export interface AwardCategory {
  id: string;
  number: string;
  title: string;
  group: 'Academic & Research Excellence' | 'Technology & Innovation' | 'Business & Entrepreneurship' | 'Professional & Industry Excellence' | 'Social Impact & Lifetime Recognition';
  groupKey: 'academic' | 'technology' | 'business' | 'professional' | 'social';
  description: string;
  eligibleCandidates: string[];
  selectionCriteria: string[];
  requiredDocuments: string[];
  iconName: string;
  active: boolean;
}

export interface AwardCycle {
  id: string;
  year: number;
  cycleName: string;
  nominationOpeningDate: string;
  earlyNominationDeadline: string;
  finalNominationDeadline: string;
  evaluationPeriod: string;
  resultAnnouncementDate: string;
  recognitionCeremonyDate: string;
  ceremonyMode: 'Virtual' | 'Physical' | 'Hybrid';
  isActive: boolean;
}

export interface GovernanceMember {
  id: string;
  name: string;
  role: string;
  roleCategory: 'Programme Director' | 'Governing Council' | 'International Advisory Board' | 'Award Selection Committee' | 'Evaluation Experts' | 'Nomination & Verification Team' | 'Awards Administration Team';
  designation: string;
  organization: string;
  country: string;
  expertise: string;
  biography: string;
  linkedin?: string;
  photoUrl: string;
}

export interface Awardee {
  id: string;
  name: string;
  recognitionTitle: string;
  categoryTitle: string;
  categoryId: string;
  awardYear: number;
  country: string;
  professionalField: string;
  designation: string;
  organization: string;
  biography: string;
  achievementSummary: string;
  citation: string;
  certificateId: string;
  photoUrl: string;
  consentObtained: boolean;
  published: boolean;
}

export interface CertificateRecord {
  certificateId: string;
  recipientName: string;
  recognitionTitle: string;
  awardCategory: string;
  categoryId: string;
  awardYear: number;
  field: string;
  issueDate: string;
  issuingOrganization: string;
  status: 'Valid' | 'Revoked' | 'Suspended';
  verificationUrl: string;
  signatoryTitle: string;
  signatoryName: string;
  createdAt: string;
  notes?: string;
}

export interface NominationApplication {
  id: string; // Unique reference e.g., ES-GIA-2027-04821
  submissionDate: string;
  status: 'Draft' | 'Submitted' | 'Received' | 'Initial Screening' | 'Documents Required' | 'Eligible' | 'Under Evaluation' | 'Final Review' | 'Selected' | 'Not Selected' | 'Withdrawn' | 'Certificate Issued';
  
  // Step 1: Personal Information
  firstName: string;
  middleName?: string;
  lastName: string;
  gender?: string;
  dateOfBirth?: string;
  nationality: string;
  countryOfResidence: string;
  stateProvince: string;
  city: string;
  email: string;
  mobile: string;
  whatsapp?: string;
  linkedinUrl?: string;
  websiteUrl?: string;

  // Step 2: Professional Information
  designation: string;
  organization: string;
  industryField: string;
  department?: string;
  yearsExperience: number;
  highestQualification: string;
  specialization: string;
  profileSummary: string;
  biography: string; // Max 500 words

  // Step 3: Award Selection
  awardCategoryId: string;
  awardCategoryTitle: string;
  nominationType: 'Self-Nomination' | 'Third-Party Nomination' | 'Institutional Nomination';
  primaryAchievementArea: string;
  reasonForNomination: string; // Max 300 words
  majorAchievements: string; // Max 500 words
  keyContributions: string; // Max 500 words
  researchPublications?: string;
  previousAwards?: string;
  socialContributions?: string;
  whyConsider: string; // Max 300 words

  // Step 4: Documents Evidence
  documents: {
    name: string;
    type: string;
    size: number;
    url?: string;
    category: string;
  }[];

  // Step 5: Nominator Info (if third-party or institutional)
  nominator?: {
    fullName: string;
    designation: string;
    organization: string;
    email: string;
    contactNumber: string;
    relationship: string;
    reasonForRecommendation: string;
    confirmed: boolean;
  };

  // Step 6: Consents
  declarations: {
    accurateAndComplete: boolean;
    authorizeVerification: boolean;
    noGuaranteeUnderstood: boolean;
    agreeToPolicies: boolean;
    consentPersonalProcessing: boolean;
    noPublicWithoutConsent: boolean;
    receiveAnnouncements?: boolean;
  };

  // Review & Evaluation internal data
  assignedEvaluatorId?: string;
  evaluatorNotes?: string;
  adminNotes?: string;
  scores?: {
    achievementAndContribution: number; // Max 30
    professionalExperience: number;     // Max 20
    innovationAndOriginality: number;   // Max 15
    measurableImpact: number;           // Max 15
    leadershipAndRecognition: number;   // Max 10
    supportingEvidence: number;         // Max 10
    totalScore: number;                 // Max 100
  };
  evaluationBand?: 'Outstanding' | 'Strong' | 'Competitive' | 'Below Threshold';
  issuedCertificateId?: string;
  statusHistory: {
    status: string;
    changedAt: string;
    changedBy: string;
    remarks: string;
  }[];
}

export const AWARD_CATEGORIES: AwardCategory[] = [
  // A. Academic & Research Excellence
  {
    id: "academic-leadership",
    number: "01",
    title: "Excellence in Academic Leadership Award",
    group: "Academic & Research Excellence",
    groupKey: "academic",
    description: "Recognizing academicians and educational leaders who have contributed significantly to institutional development, academic excellence, and educational advancement.",
    eligibleCandidates: [
      "University Vice-Chancellors, Rectors, Deans, and Principals",
      "Heads of Academic Departments & Research Centers",
      "Educational Policy Directors and Curriculum Pioneers",
      "Institutional Founders with demonstrated educational impact"
    ],
    selectionCriteria: [
      "Demonstrated strategic vision and institutional transformation",
      "Implementation of high-impact academic quality frameworks",
      "Leadership in faculty development and student-centric programs",
      "National and international academic collaborations established"
    ],
    requiredDocuments: [
      "Comprehensive Professional Curriculum Vitae (PDF)",
      "Proof of current/past executive or academic leadership roles",
      "Institutional development portfolio or summary of achievements",
      "Letters of recommendation or institutional endorsements (optional)"
    ],
    iconName: "GraduationCap",
    active: true
  },
  {
    id: "outstanding-research",
    number: "02",
    title: "Outstanding Research Contribution Award",
    group: "Academic & Research Excellence",
    groupKey: "academic",
    description: "Recognizing researchers and scholars for impactful research, publications, scientific contributions, and knowledge advancement.",
    eligibleCandidates: [
      "Senior and Principal Research Scientists",
      "Faculty members and University Professors actively publishing",
      "Postdoctoral Fellows with pioneering discoveries",
      "R&D leaders in scientific institutes and think-tanks"
    ],
    selectionCriteria: [
      "Quality and indexation of published papers (peer-reviewed, high-impact journals)",
      "Citation metrics, h-index, and scientific field-normalized impact",
      "Originality of scientific findings and technical contributions",
      "Secured research grants, fellowships, and recognized intellectual outputs"
    ],
    requiredDocuments: [
      "Detailed Academic Curriculum Vitae with complete bibliography (PDF)",
      "List of major publications with DOI links and citation counts",
      "Brief overview of primary research breakthroughs (Max 2 pages)",
      "Evidence of grants, awards, or peer-review recognition"
    ],
    iconName: "Microscope",
    active: true
  },
  {
    id: "teaching-excellence",
    number: "03",
    title: "Excellence in Teaching & Education Award",
    group: "Academic & Research Excellence",
    groupKey: "academic",
    description: "Recognizing educators and mentors for outstanding teaching practices, educational innovation, mentorship, and student development.",
    eligibleCandidates: [
      "University and College Faculty Members",
      "Innovative School Educators and STEM Mentors",
      "Online & Hybrid Education Specialists",
      "Master Trainers and Vocational Educators"
    ],
    selectionCriteria: [
      "Implementation of innovative pedagogy and interactive learning models",
      "Documented student mentorship outcomes and career enablement",
      "Development of open educational resources, textbooks, or courseware",
      "Peer and student recognition for instructional excellence"
    ],
    requiredDocuments: [
      "Educational CV with teaching philosophy statement (PDF)",
      "Summary of pedagogical innovations and curriculum contributions",
      "Student mentorship records or testimonial portfolio",
      "Certificates of institutional teaching recognition"
    ],
    iconName: "BookOpen",
    active: true
  },
  {
    id: "emerging-researcher",
    number: "04",
    title: "Emerging Researcher Award",
    group: "Academic & Research Excellence",
    groupKey: "academic",
    description: "Recognizing early-career researchers demonstrating promising research contributions, originality, and professional development.",
    eligibleCandidates: [
      "Early-career researchers within 7 years of completing terminal degree",
      "PhD Scholars and Postdoctoral Researchers",
      "Junior Faculty members and Young Scientists",
      "Innovators conducting early-stage applied research"
    ],
    selectionCriteria: [
      "Novelty and research trajectory in the chosen specialization",
      "Publication track record relative to career stage",
      "Demonstrated analytical capability, independence, and technical rigor",
      "Potential for long-term international scientific impact"
    ],
    requiredDocuments: [
      "Academic CV including PhD/highest degree completion date (PDF)",
      "Copies of 2–3 representative research publications or preprints",
      "Brief summary of ongoing research vision and originality statement",
      "Institutional supervisor or departmental reference letter"
    ],
    iconName: "Lightbulb",
    active: true
  },

  // B. Technology & Innovation
  {
    id: "technology-innovation",
    number: "05",
    title: "Technology Innovation Excellence Award",
    group: "Technology & Innovation",
    groupKey: "technology",
    description: "Recognizing individuals developing innovative technologies, engineering solutions, and transformative technical applications.",
    eligibleCandidates: [
      "Software Architects, CTOs, and Engineering Leads",
      "Hardware, IoT, and Embedded Systems Innovators",
      "R&D Engineers across technology sectors",
      "Open-source creators and core framework maintainers"
    ],
    selectionCriteria: [
      "Technical novelty and complexity of the developed solution",
      "Real-world deployment, user adoption, or industrial utilization",
      "Measurable performance, scalability, or cost-efficiency breakthroughs",
      "Granted patents, defensive publications, or technical whitepapers"
    ],
    requiredDocuments: [
      "Technical Professional Resume (PDF)",
      "Detailed description of the technology architecture and innovation",
      "Verification of implementation (GitHub links, patents, case studies)",
      "Client or employer validation of project outcomes"
    ],
    iconName: "Cpu",
    active: true
  },
  {
    id: "ai-emerging-technologies",
    number: "06",
    title: "Excellence in Artificial Intelligence & Emerging Technologies Award",
    group: "Technology & Innovation",
    groupKey: "technology",
    description: "Recognizing contributions to AI, machine learning, generative AI, robotics, automation, and emerging technologies.",
    eligibleCandidates: [
      "AI/ML Research Scientists and Applied Machine Learning Engineers",
      "Generative AI, Large Language Model, and Agentic Workflow Specialists",
      "Robotics, Autonomous Systems, and Computer Vision Innovators",
      "Quantum computing and edge computing pioneers"
    ],
    selectionCriteria: [
      "Breakthrough advances in model architecture, training, or application",
      "Practical deployment of AI solving high-impact domain challenges",
      "Ethical AI governance, safety, and fairness considerations",
      "Publications, benchmark results, or production system metrics"
    ],
    requiredDocuments: [
      "Professional CV highlighting AI/ML experience (PDF)",
      "Case study or technical documentation of the AI implementation",
      "Metrics on model performance, efficiency, or business/scientific impact",
      "Patents, research papers, or open repository references"
    ],
    iconName: "BrainCircuit",
    active: true
  },
  {
    id: "digital-transformation",
    number: "07",
    title: "Digital Transformation Leadership Award",
    group: "Technology & Innovation",
    groupKey: "technology",
    description: "Recognizing professionals driving technology adoption, digital transformation, enterprise innovation, and technological modernization.",
    eligibleCandidates: [
      "Chief Information Officers (CIOs) and Digital Transformation Directors",
      "Enterprise Architects and Cloud Modernization Leaders",
      "Consulting Partners leading large-scale digital initiatives",
      "Public sector digital modernization leaders"
    ],
    selectionCriteria: [
      "Scale, strategic alignment, and execution of digital roadmaps",
      "Measurable operational efficiency and technological modernization",
      "Change management and organizational culture enablement",
      "Security, resilience, and scalable architectural excellence"
    ],
    requiredDocuments: [
      "Executive Resume / Professional Profile (PDF)",
      "Transformation portfolio detailing objectives, execution, and outcomes",
      "KPI improvements, cost savings, or service acceleration data",
      "Organizational endorsement or board testimonial"
    ],
    iconName: "Network",
    active: true
  },
  {
    id: "engineering-scientific-innovation",
    number: "08",
    title: "Excellence in Engineering & Scientific Innovation Award",
    group: "Technology & Innovation",
    groupKey: "technology",
    description: "Recognizing engineering professionals, scientists, and innovators for outstanding technical achievements.",
    eligibleCandidates: [
      "Civil, Mechanical, Electrical, Chemical, and Aerospace Engineers",
      "Material scientists and nanotechnologists",
      "Renewable energy, cleantech, and sustainability engineers",
      "Biomedical and healthtech engineering innovators"
    ],
    selectionCriteria: [
      "Engineering rigor, feasibility, and technical excellence",
      "Tangible environmental, safety, or functional advantages",
      "Patent portfolio or commercialized prototypes",
      "Contributions to technical standards or engineering literature"
    ],
    requiredDocuments: [
      "Comprehensive Engineering CV (PDF)",
      "Technical description of engineering design, project, or patent",
      "Photographs, schematics, or third-party validation reports",
      "Certifications and professional engineering licenses"
    ],
    iconName: "Cog",
    active: true
  },

  // C. Business & Entrepreneurship
  {
    id: "entrepreneurial-excellence",
    number: "09",
    title: "Entrepreneurial Excellence Award",
    group: "Business & Entrepreneurship",
    groupKey: "business",
    description: "Recognizing entrepreneurs building innovative businesses, creating opportunities, and contributing to economic development.",
    eligibleCandidates: [
      "Founders, Co-Founders, and Managing Partners",
      "SME Leaders who have scaled sustainable commercial enterprises",
      "Serial entrepreneurs with proven value creation track records",
      "Tech and non-tech venture creators"
    ],
    selectionCriteria: [
      "Business model innovation, market differentiation, and resilience",
      "Sustainable revenue growth, profitability, and customer satisfaction",
      "Employment creation and ethical governance standards",
      "Contribution to industry ecosystem and local/global economy"
    ],
    requiredDocuments: [
      "Entrepreneurial Profile / Executive CV (PDF)",
      "Company overview, founding milestones, and verifiable metrics",
      "Registration certificate or business proof (MSME / Incorporation)",
      "Media coverage, client references, or investor acknowledgments"
    ],
    iconName: "Briefcase",
    active: true
  },
  {
    id: "business-leadership",
    number: "10",
    title: "Business Leadership & Management Excellence Award",
    group: "Business & Entrepreneurship",
    groupKey: "business",
    description: "Recognizing business leaders and executives for strategic leadership, organizational growth, and professional excellence.",
    eligibleCandidates: [
      "Chief Executive Officers (CEOs), Managing Directors, and COOs",
      "Senior Vice Presidents, General Managers, and Division Heads",
      "Corporate Strategists and Turnaround Specialists",
      "Multinational and regional business directors"
    ],
    selectionCriteria: [
      "Strategic vision and consistent organizational performance",
      "Talent development, employee engagement, and inclusive leadership",
      "Risk mitigation, stakeholder trust, and corporate governance",
      "Sustainable business practices and market leadership"
    ],
    requiredDocuments: [
      "Executive Biography & Resume (PDF)",
      "Summary of major corporate milestones achieved under leadership",
      "Documented organizational metrics (growth, expansion, retention)",
      "Board, peer, or industry body recommendations"
    ],
    iconName: "TrendingUp",
    active: true
  },
  {
    id: "startup-achievement",
    number: "11",
    title: "Startup & Emerging Enterprise Achievement Award",
    group: "Business & Entrepreneurship",
    groupKey: "business",
    description: "Recognizing promising startups, founders, and emerging enterprises demonstrating innovation and growth.",
    eligibleCandidates: [
      "Startups within 5 years of incorporation",
      "Early-stage and growth-stage startup founders",
      "Bootstrapped and venture-backed high-growth companies",
      "Product-first emerging ventures"
    ],
    selectionCriteria: [
      "Unique value proposition and technological or operational innovation",
      "Demonstrated product-market fit and customer traction",
      "Scalability of operations and unit economics",
      "Visionary leadership and agile execution"
    ],
    requiredDocuments: [
      "Startup Pitch Deck or Executive Overview (PDF)",
      "Proof of incorporation and founding date",
      "Key performance indicators (users, revenue, growth rate)",
      "Product demo link, customer testimonials, or awards"
    ],
    iconName: "Rocket",
    active: true
  },
  {
    id: "women-leadership",
    number: "12",
    title: "Women Leadership & Entrepreneurship Excellence Award",
    group: "Business & Entrepreneurship",
    groupKey: "business",
    description: "Recognizing women leaders, entrepreneurs, professionals, and innovators for significant achievements and leadership contributions.",
    eligibleCandidates: [
      "Women Founders, Co-Founders, and Business Owners",
      "C-Suite and Senior Women Corporate Executives",
      "Women in STEM, research, and scientific leadership",
      "Pioneers breaking barriers in traditionally male-dominated sectors"
    ],
    selectionCriteria: [
      "Exemplary professional achievements and leadership excellence",
      "Mentorship of other women and advocacy for equitable representation",
      "Overcoming barriers and demonstrating organizational resilience",
      "Measurable societal, corporate, or academic impact"
    ],
    requiredDocuments: [
      "Professional Profile and CV (PDF)",
      "Narrative of key leadership achievements and contributions (Max 2 pages)",
      "Evidence of community mentorship, awards, or public recognition",
      "Professional references or endorsements"
    ],
    iconName: "Award",
    active: true
  },

  // D. Professional & Industry Excellence
  {
    id: "industry-professional",
    number: "13",
    title: "Outstanding Industry Professional Award",
    group: "Professional & Industry Excellence",
    groupKey: "professional",
    description: "Recognizing experienced professionals and technical experts for distinguished contributions to their industries.",
    eligibleCandidates: [
      "Senior Technical Specialists, Principal Engineers, and Subject Matter Experts",
      "Operations, Quality, Manufacturing, and Supply Chain Leaders",
      "Healthcare, Pharmaceutical, and Clinical Practice Experts",
      "Finance, Banking, Legal, and Compliance Specialists"
    ],
    selectionCriteria: [
      "Sustained track record of high-level professional mastery",
      "Introduction of best practices and quality benchmarks in the industry",
      "Mentorship of junior professionals and peer respect",
      "Verifiable contribution to mission-critical corporate projects"
    ],
    requiredDocuments: [
      "Updated Industry Resume / Curriculum Vitae (PDF)",
      "Project summary showcasing high-impact industry contributions",
      "Industry certifications, licenses, and professional memberships",
      "Employer or client verification of technical achievements"
    ],
    iconName: "Factory",
    active: true
  },
  {
    id: "professional-services",
    number: "14",
    title: "Excellence in Professional Services Award",
    group: "Professional & Industry Excellence",
    groupKey: "professional",
    description: "Recognizing professionals delivering outstanding services, expertise, and measurable professional impact.",
    eligibleCandidates: [
      "Management, Strategy, and Technical Consultants",
      "Legal Advisors, Chartered Accountants, and Tax Specialists",
      "Human Resources, Talent Management, and Executive Coaches",
      "Architects, Designers, and Specialist Service Providers"
    ],
    selectionCriteria: [
      "Exceptional client delivery, ethical practice, and reputation",
      "Demonstrated problem-solving in complex client engagements",
      "Thought leadership, industry publications, or keynote presentations",
      "Client retention, feedback ratings, and measurable advisory value"
    ],
    requiredDocuments: [
      "Professional Profile and Advisory Portfolio (PDF)",
      "Case studies demonstrating client value and measurable outcomes",
      "Professional accreditations or chartered status credentials",
      "Client recommendation letters or formal testimonials"
    ],
    iconName: "Handshake",
    active: true
  },
  {
    id: "global-leadership",
    number: "15",
    title: "Global Leadership & Professional Achievement Award",
    group: "Professional & Industry Excellence",
    groupKey: "professional",
    description: "Recognizing individuals demonstrating exceptional leadership, international contributions, and professional accomplishments.",
    eligibleCandidates: [
      "International organization leaders and multilateral diplomats",
      "Cross-border enterprise executives managing multi-country operations",
      "Global consortium heads and international standard committee chairs",
      "Distinguished professionals with worldwide career footprints"
    ],
    selectionCriteria: [
      "Cross-cultural leadership and international collaborative initiatives",
      "Measurable global or multi-regional footprint of contributions",
      "Advancement of international professional standards and ethics",
      "Recognition across multiple international forums"
    ],
    requiredDocuments: [
      "Executive Global CV detailing international postings (PDF)",
      "Portfolio of cross-border programs, summits, or treaties managed",
      "Verifiable documentation of international impact and leadership",
      "Endorsements from international organizations or partners"
    ],
    iconName: "Globe",
    active: true
  },

  // E. Social Impact & Lifetime Recognition
  {
    id: "social-impact",
    number: "16",
    title: "Social Impact & Community Development Award",
    group: "Social Impact & Lifetime Recognition",
    groupKey: "social",
    description: "Recognizing individuals contributing to community welfare, social development, inclusion, and humanitarian initiatives.",
    eligibleCandidates: [
      "Social Entrepreneurs, NGO Founders, and Development Directors",
      "Grassroots Community Leaders and Humanitarian Workers",
      "Public Health, Literacy, and Environmental Activists",
      "Corporate Social Responsibility (CSR) Heads"
    ],
    selectionCriteria: [
      "Measurable benefit delivered to underserved communities",
      "Sustainability and long-term viability of social initiatives",
      "Ethical transparency in fund utilization and public communication",
      "Empowerment, diversity, equity, and inclusion outcomes"
    ],
    requiredDocuments: [
      "Social Impact Narrative and Leadership CV (PDF)",
      "Documentary proof of community initiatives (reports, photos, metrics)",
      "Third-party audits, NGO registration, or CSR project briefs",
      "Beneficiary or institutional community testimonial letters"
    ],
    iconName: "HeartHandshake",
    active: true
  },
  {
    id: "lifetime-achievement",
    number: "17",
    title: "Lifetime Achievement Award",
    group: "Social Impact & Lifetime Recognition",
    groupKey: "social",
    description: "Honouring individuals with a distinguished professional journey and sustained contributions over an extended period.",
    eligibleCandidates: [
      "Distinguished professionals with 20+ years of active contribution",
      "Emeritus Professors, Senior Fellows, and Industry Doyens",
      "Foundational leaders who shaped their respective fields",
      "Individuals whose lifelong dedication left an enduring legacy"
    ],
    selectionCriteria: [
      "Depth, breadth, and sustained excellence over at least two decades",
      "Generational impact: mentoring subsequent generations of leaders",
      "Unblemished record of professional integrity and ethical stewardship",
      "National or international respect acknowledged by industry peers"
    ],
    requiredDocuments: [
      "Comprehensive Career Retrospective / Lifetime CV (PDF)",
      "Documentation of major career milestones and historical impact",
      "Summary of awards, honors, and public citations previously conferred",
      "Formal letters of nomination or endorsement from institutional leaders"
    ],
    iconName: "Trophy",
    active: true
  },
  {
    id: "distinguished-contribution",
    number: "18",
    title: "Distinguished Contribution to Society Award",
    group: "Social Impact & Lifetime Recognition",
    groupKey: "social",
    description: "Recognizing individuals whose achievements have created meaningful and lasting benefits for society.",
    eligibleCandidates: [
      "Innovators whose work solves urgent public welfare challenges",
      "Advocates for education, healthcare, peace, and human dignity",
      "Pioneering cultural, scientific, or social contributors",
      "Independent visionaries driving positive societal change"
    ],
    selectionCriteria: [
      "Scale and durability of societal improvement created",
      "Altruistic dedication and alignment with human welfare",
      "Inspiration provided to broader society and youth",
      "Verifiable testimonials and documented societal results"
    ],
    requiredDocuments: [
      "Comprehensive Profile highlighting societal contribution (PDF)",
      "Summary of programs and societal beneficiaries served",
      "Documentary evidence, independent media coverage, or third-party audits",
      "Institutional or civic recommendations"
    ],
    iconName: "Medal",
    active: true
  }
];

export const AWARD_HIGHLIGHTS = [
  {
    id: "global-excellence",
    title: "Global Excellence",
    description: "Honouring international benchmarks of quality, rigor, and scholarly integrity across borders.",
    icon: "Globe"
  },
  {
    id: "research-innovation",
    title: "Research & Innovation",
    description: "Celebrating pioneering scientific inquiries, peer-reviewed outputs, and patent-grade technologies.",
    icon: "Microscope"
  },
  {
    id: "professional-leadership",
    title: "Professional Leadership",
    description: "Recognizing strategic stewardship, exemplary executive vision, and high-impact enterprise direction.",
    icon: "Briefcase"
  },
  {
    id: "entrepreneurial-achievement",
    title: "Entrepreneurial Achievement",
    description: "Applauding high-growth venture creators, bootstrapped founders, and economic value catalysts.",
    icon: "Rocket"
  },
  {
    id: "lifetime-achievement",
    title: "Lifetime Achievement",
    description: "Paying tribute to distinguished careers marked by sustained dedication and foundational leadership.",
    icon: "Trophy"
  },
  {
    id: "social-impact",
    title: "Social Impact",
    description: "Acknowledging transformative humanitarian initiatives and community empowerment programs.",
    icon: "HeartHandshake"
  }
];

export const WHO_CAN_BE_NOMINATED = [
  "University Professors and Academicians",
  "Researchers and Scientists",
  "PhD Scholars and Research Professionals",
  "Industry Professionals and Technical Experts",
  "Entrepreneurs and Business Leaders",
  "Technology Specialists and Software Architects",
  "Corporate Executives and C-Suite Leaders",
  "Startup Founders and Co-Founders",
  "Educators and Institutional Leaders",
  "Social Entrepreneurs and Community Leaders",
  "Independent Professionals and Domain Consultants",
  "Women Leaders, Researchers, and Innovators"
];

export const WHY_EMINSPHERE = [
  {
    id: "merit-based",
    title: "Merit-Based Recognition",
    description: "Nominations are evaluated against documented achievements, verifiable credentials, and category-specific assessment parameters.",
    icon: "Award"
  },
  {
    id: "professional-eval",
    title: "Professional Evaluation",
    description: "Applications undergo multi-stage independent assessment by domain experts in academic, technological, and corporate sectors.",
    icon: "ShieldCheck"
  },
  {
    id: "international-reach",
    title: "International Participation",
    description: "Open nomination opportunities welcoming eligible candidates from across academic institutions and industries globally.",
    icon: "Globe"
  },
  {
    id: "transparent-process",
    title: "Transparent Process",
    description: "Clearly published eligibility frameworks, conflict-of-interest mandates, and documented committee review protocols.",
    icon: "FileCheck"
  },
  {
    id: "verified-recognition",
    title: "Verified Recognition",
    description: "Unique award identification codes and an active online certificate verification portal for authorized global validation.",
    icon: "QrCode"
  }
];

export const NOMINATION_PROCESS_STEPS = [
  {
    step: "01",
    title: "Select Your Award",
    description: "Choose the most relevant category among the 18 disciplines based on your primary professional achievements."
  },
  {
    step: "02",
    title: "Complete Nomination Form",
    description: "Provide personal details, professional qualifications, career track record, and achievement statements."
  },
  {
    step: "03",
    title: "Submit Supporting Documents",
    description: "Upload your CV, portfolio, publication links, or organizational verification evidence (PDF/Images up to 10 MB)."
  },
  {
    step: "04",
    title: "Application Screening",
    description: "The nominations team reviews eligibility, completeness, and initial documentation compliance."
  },
  {
    step: "05",
    title: "Expert Evaluation",
    description: "Eligible nominations are scored by appointed domain specialists under the weighted evaluation framework."
  },
  {
    step: "06",
    title: "Final Decision",
    description: "The designated Award Selection Committee conducts a final review and formally records selection outcomes."
  },
  {
    step: "07",
    title: "Recognition",
    description: "Selected recipients receive an official EminSphere award certificate, citation letter, and verifiable digital badge."
  }
];

export const EVALUATION_PARAMETERS = [
  { parameter: "Achievement & Contribution", weight: 30, description: "Depth and substance of documented professional or academic achievements in the chosen category." },
  { parameter: "Professional Experience", weight: 20, description: "Tenure, demonstrated expertise, and sustained track record in the relevant domain or discipline." },
  { parameter: "Innovation & Originality", weight: 15, description: "Novelty of research, technical solutions, pedagogical approaches, or business models." },
  { parameter: "Measurable Impact", weight: 15, description: "Demonstrated outcomes, citations, economic growth, efficiency, or societal benefits delivered." },
  { parameter: "Leadership & Recognition", weight: 10, description: "Peer standing, mentoring, past recognitions, and community or institutional leadership roles." },
  { parameter: "Supporting Evidence", weight: 10, description: "Verifiability, completeness, and authenticity of submitted portfolios and reference materials." }
];

export const EVALUATION_BANDS = [
  { range: "85 – 100", label: "Outstanding", description: "Demonstrates exceptional achievement and international or national impact." },
  { range: "75 – 84", label: "Strong", description: "Clear, documented track record of high-quality professional contributions." },
  { range: "65 – 74", label: "Competitive", description: "Substantial professional record with commendable contributions to the field." },
  { range: "Below 65", label: "Does Not Meet Threshold", description: "Does not meet the suggested benchmark for the current recognition cycle." }
];

export const DEFAULT_AWARD_CYCLE: AwardCycle = {
  id: "cycle-2027",
  year: 2027,
  cycleName: "2026–2027 Global Innovation & Excellence Cycle",
  nominationOpeningDate: "15 November 2026",
  earlyNominationDeadline: "15 January 2027",
  finalNominationDeadline: "28 February 2027",
  evaluationPeriod: "01 March – 20 March 2027",
  resultAnnouncementDate: "30 March 2027",
  recognitionCeremonyDate: "18 April 2027",
  ceremonyMode: "Hybrid",
  isActive: true
};

export const GOVERNANCE_MEMBERS: GovernanceMember[] = [
  {
    id: "gov-1",
    name: "Dr. Alistair Vance",
    role: "Programme Director",
    roleCategory: "Programme Director",
    designation: "Executive Director of Research Initiatives",
    organization: "Global Academic Consortium",
    country: "United Kingdom",
    expertise: "Higher Education Strategy & International Peer-Review",
    biography: "Oversees the programmatic governance, integrity, and ethical standards of the EminSphere Global Innovation & Excellence Awards. Over 22 years of experience leading international academic review panels.",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gov-2",
    name: "Prof. Dr. Rajeshwari Sundaram",
    role: "Chair, Governing Council",
    roleCategory: "Governing Council",
    designation: "Senior Professor & Former Dean of Engineering",
    organization: "National Institute of Advanced Studies",
    country: "India",
    expertise: "Engineering Education, Institutional Accreditation & Quality Systems",
    biography: "Leads the Governing Council in formulating policy frameworks, ensuring absolute neutrality, and aligning recognition criteria with global professional benchmarks.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gov-3",
    name: "Dr. Marcus Wei",
    role: "Council Member — Technology",
    roleCategory: "Governing Council",
    designation: "Principal Research Director",
    organization: "Asia-Pacific Innovation Labs",
    country: "Singapore",
    expertise: "Artificial Intelligence, Distributed Systems & Cloud Platforms",
    biography: "Advises on criteria and technical standards for emerging technologies, digital transformation, and patent-grade innovations.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gov-4",
    name: "Dr. Elena Rostova",
    role: "International Advisory Board Member",
    roleCategory: "International Advisory Board",
    designation: "Director of International Scholarly Affairs",
    organization: "European Association for Research Excellence",
    country: "Germany",
    expertise: "Cross-Border Research Evaluation & Scholarly Ethics",
    biography: "Provides strategic guidance on international engagement, multi-jurisdictional standards, and scientific integrity across European research networks.",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gov-5",
    name: "Dr. Kenneth O'Connor",
    role: "International Advisory Board Member",
    roleCategory: "International Advisory Board",
    designation: "Senior Technology Consultant & Former CTO",
    organization: "Vanguard Systems International",
    country: "United States",
    expertise: "Enterprise Architecture, Scalability & Executive Leadership",
    biography: "Guides the corporate and industry assessment parameters, bridging academic research rigors with real-world enterprise engineering impacts.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gov-6",
    name: "Prof. Amina Al-Mansoor",
    role: "Selection Committee Chair",
    roleCategory: "Award Selection Committee",
    designation: "Head of Interdisciplinary Sciences",
    organization: "Gulf Institute of Technology & Policy",
    country: "United Arab Emirates",
    expertise: "Research Methodology, Bibliometric Analysis & Innovation Grants",
    biography: "Coordinates the independent scoring panels and presents verified recommendation dossiers to the governing body.",
    photoUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop"
  }
];

export const SEED_AWARDEES: Awardee[] = [
  {
    id: "rec-2026-01",
    name: "Dr. Julian Montgomery",
    recognitionTitle: "Excellence in Academic Leadership Award",
    categoryTitle: "Academic & Research Excellence",
    categoryId: "academic-leadership",
    awardYear: 2026,
    country: "United Kingdom",
    professionalField: "Higher Education Leadership",
    designation: "Dean of Engineering & Physical Sciences",
    organization: "University of Edinburgh",
    biography: "Dr. Julian Montgomery has spearheaded transformative curriculum modernizations, established cross-continental research consortiums, and championed inclusive STEM leadership across Europe.",
    achievementSummary: "Led the restructuring of modern engineering curricula impacting 14,000+ students, established 18 international collaborative research laboratories, and secured £24M in interdisciplinary research endowments.",
    citation: "In recognition of distinguished vision and enduring contributions to institutional development, faculty empowerment, and global academic excellence.",
    certificateId: "ES-GIA-2027-00001",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    consentObtained: true,
    published: true
  },
  {
    id: "rec-2026-02",
    name: "Dr. Priya V. Ramanathan",
    recognitionTitle: "Outstanding Research Contribution Award",
    categoryTitle: "Academic & Research Excellence",
    categoryId: "outstanding-research",
    awardYear: 2026,
    country: "India",
    professionalField: "Computational Genomics & Precision Medicine",
    designation: "Principal Scientist",
    organization: "Center for Bio-Intelligence & Molecular Systems",
    biography: "A pioneering researcher in applying graph deep learning models to predict rare oncological mutations, Dr. Ramanathan has authored over 45 peer-reviewed articles in leading journals.",
    achievementSummary: "Pioneered a low-cost computational biomarker discovery pipeline that reduced genomic analysis turnaround from 6 weeks to 48 hours, acknowledged by multiple international cancer research bodies.",
    citation: "In recognition of outstanding scientific breakthroughs, peer-reviewed contributions, and pioneering methodologies in biomedical data science.",
    certificateId: "ES-GIA-2027-00002",
    photoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
    consentObtained: true,
    published: true
  },
  {
    id: "rec-2026-03",
    name: "David Chen",
    recognitionTitle: "Technology Innovation Excellence Award",
    categoryTitle: "Technology & Innovation",
    categoryId: "technology-innovation",
    awardYear: 2026,
    country: "Singapore",
    professionalField: "Distributed Systems & Edge Computing",
    designation: "Chief Technology Officer",
    organization: "NexusEdge Technologies",
    biography: "David Chen is an engineering leader and open-source innovator who designed high-throughput, fault-tolerant edge orchestration systems adopted by global telecommunications carriers.",
    achievementSummary: "Architected a zero-trust edge computing platform managing over 250,000 nodes worldwide, recognized with 7 registered international patents in low-latency packet serialization.",
    citation: "In recognition of exceptional technical ingenuity, innovative architectural design, and transformative contributions to modern computing infrastructure.",
    certificateId: "ES-GIA-2026-00088",
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    consentObtained: true,
    published: true
  }
];

export const SEED_CERTIFICATES: CertificateRecord[] = [
  {
    certificateId: "ES-GIA-2027-00001",
    recipientName: "Dr. Julian Montgomery",
    recognitionTitle: "Excellence in Academic Leadership Award",
    awardCategory: "Academic & Research Excellence",
    categoryId: "academic-leadership",
    awardYear: 2027,
    field: "Higher Education Leadership & Institutional Strategy",
    issueDate: "18 April 2027",
    issuingOrganization: "EminSphere™ Global Innovation & Excellence Council",
    status: "Valid",
    verificationUrl: "https://www.eminsphere.com/verify-certificate/ES-GIA-2027-00001",
    signatoryTitle: "Programme Director & Council Chair",
    signatoryName: "Dr. Alistair Vance",
    createdAt: "2026-11-01T10:00:00Z",
    notes: "Officially conferred following unanimous recommendation by the Award Selection Committee."
  },
  {
    certificateId: "ES-GIA-2027-00002",
    recipientName: "Dr. Priya V. Ramanathan",
    recognitionTitle: "Outstanding Research Contribution Award",
    awardCategory: "Academic & Research Excellence",
    categoryId: "outstanding-research",
    awardYear: 2027,
    field: "Computational Genomics & Precision Medicine",
    issueDate: "18 April 2027",
    issuingOrganization: "EminSphere™ Global Innovation & Excellence Council",
    status: "Valid",
    verificationUrl: "https://www.eminsphere.com/verify-certificate/ES-GIA-2027-00002",
    signatoryTitle: "Programme Director & Council Chair",
    signatoryName: "Dr. Alistair Vance",
    createdAt: "2026-11-01T10:00:00Z",
    notes: "Conferred for high-impact genomic discoveries and citation excellence."
  },
  {
    certificateId: "ES-GIA-2026-00088",
    recipientName: "David Chen",
    recognitionTitle: "Technology Innovation Excellence Award",
    awardCategory: "Technology & Innovation",
    categoryId: "technology-innovation",
    awardYear: 2026,
    field: "Distributed Systems & Edge Computing",
    issueDate: "15 April 2026",
    issuingOrganization: "EminSphere™ Global Innovation & Excellence Council",
    status: "Valid",
    verificationUrl: "https://www.eminsphere.com/verify-certificate/ES-GIA-2026-00088",
    signatoryTitle: "Programme Director & Council Chair",
    signatoryName: "Dr. Alistair Vance",
    createdAt: "2026-04-15T09:00:00Z",
    notes: "Recognized for patented innovations in edge infrastructure."
  }
];

export const FAQS = [
  {
    q: "What are the EminSphere Global Innovation & Excellence Awards?",
    a: "These are independent recognition programmes designed to acknowledge professional achievements, innovation, research contributions, leadership, and societal impact across academic, technological, and corporate sectors."
  },
  {
    q: "Who can apply?",
    a: "Eligible professionals, academicians, researchers, entrepreneurs, industry experts, innovators, educators, and leaders from relevant fields may submit nominations according to category-specific requirements."
  },
  {
    q: "Can I nominate someone else?",
    a: "Yes. Both self-nominations and third-party or institutional nominations are accepted, subject to the nominee's verifiable credentials and consent."
  },
  {
    q: "Is selection guaranteed after submitting an application?",
    a: "No. All applications are subject to rigorous administrative screening, evidence verification, and independent committee evaluation. Submission does not guarantee selection or recognition."
  },
  {
    q: "How are recipients selected?",
    a: "Eligible applications are assessed using a published 6-parameter evaluation framework (covering achievement, experience, originality, impact, leadership, and evidence) by qualified independent experts."
  },
  {
    q: "Is there an application fee?",
    a: "Any applicable administrative or processing fee, where relevant, is clearly disclosed prior to submission. Payment never guarantees selection, and evaluation remains strictly merit-based."
  },
  {
    q: "Can international candidates apply?",
    a: "Yes. EminSphere welcomes nominations from qualified candidates worldwide across all eligible categories."
  },
  {
    q: "Will selected recipients receive a certificate?",
    a: "Selected recipients receive official EminSphere award documentation, including a Certificate of Recognition with a unique identification code and QR code, an official citation letter, and a digital badge."
  },
  {
    q: "How can I verify my certificate?",
    a: "Enter the unique Certificate ID on the official EminSphere Certificate Verification portal (/verify-certificate) or scan the certificate's QR code to view the live verification record."
  },
  {
    q: "Are these awards university degrees?",
    a: "No. EminSphere recognition awards are independent non-academic recognitions. They are not university degrees, PhD qualifications, statutory academic credentials, or government accreditations."
  },
  {
    q: "Can an application be rejected?",
    a: "Yes. Incomplete, inaccurate, unsubstantiated, or ineligible nominations may be rejected during screening or evaluation."
  },
  {
    q: "Can an award be withdrawn?",
    a: "Recognition may be suspended or revoked under our governing policy if material misrepresentation, fraud, or serious professional ethical misconduct is established through a documented review process."
  }
];

export const POLICIES = [
  {
    id: "nomination-policy",
    title: "11.1 Nomination Policy",
    content: "All nominations must include accurate, complete, and verifiable information. Candidates or nominators are solely responsible for the authenticity of submitted achievement claims, resumes, and supporting portfolios. EminSphere reserves the right to request additional documentation or verify credentials with employers, academic bodies, or patent offices during the assessment cycle. Incomplete or misleading submissions may be disqualified without prior notice."
  },
  {
    id: "evaluation-policy",
    title: "11.2 Evaluation Policy",
    content: "Nominations are evaluated strictly in accordance with published category-specific criteria and our weighted 6-parameter scoring framework. Appointed evaluators operate independently under established academic and industrial review standards. Individual reviewer scoring dossiers and deliberations remain confidential to protect candidate privacy and evaluator impartiality."
  },
  {
    id: "code-of-ethics",
    title: "11.3 Code of Ethics",
    content: "Applicants, evaluators, committee members, and programme administrators are required to adhere to the highest standards of professional honesty, intellectual integrity, and respectful conduct. Plagiarism, fabricated metrics, artificial citation inflation, or any attempt to improperly influence selection decisions will result in immediate disqualification and permanent debarment from EminSphere programs."
  },
  {
    id: "conflict-of-interest",
    title: "11.4 Conflict of Interest Policy",
    content: "Evaluators and committee members must proactively disclose any direct personal, familial, financial, or direct supervisory relationship with an applicant. When a conflict exists, the evaluator is recused from all scoring, discussions, and decisions concerning that nomination. All conflict disclosures are recorded in the programme audit trail."
  },
  {
    id: "privacy-policy",
    title: "11.5 Privacy Policy",
    content: "Personal information and uploaded documents submitted through the nomination portal are collected solely for legitimate administrative, evaluation, and verification purposes. In compliance with applicable data protection principles, sensitive contact information (such as personal phone numbers, home addresses, or identity proofs) is never made publicly accessible. Recipient names, official award titles, and approved summaries are published only with recipient consent."
  },
  {
    id: "refund-cancellation",
    title: "11.6 Refund & Cancellation Policy",
    content: "Any applicable administrative or processing charges must be published transparently prior to collection. Such fees cover administrative handling, screening, and evaluation overheads and do not constitute purchasing or guaranteeing an award. Administrative fees are non-refundable once document screening has commenced. In the event of program cancellation by EminSphere, applicable fee terms will be communicated promptly."
  },
  {
    id: "recognition-disclaimer",
    title: "11.7 Recognition Disclaimer",
    content: "EminSphere is an independent non-governmental organization operating its own recognition programmes. Awards, fellowships, memberships, certificates, and distinctions issued under these programmes are non-academic recognitions. They do not constitute university degrees, honorary doctoral degrees, PhD qualifications, government-recognized academic credentials, statutory accreditation, or professional licences. EminSphere does not claim to be a university or a statutory degree-awarding institution. Recognition does not automatically establish academic equivalence, university affiliation, government endorsement, or professional licensing rights."
  }
];
