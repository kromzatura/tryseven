/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // We run ESLint in CI and pre-commit; skip during `next build`.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ]
  },
  images: {
    unoptimized: true,
    qualities: [85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;