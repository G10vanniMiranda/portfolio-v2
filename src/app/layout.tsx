import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsFloatingButton from "@/components/WhatsFloatingButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-mi7anda.vercel.app/"),
  title: {
    default: "Portfólio – Giovanni Miranda",
    template: "%s | Giovanni Miranda",
  },
  description: "Desenvolvedor Full Stack. Crio sites, e‑commerces e landing pages de alta performance.",
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
    url: "https://portfolio-mi7anda.vercel.app/",
    siteName: "Giovanni Miranda",
    images: [
      { url: "/og-cover.jpg", width: 1200, height: 630, alt: "Portfólio – Giovanni Miranda" },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio – Giovanni Miranda",
    description:
      "Desenvolvedor Full Stack. Crio sites, e‑commerces e landing pages de alta performance.",
    images: ["/og-cover.jpg"],
  },
};

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
        {/* Spacer to offset fixed header height */}
        <div aria-hidden className="h-14" />
        {children}
        <Footer />
        <WhatsFloatingButton />
      </body>
    </html>
  );
}
