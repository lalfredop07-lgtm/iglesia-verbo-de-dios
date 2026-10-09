import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { mapsLink, site } from "@/content/site";

const columns = [
  {
    title: "Iglesia",
    links: [
      { label: "Conócenos", href: "/conocenos" },
      { label: "Ministerios", href: "/ministerios" },
      { label: "Mensajes", href: "/mensajes" },
      { label: "Eventos", href: "/eventos" },
    ],
  },
  {
    title: "Conéctate",
    links: [
      { label: "Visítanos", href: "/visitanos" },
      { label: "Oración", href: "/oracion" },
      { label: "Contacto", href: "/contacto" },
      { label: "Formación bíblica", href: "/formacion" },
    ],
  },
  {
    title: "Información",
    links: [
      { label: "Declaración de fe", href: "/declaracion-de-fe" },
      { label: "Recursos", href: "/recursos" },
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/privacidad" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative bg-night text-white">
      <div className="shell pb-10 pt-20 sm:pt-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <BrandLogo tone="light" />
            <p className="mt-6 max-w-xs font-editorial text-[1.375rem] italic leading-[1.35] text-white/80">
              {site.tagline}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/50">{site.tradition}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3 lg:gap-8">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="eyebrow text-[0.625rem] text-gold">{column.title}</h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="link-underline text-sm text-white/70">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-[0.625rem] text-gold">Síguenos</h2>
            <ul className="mt-5 space-y-3">
              {site.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-white/70"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="eyebrow mt-9 text-[0.625rem] text-gold">Dónde estamos</h2>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-5 block text-sm leading-relaxed text-white/70"
            >
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </a>

            <h2 className="eyebrow mt-9 text-[0.625rem] text-gold">Horarios</h2>
            <ul className="mt-5 space-y-2 text-sm text-white/70">
              {site.services.map((service) => (
                <li key={service.id} className="flex justify-between gap-4">
                  <span>{service.day}</span>
                  <span className="text-white/90">{service.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-[0.8125rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/35">
            Maqueta de presentación · Documentación legal pendiente de los datos oficiales del
            titular.
          </p>
        </div>
      </div>
    </footer>
  );
}
