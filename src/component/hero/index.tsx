import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import styles from "./style.module.scss";
import PixelTrail from "../ui/pixeltrails";

const name = ["PRIYANSHU", "BANSAL"];

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

  let charIndex = 0;

return (
  <section className={styles.hero}>
    <div className={styles.wrapper}>
      <div className={styles.tagline}>
        <span className={styles.dot}></span>
        JUST A WANNABE
      </div>

      <div className={styles.text}>
        {name.map((word, wordIndex) => (
          <div
            key={wordIndex}
            className={`${styles.line} ${wordIndex === 1 ? styles.rightAlign : ""}`}
          >
            {word.split("").map((char, i) => {
              const index = charIndex++;
              return (
                <span
                  key={index}
                  ref={(el) => {
                    if (el) letterRefs.current[index] = el;
                  }}
                  className={styles.letter}
                >
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
      {/* <PixelTrail
    gridSize={50}
    trailSize={0.2}
    maxAge={200}
    interpolate={5}
    color="#000000"
    gooeyFilter={{ id: "goo", strength: 12 }}
  /> */}
  </section>
);

});

HeroSection.displayName = "HeroSection";

export default HeroSection;
