"use client";

import { Badge } from "@/components/ui/badge";

import { Section, SectionHeader } from "@/components/ui/section";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";
import { ArrowRight } from "lucide-react";

/**
 * Types de missions, réduits à une ligne : l'essentiel de la section est
 * désormais la méthode, pas le catalogue.
 */
const scope = [
  "une fonctionnalité bloquée",
  "un MVP à tester",
  "une présence en ligne",
  "un déploiement",
];

/**
 * Déroulé d'une mission.
 *
 * Chaque étape reprend ce que le site affirme déjà ailleurs — réponses de
 * lib/faq.ts, texte de la carte de contact, libellé du CTA — pour qu'aucun
 * engagement nouveau n'apparaisse ici sans avoir été validé.
 */
const steps: TimelineEntry[] = [
  {
    step: "01",
    title: "Premier échange",
    content: (
      <>
        <p className="text-pretty text-caption leading-relaxed text-muted-foreground">
          Vous décrivez ce qui bloque : le contexte, l&apos;objectif, la stack
          existante. Gratuit, sans engagement.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → Une réponse sous 24&nbsp;h, et un avis franc si ce n&apos;est pas
          pour moi.
        </p>
      </>
    ),
  },
  {
    step: "02",
    title: "Cadrage et devis",
    content: (
      <>
        <p className="text-pretty text-caption leading-relaxed text-muted-foreground">
          On délimite le périmètre. Forfait quand il est défini, journée quand
          la mission reste ouverte.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → Un périmètre écrit et un montant fixé avant de commencer.
        </p>
      </>
    ),
  },
  {
    step: "03",
    title: "Première étape vérifiable",
    content: (
      <>
        <p className="text-pretty text-caption leading-relaxed text-muted-foreground">
          Plutôt que de disparaître plusieurs semaines, je livre d&apos;abord un
          morceau que vous pouvez ouvrir et juger.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → De quoi confirmer la direction avant d&apos;engager la suite.
        </p>
      </>
    ),
  },
  {
    step: "04",
    title: "Développement",
    content: (
      <>
        <p className="text-pretty text-caption leading-relaxed text-muted-foreground">
          Livraisons par étapes, avec un point à chacune. Vous voyez le produit
          avancer au lieu d&apos;attendre une livraison finale.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → La fonctionnalité, testée et documentée.
        </p>
      </>
    ),
  },
  {
    step: "05",
    title: "Mise en ligne, puis la suite",
    content: (
      <>
        <p className="text-pretty text-caption leading-relaxed text-muted-foreground">
          Déploiement, correction des points sensibles, et une base saine pour
          les évolutions suivantes. Le suivi continu est optionnel.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → En production, entre vos mains.
        </p>
      </>
    ),
  },
];

export default function Services() {
  return (
    <Section id="services">
      <div className="mt-8">
        <SectionHeader
          eyebrow="Méthodologie"
          title="Comment se déroule une mission"
          description="Du premier échange à la mise en ligne, chaque étape est claire et vérifiable."
          framed
        />

        <div className="mt-7">
          <Timeline data={steps} />
        </div>
      </div>

      <a
        href="#contact"
        className="group mt-8 inline-flex items-center gap-1.5 text-small font-semibold text-primary"
      >
        Démarrer par le premier échange
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </Section>
  );
}
