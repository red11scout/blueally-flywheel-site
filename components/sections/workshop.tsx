import { Disclosure, Headline, Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const MOVES = [
  {
    n: "01",
    title: "Identify",
    body: "Three high-impact use cases, anchored to your strategic priorities. Every one tied to a measurable outcome.",
  },
  {
    n: "02",
    title: "Assess",
    body: "Organizational readiness across four dimensions: Skills, Data, Infrastructure, and Governance. Graded out of ten, gaps named.",
  },
  {
    n: "03",
    title: "Architect",
    body: "End-to-end AI workflows with comparison diagrams, PRDs, and an architecture blueprint for each use case.",
  },
];

const DELIVERABLES = [
  { name: "AI Strategy Brief", line: "Business drivers, OKRs, and where AI fits. One page the team signs." },
  { name: "Prioritized Portfolio", line: "Three use cases, ranked. Friction, pattern, KPI, and owner on each." },
  { name: "Business Value Map", line: "Revenue, cost, cash, and risk sized for every use case, math attached." },
  { name: "Value-Readiness Matrix", line: "Champions, Quick Wins, Strategic, Foundation. What to do, in order." },
  { name: "Readiness Assessment", line: "Skills, Data, Infrastructure, Governance. Graded out of ten." },
  { name: "Workflows & Architecture", line: "Current-state vs AI-powered diagrams, blueprints, and PRDs." },
  { name: "90-Day Roadmap", line: "Owners, dates, success metrics. A plan finance can fund." },
];

export function Workshop() {
  return (
    <section id="workshop">
      <Shell className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Pill>The workshop</Pill>
              <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
                <span className="text-bright">Two days</span> to a fundable
                plan.
              </Headline>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-soft">
                Method in the room. Your people at the table. A ranked
                portfolio out the door. Mornings build shared language;
                afternoons build the deliverables.
              </p>
              <div className="mt-8 flex items-baseline gap-4">
                <p className="text-6xl font-bold text-strong">3×</p>
                <p className="max-w-[24ch] text-sm leading-snug text-soft">
                  higher odds of scaling when you focus on three concurrent
                  use cases, not thirty.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal cascade>
              {MOVES.map((m) => (
                <div key={m.n} className="flex gap-7 border-t border-edge py-8">
                  <p className="text-4xl font-light leading-none text-bright">{m.n}</p>
                  <div>
                    <h3 className="text-xl font-bold text-strong">{m.title}</h3>
                    <p className="mt-2 max-w-lg text-base leading-relaxed text-soft">
                      {m.body}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal className="mt-10">
              <Disclosure
                summary={
                  <p className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="text-xl font-bold text-strong">
                      The seven artifacts you leave with
                    </span>
                    <span className="text-sm text-soft">
                      one fundable plan, the same week
                    </span>
                  </p>
                }
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {DELIVERABLES.map((d, i) => (
                    <div
                      key={d.name}
                      className={`lift curl border border-edge bg-card p-5 ${
                        i === 6 ? "sm:col-span-2" : ""
                      }`}
                      style={{ boxShadow: "var(--card-shadow)" }}
                    >
                      <p className="flex items-baseline gap-3">
                        <span className="text-sm font-bold text-bright">{i + 1}</span>
                        <span className="text-base font-bold text-strong">{d.name}</span>
                      </p>
                      <p className="mt-1.5 pl-6 text-sm leading-relaxed text-soft">
                        {d.line}
                      </p>
                    </div>
                  ))}
                </div>
              </Disclosure>
              <div className="border-t border-edge" />
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}
