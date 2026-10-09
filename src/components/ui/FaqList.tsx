import { Plus } from "lucide-react";
import type { Faq } from "@/content/faqs";

/**
 * Preguntas frecuentes con `<details>` nativo: accesible por teclado,
 * funcional sin JavaScript y sin animaciones que entorpezcan la lectura.
 */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div>
      {items.map((item) => (
        <details key={item.question} className="group border-t border-night/12">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-night sm:text-[1.25rem]">
              {item.question}
            </h3>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-night/14 text-night transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45">
              <Plus className="h-4 w-4" aria-hidden />
            </span>
          </summary>
          <div className="pb-7 pr-12">
            <p className="max-w-[68ch] leading-[1.7] text-graphite/75">{item.answer}</p>
            {item.status === "pending" ? (
              <p className="mt-3 text-[0.8125rem] text-graphite/50">
                Dato pendiente de confirmación por parte de la iglesia.
              </p>
            ) : null}
          </div>
        </details>
      ))}
      <div className="border-t border-night/12" />
    </div>
  );
}
