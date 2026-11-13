import nodemailer from "nodemailer";

// Attempt to load .env in development / Node
try {
  if (typeof process.loadEnvFile === "function") {
    process.loadEnvFile();
  }
} catch {}

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

function getSmtpTransporter() {
  const host = (process.env.SMTP_HOST || "smtp.zeptomail.in").trim();
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE !== "false";
  const user = (process.env.SMTP_USER || "emailapikey").trim();
  const pass = (
    process.env.SMTP_PASS ||
    "PHtE6r0PRODtiW4n+0UH4/PsFZWkZ9ws/eluKwMUtYtGX/ZXSk0A/owjwDO2+B4vBKRKHfHKmt5gtb7Nu7rWcDu8NzkaDWqyqK3sx/VYSPOZsbq6x00ZtFoafkPZUYHqcdBs0SXXvtmX"
  ).trim();

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: { rejectUnauthorized: false }
  });
}

function buildAdminEmailHtml(nomination) {
  const app = nomination || {};
  const fullName = `${app.firstName || ""} ${app.middleName || ""} ${app.lastName || ""}`.trim() || "Applicant";
  const docs = Array.isArray(app.documents) ? app.documents : [];
  const submissionTime = app.submissionDate 
    ? new Date(app.submissionDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "medium" })
    : new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "medium" });

  const docsRows = docs.length > 0 
    ? docs.map(d => `<tr><td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">${d.name || "Document"}</td><td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b;">${d.type || "Attachment"}</td><td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #64748b;">${d.size ? (d.size / 1024).toFixed(1) + " KB" : "-"}</td></tr>`).join("")
    : `<tr><td colspan="3" style="padding: 8px 12px; color: #94a3b8; font-style: italic;">No uploaded documents recorded</td></tr>`;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Award Nomination Alert</title>
    </head>
    <body style="margin: 0; padding: 24px; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
      <div style="max-width: 680px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
        
        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, #060a17 0%, #0f172a 100%); padding: 28px 32px; border-bottom: 3px solid #c5a059;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #c5a059; font-weight: 700; margin-bottom: 6px;">
            EminSphere™ Global Innovation & Excellence Awards
          </div>
          <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
            New Award Nomination Received
          </h1>
          <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 13px;">
            Submitted on ${submissionTime} (IST)
          </p>
        </div>

        <!-- Highlight Badge -->
        <div style="background-color: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 16px 32px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; display: block;">Nomination Reference ID</span>
            <span style="font-size: 18px; font-family: monospace; font-weight: 700; color: #0284c7;">${app.id || "N/A"}</span>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; display: block;">Nomination Type</span>
            <span style="font-size: 13px; font-weight: 700; color: #059669; background-color: #d1fae5; padding: 3px 10px; rounded-radius: 999px;">${app.nominationType || "Self-Nomination"}</span>
          </div>
        </div>

        <div style="padding: 28px 32px;">
          <!-- Section 1: Candidate Overview -->
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 1px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0; margin-bottom: 16px;">
            1. Nominee Profile
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
            <tbody>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 8px 12px; font-weight: 600; width: 35%; border-bottom: 1px solid #e2e8f0; color: #475569;">Full Name</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 700; font-size: 14px;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">Award Category</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #c5a059; font-weight: 700;">${app.awardCategoryTitle || "N/A"}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">Designation</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${app.designation || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">Organization / University</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${app.organization || "N/A"}${app.department ? ` (${app.department})` : ""}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">Industry / Academic Field</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${app.industryField || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">Experience & Qualification</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${app.yearsExperience || 0} Years • ${app.highestQualification || "N/A"} (${app.specialization || "General"})</td>
              </tr>
            </tbody>
          </table>

          <!-- Section 2: Contact Information -->
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 1px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0; margin-bottom: 16px;">
            2. Contact & Geographic Information
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
            <tbody>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 8px 12px; font-weight: 600; width: 35%; border-bottom: 1px solid #e2e8f0; color: #475569;">Email Address</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0284c7; font-weight: 600;"><a href="mailto:${app.email}" style="color: #0284c7; text-decoration: none;">${app.email || "N/A"}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">Mobile Number</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${app.mobile || "N/A"}${app.whatsapp ? ` (WhatsApp: ${app.whatsapp})` : ""}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">Location</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${app.city || ""}, ${app.stateProvince || ""}, ${app.countryOfResidence || ""} (Nationality: ${app.nationality || "N/A"})</td>
              </tr>
              ${app.linkedinUrl ? `<tr><td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">LinkedIn</td><td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;"><a href="${app.linkedinUrl}" target="_blank" style="color: #0284c7;">${app.linkedinUrl}</a></td></tr>` : ""}
              ${app.websiteUrl ? `<tr><td style="padding: 8px 12px; font-weight: 600; border-bottom: 1px solid #e2e8f0; color: #475569;">Website</td><td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0;"><a href="${app.websiteUrl}" target="_blank" style="color: #0284c7;">${app.websiteUrl}</a></td></tr>` : ""}
            </tbody>
          </table>

          <!-- Section 3: Nomination & Achievement Details -->
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 1px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0; margin-bottom: 16px;">
            3. Achievements & Justification
          </h2>
          <div style="font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 24px;">
            <div style="margin-bottom: 14px;">
              <strong style="color: #0f172a; display: block; margin-bottom: 4px;">Primary Achievement Area:</strong>
              <div style="background-color: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #c5a059;">
                ${app.primaryAchievementArea || "N/A"}
              </div>
            </div>

            <div style="margin-bottom: 14px;">
              <strong style="color: #0f172a; display: block; margin-bottom: 4px;">Reason for Nomination:</strong>
              <div style="background-color: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #0284c7; white-space: pre-line;">
                ${app.reasonForNomination || "N/A"}
              </div>
            </div>

            <div style="margin-bottom: 14px;">
              <strong style="color: #0f172a; display: block; margin-bottom: 4px;">Major Achievements:</strong>
              <div style="background-color: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #10b981; white-space: pre-line;">
                ${app.majorAchievements || "N/A"}
              </div>
            </div>

            <div style="margin-bottom: 14px;">
              <strong style="color: #0f172a; display: block; margin-bottom: 4px;">Key Contributions & Impact:</strong>
              <div style="background-color: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #6366f1; white-space: pre-line;">
                ${app.keyContributions || "N/A"}
              </div>
            </div>

            ${app.researchPublications ? `
            <div style="margin-bottom: 14px;">
              <strong style="color: #0f172a; display: block; margin-bottom: 4px;">Key Publications / Patents / Books:</strong>
              <div style="background-color: #f8fafc; padding: 10px 14px; border-radius: 6px; white-space: pre-line;">
                ${app.researchPublications}
              </div>
            </div>` : ""}

            ${app.previousAwards ? `
            <div style="margin-bottom: 14px;">
              <strong style="color: #0f172a; display: block; margin-bottom: 4px;">Previous Awards & Honors:</strong>
              <div style="background-color: #f8fafc; padding: 10px 14px; border-radius: 6px; white-space: pre-line;">
                ${app.previousAwards}
              </div>
            </div>` : ""}
          </div>

          <!-- Section 4: Attached Documents -->
          <h2 style="font-size: 15px; text-transform: uppercase; letter-spacing: 1px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0; margin-bottom: 16px;">
            4. Supporting Documents Submitted (${docs.length})
          </h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 28px;">
            <thead>
              <tr style="background-color: #f1f5f9; text-align: left;">
                <th style="padding: 8px 12px; border-bottom: 2px solid #cbd5e1; color: #475569;">Document Name</th>
                <th style="padding: 8px 12px; border-bottom: 2px solid #cbd5e1; color: #475569;">Type / Category</th>
                <th style="padding: 8px 12px; border-bottom: 2px solid #cbd5e1; color: #475569;">Size</th>
              </tr>
            </thead>
            <tbody>
              ${docsRows}
            </tbody>
          </table>

          <!-- Actions Bar -->
          <div style="text-align: center; padding-top: 16px; border-top: 1px solid #e2e8f0;">
            <a href="mailto:${app.email}?subject=RE:%20EminSphere%20Nomination%20${app.id}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 13px; margin-right: 12px;">
              Reply Directly to Nominee
            </a>
            <a href="https://www.eminsphere.com/awards-recognition/admin" target="_blank" style="display: inline-block; background-color: #10b981; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 13px;">
              Open Admin Portal
            </a>
          </div>

        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px 32px; font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.5;">
          <p style="margin: 0;"><strong>EminSphere™ Global Innovation & Excellence Awards</strong></p>
          <p style="margin: 4px 0 0 0;">This email is an automated submission notification sent directly to <strong>info@eminsphere.com</strong>.</p>
        </div>

      </div>
    </body>
    </html>
  `;
}

function buildApplicantEmailHtml(nomination) {
  const app = nomination || {};
  const fullName = `${app.firstName || ""} ${app.lastName || ""}`.trim() || "Applicant";
  const submissionDateFormatted = app.submissionDate 
    ? new Date(app.submissionDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>EminSphere Nomination Acknowledgment</title>
    </head>
    <body style="margin: 0; padding: 24px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        
        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, #060a17 0%, #0f172a 100%); padding: 28px 32px; border-bottom: 3px solid #c5a059;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #c5a059; font-weight: 700; margin-bottom: 6px;">
            EminSphere™ Global Innovation & Excellence Awards
          </div>
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">
            Nomination Successfully Received
          </h1>
        </div>

        <div style="padding: 28px 32px;">
          <p style="font-size: 15px; line-height: 1.6; color: #0f172a; margin-top: 0;">
            Dear <strong>${fullName}</strong>,
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Thank you for submitting your nomination for the <strong>EminSphere Global Innovation & Excellence Awards</strong>.
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Your application has been logged into our recognition registry and assigned the following official reference number:
          </p>

          <!-- Reference Card -->
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin: 20px 0;">
            <div style="margin-bottom: 8px;">
              <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; display: block;">Nomination Reference Number</span>
              <span style="font-size: 18px; font-family: monospace; font-weight: 700; color: #0284c7;">${app.id || "N/A"}</span>
            </div>
            <div style="margin-bottom: 8px;">
              <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; display: block;">Award Category</span>
              <span style="font-size: 14px; font-weight: 600; color: #0f172a;">${app.awardCategoryTitle || "N/A"}</span>
            </div>
            <div>
              <span style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; display: block;">Submission Date</span>
              <span style="font-size: 13px; color: #475569;">${submissionDateFormatted}</span>
            </div>
          </div>

          <h3 style="font-size: 14px; color: #0f172a; margin-top: 24px; margin-bottom: 10px;">What Happens Next?</h3>
          <ol style="font-size: 13px; line-height: 1.7; color: #475569; padding-left: 20px; margin: 0 0 24px 0;">
            <li><strong>Application Screening:</strong> The nominations secretariat reviews your submission for eligibility, completeness, and documentation validity.</li>
            <li><strong>Expert Disciplinary Evaluation:</strong> Eligible applications are evaluated against our published assessment parameters by designated review specialists.</li>
            <li><strong>Committee Decision:</strong> The Awards Selection Committee reviews final scores and formulates conferment outcomes.</li>
          </ol>

          <p style="font-size: 13px; line-height: 1.6; color: #475569;">
            Please retain your reference number (<strong>${app.id || 'N/A'}</strong>) for all future communications. If additional documentation is required, our secretariat will contact you at this email address.
          </p>

          <p style="font-size: 14px; line-height: 1.6; color: #0f172a; margin-top: 24px; margin-bottom: 0;">
            Warm regards,<br>
            <strong>Awards & Recognition Secretariat</strong><br>
            EminSphere™ Global Research & Innovation<br>
            <a href="mailto:info@eminsphere.com" style="color: #0284c7; text-decoration: none;">info@eminsphere.com</a> • <a href="https://www.eminsphere.com" style="color: #0284c7; text-decoration: none;">www.eminsphere.com</a>
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 11px; color: #94a3b8; text-align: center;">
          <p style="margin: 0;">© ${new Date().getFullYear()} EminSphere™. All rights reserved.</p>
        </div>

      </div>
    </body>
    </html>
  `;
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
    return sendJson(res, 405, { error: "Method Not Allowed. Use POST." });
  }

  try {
    const body = await parseBody(req);
    const { action, nomination, recipientEmail, recipientName, applicationId, subject, bodyText } = body;

    const fromName = process.env.FROM_NAME || "EminSphere Awards & Recognition";
    const fromEmail = process.env.FROM_EMAIL || "info@eminsphere.com";
    const adminEmail = (process.env.ADMIN_EMAIL || process.env.ORDER_NOTIFICATION_EMAIL || "info@eminsphere.com").trim();

    const transporter = getSmtpTransporter();

    let adminEmailSent = false;
    let applicantEmailSent = false;
    let emailError = null;

    // SCENARIO 1: New Nomination Application (Someone registers on /awards-recognition/apply)
    if (action === "new_nomination" || nomination) {
      const nom = nomination || body;
      const nomineeEmail = nom.email || recipientEmail;
      const nomineeName = `${nom.firstName || ""} ${nom.lastName || ""}`.trim() || recipientName || "Candidate";
      const appId = nom.id || applicationId || "ES-GIA-APP";
      const catTitle = nom.awardCategoryTitle || "Global Innovation & Excellence Awards";

      // 1. Send detailed dossier email to info@eminsphere.com
      try {
        await transporter.sendMail({
          from: `"${fromName}" <${fromEmail}>`,
          to: adminEmail,
          replyTo: nomineeEmail || fromEmail,
          subject: `[New Award Nomination] ${nomineeName} – ${catTitle} (${appId})`,
          text: `A new nomination has been received on EminSphere Awards Portal.\n\nNominee: ${nomineeName}\nReference ID: ${appId}\nCategory: ${catTitle}\nOrganization: ${nom.organization || 'N/A'}\nEmail: ${nomineeEmail}\nMobile: ${nom.mobile || 'N/A'}\nCountry: ${nom.countryOfResidence || 'N/A'}\n\nPlease review full details in the administrative dashboard: https://www.eminsphere.com/awards-recognition/admin`,
          html: buildAdminEmailHtml(nom)
        });
        adminEmailSent = true;
        console.log(`[Awards Notification] Admin dossier email delivered to ${adminEmail} for ${appId}`);
      } catch (err) {
        console.error(`[Awards Notification] Failed to deliver admin email to ${adminEmail}:`, err);
        emailError = err.message;
      }

      // 2. Send official acknowledgment confirmation email to applicant
      if (nomineeEmail && nomineeEmail.includes("@")) {
        try {
          await transporter.sendMail({
            from: `"${fromName}" <${fromEmail}>`,
            to: nomineeEmail,
            replyTo: fromEmail,
            subject: `Nomination Received – EminSphere Global Innovation & Excellence Awards (${appId})`,
            text: `Dear ${nomineeName},\n\nThank you for submitting your nomination for the EminSphere Global Innovation & Excellence Awards.\n\nYour nomination reference number is: ${appId}\nAward Category: ${catTitle}\n\nOur nominations team will review your application according to published eligibility and evaluation procedures.\n\nRegards,\nAwards & Recognition Team\nEminSphere™\ninfo@eminsphere.com`,
            html: buildApplicantEmailHtml(nom)
          });
          applicantEmailSent = true;
          console.log(`[Awards Notification] Acknowledgment email delivered to ${nomineeEmail} for ${appId}`);
        } catch (err) {
          console.error(`[Awards Notification] Failed to deliver applicant email to ${nomineeEmail}:`, err);
          if (!emailError) emailError = err.message;
        }
      }

      return sendJson(res, 200, {
        success: true,
        message: "New nomination emails dispatched successfully via ZeptoMail SMTP",
        applicationId: appId,
        adminEmailSent,
        applicantEmailSent,
        emailError: emailError || null
      });
    }

    // SCENARIO 2: Generic / Status Update Notification (From Admin Dashboard)
    const targetEmail = recipientEmail || adminEmail;
    try {
      await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: targetEmail,
        replyTo: fromEmail,
        subject: subject || "EminSphere Global Innovation & Excellence Awards Notification",
        text: bodyText || `Notification regarding application ${applicationId || 'N/A'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #10b981; padding-bottom: 16px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin: 0; font-size: 20px;">EminSphere™ Global Innovation & Excellence Awards</h2>
              <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Official Recognition Notification</p>
            </div>
            <div style="color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-line;">
              ${bodyText || 'Your application status has been updated in the EminSphere registry.'}
            </div>
            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; line-height: 1.5;">
              <p style="margin: 0;"><strong>EminSphere™</strong> | Global Academic, Research & Innovation Platform</p>
              <p style="margin: 4px 0 0 0;">This is an administrative notification. Reference ID: <strong>${applicationId || 'N/A'}</strong></p>
            </div>
          </div>
        `
      });
      console.log(`[Awards Notification] Notification email delivered to ${targetEmail}`);
    } catch (err) {
      console.error(`[Awards Notification] Failed to deliver email to ${targetEmail}:`, err);
      emailError = err.message;
    }

    return sendJson(res, 200, {
      success: true,
      message: "Notification processed",
      applicationId: applicationId || null,
      emailSent: !emailError,
      emailError: emailError || null
    });
  } catch (error) {
    console.error("Error processing nomination request:", error);
    return sendJson(res, 500, { error: "Internal Server Error", details: error.message });
  }
}
