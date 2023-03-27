/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["notion-andrew.vercel.app", "storage.iran.liara.space"],
  },
};

module.exports = nextConfig;
