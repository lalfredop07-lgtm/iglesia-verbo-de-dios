import { site } from "./site";

/**
 * Biblioteca de mensajes.
 *
 * Mientras no se incorporen los vídeos reales del canal de YouTube, estas
 * tarjetas son contenido de demostración (`demo: true`): no llevan título,
 * predicador ni fecha atribuidos a personas reales y enlazan al canal oficial.
 *
 * Para publicar un mensaje real basta con añadir `youtubeId`, `title`,
 * `speaker` y `date` verificados y marcar `demo: false`.
 */

export interface Sermon {
  id: string;
  title: string;
  topic: string;
  /** Sólo se incrusta el reproductor cuando existe un ID verificado. */
  youtubeId: string | null;
  speaker: string | null;
  date: string | null;
  duration: string | null;
  summary: string;
  image?: string;
  demo: boolean;
}

export const sermons: Sermon[] = [
  {
    id: "mensaje-destacado",
    title: "Mensaje destacado de la semana",
    topic: "Vida cristiana",
    youtubeId: null,
    speaker: null,
    date: null,
    duration: null,
    summary:
      "Espacio reservado para el último mensaje publicado en el canal de la iglesia. Al añadir el identificador del vídeo, el reproductor se activa automáticamente.",
    image: "/images/mensajes/predicacion.jpg",
    demo: true,
  },
  {
    id: "serie-palabra",
    title: "Serie: La Palabra en el día a día",
    topic: "Estudio bíblico",
    youtubeId: null,
    speaker: null,
    date: null,
    duration: null,
    summary: "Ejemplo de serie de enseñanza. Sustituible por una serie real del canal.",
    demo: true,
  },
  {
    id: "serie-oracion",
    title: "Serie: Vida de oración",
    topic: "Oración",
    youtubeId: null,
    speaker: null,
    date: null,
    duration: null,
    summary: "Ejemplo de serie sobre la oración personal y comunitaria.",
    demo: true,
  },
  {
    id: "serie-familia",
    title: "Serie: Familia y fe",
    topic: "Familia",
    youtubeId: null,
    speaker: null,
    date: null,
    duration: null,
    summary: "Ejemplo de serie dedicada a la vida familiar desde la perspectiva bíblica.",
    demo: true,
  },
  {
    id: "serie-jovenes",
    title: "Serie: Jóvenes y propósito",
    topic: "Jóvenes",
    youtubeId: null,
    speaker: null,
    date: null,
    duration: null,
    summary: "Ejemplo de serie dirigida a la Red de Jóvenes.",
    demo: true,
  },
  {
    id: "serie-comunidad",
    title: "Serie: Vivir en comunidad",
    topic: "Comunidad",
    youtubeId: null,
    speaker: null,
    date: null,
    duration: null,
    summary: "Ejemplo de serie sobre la vida compartida dentro de la iglesia.",
    demo: true,
  },
  {
    id: "serie-identidad",
    title: "Serie: Identidad en Cristo",
    topic: "Vida cristiana",
    youtubeId: null,
    speaker: null,
    date: null,
    duration: null,
    summary: "Ejemplo de serie sobre quiénes somos a la luz del evangelio.",
    demo: true,
  },
];

export const sermonTopics = ["Todos", ...Array.from(new Set(sermons.map((s) => s.topic)))];

export const featuredSermon = sermons[0]!;

export const channelUrl = site.youtube.channelUrl;
