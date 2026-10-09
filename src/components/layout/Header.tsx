"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { MobileMenu } from "./MobileMenu";
import { primaryCta, primaryNav } from "@/content/site";
import { cx } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Toda página comienza con un bloque oscuro: la barra puede ser transparente
     arriba y volverse clara al desplazarse, manteniendo siempre la legibilidad. */
  const onDark = !scrolled;

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-night focus:px-5 focus:py-3 focus:text-sm focus:text-white"
      >
        Saltar al contenido
      </a>

      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "bg-white/88 shadow-[0_1px_0_rgba(11,35,69,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/75"
            : "bg-transparent",
        )}
      >
        <div
          className={cx(
            "shell flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? "h-[72px]" : "h-[80px] sm:h-[88px]",
          )}
        >
          <BrandLogo tone={onDark ? "light" : "dark"} />

          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {primaryNav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cx(
                        "link-underline py-2 text-[0.9375rem] transition-colors duration-300",
                        onDark
                          ? "text-white/85 hover:text-white"
                          : "text-graphite/80 hover:text-night",
                        active && (onDark ? "text-white" : "text-night font-medium"),
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={primaryCta.href}
              className={cx(
                "hidden items-center rounded-full px-6 py-3 font-display text-[0.875rem] font-semibold transition-colors duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] lg:inline-flex",
                onDark
                  ? "bg-white text-night hover:bg-ice"
                  : "bg-night text-white hover:bg-institutional",
              )}
            >
              {primaryCta.label}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              aria-controls="menu-principal"
              className={cx(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
                onDark
                  ? "border-white/25 text-white hover:bg-white/10"
                  : "border-night/15 text-night hover:bg-night/5",
              )}
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
