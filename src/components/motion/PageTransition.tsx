"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Transición de entrada entre páginas.
 *
 * Se resuelve con una animación CSS en lugar de JavaScript: el estado final es
 * siempre visible, de modo que el contenido nunca puede quedarse en blanco si
 * la animación no llega a ejecutarse. `prefers-reduced-motion` la anula desde
 * la hoja de estilos. No hay animación de salida, para que la navegación del
 * App Router —incluidos atrás y adelante— siga siendo instantánea.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
