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
      {
        protocol: "https",
        hostname: "cdn.axieinfinity.com",
        pathname: "/marketplace-website/asset-icon/part-icons/**",
      },
      {
        protocol: "https",
        hostname: "axiecdn.axieinfinity.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
