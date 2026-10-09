import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "outline" | "light" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  /** Fuerza el enlace externo (abre en una pestaña nueva con rel seguro). */
  external?: boolean;
  withArrow?: boolean;
  className?: string;
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-display text-[0.9375rem] font-semibold tracking-[-0.01em] " +
  "px-7 py-[0.95rem] min-h-[52px] transition-[background-color,color,border-color,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "active:scale-[0.985] motion-reduce:active:scale-100";

const variants: Record<Variant, string> = {
  primary: "bg-night text-white hover:bg-institutional shadow-[0_1px_2px_rgba(11,35,69,0.18)]",
  outline:
    "border border-night/18 text-night hover:border-night/45 hover:bg-night/[0.035] bg-transparent",
  light: "bg-white text-night hover:bg-ice",
  ghost: "border border-white/30 text-white hover:border-white/70 hover:bg-white/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  external,
  withArrow = true,
  className,
  ariaLabel,
}: ButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const classes = cx(base, variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <ArrowUpRight className="arrow-shift h-[1.05em] w-[1.05em]" aria-hidden /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
