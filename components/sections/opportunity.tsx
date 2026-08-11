import { Headline, Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const SPLIT = [
  { label: "Customer-centric functions", pct: 38, cls: "bg-bright", text: "text-white" },
  { label: "IT and engineering", pct: 13, cls: "bg-sky", text: "text-navy" },
  { label: "All other functions", pct: 49, cls: "bg-navy dark:bg-lblue/30", text: "text-white" },
];

const EPOCH = [
  { letter: "E", word: "Empathy", body: "Reading what the customer means, not only what they say." },
  { letter: "P", word: "Presence", body: "Being in the room when the moment matters." },
  { letter: "O", word: "Opinion", body: "The judgment call a model should not make." },
  { letter: "C", word: "Creativity", body: "The answer that is not in the data yet." },
  { letter: "H", word: "Hope", body: "People follow people. Someone has to see the way." },
];

export function Opportunity() {
  return (
    <>
      <Shell className="py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <Headline>Half the value sits at the human touch.</Headline>
          <p className="mt-5 text-lg leading-relaxed text-soft">
            BCG measured realized AI value across 1,250 companies. More than
            half of it sits in customer-facing and engineering work. The places
            where people meet the work.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div
            className="flex h-14 overflow-hidden rounded-xl border border-edge"
            role="img"
            aria-label="Realized AI value by function: customer-centric 38 percent, IT and engineering 13 percent, all other functions 49 percent"
          >
            {SPLIT.map((s) => (
              <div
                key={s.label}
                className={`${s.cls} flex items-center justify-center`}
                style={{ width: `${s.pct}%` }}
              >
                <span className={`text-sm font-bold ${s.text}`}>{s.pct}%</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {SPLIT.map((s) => (
              <p key={s.label} className="flex items-center gap-2 text-sm text-soft">
                <span className={`h-3 w-3 rounded-sm ${s.cls}`} aria-hidden />
                {s.label} · {s.pct}%
              </p>
            ))}
          </div>
          <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.1em] text-soft">
            BCG, 2025 · realized value distribution
          </p>
        </Reveal>

        <Reveal cascade className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {EPOCH.map((e) => (
            <div
              key={e.letter}
              className="curl border border-edge bg-card p-6"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <p className="text-[2.6rem] font-normal leading-none text-bright">
                {e.letter}
              </p>
              <h3 className="mt-4 text-base font-bold text-strong">{e.word}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{e.body}</p>
            </div>
          ))}
        </Reveal>
      </Shell>

      {/* Statement: a cognitive breath between dense stretches */}
      <Shell className="pb-20 sm:pb-28">
        <Reveal className="max-w-3xl">
          <Pill>The human truth</Pill>
          <p className="mt-6 text-[clamp(1.7rem,3.2vw,2.3rem)] font-normal leading-[1.25] text-bright">
            We build the system around the person. Not the other way around.
          </p>
          <div className="mt-6 h-px w-24 bg-edge" aria-hidden />
        </Reveal>
      </Shell>
    </>
  );
}
