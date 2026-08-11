import { Headline, Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

/**
 * The Value-Readiness Matrix, as BlueAlly actually draws it: four named
 * quadrants with an action each — Strategic (plan a sprint), Champions
 * (deploy now), Foundation (build first), Quick Wins (ship fast) — plus the
 * priority formula, weighted readiness, and the recommended portfolio mix.
 */
const QUADRANTS = {
  strategic: {
    name: "Strategic",
    action: "Plan a sprint",
    cls: "bg-navy text-white",
    dot: "bg-white",
    label: "text-lblue/80",
  },
  champions: {
    name: "Champions",
    action: "Deploy now",
    cls: "g-growth text-white",
    dot: "bg-white",
    label: "text-white/85",
  },
  foundation: {
    name: "Foundation",
    action: "Build first",
    cls: "border border-edge bg-cloud text-navy dark:bg-lblue/15 dark:text-lblue",
    dot: "bg-navy dark:bg-lblue",
    label: "text-softink/80 dark:text-lblue/70",
  },
  quickwins: {
    name: "Quick Wins",
    action: "Ship fast",
    cls: "bg-bright text-white",
    dot: "bg-white",
    label: "text-white/85",
  },
} as const;

type QuadrantKey = keyof typeof QUADRANTS;

const CANDIDATES: {
  name: string;
  v: number;
  r: number;
  q: QuadrantKey;
  x: number; // % across the quadrant tile
  y: number; // % up from the tile's bottom
}[] = [
  { name: "Document intelligence", v: 8.5, r: 7.5, q: "champions", x: 38, y: 50 },
  { name: "Service copilot", v: 7.2, r: 8.0, q: "champions", x: 58, y: 24 },
  { name: "Field agent assist", v: 8.2, r: 4.6, q: "strategic", x: 60, y: 46 },
  { name: "Forecasting engine", v: 7.6, r: 5.2, q: "strategic", x: 78, y: 28 },
  { name: "Invoice extraction", v: 5.6, r: 8.6, q: "quickwins", x: 64, y: 48 },
  { name: "Knowledge search", v: 5.2, r: 7.2, q: "quickwins", x: 32, y: 36 },
  { name: "Vision QC", v: 5.4, r: 3.8, q: "foundation", x: 48, y: 40 },
];

const WEIGHTS = [
  { label: "Organization", pct: 35 },
  { label: "Data", pct: 30 },
  { label: "Governance", pct: 20 },
  { label: "Technical", pct: 15 },
];

const MIX = [
  { pct: "60%", label: "Clear high-impact bets", cls: "text-bright" },
  { pct: "30%", label: "Strategic initiatives", cls: "text-strong" },
  { pct: "10%", label: "Experimental ideas", cls: "text-soft" },
];

function Quadrant({ q }: { q: QuadrantKey }) {
  const meta = QUADRANTS[q];
  const dots = CANDIDATES.filter((c) => c.q === q);
  return (
    <div className={`relative min-h-44 rounded-2xl p-5 sm:min-h-52 ${meta.cls}`}>
      <h4 className="text-lg font-bold sm:text-xl">{meta.name}</h4>
      <p className={`mt-0.5 text-sm ${meta.label}`}>{meta.action}</p>
      {dots.map((c) => (
        <button
          key={c.name}
          type="button"
          className="group absolute z-10 h-4 w-4 -translate-x-1/2 translate-y-1/2 cursor-default"
          style={{ left: `${c.x}%`, bottom: `${c.y}%` }}
          aria-label={`${c.name}: value ${c.v} of 10, readiness ${c.r} of 10, ${meta.name}: ${meta.action}`}
        >
          <span
            className={`block h-4 w-4 rounded-full ${meta.dot} shadow-md ring-2 ring-black/10 transition-transform group-hover:scale-125 group-focus-visible:scale-125`}
          />
          <span className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden w-max -translate-x-1/2 rounded-lg bg-ink px-3 py-2 text-left text-xs text-white shadow-xl group-hover:block group-focus-visible:block">
            <span className="font-bold">{c.name}</span>
            <br />
            Value {c.v} · Readiness {c.r}
          </span>
        </button>
      ))}
    </div>
  );
}

export function Matrix() {
  return (
    <section id="matrix">
      <Shell className="py-24 sm:py-32">
        <Reveal className="max-w-3xl">
          <Pill>The Value-Readiness Matrix</Pill>
          <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
            What to <span className="text-bright">deploy</span>, what to
            prepare, what to park.
          </Headline>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
            Every candidate lands in one of four quadrants, and every quadrant
            comes with an order: deploy, sprint, build, or ship. Six out of
            ten is the line between a pilot and an enterprise.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          {/* The quadrant field */}
          <Reveal>
            <div className="flex gap-4">
              <p className="hidden shrink-0 rotate-180 text-[11px] font-bold uppercase tracking-[0.14em] text-soft [writing-mode:vertical-rl] sm:block">
                Value (impact) →
              </p>
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-3">
                  <Quadrant q="strategic" />
                  <Quadrant q="champions" />
                  <Quadrant q="foundation" />
                  <Quadrant q="quickwins" />
                </div>
                <p className="mt-4 text-right text-[11px] font-bold uppercase tracking-[0.14em] text-soft">
                  Readiness (feasibility) →
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-soft">
              An illustrative portfolio. Yours comes out of the two-day
              workshop, scored against your own data.
            </p>
          </Reveal>

          {/* Formula, weights, mix */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="curl g-focus relative overflow-hidden p-7 grain">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-bright">
                  What sets it apart
                </p>
                <p className="mt-3 text-lg font-bold leading-snug text-white sm:text-xl">
                  Priority = Value × Readiness × Confidence − Risk Drag
                </p>
                <p className="mt-3 text-sm leading-relaxed text-lblue/85">
                  Value = Expected Value ÷ friction cost. Return measured
                  against the friction it removes.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div
                className="curl border border-edge bg-card p-7"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <h3 className="text-base font-bold text-strong">Readiness, weighted</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {WEIGHTS.map((w) => (
                    <div key={w.label} className="flex items-center gap-3">
                      <span className="w-28 text-sm text-copy">{w.label}</span>
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-edge">
                        <div
                          className="h-full rounded-full bg-bright"
                          style={{ width: `${(w.pct / 35) * 100}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-sm font-bold text-strong">
                        {w.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div
                className="curl border border-edge bg-card p-7"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <h3 className="text-base font-bold text-strong">Recommended mix</h3>
                <dl className="mt-4 flex flex-col gap-3">
                  {MIX.map((m) => (
                    <div key={m.label} className="flex items-baseline gap-4">
                      <dt className={`w-16 text-2xl font-bold ${m.cls}`}>{m.pct}</dt>
                      <dd className="text-sm text-copy">{m.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}
