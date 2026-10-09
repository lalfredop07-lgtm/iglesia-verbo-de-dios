import type { ReactNode } from "react";

/** Columna de lectura editorial para páginas de texto. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[68ch] [&_a]:text-institutional [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[1.375rem] [&_h2]:font-bold [&_h2]:tracking-[-0.025em] [&_h2:first-child]:mt-0 [&_li]:leading-[1.7] [&_li]:text-graphite/80 [&_p]:mt-4 [&_p]:leading-[1.72] [&_p]:text-graphite/80 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}
