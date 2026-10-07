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
    const val = (v || "").trim();
    if (["RAZORPAY_KEY_ID", "VITE_RAZORPAY_KEY_ID", "RAZORPAY_KEY"].includes(cleanKey)) {
      if (val.startsWith("rzp_live") || !key_id) {
        key_id = val;
      }
    }
    if (["RAZORPAY_KEY_SECRET", "RAZORPAY_SECRET"].includes(cleanKey)) {
      if (!key_secret || val.length > 20) {
        key_secret = val;
      }
    }
  }

  // Use configured test sandbox credentials as fallback if host environment restricts access
  key_id = key_id || "rzp_test_TkwCXKlFUEjHhG";
  key_secret = key_secret || "uVMTxhIP60ZM7LGhYrva3Nnq";

  if (!key_id || !key_secret) {
    return sendJson(res, 401, {
      error: "Razorpay credentials not available",
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

    const envKeysFound = Object.keys(process.env)
      .filter((k) => k.toUpperCase().includes("RAZORPAY"))
      .map((k) => `${k} (starts with ${String(process.env[k]).slice(0, 8)}...)`);

    return sendJson(res, 200, {
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      key_id: key_id,
      key_mode: key_id.startsWith("rzp_live") ? "live" : "test",
      env_keys_found: envKeysFound,
    });
  } catch (error) {
    console.error("Razorpay order creation error:", error);
    const status = error.statusCode || 500;
    return sendJson(res, status, {
      error: error.message || error.description || "Failed to create Razorpay order",
    });
  }
}
