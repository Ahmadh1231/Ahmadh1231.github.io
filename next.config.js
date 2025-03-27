/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // For username.github.io repo (personal site), use empty basePath
  basePath: '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;