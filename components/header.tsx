"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Flywheel } from "@/components/flywheel";
import { ThemeToggle } from "@/components/theme";

const PHASES = [
  { id: "context", num: "01", label: "Context", nav: "Stakes" },
  { id: "opportunity", num: "02", label: "Opportunity", nav: "Value" },
  { id: "approach", num: "03", label: "Approach", nav: "Method" },
  { id: "impact", num: "04", label: "Impact", nav: "Proof" },
  { id: "action", num: "05", label: "Action", nav: "Next step" },
];

export function Header() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(PHASES.findIndex((p) => p.id === e.target.id));
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    for (const p of PHASES) {
      const el = document.getElementById(p.id);
      if (el) io.observe(el);
    }
    const top = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(-1);
      },
      { rootMargin: "0px" },
    );
    const sentinel = document.getElementById("top-sentinel");
    if (sentinel) top.observe(sentinel);
    return () => {
      io.disconnect();
      top.disconnect();
    };
  }, []);

  const phase = active >= 0 ? PHASES[active] : null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-5 px-5 sm:px-8">
        <a href="#top" aria-label="BlueAlly, back to top" className="shrink-0">
          <Image
            src="/brand/BlueAlly_Logo_White.png"
            alt="BlueAlly"
            width={116}
            height={36}
            priority
          />
        </a>

        <nav aria-label="Phases" className="ml-auto hidden items-center gap-6 lg:flex">
          {PHASES.map((p, i) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className={`text-sm transition-colors hover:text-white ${
                i === active ? "font-bold text-white" : "text-lblue/80"
              }`}
            >
              {p.nav}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-6">
          <div className="flex items-center gap-2" aria-hidden>
            <Flywheel state="nav" blades={5} active={active} className="h-8 w-8" />
            <span className="hidden w-30 text-[10px] font-bold uppercase tracking-[0.12em] text-lblue/80 md:block">
              {phase ? `${phase.num} · ${phase.label}` : "The flywheel"}
            </span>
          </div>
          <ThemeToggle />
          <a
            href="#action"
            className="hidden rounded-full bg-bright px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brightlift sm:block"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
