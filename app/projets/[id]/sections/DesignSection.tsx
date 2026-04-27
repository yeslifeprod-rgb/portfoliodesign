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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {design.methods.map((method, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="text-sm font-black text-foreground">{method.name}</h4>
              <p className="text-[12px] text-muted-foreground leading-relaxed">{method.description}</p>
              {method.image && (
                <div
                  className="relative aspect-video rounded-xl overflow-hidden bg-background border border-border cursor-zoom-in group mt-2"
                  onClick={() => onZoom(method.image!)}
                >
                  <Image
                    src={method.image}
                    alt={method.name}
                    fill
                    className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-500"
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
