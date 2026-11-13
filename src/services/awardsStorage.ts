import { 
  AwardCategory, 
  AwardCycle, 
  Awardee, 
  CertificateRecord, 
  NominationApplication,
  AWARD_CATEGORIES,
  DEFAULT_AWARD_CYCLE,
  SEED_AWARDEES,
  SEED_CERTIFICATES,
  GOVERNANCE_MEMBERS
} from '@/data/awardsData';
import QRCode from 'qrcode';

const STORAGE_KEYS = {
  NOMINATIONS: 'eminsphere_awards_nominations_v1',
  CERTIFICATES: 'eminsphere_awards_certificates_v1',
  CATEGORIES: 'eminsphere_awards_categories_v1',
  CYCLES: 'eminsphere_awards_cycles_v1',
  AWARDEES: 'eminsphere_awards_awardees_v1',
  AUDIT_LOGS: 'eminsphere_awards_audit_v1',
  NOTIFICATIONS: 'eminsphere_awards_notifications_v1',
};

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  action: string;
  targetId: string;
  details: string;
}

export interface DispatchedNotification {
  id: string;
  recipientEmail: string;
  recipientName: string;
  applicationId: string;
  subject: string;
  bodyText: string;
  type: 'Nomination Received' | 'Additional Documents Required' | 'Application Under Evaluation' | 'Selection Confirmation' | 'Not Selected';
  dispatchedAt: string;
}

const memoryStore: Record<string, string> = {};

// Helper to safely read from localStorage with fallback
function safeRead<T>(key: string, fallback: T): T {
  try {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined' && localStorage?.getItem) {
      const item = localStorage.getItem(key);
      if (!item) return fallback;
      return JSON.parse(item) as T;
    }
  } catch (e) {}

  if (memoryStore[key]) {
    try {
      return JSON.parse(memoryStore[key]) as T;
    } catch (e) {}
  }
  return fallback;
}

// Helper to safely write to localStorage
function safeWrite<T>(key: string, data: T): void {
  const serialized = JSON.stringify(data);
  memoryStore[key] = serialized;
  try {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined' && localStorage?.setItem) {
      localStorage.setItem(key, serialized);
    }
  } catch (e) {}
}

// Generate randomized unique reference
export function generateReferenceId(year: number = 2027): string {
  const rand = Math.floor(10000 + Math.random() * 90000);
  return `ES-GIA-${year}-${rand}`;
}

export function generateCertificateId(year: number = 2027): string {
  const rand = Math.floor(10000 + Math.random() * 90000);
  return `ES-GIA-${year}-${rand}`;
}

