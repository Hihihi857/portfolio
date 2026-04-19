"use client";

import {
  motion,
  useSpring,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
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
    offset: ["start start", "end start"],
  });
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 420 : 90,
    damping: reduceMotion ? 55 : 24,
    mass: reduceMotion ? 0.12 : 0.45,
  });
  const overlayProgress = useTransform(
    smoothScrollProgress,
    [0.04, 0.3],
    [0, 1],
  );
  const overlayX = useTransform(
    overlayProgress,
    [0, 1],
    ["-100%", "0%"],
  );
  const darkContentClip = useTransform(
    overlayProgress,
    (value) => {
      if (value <= 0.001) {
        return "inset(0 100% 0 0)";
      }

      const revealWidth =
        value >= 0.995 ? 100 : Math.max(0, value * 100 - 0.35);
      return `inset(0 ${100 - revealWidth}% 0 0)`;
    },
  );
  const detailOpacity = useTransform(
    smoothScrollProgress,
    [0.22, 0.34],
    [0, 1],
  );
  const detailY = useTransform(
    smoothScrollProgress,
    [0.22, 0.34],
    [12, 0],
  );
  const detailVisibility = useTransform(
    smoothScrollProgress,
    [0, 0.21, 0.22],
    ["hidden", "hidden", "visible"],
  );
  const handRotate = reduceMotion ? 0 : 9;

  return (
    <main className="flex flex-1 flex-col bg-paper">
      <section
        ref={heroRef}
        id="top"
        aria-labelledby="hero-title"
        className="relative h-[185vh] bg-paper"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden px-5 py-14 md:px-8 md:py-16">
          <motion.div
            aria-hidden="true"
            style={{ x: overlayX }}
            className="pointer-events-none absolute -left-1 top-0 z-0 h-full w-[calc(100%+8px)] bg-ink will-change-transform [backface-visibility:hidden] [transform:translateZ(0)]"
          />

          <div className="pointer-events-none relative z-10 mx-auto h-full w-full max-w-7xl">
            <div className="grid h-full grid-rows-[1fr_auto] text-ink">
              <div className="flex items-center justify-center">
                <HeroTitle
                  basePath={basePath}
                  handRotate={handRotate}
                  reduceMotion={reduceMotion}
                  titleId="hero-title"
                />
              </div>
            </div>

            <motion.div
              aria-hidden="true"
              style={{ clipPath: darkContentClip }}
              className="absolute inset-0 grid h-full grid-rows-[1fr_auto] text-paper will-change-[clip-path]"
            >
              <div className="flex items-center justify-center">
                <HeroTitle
                  basePath={basePath}
                  handRotate={handRotate}
                  reduceMotion={reduceMotion}
                />
              </div>
            </motion.div>

            <motion.div
              style={{
                clipPath: darkContentClip,
                opacity: detailOpacity,
                y: detailY,
                visibility: detailVisibility,
              }}
              className="pointer-events-auto absolute inset-x-0 bottom-0 grid gap-8 pb-3 text-sm font-semibold leading-relaxed text-paper md:grid-cols-[minmax(0,26rem)_auto] md:items-end md:justify-between md:pb-6"
            >
              <p className="max-w-[24rem] text-white/75">
                An educator-turned-designer, building things that contribute to
                a better, more equitable and pleasant future.
              </p>

              <nav
                aria-label="Hero links"
                className="flex flex-col items-start gap-2 text-xs uppercase tracking-[0.08em] md:items-end"
              >
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-current/40 pb-0.5 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  LinkedIn
                </a>
                <a
                  href={`${basePath}/resume/`}
                  className="border-b border-current/40 pb-0.5 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="border-b border-current/40 pb-0.5 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
