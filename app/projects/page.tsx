import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  thumbnailClassName?: string;
  thumbnailText?: string;
  thumbnailImage?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects: Project[] = [
  {
    id: "1",
    title: "WEB DESIGN",
    description:
      "A designer project for a floral studio identity, campaign system, and refined digital presence.",
    slug: "projectone",
    category: "2024 UNSW Animation & Moving Image Festival",
    thumbnailImage: `${basePath}/project1.png`,
  },
  {
    id: "2",
    title: "ANDLE Brand Website",
    description:
      "A concept-driven e-commerce website designed to communicate a calm and refined brand identity. The project focuses on clean layouts, intuitive navigation, and a seamless user experience.",
    slug: "projecttwo",
    category: "E-COMMERCE WEB DESIGN",
    thumbnailImage: `${basePath}/project2.png`,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/${project.slug}`} className="group block w-full space-y-6">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-[4px] bg-white">
        {project.thumbnailImage ? (
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ width: '100%', height: 'auto' }}
            className="block object-contain transition-transform duration-[600ms] ease-out group-hover:scale-[1.015]"
          />
        ) : (
          <div className="flex aspect-[4/3] w-full items-center justify-center bg-mist px-8 text-center transition-transform duration-[600ms] ease-out group-hover:scale-[1.015]">
            <p className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              {project.thumbnailText}
            </p>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/0 p-6 transition-colors duration-[400ms] ease-out group-hover:bg-black/40 md:p-8">
          <div className="flex flex-col items-center text-center translate-y-4 opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <p className="mb-4 text-xs font-medium text-white/90 max-w-[85%] line-clamp-2 md:text-sm">
              {project.description}
            </p>
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white md:text-sm">
              View Project <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-2 pt-2">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-graphite">
          {project.category}
        </p>
        <h3 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

export default function Works() {
  return (
    <main className="pt-[160px] pb-40">
      <section className="bg-white px-5 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* SECTION TITLE */}
          <div className="mb-16 md:mb-24">
            <h1 className="font-display text-5xl font-bold tracking-tight text-ink md:text-7xl">
              Selected Projects
            </h1>
          </div>

          {/* 2-COLUMN GRID */}
          <div className="grid gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
