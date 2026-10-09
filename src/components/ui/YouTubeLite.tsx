"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { SmartImage } from "./SmartImage";

interface YouTubeLiteProps {
  /** Sólo se incrusta el reproductor cuando hay un identificador verificado. */
  youtubeId: string | null;
  title: string;
  /** Imagen de respaldo mientras no hay vídeo real. */
  poster?: string;
  posterAlt?: string;
  channelUrl: string;
}

/**
 * Reproductor de YouTube con carga diferida: no se descarga nada de YouTube
 * hasta que la persona pulsa «Reproducir», lo que evita penalizar el
 * rendimiento y no envía datos a terceros durante la carga de la página.
 */
export function YouTubeLite({ youtubeId, title, poster, posterAlt, channelUrl }: YouTubeLiteProps) {
  const [playing, setPlaying] = useState(false);

  if (playing && youtubeId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-night">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-[20px] bg-night">
      {poster ? (
        <div className="media-zoom absolute inset-0">
          <SmartImage
            src={poster}
            alt={posterAlt ?? title}
            sizes="(max-width: 1024px) 92vw, 62vw"
            focus="50% 40%"
            placeholderLabel="Miniatura pendiente"
          />
        </div>
      ) : (
        <div aria-hidden className="plate absolute inset-0" />
      )}

      <div aria-hidden className="absolute inset-0 bg-night/45 transition-colors duration-500 group-hover:bg-night/55" />

      {youtubeId ? (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Reproducir: ${title}`}
        >
          <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-night transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
            <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
          </span>
        </button>
      ) : (
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center"
        >
          <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-night transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
            <Play className="ml-1 h-7 w-7 fill-current" aria-hidden />
          </span>
          <span className="eyebrow max-w-[32ch] text-[0.625rem] text-white/80">
            Ver los mensajes en el canal de YouTube
          </span>
        </a>
      )}
    </div>
  );
}
