/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set output to 'export' for static builds (GoDaddy)
  // Comment this out for Netlify/Render deployments
  // output: 'export',
  
  // For static export, use unoptimized images
  images: {
    unoptimized: process.env.STATIC_EXPORT === 'true',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
}

module.exports = nextConfig
