import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EventCard } from "@/components/ui/EventCard";
import { events } from "@/content/events";

export function EventsPreview() {
  return (
    <section className="section-y bg-ice">
      <div className="shell">
        <div>
          <Reveal>
            <Eyebrow>Próximos eventos</Eyebrow>
          </Reveal>
          <SplitHeading
            lines={["Siempre hay", "algo por vivir."]}
            delay={0.08}
            className="mt-7 font-display font-extrabold [font-size:var(--text-display)] [letter-spacing:-0.04em] [line-height:0.98]"
          />
        </div>

        <RevealGroup className="mt-12 sm:mt-16" step={0.1}>
          {events.slice(0, 3).map((event) => (
            <RevealItem key={event.slug}>
              <EventCard event={event} showDate={false} />
            </RevealItem>
          ))}
          <div className="border-t border-night/10" />
        </RevealGroup>
      </div>
    </section>
  );
}
