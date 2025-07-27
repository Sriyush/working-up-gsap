import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import styles from "./style.module.scss";

const name = "PRIYANSHU BANSAL";

// Expose `startAnimation` via forwardRef
const HeroSection = forwardRef((_, ref) => {
  const letterRefs = useRef<HTMLSpanElement[]>([]);

  useImperativeHandle(ref, () => ({
    startAnimation() {
      gsap.fromTo(
        letterRefs.current,
        {
          rotationZ: () => gsap.utils.random(-30, 30),
          opacity: 1,
        },
        {
          rotationZ: 0,
          opacity: 1,
          duration: 5,
          ease: "power3.out",
          stagger: 0.05,
        }
      );
    },
  }));

  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        {name.split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              if (el) letterRefs.current[index] = el;
            }}
            className={styles.letter}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
