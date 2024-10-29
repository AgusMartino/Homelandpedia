/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.skymavis.com",
      },
      {
        protocol: "https",
        hostname: "cdn.axieinfinity.com",
      },
    ],
  },
};

export default nextConfig;
