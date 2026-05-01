import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description:
      "A brief description of the first project showcasing innovative design and functionality.",
    imageUrl: "/placeholder-project-1.jpg",
    slug: "project-one",
  },
  {
    id: "2",
    title: "Project Two",
    description:
      "An elegant solution for modern challenges, focusing on user experience and aesthetics.",
    imageUrl: "/placeholder-project-2.jpg",
    slug: "project-two",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <article className="space-y-4">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Work
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

export function ProjectShowcase() {
  return (
    <section className="bg-white px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Selected Work
          </h2>
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
  );
}
