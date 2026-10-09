/**
 * Registro central de imágenes.
 *
 * Cada sección referencia una clave de este archivo en lugar de una ruta
 * suelta. Para sustituir una fotografía basta con cambiar aquí la ruta: no hay
 * que tocar ningún componente.
 *
 * Si el archivo todavía no existe, `SmartImage` muestra un placeholder
 * editorial coherente con la marca en lugar de una imagen rota.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  /** Punto focal del recorte en escritorio (object-position). */
  focus?: string;
  /** Punto focal en móvil, donde el marco es vertical y el recorte más duro. */
  focusMobile?: string;
}

export const images = {
  heroHome: {
    src: "/images/hero/culto-principal.jpg",
    alt: "Congregación de Iglesia Verbo de Dios Madrid durante una reunión",
    focus: "50% 42%",
    // En vertical se encuadra el escenario y la banda, no la pared del fondo.
    focusMobile: "23% 52%",
  },
  adoracion: {
    src: "/images/comunidad/adoracion.jpg",
    alt: "Momento de alabanza durante una reunión de la iglesia",
    focus: "50% 45%",
    focusMobile: "26% 55%",
  },
  bienvenida: {
    src: "/images/comunidad/bienvenida.jpg",
    alt: "Equipo de bienvenida saludando a los asistentes",
    focus: "50% 40%",
    focusMobile: "35% 45%",
  },
  oracion: {
    src: "/images/comunidad/oracion.jpg",
    alt: "Personas orando juntas durante una reunión",
    focus: "50% 45%",
    focusMobile: "45% 50%",
  },
  pastores: {
    src: "/images/pastores/pastores-principales.jpg",
    alt: "Pastores principales de Iglesia Verbo de Dios Madrid",
    focus: "50% 28%",
  },
  predicacion: {
    src: "/images/mensajes/predicacion.jpg",
    alt: "Reunión de la iglesia durante la predicación",
    focus: "50% 40%",
    focusMobile: "25% 48%",
  },
  ctaFinal: {
    src: "/images/generales/cta-final.jpg",
    alt: "Comunidad reunida en oración",
    focus: "50% 38%",
    focusMobile: "48% 45%",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
