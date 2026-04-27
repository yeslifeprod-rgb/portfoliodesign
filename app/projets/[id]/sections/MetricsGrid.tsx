"use client";

import { FadeIn, SectionHeading } from "./_shared";
import type { Project } from "@/lib/projects";

interface Props {
  metrics: NonNullable<Project["metrics"]>;
  language: string;
}

export function MetricsGrid({ metrics, language }: Props) {
  return (
    <FadeIn delay={0.2}>
      <div className="mb-32">
        <SectionHeading>{language === "fr" ? "En chiffres" : "At a Glance"}</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map(m => (
            <div key={m.label} className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-2">
              <span className="text-3xl font-black tracking-tighter text-foreground">{m.value}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
