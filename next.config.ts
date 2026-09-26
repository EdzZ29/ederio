import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cloudflare has no Next.js image optimizer (/_next/image), so serve files
    // from /public as-is. Images there are pre-sized WebP to stay light.
    unoptimized: true,
  },
};

export default nextConfig;
