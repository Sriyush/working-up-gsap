'use client';

import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function About() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!badgeRef.current || !sectionRef.current) return;

    // Set initial rotation
    gsap.set(badgeRef.current, { rotate: -25 });

    // Shake animation
// Shake animation (wiggle)
gsap.to(badgeRef.current, {
  keyframes: [
    { rotate: -10, duration: 0.1 },
    { rotate: -40, duration: 0.1 },
    { rotate: -20, duration: 0.1 },
    { rotate: -30, duration: 0.1 },
    { rotate: -25, duration: 0.1 },
  ],
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top center",
    toggleActions: "play none none none",
  },
});

  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.imageContainer}>
        <img src="/allbg2.jpg" alt="Background" />
      </div>
      <div className={styles.content}>
        <h1>
          Always shipping, always leveling up,<br />
          from training AI models using TensorFlow and Keras <br/>
           to cooking up deep learning projects, <br />
          I dabble in computer vision, crunch data like a pro.
        </h1>
      </div>
      <div ref={badgeRef} className={styles.badge}>Who Am I</div>
    </section>
  );
}
