"use client";
import HeroSection from "@/component/hero";
import Preloader from "@/component/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<{ startAnimation: () => void }>(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);

        // 🟢 Trigger animation AFTER preloader
        heroRef.current?.startAnimation();
      }, 2000);
    })();
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <HeroSection ref={heroRef} />
    </main>
  );
}
