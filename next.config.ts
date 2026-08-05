import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['*'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.firebaseio.com",
      },
      {
        protocol: "https",
        hostname: "**.firebasestorage.app",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
