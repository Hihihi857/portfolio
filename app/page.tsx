"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type HeroTitleProps = {
  basePath: string;
  handRotate: number;
  reduceMotion: boolean | null;
  titleId?: string;
};

function HeroTitle({
  basePath,
  handRotate,
  reduceMotion,
  titleId,
}: HeroTitleProps) {
  return (
    <div className="w-fit text-center">
      <div className="mb-1 flex translate-x-[4.5rem] items-end justify-center gap-5 md:mb-2 md:translate-x-[9rem] md:gap-8">
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

      <h1
        id={titleId}
        className="whitespace-nowrap font-display text-[19vw] font-bold leading-[0.84] tracking-[0.065em] md:text-[11.8vw]"
      >
        I&apos;m Yejee
      </h1>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const panelX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const clipLeft = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const handRotate = reduceMotion ? 0 : 9;

  return (
    <main className="flex flex-1 flex-col bg-white">
      <section
        ref={heroRef}
        id="top"
        aria-labelledby="hero-title"
        className="relative min-h-[250vh] bg-white"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 py-14 md:px-8 md:py-16">
          <motion.div
            aria-hidden="true"
            style={{ x: panelX }}
            className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[50vw] origin-left bg-black"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden">
            <motion.div
              style={{ x: textX }}
              className="text-black"
            >
              <HeroTitle
                basePath={basePath}
                handRotate={handRotate}
                reduceMotion={reduceMotion}
                titleId="hero-title"
              />
            </motion.div>

            <motion.div
              style={{ 
                x: textX, 
                clipPath: useTransform(
                  scrollYProgress,
                  [0, 1],
                  ["inset(0 100% 0 0)", "inset(0 50% 0 0)"]
                )
              }}
              className="absolute inset-0 flex items-center justify-center text-white"
            >
              <HeroTitle
                basePath={basePath}
                handRotate={handRotate}
                reduceMotion={reduceMotion}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}