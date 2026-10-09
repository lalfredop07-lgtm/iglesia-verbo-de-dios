import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { YouTubeLite } from "@/components/ui/YouTubeLite";
import { channelUrl, featuredSermon } from "@/content/sermons";

export function Sermons() {
  return (
    <section className="section-y bg-white">
      <div className="shell">
        <div>
          <Reveal>
            <Eyebrow>La Palabra</Eyebrow>
          </Reveal>
          <SplitHeading
            lines={["Un mensaje para", "cada temporada."]}
            delay={0.08}
            className="mt-7 font-display font-extrabold [font-size:var(--text-display)] [letter-spacing:-0.04em] [line-height:0.98]"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16 sm:mt-16 lg:items-center">
          <Reveal className="lg:col-span-7">
            <YouTubeLite
              youtubeId={featuredSermon.youtubeId}
              title="Iglesia Verbo de Dios Madrid en YouTube"
              poster={featuredSermon.image}
              posterAlt="Reunión de la iglesia durante la predicación"
              channelUrl={channelUrl}
            />
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-[var(--text-lead)] leading-[1.68] text-graphite/80">
                Este es nuestro canal de YouTube: cada semana transmitimos nuestros servicios en
                directo, para que puedas acompañarnos en la alabanza y la Palabra estés donde
                estés.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-9">
              <Button href="/mensajes">Ver todos los mensajes</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
