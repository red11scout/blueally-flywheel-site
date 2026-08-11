export function Pill({
  children,
  invert = false,
}: {
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${
        invert ? "bg-white text-navy" : "bg-bright text-white"
      }`}
    >
      {children}
    </span>
  );
}

export function Shell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Disclosure({
  summary,
  children,
  defaultOpen = false,
}: {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details open={defaultOpen} className="group border-t border-edge">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">{summary}</div>
        <span
          aria-hidden
          className="shrink-0 text-2xl font-light leading-none text-bright transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
        >
          +
        </span>
      </summary>
      <div className="pb-8">{children}</div>
    </details>
  );
}

export function Headline({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-[1.12] tracking-[-0.01em] text-strong ${className}`}
    >
      {children}
    </h2>
  );
}
