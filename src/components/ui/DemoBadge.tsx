import { cx } from "@/lib/utils";

/**
 * Distintivo visible para el contenido de demostración.
 * Garantiza que ningún dato provisional pueda confundirse con información
 * confirmada por la iglesia.
 */
export function DemoBadge({
  children = "Evento de ejemplo",
  tone = "light",
  className,
}: {
  children?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "eyebrow inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.625rem] tracking-[0.18em]",
        tone === "dark"
          ? "border-white/25 bg-white/10 text-white/85"
          : "border-gold/45 bg-gold/10 text-[#8a6c33]",
        className,
      )}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
      {children}
    </span>
  );
}

/** Nota de contenido pendiente de confirmar por la iglesia. */
export function PendingNote({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={cx(
        "mt-5 border-l-2 border-gold/60 pl-4 text-[0.8125rem] leading-relaxed",
        tone === "dark" ? "text-white/55" : "text-graphite/55",
      )}
    >
      {children}
    </p>
  );
}
