import type { DataStatus } from "./site";

/**
 * Liderazgo pastoral.
 *
 * La fotografía es material auténtico facilitado por la iglesia.
 * Los nombres fueron confirmados directamente por la iglesia el 6 de octubre
 * de 2026. El cargo conjunto ("Pastores principales") ya se usaba en el
 * material de referencia; no se atribuye a cada persona un cargo individual
 * distinto (p. ej. "pastor" / "copastora") porque eso no se ha confirmado.
 */

export interface PastoralLeadership {
  image: string;
  imageAlt: string;
  namesStatus: DataStatus;
  names: string[];
  role: string;
  caption: string;
  eyebrow: string;
  title: string;
  text: string;
  extendedText: string[];
}

export const leadership: PastoralLeadership = {
  image: "/images/pastores/pastores-principales.jpg",
  imageAlt: "Rafael Pérez y Claudia Rueda, pastores principales de Iglesia Verbo de Dios Madrid",
  namesStatus: "confirmed",
  names: ["Rafael Pérez", "Claudia Rueda"],
  role: "Pastores principales",
  caption: "Rafael Pérez y Claudia Rueda · Pastores principales",
  eyebrow: "Nuestro liderazgo",
  title: "Un corazón para Dios y para las personas.",
  text: "Creemos en un liderazgo que acompaña, enseña y sirve. Nuestra iglesia busca caminar unida, creciendo en la fe y en el conocimiento de la Palabra de Dios.",
  extendedText: [
    "El liderazgo de Verbo de Dios se entiende como servicio: estar cerca de las personas, enseñar la Biblia con claridad y acompañar a cada familia en su caminar con Dios.",
    "Si quieres conocerlos personalmente, la mejor manera es visitarnos un domingo. Siempre hay tiempo para saludar después de la reunión.",
  ],
};

/** Pilares históricos de la iglesia. Redacción provisional pendiente de validación. */
export interface Pillar {
  number: string;
  title: string;
  text: string;
}

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Ganar",
    text: "Compartir el evangelio y acercar a las personas al mensaje de Jesucristo.",
  },
  {
    number: "02",
    title: "Consolidar",
    text: "Acompañar a quienes comienzan o fortalecen su camino de fe.",
  },
  {
    number: "03",
    title: "Discipular",
    text: "Formar personas mediante las enseñanzas y principios de la Biblia.",
  },
  {
    number: "04",
    title: "Enviar",
    text: "Preparar personas para servir y compartir el mensaje de Jesús.",
  },
];

export const pillarsNote =
  "Redacción provisional basada en el material histórico de la iglesia. Pendiente de validación antes de la publicación definitiva.";
