import { Parallax } from "@/components/motion/Parallax";
import { MountReveal } from "@/components/motion/MountReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  /** Cada cadena es una línea del titular: los saltos son intencionales. */
  titleLines: string[];
  text?: string;
  image?: { src: string; alt: string; focus?: string; focusMobile?: string };
  actions?: ReactNode;
  /** `tall` para páginas principales, `compact` para páginas de servicio. */
  size?: "tall" | "compact";
}

export function PageHero({
  eyebrow,
  titleLines,
  text,
  image,
  actions,
  size = "tall",
}: PageHeroProps) {
  return (
    <section
      className={cx(
        "grain relative isolate flex flex-col justify-end overflow-hidden bg-night text-white",
        size === "tall"
          ? "min-h-[520px] pb-16 pt-36 sm:min-h-[600px] sm:pb-20 sm:pt-40"
          : "min-h-[400px] pb-14 pt-32 sm:min-h-[440px] sm:pb-16 sm:pt-36",
      )}
    >
      {image ? (
        <>
          <Parallax amount={5} className="absolute inset-0 -z-10 scale-[1.1]">
            <SmartImage
              src={image.src}
              alt={image.alt}
              focus={image.focus}
              focusMobile={image.focusMobile}
              sizes="100vw"
              priority
              quality={82}
              placeholderLabel="Fotografía pendiente"
            />
          </Parallax>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(7,26,53,0.93)_0%,rgba(7,26,53,0.7)_45%,rgba(7,26,53,0.5)_100%)]"
          />
        </>
      ) : null}

      <div className="shell relative w-full">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <MountReveal delay={0.06}>
              <p className="eyebrow flex items-center gap-3.5 text-white/70">
                <span aria-hidden className="inline-block h-px w-9 bg-gold" />
                {eyebrow}
              </p>
            </MountReveal>

            <SplitHeading
              as="h1"
              trigger="mount"
              delay={0.14}
              lines={titleLines}
              className="mt-6 font-display font-extrabold text-white [font-size:var(--text-display)] [letter-spacing:-0.04em] [line-height:0.98]"
            />
          </div>

          {text ? (
            <div className="lg:col-span-4">
              <MountReveal delay={0.34}>
                <p className="max-w-[46ch] leading-[1.68] text-white/75">{text}</p>
              </MountReveal>
            </div>
          ) : null}
        </div>

        {actions ? (
          <MountReveal delay={0.44} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            {actions}
          </MountReveal>
        ) : null}
      </div>
    </section>
  );
}
