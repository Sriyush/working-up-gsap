import React, {
  useEffect,
  useRef,
  HTMLAttributes,
  ReactNode,
} from "react";
import styles from "./style.module.scss";
import gsap from "gsap";

interface RoundedButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  backgroundColor?: string;
}

export default function Rounded({
  children,
//   backgroundColor = "#455CE9",
  ...attributes
}: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!circle.current) return;

    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    // <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
        //   style={{ backgroundColor }}
          className={styles.circle}
        />
      </div>
    // </Magnetic>
  );
}
