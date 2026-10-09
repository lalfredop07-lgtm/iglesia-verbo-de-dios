import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PendingNote } from "@/components/ui/DemoBadge";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { mapsDirectionsLink, site } from "@/content/site";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Ponte en contacto con Iglesia Verbo de Dios Madrid: dirección, horarios y nuestras redes sociales oficiales.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        titleLines={["Hablemos."]}
        text="Estamos a un mensaje de distancia. Escríbenos y te respondemos lo antes posible."
        image={{
          src: images.bienvenida.src,
          alt: images.bienvenida.alt,
          focus: images.bienvenida.focus,
          focusMobile: images.bienvenida.focusMobile,
        }}
        size="compact"
      />

      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Escríbenos</Eyebrow>
              </Reveal>

              <RevealGroup className="mt-8" step={0.07}>
                {site.social.map((item) => (
                  <RevealItem key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-5 border-t border-night/12 py-5"
                    >
                      <span className="font-display text-[1.125rem] font-semibold tracking-[-0.02em] text-night">
                        <span className="link-underline">{item.label}</span>
                      </span>
                      <span className="text-[0.875rem] text-graphite/55">{item.handle}</span>
                    </a>
                  </RevealItem>
                ))}
                <div className="border-t border-night/12" />
              </RevealGroup>

              <Reveal>
                <PendingNote>
                  El teléfono y el correo electrónico oficiales están pendientes de que la iglesia
                  los facilite. No publicamos datos de contacto sin confirmar: mientras tanto, las
                  redes sociales son la vía más rápida.
                </PendingNote>
              </Reveal>

              <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="/oracion">Pedir oración</Button>
                <Button href={mapsDirectionsLink} variant="outline">
                  Cómo llegar
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.1}>
                <MapEmbed />
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h2 className="eyebrow text-[0.625rem] text-institutional">Dirección</h2>
                    <p className="mt-3 leading-relaxed text-graphite/80">
                      {site.address.street}
                      <br />
                      {site.address.postalCode} {site.address.city}
                    </p>
                  </div>
                  <div>
                    <h2 className="eyebrow text-[0.625rem] text-institutional">Horarios</h2>
                    <ul className="mt-3 space-y-1.5 text-graphite/80">
                      {site.services.map((service) => (
                        <li key={service.id} className="flex justify-between gap-4">
                          <span>{service.day}</span>
                          <span className="font-medium text-night">{service.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
