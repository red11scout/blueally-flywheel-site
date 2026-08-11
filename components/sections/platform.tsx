import { Headline, Pill, Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

const PILLARS = [
  {
    title: "Agent Services",
    status: "Available now",
    tag: "A working, governed agent in weeks.",
    items: ["Low-code agent creation", "Agentic workflows & copilots", "Security, guardrails, human-in-the-loop"],
  },
  {
    title: "Dev Services",
    status: "Fed from the workshop",
    tag: "A production app, grounded in your data.",
    items: ["LLM & RAG applications", "Model customization & fine-tuning", "Vision, voice, and document AI"],
  },
  {
    title: "AI Factory Services",
    status: "Roadmap to scale",
    tag: "Scale on a vendor-agnostic stack.",
    items: ["GPU compute & network fabric", "Storage & vector database", "Validated reference architectures"],
  },
];

const RUN = [
  { title: "AI Defense & Governance", line: "Semantic firewall and kill switch. Least privilege plus human-in-the-loop. Every action logged, signed, and reversible." },
  { title: "Compliance", line: "NIST AI RMF mapped to controls. ISO/IEC 42001 attestation. Pass the audit without a fire drill." },
  { title: "Managed Services", line: "24×7 SRE and MLOps. FinOps for token, GPU, and storage cost. Drift and quality watched." },
];

export function Platform() {
  return (
    <Shell className="pb-24 sm:pb-32">
      <Reveal className="max-w-3xl">
        <Pill>One partner, end to end</Pill>
        <Headline className="mt-6 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.06]">
          The BlueAlly AI operating system.
        </Headline>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
          Three pillars on one foundation, guided and governed. Strategy
          shops write reports. Vendors sell tools. We close the gap: one team
          owns the whole arc, from the boardroom question to the measured
          result.
        </p>
      </Reveal>

      {/* The stack, as a stack */}
      <Reveal className="mt-14">
        <div className="curl g-focus relative overflow-hidden p-4 grain sm:p-6">
          <div className="rounded-xl border border-lblue/20 bg-white/5 px-6 py-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-bright">
              Advisory · guides everything below
            </p>
            <p className="mt-1.5 text-sm text-lblue/85">
              Workshops · use-case discovery · value & ROI · readiness & CoE · roadmap & enablement
            </p>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="lift rounded-xl border border-lblue/20 bg-white/[0.07] p-6 backdrop-blur-sm"
              >
                <p className="inline-block rounded-full bg-bright/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-bright">
                  {p.status}
                </p>
                <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {p.items.map((i) => (
                    <li key={i} className="text-sm text-lblue/80">
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-lblue/15 pt-3 text-sm font-bold text-bright">
                  {p.tag}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-lblue/20 bg-white/5 px-6 py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-green">
                Data Lake · Amplifi
              </p>
              <p className="text-sm text-lblue/85">
                ingest · store · architect · govern · serve
              </p>
            </div>
            <p className="mt-1.5 text-sm text-white">
              Eighty percent of your data is dark.{" "}
              <span className="font-bold text-bright">Amplifi turns on the lights</span>{" "}
              with vector-aware, governed data under every pillar.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-lblue/20 bg-white/5 px-6 py-3.5">
            <p className="text-sm text-lblue/85">
              <span className="font-bold uppercase tracking-[0.12em] text-lblue">Managed services</span>
              &ensp;24×7 SRE / MLOps · cost · drift · adoption
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-12">
        <p className="max-w-2xl text-lg text-soft">
          <span className="font-bold text-strong">
            Build the vessel before you start the reaction.
          </span>{" "}
          Govern the data first. The model is a tenant, not a landlord.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {RUN.map((r) => (
            <div key={r.title} className="border-t-2 border-navy pt-4 dark:border-lblue/40">
              <h3 className="text-base font-bold text-strong">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{r.line}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Shell>
  );
}
