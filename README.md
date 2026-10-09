# VERBO DE DIOS — DIGITAL EXPERIENCE

Web de **Iglesia Verbo de Dios Madrid**. Proyecto Next.js (App Router) + TypeScript + Tailwind CSS v4 + Motion.

Esta es una **primera maqueta de presentación**: el diseño está completo, pero parte del contenido
es provisional y está marcado como tal. Consulta [`CONTENT_TODO.md`](./CONTENT_TODO.md) para saber
qué necesita aportar la iglesia antes del lanzamiento.

---

## 1. Cómo abrirlo en el navegador

Con [Node.js](https://nodejs.org) 20 o superior instalado:

```bash
npm install
```

```bash
npm run dev
```

Abre **http://localhost:3000**.

Otros comandos:

```bash
npm run build
```

```bash
npm run start
```

```bash
npm run typecheck
```

---

## 2. Estructura del proyecto

```
src/
  app/                  Páginas y rutas (App Router)
    page.tsx              Inicio
    conocenos/            Conócenos
    ministerios/          Ministerios + páginas dinámicas [slug]
    mensajes/             Biblioteca de mensajes (búsqueda y filtros)
    eventos/              Agenda + ficha de evento [slug]
    visitanos/            Dirección, horarios, mapa y primera visita
    oracion/              Petición de oración (modo demostración)
    contacto/             Vías de contacto
    formacion/ donaciones/ declaracion-de-fe/ recursos/
    aviso-legal/ privacidad/
    layout.tsx            Tipografías, cabecera, pie y datos estructurados
    globals.css           Sistema de diseño (color, tipografía, ritmo, motion)
    sitemap.ts robots.ts icon.svg
  components/
    layout/             Cabecera, menú móvil, pie y marca
    ui/                 Botones, etiquetas, imágenes, tarjetas, mapa, FAQ
    motion/             Animaciones reutilizables
    sections/           Secciones de página
  content/              👈 TODO EL CONTENIDO EDITABLE
  lib/                  Imágenes, metadatos, datos estructurados, utilidades
public/images/          Fotografías, organizadas por sección
```

---

## 3. Cómo editar el contenido

Todo el contenido variable vive en `src/content/`. **Un solo origen para cada dato.**

| Quiero cambiar… | Archivo |
| --- | --- |
| Dirección, horarios, redes sociales, navegación | `src/content/site.ts` |
| Ministerios y sus páginas | `src/content/ministries.ts` |
| Eventos de la agenda | `src/content/events.ts` |
| Mensajes / predicaciones | `src/content/sermons.ts` |
| Liderazgo pastoral y pilares de la misión | `src/content/team.ts` |
| Preguntas frecuentes | `src/content/faqs.ts` |
| Bloques de «Lo que creemos» | `src/content/beliefs.ts` |

Cambiar el horario del domingo en `site.ts`, por ejemplo, lo actualiza a la vez en la portada, en
«Visítanos», en el pie y en los datos estructurados para buscadores.

### Contenido confirmado vs. pendiente

Los datos llevan una marca explícita:

- `status: "confirmed"` — información verificada, se publica con normalidad.
- `status: "pending"` — pendiente de confirmar; la web muestra un aviso en lugar de inventar el dato.
- `demo: true` — contenido de demostración; se muestra con el distintivo **«Evento de ejemplo»**.

---

## 4. Cómo añadir el logotipo

Coloca los archivos en:

```
public/images/logo/logo.svg         (para fondos claros)
public/images/logo/logo-white.svg   (para fondos oscuros)
```

El componente `BrandLogo` los detecta automáticamente y los muestra sin deformarlos. Mientras no
existan, se usa un wordmark tipográfico provisional.

---

## 5. Cómo añadir o cambiar fotografías

1. Copia la imagen en la subcarpeta que corresponda dentro de `public/images/`
   (`hero`, `pastores`, `ministerios`, `comunidad`, `eventos`, `mensajes`, `generales`).
2. Actualiza la ruta en `src/lib/images.ts` (imágenes generales) o en el archivo de contenido
   correspondiente (`ministries.ts`, `events.ts`, `sermons.ts`).

Recomendaciones:

- Ancho máximo **2000 px**, formato JPEG de calidad alta. Next.js genera automáticamente las
  versiones AVIF/WebP y los tamaños responsivos.
- Hero: formato apaisado (16:9 o más ancho).
- Pastores: vertical, proporción cercana a **4:5**.
- Ministerios: apaisado 3:2 o 16:9.

Si un archivo falta, **la interfaz no se rompe**: aparece un placeholder editorial con los colores
de la marca.

---

## 6. Cómo añadir un vídeo real de YouTube

En `src/content/sermons.ts`, sustituye en la entrada correspondiente:

```ts
youtubeId: "ID_DEL_VIDEO",   // el código que aparece tras "watch?v=" en la URL
title: "Título real del mensaje",
speaker: "Nombre del predicador",   // sólo si está confirmado
date: "12 de octubre de 2026",      // sólo si se puede verificar
demo: false,
```

El reproductor se activa automáticamente, con carga diferida: no se descarga nada de YouTube hasta
que la persona pulsa «Reproducir».

---

## 7. Cómo añadir un evento

En `src/content/events.ts`, añade un objeto al array `events`:

```ts
{
  slug: "retiro-de-jovenes",        // se convierte en /eventos/retiro-de-jovenes
  title: "Retiro de jóvenes",
  category: "jovenes",              // reuniones | jovenes | especiales | formacion | comunidad
  date: "2026-11-21",               // formato ISO
  time: "10:00 h",
  place: "Calle del Puerto de Pozazal, 25A",
  summary: "Una frase breve para la tarjeta.",
  description: "Texto completo de la ficha del evento.",
  image: "/images/eventos/mi-foto.jpg",   // opcional
  demo: false,                      // true mientras sea contenido de ejemplo
}
```

Aparecerá automáticamente en la portada, en la agenda y en el sitemap.

---

## 8. Publicar en GitHub y Vercel (sin usar la terminal)

### a) Subir el proyecto a GitHub

1. Instala **GitHub Desktop** desde <https://desktop.github.com>.
2. `Archivo → Añadir repositorio local…` y selecciona esta carpeta.
3. GitHub Desktop propondrá crear un repositorio: acepta y escribe un nombre
   (por ejemplo `verbo-de-dios-web`). **Déjalo privado** si prefieres.
4. Escribe un mensaje en el primer commit y pulsa **Commit to main**.
5. Pulsa **Publish repository**.

El archivo `.gitignore` ya excluye `node_modules`, `.next` y cualquier archivo de entorno.

### b) Desplegar en Vercel

1. Entra en <https://vercel.com> y accede con tu cuenta de GitHub.
2. **Add New… → Project** e importa el repositorio recién publicado.
3. Vercel detecta Next.js automáticamente. **No hace falta configurar nada**:
   no se usan variables de entorno, ni base de datos, ni APIs externas.
4. Pulsa **Deploy**.

A partir de ahí, cada vez que hagas *commit* y *push* desde GitHub Desktop, Vercel publicará la
nueva versión automáticamente.

### c) Dominio propio (opcional, más adelante)

En Vercel: `Project → Settings → Domains`. Cuando el dominio definitivo esté confirmado, actualiza
también `site.url` en `src/content/site.ts` y cambia su `status` a `"confirmed"` para que se
publiquen las URLs canónicas.

---

## 9. Decisiones técnicas

- **Sin backend ni base de datos.** El formulario de oración está desconectado a propósito: no
  envía ni almacena nada (ver `src/app/oracion/PrayerForm.tsx`).
- **Privacidad.** El mapa de Google y los vídeos de YouTube sólo se cargan cuando la persona lo
  solicita. No hay cookies de analítica ni de publicidad.
- **Accesibilidad.** HTML semántico, un único `<h1>` por página, navegación por teclado, foco
  visible, menú móvil con bloqueo de scroll, cierre con `Escape` y foco atrapado, y respeto de
  `prefers-reduced-motion`.
- **Movimiento.** Las animaciones de carga son CSS (no dependen de JavaScript, no retrasan el
  contenido); las de scroll usan Motion y sólo animan `transform` y `opacity`.
