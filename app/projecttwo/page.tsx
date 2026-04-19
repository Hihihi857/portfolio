import Link from "next/link";
import Image from "next/image";

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
              E-COMMERCE WEB DESIGN
            </p>
            <h1 className="font-display text-5xl font-bold leading-none tracking-tight md:text-7xl">
              ANDLE
              <span className="block">Brand Website</span>
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-graphite">
            A temporary project overview for a focused note-taking app designed
            for creative teams. The concept emphasizes calm workflows, fast
            capture, and clear project organization.
          </p>
        </div>

        <div className="my-14 aspect-[16/9] overflow-hidden rounded-lg bg-mist">
          <Image
            src="/project2.png"
            alt="ANDLE Brand Website project preview"
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
