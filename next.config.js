/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["iad.microlink.io"],
  },
};

module.exports = nextConfig
