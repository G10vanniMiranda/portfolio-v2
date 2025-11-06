"use client";
// Seção: Sobre mim
import Image from "next/image";
import type { FC } from "react";
import { motion } from "framer-motion";
import { appearUp, appear, lettersContainer, letter, slow, slowDelayed } from "@/lib/motion";

const About: FC = () => {
  return (
    <section id="sobre" className="w-full bg-[#1E1E1E] text-white scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={appearUp}
          transition={slow}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Coluna da foto (à esquerda no desktop) */}
          <div className="order-1 md:order-none flex justify-center md:justify-start">
            <Image
              src="/sobre.jpeg"
              alt="Foto profissional de Giovanni Miranda"
              width={320}
              height={320}
              className="rounded-2xl ring-1 ring-neutral-200 shadow-md object-cover w-64 h-64 md:w-80 md:h-80"
              loading="lazy"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
          {/* Coluna do texto (à direita no desktop) */}
          <div className="space-y-4">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold tracking-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={lettersContainer}
              transition={slow}
            >
              {"Sobre mim".split("").map((ch, idx) => (
                <motion.span key={idx} variants={letter}>{ch}</motion.span>
              ))}
            </motion.h2>
            <motion.p
              className="text-white/80"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={appear}
              transition={slow}
            >
              Sou Giovanni de Sousa Miranda, desenvolvedor full stack apaixonado por tecnologia e performance.
            </motion.p>
            <motion.p
              className="text-white/80"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={appear}
              transition={slowDelayed}
            >
              Trabalho criando sites modernos, landing pages e e-commerces que unem design, estratégia e resultado.
            </motion.p>
            <motion.p
              className="text-white/80"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={appear}
              transition={slowDelayed}
            >
              Além do desenvolvimento, também tenho experiência com SEO e marketing digital, o que me permite criar soluções
              completas para negócios que querem crescer online.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
