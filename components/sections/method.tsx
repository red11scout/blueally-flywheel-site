"use client";

import { useEffect, useRef, useState } from "react";
import { Flywheel } from "@/components/flywheel";
import { Headline, Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const STEPS = [
  { n: 1, title: "Anchor to strategy", body: "Business drivers and OKRs. Signed at the top before scope is set, so the work has a sponsor from day one." },
  { n: 2, title: "Inventory functions", body: "Walk the floor. List the work as it is actually done, and name where the team is thin." },
  { n: 3, title: "Set KPIs", body: "Tied to benchmarks. Agree on what better means, in numbers, before anyone writes code." },
  { n: 4, title: "Map friction", body: "Delays, errors, rework. Find where the hours and the margin quietly leak away." },
  { n: 5, title: "Match primitives", body: "The right capability for the verb. Integration assumed from the start, never bolted on." },
  { n: 6, title: "Quantify impact", body: "Revenue, cost, cash, and risk. Dollars on the table early, with the math shown." },
  { n: 7, title: "Score and rank", body: "Value, feasibility, fit. Three use cases ship. The rest wait their turn on the wheel." },
];

export function Method() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll("[data-step]");
    if (!items?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.step));
          }
        }
      },
      { rootMargin: "-42% 0px -50% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="method" className="relative">
      <Shell className="pb-8 pt-24 sm:pt-32">
        <Reveal className="max-w-3xl">
          <Pill>The method</Pill>
          <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
            Seven steps turn a challenge into measurable value.
          </Headline>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
            No mystery, no magic. Every step ties to a real objective. No tech
            looking for a problem. Scroll, and watch the wheel turn.
          </p>
        </Reveal>
      </Shell>

      <Shell className="pb-24 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* The wheel: sticky, turning one blade per step */}
          <div className="hidden lg:block">
            <div className="sticky top-16 flex h-[calc(100svh-4rem)] flex-col items-center justify-center">
              <div
                className="w-full max-w-md transition-transform duration-700 will-change-transform [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                style={{ transform: `rotate(${-active * (360 / 7)}deg)` }}
              >
                <Flywheel state="nav" blades={7} active={active} onDark={false} className="w-full" />
              </div>
              <p aria-hidden className="mt-8 flex items-baseline gap-3">
                <span className="text-6xl font-light text-bright">{active + 1}</span>
                <span className="text-lg text-soft">/ 7 · {STEPS[active].title}</span>
              </p>
            </div>
          </div>

          {/* Mobile: compact wheel pinned above the list */}
          <div className="sticky top-16 z-10 -mx-5 bg-surface/85 px-5 py-3 backdrop-blur-md lg:hidden">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0">
                <Flywheel state="nav" blades={7} active={active} onDark={false} className="h-12 w-12" />
              </div>
              <p className="text-sm font-bold text-strong">
                Step {active + 1} of 7 · {STEPS[active].title}
              </p>
            </div>
          </div>

          <ol ref={listRef} className="flex flex-col">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                data-step={i}
                className={`flex min-h-[34vh] flex-col justify-center border-t border-edge py-10 transition-opacity duration-500 lg:min-h-[44vh] ${
                  i === active ? "opacity-100" : "opacity-40"
                } motion-reduce:opacity-100`}
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-bright">
                  Step {s.n}
                </p>
                <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-tight text-strong">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-soft">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Shell>
    </section>
  );
}
