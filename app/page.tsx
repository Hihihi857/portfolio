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

  const panelWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textX = useTransform(scrollYProgress, [0, 0.7, 1], ["0vw", "-80vw", "-150vw"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.3, 0]);
  const supportingTextOpacity = useTransform(scrollYProgress, [0.65, 0.9], [0, 1]);
  const supportingTextX = useTransform(scrollYProgress, [0.65, 0.9], [30, 0]);

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

            <motion.div
              style={{ opacity: supportingTextOpacity, x: supportingTextX }}
              className="absolute bottom-20 left-20 right-20 flex items-end justify-between"
            >
              <div className="max-w-md">
                <p className="font-sans text-sm leading-relaxed text-white md:text-base">
                  An educator-turned-designer,
                  <br />
                  building things that contribute to a better, more equitable
                  and pleasant future.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <a
                  href="https://linkedin.com/in/yejee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 md:text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume"
                  className="font-sans text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 md:text-sm"
                >
                  Resume
                </a>
                <a
                  href="mailto:hello@yejee.design"
                  className="font-sans text-xs font-bold uppercase tracking-widest text-white hover:opacity-70 md:text-sm"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}