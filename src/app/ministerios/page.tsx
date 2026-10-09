import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { ministries } from "@/content/ministries";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Ministerios",
  description:
    "Jóvenes, niños, mujeres, hombres y grupos pequeños: descubre los ministerios de Iglesia Verbo de Dios Madrid y encuentra tu lugar.",
  path: "/ministerios",
});

export default function MinisteriosPage() {
  return (
    <>
      <PageHero
        eyebrow="Ministerios"
        titleLines={["Un lugar para", "cada persona."]}
        text="Cada ministerio existe para lo mismo: que nadie camine solo y que cada persona crezca en su fe acompañada."
        image={{
          src: images.adoracion.src,
          alt: images.adoracion.alt,
          focus: images.adoracion.focus,
          focusMobile: images.adoracion.focusMobile,
        }}
      />

      <section className="section-y bg-white">
        <div className="shell">
          <RevealGroup className="space-y-5 sm:space-y-6" step={0.08}>
            {ministries.map((ministry, index) => (
              <RevealItem key={ministry.slug}>
                <Link
                  href={`/ministerios/${ministry.slug}`}
                  className="group grid overflow-hidden rounded-[20px] bg-ice transition-colors duration-500 hover:bg-mist lg:grid-cols-12 lg:items-stretch"
                >
                  <div
                    className={`relative min-h-[260px] lg:col-span-5 lg:min-h-[340px] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="media-zoom absolute inset-0">
                      <SmartImage
                        src={ministry.image}
                        alt={ministry.imageAlt}
                        sizes="(max-width: 1024px) 92vw, 40vw"
                        focus="50% 42%"
                        placeholderLabel={`Fotografía de ${ministry.shortName} pendiente`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-7 lg:p-12">
                    <p className="eyebrow text-[0.625rem] text-institutional">
                      {String(index + 1).padStart(2, "0")} · {ministry.eyebrow}
                    </p>

                    <div className="mt-4 flex items-start justify-between gap-6">
                      <h2 className="font-display text-[1.75rem] font-extrabold tracking-[-0.03em] text-night sm:text-[2.25rem]">
                        {ministry.name}
                      </h2>
                      <ArrowUpRight
                        aria-hidden
                        className="arrow-shift mt-2 h-5 w-5 shrink-0 text-night/40 group-hover:text-night"
                      />
                    </div>

                    <p className="mt-4 max-w-[58ch] leading-[1.68] text-graphite/75">
                      {ministry.summary}
                    </p>

                    {ministry.schedule.status === "confirmed" && ministry.schedule.value ? (
                      <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-night/12 px-4 py-2 text-[0.8125rem] text-graphite/70">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {ministry.schedule.value}
                      </p>
                    ) : (
                      <p className="mt-6 text-[0.8125rem] text-graphite/50">
                        Horario pendiente de confirmar
                      </p>
                    )}
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-14 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/visitanos">Planifica tu visita</Button>
            <Button href="/contacto" variant="outline">
              Quiero más información
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
