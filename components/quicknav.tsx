"use client";

import { useEffect, useState } from "react";
import { Flywheel } from "@/components/flywheel";

const LINKS = [
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
  { id: "action", label: "Book the workshop" },
];

export function QuickNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}
      <nav
        aria-label="Quick navigation"
        className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8"
      >
        {open && (
          <div className="w-64 overflow-hidden rounded-2xl border border-white/15 bg-ink/90 p-2 shadow-2xl backdrop-blur-md">
            <ul className="flex max-h-[min(28rem,70svh)] flex-col overflow-y-auto">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white ${
                      l.id === "action" ? "font-bold text-bright" : "text-lblue/90"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close quick navigation" : "Open quick navigation"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-13 w-13 items-center justify-center rounded-full border border-white/20 bg-ink/85 shadow-xl backdrop-blur-md transition-transform hover:scale-105"
        >
          <span
            className={`block h-7 w-7 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
              open ? "rotate-[120deg]" : ""
            } motion-reduce:transition-none`}
          >
            <Flywheel state="hero" className="h-7 w-7" />
          </span>
        </button>
      </nav>
    </>
  );
}
