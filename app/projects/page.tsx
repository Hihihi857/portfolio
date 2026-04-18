import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  thumbnailClassName: string;
  thumbnailText: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Studio Bloom",
    description:
      "A designer project for a floral studio identity, campaign system, and refined digital presence.",
    slug: "projectone",
    category: "Brand Identity",
    thumbnailClassName:
      "bg-[linear-gradient(135deg,#f7f7f4_0%,#d9e7df_48%,#111111_100%)]",
    thumbnailText: "Studio Bloom",
  },
  {
    id: "2",
    title: "Orbit Notes",
    description:
      "A product design concept for calm note-taking, project organization, and team workflows.",
    slug: "projecttwo",
    category: "Product Design",
    thumbnailClassName:
      "bg-[linear-gradient(135deg,#111111_0%,#8fb7c7_52%,#f4f4f0_100%)]",
    thumbnailText: "Orbit Notes",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/${project.slug}`}
      className="group block"
    >
      <article className="space-y-4">
        <div
          className={`aspect-[4/3] overflow-hidden rounded-lg ${project.thumbnailClassName}`}
        >
          <div className="flex h-full items-center justify-center px-8 text-center transition-transform duration-300 group-hover:scale-105">
            <p className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              {project.thumbnailText}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            {project.category}
          </p>
          <h3 className="text-xl font-semibold leading-tight text-gray-900">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            {project.description}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default function Works() {
  return (
    <main>
      <section className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Selected Work
            </h1>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
