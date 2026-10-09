import { Play } from "lucide-react";
import type { Sermon } from "@/content/sermons";
import { channelUrl } from "@/content/sermons";
import { DemoBadge } from "./DemoBadge";
import { SmartImage } from "./SmartImage";

/**
 * Tarjeta de mensaje.
 * Cuando no existe un vídeo verificado, la tarjeta se identifica como contenido
 * de demostración y enlaza al canal oficial en lugar de simular un reproductor.
 */
export function SermonCard({ sermon }: { sermon: Sermon }) {
  const href = sermon.youtubeId ? `https://www.youtube.com/watch?v=${sermon.youtubeId}` : channelUrl;

  return (
    <article className="group flex h-full flex-col">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-video overflow-hidden rounded-[16px] bg-mist focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        aria-label={`${sermon.title} — abrir en YouTube`}
      >
        {sermon.image ? (
          <div className="media-zoom absolute inset-0">
            <SmartImage
              src={sermon.image}
              alt={sermon.title}
              sizes="(max-width: 768px) 92vw, 30vw"
              focus="50% 40%"
            />
          </div>
        ) : (
          <div aria-hidden className="plate absolute inset-0" />
        )}

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/92 text-night shadow-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
            <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
          </span>
        </span>
      </a>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="eyebrow text-[0.625rem] text-institutional">{sermon.topic}</p>
        <h3 className="mt-2.5 font-display text-[1.125rem] font-bold tracking-[-0.02em] text-night">
          {sermon.title}
        </h3>
        <p className="mt-2 flex-1 text-[0.9375rem] leading-[1.6] text-graphite/70">{sermon.summary}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {sermon.demo ? <DemoBadge>Contenido de ejemplo</DemoBadge> : null}
          {sermon.speaker ? (
            <span className="text-[0.8125rem] text-graphite/60">{sermon.speaker}</span>
          ) : null}
          {sermon.date ? (
            <span className="text-[0.8125rem] text-graphite/50">{sermon.date}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
