import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fbkk13-2.fna.fbcdn.net",
        pathname: "/**",
      }
    ]
  },
};

export default nextConfig;
