import { describe, it, expect, beforeEach } from "vitest";
import { 
  AWARD_CATEGORIES, 
  AWARD_HIGHLIGHTS, 
  WHO_CAN_BE_NOMINATED, 
  WHY_EMINSPHERE, 
  NOMINATION_PROCESS_STEPS,
  EVALUATION_PARAMETERS,
  EVALUATION_BANDS,
  SEED_CERTIFICATES,
  POLICIES,
  FAQS,
  GOVERNANCE_MEMBERS
} from "@/data/awardsData";
import { AwardsStorageService, generateReferenceId, generateCertificateId } from "@/services/awardsStorage";

describe("Awards & Recognition Data & Business Logic", () => {
  beforeEach(() => {
    AwardsStorageService.init();
  });

  it("should have exactly 18 distinct award categories across 5 groups", () => {
    expect(AWARD_CATEGORIES.length).toBe(18);

    const groups = new Set(AWARD_CATEGORIES.map(c => c.group));
    expect(groups.size).toBe(5);

    expect(groups.has("Academic & Research Excellence")).toBe(true);
    expect(groups.has("Technology & Innovation")).toBe(true);
    expect(groups.has("Business & Entrepreneurship")).toBe(true);
    expect(groups.has("Professional & Industry Excellence")).toBe(true);
    expect(groups.has("Social Impact & Lifetime Recognition")).toBe(true);

    // Check all 18 categories have titles, descriptions, criteria, and required documents
    for (const cat of AWARD_CATEGORIES) {
      expect(cat.id).toBeTruthy();
      expect(cat.title).toBeTruthy();
      expect(cat.description).toBeTruthy();
      expect(cat.eligibleCandidates.length).toBeGreaterThan(0);
      expect(cat.selectionCriteria.length).toBeGreaterThan(0);
      expect(cat.requiredDocuments.length).toBeGreaterThan(0);
      expect(cat.iconName).toBeTruthy();
      expect(cat.active).toBe(true);
    }
  });

  it("should have 6 award highlights and 5 core pillars", () => {
    expect(AWARD_HIGHLIGHTS.length).toBe(6);
    expect(WHY_EMINSPHERE.length).toBe(5);
    expect(WHO_CAN_BE_NOMINATED.length).toBe(12);
    expect(NOMINATION_PROCESS_STEPS.length).toBe(7);
  });

  it("should have the 6-parameter evaluation framework totalling 100%", () => {
    expect(EVALUATION_PARAMETERS.length).toBe(6);
    const totalWeight = EVALUATION_PARAMETERS.reduce((sum, p) => sum + p.weight, 0);
    expect(totalWeight).toBe(100);
  });

  it("should have 4 evaluation bands", () => {
    expect(EVALUATION_BANDS.length).toBe(4);
  });

  it("should include all 12 mandatory FAQs", () => {
    expect(FAQS.length).toBe(12);
  });

  it("should contain the official non-academic recognition disclaimer in policies", () => {
    const disclaimer = POLICIES.find(p => p.id === "recognition-disclaimer");
    expect(disclaimer).toBeDefined();
    expect(disclaimer?.content).toContain("non-academic recognitions");
    expect(disclaimer?.content).toContain("not constitute university degrees");
  });

  it("should have all 13 confirmed committee members from main advisory members section", () => {
    expect(GOVERNANCE_MEMBERS.length).toBe(13);
    const names = GOVERNANCE_MEMBERS.map(m => m.name);
    const expected = [
      "Nino Devidze",
      "Roksolana Trach",
      "Wiktoria Gromowa-Cieślik",
      "Mouhssin Ait El Mouden",
      "Dr. Nadia Adnan",
      "Katarzyna Antosz",
      "Nadine Zeinoun",
      "Dr. Mehwish (Mishy) Rashid",
      "Prof. Dr. Alexander Bull",
      "Heinz Dollberg",
      "Peter Kasahara",
      "Ms. Fadwa Saad AlBawardi",
      "Pam Didner"
    ];

    for (const person of expected) {
      expect(names).toContain(person);
    }
  });

  it("should generate reference ID and certificate ID with valid format", () => {
    const refId = generateReferenceId(2027);
    expect(refId).toMatch(/^ES-GIA-2027-\d{5}$/);

    const certId = generateCertificateId(2027);
    expect(certId).toMatch(/^ES-GIA-2027-\d{5}$/);
  });

  it("should support nomination creation, tracking, status progression, and notification logging", () => {
    // 1. Submit nomination
    const app = AwardsStorageService.saveNomination({
      firstName: "Test",
      lastName: "Researcher",
      nationality: "Indian",
      countryOfResidence: "India",
      stateProvince: "Maharashtra",
      city: "Pune",
      email: "test.researcher@example.com",
      mobile: "+91 99999 88888",
      designation: "Chief Scientist",
      organization: "Research Labs",
      industryField: "AI",
      yearsExperience: 10,
      highestQualification: "Ph.D.",
      specialization: "Robotics",
      profileSummary: "Experienced AI scientist",
      biography: "Detailed biography",
      awardCategoryId: "technology-innovation",
      awardCategoryTitle: "Technology Innovation Excellence Award",
      nominationType: "Self-Nomination",
      primaryAchievementArea: "Autonomous Robotics",
      reasonForNomination: "Major patent breakthroughs",
      majorAchievements: "Designed low-power motor drivers",
      keyContributions: "Open-source robotics framework",
      whyConsider: "Outstanding impact",
      documents: [{ name: "CV.pdf", type: "application/pdf", size: 1024, category: "CV" }],
      declarations: {
        accurateAndComplete: true,
        authorizeVerification: true,
        noGuaranteeUnderstood: true,
        agreeToPolicies: true,
        consentPersonalProcessing: true,
        noPublicWithoutConsent: true
      }
    });

    expect(app.id).toBeTruthy();
    expect(app.status).toBe("Submitted");

    // 2. Track nomination
    const tracked = AwardsStorageService.trackNomination(app.id, "test.researcher@example.com");
    expect(tracked).toBeDefined();
    expect(tracked?.id).toBe(app.id);

    // 3. Update status to Under Evaluation
    const updated = AwardsStorageService.updateNominationStatus(app.id, "Under Evaluation", "Admin", "Initial check passed");
    expect(updated?.status).toBe("Under Evaluation");
    expect(updated?.statusHistory.length).toBe(2);

    // 4. Verify notification log was triggered
    const notifications = AwardsStorageService.getDispatchedNotifications();
    expect(notifications.length).toBeGreaterThan(0);
    expect(notifications.some(n => n.applicationId === app.id)).toBe(true);
  });

  it("should support certificate verification and issuance with QR code support", async () => {
    // Check initial seed certificate
    const seed = AwardsStorageService.getCertificateById("ES-GIA-2027-00001");
    expect(seed).toBeDefined();
    expect(seed?.recipientName).toBe("Dr. Julian Montgomery");
    expect(seed?.status).toBe("Valid");

    // Issue a new certificate
    const newCert = AwardsStorageService.issueCertificate({
      recipientName: "Dr. Marie Curie",
      recognitionTitle: "Outstanding Research Contribution Award",
      awardCategory: "Academic & Research Excellence",
      categoryId: "outstanding-research",
      awardYear: 2027,
      field: "Nuclear Physics & Chemistry"
    });

    expect(newCert.certificateId).toBeTruthy();
    expect(newCert.status).toBe("Valid");

    // Look up issued certificate
    const lookup = AwardsStorageService.getCertificateById(newCert.certificateId);
    expect(lookup).toBeDefined();
    expect(lookup?.recipientName).toBe("Dr. Marie Curie");

    // Generate QR Code data URL
    const qrUrl = await AwardsStorageService.generateQRCodeDataUrl(newCert.verificationUrl);
    expect(qrUrl).toContain("data:image/png;base64");
  });
});
