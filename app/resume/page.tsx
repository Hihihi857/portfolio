const resumeFileName = "YejeeSeo_Resume2.pdf";

export default function ResumePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const resumePath = `${basePath}/${resumeFileName}`;

  return (
    <main className="min-h-screen bg-paper px-5 pt-[140px] text-ink md:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.08em] text-graphite">
              Resume
            </p>
            <h1 className="font-display text-5xl font-bold leading-none tracking-tight md:text-7xl">
              Yejee Seo
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={resumePath}
              download={resumeFileName}
              className="rounded border border-ink bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              Download PDF
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-ink px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              Open PDF
            </a>
          </div>
        </div>

        <div className="h-[75vh] overflow-hidden rounded-lg border border-ink/10 bg-mist">
          <iframe
            src={resumePath}
            title="Yejee Seo Resume PDF"
            className="h-full w-full"
          />
        </div>
      </section>
    </main>
  );
}
