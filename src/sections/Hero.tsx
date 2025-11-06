"use client";
// Seção: Hero (capa) com vídeo de fundo e CTA
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { appearUp, appear, lettersContainer, letter, slow, slowDelayed } from "@/lib/motion";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  return (
    <section id="hero" className="relative w-full bg-[#F9FAFB] text-[#111827] overflow-hidden pt-4">
      {/* Vídeo de fundo com poster de fallback (melhora LCP e legibilidade) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-center bg-cover"
        style={{ backgroundImage: "url(/videos/hero-poster.jpg)" }}
      >
        <video
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          autoPlay={!prefersReduced}
          preload="metadata"
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay claro para contraste do texto sobre o vídeo */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-28 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={slow}
          variants={appearUp}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Avatar do autor (imagem otimizada) */}
          <Image
            src="/perfil.png"
            alt="Foto profissional de Giovanni Miranda"
            width={200}
            height={200}
            className="rounded-full ring-2 ring-neutral-200 shadow-lg object-cover object-center w-36 h-36 md:w-48 md:h-48"
            priority
            loading="eager"
            sizes="(max-width: 768px) 144px, 192px"
          />

          <motion.h1
            // Headline principal com animação letra-a-letra
            className="text-3xl md:text-5xl font-semibold tracking-tight max-w-4xl mx-auto whitespace-normal break-words text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={lettersContainer}
            transition={slow}
          >
            {"Desenvolvedor Full Stack especializado em criar experiências digitais modernas e de alta performance.".split("").map((ch, idx) => (
              <motion.span key={idx} variants={letter}>{ch}</motion.span>
            ))}
          </motion.h1>

          <motion.p
            // Subtítulo com fade-in
            className="text-base md:text-lg text-white max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={appear}
            transition={slowDelayed}
          >
            Crio sites, e-commerces e landing pages que transformam visitantes em clientes.
          </motion.p>

          <motion.a
            // CTA para rolar até a seção de projetos
            href="#projetos"
            aria-label="Ir para a seção de projetos"
            className="inline-flex items-center rounded-full bg-[#3B82F6] px-6 py-3 text-white font-medium shadow-lg hover:bg-[#2563EB] hover:shadow-xl transition-all cta-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={appear}
            transition={slowDelayed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver meus projetos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
