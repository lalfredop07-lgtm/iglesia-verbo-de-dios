import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Welcome() {
  return (
    <section className="section-y relative bg-white">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Nuestra casa</Eyebrow>
            </Reveal>

            <SplitHeading
              lines={["Mucho más que", "un lugar.", "Una familia."]}
              delay={0.08}
              className="mt-7 font-display font-extrabold [font-size:var(--text-display)] [letter-spacing:-0.04em] [line-height:0.96]"
              lineClassName="[&:last-child]:text-institutional"
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.12}>
              <p className="text-[var(--text-lead)] leading-[1.68] text-graphite/85">
                En Verbo de Dios creemos en el poder de la fe, la Palabra de Dios y las relaciones
                que transforman vidas. Queremos que cada persona encuentre un espacio para crecer,
                compartir y caminar acompañada.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-8 border-l border-gold/60 pl-6 font-editorial text-[1.5rem] italic leading-[1.4] text-institutional sm:text-[1.75rem]">
                Aquí nadie tiene que caminar solo.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-10">
              <Button href="/conocenos" variant="outline">
                Descubre quiénes somos
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
