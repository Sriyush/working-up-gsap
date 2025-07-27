'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { opacity } from './anim';

const words = ["Hello", "Bonjour", "नमस्ते", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [slideUp, setSlideUp] = useState<Variants>({});

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setDimension({ width, height });

    // Set slideUp with dynamic height
    setSlideUp({
      initial: { y: 0 },
      exit: {
        y: -height,
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
          delay: 0.2,
        },
      },
    });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 150);

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
    exit: {
      d: targetPath,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
