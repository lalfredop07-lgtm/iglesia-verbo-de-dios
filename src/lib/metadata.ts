import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Hasta confirmar el dominio definitivo no se publican URLs canónicas
 * absolutas: `metadataBase` queda sin fijar y el sitemap usa rutas relativas.
 */
export const canonicalDomainConfirmed = site.url.status === "confirmed";

/**
 * Base para resolver imágenes sociales. En Vercel se usa la URL del despliegue;
 * en local, `localhost`. No implica una URL canónica definitiva: ésta sólo se
 * publica cuando el dominio final esté confirmado.
 */
export function resolveMetadataBase(): URL {
  if (canonicalDomainConfirmed) return new URL(site.url.value);
  const vercel = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return new URL(vercel.startsWith("http") ? vercel : `https://${vercel}`);
  return new URL("http://localhost:3000");
}

interface PageMetaInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function pageMetadata({ title, description, path = "/", image }: PageMetaInput): Metadata {
  const ogImage = image ?? "/images/hero/culto-principal.jpg";

  return {
    title,
    description,
    alternates: canonicalDomainConfirmed ? { canonical: path } : undefined,
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: site.name,
      title: `${title} · ${site.name}`,
      description,
      images: [{ url: ogImage, width: 1672, height: 941, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
      images: [ogImage],
    },
  };
}
