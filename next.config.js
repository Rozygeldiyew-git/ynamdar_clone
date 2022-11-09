/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.ynamdar.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.ynamdar.com',
        port: '',
        pathname: '/ynamdar/images/product/**'
      }
    ]
  }
}

module.exports = nextConfig
