import { Headline, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const STEPS = [
  { n: 1, title: "Anchor to strategy", body: "Start where the business already wants to go." },
  { n: 2, title: "Inventory functions", body: "Walk the floor. List the work as it is." },
  { n: 3, title: "Set KPIs", body: "Agree on what better means, in numbers." },
  { n: 4, title: "Map friction", body: "Find where the hours and margin leak." },
  { n: 5, title: "Match primitives", body: "Name the verb before the model." },
  { n: 6, title: "Quantify impact", body: "Put dollars on the table early." },
  { n: 7, title: "Score and rank", body: "Let the portfolio pick itself." },
];

// Illustrative portfolio for the matrix. The real one comes from the workshop.
const CANDIDATES = [
  { name: "Document intelligence", v: 8.5, r: 7.5 },
  { name: "Service copilot", v: 7.2, r: 8.0 },
  { name: "Invoice extraction", v: 6.2, r: 8.6 },
  { name: "Knowledge search", v: 5.6, r: 7.2 },
  { name: "Forecasting engine", v: 7.6, r: 5.2 },
  { name: "Field agent assist", v: 8.2, r: 4.6 },
  { name: "Vision QC", v: 6.6, r: 3.8 },
];

const WEIGHTS = [
  { label: "Organization", pct: 35 },
  { label: "Data", pct: 30 },
  { label: "Governance", pct: 20 },
  { label: "Technical", pct: 15 },
];

const OFFERINGS = [
  {
    title: "Advisory",
    tag: "From the boardroom to the business case.",
    items: ["AI workshops", "Use-case discovery", "Value and ROI modeling", "Readiness and CoE", "Roadmap and enablement"],
  },
  {
    title: "Agents",
    tag: "A working, governed agent in weeks.",
    items: ["Low-code agent creation", "Agentic workflows and copilots", "Guardrails and human-in-the-loop"],
  },
  {
    title: "Development",
    tag: "A production app, grounded in your data.",
    items: ["LLM and RAG applications", "Model customization and fine-tuning", "Vision, voice, and document AI"],
  },
  {
    title: "AI Factory",
    tag: "Scale on a vendor-agnostic stack.",
    items: ["GPU compute and network fabric", "Storage and vector database", "Validated reference architectures"],
  },
];

export function Method() {
  return (
    <Shell className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <Headline>Seven steps. Each one earns the next.</Headline>
        <p className="mt-5 text-lg leading-relaxed text-soft">
          No mystery, no magic. A week of honest work that turns ambition into
          a portfolio the CFO can read.
        </p>
      </Reveal>

      <div className="relative mt-14">
        {/* Orbit line: the momentum rail behind the numbered nodes */}
        <div className="absolute left-5 top-0 h-full w-px bg-edge xl:left-0 xl:top-5 xl:h-px xl:w-full" aria-hidden />
        <Reveal cascade className="grid gap-9 xl:grid-cols-7 xl:gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="relative flex gap-5 xl:block">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-bright bg-surface text-sm font-bold text-bright">
                {s.n}
              </span>
              <div className="xl:mt-4">
                <h3 className="text-base font-bold text-strong">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-soft">{s.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Shell>
  );
}

export function Matrix() {
  return (
    <Shell className="pb-20 sm:pb-28">
      <Reveal className="max-w-2xl">
        <Headline>Then the portfolio picks itself.</Headline>
        <p className="mt-5 text-lg leading-relaxed text-soft">
          Every candidate lands on one chart. Value against readiness, graded
          one to ten. Six is the line between a pilot and an enterprise.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <div
          className="curl border border-edge bg-card p-6 sm:p-10"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div className="relative aspect-[4/3] sm:aspect-[16/7]">
            {/* Quadrant labels */}
            <span className="absolute left-0 top-0 text-[11px] font-bold uppercase tracking-[0.12em] text-soft">
              Build readiness
            </span>
            <span className="absolute right-0 top-0 text-[11px] font-bold uppercase tracking-[0.12em] text-bright">
              Fund now
            </span>
            <span className="absolute bottom-6 left-0 text-[11px] font-bold uppercase tracking-[0.12em] text-soft/70">
              Watch list
            </span>
            <span className="absolute bottom-6 right-0 text-[11px] font-bold uppercase tracking-[0.12em] text-soft/70">
              Quick wins
            </span>

            {/* Readiness threshold at 6 (plot window spans grades 2 to 10) */}
            <div
              className="absolute bottom-6 top-0 border-l border-dashed border-bright/60"
              style={{ left: "50%" }}
              aria-hidden
            />

            {/* Candidates: functional data points, focusable for tooltips */}
            {CANDIDATES.map((c) => (
              <button
                key={c.name}
                type="button"
                className="group absolute z-10 flex h-4 w-4 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-bright transition-transform hover:scale-125 focus-visible:scale-125"
                style={{
                  left: `${((c.r - 2) / 8) * 100}%`,
                  bottom: `calc(${((c.v - 2) / 8) * 100}% * 0.82 + 2.2rem)`,
                }}
                aria-label={`${c.name}: value ${c.v} of 10, readiness ${c.r} of 10`}
              >
                <span className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden w-max -translate-x-1/2 rounded-lg bg-ink px-3 py-2 text-left text-xs text-white shadow-lg group-hover:block group-focus-visible:block">
                  <span className="font-bold">{c.name}</span>
                  <br />
                  Value {c.v} · Readiness {c.r}
                </span>
              </button>
            ))}

            {/* Axes */}
            <div className="absolute bottom-6 left-0 right-0 h-px bg-edge" aria-hidden />
            <span className="absolute bottom-0 right-0 text-[11px] font-bold uppercase tracking-[0.12em] text-soft">
              Readiness →
            </span>
            <span className="absolute bottom-10 left-0 origin-bottom-left -rotate-90 text-[11px] font-bold uppercase tracking-[0.12em] text-soft">
              Value →
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-8 border-t border-edge pt-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-bold text-strong">
                Priority = Value × Readiness × Confidence − Risk Drag
              </p>
              <p className="mt-2 max-w-md text-sm text-soft">
                An illustrative portfolio. Yours comes out of the two-day
                workshop, scored against your own data.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-soft">
                Readiness weighting
              </p>
              <div className="mt-3 flex flex-col gap-2.5">
                {WEIGHTS.map((w) => (
                  <div key={w.label} className="flex items-center gap-3">
                    <span className="w-28 text-sm text-copy">{w.label}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-edge">
                      <div
                        className="h-full rounded-full bg-bright"
                        style={{ width: `${w.pct}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-sm font-bold text-strong">
                      {w.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}

export function Offerings() {
  return (
    <Shell className="pb-20 sm:pb-28">
      <Reveal className="max-w-2xl">
        <Headline>From the first call to the running system.</Headline>
        <p className="mt-5 text-lg leading-relaxed text-soft">
          One team, end to end. No handoffs between firms, no gaps between
          strategy and the thing that runs.
        </p>
      </Reveal>

      <Reveal cascade className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {OFFERINGS.map((o) => (
          <div
            key={o.title}
            className="curl border border-edge bg-card p-7"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <h3 className="text-lg font-bold text-strong">{o.title}</h3>
            <p className="mt-2 text-sm font-bold text-bright">{o.tag}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {o.items.map((i) => (
                <li key={i} className="text-sm leading-relaxed text-soft">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-10">
        <div className="curl g-focus relative overflow-hidden p-8 sm:p-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-lblue">
            The foundation · Amplifi Data Lake
          </p>
          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-white sm:text-2xl">
            Eighty percent of your data is dark.{" "}
            <span className="text-bright">This turns on the lights.</span>
          </p>
          <p className="mt-3 max-w-2xl text-base text-lblue/90">
            Vector-aware, governed data under every pillar. The model is a
            tenant, not a landlord.
          </p>
        </div>
      </Reveal>
    </Shell>
  );
}
