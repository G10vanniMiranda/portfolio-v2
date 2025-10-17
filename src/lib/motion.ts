import { Variants, Transition } from "framer-motion";

// Slow transitions (> 2s) for global consistency
export const slow: Transition = { duration: 2.2, ease: [0.16, 1, 0.3, 1] };
export const slowDelayed: Transition = { ...slow, delay: 0.2 };

// Generic appear from below
export const appearUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Simple fade in
export const appear: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// For per-letter animations
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
