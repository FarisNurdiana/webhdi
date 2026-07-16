import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static HTML export — produces an `out/` folder of plain HTML/CSS/JS that
  // can be uploaded to any static host (e.g. Hostinger File Manager) with no
  // Node.js runtime. Valid because every route is fully static / SSG.
  output: "export",
  // Emit folder-per-route (about/index.html) so Apache/shared hosting serves
  // clean URLs like /about/ without extra rewrite rules.
  trailingSlash: true,
  images: {
    // Next's image optimizer needs a server; disable it for static export.
    // (The site uses plain <img>, so this only future-proofs next/image.)
    unoptimized: true,
  },
};

export default nextConfig;
