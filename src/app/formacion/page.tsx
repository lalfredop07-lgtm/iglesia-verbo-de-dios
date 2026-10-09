import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PendingNote } from "@/components/ui/DemoBadge";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Formación bíblica",
  description:
    "Espacio de formación bíblica de Iglesia Verbo de Dios Madrid. Programas e inscripciones pendientes de confirmación.",
  path: "/formacion",
});

const blocks = [
  {
    number: "01",
    title: "Programas",
    text: "Espacio reservado para los itinerarios de formación que la iglesia confirme: contenidos, duración y requisitos.",
  },
  {
    number: "02",
    title: "Modalidades",
    text: "Aquí se detallarán las modalidades disponibles (presencial, en línea o mixta) una vez definidas.",
  },
  {
    number: "03",
    title: "Inscripciones",
    text: "La inscripción se activará cuando exista un proceso oficial. Esta maqueta no recoge datos ni gestiona pagos.",
  },
];

export default function FormacionPage() {
  return (
    <>
      <PageHero
        eyebrow="Formación bíblica"
        titleLines={["Crecer en el", "conocimiento", "de la Palabra."]}
        text="Un espacio preparado para presentar la formación bíblica de la iglesia cuando sus contenidos estén confirmados."
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
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>En preparación</Eyebrow>
              </Reveal>
              <SplitHeading
                lines={["Una sección lista", "para crecer."]}
                delay={0.08}
                className="mt-7 font-display font-extrabold [font-size:var(--text-title)] [letter-spacing:-0.035em] [line-height:1.04]"
              />
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.12}>
                <p className="text-[var(--text-lead)] leading-[1.68] text-graphite/85">
                  El material histórico de la iglesia menciona un Diplomado en Biblia y Teología y
                  enlaces a ETS Madrid. Ambas referencias se recogen aquí como antecedentes
                  pendientes de validación, no como una oferta académica vigente.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <PendingNote>
                  No se publican titulaciones, precios, duración, créditos ni certificaciones. Toda
                  esa información deberá llegar documentada desde la iglesia antes de activar esta
                  página.
                </PendingNote>
              </Reveal>
            </div>
          </div>

          <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-[20px] bg-night/10 sm:grid-cols-3">
            {blocks.map((block) => (
              <RevealItem key={block.number}>
                <div className="h-full bg-ice p-8 sm:p-9">
                  <span className="font-display text-[0.8125rem] font-semibold tracking-[0.22em] text-[#8a6c33]">
                    {block.number}
                  </span>
                  <h2 className="mt-5 font-display text-[1.3125rem] font-bold tracking-[-0.025em] text-night">
                    {block.title}
                  </h2>
                  <p className="mt-3 leading-[1.65] text-graphite/75">{block.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/contacto">Quiero que me avisen</Button>
            <Button href="/mensajes" variant="outline">
              Mientras tanto, escucha los mensajes
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
