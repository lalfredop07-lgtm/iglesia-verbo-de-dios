import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pillars } from "@/content/team";

export function Mission() {
  return (
    <section className="grain section-y relative bg-night text-white">
      <div className="shell">
        <div>
          <Reveal>
            <Eyebrow tone="light">Nuestra misión</Eyebrow>
          </Reveal>
          <SplitHeading
            lines={["Una fe que", "transforma vidas."]}
            delay={0.08}
            className="mt-7 font-display font-extrabold text-white [font-size:var(--text-display)] [letter-spacing:-0.04em] [line-height:0.96]"
          />
        </div>

        <RevealGroup className="mt-16 sm:mt-20" step={0.11}>
          {pillars.map((pillar) => (
            <RevealItem key={pillar.number}>
              <div className="group border-t border-white/12 transition-colors duration-500 hover:border-gold/50">
                <div className="grid gap-4 py-8 transition-[background-color] duration-500 group-hover:bg-white/[0.035] sm:gap-6 sm:py-9 lg:grid-cols-12 lg:items-baseline lg:px-5">
                  <span className="font-display text-[0.8125rem] font-semibold tracking-[0.22em] text-gold lg:col-span-2">
                    {pillar.number}
                  </span>
                  <h3 className="font-display text-[1.75rem] font-bold uppercase tracking-[-0.025em] text-white transition-colors duration-500 group-hover:text-gold-soft sm:text-[2.125rem] lg:col-span-4">
                    {pillar.title}
                  </h3>
                  <p className="max-w-[52ch] leading-[1.65] text-white/65 lg:col-span-6">
                    {pillar.text}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
          <div className="border-t border-white/12" />
        </RevealGroup>
      </div>
    </section>
  );
}
