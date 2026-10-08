import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

const BOOK_PDF_MAP = {
  "artificial-intelligence-new-horizons": "artificial-intelligence-new-horizons.pdf",
  "emerging-digital-technologies": "emerging-digital-technologies.pdf",
  "ai-driven-supply-chains": "ai-driven-supply-chains.pdf",
  "next-generation-ai-native-iam": "next-generation-ai-native-iam.pdf",
  "building-public-health-data-systems": "building-public-health-data-systems.pdf",
  "cloud-scale-systems": "cloud-scale-systems.pdf",
  "designing-scalable-event-driven-data-platforms": "designing-scalable-event-driven-data-platforms.pdf",
  "healthcare-cloud-compliance": "healthcare-cloud-compliance.pdf",
  "modernization-of-legacy-systems-over-cloud": "modernization-of-legacy-systems-over-cloud.pdf",
  "analytics-in-the-ai-era": "analytics-in-the-ai-era.pdf",
  "it-in-the-energy-sector": "it-in-the-energy-sector.pdf",
  "secure-cloud-ai-ml-for-financial-and-pension-systems": "secure-cloud-ai-ml-for-financial-and-pension-systems.pdf",
  "predictive-analytics-for-meteorological-data-using-ai": "predictive-analytics-for-meteorological-data-using-ai.pdf",
  "mastering-cloud-computing-fundamentals-to-enterprise-scale": "mastering-cloud-computing-fundamentals-to-enterprise-scale.pdf",
  "artificial-intelligence-for-scalable-distributed-systems": "artificial-intelligence-for-scalable-distributed-systems.pdf",
  "mechai-nexus-convergence-of-ai-robotics": "mechai-nexus-convergence-of-ai-robotics.pdf",
};

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

