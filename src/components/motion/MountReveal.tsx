import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

/**
 * Entrada al cargar la página, resuelta con CSS.
 *
 * A diferencia de `Reveal` (que necesita detectar el viewport y por tanto
 * JavaScript), este componente se usa en el contenido visible desde el primer
 * momento: la animación arranca en el primer pintado y su estado final es
 * siempre visible.
 */
export function MountReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Retardo en segundos. */
  delay?: number;
  className?: string;
}) {
  return (
    <div className={cx("fade-rise", className)} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
