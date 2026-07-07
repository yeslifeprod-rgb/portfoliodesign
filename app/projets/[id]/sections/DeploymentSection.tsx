"use client";

import { FadeIn, SectionHeading } from "./_shared";
import type { Project } from "@/lib/projects";

interface Props {
  deployment: NonNullable<Project["deployment"]>;
  language: string;
}

export function DeploymentSection({ deployment, language }: Props) {
  const steps = deployment.steps.map((step) => {
    const [title, ...rest] = step.split("\n");
    return {
      title: title.replace(/^🎨 |^📦 |^☁️ |^🖥️ |^🌐 |^📊 |^🔔 /, ""),
      icon: title.split(" ")[0],
      lines: rest.map((line) => line.replace(/^\s*•\s*/, "").trim()).filter(Boolean),
    };
  });

  return (
    <FadeIn delay={0.2}>
      <div className="mb-32">
        <SectionHeading>{language === "fr" ? "Déploiement" : "Deployment"}</SectionHeading>
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Docker & AWS
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 text-foreground">
            {deployment.title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium max-w-2xl">
            {deployment.description}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 mb-10">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-border/50 bg-card/40 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 className="text-base font-bold text-foreground leading-tight">
                    {step.title}
                  </h4>
                </div>
              </div>
              <ul className="space-y-2">
                {step.lines.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">
            {deployment.conclusion}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
