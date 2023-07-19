/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  env: {
    EMAILJS_PUBLIC_KEY: 'OI_uKRDl4DiNtsVnx'
  },
  images: {
    deviceSizes: [475, 640, 768, 985, 1024, 1280, 1320, 1536],
    minimumCacheTTL: 86400,
  }
}

module.exports = nextConfig
