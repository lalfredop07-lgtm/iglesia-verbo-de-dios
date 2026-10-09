"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Sistema de marca.
 *
 * Logotipo oficial de la iglesia, en dos variantes tonales a partir del mismo
 * diseño (archivo entregado en `FOTOS/LOGO.png`, limpio de ruido y recortado):
 *   /public/images/logo/logo.png         azul noche de marca — fondos claros
 *   /public/images/logo/logo-white.png   color original del logotipo — fondos oscuros
 *
 * El color original (melocotón) es ilegible sobre blanco, así que la versión
 * de fondos claros se recolorea al azul noche de la marca; sobre fondos
 * oscuros se usa el color real del logotipo, que además combina con el
 * dorado de la paleta. El archivo original sin recortar queda guardado en
 * `logo-original-source.png` para referencia.
 *
 * El componente prueba cada candidato en orden (SVG primero, por si en el
 * futuro se sustituye por una versión vectorial) y nunca muestra una imagen
 * rota: si ningún archivo existe, cae a un wordmark tipográfico provisional.
 */

interface BrandLogoProps {
  variant?: "horizontal" | "compact";
  tone?: "light" | "dark";
  className?: string;
  asLink?: boolean;
}

const candidates = {
  dark: ["/images/logo/logo.svg", "/images/logo/logo.png"],
  light: ["/images/logo/logo-white.svg", "/images/logo/logo-white.png"],
} as const;

/** Caché del sondeo para no repetirlo en cada montaje (cabecera, pie, menú). */
const probeCache = new Map<string, string | null>();

function probeFiles(files: readonly string[]): Promise<string | null> {
  return new Promise((resolve) => {
    const tryNext = (index: number) => {
      if (index >= files.length) {
        resolve(null);
        return;
      }
      const file = files[index]!;
      const image = new window.Image();
      image.onload = () => resolve(file);
      image.onerror = () => tryNext(index + 1);
      image.src = file;
    };
    tryNext(0);
  });
}

function useLogoFile(tone: "light" | "dark") {
  const files = candidates[tone];
  const key = files.join("|");
  const [probe, setProbe] = useState(() => ({ key, file: probeCache.get(key) ?? null }));

  // Ajuste de estado durante el render cuando cambia el tono (p. ej. al
  // alternar entre la variante clara y la oscura al hacer scroll).
  if (probe.key !== key) {
    setProbe({ key, file: probeCache.get(key) ?? null });
  }

  useEffect(() => {
    if (probeCache.has(key)) return;

    let cancelled = false;
    probeFiles(files).then((file) => {
      probeCache.set(key, file);
      if (!cancelled) setProbe({ key, file });
    });

    return () => {
      cancelled = true;
    };
  }, [key, files]);

  return probe.file;
}

export function BrandLogo({
  variant = "horizontal",
  tone = "dark",
  className,
  asLink = true,
}: BrandLogoProps) {
  const file = useLogoFile(tone);
  const color = tone === "light" ? "text-white" : "text-night";

  const content = (
    <span className={cx("inline-flex items-center gap-3", className)}>
      {file ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={file}
          alt={site.name}
          className={cx("w-auto object-contain", variant === "compact" ? "h-8" : "h-10 sm:h-11")}
        />
      ) : (
        <>
          <span
            aria-hidden
            className={cx("h-9 w-px shrink-0", tone === "light" ? "bg-white/35" : "bg-gold/70")}
          />
          <span className={cx("flex flex-col leading-[0.95]", color)}>
            <span className="font-display text-[0.6rem] font-semibold uppercase tracking-[0.3em] opacity-70">
              Iglesia
            </span>
            <span
              className={cx(
                "font-display font-extrabold tracking-[-0.035em]",
                variant === "compact" ? "text-[1.0625rem]" : "text-[1.1875rem] sm:text-[1.3125rem]",
              )}
            >
              Verbo de Dios
            </span>
          </span>
        </>
      )}
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/" aria-label={`${site.name} — ir a la portada`} className="inline-flex shrink-0">
      {content}
    </Link>
  );
}
