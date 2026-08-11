import Image from "next/image";
import { Flywheel } from "@/components/flywheel";
import { Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const ARTIFACTS = [
  "AI strategy brief",
  "Prioritized portfolio",
  "Business value map",
  "Value-Readiness Matrix",
  "Graded readiness assessment",
  "Workflows and architecture",
  "90-day roadmap",
];

export function Cta() {
  return (
    // The one Bright full-bleed moment on the site
    <div className="g-illum-deep relative overflow-hidden grain">
      <div className="ink-blob absolute -bottom-24 -right-16 h-96 w-96" aria-hidden />
      <Shell className="relative py-24 sm:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] text-white">
            Book the call.
          </h2>
          <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-white sm:text-xl">
            Thirty minutes. We bring the method. You bring the friction that
            hurts most. You leave with a path from ambition to a funded plan.
          </p>
        </Reveal>

        <Reveal className="mt-10 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">
            The two-day workshop leaves you with seven artifacts
          </p>
          <ul className="mt-4 grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {ARTIFACTS.map((a) => (
              <li key={a} className="flex items-baseline gap-2.5 text-base text-white">
                <span className="font-bold" aria-hidden>
                  ✓
                </span>
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-11 flex flex-wrap items-center gap-4">
          <a
            href="tel:+18008865369"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy transition-colors hover:bg-lblue"
          >
            Call (800) 886-5369
          </a>
          <a
            href="https://blueally.ai"
            className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-white"
          >
            Visit blueally.ai
          </a>
        </Reveal>
      </Shell>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* The closer returns the wheel: the cycle continues after the room empties */}
      <div className="pointer-events-none absolute -bottom-24 -right-20 w-[26rem]" aria-hidden>
        <Flywheel state="ghost" onDark className="w-full" />
      </div>

      <Shell className="relative py-16 sm:py-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-lblue/60">
          BlueAlly | AI Practice | ©2026
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/brand/BlueAlly_Logo_White.png"
              alt="BlueAlly"
              width={129}
              height={40}
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-lblue/80">
              Conquer Complexity. Transforming IT challenges into opportunities
              for innovation, resilience, and growth.
            </p>
            <p className="mt-5 text-sm text-lblue/70">
              Prominence Tower, Atlanta, GA
              <br />
              <a href="tel:+18008865369" className="hover:text-white">
                (800) 886-5369
              </a>
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-lblue/60">
              Governed and audited
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-lblue/80">
              <li>SOC 2</li>
              <li>ISO/IEC 42001</li>
              <li>NIST AI RMF mapped</li>
              <li>Model cards and lineage</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-lblue/60">
              Partners
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-lblue/80">
              <li>NVIDIA · Microsoft · AWS</li>
              <li>Cisco · HPE</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="max-w-2xl text-xs leading-relaxed text-lblue/50">
            A concept site in the BlueAlly Flywheel design system. Results
            cited from BlueAlly engagements; research from MIT NANDA, BCG, and
            McKinsey. © 2026 BlueAlly. All rights reserved.
          </p>
        </div>
      </Shell>
    </footer>
  );
}
