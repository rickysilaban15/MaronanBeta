/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ penting agar bisa diekspor ke /out
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
