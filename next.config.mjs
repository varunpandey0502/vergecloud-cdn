/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/lp/",
};

export default nextConfig;
