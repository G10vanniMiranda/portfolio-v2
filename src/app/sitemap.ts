import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// Geração do sitemap.xml
// - Usa a URL base definida em src/lib/seo.ts (ou variável de ambiente)

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const now = new Date();
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
