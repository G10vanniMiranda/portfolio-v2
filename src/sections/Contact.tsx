"use client";
// Seção: Contato com CTA para WhatsApp
import { motion } from "framer-motion";
import { appearUp, lettersContainer, letter, appear, slow, slowDelayed } from "@/lib/motion";

export default function Contact() {
  return (
    <section id="contato" className="w-full bg-[#1E1E1E] text-white scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={appearUp}
          transition={slow}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-semibold tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={lettersContainer}
            transition={slow}
          >
            {"Vamos trabalhar juntos?".split("").map((ch, idx) => (
              <motion.span key={idx} variants={letter}>{ch}</motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-white/80"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={appear}
            transition={slowDelayed}
          >
            Quer transformar sua ideia em um projeto digital moderno e profissional?
            <br />
            Entre em contato comigo e vamos conversar.
          </motion.p>

          <div className="flex justify-center items-center">
            <motion.a
              href="https://api.whatsapp.com/send?phone=5569999210459&text=Ol%C3%A1%20Giovanni!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[#3B82F6] px-6 py-3 text-white font-medium hover:bg-[#2563EB] transition-colors cta-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={slowDelayed}
              aria-label="Abrir conversa no WhatsApp"
            >
              Falar no WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
