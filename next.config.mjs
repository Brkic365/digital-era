import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Optional, but nice to have
    styledComponents: true,
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(process.cwd(), 'src'),
    };
    return config;
  },
};

export default nextConfig;
