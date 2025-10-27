"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { appearUp, slow } from "@/lib/motion";

// Página 404 personalizada
// - Mostra mensagem amigável e link para voltar ao início

export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center px-4 text-center text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={appearUp}
        transition={slow}
        className="space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-semibold">Página não encontrada</h1>
        <p className="text-white/70">A página que você tentou acessar não existe ou foi movida.</p>
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-[#3B82F6] px-6 py-3 text-white font-medium hover:bg-[#2563EB] transition-colors"
          aria-label="Voltar para a página inicial"
        >
          Voltar para o início
        </Link>
      </motion.div>
    </main>
  );
}
