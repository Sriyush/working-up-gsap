'use client';
import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './style.module.scss';

export default function Cruve() {
  const [curveVariants, setCurveVariants] = useState<Variants | null>(null);

  useEffect(() => {
    const height = window.innerHeight;

   const initialPath = `M0 0 L0 ${height} Q200 ${height / 2} 0 0`;
    const targetPath = `M0 0 L0 ${height} Q-100 ${height / 2} 0 0`;

    const curve: Variants = {
      initial: {
        d: initialPath,
      },
      enter: {
        d: targetPath,
        transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1] as [number, number, number, number], // ✅ FIXED
        },
      },
      exit: {
        d: initialPath,
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1] as [number, number, number, number], // ✅ FIXED
        },
      },
    };

    setCurveVariants(curve);
  }, []);

  if (!curveVariants) return null;

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curveVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}
