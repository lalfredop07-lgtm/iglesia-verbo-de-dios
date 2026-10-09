"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { BrandLogo } from "./BrandLogo";
import { primaryCta, primaryNav, secondaryNav, site } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  /* Bloqueo de scroll, cierre con Escape y foco atrapado dentro del panel. */
  useEffect(() => {
    if (!open) return;

    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          id="menu-principal"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className="fixed inset-0 z-[70] flex flex-col bg-night text-white lg:hidden"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: reduced ? 0.15 : 0.5, ease: EASE }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 15% 0%, rgba(34,88,160,0.45), transparent 60%), radial-gradient(ellipse 70% 50% at 100% 100%, rgba(21,60,114,0.6), transparent 60%)",
            }}
          />

          <div className="relative flex items-center justify-between px-6 pt-6">
            <BrandLogo tone="light" variant="compact" />
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white/10"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <nav className="relative flex-1 overflow-y-auto px-6 pb-10 pt-10">
            <ul>
              {primaryNav.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.06 + index * 0.055 }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-baseline justify-between gap-4 py-4"
                  >
                    <span className="font-display text-[1.75rem] font-semibold tracking-[-0.03em]">
                      {item.label}
                    </span>
                    <span className="eyebrow text-[0.625rem] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
              className="mt-8"
            >
              <Link
                href={primaryCta.href}
                onClick={onClose}
                className="flex min-h-[56px] w-full items-center justify-center rounded-full bg-white px-6 font-display text-base font-semibold text-night"
              >
                {primaryCta.label}
              </Link>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {secondaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="link-underline text-sm text-white/65"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
                {site.social.slice(0, 3).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow text-[0.6875rem] text-white/55"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm leading-relaxed text-white/45">{site.address.full}</p>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
