import { Headline, Pill, Shell } from "@/components/ui";
import { CountUp, Reveal } from "@/components/motion";

const RESULTS = [
  { stat: <CountUp to={2.1} decimals={1} prefix="$" suffix="M" />, label: "labor saved. Proposals 30% faster.", client: "Engineering firm" },
  { stat: <CountUp to={80} suffix="%" />, label: "cost cut, 60% time saved, 2 to 4× capacity.", client: "Bank loan processing" },
  { stat: <CountUp to={360000} />, label: "work hours saved a year.", client: "Document processing" },
  { stat: <CountUp to={95} suffix="%" />, label: "faster advisor response.", client: "Customer service" },
];

const TIMELINE = [
  {
    span: "0–6 months",
    body: "Inventory and matrix scoring. One or two compound pilots on trusted RAG, with guardrails.",
  },
  {
    span: "6–12 months",
    body: "Pilots shipped into real workflows. Adoption and impact measured. Agentic patterns where they pay.",
  },
  {
    span: "12–18 months",
    body: "Scale what proves ROI. A reusable platform: retrieval, evals, observability. Policy as code.",
  },
];

export function Proof() {
  return (
    <section id="proof">
      <Shell className="py-24 sm:py-32">
        <Reveal className="max-w-3xl">
          <Pill>The payoff</Pill>
          <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
            Pilots that ship. A platform that compounds.
          </Headline>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
            Not projections. Results, measured after the fact, from systems
            that run today. We confirm the number for your industry on the
            call.
          </p>
        </Reveal>

        {/* The Green moment: the payoff, once */}
        <Reveal cascade className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {RESULTS.map((r) => (
            <div key={r.client}>
              <p className="text-[clamp(2.6rem,3.6vw,3.4rem)] font-bold leading-none tracking-[-0.01em] text-strong">
                {r.stat}
              </p>
              <div className="g-growth mt-4 h-1.5 w-16 rounded-full" aria-hidden />
              <p className="mt-4 max-w-[26ch] text-base leading-relaxed text-copy">
                {r.label}
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-soft">
                {r.client}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-16">
          <div className="curl relative overflow-hidden bg-navy p-8 grain sm:p-10">
            <div
              aria-hidden
              className="aurora absolute -right-24 -top-24 h-80 w-80 opacity-70"
            />
            <p className="relative max-w-3xl text-xl leading-relaxed text-white sm:text-2xl">
              The leaders who get this right grow revenue{" "}
              <span className="font-bold text-bright">1.5× their peers</span>.
              This is not the future. It is this year’s operating advantage,
              if the method is right.
            </p>
          </div>
        </Reveal>

        {/* What changes, and when */}
        <Reveal className="mt-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-soft">
            The engagement timeline · what changes, and when
          </p>
          <div className="relative mt-8 grid gap-10 sm:grid-cols-3 sm:gap-8">
            <div className="absolute left-1.5 top-2 h-full w-px bg-edge sm:left-0 sm:top-1.5 sm:h-px sm:w-full" aria-hidden />
            {TIMELINE.map((t) => (
              <div key={t.span} className="relative pl-8 sm:pl-0 sm:pt-8">
                <span
                  className="absolute left-0 top-1 h-3 w-3 rounded-full bg-bright sm:top-0"
                  aria-hidden
                />
                <h3 className="text-lg font-bold text-strong">{t.span}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-soft">{t.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
