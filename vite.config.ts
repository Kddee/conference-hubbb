import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const resolvedKeyId =
    (env.VITE_RAZORPAY_KEY_ID && env.VITE_RAZORPAY_KEY_ID !== "undefined" ? env.VITE_RAZORPAY_KEY_ID : "") ||
    (env.RAZORPAY_KEY_ID && env.RAZORPAY_KEY_ID !== "undefined" ? env.RAZORPAY_KEY_ID : "") ||
    (process.env.VITE_RAZORPAY_KEY_ID && process.env.VITE_RAZORPAY_KEY_ID !== "undefined" ? process.env.VITE_RAZORPAY_KEY_ID : "") ||
    (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID !== "undefined" ? process.env.RAZORPAY_KEY_ID : "") ||
    "rzp_test_TkwCXKlFUEjHhG";

  // Populate process.env for API handlers in local development
  process.env.RAZORPAY_KEY_ID = env.RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || resolvedKeyId;
  process.env.RAZORPAY_KEY_SECRET = env.RAZORPAY_KEY_SECRET || process.env.RAZORPAY_KEY_SECRET || "uVMTxhIP60ZM7LGhYrva3Nnq";
  process.env.VITE_RAZORPAY_KEY_ID = resolvedKeyId;

  return {
    define: {
      "import.meta.env.VITE_RAZORPAY_KEY_ID": JSON.stringify(resolvedKeyId),
    },
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: "local-razorpay-api-routes",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const pathname = req.url ? req.url.split("?")[0] : "";
            if (pathname === "/api/create-order") {
              try {
                const { default: createOrderHandler } = await import("./api/create-order.js");
                await createOrderHandler(req, res);
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: err?.message || "Internal server error" }));
              }
              return;
            }
            if (pathname === "/api/verify-payment") {
              try {
                const { default: verifyPaymentHandler } = await import("./api/verify-payment.js");
                await verifyPaymentHandler(req, res);
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: err?.message || "Internal server error" }));
              }
              return;
            }
            if (pathname === "/api/download-book") {
              try {
                const { default: downloadBookHandler } = await import("./api/download-book.js");
                await downloadBookHandler(req, res);
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: err?.message || "Internal server error" }));
              }
              return;
            }
            if (pathname === "/api/send-order-email") {
              try {
                const { default: sendEmailHandler } = await import("./api/send-order-email.js");
                await sendEmailHandler(req, res);
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: err?.message || "Internal server error" }));
              }
              return;
            }
            next();
          });
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
  };
});
