import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { mapsDirectionsLink, site } from "@/content/site";

export function Schedule() {
  return (
    <section className="grain section-y relative bg-night text-white">
      <div className="shell">
        <div>
          <Reveal>
            <Eyebrow tone="light">Nos vemos en casa</Eyebrow>
          </Reveal>
          <SplitHeading
            lines={["Siempre eres", "bienvenido."]}
            delay={0.08}
            className="mt-7 font-display font-extrabold text-white [font-size:var(--text-display)] [letter-spacing:-0.04em] [line-height:0.96]"
          />
        </div>

        <RevealGroup className="mt-14 sm:mt-18" step={0.1}>
          {site.services.map((service) => (
            <RevealItem key={service.id}>
              <div className="grid gap-3 border-t border-white/12 py-7 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-8">
                <p className="eyebrow text-white/55 sm:col-span-3">{service.day}</p>
                <p className="font-display text-[2.25rem] font-extrabold tracking-[-0.04em] text-white sm:col-span-4 sm:text-[2.75rem]">
                  {service.time}
                </p>
                <div className="sm:col-span-5">
                  <p className="text-white/75">{service.label}</p>
                  {service.note ? (
                    <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-white/45">
                      {service.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </RevealItem>
          ))}
          <div className="border-t border-white/12" />
        </RevealGroup>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-[0.625rem] text-gold">Dónde nos reunimos</p>
            <p className="mt-4 font-display text-[1.375rem] font-semibold leading-snug tracking-[-0.02em] text-white sm:text-[1.625rem]">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end sm:gap-4">
              <Button href={mapsDirectionsLink} variant="light" className="w-full sm:w-auto">
                Cómo llegar
              </Button>
              <Button href="/visitanos" variant="ghost" className="w-full sm:w-auto">
                Planifica tu visita
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
