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

  const key_id = (process.env.RAZORPAY_KEY_ID || process.env.VITE_RAZORPAY_KEY_ID || "").trim();
  const key_secret = (process.env.RAZORPAY_KEY_SECRET || "").trim();

  if (!key_id || !key_secret) {
    const missing = [];
    if (!key_id) missing.push("RAZORPAY_KEY_ID");
    if (!key_secret) missing.push("RAZORPAY_KEY_SECRET");
    return sendJson(res, 401, {
      error: `Razorpay credentials missing in environment: ${missing.join(", ")}. If you just added them in Vercel, please Redeploy the latest deployment.`,
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
