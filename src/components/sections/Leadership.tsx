"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Parallax } from "@/components/motion/Parallax";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SmartImage } from "@/components/ui/SmartImage";
import { leadership } from "@/content/team";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Sección de liderazgo pastoral.
 * La fotografía facilitada por la iglesia es el elemento protagonista: se
 * presenta en 4:5, con revelado por máscara y un ligero movimiento de
 * profundidad. No se publican nombres mientras estén pendientes de validación.
 */
export function Leadership() {
  const reduced = useReducedMotion();

  return (
    <section className="section-y relative bg-ice">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <motion.div
              initial={reduced ? false : { clipPath: "inset(8% 6% 14% 6% round 20px)", opacity: 0.4 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0% round 20px)", opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 1.15, ease: EASE }}
              className="relative"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-[20px] bg-mist">
                <Parallax amount={4} className="absolute inset-0 scale-[1.1]">
                  <SmartImage
                    src={leadership.image}
                    alt={leadership.imageAlt}
                    focus="50% 26%"
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    quality={88}
                    placeholderLabel="Fotografía pastoral pendiente"
                  />
                </Parallax>
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/55 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="eyebrow text-[0.625rem] text-white/80">{leadership.caption}</p>
                </figcaption>
              </div>

              <span
                aria-hidden
                className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-[20px] border border-gold/45 lg:block"
              />
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <Eyebrow>{leadership.eyebrow}</Eyebrow>
            </Reveal>

            <SplitHeading
              lines={[leadership.names[0]!, `y ${leadership.names[1]}`]}
              delay={0.08}
              className="mt-7 font-display font-extrabold [font-size:clamp(2rem,1rem+3.6vw,4.25rem)] [letter-spacing:-0.035em] [line-height:1]"
            />

            <Reveal delay={0.16}>
              <p className="mt-5 eyebrow text-institutional">{leadership.role}</p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-7 text-[var(--text-lead)] leading-[1.68] text-graphite/85">
                {leadership.text}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
