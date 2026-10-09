import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { images } from "@/lib/images";

/** Bloque inmersivo a ancho completo: la nota más cinematográfica de la portada. */
export function Experience() {
  return (
    <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-night text-white py-24 sm:min-h-[640px] lg:min-h-[760px]">
      <Parallax amount={6} className="absolute inset-0 -z-10 scale-[1.12]">
        <SmartImage
          src={images.adoracion.src}
          alt={images.adoracion.alt}
          focus={images.adoracion.focus}
          focusMobile={images.adoracion.focusMobile}
          sizes="100vw"
          quality={84}
          placeholderLabel="Fotografía de comunidad pendiente"
        />
      </Parallax>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(7,26,53,0.95)_0%,rgba(7,26,53,0.62)_45%,rgba(11,35,69,0.42)_100%)]"
      />

      <div className="shell relative w-full">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <Eyebrow tone="light">Vive la experiencia</Eyebrow>
            </Reveal>
            <SplitHeading
              lines={["La iglesia", "se vive juntos."]}
              delay={0.08}
              className="mt-7 font-display font-extrabold text-white [font-size:var(--text-display)] [letter-spacing:-0.042em] [line-height:0.95]"
            />
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.18}>
              <p className="max-w-[44ch] text-[var(--text-lead)] leading-[1.65] text-white/80">
                Cada reunión es una oportunidad para adorar, aprender, compartir y crecer en
                comunidad.
              </p>
              <span aria-hidden className="mt-8 block h-px w-24 bg-gold/70" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
