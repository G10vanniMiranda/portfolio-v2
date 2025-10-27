import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// Geração do robots.txt
// - Define host e aponta para o sitemap, permitindo todo o site

export default function robots(): MetadataRoute.Robots {
  const host = siteUrl.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
