/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:path*', // Capture all segments after the base URL
            destination: '/admin/:path*', // Rewrite to the corresponding path in the 'public' folder
          },
        ];
      },
}

module.exports = nextConfig
