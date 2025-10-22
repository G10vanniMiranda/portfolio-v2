"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { appearUp, appear, lettersContainer, letter, slow, slowDelayed } from "@/lib/motion";
import { FaSearch, FaCloud } from "react-icons/fa";
import dynamic from "next/dynamic";
import { projects } from "@/lib/projects";
const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  ssr: false,
  loading: () => (
    <div className="h-[280px] rounded-lg border border-[#E5E7EB] bg-[#FFFFFF]/60 animate-pulse" />
  ),
});
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiSupabase,
  SiWordpress,
  SiGit,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

export default function Home() {
  const prefersReduced = useReducedMotion();
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">

      {/* Hero */}
      <section id="hero" className="relative w-full bg-[#F9FAFB] text-[#111827] overflow-hidden pt-4">

        {/* Background video with poster fallback */}
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
          {/* Light overlay for readability */}
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
              href="#projetos"
              className="inline-flex items-center rounded-md bg-[#3B82F6] px-6 py-3 text-white font-medium hover:bg-[#2563EB] transition-colors cta-pulse"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={appear}
              transition={slowDelayed}
            >
              Ver meus projetos
            </motion.a>

          </motion.div>
        </div>

      </section>

      {/* Sobre mim */}
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
            {/* Foto à esquerda (desktop) */}
            <div className="order-1 md:order-none flex justify-center md:justify-start">
              <Image
                src="/sobre.jpeg"
                alt="Foto profissional de Giovanni Miranda"
                width={320}
                height={320}
                className="rounded-2xl ring-1 ring-neutral-200 shadow-md object-cover w-64 h-64 md:w-80 md:h-80"
              />
            </div>
            {/* Texto à direita */}
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

      {/* Tecnologias */}
      <section id="tecnologias" className="w-full bg-transparent text-white scroll-mt-24">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-24">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={lettersContainer}
            transition={slow}
          >
            {"Tecnologias que utilizo".split("").map((ch, idx) => (
              <motion.span key={idx} variants={letter}>{ch}</motion.span>
            ))}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={appearUp}
            transition={slow}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {[
              { name: "HTML", Icon: SiHtml5 },
              { name: "CSS", Icon: SiCss3 },
              { name: "JavaScript", Icon: SiJavascript },
              { name: "React", Icon: SiReact },
              { name: "Next.js", Icon: SiNextdotjs },
              { name: "TailwindCSS", Icon: SiTailwindcss },
              { name: "Node.js", Icon: SiNodedotjs },
              { name: "PHP", Icon: SiPhp },
              { name: "Laravel", Icon: SiLaravel },
              { name: "Supabase", Icon: SiSupabase },
              { name: "WordPress", Icon: SiWordpress },
              { name: "Git", Icon: SiGit },
              { name: "GitHub", Icon: SiGithub },
              { name: "SEO", Icon: FaSearch },
              { name: "Hospedagem e Domínio", Icon: FaCloud },
              { name: "Firebase", Icon: SiFirebase },
            ].map(({ name, Icon }) => (
              <motion.div
                key={name}
                className="flex flex-col items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#FFFFFF] p-4 shadow-sm transition duration-200 transform hover:scale-105 hover:shadow-md hover:border-[#3B82F6]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={appearUp}
                transition={slow}
              >
                <Icon className="text-2xl md:text-3xl text-[#111827]" />
                <span className="text-sm font-medium text-[#111827] text-center">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="w-full bg-transparent text-white scroll-mt-24">

        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-24">

          <motion.h2
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={lettersContainer}
            transition={slow}
          >
            {"Projetos Recentes".split("").map((ch, idx) => (
              <motion.span key={idx} variants={letter}>{ch}</motion.span>
            ))}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={appearUp}
            transition={slow}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {projects.map((p) => (
              <ProjectCard
                key={p.href}
                title={p.title}
                description={p.description}
                imageSrc={p.imageSrc}
                href={p.href}
              />
            ))}
          </motion.div>

        </div>

      </section>

      {/* Contato */}
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
                href="https://api.whatsapp.com/send?phone=5569999210459&text=Olá%20Giovanni!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-[#3B82F6] px-6 py-3 text-white font-medium hover:bg-[#2563EB] transition-colors cta-pulse"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={appear}
                transition={slowDelayed}
              >
                Falar no WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
