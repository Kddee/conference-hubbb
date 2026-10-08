import fs from "fs";
import path from "path";
import crypto from "crypto";

const BOOK_PDF_MAP = {
  "artificial-intelligence-new-horizons": {
    file: "artificial-intelligence-new-horizons.pdf",
    title: "Artificial-Intelligence-New-Horizons-and-Applications.pdf",
  },
  "emerging-digital-technologies": {
    file: "emerging-digital-technologies.pdf",
    title: "Emerging-Digital-Technologies-Applications-in-Supply-Chain.pdf",
  },
  "ai-driven-supply-chains": {
    file: "ai-driven-supply-chains.pdf",
    title: "AI-Driven-Supply-Chains-and-Intelligent-Logistics.pdf",
  },
  "next-generation-ai-native-iam": {
    file: "next-generation-ai-native-iam.pdf",
    title: "Next-Generation-AI-Native-IAM.pdf",
  },
  "building-public-health-data-systems": {
    file: "building-public-health-data-systems.pdf",
    title: "Building-Public-Health-Data-Systems.pdf",
  },
  "cloud-scale-systems": {
    file: "cloud-scale-systems.pdf",
    title: "Cloud-Scale-Systems-Data-Ingestion-Events-Storage.pdf",
  },
  "designing-scalable-event-driven-data-platforms": {
    file: "designing-scalable-event-driven-data-platforms.pdf",
    title: "Designing-Scalable-Event-Driven-Data-Platforms.pdf",
  },
  "healthcare-cloud-compliance": {
    file: "healthcare-cloud-compliance.pdf",
    title: "Healthcare-Cloud-Compliance-Architecture-and-Implementation.pdf",
  },
  "modernization-of-legacy-systems-over-cloud": {
    file: "modernization-of-legacy-systems-over-cloud.pdf",
    title: "Modernization-of-Legacy-Systems-Over-Cloud.pdf",
  },
  "analytics-in-the-ai-era": {
    file: "analytics-in-the-ai-era.pdf",
    title: "Analytics-in-the-AI-Era.pdf",
  },
  "it-in-the-energy-sector": {
    file: "it-in-the-energy-sector.pdf",
    title: "IT-in-the-Energy-Sector.pdf",
  },
  "secure-cloud-ai-ml-for-financial-and-pension-systems": {
    file: "secure-cloud-ai-ml-for-financial-and-pension-systems.pdf",
    title: "Secure-Cloud-AI-ML-for-Financial-and-Pension-Systems.pdf",
  },
  "predictive-analytics-for-meteorological-data-using-ai": {
    file: "predictive-analytics-for-meteorological-data-using-ai.pdf",
    title: "Predictive-Analytics-for-Meteorological-Data-Using-AI.pdf",
  },
  "mastering-cloud-computing-fundamentals-to-enterprise-scale": {
    file: "mastering-cloud-computing-fundamentals-to-enterprise-scale.pdf",
    title: "Mastering-Cloud-Computing-Fundamentals-to-Enterprise-Scale.pdf",
  },
  "artificial-intelligence-for-scalable-distributed-systems": {
    file: "artificial-intelligence-for-scalable-distributed-systems.pdf",
    title: "Artificial-Intelligence-for-Scalable-Distributed-Systems.pdf",
  },
  "mechai-nexus-convergence-of-ai-robotics": {
    file: "mechai-nexus-convergence-of-ai-robotics.pdf",
    title: "MechAI-Nexus-Convergence-of-AI-Robotics.pdf",
  },
};

function getSecret() {
  let key_secret = "";
  for (const [k, v] of Object.entries(process.env)) {
    const cleanKey = k.trim().toUpperCase();
    if (["RAZORPAY_KEY_SECRET", "RAZORPAY_SECRET"].includes(cleanKey)) {
      key_secret = key_secret || (v || "").trim();
    }
  }
  const DEFAULT_SECRET = Buffer.from(
    "NVkybHl2VzdxMWdMVjRzcE85VURGeThP",
    "base64"
  ).toString("utf8");
  return key_secret || DEFAULT_SECRET;
}

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: "Method not allowed. Use GET." }));
  }

  // Attempt to load .env in local dev
  try {
    if (typeof process.loadEnvFile === "function") {
      process.loadEnvFile();
    }
  } catch {}

  const url = new URL(req.url, `https://${req.headers.host || "localhost"}`);
  const bookId = url.searchParams.get("bookId") || "";
  const paymentId = url.searchParams.get("paymentId") || "";
  const expires = url.searchParams.get("expires") || "";
  const token = url.searchParams.get("token") || "";

  if (!bookId) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Missing required parameter: bookId" }));
  }

  const bookEntry = BOOK_PDF_MAP[bookId];
  if (!bookEntry) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: "Book edition PDF not found for given bookId" }));
  }

  // If a secure token is provided, verify signature & expiry
  if (token) {
    const secret = getSecret();
    const expected = crypto
      .createHmac("sha256", secret)
      .update(`${bookId}:${paymentId}:${expires}`)
      .digest("hex");

    if (expected !== token) {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ error: "Invalid or tampered download token" }));
    }

    if (expires && Number(expires) < Date.now()) {
      res.statusCode = 410;
      res.setHeader("Content-Type", "application/json");
      return res.end(JSON.stringify({ error: "Download token has expired. Please contact support." }));
    }
  }

  // Resolve file path safely across local dev & Vercel deployment
  const possiblePaths = [
    path.join(process.cwd(), "public", "books", "pdf", bookEntry.file),
    path.join(process.cwd(), "dist", "books", "pdf", bookEntry.file),
    path.join(process.cwd(), "books", bookEntry.file),
  ];

  let resolvedPath = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      resolvedPath = p;
      break;
    }
  }

  // If found on filesystem, stream directly with attachment headers
  if (resolvedPath) {
    const stat = fs.statSync(resolvedPath);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", stat.size);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${bookEntry.title}"`
    );
    res.setHeader("Cache-Control", "private, no-transform, max-age=86400");

    if (req.method === "HEAD") {
      return res.end();
    }

    const stream = fs.createReadStream(resolvedPath);
    if (typeof stream.pipe === "function" && typeof res.on === "function") {
      return stream.pipe(res);
    }

    const buffer = fs.readFileSync(resolvedPath);
    if (typeof res.send === "function") {
      return res.send(buffer);
    }
    return res.end(buffer);
  }

  // Fallback: Redirect to CDN static route in public folder
  res.writeHead(302, {
    Location: `/books/pdf/${encodeURIComponent(bookEntry.file)}`,
  });
  return res.end();
}
