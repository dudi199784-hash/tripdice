import Link from "next/link";

const links = [
  { href: "/", label: "01 홈 로비" },
  { href: "/companion", label: "02 단짝" },
  { href: "/mode", label: "03 모드" },
  { href: "/play", label: "04 보드" },
  { href: "/tile", label: "05 칸/인증" },
] as const;

export type SketchPath = (typeof links)[number]["href"];

export function SketchNav({ current }: { current: SketchPath }) {
  return (
    <nav className="mb-4 flex flex-wrap gap-2">
      {links.map((link) => {
        const active = link.href === current;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded px-2.5 py-1 text-xs font-medium ${
              active
                ? "bg-[var(--wire-strong)] text-white"
                : "bg-[var(--wire-muted)] text-[var(--wire-strong)]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function PhoneFrame({
  title,
  children,
  note,
}: {
  title: string;
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[var(--sketch-width)]">
      <div className="mb-2 flex items-end justify-between gap-3">
        <div>
          <p className="wire-label">mobile landscape · 844 × 390</p>
          <h1 className="text-sm font-semibold tracking-tight">{title}</h1>
        </div>
        {note ? (
          <p className="max-w-[60%] text-right text-[10px] leading-snug text-[var(--wire)]">{note}</p>
        ) : null}
      </div>
      <div
        className="wire-box-solid flex h-[var(--sketch-height)] min-h-0 flex-col overflow-hidden rounded-[22px]"
      >
        {children}
      </div>
    </div>
  );
}

export function Region({
  label,
  spec,
  className = "",
  children,
}: {
  label: string;
  spec?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className={`wire-box relative ${className}`}>
      <div className="absolute left-1.5 top-1.5 z-10 flex flex-wrap items-center gap-1">
        <span className="rounded bg-[var(--wire-strong)] px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-white">
          {label}
        </span>
        {spec ? <span className="wire-label bg-white/90 px-1">{spec}</span> : null}
      </div>
      {children}
    </section>
  );
}

export function SpecList({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto mt-4 max-w-[var(--sketch-width)] space-y-1 text-[11px] text-[var(--wire)]">
      {items.map((item) => (
        <li key={item}>· {item}</li>
      ))}
    </ul>
  );
}
