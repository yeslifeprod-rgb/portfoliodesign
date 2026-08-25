"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/**
 * Grille unique du site.
 *
 * Avant : chaque section redéclarait son propre `max-w-*` et son propre
 * `px-*` à l'intérieur d'un parent qui en imposait déjà. Résultat :
 * cinq largeurs de contenu différentes empilées verticalement
 * (624 / 576 / 560 px), et un padding horizontal appliqué deux fois.
 *
 * Désormais `Section` est le seul endroit où ces valeurs existent.
 */
export function Section({
  id,
  className,
  children,
  divider = false,
  /** Désactive l'apparition au défilement pour une section donnée. */
  animate = true,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  divider?: boolean;
  animate?: boolean;
}) {
  // Respecte le réglage système : sans cela, l'apparition s'impose aux
  // personnes qui ont demandé moins de mouvement.
  const prefersReducedMotion = useReducedMotion();
  const isAnimated = animate && !prefersReducedMotion;

  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-24 px-5 sm:px-6", className)}
      initial={isAnimated ? { opacity: 0, y: 24 } : false}
      whileInView={isAnimated ? { opacity: 1, y: 0 } : undefined}
      // `once` : la section ne rejoue pas son entrée à chaque passage.
      // La marge négative déclenche l'animation quand la section est
      // franchement entrée dans l'écran, pas dès son premier pixel.
      viewport={{ once: true, margin: "-96px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-content">
        {divider && <div className="rule mb-16 sm:mb-20" aria-hidden="true" />}
        {children}
      </div>
    </motion.section>
  );
}

/**
 * En-tête de section unique.
 *
 * Le motif « filet — badge centré — filet » était copié-collé dans
 * Services, Projets et Témoignages, pendant que FAQ et Contact
 * utilisaient un motif différent. Une seule implémentation ici.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  framed = false,
  eyebrowStyle = "pill",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  /** Filets dégradés encadrant une pilule d'accent, façon dock/portfolio. */
  framed?: boolean;
  /** `bracket` : label discret entre crochets, réservé aux sections
      qui ne vendent pas (la FAQ). */
  eyebrowStyle?: "pill" | "bracket";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "flex flex-col gap-2.5",
        centered && "items-center text-center",
        className
      )}
    >
      {framed ? (
        <div className="flex w-full items-center">
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"
          />
          <Badge
            variant="accent"
            className="z-10 rounded-lg px-4 py-1 text-small font-medium"
          >
            {eyebrow}
          </Badge>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent"
          />
        </div>
      ) : eyebrowStyle === "bracket" ? (
        <span className="font-mono text-eyebrow uppercase tracking-widest text-primary">
          [ {eyebrow} ]
        </span>
      ) : (
        <Badge variant="accent" className="rounded-full px-3 py-1 text-caption">
          {eyebrow}
        </Badge>
      )}

      <h2 className="text-h2 text-balance text-foreground">{title}</h2>

      {description && (
        <p
          className={cn(
            "max-w-xl text-pretty text-small text-muted-foreground sm:text-body",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
