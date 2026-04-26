"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const handRotate = reduceMotion ? 0 : 9;

  const panelWidth = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const textX = useTransform(scrollYProgress, [0, 0.6, 0.85], ["0vw", "-100vw", "-200vw"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 0.85], [1, 0.3, 0]);
  const supportingTextOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);
  const supportingTextY = useTransform(scrollYProgress, [0.45, 0.7], [40, 0]);

  function HeroText({ className, id }: { className?: string; id?: string }) {
    return (
      <div className={`text-center ${className}`}>
        <div className="mb-1 flex items-end justify-center gap-5 md:mb-2 md:gap-8">
          <p className="font-display text-[24vw] font-bold leading-[0.82] tracking-[0.065em] md:text-[12.5vw]">
            Hi
          </p>
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion ? undefined : { rotate: [handRotate, -4, handRotate] }
            }
            transition={{
              duration: 1.9,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.1,
            }}
            className="mb-[1.7vw] h-[17vw] w-[17vw] origin-bottom-left md:mb-[1vw] md:h-[8.2vw] md:w-[8.2vw]"
          >
            <Image
              src={`${basePath}/hand.png`}
              alt=""
              width={246}
              height={246}
              priority
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>

        <h1 id={id} className="whitespace-nowrap font-display text-[19vw] font-bold leading-[0.84] tracking-[0.065em] md:text-[11.8vw]">
          I&apos;m Yejee
        </h1>
      </div>
    );
  }

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section
        ref={heroRef}
        id="top"
        aria-labelledby="hero-title"
        className="relative min-h-[250vh] bg-white"
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-5 py-14 md:px-8 md:py-16">
          <motion.div
            style={{ width: panelWidth }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 overflow-hidden bg-black"
          >
            <motion.div
              style={{ x: textX }}
              className="absolute inset-y-0 left-0 flex w-screen items-center justify-center text-white"
            >
              <HeroText />
            </motion.div>
          </motion.div>

          <div className="relative z-10 w-screen overflow-visible">
            <motion.div style={{ x: textX, opacity: textOpacity }} className="absolute inset-0 flex items-center justify-center">
              <HeroText className="text-black" id="hero-title" />
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: supportingTextOpacity, y: supportingTextY }}
            className="absolute inset-x-0 bottom-12 z-30 flex justify-center px-5 md:bottom-20 md:px-8"
          >
            <div className="flex w-full max-w-7xl flex-col justify-end gap-16 md:flex-row md:items-end md:justify-between md:gap-0">
              <div className="max-w-[480px] space-y-6">
                <p className="font-sans text-base leading-[1.7] tracking-[-0.015em] text-white md:text-[17px]">
                  I’m a designer focused on creating clean and thoughtful digital experiences that feel intuitive, purposeful, and easy to navigate.
                </p>
                <p className="font-sans text-base leading-[1.7] tracking-[-0.015em] text-white md:text-[17px]">
                  My work is grounded in strong visual communication, with careful attention to layout, typography, and spacing. I aim to balance aesthetics with usability, designing interfaces that not only look refined but also function seamlessly across different devices.
                </p>
                <p className="font-sans text-base leading-[1.7] tracking-[-0.015em] text-white md:text-[17px]">
                  I’m particularly interested in crafting experiences that are minimal yet expressive, where every element has a clear role and contributes to the overall clarity of the design.
                </p>
                <p className="font-sans text-base leading-[1.7] tracking-[-0.015em] text-white md:text-[17px]">
                  Through my work, I strive to create digital spaces that feel considered, engaging, and genuinely useful for the people who interact with them.
                </p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <a
                  href="https://linkedin.com/in/yejee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block font-sans text-sm font-medium uppercase tracking-[0.1em] text-white opacity-70 transition-opacity hover:opacity-100 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume"
                  className="relative inline-block font-sans text-sm font-medium uppercase tracking-[0.1em] text-white opacity-70 transition-opacity hover:opacity-100 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
                >
                  Resume
                </a>
                <a
                  href="mailto:hello@yejee.design"
                  className="relative inline-block font-sans text-sm font-medium uppercase tracking-[0.1em] text-white opacity-70 transition-opacity hover:opacity-100 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-white after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-out"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}