/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Permite aislar el directorio de build (útil para servir un preview sin
  // chocar con otro `next dev` corriendo en la misma carpeta). Default: .next
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
