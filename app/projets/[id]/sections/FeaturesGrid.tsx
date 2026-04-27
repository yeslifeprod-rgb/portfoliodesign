"use client";

import { FadeIn, SectionHeading } from "./_shared";

interface Props {
  features: string[];
  language: string;
}

export function FeaturesGrid({ features, language }: Props) {
  return (
    <FadeIn delay={0.2}>
      <div className="mb-32">
        <SectionHeading>{language === "fr" ? "Fonctionnalités" : "Features"}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <p className="text-[12px] text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
