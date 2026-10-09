import type { MetadataRoute } from "next";
import { events } from "@/content/events";
import { ministries } from "@/content/ministries";
import { resolveMetadataBase } from "@/lib/metadata";

const routes = [
  "/",
  "/conocenos",
  "/ministerios",
  "/mensajes",
  "/eventos",
  "/visitanos",
  "/oracion",
  "/contacto",
  "/formacion",
  "/donaciones",
  "/declaracion-de-fe",
  "/recursos",
  "/aviso-legal",
  "/privacidad",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = resolveMetadataBase().origin;
  const lastModified = new Date();

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.7,
    })),
    ...ministries.map((ministry) => ({
      url: `${base}/ministerios/${ministry.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...events.map((event) => ({
      url: `${base}/eventos/${event.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];
}
