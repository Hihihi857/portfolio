"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function ScrollViewport() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  // Black panel expands from left to right
  const panelScale = useTransform(smoothProgress, [0, 0.8], [0, 1]);

  // Primary headline subtle vertical movement
  const headlineY = useTransform(
    smoothProgress,
    [0, 1],
    ["0vh", reduceMotion ? "0vh" : "-5vh"],
  );

  // Secondary headline fade and slide in later
  const secondaryOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const secondaryX = useTransform(smoothProgress, [0.4, 0.7], ["-20px", "0px"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Black panel that expands from left */}
        <motion.div
          className="absolute inset-0 z-10 origin-left bg-black"
          style={{ scaleX: panelScale }}
        />

        {/* Content layer */}
        <div className="relative z-20 flex h-full items-center justify-center px-5 md:px-8">
          <div className="mx-auto w-full max-w-7xl">
            {/* Primary headline */}
            <motion.h1
              className="mb-8 text-center font-display text-[12vw] font-bold leading-[0.9] tracking-[-0.02em] text-black mix-blend-difference md:text-[8vw]"
              style={{ y: headlineY }}
            >
              Hello, I&apos;m Yejee
            </motion.h1>

            {/* Secondary headline */}
            <motion.p
              className="text-center font-display text-[6vw] font-semibold leading-[1.1] tracking-[-0.01em] text-black mix-blend-difference md:text-[4vw]"
              style={{
                opacity: secondaryOpacity,
                x: secondaryX,
              }}
            >
              Designer & Developer
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
/*
"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { scrollMotion } from "./animationConfig";

export function ScrollViewport() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const whiteContentX = useTransform(
    smoothProgress,
    [0.1, 0.78],
    ["0vw", reduceMotion ? "0vw" : scrollMotion.desktopPush],
  );
  const headlineY = useTransform(
    smoothProgress,
    [0, 1],
    ["0vh", reduceMotion ? "0vh" : scrollMotion.textLift],
  );
  const darkCopyX = useTransform(smoothProgress, [0.52, 0.9], ["-6vw", "0vw"]);
  const darkCopyOpacity = useTransform(smoothProgress, [0.48, 0.74], [0, 1]);
  const indexY = useTransform(
    smoothProgress,
    [0, 1],
    ["0vh", reduceMotion ? "0vh" : scrollMotion.imageDrift],
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-paper"
      style={{ height: scrollMotion.sectionHeight }}
      aria-labelledby="about-title"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x: whiteContentX }}
          className="relative z-10 flex h-full items-center px-5 md:px-8"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[1fr_0.72fr] md:items-center">
            <motion.div style={{ y: headlineY }}>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-graphite">
                About Me
              </p>
              <h2
                id="about-title"
                className="max-w-4xl font-display text-[14vw] font-semibold leading-[0.92] tracking-[-0.02em] text-ink md:text-[7.6vw]"
              >
                Designing clear digital moments with quiet confidence.
              </h2>
            </motion.div>

            <motion.p
              style={{ y: indexY }}
              className="max-w-xl text-lg leading-8 text-graphite md:text-xl"
            >
              I build visual systems, interfaces, and portfolio stories that
              make work feel direct, polished, and easy to navigate.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          style={{ x: darkCopyX, opacity: darkCopyOpacity }}
          className="pointer-events-none absolute inset-0 z-30 flex items-center px-5 text-paper md:px-8"
        >
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-white/55">
              Selected Direction
            </p>
            <h2 className="max-w-5xl font-display text-[15vw] font-semibold leading-[0.9] tracking-[-0.035em] md:text-[8vw]">
              Work that moves from first glance to remembered detail.
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
*/
