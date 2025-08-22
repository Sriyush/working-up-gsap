"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Noise from "../ui/noise";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "../ui/logoloop";
gsap.registerPlugin(ScrollTrigger);

export function About() {
  // const renderSkills = (prefix: string) =>
  //   [...Array(2)].map((_, i) =>
  //     [
  //       "React.js",
  //       "Next.js",
  //       "TypeScript",
  //       "Node.js",
  //       "PostgreSQL",
  //       "GSAP",
  //       "Framer Motion",
  //       "Web3",
  //       "Rust",
  //       "TensorFlow",
  //       "Keras",
  //       "Python",
  //       "HTML",
  //       "CSS",
  //       "Tailwind",
  //     ].map((skill, j) => <span key={`${prefix}-${i}-${j}`}>{skill}</span>)
  //   );
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const badgeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const squiggleRef = useRef<SVGPathElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);
  const getLogoHeight = () => {
  if (typeof window === "undefined") return 150; // SSR safe
  if (window.innerWidth < 640) return 80; // mobile
  if (window.innerWidth < 1024) return 120; // tablet
  return 150; // desktop
};

  useEffect(() => {
    if (!marqueeRef2.current) return;

    const marquee = marqueeRef2.current;
    const baseSpeed = 100; // pixels/sec
    gsap.set(marquee, { xPercent: -50 });
    const tween = gsap.to(marquee, {
      xPercent: 0,
      ease: "none",
      duration: marquee.offsetWidth / baseSpeed,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const baseSpeed = 100; // pixels/sec
    const tween = gsap.to(marquee, {
      xPercent: -50,
      ease: "none",
      duration: marquee.offsetWidth / baseSpeed,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    if (!badgeRef.current || !sectionRef.current) return;

    gsap.set(badgeRef.current, { rotate: 0 });

    gsap.to(badgeRef.current, {
      rotate: -45,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
    });
    if (squiggleRef.current) {
      gsap.fromTo(
        squiggleRef.current,
        { strokeDashoffset: 979.82 },
        {
          strokeDashoffset: 0,
          ease: "power2.out",
          duration: 5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.about}>
      <div className={styles.imageContainer}>
        {/* Noise instead of bg image */}
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
      <div className={styles.content}>
        <h1>
          Always shipping, always{" "}
          <span className={styles.squiggle}>
            learning
            <svg
              width="87"
              height="34"
              viewBox="0 0 87 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.squiggle1}
            >
              <path
                ref={squiggleRef}
                d="M60.3899 6.0428C37.4036 0.99442 0.440909 6.88871 1.21207 18.2696C1.98323 29.6506 28.6003 33.5501 42.7834 32.9388C56.9666 32.3275 69.5591 29.6691 76.5295 25.6033C83.5 21.5376 86.8001 15.2114 84.3547 10.9336C81.9093 6.65572 76.0404 1.98562 59.4119 1.15217C42.7834 0.318714 34.9583 2.98611 18.8188 7.26564"
                stroke="#F5C3B8"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                style={{
                  strokeDasharray: 979.82,
                  strokeDashoffset: 979.82,
                  opacity: 1,
                }}
              />
            </svg>
          </span>{" "}
          up,
          <br />
          from training AI models using TensorFlow and Keras <br />
          to cooking up deep learning projects, <br />I dabble in computer
          vision, crunch data like a pro.
        </h1>
      </div>

      <div ref={badgeRef} className={styles.badge}>
        Who Am I
      </div>
      {/* <div className={styles.marqueeContainer}>
        <div className={styles.marqueeWrapper}>
          <div ref={marqueeRef} className={styles.marquee}>
            {renderSkills("fwd")}
          </div>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.reverse}>
          <div ref={marqueeRef2} className={styles.marquee}>
            {renderSkills("rev")}
          </div>
        </div>
      </div> */}
      <div className={styles.marqueeContainer}>
              <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={getLogoHeight()}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut

        fadeOutColor="#ffffff"

        ariaLabel="Technology partners"
      />
      </div>
    </section>
  );
}
