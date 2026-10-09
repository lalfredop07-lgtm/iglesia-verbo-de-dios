import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/content/site";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80svh] items-center bg-night py-32 text-white">
      <div className="shell">
        <p className="eyebrow flex items-center gap-3.5 text-white/60">
          <span aria-hidden className="inline-block h-px w-9 bg-gold" />
          Error 404
        </p>

        <h1 className="mt-7 max-w-[18ch] font-display font-extrabold uppercase text-white [font-size:var(--text-display)] [letter-spacing:-0.045em] [line-height:0.94]">
          Esta página no existe.
        </h1>

        <p className="mt-7 max-w-[48ch] text-[var(--text-lead)] leading-[1.65] text-white/75">
          Puede que el enlace haya cambiado. Vuelve a la portada o continúa por cualquiera de estas
          secciones.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href="/" variant="light" className="w-full sm:w-auto">
            Volver a la portada
          </Button>
          <Button href="/visitanos" variant="ghost" className="w-full sm:w-auto">
            Planifica tu visita
          </Button>
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/12 pt-8">
          {primaryNav.slice(1).map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link-underline text-sm text-white/65">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
