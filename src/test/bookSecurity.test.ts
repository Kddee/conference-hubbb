import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import crypto from "crypto";
// @ts-ignore
import downloadBookHandler from "../../api/download-book.js";
// @ts-ignore
import createOrderHandler from "../../api/create-order.js";
// @ts-ignore
import verifyPaymentHandler from "../../api/verify-payment.js";
import { publishedBooks } from "../data/booksData";

function createMockResponse() {
  const res: any = {
    statusCode: 200,
    headers: {} as Record<string, string>,
    body: "",
    setHeader(key: string, value: string) {
      res.headers[key.toLowerCase()] = value;
    },
    end(data?: any) {
      if (data) {
        res.body = typeof data === "string" ? data : data.toString();
      }
      return res;
    },
    send(data?: any) {
      return res.end(data);
    },
    status(code: number) {
      res.statusCode = code;
      return res;
    },
    json(obj: any) {
      res.body = JSON.stringify(obj);
      return res;
    },
  };
  return res;
}

describe("Book Digital Publication Protection & Access Control", () => {
  it("must not have any PDF files in public/books/pdf", () => {
    const publicPdfDir = path.join(process.cwd(), "public", "books", "pdf");
    expect(fs.existsSync(publicPdfDir)).toBe(false);
  });

  it("must store all 17 publication PDFs safely in private/books", () => {
    const privateBooksDir = path.join(process.cwd(), "private", "books");
    expect(fs.existsSync(privateBooksDir)).toBe(true);

    const files = fs.readdirSync(privateBooksDir).filter(f => f.endsWith(".pdf"));
    expect(files.length).toBe(17);
  });

  it("must not expose direct pdfFile URLs in booksData", () => {
    for (const book of publishedBooks) {
      expect((book as any).pdfFile).toBeUndefined();
    }
  });

  it("should reject unauthenticated download requests (no params) with 401 Unauthorized", async () => {
    const req = {
      method: "GET",
      url: "/api/download-book",
      headers: { host: "localhost" },
    };
    const res = createMockResponse();

    await downloadBookHandler(req, res);

    expect(res.statusCode).toBe(401);
    const json = JSON.parse(res.body);
    expect(json.error).toContain("Access denied");
  });

  it("should reject download requests with only bookId and no token with 401 Unauthorized", async () => {
    const req = {
      method: "GET",
      url: "/api/download-book?bookId=generative-ai-student-work-authenticity",
      headers: { host: "localhost" },
    };
    const res = createMockResponse();

    await downloadBookHandler(req, res);

    expect(res.statusCode).toBe(401);
    const json = JSON.parse(res.body);
    expect(json.error).toContain("Access denied");
  });

  it("should reject forged or invalid token with 403 Forbidden", async () => {
    const req = {
      method: "GET",
      url: `/api/download-book?bookId=generative-ai-student-work-authenticity&paymentId=pay_123456789&expires=${Date.now() + 100000}&token=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`,
      headers: { host: "localhost" },
    };
    const res = createMockResponse();

    await downloadBookHandler(req, res);

    expect(res.statusCode).toBe(403);
    const json = JSON.parse(res.body);
    expect(json.error).toContain("Invalid or forged");
  });

  it("should reject expired token with 410 Gone", async () => {
    const bookId = "generative-ai-student-work-authenticity";
    const paymentId = "pay_test123456";
    const pastExpires = Date.now() - 10000; // expired in the past

    const req = {
      method: "GET",
      url: `/api/download-book?bookId=${bookId}&paymentId=${paymentId}&expires=${pastExpires}&token=dummytokentestingexpired`,
      headers: { host: "localhost" },
    };
    const res = createMockResponse();

    await downloadBookHandler(req, res);

    expect(res.statusCode).toBe(410);
    const json = JSON.parse(res.body);
    expect(json.error).toContain("expired");
  });

  it("should enforce rate limiting on rapid repeated requests (429)", async () => {
    const bookId = "generative-ai-student-work-authenticity";
    const paymentId = "pay_rate_limited_test_1";
    const futureExpires = Date.now() + 24 * 60 * 60 * 1000;

    const secret = Buffer.from(
      "NVkybHl2VzdxMWdMVjRzcE85VURGeThP",
      "base64"
    ).toString("utf8");

    const validToken = crypto
      .createHmac("sha256", secret)
      .update(`${bookId}:${paymentId}:${futureExpires}`)
      .digest("hex");

    let rateLimited = false;
    for (let i = 0; i < 20; i++) {
      const req = {
        method: "GET",
        url: `/api/download-book?bookId=${bookId}&paymentId=${paymentId}&expires=${futureExpires}&token=${validToken}`,
        headers: { host: "localhost", "x-forwarded-for": "10.0.0.1" },
      };
      const res = createMockResponse();
      await downloadBookHandler(req, res);
      if (res.statusCode === 429) {
        rateLimited = true;
        break;
      }
    }
    expect(rateLimited).toBe(true);
  });

  it("should allow download with cryptographically valid token and stream PDF from private/books", async () => {
    const bookId = "generative-ai-student-work-authenticity";
    const paymentId = "pay_validtest123";
    const futureExpires = Date.now() + 24 * 60 * 60 * 1000;

    const secret = Buffer.from(
      "NVkybHl2VzdxMWdMVjRzcE85VURGeThP",
      "base64"
    ).toString("utf8");

    const validToken = crypto
      .createHmac("sha256", secret)
      .update(`${bookId}:${paymentId}:${futureExpires}`)
      .digest("hex");

    const req = {
      method: "GET",
      url: `/api/download-book?bookId=${bookId}&paymentId=${paymentId}&expires=${futureExpires}&token=${validToken}`,
      headers: { host: "localhost" },
    };
    const res = createMockResponse();

    await downloadBookHandler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/pdf");
    expect(res.headers["content-disposition"]).toContain("Generative-AI-and-Student-Work-Authenticity.pdf");
    expect(res.headers["cache-control"]).toContain("no-store");
  });

  it("should reject underpaid orders in create-order endpoint (400)", async () => {
    const req = {
      method: "POST",
      body: { amount: 100 }, // 1 INR attempt
    };
    const res = createMockResponse();

    await createOrderHandler(req, res);

    expect(res.statusCode).toBe(400);
  });

  it("should reject invalid payment signatures in verify-payment endpoint (400)", async () => {
    const req = {
      method: "POST",
      body: {
        razorpay_order_id: "order_mock123",
        razorpay_payment_id: "pay_mock123",
        razorpay_signature: "invalid_sig_abc",
        bookId: "generative-ai-student-work-authenticity",
      },
    };
    const res = createMockResponse();

    await verifyPaymentHandler(req, res);

    expect(res.statusCode).toBe(400);
    const json = JSON.parse(res.body);
    expect(json.success).toBe(false);
  });
});
