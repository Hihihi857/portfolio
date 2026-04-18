"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

export default function Home() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const titleY = useTransform(
    scrollYProgress,
    [0, 0.18],
    ["0vh", reduceMotion ? "0vh" : "-5vh"],
  );
  const handRotate = reduceMotion ? 0 : 9;

  return (
    <main>
      <section
        id="top"
        aria-labelledby="hero-title"
        className="relative flex min-h-screen items-center overflow-hidden bg-paper px-5 py-24 md:px-8"
      >
        <motion.div
          style={{ y: titleY }}
          className="mx-auto w-full max-w-7xl"
        >
          <div className="mx-auto w-fit text-center">
            <div className="mb-1 flex translate-x-[4.5rem] items-end justify-center gap-5 md:mb-2 md:translate-x-[9rem] md:gap-8">
              <p className="font-display text-[24vw] font-bold leading-[0.82] tracking-[0.065em] text-ink md:text-[12.5vw]">
                Hi
              </p>
              <motion.div
                aria-hidden="true"
                animate={
                  reduceMotion
                    ? undefined
                    : { rotate: [handRotate, -4, handRotate] }
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
                  src="/hand.png"
                  alt=""
                  width={246}
                  height={246}
                  priority
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </div>

            <h1
              id="hero-title"
              className="whitespace-nowrap font-display text-[19vw] font-bold leading-[0.84] tracking-[0.065em] text-ink md:text-[11.8vw]"
            >
              I&apos;m Yejee
            </h1>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
