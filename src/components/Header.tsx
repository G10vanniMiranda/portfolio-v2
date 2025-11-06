"use client";

// Componente: Header (navegação fixa)
// - Exibe a logo, links de navegação e menu mobile (hambúrguer)
// - Mantém-se fixo no topo com borda inferior e fundo sólido

import { useState } from "react";
import { motion } from "framer-motion";
import { appearUp, appear, slow } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#1F2937] bg-[#1E1E1E] text-[#FFFFFF]">
            <motion.div
                className="mx-auto max-w-6xl px-4 py-0 flex items-center justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 1 }}
                variants={appearUp}
                transition={slow}
            >
                {/* Marca (Logo) — usa Link para navegar à home */}
                <Link href="/" className="flex items-center" aria-label="Início">
                    <Image src="/Mi7anda.png" alt="Logo Giovanni Miranda" width={120} height={32} />
                </Link>

                {/* Navegação desktop */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a href="#sobre" className="hover:text-white/90 focus:outline-none focus-visible:underline transition-colors">Sobre</a>
                    <a href="#tecnologias" className="hover:text-white/90 focus:outline-none focus-visible:underline transition-colors">Tecnologias</a>
                    <a href="#projetos" className="hover:text-white/90 focus:outline-none focus-visible:underline transition-colors">Projetos</a>
                    <a href="#contato" className="hover:text-white/90 focus:outline-none focus-visible:underline transition-colors">Contato</a>
                </nav>

                {/* Ações/CTA + botão de menu mobile */}
                <div className="flex items-center gap-3">
                    <motion.a
                        href="#contato"
                        className="hidden md:inline-flex items-center rounded-md bg-[#3B82F6] px-4 py-2 text-white font-medium hover:bg-[#2563EB] transition-all cta-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                        aria-label="Entrar em contato"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Entrar em contato
                    </motion.a>
                    <button
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 hover:bg-[#3B82F6]/10 transition"
                        onClick={() => setOpen((v: boolean) => !v)}
                        aria-controls="mobile-menu"
                        aria-expanded={open}
                        aria-label="Abrir menu"
                    >
                        <span className="sr-only">Menu</span>
                        {/* Ícone hambúrguer animado para estado aberto/fechado */}
                        <div className="space-y-1">
                            <span className={`block h-0.5 w-6 bg-[#3B82F6] transition ${open ? "translate-y-1.5 rotate-45" : ""}`}></span>
                            <span className={`block h-0.5 w-6 bg-[#3B82F6] transition ${open ? "opacity-0" : ""}`}></span>
                            <span className={`block h-0.5 w-6 bg-[#3B82F6] transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
                        </div>
                    </button>
                </div>
            </motion.div>

            {/* Navegação mobile (menu colapsável) */}
            <div className={`md:hidden border-t border-[#1F2937] overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-96" : "max-h-0"}`} id="mobile-menu">
                <motion.nav
                    className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm"
                    initial="hidden"
                    animate={open ? "visible" : "hidden"}
                    variants={appear}
                    transition={slow}
                >
                    <a href="#sobre" className="hover:text-white/90 focus:outline-none focus-visible:underline transition-colors" onClick={() => setOpen(false)}>Sobre</a>
                    <a href="#tecnologias" className="hover:text-white/90 focus:outline-none focus-visible:underline transition-colors" onClick={() => setOpen(false)}>Tecnologias</a>
                    <a href="#projetos" className="hover:text-white/90 focus:outline-none focus-visible:underline transition-colors" onClick={() => setOpen(false)}>Projetos</a>
                    <a href="#contato" className="hover:text-white/90 focus:outline-none focus-visible:underline transition-colors" onClick={() => setOpen(false)}>Contato</a>
                    <motion.a
                        href="#contato"
                        className="mt-2 inline-flex items-center justify-center rounded-md bg-[#3B82F6] px-4 py-2 text-white font-medium hover:bg-[#2563EB] transition-all cta-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
                        onClick={() => setOpen(false)}
                        aria-label="Entrar em contato"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Entrar em contato
                    </motion.a>
                </motion.nav>
            </div>
        </header>
    );
}
