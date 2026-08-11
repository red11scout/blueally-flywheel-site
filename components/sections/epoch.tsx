import { Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const EPOCH = [
  { letter: "E", word: "Empathy & emotional intelligence", line: "Reading what a customer feels, not what they typed." },
  { letter: "P", word: "Presence & connectedness", line: "Relationships compound; transactions don’t." },
  { letter: "O", word: "Opinion, judgment & ethics", line: "Calling the hard, ambiguous decision." },
  { letter: "C", word: "Creativity & imagination", line: "The move outside the training distribution." },
  { letter: "H", word: "Hope, vision & leadership", line: "Pointing to a future the data can’t see." },
];

const SPLIT = [
  { label: "Customer-centric", pct: 38, cls: "bg-bright" },
  { label: "IT & engineering", pct: 13, cls: "bg-sky" },
  { label: "All other functions", pct: 49, cls: "bg-lblue/25" },
];

export function Epoch() {
  return (
    <Shell className="pb-24 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-ink grain">
          <div
            aria-hidden
            className="aurora absolute -left-32 -top-40 h-96 w-96 opacity-60"
            style={{ "--aurora-surface": "transparent" } as React.CSSProperties}
          />
          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.1fr_1.3fr] lg:p-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-bright">
                EPOCH · human in the loop
              </p>
              <h2 className="mt-5 text-[clamp(2rem,3.6vw,3rem)] font-normal leading-[1.08] text-white [text-wrap:balance]">
                Half the AI value lives at the touch.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-lblue/85">
                BCG measured realized AI value across 1,250 companies. More
                than half sits where people meet the work. So we embed an
                EPOCH check on every use case. The machine does the cold
                work. The human keeps the value.
              </p>

              <div className="mt-8">
                <div
                  className="flex h-11 overflow-hidden rounded-lg"
                  role="img"
                  aria-label="Realized AI value: customer-centric 38 percent, IT and engineering 13 percent, all other functions 49 percent"
                >
                  {SPLIT.map((s) => (
                    <div
                      key={s.label}
                      className={`${s.cls} flex items-center justify-center`}
                      style={{ width: `${s.pct}%` }}
                    >
                      <span className={`text-xs font-bold ${s.pct === 13 ? "text-navy" : s.pct === 49 ? "text-lblue" : "text-white"}`}>
                        {s.pct}%
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5">
                  {SPLIT.map((s) => (
                    <p key={s.label} className="flex items-center gap-2 text-xs text-lblue/75">
                      <span className={`h-2.5 w-2.5 rounded-sm ${s.cls}`} aria-hidden />
                      {s.label}
                    </p>
                  ))}
                </div>
                <p className="mt-4 inline-block rounded-full border border-bright/40 px-4 py-1.5 text-sm font-bold text-bright">
                  Customer + IT &gt; 50%
                </p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-lblue/60">
                  BCG · 1,250 companies · 2025
                </p>
              </div>
            </div>

            <ul className="flex flex-col justify-center">
              {EPOCH.map((e) => (
                <li
                  key={e.letter}
                  className="flex items-start gap-6 border-t border-white/10 py-5 first:border-t-0"
                >
                  <span className="w-12 shrink-0 text-[2.6rem] font-light leading-none text-bright">
                    {e.letter}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">{e.word}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-lblue/80">{e.line}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}
