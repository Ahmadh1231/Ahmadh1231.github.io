/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;