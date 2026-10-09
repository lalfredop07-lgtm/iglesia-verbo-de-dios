import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { PendingNote } from "@/components/ui/DemoBadge";
import { Prose } from "@/components/ui/Prose";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Aviso legal",
  description: "Aviso legal de Iglesia Verbo de Dios Madrid. Documento pendiente de los datos oficiales del titular.",
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  return (
    <>
      <PageHero eyebrow="Información" titleLines={["Aviso legal"]} size="compact" />

      <section className="section-y bg-white">
        <div className="shell">
          <Reveal>
            <Prose>
              <h2>Titular del sitio web</h2>
              <p>
                {site.name}, con domicilio en {site.address.full}.
              </p>
              <p>
                Los datos identificativos completos del titular (denominación legal, NIF, datos
                registrales y contacto oficial) están pendientes de ser facilitados por la iglesia
                y se incorporarán antes de la publicación definitiva.
              </p>

              <h2>Objeto</h2>
              <p>
                Este sitio web tiene una finalidad informativa sobre la actividad de la iglesia: sus
                reuniones, ministerios, mensajes y actividades.
              </p>

              <h2>Propiedad intelectual</h2>
              <p>
                Los contenidos, textos y fotografías publicados pertenecen a sus respectivos
                titulares. Las fotografías utilizadas en esta versión han sido facilitadas por la
                propia iglesia.
              </p>

              <h2>Responsabilidad</h2>
              <p>
                El titular no se responsabiliza del uso que terceros puedan hacer de la información
                publicada ni del contenido de los sitios externos enlazados.
              </p>
            </Prose>
          </Reveal>

          <Reveal>
            <PendingNote>
              Texto de referencia para la maqueta. El aviso legal definitivo deberá ser revisado y
              aprobado con la información oficial del titular; no se reutiliza documentación legal
              de otras entidades.
            </PendingNote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
