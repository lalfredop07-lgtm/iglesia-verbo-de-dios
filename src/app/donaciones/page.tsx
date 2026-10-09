import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PendingNote } from "@/components/ui/DemoBadge";
import { Prose } from "@/components/ui/Prose";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Donaciones",
  description:
    "Información sobre las ofrendas y donaciones a Iglesia Verbo de Dios Madrid. Datos pendientes de confirmación oficial.",
  path: "/donaciones",
});

export default function DonacionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Donaciones"
        titleLines={["Sostener", "la obra juntos."]}
        text="Una sección preparada para explicar cómo colaborar con la iglesia, cuando sus datos oficiales estén confirmados."
        size="compact"
      />

      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Importante</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.1}>
                <Prose>
                  <p>
                    En esta maqueta no se publica ningún medio de donación: ni número de cuenta, ni
                    pasarela de pago, ni enlaces de terceros. Hacerlo sin verificación podría
                    exponer a la comunidad a un fraude.
                  </p>
                  <h2>Qué hace falta para activarla</h2>
                  <ul>
                    <li>Los datos bancarios o el proveedor de pagos autorizado por la iglesia.</li>
                    <li>El texto explicativo que la propia iglesia quiera publicar.</li>
                    <li>La información fiscal aplicable, si procede.</li>
                  </ul>
                  <p>
                    Mientras tanto, si quieres colaborar puedes consultarlo directamente en
                    cualquier reunión o escribirnos por nuestras redes sociales.
                  </p>
                </Prose>
              </Reveal>

              <Reveal>
                <PendingNote>
                  Sección inactiva a propósito. No existe ningún botón que simule un pago.
                </PendingNote>
              </Reveal>

              <Reveal delay={0.1} className="mt-10">
                <Button href="/contacto" variant="outline">
                  Escríbenos
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
