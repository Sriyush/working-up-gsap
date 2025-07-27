// anim.ts
import { Variants } from "framer-motion";

export const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export const slideUp: Variants = {
  initial: {
    y: 0,
  },
  exit: {
    y: -1000, // Fallback height in px
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number], // type assertion fixes ease error
      delay: 0.2,
    },
  },
};
