/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        // domains: ['assets.aceternity.com'],
      },
    ],
  },
};

export default nextConfig;