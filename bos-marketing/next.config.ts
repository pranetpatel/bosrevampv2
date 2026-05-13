import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** Allow `next/image` quality above default 75 (marketing panels need sharp re-encode). */
    qualities: [75, 85, 88, 90, 92, 95],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
