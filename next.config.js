/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  experimental: {
    turbopack: {},
  },
}

module.exports = nextConfig

