import { Variants, Transition } from "framer-motion";

// Utilitários centralizados de animação (Framer Motion)
// - Padroniza tempos e curvas de easing para consistência visual

// Transições lentas (> 2s) para consistência global
export const slow: Transition = { duration: 2.2, ease: [0.16, 1, 0.3, 1] };
export const slowDelayed: Transition = { ...slow, delay: 0.2 };

// Aparecer subindo (de baixo para cima)
export const appearUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Fade-in simples
export const appear: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Para animação por letra (container controla o stagger dos filhos)
export const lettersContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

export const letter: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};
