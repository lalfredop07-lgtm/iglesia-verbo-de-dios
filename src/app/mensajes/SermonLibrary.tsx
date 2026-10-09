"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { SermonCard } from "@/components/ui/SermonCard";
import { sermons, sermonTopics } from "@/content/sermons";
import { cx } from "@/lib/utils";

/**
 * Biblioteca de mensajes con búsqueda y filtros reales sobre los datos locales.
 * No se simula ninguna integración con la API de YouTube: la estructura de
 * `src/content/sermons.ts` está preparada para recibir esos datos más adelante.
 */
export function SermonLibrary() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("Todos");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return sermons.filter((sermon) => {
      const matchesTopic = topic === "Todos" || sermon.topic === topic;
      const matchesQuery =
        normalized.length === 0 ||
        sermon.title.toLowerCase().includes(normalized) ||
        sermon.summary.toLowerCase().includes(normalized);
      return matchesTopic && matchesQuery;
    });
  }, [query, topic]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-night/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="buscar-mensaje" className="sr-only">
            Buscar un mensaje por título
          </label>
          <Search
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-graphite/40"
          />
          <input
            id="buscar-mensaje"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por título"
            className="h-12 w-full rounded-full border border-night/14 bg-white pl-11 pr-4 text-[0.9375rem] text-graphite transition-colors duration-300 placeholder:text-graphite/40 focus:border-night/35 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          />
        </div>

        <div role="group" aria-label="Filtrar por temática" className="flex flex-wrap gap-2">
          {sermonTopics.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTopic(item)}
              aria-pressed={topic === item}
              className={cx(
                "rounded-full border px-4 py-2 text-[0.8125rem] transition-colors duration-300",
                topic === item
                  ? "border-night bg-night text-white"
                  : "border-night/14 text-graphite/70 hover:border-night/35",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-[0.8125rem] text-graphite/55" aria-live="polite">
        {results.length} {results.length === 1 ? "mensaje" : "mensajes"}
      </p>

      {results.length > 0 ? (
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      ) : (
        <p className="mt-12 border-t border-night/10 pt-10 text-graphite/60">
          No hay mensajes que coincidan con tu búsqueda. Prueba con otra palabra o quita los
          filtros.
        </p>
      )}
    </div>
  );
}
