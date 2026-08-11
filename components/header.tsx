"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Flywheel } from "@/components/flywheel";
import { ThemeToggle } from "@/components/theme";
import { SECTIONS } from "@/components/quicknav";

const DESKTOP_LINKS = [
  { id: "stakes", label: "The stakes" },
  { id: "method", label: "Method" },
  { id: "matrix", label: "Matrix" },
  { id: "workshop", label: "Workshop" },
  { id: "proof", label: "Proof" },
  { id: "guides", label: "Field guides" },
];

export function Header() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        const p = max > 0 ? Math.min(1, scrollY / max) : 0;
        setProgress(p);
        if (wheelRef.current) {
          wheelRef.current.style.transform = `rotate(${p * 360}deg)`;
        }
      });
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Lock page scroll while the mobile menu sheet is open
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[88rem] items-center gap-4 px-5 sm:px-8">
        <a href="#top" aria-label="BlueAlly, back to top" className="shrink-0">
          <Image
            src="/brand/BlueAlly_Logo_White.png"
            alt="BlueAlly"
            width={116}
            height={36}
            priority
          />
        </a>

        <nav aria-label="Sections" className="ml-auto hidden items-center gap-6 lg:flex">
          {DESKTOP_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-lblue/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-8">
          {/* The wheel turns with the page: scroll progress made physical */}
          <div ref={wheelRef} className="hidden h-8 w-8 will-change-transform sm:block" aria-hidden>
            <Flywheel state="hero" className="h-8 w-8" />
          </div>
          <ThemeToggle />
          <a
            href="#action"
            className="hidden rounded-full bg-bright px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brightlift sm:block"
          >
            Book the workshop
          </a>
          {/* Mobile menu */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/20 lg:hidden"
          >
            <span
              className={`h-px w-4 bg-lblue transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              } motion-reduce:transition-none`}
            />
            <span
              className={`h-px w-4 bg-lblue transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              } motion-reduce:transition-none`}
            />
          </button>
        </div>
      </div>

      {/* Scroll progress: a bright thread, not a slide counter */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-bright"
        style={{ transform: `scaleX(${progress})` }}
      />

    </header>

    {/* Mobile sheet: a SIBLING of the header — the header's backdrop-filter
        would otherwise become the containing block for this fixed panel and
        collapse it to a sliver (Safari and Chrome both). */}
    {menuOpen && (
      <nav
        aria-label="All sections"
        className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-ink/95 px-6 pb-8 pt-6 backdrop-blur-xl lg:hidden"
      >
        <ul className="flex flex-1 flex-col">
          {SECTIONS.filter((s) => s.id !== "action").map((s) => (
            <li key={s.id} className="border-b border-white/10">
              <a
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="block py-4 text-xl font-light text-lblue transition-colors hover:text-white"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#action"
          onClick={() => setMenuOpen(false)}
          className="mt-6 rounded-full bg-bright px-8 py-4 text-center text-base font-bold text-white"
        >
          Book the workshop
        </a>
      </nav>
    )}
    </>
  );
}
