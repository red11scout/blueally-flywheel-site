import { Headline, Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const ACTS = [
  {
    act: "Act I",
    title: "Understand the machine",
    body: "The convergence of data, compute, and algorithms. How the machine reads, from tokens to agents. The anatomy of an agent harness.",
    count: "5 field guides",
  },
  {
    act: "Act II",
    title: "Decide where to play",
    body: "Strategic assessment and sequencing. Capability matching, build or buy or partner. Workflows over applications. AEGIS, security from first principles.",
    count: "4 frameworks",
  },
  {
    act: "Act III",
    title: "See it, then do it",
    body: "An opportunity portfolio plotted on risk, value, and readiness. Deployment patterns in the wild. One workflow, reimagined end to end.",
    count: "3 interactive tools",
  },
];

export function Guides() {
  return (
    <section id="guides">
      <Shell className="pb-24 sm:pb-32">
        <Reveal className="max-w-3xl">
          <Pill>Go deeper</Pill>
          <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
            The AI <span className="text-bright">Field Guides</span>.
          </Headline>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
            The hard part was never the model. It is everything around it.
            Modern AI as one journey, in three acts: plainly written and
            grounded in cited sources. Free to read, no gate.
          </p>
        </Reveal>

        <Reveal cascade className="mt-12 grid gap-5 lg:grid-cols-3">
          {ACTS.map((a) => (
            <a
              key={a.act}
              href="https://guides.gofasterwithai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="lift curl group flex flex-col border border-edge bg-card p-8"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-bright">
                {a.act}
              </p>
              <h3 className="mt-3 text-2xl font-normal text-strong">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">{a.body}</p>
              <p className="mt-6 flex items-center justify-between border-t border-edge pt-4 text-sm">
                <span className="font-bold text-soft">{a.count}</span>
                <span className="font-bold text-bright transition-transform group-hover:translate-x-1">
                  Read →
                </span>
              </p>
            </a>
          ))}
        </Reveal>
      </Shell>
    </section>
  );
}
