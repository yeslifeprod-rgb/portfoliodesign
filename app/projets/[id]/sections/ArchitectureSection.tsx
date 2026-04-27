"use client";

import Image from "next/image";
import { FadeIn, SectionHeading } from "./_shared";
import type { Project } from "@/lib/projects";

interface Props {
  architecture: NonNullable<Project["architecture"]>;
  language: string;
  onZoom: (src: string) => void;
}

export function ArchitectureSection({ architecture, language, onZoom }: Props) {
  return (
    <FadeIn delay={0.2}>
      <div className="mb-32">
        <SectionHeading>Architecture</SectionHeading>

        <p
          className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-12 font-medium"
          dangerouslySetInnerHTML={{ __html: architecture.description }}
        />

        {architecture.image && (
          <div
            className="relative aspect-video rounded-3xl overflow-hidden bg-card border border-border cursor-zoom-in group mb-12"
            onClick={() => onZoom(architecture.image!)}
          >
            <Image
              src={architecture.image}
              alt="Architecture"
              fill
              className="object-contain p-8 group-hover:scale-[1.015] transition-transform duration-700"
            />
          </div>
        )}

        {architecture.points.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {architecture.points.map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex-shrink-0 flex items-center justify-center text-[10px] font-black">
                  {i + 1}
                </span>
                <p className="text-[12px] text-muted-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
}
