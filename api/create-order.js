import Razorpay from "razorpay";

async function parseBody(req) {
  if (req.body) {
    if (typeof req.body === "string") {
      try {
        return JSON.parse(req.body);
      } catch (e) {
        return {};
      }
    }
    return req.body;
  }
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (err) {
        resolve({});
      }
    });
    req.on("error", () => resolve({}));
  });
}

function sendJson(res, statusCode, data) {
  if (typeof res.status === "function" && typeof res.json === "function") {
    return res.status(statusCode).json(data);
  }
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    if (res.setHeader) res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed. Use POST." });
  }

  // Attempt to load local .env in development environments if process.env is missing keys
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    try {
      if (typeof process.loadEnvFile === "function") {
        process.loadEnvFile();
      }
    } catch {}
  }

  // Resolve keys with case-insensitivity and trim whitespace
  let key_id = "";
  let key_secret = "";

  for (const [k, v] of Object.entries(process.env)) {
    const cleanKey = k.trim().toUpperCase();
    if (["RAZORPAY_KEY_ID", "VITE_RAZORPAY_KEY_ID", "RAZORPAY_KEY"].includes(cleanKey)) {
      key_id = key_id || (v || "").trim();
    }
    if (["RAZORPAY_KEY_SECRET", "RAZORPAY_SECRET"].includes(cleanKey)) {
      key_secret = key_secret || (v || "").trim();
    }
  }

  if (!key_id || !key_secret) {
    const missing = [];
    if (!key_id) missing.push("RAZORPAY_KEY_ID");
    if (!key_secret) missing.push("RAZORPAY_KEY_SECRET");
    const detectedRazorKeys = Object.keys(process.env).filter((k) =>
      k.toLowerCase().includes("razor")
    );
    const nonSystemKeys = Object.keys(process.env).filter(
      (k) =>
        !k.startsWith("AWS_") &&
        !k.startsWith("npm_") &&
        !k.startsWith("_") &&
        !["PATH", "HOME", "USER", "SHELL", "TZ", "LANG", "LD_LIBRARY_PATH"].includes(k)
    );
    const keysMatchingRazor = Object.keys(process.env).filter((k) =>
      k.toLowerCase().includes("razor")
    );
    const keysStartingWithR = Object.keys(process.env).filter((k) =>
      k.toUpperCase().startsWith("R")
    );
    return sendJson(res, 401, {
      error: `Razorpay credentials missing in environment: ${missing.join(", ")}. In Vercel Project: '${process.env.VERCEL_PROJECT_NAME || process.env.VERCEL_GIT_REPO_SLUG || "unknown"}' (env: ${process.env.VERCEL_ENV || "unknown"}). Keys with 'razor': [${keysMatchingRazor.join(", ") || "None"}]. Keys with 'R': [${keysStartingWithR.join(", ") || "None"}]. Total env keys: ${Object.keys(process.env).length}.`,
    });
  }

  try {
    const body = await parseBody(req);
    const { amount, currency = "INR", receipt, notes = {} } = body;

    const numericAmount = Number(amount);
    if (!numericAmount || isNaN(numericAmount) || numericAmount < 100) {
      return sendJson(res, 400, {
        error: "Amount is invalid or below minimum. Must be at least 100 paise (₹1 INR).",
      });
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const orderOptions = {
      amount: Math.round(numericAmount),
      currency: currency || "INR",
      receipt: receipt || `rcpt_${Date.now()}`,
      notes: notes,
    };

    const order = await razorpay.orders.create(orderOptions);

    return sendJson(res, 200, {
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
    });
  } catch (error) {
    console.error("Razorpay order creation error:", error);
    const status = error.statusCode || 500;
    return sendJson(res, status, {
      error: error.message || error.description || "Failed to create Razorpay order",
    });
  }
}
