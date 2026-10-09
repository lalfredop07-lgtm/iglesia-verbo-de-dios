import { cx } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  /** `gold` sólo sobre fondos oscuros o en elementos no textuales críticos. */
  tone?: "night" | "gold" | "light";
  className?: string;
  withRule?: boolean;
}

export function Eyebrow({ children, tone = "night", className, withRule = true }: EyebrowProps) {
  const color =
    tone === "gold" ? "text-gold" : tone === "light" ? "text-white/70" : "text-institutional";

  return (
    <p className={cx("eyebrow flex items-center gap-3.5", color, className)}>
      {withRule ? (
        <span
          aria-hidden
          className={cx(
            "inline-block h-px w-8 shrink-0",
            tone === "light" ? "bg-white/40" : "bg-gold",
          )}
        />
      ) : null}
      <span>{children}</span>
    </p>
  );
}
