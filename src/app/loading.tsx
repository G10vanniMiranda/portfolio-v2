"use client";
// Indicador de carregamento entre páginas (overlay)
// - Spinner simples com Framer Motion

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-black/30 backdrop-blur-sm z-[60]">
      <motion.div
        className="w-10 h-10 rounded-full border-2 border-white/30 border-t-white"
        aria-label="Carregando"
        role="status"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
      />
    </div>
  );
}
