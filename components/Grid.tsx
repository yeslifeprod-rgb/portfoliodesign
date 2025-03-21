"use client";

import { cn } from "@/app/libs/utils";
import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
}

export function GridBackgroundDemo({ children }: GridBackgroundProps) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-white">
      {/* Fond en grille plus foncée */}
      <div
        className={cn(
          "absolute inset-0 opacity-50",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#b0b0b0_1px,transparent_1px),linear-gradient(to_bottom,#b0b0b0_1px,transparent_1px)]"
        )}
      />

      {/* Effet radial léger pour un rendu plus harmonieux */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-white"></div>

      {/* Contenu dynamique */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}
