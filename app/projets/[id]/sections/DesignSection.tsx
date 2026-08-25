"use client";

import Image from "next/image";
import { FadeIn, SectionHeading } from "./_shared";
import type { Project } from "@/lib/projects";

interface Props {
  design: NonNullable<Project["design"]>;
  language: string;
  onZoom: (src: string) => void;
}

export function DesignSection({ design, language, onZoom }: Props) {
  return (
    <FadeIn delay={0.2}>
      <div className="mb-32">
        <SectionHeading>
          {language === "fr" ? "Processus de conception" : "Design Process"}
        </SectionHeading>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-12 font-medium">
          {design.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {design.methods.map((method, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="text-caption font-black uppercase tracking-[0.2em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="text-base font-black text-foreground">{method.name}</h4>
              <p className="text-small text-muted-foreground leading-relaxed">{method.description}</p>
              {method.image && (
                <div
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-sm border border-border/40 mt-4"
                >
                  <Image
                    src={method.image}
                    alt={method.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
