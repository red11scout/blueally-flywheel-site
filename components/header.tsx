"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Flywheel } from "@/components/flywheel";
import { ThemeToggle } from "@/components/theme";

export const SECTIONS = [
  { id: "top", label: "Top" },
  { id: "stakes", label: "The honest stakes" },
  { id: "failures", label: "Why programs die" },
  { id: "method", label: "The seven steps" },
  { id: "verbs", label: "Name the verb" },
  { id: "matrix", label: "Value-Readiness Matrix" },
  { id: "epoch", label: "EPOCH · human in the loop" },
  { id: "workshop", label: "The workshop" },
  { id: "proof", label: "The payoff" },
  { id: "platform", label: "The operating system" },
  { id: "guides", label: "AI Field Guides" },
];

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
  const wheelRef = useRef<HTMLSpanElement>(null);

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

  // Escape closes; page scroll locks only while the full-screen sheet
  // (below lg) is the active rendering.
  useEffect(() => {
    if (!menuOpen) return;
    const small = matchMedia("(max-width: 1023px)").matches;
    if (small) document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    addEventListener("keydown", onKey);
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
            <ThemeToggle />
            <a
              href="#action"
              className="hidden rounded-full bg-bright px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brightlift sm:block"
            >
              Book the workshop
            </a>
            {/* The wheel is the map and the key: it turns with your scroll,
                and it opens the way to every section. */}
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                menuOpen
                  ? "border-bright bg-bright/15"
                  : "border-white/20 hover:border-bright/60"
              }`}
            >
              <span
                ref={wheelRef}
                className="block h-6 w-6 will-change-transform"
                aria-hidden
              >
                <Flywheel state="hero" className="h-6 w-6" />
              </span>
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

      {/* Navigation panel: a SIBLING of the header (its backdrop-filter would
          otherwise become the containing block for this fixed element and
          collapse it). Full-screen sheet below lg; dropdown panel above. */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-30 hidden lg:block"
            aria-hidden
            onClick={() => setMenuOpen(false)}
          />
          <nav
            aria-label="All sections"
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-ink/95 px-6 pb-8 pt-4 backdrop-blur-xl lg:inset-x-auto lg:bottom-auto lg:right-6 lg:top-[4.75rem] lg:max-h-[calc(100svh-6rem)] lg:w-80 lg:rounded-2xl lg:border lg:border-white/15 lg:px-3 lg:py-3 lg:shadow-2xl"
          >
            <ul className="flex flex-1 flex-col lg:flex-none">
              {SECTIONS.map((s) => (
                <li key={s.id} className="border-b border-white/10 lg:border-0">
                  <a
                    href={`#${s.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-xl font-light text-lblue transition-colors hover:text-white lg:rounded-lg lg:px-4 lg:py-2 lg:text-sm lg:font-normal lg:hover:bg-white/10"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li className="hidden lg:block">
                <a
                  href="#action"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-2 text-sm font-bold text-bright hover:bg-white/10"
                >
                  Book the workshop
                </a>
              </li>
            </ul>
            <a
              href="#action"
              onClick={() => setMenuOpen(false)}
              className="mt-6 rounded-full bg-bright px-8 py-4 text-center text-base font-bold text-white lg:hidden"
            >
              Book the workshop
            </a>
          </nav>
        </>
      )}
    </>
  );
}
