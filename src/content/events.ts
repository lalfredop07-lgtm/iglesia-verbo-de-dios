/**
 * Agenda de la iglesia.
 *
 * Los eventos con `demo: true` son contenido de demostración para la maqueta:
 * se muestran siempre con el distintivo «Evento de ejemplo» y deben sustituirse
 * por la agenda real antes de publicar.
 */

export type EventCategory = "reuniones" | "jovenes" | "especiales" | "formacion" | "comunidad";

export interface ChurchEvent {
  slug: string;
  title: string;
  category: EventCategory;
  /** Fecha ISO. En los eventos de ejemplo es orientativa y así se indica. */
  date: string;
  time: string;
  place: string;
  summary: string;
  description: string;
  image?: string;
  demo: boolean;
}

export const eventCategories: { id: EventCategory | "todos"; label: string }[] = [
  { id: "todos", label: "Todo" },
  { id: "reuniones", label: "Reuniones" },
  { id: "jovenes", label: "Jóvenes" },
  { id: "especiales", label: "Actividades especiales" },
  { id: "formacion", label: "Formación" },
  { id: "comunidad", label: "Comunidad" },
];

export const events: ChurchEvent[] = [
  {
    slug: "reunion-dominical",
    title: "Reunión dominical",
    category: "reuniones",
    date: "2026-10-11",
    time: "10:00 – 12:00 h",
    place: "Calle del Puerto de Pozazal, 25A",
    summary: "Nuestro encuentro principal de la semana: alabanza, Palabra y comunidad.",
    description:
      "Cada domingo nos reunimos para adorar juntos, escuchar la enseñanza de la Biblia y compartir la vida como familia. Si es tu primera visita, llega unos minutos antes: habrá alguien del equipo para recibirte.",
    image: "/images/comunidad/adoracion.jpg",
    demo: true,
  },
  {
    slug: "reunion-juvenil-jap",
    title: "Reunión juvenil JAP",
    category: "jovenes",
    date: "2026-10-10",
    time: "18:00 h",
    place: "Calle del Puerto de Pozazal, 25A",
    summary: "El encuentro semanal de la Red de Jóvenes de Verbo de Dios.",
    description:
      "Una tarde pensada para los jóvenes: alabanza, enseñanza bíblica cercana y tiempo para compartir. Puedes venir solo o con amigos.",
    image: "/images/eventos/jovenes.jpg",
    demo: true,
  },
  {
    slug: "encuentro-hogares-mateo",
    title: "Encuentro de Hogares Mateo",
    category: "comunidad",
    date: "2026-10-14",
    time: "Por confirmar",
    place: "Hogares de la comunidad",
    summary: "Grupos pequeños que se reúnen para orar, estudiar la Biblia y compartir la vida.",
    description:
      "Los Hogares Mateo se reúnen en casas de la comunidad. Si quieres participar en uno, escríbenos por redes y te ayudamos a encontrar el más cercano.",
    image: "/images/eventos/comunidad.jpg",
    demo: true,
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

const MONTHS_SHORT = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const WEEKDAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

export function formatEventDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: MONTHS_SHORT[d.getMonth()] ?? "",
    weekday: WEEKDAYS[d.getDay()] ?? "",
    year: String(d.getFullYear()),
  };
}
