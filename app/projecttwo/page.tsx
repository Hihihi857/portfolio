import Link from "next/link";

export default function ProjectTwoPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-28 text-ink md:px-8">
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
              Product Design
            </p>
            <h1 className="font-display text-5xl font-bold leading-none tracking-tight md:text-7xl">
              Orbit Notes
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-graphite">
            A temporary project overview for a focused note-taking app designed
            for creative teams. The concept emphasizes calm workflows, fast
            capture, and clear project organization.
          </p>
        </div>

        <div className="my-14 aspect-[16/9] overflow-hidden rounded-lg bg-mist">
          <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#111111_0%,#8fb7c7_52%,#f4f4f0_100%)] px-8 text-center">
            <p className="max-w-xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Focused tools for clear creative work
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <section>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.08em]">
              Role
            </h2>
            <p className="leading-relaxed text-graphite">
              UX research, interaction design, interface system, and prototype
              direction.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.08em]">
              Goal
            </h2>
            <p className="leading-relaxed text-graphite">
              Design a simple workspace where ideas, references, and tasks stay
              connected.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.08em]">
              Outcome
            </h2>
            <p className="leading-relaxed text-graphite">
              A polished product concept with core flows, reusable components,
              and a clean visual language.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
