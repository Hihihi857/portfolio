"use client";

import { useEffect, useState } from "react";

export default function AboutMeContent() {
  const [offsetY, setOffsetY] = useState("0vh");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateOffset = () => {
      if (reduceMotion.matches) {
        setOffsetY("0vh");
        return;
      }

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollableHeight > 0
        ? window.scrollY / scrollableHeight
        : 0;
      const y = Math.min(scrollProgress / 0.3, 1) * -10;

      setOffsetY(`${y}vh`);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    reduceMotion.addEventListener("change", updateOffset);

    return () => {
      window.removeEventListener("scroll", updateOffset);
      reduceMotion.removeEventListener("change", updateOffset);
    };
  }, []);

  return (
    <main id="about" className="relative min-h-screen bg-paper px-5 pt-[160px] pb-24 md:px-8">
      <div
        style={{ transform: `translateY(${offsetY})` }}
        className="mx-auto max-w-4xl"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h1
            className="mb-8 font-display text-6xl font-bold leading-tight tracking-tight text-ink transition-transform duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.015] md:text-8xl"
          >
            About Me
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-ink/80 md:text-xl">
            <p>
              Hi, I&apos;m Yejee, an aspiring web designer focused on creating clean
              and purposeful digital experiences. I enjoy designing websites that are
              not only visually engaging but also intuitive and easy to navigate.
            </p>

            <p>
              My work centres on layout, typography, and user experience. I pay close
              attention to spacing, hierarchy, and responsiveness to ensure designs
              work seamlessly across different devices.
            </p>

            <p>
              I have hands-on experience building my own portfolio using JavaScript and Next.js,
              where I explored interaction, structure, and real-world web design
              workflows. This process helped me understand how design and development
              come together to create effective user experiences.
            </p>

            <p>
              I&apos;m particularly interested in projects that combine strong visual
              identity with functional design, and I aim to create work that feels
              simple, refined, and meaningful.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
