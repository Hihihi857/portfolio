export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-paper px-5 py-20 text-ink md:px-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <a
            href="mailto:hello@example.com"
            className="border-b border-ink transition-opacity hover:opacity-55"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="border-b border-ink transition-opacity hover:opacity-55"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-center text-xs text-ink/60">Yejee Seo @2026</div>
      </div>
    </footer>
  );
}
