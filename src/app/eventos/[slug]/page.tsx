import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { DemoBadge, PendingNote } from "@/components/ui/DemoBadge";
import { events, formatEventDate, getEvent } from "@/content/events";
import { mapsDirectionsLink, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return pageMetadata({ title: "Evento", description: site.description });

  return pageMetadata({
    title: event.title,
    description: event.summary,
    path: `/eventos/${event.slug}`,
    image: event.image,
  });
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const date = formatEventDate(event.date);

  return (
    <>
      <PageHero
        eyebrow={`Eventos · ${event.category}`}
        titleLines={[event.title]}
        text={event.summary}
        image={event.image ? { src: event.image, alt: event.title, focus: "50% 42%" } : undefined}
        size="compact"
      />

      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              {event.demo ? (
                <Reveal>
                  <DemoBadge />
                </Reveal>
              ) : null}

              <Reveal delay={0.06}>
                <p className="mt-6 text-[var(--text-lead)] leading-[1.7] text-graphite/85">
                  {event.description}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <PendingNote>
                  Ficha de demostración. Cuando la iglesia confirme su agenda, esta página mostrará
                  los datos reales. La inscripción en línea queda preparada para una fase
                  posterior: esta maqueta no recoge datos ni gestiona pagos ni reservas.
                </PendingNote>
              </Reveal>

              <Reveal delay={0.2} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href={mapsDirectionsLink}>Cómo llegar</Button>
                <Button href="/eventos" variant="outline">
                  Volver a la agenda
                </Button>
              </Reveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <div className="rounded-[20px] bg-ice p-7 sm:p-8">
                  <h2 className="eyebrow text-[0.625rem] text-institutional">Detalles</h2>

                  <dl className="mt-6 space-y-5 text-[0.9375rem]">
                    <div className="flex gap-3">
                      <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      <div>
                        <dt className="text-graphite/50">Fecha</dt>
                        <dd className="mt-0.5 font-medium capitalize text-night">
                          {date.weekday} {date.day} {date.month} {date.year}
                        </dd>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      <div>
                        <dt className="text-graphite/50">Hora</dt>
                        <dd className="mt-0.5 font-medium text-night">{event.time}</dd>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      <div>
                        <dt className="text-graphite/50">Lugar</dt>
                        <dd className="mt-0.5 font-medium text-night">{event.place}</dd>
                      </div>
                    </div>
                  </dl>

                  <p className="mt-7 border-t border-night/10 pt-6 text-[0.875rem] leading-relaxed text-graphite/65">
                    ¿Es tu primera vez?{" "}
                    <Link href="/visitanos" className="link-underline text-institutional">
                      Planifica tu visita
                    </Link>{" "}
                    y te contamos cómo encontrarnos.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
