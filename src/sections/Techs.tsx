"use client";
// Seção: Tecnologias
import { motion } from "framer-motion";
import type { FC } from "react";
import { appearUp, lettersContainer, letter, slow } from "@/lib/motion";
import { slow as slowAlt } from "@/lib/motion";
import { FaSearch, FaCloud } from "react-icons/fa";
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

const Techs: FC = () => {
  const items = [
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
  ];

  return (
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
          transition={slowAlt}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {items.map(({ name, Icon }) => (
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
  );
};

export default Techs;
