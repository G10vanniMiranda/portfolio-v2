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
  title: "PORTIFOLIO - Mi7anda",
  description: "Portifolio de Milhões!",
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
