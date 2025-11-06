import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos | Giovanni Miranda",
  description: "Lista de projetos recentes desenvolvidos por Giovanni Miranda.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((p) => {
          const slug = p.title
            .toLowerCase()
            .normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
          return (
            <Link key={p.href} href={`/projetos/${slug}`} className="group rounded-lg border border-white/10 p-4 hover:border-[#3B82F6] transition-colors">
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image src={p.imageSrc} alt={p.title} fill className="object-cover" />
              </div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="text-white/70">{p.description}</p>
              <span className="mt-2 inline-block text-[#3B82F6] group-hover:underline">Ver detalhes →</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
