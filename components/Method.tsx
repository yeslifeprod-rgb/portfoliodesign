"use client";

import { useLang } from "@/context/LangContext";

const steps = [
  ["Reproduire le problème", "Reproduce the problem"],
  ["Identifier la cause", "Identify the cause"],
  ["Implémenter un correctif ciblé", "Implement a focused fix"],
  ["Ajouter ou mettre à jour les tests", "Add or update tests"],
  ["Documenter la solution et la livraison", "Document the solution and delivery"],
];

export default function Method() {
  const { language } = useLang();
  const fr = language === "fr";
  return (
    <section id="methode" className="bg-background px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{fr ? "Ma méthode" : "My method"}</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{fr ? "Comprendre avant de corriger." : "Understand before fixing."}</h2><p className="mt-5 text-base leading-7 text-muted-foreground">{fr ? "Chaque intervention commence par un problème reproductible et se termine par une livraison que l’équipe peut reprendre." : "Every intervention starts with a reproducible issue and ends with a handoff the team can maintain."}</p></div>
        <ol className="mt-12 space-y-4 lg:mt-0">
          {steps.map(([frStep, enStep], index) => <li key={frStep} className="flex gap-4 rounded-xl border border-border bg-card p-5"><span className="font-mono text-sm text-primary">0{index + 1}</span><span className="font-medium">{fr ? frStep : enStep}</span></li>)}
        </ol>
      </div>
    </section>
  );
}
