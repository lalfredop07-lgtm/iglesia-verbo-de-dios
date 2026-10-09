import { mapsLink, site } from "@/content/site";

/**
 * Datos estructurados de organización religiosa.
 * Sólo se incluye información confirmada: no se declaran teléfono, correo ni
 * valoraciones mientras no estén verificados.
 */
export function churchJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.name,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "ES",
    },
    hasMap: mapsLink,
    sameAs: site.social.map((s) => s.href),
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "12:00" },
    ],
  };
}
