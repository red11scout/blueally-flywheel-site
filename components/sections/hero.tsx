import { Flywheel } from "@/components/flywheel";
import { Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy grain">
      {/* Hero Flywheel: right-anchored, bleeding off the edge, mid-spin.
          Text stays out of the wheel's field (motif law). */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[30%] -top-24 w-[88vw] max-w-130 opacity-80 sm:-right-[12%] sm:top-1/2 sm:w-[58vw] sm:max-w-225 sm:-translate-y-1/2 sm:opacity-100"
      >
        <Flywheel state="hero" spin className="w-full" />
      </div>

      <Shell className="relative flex min-h-[92svh] flex-col justify-end pb-20 pt-44 sm:justify-center sm:pb-28 sm:pt-40">
        <Reveal cascade className="max-w-2xl">
          <p>
            <Pill>BlueAlly · Enterprise AI</Pill>
          </p>
          <h1 className="mt-6 text-[clamp(2.9rem,7vw,5.2rem)] font-light leading-[1.04] tracking-[-0.015em] [text-wrap:balance]">
            <span className="block text-bright [text-wrap:balance]">Most AI never ships.</span>
            <span className="block text-white">Ours does.</span>
          </h1>
          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-lblue/90 sm:text-xl">
            Ninety-five percent of enterprise AI stalls before production. The
            gap is not ambition. It is method. We bring the method. The work
            ships, and it holds.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#action"
              className="rounded-full bg-bright px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brightlift"
            >
              Book a call
            </a>
            <a
              href="#impact"
              className="rounded-full border border-lblue/40 px-7 py-3.5 text-sm font-bold text-lblue transition-colors hover:border-bright hover:text-white"
            >
              See the proof
            </a>
          </div>
          <p className="mt-12 text-[13px] text-lblue/70">
            200+ enterprise deployments&ensp;·&ensp;NVIDIA Partner&ensp;·&ensp;SOC
            2&ensp;·&ensp;ISO/IEC 42001
          </p>
        </Reveal>
      </Shell>
    </section>
  );
}
