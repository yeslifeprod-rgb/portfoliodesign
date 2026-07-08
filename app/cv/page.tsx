"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PokemonCVCard } from "./PokemonCVCard";

export default function CVPage() {
  useEffect(() => {
    document.body.style.paddingTop = "0";
    const navbar = document.querySelector("nav");
    if (navbar) (navbar as HTMLElement).style.display = "none";

    return () => {
      document.body.style.paddingTop = "";
      if (navbar) (navbar as HTMLElement).style.display = "";
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-background flex items-center justify-center px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in srgb, var(--primary) 8%, transparent)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in srgb, var(--primary) 6%, transparent)" }}
        />
      </div>

      <Link
        href="/"
        className="fixed top-6 left-6 z-20 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
        style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 55%, #0ea5e9 100%)" }}
      >
        <ArrowLeft className="w-4 h-4" />
        Retour
      </Link>

      <div className="relative z-10">
        <PokemonCVCard />
      </div>
    </main>
  );
}
