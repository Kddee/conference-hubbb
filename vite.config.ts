import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import createOrderHandler from "./api/create-order.js";
import verifyPaymentHandler from "./api/verify-payment.js";

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
                await verifyPaymentHandler(req, res);
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
