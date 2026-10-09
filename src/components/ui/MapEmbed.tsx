import { mapsEmbedLink, mapsLink, site } from "@/content/site";

/**
 * Mapa de Google incrustado directamente (sin paso previo de «cargar el
 * mapa»). Usa `loading="lazy"` nativo del navegador para no penalizar el
 * rendimiento si el mapa queda fuera de la pantalla inicial. El enlace
 * «Abrir en Google Maps» sigue disponible como alternativa, sin necesidad de
 * ninguna API de pago.
 */
export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-mist">
      <div className="relative aspect-4/3 w-full sm:aspect-16/10">
        <iframe
          title={`Mapa de ${site.name}`}
          src={mapsEmbedLink}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <div className="flex flex-col gap-1 border-t border-night/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.875rem] leading-relaxed text-graphite/70">{site.address.full}</p>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline shrink-0 font-display text-[0.875rem] font-semibold text-institutional"
        >
          Abrir en Google Maps
        </a>
      </div>
    </div>
  );
}
