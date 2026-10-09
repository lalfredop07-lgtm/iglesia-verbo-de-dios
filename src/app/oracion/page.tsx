import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { PrayerForm } from "./PrayerForm";

export const metadata = pageMetadata({
  title: "Oración",
  description:
    "Creemos en el poder de la oración. Comparte tu petición con el equipo de Iglesia Verbo de Dios Madrid.",
  path: "/oracion",
});

export default function OracionPage() {
  return (
    <>
      <PageHero
        eyebrow="Oración"
        titleLines={["Queremos", "orar contigo."]}
        text="Creemos en el poder de la oración y en el valor de acompañarnos unos a otros."
        image={{
          src: images.oracion.src,
          alt: images.oracion.alt,
          focus: images.oracion.focus,
          focusMobile: images.oracion.focusMobile,
        }}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Tu petición</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 text-[var(--text-lead)] leading-[1.68] text-graphite/85">
                  No hace falta encontrar las palabras exactas. Escríbenos con sencillez: oraremos
                  por ti.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-8 border-l border-gold/60 pl-6 font-editorial text-[1.5rem] italic leading-[1.4] text-institutional">
                  Nadie tiene que llevar su carga en silencio.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-10 border-t border-night/12 pt-7">
                  <h2 className="eyebrow text-[0.625rem] text-graphite/45">Otras vías</h2>
                  <ul className="mt-4 space-y-2.5">
                    {site.social.slice(0, 2).map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[0.9375rem] text-institutional"
                        >
                          Escríbenos por {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[0.8125rem] leading-relaxed text-graphite/55">
                    También puedes acercarte a cualquier reunión: siempre hay alguien disponible
                    para orar contigo.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.28} className="mt-9">
                <Button href="/visitanos" variant="outline">
                  Planifica tu visita
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.08}>
                <PrayerForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
