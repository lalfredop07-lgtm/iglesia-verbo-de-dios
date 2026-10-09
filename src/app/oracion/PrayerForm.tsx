"use client";

import { Info } from "lucide-react";
import { useState, type FormEvent } from "react";

/**
 * Formulario de petición de oración — MODO DEMOSTRACIÓN.
 *
 * Esta maqueta no envía, no transmite y no almacena ningún dato: no hay
 * backend, ni base de datos, ni almacenamiento en el navegador. El `submit` se
 * detiene y únicamente se muestra un aviso explicando la situación, de modo que
 * ninguna persona pueda creer que su petición ha sido recibida.
 *
 * Para activarlo en el futuro habrá que conectar un servicio autorizado y
 * publicar antes la política de privacidad correspondiente.
 */
export function PrayerForm() {
  const [notice, setNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(true);
  };

  const field =
    "mt-2 w-full rounded-[12px] border border-night/14 bg-white px-4 py-3.5 text-[0.9375rem] text-graphite transition-colors duration-300 placeholder:text-graphite/35 focus:border-night/35 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[20px] bg-ice p-7 sm:p-9">
      <p className="eyebrow flex flex-wrap items-center gap-2.5 text-[0.625rem] tracking-[0.16em] text-[#8a6c33] sm:tracking-[0.22em]">
        <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
        Formulario en modo demostración
      </p>

      <div className="mt-7 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="font-display text-[0.875rem] font-semibold text-night">
            Nombre <span className="font-normal text-graphite/50">(opcional)</span>
          </label>
          <input id="nombre" name="nombre" type="text" autoComplete="name" className={field} placeholder="Cómo te llamas" />
        </div>

        <div>
          <label htmlFor="contacto" className="font-display text-[0.875rem] font-semibold text-night">
            Contacto <span className="font-normal text-graphite/50">(opcional)</span>
          </label>
          <input
            id="contacto"
            name="contacto"
            type="text"
            className={field}
            placeholder="Correo o teléfono, si quieres que te respondamos"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="peticion" className="font-display text-[0.875rem] font-semibold text-night">
          Tu petición
        </label>
        <textarea
          id="peticion"
          name="peticion"
          rows={6}
          className={`${field} resize-y`}
          placeholder="Cuéntanos por qué quieres que oremos"
          aria-describedby="aviso-privacidad"
        />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="consentimiento"
          name="consentimiento"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 rounded border-night/25 accent-[#153c72]"
        />
        <label htmlFor="consentimiento" className="text-[0.875rem] leading-relaxed text-graphite/75">
          Autorizo que el equipo pastoral lea mi petición para orar por ella.
        </label>
      </div>

      <p id="aviso-privacidad" className="mt-6 flex gap-3 text-[0.8125rem] leading-relaxed text-graphite/60">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-institutional" aria-hidden />
        <span>
          Esta web es una maqueta de presentación: el formulario no envía ni guarda la información
          en ningún sitio. No compartas datos sensibles hasta que esté activado el servicio
          definitivo y publicada la política de privacidad.
        </span>
      </p>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-night px-7 font-display text-[0.9375rem] font-semibold text-white transition-colors duration-[420ms] hover:bg-institutional sm:w-auto"
      >
        Enviar petición
      </button>

      <div aria-live="polite">
        {notice ? (
          <p className="mt-6 rounded-[12px] border border-gold/45 bg-gold/10 p-5 text-[0.9375rem] leading-relaxed text-graphite/85">
            <strong className="font-display font-semibold text-night">
              Tu petición no se ha enviado.
            </strong>{" "}
            Esta versión es una demostración visual: el formulario está desconectado a propósito y
            el texto no ha salido de tu navegador. Mientras tanto puedes escribirnos por Instagram o
            Facebook.
          </p>
        ) : null}
      </div>
    </form>
  );
}
