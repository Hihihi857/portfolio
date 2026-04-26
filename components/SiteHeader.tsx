"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/aboutme", label: "About Me" },
  { href: "/projects", label: "Projects" },
];

export function SiteHeader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const textColor = useTransform(
    scrollYProgress,
    [0.65, 0.8],
    ["#000000", "#ffffff"],
  );

  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isHome) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome]);

  return (
    <motion.header
      ref={containerRef}
      className={`fixed inset-x-0 top-0 z-50 flex h-[100px] items-center px-5 md:px-8 transition-transform duration-300 ease-out ${
        isHome
          ? "bg-transparent translate-y-0"
          : `bg-white ${isVisible ? "translate-y-0" : "-translate-y-full"}`
      }`}
    >
      <motion.nav
        style={{ color: isHome ? textColor : "#000000" }}
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Yejee portfolio home"
          className="flex items-center transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          <Image
            src="/logo.png"
            alt="Yejee"
            width={140}
            height={50}
            priority
            className="h-auto w-[140px] object-contain"
          />
        </Link>

        <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.02em] md:gap-8 md:text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}
