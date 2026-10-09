# Contenido pendiente — Iglesia Verbo de Dios Madrid

Lista de todo lo que la iglesia debe facilitar o confirmar **antes del lanzamiento oficial**.
Mientras tanto, la web muestra avisos visibles en lugar de inventar datos.

Leyenda: 🔴 bloqueante · 🟡 recomendable · ⚪ opcional

---

## 1. Datos de la iglesia

| # | Pendiente | Dónde se edita | Prioridad |
|---|---|---|---|
| 1.1 | **Horario del domingo**: confirmar si «10:00–12:00 h» es una única reunión o dos encuentros (10:00 y 12:00). Hoy se muestra como intervalo. | `src/content/site.ts` → `services` | 🔴 |
| 1.2 | **Teléfono de contacto** oficial. No se publica ninguno. | `src/content/site.ts` → `contact.phone` | 🔴 |
| 1.3 | **Correo electrónico** oficial. No se publica ninguno. | `src/content/site.ts` → `contact.email` | 🔴 |
| 1.4 | **Dominio definitivo** de la web. Hasta confirmarlo no se publican URLs canónicas. | `src/content/site.ts` → `url` (cambiar `status` a `"confirmed"`) | 🟡 |
| 1.5 | Confirmar que la **dirección** sigue siendo Calle del Puerto de Pozazal, 25A, 28031 Madrid. | `src/content/site.ts` → `address` | 🟡 |
| 1.6 | Detalles logísticos de la primera visita: aparcamiento, accesibilidad física, si hay servicio infantil en cada reunión. Hoy **no se afirma ninguno**. | `src/content/faqs.ts` | 🟡 |

## 2. Liderazgo pastoral

| # | Pendiente | Dónde se edita | Prioridad |
|---|---|---|---|
| 2.1 | ✅ **Nombres** de los pastores principales confirmados: *Rafael Pérez* y *Claudia Rueda*. Ya se publican en la web. El cargo conjunto «Pastores principales» se mantiene; falta confirmar si cada uno tiene un cargo individual distinto. | `src/content/team.ts` → `names`, `role` | — |
| 2.2 | **Biografía breve** de cada uno (2–4 líneas), redactada o aprobada por ellos. | `src/content/team.ts` → `extendedText` | 🟡 |
| 2.3 | Resto del **equipo de liderazgo**, si quieren aparecer (nombre, rol, foto). | `src/content/team.ts` | ⚪ |
| 2.4 | Validar los **cuatro pilares** (Ganar, Consolidar, Discipular, Enviar). La redacción actual es provisional. | `src/content/team.ts` → `pillars`, `pillarsNote` | 🔴 |

## 3. Textos institucionales

| # | Pendiente | Dónde se edita | Prioridad |
|---|---|---|---|
| 3.1 | **Declaración de fe oficial** documentada. Los seis bloques actuales son una introducción de maqueta. | `src/content/beliefs.ts` | 🔴 |
| 3.2 | **Declaración de visión** oficial. El texto actual es editorial provisional. | `src/app/conocenos/page.tsx` → sección «Nuestra visión» | 🟡 |
| 3.3 | **Historia de la iglesia**: fundación, hitos. No se ha inventado ninguna fecha ni cifra. | `src/app/conocenos/page.tsx` | 🟡 |
| 3.4 | Confirmar los **nombres y descripciones** de los ministerios, y las **edades** de Verbo Kids. | `src/content/ministries.ts` | 🟡 |
| 3.5 | **Horarios propios** de cada ministerio (hoy sólo JAP está confirmado). | `src/content/ministries.ts` → `schedule` | 🟡 |

## 4. Eventos

| # | Pendiente | Dónde se edita | Prioridad |
|---|---|---|---|
| 4.1 | **Agenda real**. Los tres eventos actuales están marcados como «Evento de ejemplo». | `src/content/events.ts` (poner `demo: false`) | 🔴 |
| 4.2 | Decidir si en el futuro habrá **inscripciones**. No se ha implementado ningún pago ni reserva. | — | ⚪ |

## 5. Mensajes y vídeo

