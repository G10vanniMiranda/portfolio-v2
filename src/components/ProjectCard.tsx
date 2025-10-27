"use client";
// Card de Projeto
// - Exibe thumbnail otimizada, título, descrição e link para o projeto
// - Usa Framer Motion para animações na entrada e hover sutil na imagem
type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

import { motion } from "framer-motion";
import { appearUp, appear, slow, slowDelayed } from "@/lib/motion";
import Image from "next/image";

export default function ProjectCard({ title, description, imageSrc, href }: ProjectCardProps) {
  return (
    <motion.article
      // Container do card com hover de sombra e borda
      className="group overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] shadow-sm transition hover:shadow-md hover:border-[#00C853]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={appearUp}
      transition={slow}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Thumbnail do projeto */}
        <Image
          src={imageSrc}
          alt={`${title} thumbnail`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay escurecido no hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      <div className="p-4 md:p-5">
        <motion.h3
          className="text-lg font-semibold tracking-tight text-[#111827]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={appear}
          transition={slow}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mt-1 text-sm text-[#6B7280] transition-transform duration-300 group-hover:-translate-y-0.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={appear}
          transition={slowDelayed}
        >
          {description}
        </motion.p>
        <div className="mt-4">
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            // CTA para ver o projeto
            className="inline-flex items-center rounded-md bg-[#3B82F6] px-4 py-2 text-white text-sm font-medium hover:bg-[#2563EB] transition-colors cta-pulse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={appear}
            transition={slowDelayed}
          >
            Ver projeto
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
