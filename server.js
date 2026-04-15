import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://www.tiktok.com",
    changeOrigin: true,
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://www.tiktok.com/"
    }
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Proxy running on port ${PORT}`);
});
