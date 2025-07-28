import { Variants } from "framer-motion";

export const menuSlide: Variants = {
  initial: {
    transform: "translateX(calc(-100% - 100px))",
  },
  enter: {
    transform: "translateX(0)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  exit: {
    transform: "translateX(calc(-100% - 100px))",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};


export const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 0.05 * i,
    },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      delay: 0.05 * i,
    },
  }),
};

export const scale = {
  open: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: 0.4,
    },
  },
};
