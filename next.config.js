/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["storage.iran.liara.space", "robnsiov.storage.iran.liara.space"],
  },
};

module.exports = nextConfig;