export class AwardsStorageService {
  // Ensure default seeds are present
  static init(): void {
    if (!safeRead(STORAGE_KEYS.CATEGORIES, null)) {
      safeWrite(STORAGE_KEYS.CATEGORIES, AWARD_CATEGORIES);
    }
    if (!safeRead(STORAGE_KEYS.CYCLES, null)) {
      safeWrite(STORAGE_KEYS.CYCLES, DEFAULT_AWARD_CYCLE);
    }
    if (!safeRead(STORAGE_KEYS.CERTIFICATES, null)) {
      safeWrite(STORAGE_KEYS.CERTIFICATES, SEED_CERTIFICATES);
    }
    if (!safeRead(STORAGE_KEYS.AWARDEES, null)) {
      safeWrite(STORAGE_KEYS.AWARDEES, SEED_AWARDEES);
    }
    if (!safeRead(STORAGE_KEYS.NOMINATIONS, null)) {
      // Seed an initial demo application for test viewing in admin
      const initialNom: NominationApplication = {
        id: "ES-GIA-2027-10492",
        submissionDate: new Date().toISOString(),
        status: "Under Evaluation",
        firstName: "Dr. Arvind",
        lastName: "Deshmukh",
        nationality: "Indian",
        countryOfResidence: "India",
        stateProvince: "Maharashtra",
        city: "Pune",
        email: "arvind.deshmukh@example.com",
        mobile: "+91 98765 43210",
        designation: "Associate Professor of AI Systems",
        organization: "Symbiosis Institute of Technology",
        industryField: "Computer Science & Artificial Intelligence",
        yearsExperience: 14,
        highestQualification: "Ph.D. in Computer Engineering",
        specialization: "Applied Deep Learning & NLP",
        profileSummary: "Academic researcher specializing in natural language models for low-resource Indian languages.",
        biography: "Dr. Arvind Deshmukh has published 28 peer-reviewed research papers, directed three government-funded research grants, and guided four successful doctoral candidates.",
        awardCategoryId: "ai-emerging-technologies",
        awardCategoryTitle: "Excellence in Artificial Intelligence & Emerging Technologies Award",
        nominationType: "Self-Nomination",
        primaryAchievementArea: "Multilingual Indian LLM Frameworks & Neural Translation",
        reasonForNomination: "Groundbreaking architectural benchmarks achieved in compressing transformer models for mobile edge devices.",
        majorAchievements: "Developed an open-source inference engine reducing memory footprint by 64% with zero loss in translation perplexity.",
        keyContributions: "Standardized multi-dialect corpus now utilized across 12 academic institutions.",
        whyConsider: "Demonstrates sustained academic rigor, open-source impact, and dedication to inclusive technology.",
        documents: [
          { name: "Curriculum_Vitae_Arvind_Deshmukh.pdf", type: "application/pdf", size: 1450200, category: "CV" },
          { name: "Publication_Index_and_Citations.pdf", type: "application/pdf", size: 892000, category: "Publications" }
        ],
        declarations: {
          accurateAndComplete: true,
          authorizeVerification: true,
          noGuaranteeUnderstood: true,
          agreeToPolicies: true,
          consentPersonalProcessing: true,
          noPublicWithoutConsent: true,
          receiveAnnouncements: true
        },
        statusHistory: [
          { status: "Submitted", changedAt: new Date(Date.now() - 86400000 * 5).toISOString(), changedBy: "Applicant", remarks: "Nomination successfully submitted online" },
          { status: "Initial Screening", changedAt: new Date(Date.now() - 86400000 * 3).toISOString(), changedBy: "Admin", remarks: "Eligibility and document completeness verified" },
          { status: "Under Evaluation", changedAt: new Date(Date.now() - 86400000).toISOString(), changedBy: "Selection Panel", remarks: "Assigned to AI Systems evaluation panel" }
        ],
        scores: {
          achievementAndContribution: 28,
          professionalExperience: 18,
          innovationAndOriginality: 14,
          measurableImpact: 13,
          leadershipAndRecognition: 9,
          supportingEvidence: 9,
          totalScore: 91
        },
        evaluationBand: "Outstanding"
      };
      safeWrite(STORAGE_KEYS.NOMINATIONS, [initialNom]);
    }
  }

  // --- NOMINATIONS ---
  static getNominations(): NominationApplication[] {
    this.init();
    return safeRead<NominationApplication[]>(STORAGE_KEYS.NOMINATIONS, []);
  }

  static getNominationById(id: string): NominationApplication | undefined {
    const list = this.getNominations();
    return list.find(n => n.id.toUpperCase() === id.trim().toUpperCase());
  }

  static trackNomination(referenceId: string, email: string): NominationApplication | undefined {
    const list = this.getNominations();
    return list.find(
      n => n.id.toUpperCase() === referenceId.trim().toUpperCase() &&
           n.email.toLowerCase().trim() === email.toLowerCase().trim()
    );
  }

