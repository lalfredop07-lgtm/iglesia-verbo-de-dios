"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Recorrido total en porcentaje de la altura del elemento (5–8 % recomendado). */
  amount?: number;
}

/**
 * Parallax muy contenido: sólo `transform`, nunca provoca reflow
 * y se desactiva por completo con `prefers-reduced-motion`.
 */
export function Parallax({ children, className, amount = 7 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, willChange: "transform" }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
