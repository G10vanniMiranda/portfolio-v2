"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { appear, slow } from "@/lib/motion";

export default function WhatsFloatingButton() {
    const href =
        "https://api.whatsapp.com/send?phone=5569999210459&text=Olá%20Giovanni!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-[70] inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-black shadow-lg hover:bg-green-400 transition-colors"
            aria-label="Falar no WhatsApp"
            title="Falar no WhatsApp"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={appear}
            transition={slow}
        >
            <FaWhatsapp className="text-2xl" />
        </motion.a>
    );
}
