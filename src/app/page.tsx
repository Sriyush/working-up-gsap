"use client";
import { About } from "@/component/about";
import { Footer } from "@/component/footer";
import HeroSection from "@/component/hero";
import Preloader from "@/component/preloader";
import Project from "@/component/Projects";
import PixelTrail from "@/component/ui/pixeltrails";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import "./globals.css";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<{ startAnimation: () => void }>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
        heroRef.current?.startAnimation();
      }, 2000);
    })();

    const handleScroll = () => {
      const heroSection = document.querySelector('[data-section="hero"]');
      const aboutSection = document.querySelector('[data-section="about"]');
      const burger = document.querySelector(".burger") as HTMLElement;

      if (!burger || !heroSection || !aboutSection) return;

      const scrollY = window.scrollY;
      const aboutTop =
        aboutSection.getBoundingClientRect().top + window.scrollY;

      if (scrollY >= aboutTop - window.innerHeight / 2) {
        burger.style.setProperty("--burger-color", "white");
      } else {
        burger.style.setProperty("--burger-color", "black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<main>
  <div className="burger" ref={burgerRef}></div>

  <AnimatePresence mode="wait">
    {isLoading && <Preloader />}
  </AnimatePresence>

  <HeroSection ref={heroRef} />
  <About />
  <Project />
  <Footer/>
</main>

  );
}
