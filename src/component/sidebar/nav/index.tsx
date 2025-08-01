'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Linkside from './link';
import Footer from './footer';
import Curve from './curve';

interface IndexProps {
  onNavClick: (state: boolean) => void;
}

const navItems = [
  {
    title: 'Home',
    href: '#work',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
];

export default function Nav({ onNavClick }: IndexProps) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => setSelectedIndicator(pathname)}
          onClick={() => {
            onNavClick(false);
          }}
          className={styles.nav}
        >
          {/* <div className={styles.header}>
            <p>Navigation</p>
          </div> */}
          {navItems.map((data, index) => (
            <Linkside
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
