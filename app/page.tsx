import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Divider } from "@/components/sections/divider";
import { FailureModes, Stakes } from "@/components/sections/context";
import { Opportunity } from "@/components/sections/opportunity";
import { Matrix, Method, Offerings } from "@/components/sections/approach";
import { Proof } from "@/components/sections/impact";
import { Cta, Footer } from "@/components/sections/action";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <div id="top-sentinel" aria-hidden />
        <Hero />

        <section id="context" aria-label="Phase 1: Context">
          <Divider
            num="01"
            phase={0}
            label="Context"
            lineBright="The honest"
            lineWhite="numbers"
            sub="Nobody fails on purpose. The pattern is plain once you look."
          />
          <Stakes />
          <FailureModes />
        </section>

        <section id="opportunity" aria-label="Phase 2: Opportunity">
          <Divider
            num="02"
            phase={1}
            label="Opportunity"
            lineBright="Where the"
            lineWhite="value lives"
            sub="The wheel turns. Knowing why programs stall points to where the value waits."
          />
          <Opportunity />
        </section>

        <section id="approach" aria-label="Phase 3: Approach">
          <Divider
            num="03"
            phase={2}
            label="Approach"
            lineBright="Method,"
            lineWhite="not magic"
            sub="Momentum builds. The human truth becomes a plan you can defend."
          />
          <Method />
          <Matrix />
          <Offerings />
        </section>

        <section id="impact" aria-label="Phase 4: Impact">
          <Divider
            num="04"
            phase={3}
            label="Impact"
            lineBright="Proof,"
            lineWhite="not promises"
            sub="The wheel does work now. Here is what it moved."
          />
          <Proof />
        </section>

        <section id="action" aria-label="Phase 5: Action">
          <Divider
            num="05"
            phase={4}
            label="Action"
            lineBright="Turn the"
            lineWhite="wheel"
            sub="Everything compounds here. One call starts the spin."
          />
          <Cta />
        </section>

        <Footer />
      </main>
    </>
  );
}
