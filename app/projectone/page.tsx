import Link from "next/link";
import Image from "next/image";

export default function ProjectOnePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="min-h-screen bg-paper px-5 pt-[140px] text-ink md:px-8">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/projects"
          className="mb-12 inline-block text-sm font-semibold uppercase tracking-[0.02em] text-graphite transition-opacity hover:opacity-60"
        >
          Back to Projects
        </Link>

        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              2024 UNSW Animation & Moving Image Festival
            </p>
            <h1 className="font-display text-5xl font-bold leading-none tracking-tight md:text-7xl">
              WEB DESIGN
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-graphite">
            A temporary case study for a designer-led floral studio. The project
            explores a soft visual identity, flexible typography, and a digital
            launch system for seasonal campaigns.
          </p>
        </div>

        <div className="my-14 aspect-[16/9] overflow-hidden rounded-lg bg-mist">
          <Image
            src={`${basePath}/project1.png`}
            alt="WEB DESIGN project preview"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <section>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.08em]">
              Role
            </h2>
            <p className="leading-relaxed text-graphite">
              Visual direction, logo system, art direction, and responsive web
              concept.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.08em]">
              Goal
            </h2>
            <p className="leading-relaxed text-graphite">
              Create a warm and editorial brand presence that feels personal
              without losing clarity.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.08em]">
              Outcome
            </h2>
            <p className="leading-relaxed text-graphite">
              A flexible identity kit with campaign layouts, product cards, and
              a refined homepage direction.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
