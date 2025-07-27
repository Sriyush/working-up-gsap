'use client';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';

interface NavItem {
  title: string;
  href: string;
  index: number;
}

interface LinksideProps {
  data: NavItem;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function Linkside({ data, isActive, setSelectedIndicator }: LinksideProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      />
      <a href={href}>{title}</a>
    </motion.div>
  );
}
