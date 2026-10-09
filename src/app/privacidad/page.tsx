import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { PendingNote } from "@/components/ui/DemoBadge";
import { Prose } from "@/components/ui/Prose";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Política de privacidad",
  description:
    "Política de privacidad de Iglesia Verbo de Dios Madrid. Documento pendiente de los datos oficiales del responsable del tratamiento.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <>
      <PageHero eyebrow="Información" titleLines={["Política", "de privacidad"]} size="compact" />

      <section className="section-y bg-white">
        <div className="shell">
          <Reveal>
            <Prose>
              <h2>Estado actual de esta web</h2>
              <p>
                Esta versión es una maqueta de presentación. No recoge, no transmite y no almacena
                datos personales: el formulario de petición de oración está desconectado a propósito
                y no envía la información a ningún servidor ni la guarda en el navegador.
              </p>

              <h2>Cookies</h2>
              <p>
                La web no instala cookies de analítica ni de publicidad. Las páginas «Visítanos» y
                «Contacto» incluyen un mapa de Google Maps incrustado para ayudarte a llegar; al
                visitar esas páginas se establece una conexión con los servidores de Google, sujeta
                a sus propias condiciones.
              </p>

              <h2>Contenido audiovisual</h2>
              <p>
                Los vídeos se cargan de forma diferida y únicamente al pulsar «Reproducir»,
                utilizando el dominio sin cookies de YouTube.
              </p>

              <h2>Cuando el formulario se active</h2>
              <p>
                Antes de activar cualquier formulario será necesario definir el responsable del
                tratamiento, la finalidad, la base jurídica, el plazo de conservación, los
                destinatarios y la forma de ejercer los derechos de acceso, rectificación,
                supresión, oposición, limitación y portabilidad.
              </p>
            </Prose>
          </Reveal>

          <Reveal>
            <PendingNote>
              Texto de referencia para la maqueta. La política definitiva deberá redactarse con los
              datos oficiales del responsable del tratamiento antes del lanzamiento.
            </PendingNote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
