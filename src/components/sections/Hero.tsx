"use client";

import { Parallax } from "@/components/motion/Parallax";
import { MountReveal } from "@/components/motion/MountReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[620px] flex-col justify-end overflow-hidden bg-night text-white lg:min-h-[92svh]">
      {/* Fotografía principal del culto: protagonista absoluto del hero. */}
      <Parallax amount={5} className="absolute inset-0 -z-10 scale-[1.12]">
        <SmartImage
          src={images.heroHome.src}
          alt={images.heroHome.alt}
          focus={images.heroHome.focus}
          focusMobile={images.heroHome.focusMobile}
          sizes="100vw"
          priority
          quality={86}
          placeholderLabel="Fotografía del culto pendiente"
        />
      </Parallax>

      {/* Gradientes de contraste: legibilidad sin apagar la fotografía.
          En móvil el texto ocupa todo el ancho sobre la zona más luminosa del
          escenario, así que la capa es algo más densa que en escritorio. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(7,26,53,0.95)_0%,rgba(7,26,53,0.72)_40%,rgba(7,26,53,0.34)_72%,rgba(7,26,53,0.48)_100%)] lg:bg-[linear-gradient(to_top,rgba(7,26,53,0.92)_0%,rgba(7,26,53,0.6)_36%,rgba(7,26,53,0.18)_70%,rgba(7,26,53,0.42)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 lg:bg-[linear-gradient(to_right,rgba(11,35,69,0.78)_0%,rgba(11,35,69,0.32)_48%,rgba(11,35,69,0)_75%)]"
      />

      <div className="shell relative w-full pb-14 pt-32 sm:pb-16 lg:pb-20">
        {/* Sin max-width aquí a propósito: el titular ya trae sus propios
            saltos de línea forzados (`lines`), así que no necesita —y no debe
            recibir— una anchura más estrecha calculada en `ch` para un cuerpo
            de texto pequeño; el párrafo de abajo sí limita la suya. */}
        <div>
          <SplitHeading
            as="h1"
            trigger="mount"
            delay={0.1}
            lines={["Iglesia", "Verbo de Dios"]}
            className="font-display font-extrabold uppercase text-white [font-size:var(--text-hero)] [letter-spacing:-0.045em] [line-height:0.92]"
          />

          <MountReveal delay={0.55}>
            <p className="mt-8 max-w-[34ch] text-[var(--text-lead)] leading-[1.6] text-white/85 sm:max-w-[46ch]">
              Una comunidad donde crecer en la fe, encontrar familia y caminar juntos siguiendo a
              Jesús.
            </p>
          </MountReveal>

          <MountReveal delay={0.66} className="mt-10">
            <Button href="/conocenos" variant="light" className="w-full sm:w-auto">
              Conoce nuestra iglesia
            </Button>
          </MountReveal>
        </div>
      </div>
    </section>
  );
}
