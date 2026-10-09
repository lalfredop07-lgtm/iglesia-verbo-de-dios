import type { DataStatus } from "./site";

export type MinistryTone = "deep" | "bright" | "warm" | "classic";

export interface Ministry {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  heroTitle: string;
  /** Saltos de línea intencionales para el titular. */
  heroLines: string[];
  heroText: string;
  purpose: string;
  highlights: { title: string; text: string }[];
  image: string;
  imageAlt: string;
  tone: MinistryTone;
  /** Horario propio: sólo se muestra cuando está confirmado. */
  schedule: { value: string | null; status: DataStatus };
  /** Tamaño de la tarjeta en la cuadrícula editorial de la portada. */
  feature: "lead" | "medium" | "support";
  status: DataStatus;
}

export const ministries: Ministry[] = [
  {
    slug: "jap-red-de-jovenes",
    name: "JAP — Red de Jóvenes",
    shortName: "JAP",
    eyebrow: "Jóvenes",
    summary:
      "Un espacio para que los jóvenes fortalezcan su fe, descubran sus talentos y caminen juntos siguiendo a Jesús.",
    heroTitle: "Una generación que cree, sirve y permanece.",
    heroLines: ["Una generación", "que cree, sirve", "y permanece."],
    heroText:
      "JAP es la red de jóvenes de Verbo de Dios: un lugar donde hacer amigos de verdad, plantear preguntas honestas y descubrir lo que Dios ha puesto en cada uno.",
    purpose:
      "Acompañar a los jóvenes en su camino de fe, ayudarles a descubrir sus dones y animarles a vivir conforme a las enseñanzas de Jesús.",
    highlights: [
      {
        title: "Fe que se sostiene",
        text: "Enseñanza bíblica pensada para las preguntas reales de esta etapa de la vida.",
      },
      {
        title: "Amistades que suman",
        text: "Relaciones sanas, cercanas y duraderas dentro de la comunidad.",
      },
      {
        title: "Talentos en marcha",
        text: "Espacios para servir, aprender y poner los dones al servicio de la iglesia.",
      },
    ],
    image: "/images/ministerios/jap-jovenes.jpg",
    imageAlt: "Jóvenes de la iglesia reunidos durante un tiempo de alabanza",
    tone: "bright",
    schedule: { value: "Sábados, 18:00 h", status: "confirmed" },
    feature: "lead",
    status: "confirmed",
  },
  {
    slug: "verbo-kids",
    name: "Verbo Kids",
    shortName: "Verbo Kids",
    eyebrow: "Niños",
    summary:
      "El ministerio infantil de la iglesia: un espacio luminoso y seguro donde los más pequeños conocen a Jesús.",
    heroTitle: "Que los niños conozcan a Jesús desde el principio.",
    heroLines: ["Que los niños", "conozcan a Jesús", "desde el principio."],
    heroText:
      "Verbo Kids acompaña a los más pequeños con enseñanza bíblica adaptada a su edad, actividades y mucho cariño.",
    purpose:
      "Enseñar la Biblia a los niños de forma cercana y comprensible, acompañando también a las familias en casa.",
    highlights: [
      { title: "Enseñanza a su medida", text: "La Biblia contada de forma clara, creativa y cercana." },
      { title: "Un entorno cuidado", text: "Equipo de servidores comprometido con el cuidado de cada niño." },
      { title: "Familias acompañadas", text: "Lo que se aprende el domingo continúa durante la semana en casa." },
    ],
    image: "/images/ministerios/verbo-kids.jpg",
    imageAlt: "Niños participando en una actividad del ministerio infantil",
    tone: "bright",
    schedule: { value: null, status: "pending" },
    feature: "medium",
    status: "confirmed",
  },
  {
    slug: "red-de-mujeres",
    name: "Red de Mujeres",
    shortName: "Mujeres",
    eyebrow: "Mujeres",
    summary:
      "Un espacio de crecimiento espiritual, comunidad y acompañamiento para las mujeres de la iglesia.",
    heroTitle: "Mujeres que crecen juntas en la fe.",
    heroLines: ["Mujeres que crecen", "juntas en la fe."],
    heroText:
      "Un lugar para compartir la vida, estudiar la Palabra y encontrar apoyo en cada etapa del camino.",
    purpose:
      "Acompañar a las mujeres en su crecimiento espiritual y crear relaciones de confianza dentro de la comunidad.",
    highlights: [
      { title: "Palabra y oración", text: "Encuentros centrados en la Biblia y en la oración compartida." },
      { title: "Acompañamiento real", text: "Un espacio donde nadie camina sola." },
      { title: "Servicio e influencia", text: "La iglesia ha utilizado el concepto «Huellas de Influencia» para este ministerio." },
    ],
    image: "/images/ministerios/red-mujeres.jpg",
    imageAlt: "Mujeres de la iglesia orando juntas durante una reunión",
    tone: "warm",
    schedule: { value: null, status: "pending" },
    feature: "medium",
    status: "confirmed",
  },
  {
    slug: "red-de-hombres",
    name: "Red de Hombres",
    shortName: "Hombres",
    eyebrow: "Hombres",
    summary:
      "Un espacio para conectar, crecer espiritualmente y fortalecer el servicio a Dios, la familia y la comunidad.",
    heroTitle: "Hombres que sirven con propósito.",
    heroLines: ["Hombres que sirven", "con propósito."],
    heroText:
      "Encuentros para crecer en la fe, cuidar la familia y servir a la iglesia con compromiso y cercanía.",
    purpose:
      "Fortalecer la vida espiritual de los hombres y su papel en la familia, la iglesia y la sociedad.",
    highlights: [
      { title: "Fe y vida diaria", text: "Enseñanza aplicada al trabajo, la familia y las decisiones cotidianas." },
      { title: "Relaciones de confianza", text: "Un grupo donde hablar con honestidad y recibir apoyo." },
      { title: "Servicio concreto", text: "Oportunidades para servir dentro y fuera de la iglesia." },
    ],
    image: "/images/ministerios/red-hombres.jpg",
    imageAlt: "Miembros de la iglesia conversando antes de la reunión",
    tone: "classic",
    schedule: { value: null, status: "pending" },
    feature: "support",
    status: "confirmed",
  },
  {
    slug: "hogares-mateo",
    name: "Hogares Mateo",
    shortName: "Hogares Mateo",
    eyebrow: "Grupos pequeños",
    summary:
      "Reuniones en grupos pequeños para compartir, estudiar la Biblia, orar y fortalecer relaciones.",
    heroTitle: "La iglesia también se vive en casa.",
    heroLines: ["La iglesia también", "se vive en casa."],
    heroText:
      "Los Hogares Mateo son grupos pequeños que se reúnen para abrir la Biblia, orar y compartir la vida con sencillez.",
    purpose:
      "Crear espacios cercanos donde cada persona pueda ser conocida, acompañada y animada en su fe.",
    highlights: [
      { title: "Grupos pequeños", text: "Pocas personas, conversaciones reales y tiempo para escuchar." },
      { title: "Biblia abierta", text: "Estudio sencillo y aplicado a la vida de cada semana." },
      { title: "Oración compartida", text: "Un lugar donde llevar juntos las cargas y celebrar las respuestas." },
    ],
    image: "/images/ministerios/hogares-mateo.jpg",
    imageAlt: "Grupo pequeño reunido en un hogar con Biblias abiertas",
    tone: "warm",
    schedule: { value: null, status: "pending" },
    feature: "support",
    status: "confirmed",
  },
];

export const getMinistry = (slug: string) => ministries.find((m) => m.slug === slug);
