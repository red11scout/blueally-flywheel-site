import { Flywheel } from "@/components/flywheel";
import { Shell } from "@/components/ui";
import { Reveal } from "@/components/motion";

/**
 * Navy threshold between phases: nav flywheel with the active blade lit,
 * phase label, two-tone display headline, white rule from the left edge,
 * aurora numeral. Aurora sits on a FLAT navy fill (a gradient underneath
 * would seam).
 */
export function Divider({
  num,
  phase,
  label,
  lineBright,
  lineWhite,
  sub,
}: {
  num: string;
  phase: number; // 0-based
  label: string;
  lineBright: string;
  lineWhite: string;
  sub: string;
}) {
  return (
    <div className="relative overflow-hidden bg-navy grain">
      {/* Aurora light-field carrying the giant section numeral */}
      <div
        className="aurora absolute -bottom-24 -right-16 h-[26rem] w-[26rem] sm:-bottom-28 sm:-right-10 sm:h-[30rem] sm:w-[30rem]"
        aria-hidden
      />
      <span
        aria-hidden
        className="absolute -bottom-5 right-8 text-[6.5rem] font-normal leading-none text-navy sm:right-24 sm:text-[9rem]"
      >
        {num}
      </span>

      <Shell className="relative py-20 sm:py-28">
        <div className="flex items-start justify-between gap-8">
          <Reveal className="max-w-2xl">
            <h2 className="text-[clamp(2.3rem,5vw,3.8rem)] font-normal leading-[1.06] tracking-[-0.01em]">
              <span className="block text-bright">{lineBright}</span>
              <span className="block text-white">{lineWhite}</span>
            </h2>
          </Reveal>
          <div className="hidden shrink-0 flex-col items-end gap-3 sm:flex">
            <Flywheel state="nav" blades={5} active={phase} className="h-24 w-24" />
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-lblue">
              Phase {num} / 05 · {label}
            </p>
          </div>
        </div>
      </Shell>

      {/* White rule from the slide's left edge */}
      <div className="h-px w-[42%] min-w-56 bg-white/70" aria-hidden />

      <Shell className="relative pb-16 pt-6 sm:pb-20">
        <div className="flex items-end justify-between gap-6">
          <p className="max-w-xl text-base text-lblue/90 sm:text-lg">{sub}</p>
          <div className="flex shrink-0 items-center gap-3 sm:hidden">
            <Flywheel state="nav" blades={5} active={phase} className="h-14 w-14" />
          </div>
        </div>
      </Shell>
    </div>
  );
}
