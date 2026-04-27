"use client";

import { FadeIn, SectionHeading } from "./_shared";
import { FirstDeploymentSchema, FeatureDeploymentSchema } from "../DeploymentSchema";
import type { Project } from "@/lib/projects";

interface Props {
  deployment: NonNullable<Project["deployment"]>;
  language: string;
}

export function DeploymentSection({ deployment, language }: Props) {
  return (
    <FadeIn delay={0.2}>
      <div className="mb-32">
        <SectionHeading>{language === "fr" ? "Déploiement" : "Deployment"}</SectionHeading>
        <div className="max-w-2xl mb-12">
          <h3 className="text-2xl font-black tracking-tight mb-4">{deployment.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed font-medium">{deployment.description}</p>
        </div>
        <FirstDeploymentSchema language={language} />
        <FeatureDeploymentSchema language={language} />
      </div>
    </FadeIn>
  );
}
