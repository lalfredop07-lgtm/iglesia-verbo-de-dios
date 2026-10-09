/**
 * Fuente única de verdad del sitio.
 * Cambia aquí la dirección, los horarios o las redes sociales y se actualiza
 * automáticamente en toda la web (cabecera, pie, mapa, datos estructurados...).
 */

export type DataStatus = "confirmed" | "pending";

export interface ServiceTime {
  id: string;
  day: string;
  time: string;
  label: string;
  note?: string;
  status: DataStatus;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const site = {
  name: "Iglesia Verbo de Dios Madrid",
  shortName: "Verbo de Dios",
  wordmark: ["Iglesia Verbo", "de Dios"],
  tagline: "Una comunidad de fe. Un lugar para ti.",
  description:
    "Conoce Iglesia Verbo de Dios Madrid. Descubre nuestra comunidad, reuniones, ministerios, mensajes y cómo visitarnos.",
  tradition: "Iglesia cristiana evangélica de orientación pentecostal",

  /**
   * Dominio definitivo pendiente de confirmar. Mientras `status` sea "pending"
   * no se publican URLs canónicas absolutas ni sitemap con dominio real.
   */
  url: {
    value: "https://iglesiaverbodedios.com",
    status: "pending" as DataStatus,
  },

  address: {
    street: "Calle del Puerto de Pozazal, 25A",
    postalCode: "28031",
    city: "Madrid",
    region: "Comunidad de Madrid",
    country: "España",
    full: "Calle del Puerto de Pozazal, 25A, 28031 Madrid, España",
    short: "Calle del Puerto de Pozazal, 25A · Madrid",
    mapsQuery: "Calle del Puerto de Pozazal, 25A, 28031 Madrid, España",
    status: "confirmed" as DataStatus,
  },

  /** Horarios publicados en la web oficial de la iglesia. */
  services: [
    {
      id: "martes",
      day: "Martes",
      time: "19:00 h",
      label: "Reunión de entresemana",
      status: "confirmed",
    },
    {
      id: "sabados",
      day: "Sábados",
      time: "18:00 h",
      label: "Reunión juvenil",
      note: "Red de Jóvenes (JAP)",
      status: "confirmed",
    },
    {
      id: "domingos",
      day: "Domingos",
      time: "10:00 – 12:00 h",
      label: "Reunión general",
      status: "pending",
    },
  ] satisfies ServiceTime[],

  social: [
    { label: "Instagram", href: "https://www.instagram.com/ivdmadrid/", handle: "@ivdmadrid" },
    { label: "Facebook", href: "https://www.facebook.com/ivdmadrid?locale=es_ES", handle: "ivdmadrid" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@Iglesiaverbodediosmadrid",
      handle: "@Iglesiaverbodediosmadrid",
    },
    {
      label: "Instagram juvenil",
      href: "https://www.instagram.com/red_juvenil_/",
      handle: "@red_juvenil_",
    },
  ],

  /**
   * Teléfono y correo electrónico: pendientes de recibir los datos oficiales.
   * No se publica ningún dato de contacto sin confirmación de la iglesia.
   */
  contact: {
    phone: { value: null, status: "pending" as DataStatus },
    email: { value: null, status: "pending" as DataStatus },
    preferredChannels: ["Instagram", "Facebook"],
  },

  youtube: {
    channelUrl: "https://www.youtube.com/@Iglesiaverbodediosmadrid",
    channelHandle: "@Iglesiaverbodediosmadrid",
  },
} as const;

/** Enlace a Google Maps, siempre funcional y sin necesidad de API de pago. */
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery,
)}`;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address.mapsQuery,
)}`;

export const mapsEmbedLink = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapsQuery,
)}&output=embed`;

/** Navegación principal: compacta, con el resto de páginas en el pie. */
export const primaryNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Conócenos", href: "/conocenos", description: "Nuestra historia, fe y liderazgo" },
  { label: "Ministerios", href: "/ministerios", description: "Jóvenes, niños, mujeres, hombres y hogares" },
  { label: "Visítanos", href: "/visitanos", description: "Dirección, horarios y primera visita" },
];

export const secondaryNav: NavItem[] = [
  { label: "Mensajes", href: "/mensajes" },
  { label: "Eventos", href: "/eventos" },
  { label: "Oración", href: "/oracion" },
  { label: "Contacto", href: "/contacto" },
  { label: "Formación bíblica", href: "/formacion" },
  { label: "Donaciones", href: "/donaciones" },
  { label: "Declaración de fe", href: "/declaracion-de-fe" },
  { label: "Recursos", href: "/recursos" },
];

export const primaryCta = { label: "Planifica tu visita", href: "/visitanos" };
