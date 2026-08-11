# BlueAlly Flywheel Site — Design Spec

One-page narrative site in the BlueAlly Flywheel design system (2026 Social
Playbook era). Goal: show why BlueAlly approaches AI differently, prove it,
and ask for the call. Voice: short, true sentences. Calm confidence. No hype.

## The concept

The site is a flywheel turning. Five phases, five turns of the wheel, each
one powering the next:

| Phase | Section id | Content |
|---|---|---|
| 01 CONTEXT | `#context` | The honest numbers (95 / 74 / 26) + five failure modes |
| 02 OPPORTUNITY | `#opportunity` | Where the value lives: BCG value split + EPOCH |
| 03 APPROACH | `#approach` | Seven-step method + Value-Readiness Matrix + offerings |
| 04 IMPACT | `#impact` | Client results (the Green payoff) + difference table |
| 05 ACTION | `#action` | Bright CTA full-bleed + footer |

Navy threshold dividers introduce each phase: nav flywheel with the active
blade lit, phase label, two-tone display headline, aurora numeral. The header
carries a persistent 5-blade mini wheel that lights up as you scroll. The
motif law holds everywhere: no decorative circles, dots, or rings. Ovals
exist only as functional geometry (numbered nodes, matrix points).

## Design system

- **Canvas:** Cloud `#F4F3F3` content, Navy `#001278` thresholds, exactly one
  Bright full-bleed (the CTA). Dark mode flips content surfaces to Ink
  `#040822` with glass cards; thresholds are theme-invariant.
- **Type:** DM Sans only. Display Regular (Light when oversized), mixed case.
  Bold is structural: labels, card titles, stats.
- **Gradients (semantic):** Focus (ink→navy→indigo) on dark panels;
  Illumination deep (navy→`#0263C8`→bright) on the CTA; Growth
  (green→`#2BC96B`) once, at the proof.
- **Aurora:** radial light-field (core `#EAF6FF` → Sky `#5DB1ED` → surface by
  68%) on Navy thresholds only. Never a visible circle edge.
- **Flywheel geometry:** official vectors, one blade radially repeated,
  centre (298.87, 272.63), blade centroid (435.19, 397.18), n-blade fit
  scale k = (360/n − 12°) / 103.3°.

## Content truth

All stats, method steps, results, offerings, and contact details come from
the existing BlueAlly AI sites (blueally-ai-site-v2.vercel.app and kin) and
their cited sources (MIT NANDA 2025, BCG, McKinsey). Matrix candidates are
labeled illustrative. Nothing invented.

## Motion

anime.js v4 (`animate`, `stagger`, IntersectionObserver triggers). Stat
count-ups, staggered reveals, slow hero-wheel spin (CSS). Everything gated
behind `prefers-reduced-motion`; no-JS renders final states.

## Deliberate simplifications

- Single page, anchor nav; no hamburger menu on mobile (logo + wheel + theme
  toggle + CTA remain). <!-- ponytail: add a sheet menu if pages multiply -->
- No shadcn/ui: no primitives needed beyond buttons and cards Tailwind
  already covers; adding it would be scaffolding for later.
- Matrix tooltips are CSS hover/focus, not a chart library.
