import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PendingNote } from "@/components/ui/DemoBadge";
import { beliefs, beliefsNote } from "@/content/beliefs";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Declaración de fe",
  description:
    "Fundamentos de fe de Iglesia Verbo de Dios Madrid. Documento oficial pendiente de recibir de la iglesia.",
  path: "/declaracion-de-fe",
});

export default function DeclaracionDeFePage() {
  return (
    <>
      <PageHero
        eyebrow="Declaración de fe"
        titleLines={["En qué", "creemos."]}
        text={site.tradition}
        size="compact"
      />

      <section className="section-y bg-white">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Fundamentos</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 leading-[1.7] text-graphite/75">
                  Una introducción breve a las convicciones que sostienen la vida de la iglesia.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <RevealGroup step={0.08}>
                {beliefs.map((belief, index) => (
                  <RevealItem key={belief.title}>
                    <div className="border-t border-night/12 py-7">
                      <span className="eyebrow text-[0.625rem] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 font-display text-[1.3125rem] font-bold tracking-[-0.025em] text-night">
                        {belief.title}
                      </h2>
                      <p className="mt-3 max-w-[64ch] leading-[1.7] text-graphite/80">
                        {belief.text}
                      </p>
                    </div>
                  </RevealItem>
                ))}
                <div className="border-t border-night/12" />
              </RevealGroup>

              <Reveal>
                <PendingNote>{beliefsNote}</PendingNote>
              </Reveal>

              <Reveal delay={0.1} className="mt-10">
                <Button href="/conocenos" variant="outline">
                  Conócenos
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
