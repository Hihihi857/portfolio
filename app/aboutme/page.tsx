"use client";

import { motion } from "framer-motion";

const skills = [
  "Web Design", "UI/UX", "Figma", "Canva",
  "HTML", "CSS", "JavaScript",
  "Adobe Photoshop", "Illustrator", "InDesign",
  "Premiere Pro", "After Effects",
  "Maya", "Blender",
];

const experience = [
  {
    role: "Web Designer",
    org: "UNSW Animation & Moving Image Festival",
    period: "Sep 2023 · Sep 2024",
    desc: "Designed the website layout and visual style, including fonts, colour palette, and image arrangement. Ensured the overall design aligned with the festival's creative theme and visual identity.",
  },
  {
    role: "Operations & Accounts Administrator",
    org: "E-planet Scrap Metal Sydney",
    period: "Jul 2024 – Present",
    desc: "Led sales operations and managed customer communications. Handled bookkeeping, invoicing, and payroll, and collaborated with the team to optimise service quality.",
  },
  {
    role: "Administrator",
    org: "CJ Tax Consulting",
    period: "Nov 2023 – Jul 2024",
    desc: "Prepared bookkeeping records using Excel, MYOB, and Xero. Maintained accurate financial records and supported tax document preparation.",
  },
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

          <motion.p
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            className="mb-6 text-sm font-bold uppercase tracking-[0.1em] text-graphite"
          >
            About Me
          </motion.p>

          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUp}
            className="font-display text-[13vw] font-bold leading-[0.88] tracking-tight text-ink md:text-[9vw] lg:text-[7.5vw] max-w-5xl"
          >
            Designing for the web.
          </motion.h1>

          <motion.div
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="mt-16 mb-16 h-px w-full bg-ink/10"
          />

          {/* Two-column */}
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">

            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
              <p className="text-xl leading-[1.75] text-ink/80 md:text-2xl">
                Hi, I&apos;m Yejee — a web designer and media arts student at UNSW,
                Sydney, passionate about creating clean and purposeful digital experiences.
              </p>
              <div className="mt-8 space-y-2 text-sm text-graphite">
                <p>📍 Sydney NSW, Australia</p>
                <p>🎓 Bachelor of Media Arts (Animation &amp; Visual Effects)</p>
                <p className="text-ink/50">&amp; Bachelor of Secondary Education · UNSW</p>
                <p className="text-ink/50">Expected Graduation: November 2026 · WAM 80.35</p>
              </div>
            </motion.div>

            <motion.div
              custom={4} initial="hidden" animate="visible" variants={fadeUp}
              className="space-y-6 text-base leading-[1.85] text-ink/70 md:text-lg"
            >
              <p>
                My work centres on layout, typography, and user experience.
                I pay close attention to spacing, hierarchy, and responsiveness
                to ensure designs work seamlessly across different devices.
              </p>
              <p>
                I have hands-on experience building this portfolio using Next.js, and
                designing the UNSW Animation &amp; Moving Image Festival website — where
                I defined the visual style, colour palette, and overall creative direction.
              </p>
              <p>
                I&apos;m particularly interested in projects that combine strong visual
                identity with functional design — simple, refined, and meaningful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="px-5 py-24 md:px-8 border-t border-ink/10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr]">

            <motion.p
              custom={5} initial="hidden" animate="visible" variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.1em] text-graphite"
            >
              Experience
            </motion.p>

            <div className="space-y-12">
              {experience.map((item, i) => (
                <motion.div
                  key={item.role}
                  custom={6 + i} initial="hidden" animate="visible" variants={fadeUp}
                  className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start border-b border-ink/8 pb-12 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="mb-1 text-base font-bold text-ink">{item.role}</p>
                    <p className="mb-4 text-sm text-graphite">{item.org}</p>
                    <p className="text-base leading-relaxed text-ink/70">{item.desc}</p>
                  </div>
                  <p className="shrink-0 text-sm text-graphite/60">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="px-5 py-24 md:px-8 border-t border-ink/10">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:items-start">

            <motion.p
              custom={9} initial="hidden" animate="visible" variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.1em] text-graphite"
            >
              Skills &amp; Tools
            </motion.p>

            <motion.div
              custom={10} initial="hidden" animate="visible" variants={fadeUp}
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
            custom={11} initial="hidden" animate="visible" variants={fadeUp}
            className="mb-6 text-sm font-bold uppercase tracking-[0.1em] text-white/50"
          >
            My Approach
          </motion.p>
          <motion.p
            custom={12} initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl text-3xl leading-[1.5] tracking-[-0.02em] text-white/90 md:text-4xl"
          >
            I believe great design is invisible — it guides without interrupting,
            communicates without shouting, and feels effortless to use.
          </motion.p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 py-24 md:px-8 border-t border-ink/10">
        <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <motion.p
            custom={13} initial="hidden" animate="visible" variants={fadeUp}
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            Let&apos;s work together.
          </motion.p>
          <motion.a
            custom={14} initial="hidden" animate="visible" variants={fadeUp}
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
