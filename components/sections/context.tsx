import { Headline, Shell } from "@/components/ui";
import { CountUp, Reveal } from "@/components/motion";

const STATS = [
  {
    n: 95,
    text: "of initiatives never scale beyond the pilot",
    source: "MIT NANDA, 2025",
  },
  {
    n: 74,
    text: "show no tangible value from the spend",
    source: "BCG, GenAI Divide",
  },
  {
    n: 26,
    text: "is the most that ever reaches production",
    source: "McKinsey, State of AI",
  },
];

const MODES = [
  { num: "I", title: "No ROI", body: "The math comes last, so the money never comes." },
  { num: "II", title: "No sponsor", body: "It lives in IT and never reaches strategy." },
  { num: "III", title: "Too many pilots", body: "Thirty experiments. Focus traded for breadth." },
  { num: "IV", title: "Pilot purgatory", body: "The demo works. The integration fails." },
  { num: "V", title: "Going it alone", body: "Two of three in-house builds fail." },
];

export function Stakes() {
  return (
    <Shell className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <Headline>Enterprise AI has a habit of stalling.</Headline>
        <p className="mt-5 text-lg leading-relaxed text-soft">
          The industry publishes its own verdict every year. The numbers hold
          steady, and they are not kind.
        </p>
      </Reveal>

      <Reveal cascade className="mt-14 grid gap-10 sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.n} className="border-t border-edge pt-6">
            <p className="text-[3.6rem] font-bold leading-none text-strong sm:text-[4.2rem]">
              <CountUp to={s.n} suffix="%" />
            </p>
            <p className="mt-3 max-w-[26ch] text-base text-copy">{s.text}</p>
            <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.1em] text-soft">
              {s.source}
            </p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-14 max-w-2xl">
        <p className="text-lg leading-relaxed text-soft">
          Read them again. They describe method failures, not model failures.
          That is good news. A method can change.
        </p>
      </Reveal>
    </Shell>
  );
}

export function FailureModes() {
  return (
    <Shell className="pb-20 sm:pb-28">
      <Reveal className="max-w-2xl">
        <Headline>Five ways it dies.</Headline>
        <p className="mt-4 text-lg text-soft">
          We have watched programs fail the same five ways for years.
        </p>
      </Reveal>

      <Reveal cascade className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        {MODES.map((m) => (
          <div
            key={m.num}
            className="curl border border-edge bg-card p-6"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <p className="text-3xl font-normal text-bright">{m.num}</p>
            <h3 className="mt-4 text-base font-bold text-strong">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-soft">{m.body}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-10">
        <div className="curl g-focus relative overflow-hidden p-8 sm:p-10">
          <p className="max-w-3xl text-xl leading-relaxed text-white sm:text-2xl">
            Four of the five have nothing to do with the model. They are
            strategy, focus, integration, and experience.{" "}
            <span className="text-bright">So that is where we work.</span>
          </p>
        </div>
      </Reveal>
    </Shell>
  );
}
