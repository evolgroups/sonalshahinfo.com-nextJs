/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages
  output: 'export',
  // Enable static image optimization
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Domains for external images (Twitter media, etc.)
    domains: ['pbs.twimg.com', 'abs.twimg.com'],
  },
  // Trailing slashes for SEO consistency
  trailingSlash: false,
  // Compress output
  compress: true,
  // Power header disabled for security
  poweredByHeader: false,
};

module.exports = nextConfig;
