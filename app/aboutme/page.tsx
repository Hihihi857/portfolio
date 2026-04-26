"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function AboutMePage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["0vh", reduceMotion ? "0vh" : "-10vh"],
  );

  return (
    <main id="about" className="relative min-h-screen bg-paper px-5 pt-[140px] md:px-8">
      <motion.div
        style={{ y }}
        className="mx-auto max-w-4xl"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-8 font-display text-6xl font-bold leading-tight tracking-tight text-ink md:text-8xl">
            About Me
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-ink/80 md:text-xl">
            <p>
              Hi, I&apos;m Yejee! I&apos;m a passionate developer who loves creating beautiful
              and functional web experiences. With a keen eye for design and a strong
              foundation in modern web technologies, I strive to build applications
              that not only work flawlessly but also delight users.
            </p>

            <p>
              My journey in web development started with curiosity and has evolved
              into a deep appreciation for clean code, thoughtful user experiences,
              and the ever-evolving landscape of web technologies. I enjoy working
              with React, Next.js, TypeScript, and exploring new tools that push
              the boundaries of what&apos;s possible on the web.
            </p>

            <p>
              When I&apos;m not coding, you can find me exploring new design trends,
              contributing to open source projects, or enjoying the outdoors.
              I&apos;m always excited to take on new challenges and collaborate on
              meaningful projects.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
