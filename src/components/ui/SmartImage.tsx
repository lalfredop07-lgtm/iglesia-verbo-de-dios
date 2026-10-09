"use client";

import Image from "next/image";
import { useState } from "react";
import { cx } from "@/lib/utils";

interface SmartImageProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  /** object-position del recorte en escritorio (p. ej. "50% 35%"). */
  focus?: string;
  /**
   * object-position en móvil. Un encuadre apaisado recortado a un marco
   * vertical pierde casi todo su contenido, así que las fotografías
   * protagonistas definen su propio punto focal para pantallas estrechas.
   */
  focusMobile?: string;
  priority?: boolean;
  quality?: number;
  /** Etiqueta mostrada en el placeholder cuando la imagen aún no existe. */
  placeholderLabel?: string;
}

/**
 * Imagen responsiva con `next/image` y respaldo elegante.
 *
 * Si el archivo todavía no se ha entregado, no aparece un icono de imagen rota
 * ni un error técnico: se muestra un placeholder editorial con los colores de
 * la marca. El componente siempre ocupa el contenedor (`fill`), de modo que la
 * relación de aspecto la define el bloque y nunca se producen saltos de layout.
 */
export function SmartImage({
  src,
  alt,
  sizes,
  className,
  focus = "50% 50%",
  focusMobile,
  priority = false,
  quality = 82,
  placeholderLabel = "Fotografía pendiente",
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${alt} — ${placeholderLabel}`}
        className={cx("plate flex h-full w-full items-end p-6", className)}
      >
        <span className="eyebrow text-[0.625rem] text-night/45">{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      priority={priority}
      onError={() => setFailed(true)}
      className={cx("smart-focus h-full w-full object-cover", className)}
      style={
        {
          "--focus": focus,
          ...(focusMobile ? { "--focus-sm": focusMobile } : {}),
        } as React.CSSProperties
      }
    />
  );
}
