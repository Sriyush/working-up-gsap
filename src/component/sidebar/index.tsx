"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import Rounded from "../common/roundedbutton";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Rounded from "../../common/RoundedButton";
// import Magnetic from "../../common/Magnetic";

export default function Side() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  // useEffect(() => {
  //   if (isActive) setIsActive(false);
  // }, [pathname]);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(button.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: window.innerHeight,
//         onLeave: () => {
//           gsap.to(button.current, {
//             scale: 1,
//             duration: 0.25,
//             ease: "power1.out",
//           });
//         },
//         onEnterBack: () => {
//           gsap.to(
//             button.current,
//             { scale: 0, duration: 0.25, ease: "power1.out" },
//             setIsActive(false)
//           );
//         },
//       },
//     });
//   }, []);

  const handleNavClick = (value: boolean | ((prevState: boolean) => boolean)) => {
    setIsActive(value); // This will log 'false' when the nav element in ChildComponent is clicked
  };

  return (
    <>
          <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav onNavClick={handleNavClick} />}
      </AnimatePresence>
    </>
  );
}