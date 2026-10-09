import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DemoBadge, PendingNote } from "@/components/ui/DemoBadge";
import { YouTubeLite } from "@/components/ui/YouTubeLite";
import { channelUrl, featuredSermon } from "@/content/sermons";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { SermonLibrary } from "./SermonLibrary";

export const metadata = pageMetadata({
  title: "Mensajes",
  description:
    "Biblioteca de predicaciones de Iglesia Verbo de Dios Madrid: enseñanza bíblica, series y mensajes publicados en nuestro canal de YouTube.",
  path: "/mensajes",
});

export default function MensajesPage() {
  return (
    <>
      <PageHero
        eyebrow="La Palabra"
        titleLines={["Mensajes", "que edifican."]}
        text="Toda la enseñanza de la iglesia, reunida en un solo lugar. Las predicaciones se publican en nuestro canal de YouTube."
        image={{
          src: images.predicacion.src,
          alt: images.predicacion.alt,
          focus: images.predicacion.focus,
          focusMobile: images.predicacion.focusMobile,
        }}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-8">
              <YouTubeLite
                youtubeId={featuredSermon.youtubeId}
                title={featuredSermon.title}
                poster={featuredSermon.image}
                posterAlt="Reunión de la iglesia durante la predicación"
                channelUrl={channelUrl}
              />
            </Reveal>

            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <Eyebrow>Destacado</Eyebrow>
                <h2 className="mt-5 font-display text-[1.625rem] font-bold tracking-[-0.03em] text-night">
                  {featuredSermon.title}
                </h2>
                <p className="mt-4 leading-[1.68] text-graphite/75">{featuredSermon.summary}</p>
                {featuredSermon.demo ? (
                  <div className="mt-5">
                    <DemoBadge>Vídeo pendiente de enlazar</DemoBadge>
                  </div>
                ) : null}
                <div className="mt-8">
                  <Button href={channelUrl} variant="outline">
                    Ir al canal de YouTube
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[var(--spacing-section)] bg-white">
        <div className="shell">
          <Reveal>
            <SermonLibrary />
          </Reveal>

          <Reveal>
            <PendingNote>
              Los mensajes mostrados son contenido de demostración: no se atribuye ningún título,
              predicador ni fecha a personas reales. Al incorporar los identificadores de vídeo
              verificados, las tarjetas enlazarán y reproducirán el contenido real.
            </PendingNote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
