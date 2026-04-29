"use client";

import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./_shared";

interface Props {
  liveUrl: string;
  language: string;
}

export function LiveUrlButton({ liveUrl, language }: Props) {
  return (
    <FadeIn delay={0.1}>
      <div className="mb-32 flex">
        <Button
          asChild
          variant="gradient"
          className="rounded-full px-8 py-6 text-sm font-black uppercase tracking-widest group"
        >
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
            {language === "fr" ? "Voir le projet" : "View Project"}
            <IconExternalLink
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </Button>
      </div>
    </FadeIn>
  );
}