| # | Pendiente | Dónde se edita | Prioridad |
|---|---|---|---|
| 5.1 | **Identificadores de los vídeos** de YouTube que se quieran destacar (el código tras `watch?v=`). | `src/content/sermons.ts` → `youtubeId` | 🔴 |
| 5.2 | **Títulos, predicadores y fechas** verificados de cada mensaje. No se atribuye nada sin confirmar. | `src/content/sermons.ts` | 🔴 |
| 5.3 | Decidir si los mensajes se mantendrán a mano o se conectará la **API de YouTube**. La estructura de datos ya está preparada para ambas opciones. | `src/content/sermons.ts` | ⚪ |

## 6. Marca y fotografía

| # | Pendiente | Dónde se edita | Prioridad |
|---|---|---|---|
| 6.1 | ✅ **Logotipo oficial** instalado (`FOTOS/LOGO.png`, limpiado de ruido). Se generaron dos variantes tonales a partir del mismo diseño: azul noche de marca para fondos claros y el color original para fondos oscuros, ya que el tono melocotón original es ilegible sobre blanco. Si la iglesia prefiere mantener el color original también en fondos claros, o entrega una versión vectorial (SVG), basta con sustituir los archivos. | `public/images/logo/logo.png`, `logo-white.png` (original sin recortar en `logo-original-source.png`) | — |
| 6.2 | **Favicon** definitivo a partir del logotipo (hoy hay uno provisional con una cruz simplificada). Puede generarse del propio círculo del logo. | `src/app/icon.svg` | 🟡 |
| 6.3 | **Fotografías auténticas** para Red de Mujeres y Red de Hombres: ahora reutilizan imágenes de otras secciones. | `public/images/ministerios/` | 🟡 |
| 6.4 | Fotografías propias para **eventos** y **miniaturas de mensajes**. | `public/images/eventos/`, `public/images/mensajes/` | 🟡 |
| 6.5 | **Revisión de las imágenes entregadas.** De las siete fotografías de la carpeta `FOTOS`, dos son material fotográfico de la iglesia (la foto principal del culto y el retrato de los pastores). Las otras cinco tienen aspecto de imagen generada y conviene sustituirlas por fotografía real de la comunidad antes de publicar. | `public/images/` | 🔴 |
| 6.6 | Confirmar que se dispone de **consentimiento de imagen** de las personas que aparecen en las fotografías. | — | 🔴 |

## 7. Legal y donaciones

| # | Pendiente | Dónde se edita | Prioridad |
|---|---|---|---|
| 7.1 | **Datos del titular** para el aviso legal: denominación legal, NIF, datos registrales. No se ha reutilizado documentación de otras entidades. | `src/app/aviso-legal/page.tsx` | 🔴 |
| 7.2 | **Política de privacidad definitiva**, necesaria antes de activar cualquier formulario. | `src/app/privacidad/page.tsx` | 🔴 |
| 7.3 | **Medios de donación** autorizados. La web no publica ninguno ni simula pagos. | `src/app/donaciones/page.tsx` | 🟡 |
| 7.4 | Servicio autorizado al que conectar el **formulario de oración**, hoy desconectado por completo (no envía ni guarda nada). | `src/app/oracion/PrayerForm.tsx` | 🟡 |

## 8. Formación bíblica

| # | Pendiente | Dónde se edita | Prioridad |
|---|---|---|---|
| 8.1 | Confirmar si el **Diplomado en Biblia y Teología** y la relación con **ETS Madrid** siguen vigentes. Hoy constan como antecedentes pendientes de validación. | `src/app/formacion/page.tsx` | 🟡 |
| 8.2 | Programas, modalidades, duración e inscripción. No se han inventado titulaciones, precios ni certificaciones. | `src/app/formacion/page.tsx` | 🟡 |

---

## Qué **no** se ha inventado en esta maqueta

Para que quede constancia ante la iglesia:

- Ningún nombre de persona, testimonio ni declaración atribuida a los pastores.
- Ninguna fecha de fundación ni cifra de asistentes.
- Ningún teléfono, correo electrónico ni medio de donación.
- Ninguna actividad presentada como confirmada.
- Ningún título de predicación atribuido a un predicador real.
- Ninguna valoración, reseña ni dato de negocio.
- Ningún retrato generado de los pastores: la fotografía utilizada es la facilitada por la iglesia.
