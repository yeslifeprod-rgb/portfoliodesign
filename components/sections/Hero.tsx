"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useBooking } from "@/lib/hooks/useBooking";
import { BUTTON_PRIMARY, BUTTON_SECONDARY } from "@/lib/buttonStyles";

/**
 * Chiffres affichés en preuve.
 *
 * Chaque valeur est vérifiable dans lib/projects/* — rien n'est estimé
 * ni arrondi à la hausse. `source` documente d'où vient le chiffre pour
 * que personne (moi compris) ne le gonfle plus tard par inadvertance.
 */
const proofPoints = [
  { value: 4, prefix: "", label: "projets documentés", source: "lib/projects/index.ts" },
  { value: 50, prefix: "+", label: "utilisateurs sur TeamsFinder", source: "teamsfinder.ts — businessCase.result" },
  { value: 2, prefix: "", label: "plateformes en ligne", source: "liveUrl TeamsFinder + Num4" },
];

export default function Hero() {
  const { openBooking, isBookingEnabled } = useBooking();

  return (
    <section id="home" className="relative px-5 pt-12 sm:px-6 sm:pt-16">
      {/* Le seul effet décoratif conservé sur toute la page.
          Il y en avait un second, identique, dans Contact. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 overflow-hidden opacity-[0.55] [mask-image:radial-gradient(60%_100%_at_50%_0%,black,transparent)]"
      >
        <FlickeringGrid
          squareSize={3}
          gridGap={6}
          flickerChance={0.12}
          color="#64748b"
          maxOpacity={0.5}
        />
      </div>

      <div className="mx-auto w-full max-w-content">
        {/* ── Statut ──
            Information, pas appel à l'action : seul le point est vert. */}
        <Badge
          variant="outline"
          className="gap-2 rounded-full px-3 py-1.5 font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-success" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Disponible pour de nouvelles missions
        </Badge>

        {/* ── Proposition ── */}
        <div className="mt-7 flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="max-w-xl">
            <h1 className="text-h1 text-balance text-foreground">
              Je développe ce qui fait avancer{" "}
              <span
                className="bg-clip-text font-display font-semibold text-transparent [-webkit-background-clip:text]"
                style={{ backgroundImage: "var(--gradient-blue)" }}
              >
                votre produit
              </span>.
            </h1>

            <p className="mt-5 text-pretty text-small text-muted-foreground sm:text-lead">
              Développeur full stack web et mobile à Lille. Vous arrivez avec
              un besoin précis, un projet à reprendre ou une idée à tester ;
              je vous aide à transformer cela en prochaine étape concrète.
            </p>
          </div>

          <div className="shrink-0 md:pt-2">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border shadow-md sm:h-24 sm:w-24">
              <Image
                src="/assets/avatar2.png"
                alt="Benhouss, développeur d'applications à Lille"
                fill
                priority
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>
        </div>

        {/* ── Action ── */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          {isBookingEnabled && (
            <button
              type="button"
              onClick={openBooking}
              className={BUTTON_PRIMARY}
            >
              <CalendarDays className="h-4 w-4" />
              Parler du projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}

          <Link
            href="#projets"
            className={BUTTON_SECONDARY}
          >
            Voir les projets
          </Link>
        </div>

        {/* ── Preuve ── */}
        <dl className="mt-12 grid grid-cols-3 gap-x-5 gap-y-7 pt-2 sm:gap-x-8">
          {proofPoints.map((point) => (
            <div key={point.label}>
              <dt className="sr-only">{point.label}</dt>
              <dd>
                <span className="block text-stat text-foreground">
                  {point.prefix}
                  <NumberTicker value={point.value} className="text-stat text-foreground" />
                </span>
                <span className="mt-1.5 block text-pretty text-caption text-muted-foreground">
                  {point.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* ── À propos, en une phrase ── */}
        <p
          id="about"
          className="mt-8 scroll-mt-24 max-w-2xl text-pretty text-small text-muted-foreground"
        >
          Un projet avance mieux quand le besoin, les choix techniques et la
          prochaine livraison restent lisibles. C&apos;est le fil que je garde,
          de la première idée à la mise en ligne.
        </p>
      </div>
    </section>
  );
}
