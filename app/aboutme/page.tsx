"use client";

import { motion } from "framer-motion";

const skills = [
  "Web Design", "UI/UX", "Next.js", "Figma",
  "Typography", "Layout", "Interaction Design", "Responsive Design",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function AboutMePage() {
  return (
    <main id="about" className="relative min-h-screen bg-paper text-ink">

      {/* ── HERO ── */}
      <section className="px-5 pt-[140px] pb-24 md:px-8">
        <div className="mx-auto max-w-[1100px]">

          {/* Eyebrow */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 text-sm font-bold uppercase tracking-[0.1em] text-graphite"
          >
            About Me
          </motion.p>

          {/* Big heading */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-[14vw] font-bold leading-[0.88] tracking-tight text-ink md:text-[10vw] lg:text-[8vw] max-w-4xl"
          >
            Designing for the web.
          </motion.h1>

          {/* Divider */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-16 mb-16 h-px w-full bg-ink/10"
          />

          {/* Two-column layout */}
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">

            {/* Left — intro paragraph */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
              <p className="text-xl leading-[1.75] text-ink/80 md:text-2xl">
                Hi, I&apos;m Yejee — an aspiring web designer focused on creating
                clean and purposeful digital experiences.
              </p>
            </motion.div>

            {/* Right — detail paragraphs */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="space-y-6 text-base leading-[1.85] text-ink/70 md:text-lg"
            >
              <p>
                My work centres on layout, typography, and user experience.
                I pay close attention to spacing, hierarchy, and responsiveness
                to ensure designs work seamlessly across different devices.
              </p>
              <p>
                I have hands-on experience building my own portfolio using
                Next.js, where I explored interaction, structure, and real-world
                web design workflows. This helped me understand how design and
                development come together to create effective user experiences.
              </p>
              <p>
                I&apos;m particularly interested in projects that combine strong
                visual identity with functional design — simple, refined, and
                meaningful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="px-5 py-24 md:px-8 border-t border-ink/10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:items-start">

            <motion.p
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.1em] text-graphite"
            >
              Skills &amp; Tools
            </motion.p>

            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-ink/20 px-5 py-2 text-sm font-medium tracking-wide text-ink/80 transition-colors hover:border-ink hover:text-ink"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="px-5 py-24 md:px-8 border-t border-ink/10 bg-ink text-white">
        <div className="mx-auto max-w-[1100px]">
          <motion.p
            custom={7}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 text-sm font-bold uppercase tracking-[0.1em] text-white/50"
          >
            My Approach
          </motion.p>
          <motion.p
            custom={8}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl text-3xl leading-[1.5] tracking-[-0.02em] text-white/90 md:text-4xl"
          >
            I believe great design is invisible — it guides without interrupting,
            communicates without shouting, and feels effortless to use.
          </motion.p>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="px-5 py-24 md:px-8 border-t border-ink/10">
        <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <motion.p
            custom={9}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            Let&apos;s work together.
          </motion.p>
          <motion.a
            custom={10}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            href="mailto:yediyedi1118@gmail.com"
            className="inline-block rounded-full bg-ink px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-75"
          >
            Say Hello →
          </motion.a>
        </div>
      </section>

    </main>
  );
}
