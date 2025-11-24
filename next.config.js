/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;

