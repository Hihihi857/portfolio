import Link from "next/link";

function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`flex w-full justify-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full object-contain rounded-[8px] shadow-[0_2px_14px_rgb(0,0,0,0.06)]"
      />
    </div>
  );
}

function MobileImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`flex w-full justify-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className="block h-[650px] w-full object-cover object-top rounded-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
      />
    </div>
  );
}

export default function ProjectOnePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="min-h-screen bg-paper px-5 pt-[140px] text-ink md:px-8 pb-32">
      <article className="mx-auto w-full max-w-[1100px]">
        {/* Top Back Link */}
        <Link
          href="/projects"
          className="mb-16 inline-block text-sm font-semibold uppercase tracking-[0.02em] text-graphite transition-opacity hover:opacity-60"
        >
          Back to Projects
        </Link>

        {/* HERO SECTION */}
        <div className="mb-32 grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              2024 UNSW ANIMATION & MOVING IMAGE FESTIVAL
            </p>
            <h1 className="mb-8 font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              WEB DESIGN
            </h1>
          </div>
          <div className="flex flex-col items-start pt-2">
            <p className="mb-6 text-lg leading-relaxed text-graphite max-w-lg">
              This project presents a responsive web design concept for the 2024 UNSW Animation & Moving Image Festival. The design focuses on showcasing student works clearly across desktop and mobile, using a bold dark interface, strong visual hierarchy, and accessible navigation.
            </p>
            <p className="text-lg leading-relaxed text-graphite max-w-lg">
              The website was designed to promote student screen-based works and support easy browsing across animation, 3D visualisation, interactive art, installation, moving image, and sound. The layout balances exhibition-style storytelling with practical navigation for users exploring artworks and artist statements.
            </p>
          </div>
        </div>

        {/* IMAGE GALLERY STRUCTURE */}
        <div className="mb-32 flex flex-col gap-[80px]">
          {/* DESKTOP SECTION */}
          <div className="flex w-full flex-col items-center gap-12">
            <h2 className="text-xl font-bold uppercase tracking-[0.1em] text-[#999]">Desktop Experience</h2>
            
            <div className="flex w-full flex-col items-center gap-6">
              <ProjectImage src={`${basePath}/unsw1.png`} alt="Desktop Experience" className="max-w-[1000px]" />
              <p className="text-sm text-[#666] leading-[1.6] text-center max-w-[600px]">
                Desktop artwork page showing the hero image, student artwork section, artist statement, and artist introduction.
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-6">
              <ProjectImage src={`${basePath}/unsw2.png`} alt="Festival Overview" className="max-w-[1000px]" />
              <p className="text-sm text-[#666] leading-[1.6] text-center max-w-[600px]">
                Festival overview page showing the showreel, artwork categories, expandable sections, and student project listings.
              </p>
            </div>
          </div>

          {/* MOBILE SECTION */}
          <div className="flex w-full flex-col items-center gap-8">
            <h2 className="text-xl font-bold uppercase tracking-[0.1em] text-[#999]">Mobile Experience</h2>
            
            <div className="mx-auto grid w-full max-w-[900px] grid-cols-2 items-start gap-[40px]">
              <div className="flex w-full flex-col">
                <span className="mb-2 text-[12px] font-bold uppercase tracking-[1.5px] text-[#999]">Artwork Page</span>
                <MobileImage src={`${basePath}/unsw3-top.png`} alt="Artwork Page" />
              </div>
              <div className="flex w-full flex-col">
                <span className="mb-2 text-[12px] font-bold uppercase tracking-[1.5px] text-[#999]">Interactive Artwork Page</span>
                <MobileImage src={`${basePath}/unsw4-top.png`} alt="Interactive Artwork Page" />
              </div>
            </div>
          </div>
        </div>

        {/* ROLE / GOAL / OUTCOME */}
        <div className="grid gap-10 md:grid-cols-3 py-24 border-t border-mist">
          <section>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              Role
            </h2>
            <p className="leading-relaxed text-ink text-lg">
              Web layout design, responsive design, visual hierarchy, content organisation, and user experience refinement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              Goal
            </h2>
            <p className="leading-relaxed text-ink text-lg">
              To create a clear and engaging festival website that helps users browse student artworks, understand each project, and move smoothly between desktop and mobile experiences.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              Outcome
            </h2>
            <p className="leading-relaxed text-ink text-lg">
              A responsive exhibition-style website that presents student work through strong imagery, structured sections, mobile-friendly layouts, and consistent navigation.
            </p>
          </section>
        </div>

        {/* KEY DESIGN FEATURES */}
        <div className="py-24 border-t border-mist grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="font-display text-3xl font-bold tracking-tight">Key Design Features</h2>
          </div>
          <div className="md:col-span-2">
            <ul className="list-inside list-disc space-y-4 text-lg leading-relaxed text-ink">
              <li>Dark exhibition-style visual direction</li>
              <li>Yellow highlight colour for titles and active states</li>
              <li>Responsive desktop and mobile layouts</li>
              <li>Clear artwork categories and expandable sections</li>
              <li>Student artwork pages with hero images, media, artist statements, and artist introductions</li>
              <li>Consistent navigation across pages</li>
              <li>Strong contrast for readability and visual impact</li>
            </ul>
          </div>
        </div>

        {/* DESIGN RATIONALE */}
        <div className="py-24 border-t border-mist grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="font-display text-3xl font-bold tracking-tight">Design Rationale</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-xl leading-[1.8] tracking-[-0.015em] text-ink">
              The visual direction uses a dark background to create an exhibition-like viewing environment, allowing student artworks to stand out with strong contrast. Yellow accent typography helps guide attention and creates a clear relationship between headings, navigation states, and project titles. The layout prioritises clarity, making it easy for users to move from the festival overview into individual artwork pages. Mobile responsiveness was important because users may access the site during the exhibition, so the design needed to remain readable, structured, and easy to navigate on smaller screens.
            </p>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 py-32 flex flex-col items-center text-center border-t border-mist">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-12">Explore the Project</h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/projects"
              className="rounded-full border border-mist bg-white px-10 py-4 text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:bg-mist"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
