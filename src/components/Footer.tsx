"use client";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { appear, slow } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-[#9CA3AF] border-t border-[#1F2937]">
      <motion.div
        className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={appear}
        transition={slow}
      >
        <p className="text-sm">
          © 2025 Giovanni de Sousa Miranda — Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/G10vanniMiranda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/giovanni-miranda-66150426a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <CiLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/giovanni96miranda/?__pwa=1#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
