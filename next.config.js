/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["notion-andrew.vercel.app"],
  },
};

module.exports = nextConfig;
