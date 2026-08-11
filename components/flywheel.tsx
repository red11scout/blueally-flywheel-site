/**
 * The BlueAlly Flywheel — the only brand motif.
 * Geometry is the official vector (FlyWheel.svg): ONE blade, three straight
 * edges + one long convex outer curve, radially repeated clockwise around an
 * open hub. Never redrawn, never approximated.
 *
 * Measured constants (from the source SVG, viewBox 612 × 548):
 *   centre (298.87, 272.63) · tip radius R ≈ 311.2 · blade span ≈ 103.3°
 *   blade area centroid (435.19, 397.18) → sits at ≈ 42.4° (y-down)
 *   n-blade fit scale k = (360/n − 12°) / 103.3° about the blade centroid
 */
const CX = 298.87;
const CY = 272.63;
const R = 311.2;
const BLADE =
  "M609.8,260.5L472.2,517.6l-216.7-14.2l35.1-65.6C353.1,321.2,477.9,251.9,609.8,260.5z";
const BCX = 435.19;
const BCY = 397.18;
const BLADE_ANGLE = 42.4; // centroid angle of the source blade, degrees, y-down
const SPAN = 103.3;

const PAD = 6;
const NAV_VIEWBOX = `${(CX - R - PAD).toFixed(2)} ${(CY - R - PAD).toFixed(2)} ${(2 * (R + PAD)).toFixed(2)} ${(2 * (R + PAD)).toFixed(2)}`;

type HeroProps = {
  state: "hero";
  className?: string;
  spin?: boolean;
};

type GhostProps = {
  state: "ghost";
  className?: string;
  onDark?: boolean;
};

type NavProps = {
  state: "nav";
  blades: number;
  active: number; // 0-based; blades before it read as "spent" (dim but lit)
  onDark?: boolean;
  className?: string;
};

export function Flywheel(props: HeroProps | GhostProps | NavProps) {
  if (props.state === "hero") {
    // The canonical 3-blade icon: translucent layered Bright fills, one blade
    // nudged toward Light Blue. Rotating blade 1 by 120°/240° reproduces the
    // official radial repeat exactly.
    const fills = [
      { fill: "var(--bright)", opacity: 0.58 },
      { fill: "var(--bright)", opacity: 0.4 },
      { fill: "var(--lblue)", opacity: 0.28 },
    ];
    return (
      <svg
        viewBox="0 0 612 548"
        className={props.className}
        aria-hidden
        focusable="false"
      >
        <g className={props.spin ? "spin-slow" : undefined}>
          {fills.map((f, i) => (
            <path
              key={i}
              d={BLADE}
              fill={f.fill}
              fillOpacity={f.opacity}
              transform={`rotate(${i * 120} ${CX} ${CY})`}
            />
          ))}
        </g>
      </svg>
    );
  }

  if (props.state === "ghost") {
    const fill = props.onDark ? "var(--bright)" : "var(--navy)";
    return (
      <svg
        viewBox="0 0 612 548"
        className={props.className}
        aria-hidden
        focusable="false"
      >
        {[0, 120, 240].map((a) => (
          <path
            key={a}
            d={BLADE}
            fill={fill}
            fillOpacity={0.09}
            transform={`rotate(${a} ${CX} ${CY})`}
          />
        ))}
      </svg>
    );
  }

  // Nav state: one blade per phase, blade 1 at 12 o'clock, phases advance
  // clockwise. Active blade solid Bright; the rest stay dimly lit.
  const { blades, active, onDark = true } = props;
  const step = 360 / blades;
  const k = blades > 3 ? (step - 12) / SPAN : 1;
  const dim = onDark ? { fill: "var(--lblue)", o: 0.26 } : { fill: "var(--navy)", o: 0.14 };

  return (
    <svg
      viewBox={NAV_VIEWBOX}
      className={props.className}
      aria-hidden
      focusable="false"
    >
      {Array.from({ length: blades }, (_, i) => {
        const isActive = i === active;
        return (
          <g key={i} transform={`rotate(${-90 - BLADE_ANGLE + i * step} ${CX} ${CY})`}>
            <path
              d={BLADE}
              fill={isActive ? "var(--bright)" : dim.fill}
              fillOpacity={isActive ? 1 : dim.o}
              transform={
                k !== 1
                  ? `translate(${BCX} ${BCY}) scale(${k.toFixed(4)}) translate(${-BCX} ${-BCY})`
                  : undefined
              }
            />
          </g>
        );
      })}
    </svg>
  );
}
