"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";
import { ArrowRight } from "lucide-react";

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
          Vous décrivez le contexte, l&apos;objectif et ce qui existe déjà. Nous
          vérifions ensemble si le besoin entre dans mon périmètre.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → Une première lecture claire de votre situation.
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
          On délimite ce qui doit être livré et ce qui peut attendre. Le format
          de la mission est choisi à partir de ce périmètre.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → Vous savez ce qui est prévu avant de commencer.
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
          Je commence par une partie que vous pouvez ouvrir, tester et
          commenter. Cela permet d&apos;ajuster la direction sur du concret.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → Une première livraison pour décider de la suite.
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
          Les livraisons restent découpées et lisibles. Vous pouvez suivre les
          choix et donner votre retour au bon moment.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → Une fonctionnalité utilisable et compréhensible.
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
          Je mets en ligne ce qui a été validé et je corrige les points qui
          empêchent le projet de continuer. Le suivi peut ensuite s&apos;arrêter
          ou se poursuivre selon votre besoin.
        </p>
        <p className="mt-1.5 text-caption font-medium text-foreground">
          → Un projet livré et prêt pour l&apos;étape suivante.
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
        Décrire votre besoin
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </Section>
  );
}
