import Link from "next/link";
import Image from "next/image";

function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`flex w-full items-start justify-center ${className}`}>
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full object-contain rounded-[4px] shadow-[0_2px_14px_rgb(0,0,0,0.06)] transition-opacity duration-[250ms] ease-out hover:opacity-95"
      />
    </div>
  );
}

export default function ProjectTwoPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="min-h-screen bg-paper px-5 pt-[140px] text-ink md:px-8">
      <article className="mx-auto max-w-6xl pb-24">
        {/* Top Back Link */}
        <Link
          href="/projects"
          className="mb-16 inline-block text-sm font-semibold uppercase tracking-[0.02em] text-graphite transition-opacity hover:opacity-60"
        >
          Back to Projects
        </Link>

        {/* HERO SECTION */}
        <div className="mb-32 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              E-COMMERCE WEB DESIGN
            </p>
            <h1 className="mb-8 font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              ANDLE<br />
              <span className="text-graphite">Brand Website</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-graphite">
              A concept-driven e-commerce website designed to communicate a calm and refined candle brand identity. The project focuses on clean layouts, intuitive navigation, product-focused imagery, and a seamless shopping experience.
            </p>
            <a
              href="https://anniebakkr.wixstudio.com/my-site-6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-ink px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
            >
              View Live Website
            </a>
          </div>
          <ProjectImage src={`${basePath}/andle1.png`} alt="ANDLE Hero" className="w-full" />
        </div>

        {/* IMAGE LAYOUT (MAIN PART) */}
        <div className="mx-auto w-full max-w-[1100px] mb-32 flex flex-col gap-[72px]">
          {/* SECTION 1 */}
          <div className="flex w-full justify-center">
            <ProjectImage src={`${basePath}/andle1.png`} alt="ANDLE Full Homepage" className="w-full max-w-[900px]" />
          </div>

          {/* SECTION 2 */}
          <div className="grid md:grid-cols-2 gap-[32px] items-start">
            <ProjectImage src={`${basePath}/andle2.png`} alt="Category Page" className="w-full" />
            <ProjectImage src={`${basePath}/andle3.png`} alt="Product Listing" className="w-full" />
          </div>

          {/* SECTION 3 */}
          <div className="grid md:grid-cols-2 gap-[32px] items-start">
            <ProjectImage src={`${basePath}/andle4.png`} alt="Product Detail" className="w-full" />
            <ProjectImage src={`${basePath}/andle5.png`} alt="Cart and Checkout" className="w-full" />
          </div>

          {/* SECTION 4 */}
          <div className="flex w-full justify-center">
            <ProjectImage src={`${basePath}/andle6.png`} alt="Contact Form" className="w-full max-w-[520px]" />
          </div>
        </div>

        {/* ROLE / GOAL / OUTCOME */}
        <div className="grid gap-10 md:grid-cols-3 py-24 border-t border-mist">
          <section>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              Role
            </h2>
            <p className="leading-relaxed text-ink text-lg">
              Web design, UI layout, visual direction, interaction planning, and e-commerce flow design.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              Goal
            </h2>
            <p className="leading-relaxed text-ink text-lg">
              To create a calm and refined shopping experience that reflects a premium candle brand while maintaining clarity and usability.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              Outcome
            </h2>
            <p className="leading-relaxed text-ink text-lg">
              A complete e-commerce concept including homepage, product browsing, product detail, cart interaction, and contact system.
            </p>
          </section>
        </div>

        {/* KEY FEATURES */}
        <div className="py-24 border-t border-mist grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="font-display text-3xl font-bold tracking-tight">Key Features</h2>
          </div>
          <div className="md:col-span-2">
            <ul className="list-inside list-disc space-y-4 text-lg leading-relaxed text-ink">
              <li>Minimal black and cream visual identity</li>
              <li>Product-first layout and imagery</li>
              <li>Clean and intuitive navigation system</li>
              <li>Detailed product page with gallery and controls</li>
              <li>Cart and checkout interaction design</li>
              <li>Contact and user enquiry flow</li>
              <li>Consistent typography and spacing system</li>
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
              The design direction focuses on simplicity and emotional calm. A dark hero section builds atmosphere and contrast, while soft neutral backgrounds create a quiet browsing experience. Each layout prioritises clarity, allowing users to focus on product details without distraction. The overall system balances visual elegance with usability.
            </p>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="mt-16 py-32 flex flex-col items-center text-center border-t border-mist">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-12">Explore the Project</h2>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="https://anniebakkr.wixstudio.com/my-site-6"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
            >
              View Live Website →
            </a>
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
