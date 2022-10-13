/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      "lh3.googleusercontent.com",
      "graph.facebook.com"
    ]
  }
}

module.exports = nextConfig
