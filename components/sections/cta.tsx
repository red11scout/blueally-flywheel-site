import Image from "next/image";
import { Flywheel } from "@/components/flywheel";
import { Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const STEPS = [
  { n: "01", title: "Scope the workshop", body: "Pick the functions where friction hurts most.", owner: "Sponsor + BlueAlly" },
  { n: "02", title: "Pick the people", body: "The doers, plus a sponsor who can clear the path.", owner: "You" },
  { n: "03", title: "Reserve two days", body: "We facilitate; you decide. Target: within 30 days.", owner: "BlueAlly" },
];

export function Cta() {
  return (
    <section id="action" className="g-illum-deep relative overflow-hidden grain">
      {/* The wheel, not a blob: navy ghost mid-spin, bleeding off the corner */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-32 w-[36rem] rotate-12 sm:-bottom-48 sm:w-[44rem]"
        aria-hidden
      >
        <Flywheel state="ghost" onDark={false} strength={0.24} className="w-full" />
      </div>
      <Shell className="relative py-24 sm:py-36">
        <Reveal className="max-w-3xl">
          <h2 className="text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.02] tracking-[-0.02em] text-white">
            Put two days on the calendar.
          </h2>
          <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-white sm:text-xl">
            We bring the method. You bring the people. In two days you leave
            with three funded use cases and a plan finance can fund.
          </p>
        </Reveal>

        <Reveal cascade className="mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="border-t border-white/30 pt-5">
              <p className="text-3xl font-light text-white/80">{s.n}</p>
              <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{s.body}</p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">
                Owner: {s.owner}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href="https://blueally.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-4 text-sm font-bold text-navy transition-colors hover:bg-lblue"
          >
            Book the workshop →
          </a>
          <a
            href="tel:+18883019289"
            className="rounded-full border border-white/60 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Call (888) 301-9289
          </a>
        </Reveal>
      </Shell>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      {/* The closer returns the wheel: the cycle continues after the room empties */}
      <div className="pointer-events-none absolute -bottom-28 -right-24 w-[30rem]" aria-hidden>
        <Flywheel state="ghost" onDark className="w-full" />
      </div>

      <Shell className="relative pb-16 pt-20 sm:pt-28">
        <Reveal>
          <p className="glow text-[clamp(2.6rem,6vw,5rem)] font-light leading-none tracking-[-0.02em] text-white">
            Conquer <span className="aurora-text">Complexity.</span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/brand/BlueAlly_Logo_White.png"
              alt="BlueAlly"
              width={116}
              height={36}
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-lblue/80">
              Transforming IT challenges into opportunities for innovation,
              resilience, and growth.
            </p>
            <p className="mt-5 text-sm text-lblue/70">
              <a href="https://blueally.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                blueally.com
              </a>
              <br />
              <a href="tel:+18883019289" className="hover:text-white">
                (888) 301-9289
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
              Keep reading
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-lblue/80">
              <li>
                <a
                  href="https://guides.gofasterwithai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  The AI Field Guides →
                </a>
              </li>
              <li>NVIDIA · Microsoft · AWS</li>
              <li>Cisco · HPE</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="max-w-2xl text-xs leading-relaxed text-lblue/50">
            A concept site in the BlueAlly Flywheel design system. Results
            cited from BlueAlly engagements; research from MIT NANDA, BCG,
            and McKinsey. © 2026 BlueAlly. All rights reserved.
          </p>
        </div>
      </Shell>
    </footer>
  );
}