function getSmtpConfig() {
  const host = (process.env.SMTP_HOST || process.env.MAIL_HOST || "smtp.gmail.com").trim();
  const port = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 465);
  const user = (process.env.SMTP_USER || process.env.EMAIL_USER || process.env.MAIL_USER || "info@eminsphere.com").trim();
  const rawPass = (process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.MAIL_PASS || "cxkw pivc nfdw hdmf").trim();
  const pass = rawPass.replace(/\s+/g, "");
  const secure = process.env.SMTP_SECURE === "false" ? false : port === 465 || true;

  if (host && user && pass) {
    return {
      host,
      port,
      secure,
      auth: { user, pass },
    };
  }

  return null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    if (res.setHeader) res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "Method not allowed. Use POST." });
  }

  // Attempt to load .env in development
  try {
    if (typeof process.loadEnvFile === "function") {
      process.loadEnvFile();
    }
  } catch {}

  try {
    const body = await parseBody(req);
    const {
      orderId = "N/A",
      paymentId = "N/A",
      bookId = "",
      bookTitle = "Eminsphere Publication",
      edition = "paperback",
      amount = 0,
      customerName = "Customer",
      customerEmail = "",
      customerPhone = "",
      shippingAddress = {},
      pdfDownloadUrl = "",
    } = body;

    const isPaperback = edition.toLowerCase() === "paperback";
    const notificationTarget = (process.env.ORDER_NOTIFICATION_EMAIL || "info@eminsphere.com").trim();
    const orderDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    console.log(`[Order Processing] New order received:`, {
      orderId,
      paymentId,
      bookTitle,
      edition,
      amount,
      customerName,
      customerEmail,
      customerPhone,
      isPaperback,
      shippingAddress,
    });

    // 1. HTML Email for Publisher (info@eminsphere.com)
    const publisherSubject = `[ORDER ALERT: ${edition.toUpperCase()}] ${bookTitle} (₹${amount}) - Ref: ${paymentId}`;
    const publisherHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 24px 32px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">EminSphere Global Publishing</h1>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Automated Order Desk & Fulfillment Notification</p>
        </div>

        <div style="padding: 32px;">
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px;">
            <p style="margin: 0; font-weight: 600; color: #166534; font-size: 15px;">
              ✓ Verified Paid Order Received (₹${amount}.00 INR)
            </p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #15803d;">
              Processed via Razorpay Live Gateway at ${orderDate}
            </p>
          </div>

          <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
            Book & Edition Ordered
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px;">Title:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #0f172a;">${bookTitle}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Edition:</td>
              <td style="padding: 8px 0; font-weight: 600; color: ${isPaperback ? "#2563eb" : "#059669"};">
                ${isPaperback ? "📦 PHYSICAL PAPERBACK (Requires Courier Dispatch)" : "📱 DIGITAL eBOOK (Delivered via Download Link & Email Attachment)"}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Amount Paid:</td>
              <td style="padding: 8px 0; font-weight: 700; color: #0f172a; font-size: 15px;">₹${amount}.00 INR</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Razorpay Payment ID:</td>
              <td style="padding: 8px 0; font-family: monospace; font-weight: 600; color: #0284c7;">${paymentId}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Razorpay Order ID:</td>
              <td style="padding: 8px 0; font-family: monospace; color: #334155;">${orderId}</td>
            </tr>
          </table>

          <h2 style="font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">
            Customer Contact Details
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #0f172a;">${customerName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Email:</td>
              <td style="padding: 8px 0; color: #0284c7;"><a href="mailto:${customerEmail}">${customerEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Contact Phone:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #0f172a;"><a href="tel:${customerPhone}">${customerPhone}</a></td>
            </tr>
          </table>

          ${
            isPaperback
              ? `
            <div style="background: #eff6ff; border: 2px dashed #93c5fd; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
              <h3 style="margin: 0 0 10px 0; font-size: 15px; color: #1e40af; font-weight: 700;">
                🚚 Physical Courier Delivery Address (Action Required):
              </h3>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e3a8a;">
                <strong>Recipient:</strong> ${customerName}<br />
                <strong>Street Address:</strong> ${shippingAddress.address || "N/A"}<br />
                <strong>City & State:</strong> ${shippingAddress.city || "N/A"}, ${shippingAddress.state || "N/A"}<br />
                <strong>Postal PIN Code:</strong> <strong>${shippingAddress.pincode || "N/A"}</strong><br />
                <strong>Mobile Number:</strong> ${customerPhone}
              </p>
              <p style="margin: 12px 0 0 0; font-size: 12px; color: #3b82f6;">
                Please prepare the physical book package and arrange registered postal/courier dispatch.
              </p>
            </div>
            `
              : `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px;">
              <h3 style="margin: 0 0 6px 0; font-size: 13px; color: #475569; font-weight: 600;">
                Digital Delivery Confirmation:
              </h3>
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Customer has been provided instant download access to the verified eBook PDF. Download link: <br />
                <a href="${pdfDownloadUrl}" style="color: #0284c7; word-break: break-all;">${pdfDownloadUrl}</a>
              </p>
            </div>
            `
          }
        </div>
        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 11px; color: #94a3b8; text-align: center;">
          EminSphere Publishing Agency • Automated Order Dispatch Engine • info@eminsphere.com
        </div>
      </div>
    `;

    // 2. HTML Email for Customer (customerEmail)
    const customerSubject = `Order Confirmation & Official Receipt: ${bookTitle} - EminSphere`;
    const customerHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #090d16 0%, #1e293b 100%); padding: 26px 32px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 700;">EminSphere</h1>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">Official Order Confirmation & Payment Receipt</p>
        </div>

        <div style="padding: 32px;">
          <p style="font-size: 15px; color: #334155; margin-top: 0;">
            Dear <strong>${customerName}</strong>,
          </p>
          <p style="font-size: 14px; color: #475569; line-height: 1.6;">
            Thank you for purchasing directly from EminSphere. Your payment has been successfully verified, and your order has been confirmed.
          </p>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin: 24px 0;">
            <h3 style="margin: 0 0 14px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">
              Official Order Summary
            </h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; color: #64748b;">Publication:</td>
                <td style="padding: 10px 0; font-weight: 700; color: #0f172a; text-align: right;">${bookTitle}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; color: #64748b;">Edition:</td>
                <td style="padding: 10px 0; font-weight: 600; color: #0f172a; text-align: right;">
                  ${isPaperback ? "Paperback Edition (Physical Book)" : "eBook Edition (Instant Digital PDF)"}
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; color: #64748b;">Amount Paid:</td>
                <td style="padding: 10px 0; font-weight: 700; font-size: 16px; color: #0f172a; text-align: right;">₹${amount}.00</td>
              </tr>
              <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 10px 0; color: #64748b;">Payment Reference ID:</td>
                <td style="padding: 10px 0; font-family: monospace; font-size: 12px; color: #0284c7; text-align: right;">${paymentId}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;">Order Date:</td>
                <td style="padding: 10px 0; color: #334155; text-align: right;">${orderDate}</td>
              </tr>
            </table>
          </div>

          ${
            !isPaperback && pdfDownloadUrl
              ? `
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 22px; text-align: center; margin: 24px 0;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #166534; font-weight: 700;">
                📥 Access Your Digital eBook Now
              </h3>
              <p style="font-size: 13px; color: #15803d; margin: 0 0 16px 0;">
                Your verified copy of <strong>"${bookTitle}"</strong> is ready. You can download the PDF anytime using the button below (also attached to this email):
              </p>
              <a href="${pdfDownloadUrl}" style="display: inline-block; background: #059669; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 28px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
                Download eBook PDF Now
              </a>
              <p style="font-size: 11px; color: #6b7280; margin: 12px 0 0 0;">
                Link is valid for your personal academic use. You can also re-download anytime.
              </p>
            </div>
            `
              : ""
          }

          ${
            isPaperback
              ? `
            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 20px; margin: 24px 0;">
              <h3 style="margin: 0 0 8px 0; font-size: 15px; color: #1e40af; font-weight: 700;">
                📦 Courier Shipping & Dispatch Update
              </h3>
              <p style="font-size: 13px; color: #1e3a8a; line-height: 1.6; margin: 0;">
                Your physical edition is being prepared for dispatch to:<br />
                <strong>${shippingAddress.address || ""}, ${shippingAddress.city || ""}, ${shippingAddress.state || ""} - ${shippingAddress.pincode || ""}</strong>
              </p>
              <p style="font-size: 12px; color: #2563eb; margin: 10px 0 0 0;">
                Expected dispatch within 24–48 hours via registered courier. Courier tracking number will be sent once dispatched.
              </p>
            </div>
            `
              : ""
          }

          <p style="font-size: 13px; color: #64748b; line-height: 1.5; margin-top: 24px;">
            For queries, invoices, or delivery status, please reply directly to this email or contact us at <a href="mailto:info@eminsphere.com" style="color: #0284c7;">info@eminsphere.com</a>.
          </p>

          <p style="font-size: 13px; color: #0f172a; margin-bottom: 0;">
            Warm regards,<br />
            <strong>Editorial & Fulfillment Team</strong><br />
            EminSphere
          </p>
        </div>

        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 11px; color: #94a3b8; text-align: center;">
          © ${new Date().getFullYear()} EminSphere. All rights reserved. • info@eminsphere.com
        </div>
      </div>
    `;

    // 3. Resolve PDF file attachment for customer eBook order
    const attachments = [];
    if (!isPaperback && bookId) {
      const matchedFileName = BOOK_PDF_MAP[bookId] || `${bookId}.pdf`;
      const possibleFilePaths = [
        path.join(process.cwd(), "public", "books", "pdf", matchedFileName),
        path.join(process.cwd(), "dist", "books", "pdf", matchedFileName),
        path.join(process.cwd(), "books", matchedFileName),
      ];

      for (const p of possibleFilePaths) {
        if (fs.existsSync(p)) {
          const stat = fs.statSync(p);
          // Attach if within safe email size (< 20MB)
          if (stat.size < 20 * 1024 * 1024) {
            attachments.push({
              filename: `${bookTitle.replace(/[/\\?%*:|"<>]/g, "-")}.pdf`,
              path: p,
            });
          }
          break;
        }
      }
    }

    // 4. Attempt to send via Nodemailer
    const smtpConfig = getSmtpConfig();
    let emailStatus = {
      publisherSent: false,
      customerSent: false,
      mode: smtpConfig ? "live_smtp" : "logged_pending_smtp_config",
      hasAttachment: attachments.length > 0,
    };

    if (smtpConfig) {
      const transporter = nodemailer.createTransport(smtpConfig);

      // Dispatch to publisher (info@eminsphere.com)
      try {
        await transporter.sendMail({
          from: '"EminSphere" <info@eminsphere.com>',
          to: notificationTarget,
          replyTo: customerEmail || "info@eminsphere.com",
          subject: publisherSubject,
          html: publisherHtml,
        });
        emailStatus.publisherSent = true;
      } catch (err) {
        console.error("Failed sending publisher email:", err);
      }

      // Dispatch to customer if valid email provided
      if (customerEmail && customerEmail.includes("@")) {
        try {
          await transporter.sendMail({
            from: '"EminSphere" <info@eminsphere.com>',
            to: customerEmail,
            replyTo: "info@eminsphere.com",
            subject: customerSubject,
            html: customerHtml,
            attachments: attachments,
          });
          emailStatus.customerSent = true;
        } catch (err) {
          console.error("Failed sending customer receipt email:", err);
        }
      }
    }

    return sendJson(res, 200, {
      success: true,
      message: "Order processed and notification dispatched",
      emailStatus,
      order: {
        orderId,
        paymentId,
        bookTitle,
        edition,
        amount,
        customerName,
        customerEmail,
      },
    });
  } catch (error) {
    console.error("Error in send-order-email handler:", error);
    return sendJson(res, 500, {
      success: false,
      error: error.message || "Failed to process order email",
    });
  }
}
