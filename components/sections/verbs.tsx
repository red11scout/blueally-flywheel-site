import { Headline, Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const VERBS = [
  { verb: "See", tool: "Computer Vision", line: "detect and read images", gen: false },
  { verb: "Read", tool: "Natural Language", line: "classify and extract text", gen: false },
  { verb: "Predict", tool: "Machine Learning", line: "forecast and score data", gen: false },
  { verb: "Find", tool: "Enterprise Search", line: "retrieve the buried answer", gen: false },
  { verb: "Know", tool: "Knowledge Graphs", line: "encode facts as truth", gen: false },
  { verb: "Reason", tool: "Solvers", line: "decide under hard limits", gen: false },
  { verb: "Act", tool: "Robotics & RPA", line: "sense and act, at scale", gen: false },
  { verb: "Create", tool: "Generative AI", line: "produce new text and code", gen: true },
  { verb: "Orchestrate", tool: "Agentic Systems", line: "plan, call tools, loop", gen: true },
];

const PATTERNS = [
  { name: "RAG", line: "Search retrieves; the LLM writes a cited answer." },
  { name: "ML + LLM", line: "The model scores; the LLM explains and acts." },
  { name: "Neuro-symbolic", line: "The LLM plans the steps; a solver enforces the rules." },
  { name: "Graph-grounded", line: "The graph supplies truth; the LLM reads and updates it." },
];

export function Verbs() {
  return (
    <Shell className="py-24 sm:py-32">
      <Reveal className="max-w-3xl">
        <Pill>Start with the work</Pill>
        <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
          Name the <span className="text-bright">verb</span> before the model.
        </Headline>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
          Seven disciplines still do the heavy lifting. Generative AI is
          additive, not a replacement. Keep a deterministic core. Add GenAI
          for the glue.
        </p>
      </Reveal>

      <Reveal cascade className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {VERBS.map((v) => (
          <div
            key={v.verb}
            className={`lift curl border p-7 ${
              v.gen
                ? "border-bright/50 bg-bright/10 dark:bg-bright/15"
                : "border-edge bg-card"
            }`}
            style={v.gen ? undefined : { boxShadow: "var(--card-shadow)" }}
          >
            <p
              className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                v.gen ? "text-bright" : "text-soft/70"
              }`}
            >
              {v.gen ? "Generative layer" : "Traditional core"}
            </p>
            <h3 className="mt-3 text-[2rem] font-normal leading-none text-strong">
              {v.verb}
            </h3>
            <p className="mt-3 text-sm font-bold text-bright">{v.tool}</p>
            <p className="mt-1 text-sm text-soft">{v.line}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-14">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-soft">
          The real architecture is compound
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PATTERNS.map((p) => (
            <div key={p.name} className="border-t-2 border-bright pt-4">
              <h3 className="text-base font-bold text-strong">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{p.line}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16 max-w-3xl">
        <p className="text-[clamp(1.6rem,3vw,2.2rem)] font-normal leading-[1.3] text-bright">
          The disciplines become the tools. The LLM becomes the planner and
          the interface. Don’t pay the LLM tax.
        </p>
      </Reveal>
    </Shell>
  );
}
