/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"], // ✅ Only i.ibb.co is correct
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "ibb.co", // If you need ibb.co, not ibb.co.com
      },
    ],
  },
};

export default nextConfig;
