import type { Metadata } from "next";
import { defaultSEO, siteUrl } from "@/lib/seo";
import HomeClient from "./_components/HomeClient";

// Metadados específicos da Home (Server Component)
export const metadata: Metadata = {
  title: "Giovanni Miranda | Desenvolvedor Full Stack",
  description:
    "Crio sites, e-commerces e landing pages modernas com foco em conversão e performance.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Giovanni Miranda — Portfólio",
    description: "Desenvolvedor Full Stack especializado em Next.js e TailwindCSS.",
    url: siteUrl.replace(/\/$/, "") + "/",
    siteName: "Giovanni Miranda",
    images: [
      { url: defaultSEO.ogImage, width: 1200, height: 630, alt: "Giovanni Miranda Portfolio" },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giovanni Miranda — Desenvolvedor Full Stack",
    description: "Crio soluções digitais completas para empresas.",
    images: [defaultSEO.ogImage],
  },
};

export default function Home() {
  return <HomeClient />;
}
