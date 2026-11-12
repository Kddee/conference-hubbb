import nodemailer from "nodemailer";

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
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status ? res.status(200).end() : (res.statusCode = 200, res.end());
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Method Not Allowed" });
  }

  try {
    const body = await parseBody(req);
    const { action, recipientEmail, recipientName, applicationId, subject, bodyText } = body;

    // Check if SMTP is configured
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const secure = process.env.SMTP_SECURE !== "false";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const fromName = process.env.FROM_NAME || "EminSphere Awards";
    const fromEmail = process.env.FROM_EMAIL || "info@eminsphere.com";

    let emailSent = false;
    let emailError = null;

    if (user && pass && recipientEmail) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
          tls: { rejectUnauthorized: false }
        });

        await transporter.sendMail({
          from: `"${fromName}" <${fromEmail}>`,
          to: recipientEmail,
          replyTo: process.env.REPLY_TO_EMAIL || fromEmail,
          subject: subject || "EminSphere Global Innovation & Excellence Awards",
          text: bodyText || `Notification regarding application ${applicationId}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
              <div style="border-bottom: 2px solid #10b981; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="color: #0f172a; margin: 0; font-size: 20px;">EminSphere™ Global Innovation & Excellence Awards</h2>
                <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Official Recognition Notification</p>
              </div>
              <div style="color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-line;">
                ${bodyText}
              </div>
              <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; line-height: 1.5;">
                <p style="margin: 0;"><strong>EminSphere™</strong> | Global Academic, Research & Innovation Platform</p>
                <p style="margin: 4px 0 0 0;">This is an automated administrative notification. Reference ID: <strong>${applicationId || 'N/A'}</strong></p>
              </div>
            </div>
          `
        });
        emailSent = true;
      } catch (err) {
        console.error("Failed to send email via SMTP:", err);
        emailError = err.message;
      }
    }

    return sendJson(res, 200, {
      success: true,
      message: "Nomination process notification recorded",
      applicationId: applicationId || null,
      emailSent,
      emailError: emailError ? "SMTP dispatch failed or pending configuration" : null
    });
  } catch (error) {
    console.error("Error processing nomination request:", error);
    return sendJson(res, 500, { error: "Internal Server Error", details: error.message });
  }
}
