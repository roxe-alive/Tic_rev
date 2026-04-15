import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://www.tiktok.com",
    changeOrigin: true,
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  })
);

app.listen(3000, () => {
  console.log("Proxy running on port 3000");
});
