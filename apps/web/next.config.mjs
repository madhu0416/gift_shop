/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@gifting/types'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};
export default nextConfig;
