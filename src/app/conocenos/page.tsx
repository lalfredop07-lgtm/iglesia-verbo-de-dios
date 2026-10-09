import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PendingNote } from "@/components/ui/DemoBadge";
import { Figure } from "@/components/ui/Figure";
import { beliefs } from "@/content/beliefs";
import { pillars } from "@/content/team";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Conócenos",
  description:
    "Conoce la historia, la fe y la familia de Iglesia Verbo de Dios Madrid: quiénes somos, nuestra misión, nuestra visión y lo que creemos.",
  path: "/conocenos",
});

export default function ConocenosPage() {
  return (
    <>
      <PageHero
        eyebrow="Conócenos"
        titleLines={["Nuestra historia.", "Nuestra fe.", "Nuestra familia."]}
        text="Somos una comunidad cristiana en Madrid que quiere vivir el evangelio con sencillez: aprendiendo juntos, cuidándonos y acercando a las personas a Jesús."
        image={{
          src: images.bienvenida.src,
          alt: images.bienvenida.alt,
          focus: images.bienvenida.focus,
          focusMobile: images.bienvenida.focusMobile,
        }}
      />

      {/* Quiénes somos ------------------------------------------------ */}
      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>Quiénes somos</Eyebrow>
              </Reveal>
              <SplitHeading
                lines={["Una iglesia", "centrada en Jesús."]}
                delay={0.08}
                className="mt-7 font-display font-extrabold [font-size:var(--text-title)] [letter-spacing:-0.035em] [line-height:1.04]"
              />
              <Reveal delay={0.2}>
                <p className="mt-8 text-[0.8125rem] uppercase tracking-[0.18em] text-graphite/45">
                  {site.tradition}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={0.12}>
                <p className="text-[var(--text-lead)] leading-[1.68] text-graphite/85">
                  Verbo de Dios es una iglesia formada por personas de edades, historias y orígenes
                  distintos. Lo que nos une es la fe en Jesucristo y el deseo de vivirla de forma
                  real, en el día a día y acompañados.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 leading-[1.7] text-graphite/75">
                  Nos reunimos cada semana para adorar y escuchar la Palabra, y durante el resto de
                  los días la vida de la iglesia continúa en los ministerios y en los Hogares
                  Mateo, donde las relaciones se hacen cercanas.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="mt-8 border-l border-gold/60 pl-6 font-editorial text-[1.5rem] italic leading-[1.4] text-institutional sm:text-[1.75rem]">
                  Creemos que la fe se entiende mejor cuando se comparte.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Misión ------------------------------------------------------- */}
      <section className="grain section-y bg-night text-white">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="light">Nuestra misión</Eyebrow>
              </Reveal>
              <SplitHeading
                lines={["Ganar. Consolidar.", "Discipular. Enviar."]}
                delay={0.08}
                className="mt-7 font-display font-extrabold text-white [font-size:var(--text-title)] [letter-spacing:-0.035em] [line-height:1.04]"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.16}>
                <p className="leading-[1.68] text-white/70">
                  Cuatro pilares que describen el camino que queremos recorrer con cada persona que
                  llega a la iglesia.
                </p>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-[20px] bg-white/10 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <RevealItem key={pillar.number}>
                <div className="h-full bg-night p-8 transition-colors duration-500 hover:bg-institutional/35 sm:p-10">
                  <span className="font-display text-[0.8125rem] font-semibold tracking-[0.22em] text-gold">
                    {pillar.number}
                  </span>
                  <h3 className="mt-5 font-display text-[1.625rem] font-bold uppercase tracking-[-0.025em] text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-[1.65] text-white/65">{pillar.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Visión ------------------------------------------------------- */}
      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Nuestra visión</Eyebrow>
              </Reveal>
              <SplitHeading
                lines={["Una comunidad", "que acompaña."]}
                delay={0.08}
                className="mt-7 font-display font-extrabold [font-size:var(--text-title)] [letter-spacing:-0.035em] [line-height:1.04]"
              />
              <Reveal delay={0.18}>
                <p className="mt-7 leading-[1.7] text-graphite/80">
                  Queremos ser una iglesia donde cada persona encuentre un lugar: quien llega por
                  primera vez, quien vuelve después de mucho tiempo y quien lleva años sirviendo.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <PendingNote>
                  Texto editorial provisional de la maqueta. La declaración de visión oficial está
                  pendiente de confirmación por parte de la iglesia.
                </PendingNote>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
              <Figure
                src={images.oracion.src}
                alt={images.oracion.alt}
                focus={images.oracion.focus}
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="aspect-4/3"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lo que creemos ------------------------------------------------ */}
      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Lo que creemos</Eyebrow>
              </Reveal>
              <SplitHeading
                lines={["Seis convicciones", "que nos sostienen."]}
                delay={0.08}
                className="mt-7 font-display font-extrabold [font-size:var(--text-title)] [letter-spacing:-0.035em] [line-height:1.04]"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.16}>
                <p className="leading-[1.68] text-graphite/75">
                  Una introducción sencilla a aquello sobre lo que se construye la vida de nuestra
                  iglesia.
                </p>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief, index) => (
              <RevealItem key={belief.title}>
                <div className="border-t border-night/12 pt-6">
                  <span className="eyebrow text-[0.625rem] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-[1.3125rem] font-bold tracking-[-0.025em] text-night">
                    {belief.title}
                  </h3>
                  <p className="mt-3 leading-[1.65] text-graphite/75">{belief.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/visitanos">Ven a conocernos</Button>
            <Button href="/ministerios" variant="outline">
              Nuestros ministerios
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
