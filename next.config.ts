import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.BASE_URL}/:path*`, // Corrected URL construction
      },
    ];
  },
};

export default nextConfig;
