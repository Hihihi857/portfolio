"use client";

import { motion } from "framer-motion";

const skills = [
  // Web & Design
  "Web Design", "UI/UX", "Figma", "Canva",
  // Code
  "HTML", "CSS", "JavaScript",
  // Adobe CC
  "Photoshop", "Illustrator", "InDesign",
  "Premiere Pro", "After Effects", "Lightroom",
  // 3D & VFX
  "Maya", "Blender", "Nuke",
  // Office
  "Word", "Excel", "PowerPoint",
  // Accounting
  "MYOB", "Xero",
];

const experience = [
  {
    role: "Web Designer",
    org: "UNSW Animation & Moving Image Festival",
    period: "Sep 2023 · Sep 2024",
    bullets: [
      "Designed the website layout and visual style, including fonts, colour palette, and image arrangement.",
      "Ensured the overall design aligned with the festival's creative theme and visual identity.",
    ],
  },
  {
    role: "Operations & Accounts Administrator",
    org: "E-planet Scrap Metal Sydney",
    period: "Jul 2024 – Present",
    bullets: [
      "Led sales operations and managed customer communications via calls, emails, and messaging platforms.",
      "Handled bookkeeping tasks, including issuing invoices and processing employee payroll.",
      "Collaborated with team members to optimise sales strategy and improve service quality.",
    ],
  },
  {
    role: "Administrator",
    org: "CJ Tax Consulting",
    period: "Nov 2023 – Jul 2024",
    bullets: [
      "Prepared bookkeeping records for clients using Excel, MYOB, and Xero.",
      "Maintained accurate financial records and supported the preparation of tax documents.",
    ],
  },
  {
    role: "General Volunteer",
    org: "Arc Goes To · Sydney",
    period: "Feb 2024 – Nov 2024",
    bullets: [
      "Organised and supported student events as part of Arc's events.",
      "Took responsibility for event planning and on-site execution.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
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
            className="font-display text-[13vw] font-bold leading-[0.88] tracking-tight md:text-[9vw] lg:text-[7.5vw] max-w-5xl"
          >
            Designing for the web.
          </motion.h1>

          <motion.div
            custom={2} initial="hidden" animate="visible" variants={fadeUp}
            className="mt-16 mb-16 h-px w-full bg-ink/10"
          />

          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">

            {/* Left */}
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
              <p className="text-xl leading-[1.75] text-ink/80 md:text-2xl">
                Hi, I&apos;m Yejee — a web designer and media arts student at UNSW, Sydney.
              </p>
              <div className="mt-8 space-y-2 text-sm leading-relaxed text-graphite">
                <p>📍 Sydney NSW, Australia</p>
                <p>🎓 Bachelor of Media Arts (Animation &amp; Visual Effects)</p>
                <p className="pl-6 text-ink/50">&amp; Bachelor of Secondary Education · UNSW</p>
                <p className="pl-6 text-ink/50">Expected Nov 2026 · WAM 80.35</p>
                <p>✏️ Accredited Teaching Areas: Graphics &amp; Multimedia Technology, Visual Arts</p>
              </div>
            </motion.div>

            {/* Right */}
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
                I have hands-on experience designing the UNSW Animation &amp; Moving Image
                Festival website and building this portfolio with Next.js — where I
                explored interaction, structure, and real-world web design workflows.
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
                  key={item.role + item.org}
                  custom={6 + i} initial="hidden" animate="visible" variants={fadeUp}
                  className="pb-12 border-b border-ink/8 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <p className="text-base font-bold text-ink">{item.role}</p>
                      <p className="text-sm text-graphite">{item.org}</p>
                    </div>
                    <p className="shrink-0 text-sm text-graphite/60">{item.period}</p>
                  </div>
                  <ul className="space-y-1.5 pl-4 list-disc text-base leading-relaxed text-ink/70">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
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
              custom={11} initial="hidden" animate="visible" variants={fadeUp}
              className="text-sm font-bold uppercase tracking-[0.1em] text-graphite"
            >
              Skills &amp; Tools
            </motion.p>

            <motion.div
              custom={12} initial="hidden" animate="visible" variants={fadeUp}
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
            custom={13} initial="hidden" animate="visible" variants={fadeUp}
            className="mb-6 text-sm font-bold uppercase tracking-[0.1em] text-white/50"
          >
            My Approach
          </motion.p>
          <motion.p
            custom={14} initial="hidden" animate="visible" variants={fadeUp}
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
            custom={15} initial="hidden" animate="visible" variants={fadeUp}
            className="font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            Let&apos;s work together.
          </motion.p>
          <motion.a
            custom={16} initial="hidden" animate="visible" variants={fadeUp}
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
