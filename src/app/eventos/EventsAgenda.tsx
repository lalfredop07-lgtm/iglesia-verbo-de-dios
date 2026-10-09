"use client";

import { useMemo, useState } from "react";
import { EventCard } from "@/components/ui/EventCard";
import { eventCategories, events, type EventCategory } from "@/content/events";
import { cx } from "@/lib/utils";

/** Agenda filtrable: los filtros operan realmente sobre los datos locales. */
export function EventsAgenda() {
  const [category, setCategory] = useState<EventCategory | "todos">("todos");

  const results = useMemo(
    () => (category === "todos" ? events : events.filter((event) => event.category === category)),
    [category],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filtrar eventos por categoría"
        className="flex flex-wrap gap-2 border-b border-night/10 pb-8"
      >
        {eventCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            aria-pressed={category === item.id}
            className={cx(
              "rounded-full border px-4 py-2 text-[0.8125rem] transition-colors duration-300",
              category === item.id
                ? "border-night bg-night text-white"
                : "border-night/14 text-graphite/70 hover:border-night/35",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-[0.8125rem] text-graphite/55" aria-live="polite">
        {results.length} {results.length === 1 ? "evento" : "eventos"}
      </p>

      {results.length > 0 ? (
        <div className="mt-6">
          {results.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
          <div className="border-t border-night/10" />
        </div>
      ) : (
        <p className="mt-10 border-t border-night/10 pt-10 text-graphite/60">
          Todavía no hay eventos publicados en esta categoría.
        </p>
      )}
    </div>
  );
}
