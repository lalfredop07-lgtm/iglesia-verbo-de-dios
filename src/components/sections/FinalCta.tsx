import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { images } from "@/lib/images";

/** Cierre de la portada: enlaza visualmente con el pie, sin corte abrupto. */
export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-night text-white">
      <Parallax amount={5} className="absolute inset-0 -z-10 scale-[1.1]">
        <SmartImage
          src={images.ctaFinal.src}
          alt={images.ctaFinal.alt}
          focus={images.ctaFinal.focus}
          focusMobile={images.ctaFinal.focusMobile}
          sizes="100vw"
          quality={82}
          placeholderLabel="Fotografía pendiente"
        />
      </Parallax>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(7,26,53,0.82)_0%,rgba(7,26,53,0.9)_55%,rgba(11,35,69,1)_100%)]"
      />

      <div className="shell relative py-28 text-center sm:py-36 lg:py-44">
        <Reveal>
          <p className="eyebrow text-gold">Te esperamos</p>
        </Reveal>

        <SplitHeading
          lines={["Tu lugar", "está aquí."]}
          delay={0.08}
          className="mt-7 font-display font-extrabold text-white [font-size:var(--text-hero)] [letter-spacing:-0.045em] [line-height:0.9]"
        />

        <Reveal delay={0.22}>
          <p className="mx-auto mt-8 max-w-[52ch] text-[var(--text-lead)] leading-[1.65] text-white/80">
            Queremos que nos conozcas. Ven y descubre una comunidad en la que puedes crecer,
            compartir y caminar en la fe.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/visitanos" variant="light" className="w-full sm:w-auto">
              Planifica tu visita
            </Button>
            <Button href="/conocenos" variant="ghost" className="w-full sm:w-auto">
              Conócenos
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
