import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  // /about -> about/index.html : evite l'erreur 403 du serveur sur les pages internes
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
};

export default nextConfig;
