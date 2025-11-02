import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsFloatingButton from "@/components/WhatsFloatingButton";
import "./globals.css";
import { siteUrl, defaultSEO } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";

// Layout raiz (App Router)
// - Define fontes, metadados dinâmicos e envolve todas as páginas
// - Monta Header, Footer, barra de progresso e botão flutuante do WhatsApp

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Metadados dinâmicos (SEO): canonical, OpenGraph e Twitter
export async function generateMetadata(): Promise<Metadata> {
  const base = siteUrl.replace(/\/$/, "");
  return {
    metadataBase: new URL(base + "/"),
    title: {
      default: "Portfólio – Giovanni Miranda",
      template: "%s | Giovanni Miranda",
    },
    description:
      "Desenvolvedor Full Stack. Crio sites, e‑commerces e landing pages de alta performance.",
    alternates: {
      canonical: "/",
    },
    keywords: [
      "desenvolvedor",
      "full stack",
      "next.js",
      "react",
      "landing page",
      "ecommerce",
      "site profissional",
    ],
    openGraph: {
      title: "Portfólio – Giovanni Miranda",
      description:
        "Desenvolvedor Full Stack. Crio sites, e‑commerces e landing pages de alta performance.",
      url: base + "/",
      siteName: "Giovanni Miranda",
      // Usa a imagem definida no SEO centralizado (src/lib/seo.ts)
      images: [
        { url: defaultSEO.ogImage, width: 1200, height: 630, alt: "Portfólio – Giovanni Miranda" },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Portfólio – Giovanni Miranda",
      description:
        "Desenvolvedor Full Stack. Crio sites, e‑commerces e landing pages de alta performance.",
      // Mantém Twitter em sincronia com a imagem OG
      images: [defaultSEO.ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} antialiased overflow-x-hidden`} >
        <ScrollProgress />
        <Header />
        {/* Espaçador para compensar o header fixo (altura ~48px) */}
        <div aria-hidden className="h-10" />
        {children}
        <Footer />
        {/* Vercel Analytics: coleta de page views e métricas de navegação */}
        <Analytics />
        <WhatsFloatingButton />
      </body>
    </html>
  );
}
