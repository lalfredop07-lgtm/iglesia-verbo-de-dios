import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { formatEventDate, type ChurchEvent } from "@/content/events";
import { DemoBadge } from "./DemoBadge";
import { cx } from "@/lib/utils";

interface EventCardProps {
  event: ChurchEvent;
  /** La agenda completa necesita la fecha; la vista previa de portada no. */
  showDate?: boolean;
}

/** Tarjeta horizontal de evento: fecha destacada (opcional) + contenido editorial. */
export function EventCard({ event, showDate = true }: EventCardProps) {
  const date = formatEventDate(event.date);

  return (
    <article className="group relative border-t border-night/10 transition-colors duration-500 hover:border-gold/50">
      <Link
        href={`/eventos/${event.slug}`}
        className={cx(
          "grid gap-5 py-7 sm:items-center sm:gap-8 sm:py-8",
          showDate ? "sm:grid-cols-[auto_1fr_auto]" : "sm:grid-cols-[1fr_auto]",
        )}
      >
        {showDate ? (
          <div className="flex items-baseline gap-3 sm:w-[92px] sm:flex-col sm:items-start sm:gap-0">
            <span className="font-display text-[2.75rem] font-extrabold leading-[0.9] tracking-[-0.04em] text-night sm:text-[3.25rem]">
              {date.day}
            </span>
            <span className="eyebrow text-[0.6875rem] text-institutional">
              {date.month} · {date.year}
            </span>
          </div>
        ) : null}

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="eyebrow text-[0.625rem] text-graphite/45">{event.category}</span>
            {event.demo ? <DemoBadge /> : null}
          </div>

          <h3 className="mt-2.5 font-display text-[1.375rem] font-bold tracking-[-0.025em] text-night sm:text-[1.625rem]">
            <span className="link-underline">{event.title}</span>
          </h3>

          <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-[1.6] text-graphite/70">
            {event.summary}
          </p>

          <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8125rem] text-graphite/60">
            <li className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold" aria-hidden />
              {event.time}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
              {event.place}
            </li>
          </ul>
        </div>

        <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-night/12 text-night transition-colors duration-500 group-hover:border-night/40 sm:inline-flex">
          <ArrowUpRight className="arrow-shift h-4 w-4" aria-hidden />
        </span>
      </Link>
    </article>
  );
}
