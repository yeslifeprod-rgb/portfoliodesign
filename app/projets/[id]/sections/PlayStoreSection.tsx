"use client";

import Image from "next/image";
import { FadeIn, SectionHeading } from "./_shared";

interface Props {
  images: string[];
  language: string;
  onZoom?: (src: string) => void;
}

export function PlayStoreSection({ images, language }: Props) {
  if (!images || images.length === 0) return null;

  return (
    <FadeIn delay={0.2}>
      <div className="mb-32">
        <SectionHeading>
          {language === "fr" ? "📱 Captures Play Store" : "📱 Play Store Screenshots"}
        </SectionHeading>

        {/* Design épuré : liste horizontale simple, sans zoom, sans flèches ni fioritures */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {images.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-2xl overflow-hidden shadow-sm border border-border/40 snap-center"
              style={{ width: 280, aspectRatio: "9/16" }}
            >
              <Image
                src={src}
                alt={`Play Store screenshot ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
