/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/hy-ai-erica.github.io/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
