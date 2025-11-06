import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ativa compressão no servidor Next (Gzip); em Vercel, Brotli é aplicado na CDN
  compress: true,
  poweredByHeader: false,
  // Gera versões otimizadas nas melhores extensões suportadas
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      // Cache agressivo e imutável para assets estáticos e fontes
      {
        source: "/:all*.(svg|jpg|jpeg|png|webp|avif|gif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache para arquivos estáticos do Next.js
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache para vídeos (ajuste o tempo conforme necessidade)
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
