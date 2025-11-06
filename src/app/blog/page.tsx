import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Giovanni Miranda",
  description: "Artigos técnicos sobre desenvolvimento web, Next.js, SEO e performance.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="text-white/80 mt-2">Em breve: artigos técnicos e estudos de caso.</p>
    </main>
  );
}
