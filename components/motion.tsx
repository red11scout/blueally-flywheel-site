"use client";

import { animate, stagger } from "animejs";
import { useEffect, useRef } from "react";

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveal children on first scroll into view. Server-renders fully visible so
 * no-JS and reduced-motion readers get the final state; JS hides then animates.
 * With `cascade`, direct children stagger in.
 */
export function Reveal({
  children,
  className,
  cascade = false,
  y = 26,
}: {
  children: React.ReactNode;
  className?: string;
  cascade?: boolean;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const targets = cascade ? Array.from(el.children) : [el];
    if (targets.length === 0) return;
    for (const t of targets) (t as HTMLElement).style.opacity = "0";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        animate(targets, {
          opacity: [0, 1],
          translateY: [y, 0],
          duration: 650,
          delay: cascade ? stagger(90) : 0,
          ease: "outCubic",
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [cascade, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Animated stat numeral. Server-renders the final value (truth first);
 * JS rewinds to zero and counts up when the stat scrolls into view.
 */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (n: number) =>
    `${prefix}${n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const state = { n: 0 };
    el.textContent = fmt(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        animate(state, {
          n: to,
          duration: 1500,
          ease: "outExpo",
          onUpdate: () => {
            el.textContent = fmt(state.n);
          },
          onComplete: () => {
            el.textContent = fmt(to);
          },
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {fmt(to)}
    </span>
  );
}
