import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqList } from "@/components/ui/FaqList";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PendingNote } from "@/components/ui/DemoBadge";
import { visitFaqs } from "@/content/faqs";
import { mapsDirectionsLink, site } from "@/content/site";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Visítanos",
  description:
    "Cómo encontrarnos: dirección, horarios de las reuniones y todo lo que necesitas para tu primera visita a Iglesia Verbo de Dios Madrid.",
  path: "/visitanos",
});

const steps = [
  {
    number: "01",
    title: "Llega con tiempo",
    text: "Unos minutos antes podrás saludar, encontrar sitio y empezar con tranquilidad.",
  },
  {
    number: "02",
    title: "Ven como estás",
    text: "No hay código de vestimenta ni inscripción previa. Vienes como eres.",
  },
  {
    number: "03",
    title: "Quédate a saludar",
    text: "Al terminar siempre hay tiempo para conocernos sin prisa.",
  },
];

export default function VisitanosPage() {
  return (
    <>
      <PageHero
        eyebrow="Visítanos"
        titleLines={["Nos encantará", "conocerte."]}
        text="Queremos que tu primera visita sea sencilla. Aquí tienes todo lo que necesitas para encontrarnos."
        image={{
          src: images.bienvenida.src,
          alt: images.bienvenida.alt,
          focus: images.bienvenida.focus,
          focusMobile: images.bienvenida.focusMobile,
        }}
      />

      {/* Dirección y horarios ------------------------------------------- */}
      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Dónde estamos</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 font-display text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-night sm:text-[2.125rem]">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </p>
              </Reveal>

              <Reveal delay={0.14} className="mt-8">
                <Button href={mapsDirectionsLink}>Cómo llegar</Button>
              </Reveal>

              <div className="mt-12">
                <Reveal>
                  <Eyebrow>Horarios</Eyebrow>
                </Reveal>
                <RevealGroup className="mt-6" step={0.08}>
                  {site.services.map((service) => (
                    <RevealItem key={service.id}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-night/12 py-5">
                        <span className="font-display text-[1.0625rem] font-semibold text-night">
                          {service.day}
                        </span>
                        <span className="font-display text-[1.375rem] font-extrabold tracking-[-0.03em] text-institutional">
                          {service.time}
                        </span>
                        <span className="w-full text-[0.875rem] text-graphite/60">
                          {service.label}
                        </span>
                      </div>
                    </RevealItem>
                  ))}
                  <div className="border-t border-night/12" />
                </RevealGroup>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <MapEmbed />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Primera visita -------------------------------------------------- */}
      <section className="grain section-y bg-night text-white">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal>
                <Eyebrow tone="light">Tu primera visita</Eyebrow>
              </Reveal>
              <SplitHeading
                lines={["Sencillo:", "sólo ven."]}
                delay={0.08}
                className="mt-7 font-display font-extrabold text-white [font-size:var(--text-display)] [letter-spacing:-0.04em] [line-height:0.96]"
              />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.16}>
                <p className="leading-[1.68] text-white/70">
                  No necesitas avisar ni prepararte de ninguna manera especial.
                </p>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-[20px] bg-white/10 sm:grid-cols-3">
            {steps.map((step) => (
              <RevealItem key={step.number}>
                <div className="h-full bg-night p-8 sm:p-9">
                  <span className="font-display text-[0.8125rem] font-semibold tracking-[0.22em] text-gold">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-[1.3125rem] font-bold tracking-[-0.025em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-[1.65] text-white/65">{step.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Preguntas frecuentes --------------------------------------------- */}
      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Preguntas frecuentes</Eyebrow>
              </Reveal>
              <SplitHeading
                lines={["Lo que sueles", "preguntarnos."]}
                delay={0.08}
                className="mt-7 font-display font-extrabold [font-size:var(--text-title)] [letter-spacing:-0.035em] [line-height:1.04]"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <FaqList items={visitFaqs} />
              </Reveal>

              <Reveal>
                <PendingNote>
                  No publicamos detalles logísticos sin verificar (aparcamiento, accesibilidad o
                  servicio infantil durante cada reunión). Se añadirán en cuanto la iglesia los
                  confirme.
                </PendingNote>
              </Reveal>

              <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/contacto">Tengo otra pregunta</Button>
                <Button href="/oracion" variant="outline">
                  Pedir oración
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
