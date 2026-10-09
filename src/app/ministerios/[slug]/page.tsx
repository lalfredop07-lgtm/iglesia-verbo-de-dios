import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { PendingNote } from "@/components/ui/DemoBadge";
import { getMinistry, ministries, type MinistryTone } from "@/content/ministries";
import { site } from "@/content/site";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return ministries.map((ministry) => ({ slug: ministry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) return pageMetadata({ title: "Ministerio", description: site.description });

  return pageMetadata({
    title: ministry.name,
    description: ministry.summary,
    path: `/ministerios/${ministry.slug}`,
    image: ministry.image,
  });
}

/**
 * Matices de tono dentro de una misma identidad visual: JAP algo más dinámico,
 * Verbo Kids más luminoso, Hogares Mateo más cálido e íntimo.
 */
const toneStyles: Record<MinistryTone, { band: string; accent: string }> = {
  deep: { band: "bg-night text-white", accent: "text-gold" },
  bright: { band: "bg-ice", accent: "text-institutional" },
  warm: { band: "bg-[#faf7f2]", accent: "text-[#8a6c33]" },
  classic: { band: "bg-white", accent: "text-institutional" },
};

export default async function MinistryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) notFound();

  const tone = toneStyles[ministry.tone];
  const others = ministries.filter((m) => m.slug !== ministry.slug);

  return (
    <>
      <PageHero
        eyebrow={`Ministerios · ${ministry.eyebrow}`}
        titleLines={ministry.heroLines}
        text={ministry.heroText}
        image={{ src: ministry.image, alt: ministry.imageAlt, focus: "50% 40%" }}
      />

      {/* Propósito ----------------------------------------------------- */}
      <section className={`section-y ${tone.band}`}>
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone={ministry.tone === "deep" ? "light" : "night"}>Nuestro propósito</Eyebrow>
              </Reveal>
              <SplitHeading
                lines={[ministry.name]}
                delay={0.08}
                className="mt-7 font-display font-extrabold [font-size:clamp(1.5rem,1rem+2vw,2.75rem)] [letter-spacing:-0.03em] [line-height:1.04]"
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.12}>
                <p className="text-[var(--text-lead)] leading-[1.68] text-graphite/85">
                  {ministry.purpose}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className={`mt-8 border-l border-gold/60 pl-6 font-editorial text-[1.5rem] italic leading-[1.4] ${tone.accent}`}>
                  {ministry.summary}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Claves + galería ---------------------------------------------- */}
      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <Figure
                  src={ministry.image}
                  alt={ministry.imageAlt}
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  focus="50% 40%"
                  className="aspect-4/5"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-[0.8125rem] text-graphite/50">
                  Espacio preparado para la galería definitiva del ministerio.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal>
                <Eyebrow>Lo que encontrarás</Eyebrow>
              </Reveal>

              <RevealGroup className="mt-8" step={0.09}>
                {ministry.highlights.map((item, index) => (
                  <RevealItem key={item.title}>
                    <div className="border-t border-night/12 py-6">
                      <span className="eyebrow text-[0.625rem] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-display text-[1.25rem] font-bold tracking-[-0.025em] text-night">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-[1.65] text-graphite/75">{item.text}</p>
                    </div>
                  </RevealItem>
                ))}
                <div className="border-t border-night/12" />
              </RevealGroup>

              <Reveal delay={0.1} className="mt-8">
                <h3 className="eyebrow text-[0.625rem] text-graphite/45">Horario</h3>
                {ministry.schedule.status === "confirmed" && ministry.schedule.value ? (
                  <p className="mt-3 font-display text-[1.75rem] font-extrabold tracking-[-0.03em] text-night">
                    {ministry.schedule.value}
                  </p>
                ) : (
                  <p className="mt-3 text-graphite/60">
                    Pendiente de confirmar. Mientras tanto, consulta los horarios generales de la
                    iglesia en la página{" "}
                    <Link href="/visitanos" className="link-underline text-institutional">
                      Visítanos
                    </Link>
                    .
                  </p>
                )}
              </Reveal>

              <Reveal delay={0.16}>
                <PendingNote>
                  Las actividades concretas de este ministerio se publicarán cuando la iglesia las
                  confirme. No se muestra ninguna actividad sin verificar.
                </PendingNote>
              </Reveal>

              <Reveal delay={0.22} className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/contacto">Quiero conectar</Button>
                <Button href="/visitanos" variant="outline">
                  Visítanos
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Otros ministerios --------------------------------------------- */}
      <section className="section-y bg-ice">
        <div className="shell">
          <Reveal>
            <Eyebrow>Sigue descubriendo</Eyebrow>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2" step={0.07}>
            {others.map((other) => (
              <RevealItem key={other.slug}>
                <Link
                  href={`/ministerios/${other.slug}`}
                  className="group flex items-baseline justify-between gap-5 border-t border-night/12 py-5"
                >
                  <span className="font-display text-[1.25rem] font-semibold tracking-[-0.025em] text-night">
                    <span className="link-underline">{other.name}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="arrow-shift h-4 w-4 shrink-0 text-night/40 group-hover:text-night"
                  />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10">
            <Button href="/ministerios" variant="outline">
              Todos los ministerios
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Imagen de cierre ------------------------------------------------ */}
      <section className="relative h-[40vh] min-h-[280px] overflow-hidden bg-night">
        <Figure
          src={images.adoracion.src}
          alt={images.adoracion.alt}
          sizes="100vw"
          focus={images.adoracion.focus}
          overlay="strong"
          rounded={false}
          className="h-full"
        />
      </section>
    </>
  );
}
