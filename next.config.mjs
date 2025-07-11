/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    // 👇 This ensures local images work — though it works by default
    unoptimized: false,
  },
};

export default nextConfig;
