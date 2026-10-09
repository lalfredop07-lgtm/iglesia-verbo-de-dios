"use client";

import { motion, useReducedMotion } from "motion/react";
import { createElement, type ElementType } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface SplitHeadingProps {
  /** Cada cadena es una línea; el salto es intencional, no automático. */
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
  /**
   * `inView` revela el titular al entrar en pantalla (necesita JavaScript).
   * `mount` lo revela al cargar mediante CSS: se usa en los titulares visibles
   * desde el primer momento para no retrasar el contenido principal.
   */
  trigger?: "inView" | "mount";
}

/** Revelado editorial línea a línea mediante máscaras `overflow-hidden`. */
export function SplitHeading({
  lines,
  as = "h2",
  className,
  lineClassName,
  delay = 0,
  trigger = "inView",
}: SplitHeadingProps) {
  const reduced = useReducedMotion();

  if (trigger === "mount") {
    return createElement(
      as,
      { className },
      lines.map((line, index) => (
        <span key={line} className="line-mask">
          <span
            className={`line-rise block ${lineClassName ?? ""}`}
            style={{ animationDelay: `${delay + index * 0.085}s` }}
          >
            {line}
          </span>
        </span>
      )),
    );
  }

  if (reduced) {
    return createElement(
      as,
      { className },
      lines.map((line) => (
        <span key={line} className={`block ${lineClassName ?? ""}`}>
          {line}
        </span>
      )),
    );
  }

  return createElement(
    motion[as as "h2"],
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, margin: "0px 0px -14% 0px" },
      variants: { visible: { transition: { staggerChildren: 0.085, delayChildren: delay } } },
    },
    lines.map((line) => (
      <span key={line} className="line-mask">
        <motion.span
          className={`block ${lineClassName ?? ""}`}
          variants={{
            hidden: { y: "110%" },
            visible: { y: "0%", transition: { duration: 0.95, ease: EASE } },
          }}
        >
          {line}
        </motion.span>
      </span>
    )),
  );
}
