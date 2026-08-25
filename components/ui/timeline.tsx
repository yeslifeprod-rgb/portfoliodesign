"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Timeline Aceternity, adaptée.
 *
 * L'original imposait `pt-40` par entrée (160 px x 5 étapes), un
 * `max-w-7xl`, un titre codé en dur dans le composant et des couleurs
 * figées (`bg-white`, `text-neutral-500`, faisceau violet/bleu).
 *
 * Conservé : le faisceau dont la hauteur suit la progression du scroll —
 * c'est lui qui donne la lecture « du début jusqu'à la fin ».
 * Adapté : espacements resserrés, largeur héritée du parent, couleurs
 * sur les tokens du thème, et un numéro d'étape par entrée.
 */
export interface TimelineEntry {
  step: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => setHeight(el.getBoundingClientRect().height);
    measure();

    // L'original mesurait une seule fois : la hauteur était fausse dès
    // que les polices finissaient de charger ou que la page changeait
    // de largeur.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="w-full">
      <div ref={ref} className="relative">
        {/* Rail */}
        <div
          aria-hidden="true"
          style={{ height }}
          className="absolute left-[15px] top-0 w-px overflow-hidden bg-border [mask-image:linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]"
        >
          <motion.div
            style={{
              height: beamHeight,
              opacity: beamOpacity,
              backgroundImage: "var(--gradient-blue)",
            }}
            className="absolute inset-x-0 top-0 w-px rounded-full"
          />
        </div>

        <ol className="relative">
          {data.map((item) => (
            <li key={item.step} className="flex gap-4 pb-8 last:pb-0">
              {/* Anneau en dégradé : un calque en `p-px` plutôt qu'une
                  bordure, `border-image` ne se combinant pas avec un
                  rayon d'angle. */}
              <span
                aria-hidden="true"
                className="z-10 mt-0.5 flex h-8 w-8 shrink-0 rounded-full p-px"
                style={{ backgroundImage: "var(--gradient-blue)" }}
              >
                <span className="flex h-full w-full items-center justify-center rounded-full bg-card font-mono text-caption font-semibold">
                  <span
                    className="bg-clip-text text-transparent [-webkit-background-clip:text]"
                    style={{ backgroundImage: "var(--gradient-blue)" }}
                  >
                    {item.step}
                  </span>
                </span>
              </span>

              <div className="min-w-0 flex-1 pt-1">
                <h3 className="text-body font-semibold leading-tight text-foreground">
                  {item.title}
                </h3>
                <div className="mt-1.5">{item.content}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
