"use client";

import { FadeIn } from "./_shared";

export function QuoteSection({ quote }: { quote: string }) {
  return (
    <FadeIn delay={0.1}>
      <div className="mb-32 max-w-2xl">
        <p className="text-base text-muted-foreground leading-relaxed">{quote}</p>
      </div>
    </FadeIn>
  );
}
