import type { DataStatus } from "./site";

export interface Faq {
  question: string;
  answer: string;
  status: DataStatus;
}

export const visitFaqs: Faq[] = [
  {
    question: "¿Dónde estamos?",
    answer:
      "Nos reunimos en la Calle del Puerto de Pozazal, 25A, 28031 Madrid. En esta misma página tienes el mapa y un enlace directo para abrir la dirección en Google Maps.",
    status: "confirmed",
  },
  {
    question: "¿Cuándo son nuestras reuniones?",
    answer:
      "Los martes a las 19:00 h, los sábados a las 18:00 h (reunión juvenil) y los domingos de 10:00 a 12:00 h, según el horario publicado por la iglesia.",
    status: "confirmed",
  },
  {
    question: "¿Puedo visitar la iglesia por primera vez?",
    answer:
      "Por supuesto. No necesitas avisar ni inscribirte: ven como estés. Si llegas unos minutos antes, alguien del equipo podrá recibirte y acompañarte.",
    status: "confirmed",
  },
  {
    question: "¿Cómo puedo contactar?",
    answer:
      "Mientras completamos los datos de contacto oficiales, la vía más rápida es escribirnos por Instagram o Facebook. También puedes dejarnos tu petición en la página de oración.",
    status: "confirmed",
  },
  {
    question: "¿Hay actividades para niños?",
    answer:
      "Sí, la iglesia cuenta con Verbo Kids, su ministerio infantil. Los horarios concretos y los detalles de cada reunión están pendientes de confirmar en esta maqueta.",
    status: "pending",
  },
];
