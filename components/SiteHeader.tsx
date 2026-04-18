import Link from "next/link";

const navItems = [
  { href: "/aboutme", label: "About Me" },
  { href: "/projects", label: "Projects" },
];

export function SiteHeader() {
  return (
    <header className="px-5 py-5 mix-blend-difference md:px-8">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between text-white"
      >
        <Link
          href="/"
          aria-label="Yejee portfolio home"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-ink"
        >
          YJ
        </Link>

        <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.02em] md:gap-8 md:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
