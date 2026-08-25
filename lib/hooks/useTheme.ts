"use client";

import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

/**
 * Bascule clair / sombre.
 *
 * Extrait de AnimatedThemeToggler pour deux raisons :
 *
 * 1. `document.startViewTransition` n'y était pas gardé. Sur un navigateur
 *    qui ne l'implémente pas (Firefox), l'appel lève et le thème ne
 *    basculait jamais.
 * 2. Le toggle vivait dans un <button> lui-même imbriqué dans un élément
 *    `role="button"` du Dock — deux cibles interactives superposées.
 *    Le Dock consomme désormais `toggleTheme` directement.
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(
    async (origin?: HTMLElement | null) => {
      const apply = () => {
        const next = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
          /* navigation privée : le thème vaut pour la session seulement */
        }
        setIsDark(next);
      };

      const supportsTransition =
        typeof document.startViewTransition === "function";
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!supportsTransition || prefersReducedMotion || !origin) {
        apply();
        return;
      }

      await document.startViewTransition(() => flushSync(apply)).ready;

      const { top, left, width, height } = origin.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const radius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 400,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    },
    []
  );

  return { isDark, toggleTheme };
}
