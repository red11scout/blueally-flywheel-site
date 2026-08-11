import { Headline, Shell } from "@/components/ui";
import { CountUp, Reveal } from "@/components/motion";

const RESULTS = [
  {
    stat: <CountUp to={2.1} decimals={1} prefix="$" suffix="M" />,
    label: "labor saved, proposals 30% faster",
    client: "Engineering firm",
  },
  {
    stat: <CountUp to={80} suffix="%" />,
    label: "cost cut, 60% time saved, 2 to 4× capacity",
    client: "Bank loan processing",
  },
  {
    stat: <CountUp to={360000} />,
    label: "work hours saved a year",
    client: "Document processing",
  },
  {
    stat: <CountUp to={95} suffix="%" />,
    label: "faster advisor response",
    client: "Customer service",
  },
];

const DIFFERENCE = [
  { label: "Time to first value", us: "Weeks, on a funded pilot", them: "Months of slideware" },
  { label: "Deliverable", us: "A shipped, governed result", them: "A report, or a stalled demo" },
  { label: "The math", us: "CFO-ready ROI, defended up front", them: "Value proven last, if at all" },
  { label: "Team", us: "One team, end to end", them: "Handoffs between firms" },
  { label: "Governance", us: "Secure by default, audit-ready", them: "Bolted on after the fact" },
];

export function Proof() {
  return (
    <Shell className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <Headline>Numbers from work that shipped.</Headline>
        <p className="mt-5 text-lg leading-relaxed text-soft">
          Not projections. Results, measured after the fact, from systems that
          run today.
        </p>
      </Reveal>

      {/* The Green moment: payoff appears once, here, as the Growth gradient */}
      <Reveal cascade className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {RESULTS.map((r) => (
          <div
            key={r.client}
            className="curl border border-edge bg-card p-7"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <p className="text-[2.6rem] font-bold leading-none text-strong">
              {r.stat}
            </p>
            <div className="g-growth mt-3 h-1.5 w-14 rounded-full" aria-hidden />
            <p className="mt-3 text-sm leading-relaxed text-copy">{r.label}</p>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-soft">
              {r.client}
            </p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-6">
        <p className="text-sm text-soft">
          Each figure comes from a shipped engagement. We confirm the number
          for your industry on the call.
        </p>
      </Reveal>

      <Reveal className="mt-16">
        <Headline className="text-[clamp(1.5rem,2.6vw,2rem)]">
          The difference, plainly.
        </Headline>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-edge">
                <th className="w-1/4 pb-4 pr-4 text-[11px] font-bold uppercase tracking-[0.12em] text-soft" scope="col">
                  &nbsp;
                </th>
                <th className="pb-4 pr-4 text-sm font-bold text-bright" scope="col">
                  BlueAlly
                </th>
                <th className="pb-4 text-sm font-bold text-soft" scope="col">
                  The usual way
                </th>
              </tr>
            </thead>
            <tbody>
              {DIFFERENCE.map((d) => (
                <tr key={d.label} className="border-b border-edge">
                  <th className="py-4 pr-4 text-sm font-bold text-strong" scope="row">
                    {d.label}
                  </th>
                  <td className="py-4 pr-4 text-sm text-copy">{d.us}</td>
                  <td className="py-4 text-sm text-soft">{d.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Shell>
  );
}
