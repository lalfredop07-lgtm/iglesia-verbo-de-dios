/**
 * Bloques introductorios de «Lo que creemos».
 * No constituyen una declaración doctrinal oficial: el documento definitivo
 * deberá ser facilitado y aprobado por la iglesia.
 */

export interface Belief {
  title: string;
  text: string;
}

export const beliefs: Belief[] = [
  {
    title: "Jesucristo",
    text: "El centro de nuestra fe. Creemos en su persona, su mensaje y su obra, y queremos que toda la vida de la iglesia gire en torno a Él.",
  },
  {
    title: "La Biblia",
    text: "La Palabra de Dios es la base de nuestra enseñanza. Procuramos estudiarla con cuidado y vivirla con honestidad.",
  },
  {
    title: "La oración",
    text: "Creemos en el valor de hablar con Dios y de orar los unos por los otros, en lo personal y como comunidad.",
  },
  {
    title: "La comunidad",
    text: "La fe se vive acompañada. Los Hogares Mateo y los ministerios existen para que nadie camine solo.",
  },
  {
    title: "El crecimiento espiritual",
    text: "Acompañamos a cada persona en su proceso: desde los primeros pasos hasta una fe madura y estable.",
  },
  {
    title: "El servicio",
    text: "Cada persona tiene algo que aportar. Servir es una forma concreta de amar a Dios y a los demás.",
  },
];

export const beliefsNote =
  "Textos introductorios de la maqueta. La declaración de fe oficial está pendiente de recibir la documentación de la iglesia.";
