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
      "A product design concept for calm note-taking, project organization, and team workflows.",
    slug: "projecttwo",
    category: "E-COMMERCE WEB DESIGN",
    thumbnailImage: `${basePath}/project2.png`,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/${project.slug}`}
      className="group block"
    >
      <article className="space-y-4">
        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-mist">
          {project.thumbnailImage ? (
            <Image
              src={project.thumbnailImage}
              alt={project.title}
              width={1200}
              height={900}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              className={`flex h-full items-center justify-center px-8 text-center transition-transform duration-300 group-hover:scale-105 ${project.thumbnailClassName}`}
            >
              <p className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                {project.thumbnailText}
              </p>
            </div>
          )}
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
    <main className="pt-[100px]">
      <section className="bg-white px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-4xl">
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
