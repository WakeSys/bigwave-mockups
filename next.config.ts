import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'www.blibliwatersports.com.au',
      },
      {
        protocol: 'https',
        hostname: 'www.aquachimpkent.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hydrouswakeparks.com',
      },
    ],
  },
};

export default nextConfig;
