"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Flywheel } from "@/components/flywheel";
import { ThemeToggle } from "@/components/theme";

const LINKS = [
  { id: "stakes", label: "The stakes" },
  { id: "method", label: "Method" },
  { id: "matrix", label: "Matrix" },
  { id: "workshop", label: "Workshop" },
  { id: "proof", label: "Proof" },
  { id: "guides", label: "Field guides" },
];

export function Header() {
  const [progress, setProgress] = useState(0);
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[88rem] items-center gap-6 px-5 sm:px-8">
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
          {LINKS.map((l) => (
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
          <div ref={wheelRef} className="h-8 w-8 will-change-transform" aria-hidden>
            <Flywheel state="hero" className="h-8 w-8" />
          </div>
          <ThemeToggle />
          <a
            href="#action"
            className="hidden rounded-full bg-bright px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brightlift sm:block"
          >
            Book the workshop
          </a>
        </div>
      </div>
      {/* Scroll progress: a bright thread, not a slide counter */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-bright"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
