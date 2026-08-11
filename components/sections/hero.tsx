import { Flywheel } from "@/components/flywheel";
import { Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const TICKER = [
  "Quality ↑",
  "Speed ↑",
  "Cost ↓",
  "Delight ↑",
  "AI moves all four at once",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink grain">
      {/* Layered depth: navy field, breathing aurora, wheel mid-spin */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #040822 0%, #001278 52%, #061c9b 100%)",
        }}
      />
      <div
        aria-hidden
        className="aurora breathe absolute -right-40 top-[8%] h-[42rem] w-[42rem] opacity-80"
        style={{ "--aurora-surface": "transparent" } as React.CSSProperties}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[26%] -top-20 w-[92vw] max-w-135 opacity-90 sm:-right-[10%] sm:top-1/2 sm:w-[56vw] sm:max-w-240 sm:-translate-y-1/2"
      >
        <Flywheel state="hero" spin className="w-full drop-shadow-[0_40px_80px_rgba(2,162,253,0.25)]" />
      </div>

      <Shell className="relative flex min-h-[100svh] flex-col justify-end pb-24 pt-44 sm:justify-center sm:pb-32 sm:pt-40">
        <Reveal cascade className="max-w-3xl">
          <p>
            <Pill>Enterprise AI · Agents · Method</Pill>
          </p>
          <h1 className="mt-7 text-[clamp(3.2rem,8.5vw,7rem)] font-light leading-[0.98] tracking-[-0.03em] [text-wrap:balance]">
            <span className="block text-bright">Most AI never ships.</span>
            <span className="block text-white">Ours does.</span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-lblue/90 sm:text-xl">
            Ninety-five percent of enterprise AI stalls before production. The
            gap is method. Not ambition, and not the model. We bring the
            method. The work ships, and it holds.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#action"
              className="rounded-full bg-bright px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brightlift hover:shadow-[0_12px_40px_rgba(2,162,253,0.45)]"
            >
              Put two days on the calendar
            </a>
            <a
              href="#proof"
              className="rounded-full border border-lblue/40 px-8 py-4 text-sm font-bold text-lblue transition-colors hover:border-bright hover:text-white"
            >
              See the proof
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-7">
            {[
              { n: "1.5×", d: "revenue growth of the leaders" },
              { n: "200+", d: "enterprise deployments shipped" },
              { n: "3", d: "funded use cases, not thirty" },
            ].map((s) => (
              <div key={s.n}>
                <dt className="sr-only">{s.d}</dt>
                <dd className="text-3xl font-bold text-white sm:text-4xl">{s.n}</dd>
                <dd className="mt-1.5 text-[13px] leading-snug text-lblue/75">{s.d}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Shell>

      {/* Ticker: the four things customers always want */}
      <div className="relative border-t border-white/10 bg-ink/40 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden" aria-hidden>
          <div className="marquee flex shrink-0 items-center gap-12 pr-12">
            {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span
                key={i}
                className={`whitespace-nowrap text-sm font-bold tracking-wide ${
                  t.includes("four") ? "text-bright" : "text-lblue/70"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="marquee flex shrink-0 items-center gap-12 pr-12">
            {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span
                key={i}
                className={`whitespace-nowrap text-sm font-bold tracking-wide ${
                  t.includes("four") ? "text-bright" : "text-lblue/70"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <p className="sr-only">
          Customers always want higher quality, more speed, lower cost, and
          more delight. AI moves all four at once.
        </p>
      </div>
    </section>
  );
}
