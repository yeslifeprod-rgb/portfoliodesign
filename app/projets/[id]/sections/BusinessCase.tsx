"use client";

import { FadeIn, SectionHeading } from "./_shared";
import type { Project } from "@/lib/projects";

interface Props {
  businessCase: NonNullable<Project["businessCase"]>;
  language: string;
}

export function BusinessCaseSection({ businessCase, language }: Props) {
  const items = [
    { num: "01", label: language === "fr" ? "Problème" : "Problem", value: businessCase.problem },
    { num: "02", label: language === "fr" ? "Mon rôle" : "My Role",  value: businessCase.role },
    { num: "03", label: language === "fr" ? "Résultat" : "Result",   value: businessCase.result },
  ];

  return (
    <FadeIn delay={0.15}>
      <div className="mb-32">
        <SectionHeading>{language === "fr" ? "Contexte" : "Business Case"}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item.num} className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">{item.num}</span>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{item.label}</p>
              <p className="text-sm text-foreground leading-relaxed font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
