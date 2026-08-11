import { Headline, Pill, Shell } from "@/components/ui";
import { CountUp, Reveal } from "@/components/motion";

const STATS = [
  { n: 95, suffix: "%", text: "of enterprise AI initiatives fail to create value.", source: "MIT NANDA, 2025" },
  { n: 74, suffix: "%", text: "show no tangible value from the investment.", source: "BCG, GenAI Divide" },
  { n: 26, suffix: "%", text: "is the most that ever reaches production.", source: "McKinsey, State of AI" },
];

const HIDDEN_COSTS = [
  { title: "Talent waste", body: "Thousands of hours of your best people poured into work that never ships." },
  { title: "Change fatigue", body: "“Here we go again.” Each failure makes the next change twice as hard." },
  { title: "Competitive gap", body: "18 to 24 months behind the leaders already compounding at 1.5×." },
];

const MODES = [
  {
    num: "I",
    title: "No clear ROI",
    body: "Work begins before the math. When value can’t be proven, funding goes.",
    closedBy: "Steps 3 + 6",
    how: "KPIs tied to benchmarks; value math across four lenses.",
  },
  {
    num: "II",
    title: "No sponsor",
    body: "The project lives in IT. Strategy never signs the page.",
    closedBy: "Step 1",
    how: "Strategy anchor signed at the top before scope is set.",
  },
  {
    num: "III",
    title: "Too many use cases",
    body: "Twenty pilots, none of them deep. Focus traded for breadth.",
    closedBy: "Step 7",
    how: "Score, rank, focus on three. The rest waits.",
  },
  {
    num: "IV",
    title: "Pilot purgatory",
    body: "The demo works. The integration does not. Only 26% ever scale.",
    closedBy: "Steps 5 + 7",
    how: "Right primitive, integration assumed, readiness floor enforced.",
  },
  {
    num: "V",
    title: "Going it alone",
    body: "In-house builds fail 67% of the time. Partners cut that in half.",
    closedBy: "Step 2 + readiness",
    how: "Capability gaps named; partner where the team is thin.",
  },
];

export function Stakes() {
  return (
    <section id="stakes" className="relative">
      <Shell className="pb-10 pt-24 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Pill>The honest stakes</Pill>
              <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
                The industry publishes its own{" "}
                <span className="text-bright">verdict</span> every year.
              </Headline>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-soft">
                The numbers hold steady, and they are not kind. Read them
                closely. They describe method failures, not model failures.
                That is good news. A method can change.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col">
            {STATS.map((s, i) => (
              <Reveal key={s.n} className={i === 0 ? "" : "mt-2"}>
                <div className="group border-t border-edge py-8 transition-colors sm:py-10">
                  <p className="text-[clamp(4.2rem,8vw,7rem)] font-bold leading-none tracking-[-0.02em] text-strong">
                    <CountUp to={s.n} suffix={s.suffix} />
                  </p>
                  <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3">
                    <p className="max-w-[30ch] text-lg text-copy">{s.text}</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-soft/80">
                      {s.source}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Shell>

      {/* The waterline: what a failed pilot actually costs */}
      <Shell className="pb-24 pt-8 sm:pb-32">
        <Reveal>
          <div className="curl g-focus relative overflow-hidden p-8 grain sm:p-12">
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1.6fr]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-lblue/80">
                  Visible · direct · the waterline
                </p>
                <p className="mt-4 text-[clamp(2.4rem,4vw,3.6rem)] font-light leading-none text-white">
                  $100K–$1M
                </p>
                <p className="mt-3 max-w-xs text-base text-lblue/85">
                  per failed pilot. Licenses, cloud, and consulting, gone with
                  nothing to show. And the budget is the smallest thing you
                  lose.
                </p>
              </div>
              <div className="grid gap-6 border-lblue/20 sm:grid-cols-3 lg:border-l lg:pl-10">
                {HIDDEN_COSTS.map((c) => (
                  <div key={c.title}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-bright">
                      Hidden
                    </p>
                    <h3 className="mt-2 text-base font-bold text-white">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-lblue/80">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

export function FailureModes() {
  return (
    <Shell className="pb-24 sm:pb-32">
      <Reveal className="max-w-3xl">
        <Pill>Why programs die</Pill>
        <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
          Five doors to failure.{" "}
          <span className="text-bright">Seven keys</span> that close them.
        </Headline>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
          Nearly every stalled program dies one of five ways. Four of the five
          are people and method. Only one is the model. So each step of our
          method exists to close a door.
        </p>
      </Reveal>

      <div className="mt-14">
        {MODES.map((m) => (
          <Reveal key={m.num}>
            <div className="group grid gap-4 border-t border-edge py-7 transition-colors hover:bg-card/60 sm:grid-cols-[4.5rem_1.2fr_1fr] sm:gap-8 sm:py-8">
              <p className="text-4xl font-light leading-none text-bright sm:text-5xl">
                {m.num}
              </p>
              <div>
                <h3 className="text-xl font-bold text-strong">{m.title}</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-soft">
                  {m.body}
                </p>
              </div>
              <div className="sm:border-l sm:border-edge sm:pl-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-green">
                  Closed by {m.closedBy}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-copy">
                  {m.how}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-edge" />
      </div>
    </Shell>
  );
}