  static saveNomination(application: Omit<NominationApplication, 'id' | 'submissionDate' | 'status' | 'statusHistory'>): NominationApplication {
    this.init();
    const cycle = this.getAwardCycle();
    const id = generateReferenceId(cycle.year);
    const now = new Date().toISOString();

    const newApp: NominationApplication = {
      ...application,
      id,
      submissionDate: now,
      status: 'Submitted',
      statusHistory: [
        {
          status: 'Submitted',
          changedAt: now,
          changedBy: application.firstName + ' ' + application.lastName,
          remarks: 'Application submitted through the official EminSphere nomination portal.'
        }
      ]
    };

    const current = this.getNominations();
    safeWrite(STORAGE_KEYS.NOMINATIONS, [newApp, ...current]);

    // Dispatch automated confirmation notification (Email 1)
    this.dispatchNotification({
      applicationId: newApp.id,
      recipientEmail: newApp.email,
      recipientName: `${newApp.firstName} ${newApp.lastName}`,
      type: 'Nomination Received',
      subject: `Nomination Received – EminSphere Global Innovation & Excellence Awards (${newApp.id})`,
      bodyText: `Dear ${newApp.firstName} ${newApp.lastName},\n\nThank you for submitting your nomination for the EminSphere Global Innovation & Excellence Awards.\n\nYour application has been successfully received.\n\nNomination Reference: ${newApp.id}\nAward Category: ${newApp.awardCategoryTitle}\n\nOur nominations team will review your application according to the applicable eligibility and evaluation procedures.\n\nPlease retain your reference number for future communication.\n\nRegards,\nAwards & Recognition Team\nEminSphere™\ninfo@eminsphere.com`
    });

    // Explicitly dispatch full nomination dossier to backend API for admin notification at info@eminsphere.com
    if (typeof window !== 'undefined' && window.fetch) {
      try {
        fetch('/api/nominate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'new_nomination',
            applicationId: newApp.id,
            nomination: newApp,
            recipientEmail: newApp.email,
            recipientName: `${newApp.firstName} ${newApp.lastName}`,
            subject: `[New Award Nomination] ${newApp.firstName} ${newApp.lastName} – ${newApp.awardCategoryTitle} (${newApp.id})`
          })
        }).catch(err => {
          console.warn('Backend email dispatch notification:', err?.message || err);
        });
      } catch (e) {
        // Safe fallback in node/SSR environments
      }
    }

    this.addAuditLog('Applicant', 'SUBMIT_NOMINATION', id, `Nomination received for category ${newApp.awardCategoryTitle}`);

    return newApp;
  }

  static updateNominationStatus(
    id: string, 
    newStatus: NominationApplication['status'], 
    changedBy: string = 'Admin', 
    remarks: string = ''
  ): NominationApplication | undefined {
    const list = this.getNominations();
    const index = list.findIndex(n => n.id.toUpperCase() === id.trim().toUpperCase());
    if (index === -1) return undefined;

    const oldStatus = list[index].status;
    const now = new Date().toISOString();

    list[index].status = newStatus;
    list[index].statusHistory = [
      ...(list[index].statusHistory || []),
      {
        status: newStatus,
        changedAt: now,
        changedBy,
        remarks: remarks || `Status changed from ${oldStatus} to ${newStatus}`
      }
    ];

    safeWrite(STORAGE_KEYS.NOMINATIONS, list);

    this.addAuditLog(changedBy, 'UPDATE_STATUS', id, `Status changed from ${oldStatus} to ${newStatus}. Remarks: ${remarks}`);

    // Trigger associated automated email based on status
    const app = list[index];
    if (newStatus === 'Documents Required') {
      this.dispatchNotification({
        applicationId: app.id,
        recipientEmail: app.email,
        recipientName: `${app.firstName} ${app.lastName}`,
        type: 'Additional Documents Required',
        subject: 'Additional Information Required – EminSphere Nomination',
        bodyText: `Dear ${app.firstName} ${app.lastName},\n\nThank you for your nomination.\n\nDuring the initial screening of your application (${app.id}), additional information or supporting documentation is required.\n\nNote from Committee: ${remarks || 'Please provide verified portfolio evidence.'}\n\nPlease submit the requested information promptly.\n\nRegards,\nAwards & Recognition Team\nEminSphere™`
      });
    } else if (newStatus === 'Under Evaluation') {
      this.dispatchNotification({
        applicationId: app.id,
        recipientEmail: app.email,
        recipientName: `${app.firstName} ${app.lastName}`,
        type: 'Application Under Evaluation',
        subject: 'Nomination Status Update – Under Evaluation',
        bodyText: `Dear ${app.firstName} ${app.lastName},\n\nYour nomination (${app.id}) has successfully completed the initial screening stage and has been forwarded for expert evaluation.\n\nThe final decision will be communicated through your registered email address.\n\nRegards,\nAwards & Recognition Team\nEminSphere™`
      });
    } else if (newStatus === 'Selected') {
      this.dispatchNotification({
        applicationId: app.id,
        recipientEmail: app.email,
        recipientName: `${app.firstName} ${app.lastName}`,
        type: 'Selection Confirmation',
        subject: 'Congratulations – EminSphere Recognition Selection',
        bodyText: `Dear ${app.firstName} ${app.lastName},\n\nWe are pleased to inform you that your nomination has been selected for recognition under the EminSphere Global Innovation & Excellence Awards.\n\nRecognition Category: ${app.awardCategoryTitle}\nRecognition Title: ${app.awardCategoryTitle}\nAward Year: ${new Date().getFullYear()}\n\nFurther information regarding recognition documentation and the applicable ceremony will be communicated separately.\n\nCongratulations on this achievement.\n\nRegards,\nAwards & Recognition Team\nEminSphere™`
      });
    } else if (newStatus === 'Not Selected') {
      this.dispatchNotification({
        applicationId: app.id,
        recipientEmail: app.email,
        recipientName: `${app.firstName} ${app.lastName}`,
        type: 'Not Selected',
        subject: 'Update on Your EminSphere Nomination',
        bodyText: `Dear ${app.firstName} ${app.lastName},\n\nThank you for submitting your nomination (${app.id}).\n\nFollowing the evaluation process, your nomination has not been selected for the current recognition cycle.\n\nWe appreciate your contributions and interest in EminSphere's recognition programmes.\n\nRegards,\nAwards & Recognition Team\nEminSphere™`
      });
    }

    return list[index];
  }

  static updateNominationEvaluation(
    id: string,
    scores: NominationApplication['scores'],
    evaluatorNotes: string,
    adminNotes: string,
    evaluatorId: string = 'Lead Evaluator'
  ): NominationApplication | undefined {
    const list = this.getNominations();
    const index = list.findIndex(n => n.id.toUpperCase() === id.trim().toUpperCase());
    if (index === -1) return undefined;

    let band: NominationApplication['evaluationBand'] = 'Below Threshold';
    if (scores) {
      if (scores.totalScore >= 85) band = 'Outstanding';
      else if (scores.totalScore >= 75) band = 'Strong';
      else if (scores.totalScore >= 65) band = 'Competitive';
    }

    list[index].scores = scores;
    list[index].evaluationBand = band;
    list[index].evaluatorNotes = evaluatorNotes;
    list[index].adminNotes = adminNotes;
    list[index].assignedEvaluatorId = evaluatorId;

    safeWrite(STORAGE_KEYS.NOMINATIONS, list);
    this.addAuditLog(evaluatorId, 'RECORD_EVALUATION', id, `Scores saved. Total: ${scores?.totalScore} (${band})`);

    return list[index];
  }

  // --- CERTIFICATES ---
  static getCertificates(): CertificateRecord[] {
    this.init();
    return safeRead<CertificateRecord[]>(STORAGE_KEYS.CERTIFICATES, []);
  }

  static getCertificateById(id: string): CertificateRecord | undefined {
    const list = this.getCertificates();
    return list.find(c => c.certificateId.toUpperCase() === id.trim().toUpperCase());
  }

  static issueCertificate(data: {
    recipientName: string;
    recognitionTitle: string;
    awardCategory: string;
    categoryId: string;
    awardYear: number;
    field: string;
    signatoryName?: string;
    signatoryTitle?: string;
    notes?: string;
    nominationId?: string;
  }): CertificateRecord {
    this.init();
    const certificateId = generateCertificateId(data.awardYear);
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    const newCert: CertificateRecord = {
      certificateId,
      recipientName: data.recipientName,
      recognitionTitle: data.recognitionTitle,
      awardCategory: data.awardCategory,
      categoryId: data.categoryId,
      awardYear: data.awardYear,
      field: data.field,
      issueDate: formattedDate,
      issuingOrganization: 'EminSphere™ Global Innovation & Excellence Council',
      status: 'Valid',
      verificationUrl: `https://www.eminsphere.com/verify-certificate/${certificateId}`,
      signatoryName: data.signatoryName || 'Dr. Alistair Vance',
      signatoryTitle: data.signatoryTitle || 'Programme Director & Council Chair',
      createdAt: now.toISOString(),
      notes: data.notes || 'Officially issued following verified committee evaluation.'
    };

    const current = this.getCertificates();
    safeWrite(STORAGE_KEYS.CERTIFICATES, [newCert, ...current]);

    // If tied to nomination, update nomination status to 'Certificate Issued'
    if (data.nominationId) {
      this.updateNominationStatus(data.nominationId, 'Certificate Issued', 'Admin', `Certificate issued: ${certificateId}`);
    }

    this.addAuditLog('Admin', 'ISSUE_CERTIFICATE', certificateId, `Issued to ${data.recipientName} for ${data.recognitionTitle}`);

    return newCert;
  }

  static updateCertificateStatus(
    certificateId: string, 
    status: 'Valid' | 'Revoked' | 'Suspended', 
    reason: string = '', 
    actor: string = 'Admin'
  ): CertificateRecord | undefined {
    const list = this.getCertificates();
    const index = list.findIndex(c => c.certificateId.toUpperCase() === certificateId.trim().toUpperCase());
    if (index === -1) return undefined;

    const oldStatus = list[index].status;
    list[index].status = status;
    if (reason) {
      list[index].notes = `${list[index].notes || ''} [Status changed to ${status}: ${reason}]`;
    }

    safeWrite(STORAGE_KEYS.CERTIFICATES, list);
    this.addAuditLog(actor, 'UPDATE_CERT_STATUS', certificateId, `Status changed from ${oldStatus} to ${status}. Reason: ${reason}`);

    return list[index];
  }

  // --- AWARDEES DIRECTORY ---
  static getAwardees(): Awardee[] {
    this.init();
    return safeRead<Awardee[]>(STORAGE_KEYS.AWARDEES, []);
  }

  static publishAwardee(awardee: Omit<Awardee, 'id'>): Awardee {
    this.init();
    const id = `rec-${Date.now()}`;
    const newAwardee: Awardee = { ...awardee, id };
    const current = this.getAwardees();
    safeWrite(STORAGE_KEYS.AWARDEES, [newAwardee, ...current]);
    this.addAuditLog('Admin', 'PUBLISH_AWARDEE', id, `Published recipient: ${newAwardee.name}`);
    return newAwardee;
  }

  static toggleAwardeeVisibility(id: string, published: boolean): void {
    const list = this.getAwardees();
    const index = list.findIndex(a => a.id === id);
    if (index !== -1) {
      list[index].published = published;
      safeWrite(STORAGE_KEYS.AWARDEES, list);
      this.addAuditLog('Admin', 'TOGGLE_AWARDEE', id, `Awardee publication set to ${published}`);
    }
  }

  // --- CATEGORIES & CYCLES ---
  static getAwardCategories(): AwardCategory[] {
    this.init();
    return safeRead<AwardCategory[]>(STORAGE_KEYS.CATEGORIES, AWARD_CATEGORIES);
  }

  static updateAwardCategory(category: AwardCategory): void {
    const list = this.getAwardCategories();
    const index = list.findIndex(c => c.id === category.id);
    if (index !== -1) {
      list[index] = category;
      safeWrite(STORAGE_KEYS.CATEGORIES, list);
      this.addAuditLog('Admin', 'UPDATE_CATEGORY', category.id, `Updated category ${category.title}`);
    }
  }

  static getAwardCycle(): AwardCycle {
    this.init();
    return safeRead<AwardCycle>(STORAGE_KEYS.CYCLES, DEFAULT_AWARD_CYCLE);
  }

  static updateAwardCycle(cycle: AwardCycle): void {
    safeWrite(STORAGE_KEYS.CYCLES, cycle);
    this.addAuditLog('Admin', 'UPDATE_CYCLE', cycle.id, `Updated cycle ${cycle.cycleName}`);
  }

  // --- AUDIT LOGS & NOTIFICATIONS ---
  static getAuditLogs(): AuditLogEntry[] {
    return safeRead<AuditLogEntry[]>(STORAGE_KEYS.AUDIT_LOGS, []);
  }

  static addAuditLog(actor: string, action: string, targetId: string, details: string): void {
    const current = this.getAuditLogs();
    const entry: AuditLogEntry = {
      id: `audit-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp: new Date().toISOString(),
      actor,
      action,
      targetId,
      details
    };
    safeWrite(STORAGE_KEYS.AUDIT_LOGS, [entry, ...current].slice(0, 500));
  }

  static getDispatchedNotifications(): DispatchedNotification[] {
    return safeRead<DispatchedNotification[]>(STORAGE_KEYS.NOTIFICATIONS, []);
  }

  static dispatchNotification(notification: Omit<DispatchedNotification, 'id' | 'dispatchedAt'>): DispatchedNotification {
    const current = this.getDispatchedNotifications();
    const entry: DispatchedNotification = {
      ...notification,
      id: `email-${Date.now()}`,
      dispatchedAt: new Date().toISOString()
    };
    safeWrite(STORAGE_KEYS.NOTIFICATIONS, [entry, ...current].slice(0, 100));

    // Attempt backend API dispatch if online
    if (typeof window !== 'undefined' && window.fetch) {
      fetch('/api/nominate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'notify',
          ...entry
        })
      }).catch(err => {
        // Silently handle in dev/client environments
        console.warn('API notification dispatched in client-only mode:', err.message);
      });
    }

    return entry;
  }

  // QR Code Generation helper (returns data URL)
  static async generateQRCodeDataUrl(text: string): Promise<string> {
    try {
      return await QRCode.toDataURL(text, {
        width: 280,
        margin: 2,
        color: {
          dark: '#0a0d14',
          light: '#ffffff'
        }
      });
    } catch (e) {
      console.error('Failed to generate QR code:', e);
      return '';
    }
  }

  // Admin Metrics Aggregator
  static getAdminMetrics() {
    const nominations = this.getNominations();
    const certificates = this.getCertificates();
    const categories = this.getAwardCategories();
    const cycle = this.getAwardCycle();

    return {
      totalNominations: nominations.length,
      submitted: nominations.filter(n => n.status === 'Submitted' || n.status === 'Received').length,
      underScreening: nominations.filter(n => n.status === 'Initial Screening').length,
      documentsRequired: nominations.filter(n => n.status === 'Documents Required').length,
      underEvaluation: nominations.filter(n => n.status === 'Under Evaluation' || n.status === 'Final Review').length,
      selected: nominations.filter(n => n.status === 'Selected' || n.status === 'Certificate Issued').length,
      notSelected: nominations.filter(n => n.status === 'Not Selected').length,
      certificatesIssued: certificates.filter(c => c.status === 'Valid').length,
      activeCategories: categories.filter(c => c.active).length,
      currentCycle: cycle.cycleName
    };
  }
}
