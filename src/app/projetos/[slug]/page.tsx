import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

function slugify(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return projects.map((p) => ({ slug: slugify(p.title) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => slugify(p.title) === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Projeto` ,
    description: project.description,
    alternates: { canonical: `/projetos/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.imageSrc }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.imageSrc],
    },
  };
}

export default async function ProjetoDetalhe({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => slugify(p.title) === slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/projetos" className="text-[#3B82F6] hover:underline">← Voltar</Link>
      <h1 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</h1>
      <p className="text-white/80 mt-2">{project.description}</p>
      <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-md border border-white/10">
        <Image src={project.imageSrc} alt={project.title} fill className="object-cover" />
      </div>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center rounded-md bg-[#3B82F6] px-4 py-2 text-white font-medium hover:bg-[#2563EB] transition-colors"
      >
        Visitar site do projeto →
      </a>
    </main>
  );
}
