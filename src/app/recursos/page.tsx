import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PendingNote } from "@/components/ui/DemoBadge";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Recursos",
  description:
    "Recursos de Iglesia Verbo de Dios Madrid: mensajes, enseñanza y materiales para crecer en la fe.",
  path: "/recursos",
});

const resources = [
  {
    title: "Mensajes",
    text: "Todas las predicaciones publicadas por la iglesia, con búsqueda y filtros.",
    href: "/mensajes",
    external: false,
  },
  {
    title: "Canal de YouTube",
    text: "El archivo audiovisual completo de la iglesia.",
    href: site.youtube.channelUrl,
    external: true,
  },
  {
    title: "Hogares Mateo",
    text: "Grupos pequeños donde estudiar la Biblia y compartir la vida.",
    href: "/ministerios/hogares-mateo",
    external: false,
  },
  {
    title: "Formación bíblica",
    text: "Itinerarios de formación, en preparación.",
    href: "/formacion",
    external: false,
  },
];

export default function RecursosPage() {
  return (
    <>
      <PageHero
        eyebrow="Recursos"
        titleLines={["Material para", "seguir creciendo."]}
        text="Una selección de lo que ya está disponible y de lo que iremos publicando."
        size="compact"
      />

      <section className="section-y bg-white">
        <div className="shell">
          <Reveal>
            <Eyebrow>Disponible ahora</Eyebrow>
          </Reveal>

          <RevealGroup className="mt-10 grid gap-x-12 gap-y-2 sm:grid-cols-2" step={0.07}>
            {resources.map((resource) => (
              <RevealItem key={resource.title}>
                <a
                  href={resource.href}
                  {...(resource.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group block border-t border-night/12 py-7"
                >
                  <h2 className="font-display text-[1.3125rem] font-bold tracking-[-0.025em] text-night">
                    <span className="link-underline">{resource.title}</span>
                  </h2>
                  <p className="mt-2.5 leading-[1.65] text-graphite/75">{resource.text}</p>
                </a>
              </RevealItem>
            ))}
            <div className="border-t border-night/12 sm:col-span-2" />
          </RevealGroup>

          <Reveal>
            <PendingNote>
              Los materiales descargables (guías de estudio, devocionales u otros recursos) se
              añadirán cuando la iglesia los facilite.
            </PendingNote>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <Button href="/mensajes">Ir a los mensajes</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
