import { Header } from "@/components/header";
import { QuickNav } from "@/components/quicknav";
import { Hero } from "@/components/sections/hero";
import { FailureModes, Stakes } from "@/components/sections/stakes";
import { Method } from "@/components/sections/method";
import { Verbs } from "@/components/sections/verbs";
import { Matrix } from "@/components/sections/matrix";
import { Epoch } from "@/components/sections/epoch";
import { Workshop } from "@/components/sections/workshop";
import { Proof } from "@/components/sections/proof";
import { Platform } from "@/components/sections/platform";
import { Guides } from "@/components/sections/guides";
import { Cta, Footer } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stakes />
        <FailureModes />
        <Method />
        <Verbs />
        <Matrix />
        <Epoch />
        <Workshop />
        <Proof />
        <Platform />
        <Guides />
        <Cta />
        <Footer />
      </main>
      <QuickNav />
    </>
  );
}
