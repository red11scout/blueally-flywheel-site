# BlueAlly Flywheel Site

A one-page narrative site in the BlueAlly Flywheel design system. Five
phases, five turns of the wheel: Context, Opportunity, Approach, Impact,
Action. Dark and light throughout. See [DESIGN.md](DESIGN.md) for the spec.

## Stack

Next.js 15 (App Router) · TypeScript strict · Tailwind v4 · anime.js v4 ·
next-themes · DM Sans. Package manager: pnpm.

## Run

```bash
pnpm install
pnpm dev
```

## Verify

```bash
pnpm exec tsc --noEmit
pnpm build
```

## Brand sources

Motif geometry, palette, gradients, typography, and voice come from the
BlueAlly Flywheel brand system (2026 Social Playbook era); logo and colour
law from the canonical BlueAlly brand guidelines. Official flywheel vectors
are embedded in `components/flywheel.tsx`; logo assets in `public/brand/`.
