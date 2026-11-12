const SEED_CERTIFICATES = [
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
    signatoryName: "Dr. Alistair Vance"
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
    signatoryName: "Dr. Alistair Vance"
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
    signatoryName: "Dr. Alistair Vance"
  }
];

function sendJson(res, statusCode, data) {
  if (typeof res.status === "function" && typeof res.json === "function") {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status ? res.status(200).end() : (res.statusCode = 200, res.end());
  }

  const certId = (req.query?.id || req.body?.id || "").toString().trim().toUpperCase();

  if (!certId) {
    return sendJson(res, 400, { error: "Certificate ID is required" });
  }

  const record = SEED_CERTIFICATES.find(c => c.certificateId.toUpperCase() === certId);

  if (!record) {
    return sendJson(res, 404, {
      found: false,
      certificateId: certId,
      status: "Not Found",
      message: "No certificate record found matching this identifier."
    });
  }

  return sendJson(res, 200, {
    found: true,
    certificate: record,
    verifiedAt: new Date().toISOString()
  });
}
