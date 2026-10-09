import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SmartImage } from "@/components/ui/SmartImage";
import { ministries, type Ministry } from "@/content/ministries";
import { cx } from "@/lib/utils";

interface CardProps {
  ministry: Ministry;
  className?: string;
  size: "lead" | "medium" | "wide";
  sizes: string;
}

function MinistryCard({ ministry, className, size, sizes }: CardProps) {
  const isLead = size === "lead";

  return (
    <Link
      href={`/ministerios/${ministry.slug}`}
      className={cx(
        "group relative flex overflow-hidden rounded-[20px] bg-night text-white",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
        className,
      )}
    >
      <div className="media-zoom absolute inset-0">
        <SmartImage
          src={ministry.image}
          alt={ministry.imageAlt}
          sizes={sizes}
          focus="50% 42%"
          placeholderLabel={`Fotografía de ${ministry.shortName} pendiente`}
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,26,53,0.92)_0%,rgba(7,26,53,0.5)_42%,rgba(7,26,53,0.08)_78%)] transition-opacity duration-[600ms] group-hover:opacity-90"
      />

      <div className="relative flex w-full flex-col justify-end p-6 sm:p-7 lg:p-8">
        <p className="eyebrow text-[0.625rem] text-gold-soft">{ministry.eyebrow}</p>

        <div className="mt-3 flex items-start justify-between gap-5">
          <h3
            className={cx(
              "font-display font-bold tracking-[-0.03em] text-white",
              isLead ? "text-[1.875rem] sm:text-[2.5rem] lg:text-[3rem]" : "text-[1.4375rem] sm:text-[1.625rem]",
            )}
          >
            {ministry.name}
          </h3>
          <ArrowUpRight
            aria-hidden
            className="arrow-shift mt-1.5 h-5 w-5 shrink-0 text-white/65 group-hover:text-white"
          />
        </div>

        <p
          className={cx(
            "mt-3 leading-[1.6] text-white/70",
            isLead ? "max-w-[46ch] text-[0.9375rem] sm:text-base" : "max-w-[40ch] text-[0.875rem]",
          )}
        >
          {ministry.summary}
        </p>
      </div>
    </Link>
  );
}

export function MinistriesGrid() {
  const [lead, kids, women, men, homes] = ministries;
  if (!lead || !kids || !women || !men || !homes) return null;

  return (
    <section className="section-y bg-white">
      <div className="shell">
        <div>
          <Reveal>
            <Eyebrow>Hay un lugar para todos</Eyebrow>
          </Reveal>
          <SplitHeading
            lines={["Cada generación.", "Un mismo propósito."]}
            delay={0.08}
            className="mt-7 font-display font-extrabold [font-size:var(--text-display)] [letter-spacing:-0.04em] [line-height:0.98]"
          />
        </div>

        <div className="mt-12 sm:mt-16">
          <Reveal>
            <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
              <MinistryCard
                ministry={lead}
                size="lead"
                sizes="(max-width: 1024px) 92vw, 56vw"
                className="min-h-[420px] sm:min-h-[480px] lg:col-span-7 lg:row-span-2 lg:min-h-[640px]"
              />
              <MinistryCard
                ministry={kids}
                size="medium"
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="min-h-[300px] lg:col-span-5 lg:min-h-[310px]"
              />
              <MinistryCard
                ministry={women}
                size="medium"
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="min-h-[300px] lg:col-span-5 lg:min-h-[310px]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-12">
              <MinistryCard
                ministry={men}
                size="wide"
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="min-h-[280px] lg:col-span-6 lg:min-h-[320px]"
              />
              <MinistryCard
                ministry={homes}
                size="wide"
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="min-h-[280px] lg:col-span-6 lg:min-h-[320px]"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-10 flex items-center gap-4">
          <span aria-hidden className="h-px flex-1 bg-night/10" />
          <Link href="/ministerios" className="link-underline font-display text-sm font-semibold text-institutional">
            Ver todos los ministerios
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
