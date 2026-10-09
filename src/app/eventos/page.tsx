import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { PendingNote } from "@/components/ui/DemoBadge";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { EventsAgenda } from "./EventsAgenda";

export const metadata = pageMetadata({
  title: "Eventos",
  description:
    "Agenda de Iglesia Verbo de Dios Madrid: reuniones, actividades para jóvenes, formación y encuentros de comunidad.",
  path: "/eventos",
});

export default function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        titleLines={["Siempre hay", "algo por vivir."]}
        text="Nuestras próximas reuniones y actividades, reunidas en un solo lugar."
        image={{
          src: images.bienvenida.src,
          alt: images.bienvenida.alt,
          focus: images.bienvenida.focus,
          focusMobile: images.bienvenida.focusMobile,
        }}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <Reveal>
            <EventsAgenda />
          </Reveal>

          <Reveal>
            <PendingNote>
              Todos los eventos mostrados están marcados como «Evento de ejemplo»: son contenido de
              demostración. La agenda definitiva se editará desde
              <code className="mx-1.5 rounded bg-mist px-1.5 py-0.5 text-[0.75rem]">
                src/content/events.ts
              </code>
              y se reflejará automáticamente en la portada y en esta página.
            </PendingNote>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/visitanos">Planifica tu visita</Button>
            <Button href="/contacto" variant="outline">
              Pregúntanos por una actividad
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
