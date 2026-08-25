import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

/**
 * Ordre de lecture pensé pour la conversion :
 * proposition → preuve → offre → objections → action.
 *
 * Plus de section « témoignages » : la preuve est portée par les cartes
 * projet elles-mêmes, au contact du travail qu'elle commente.
 *
 * La largeur et le padding ne sont plus déclarés ici : chaque section
 * utilise la primitive `Section`, seule détentrice de la grille.
 */
export default function HomePage() {
  return (
    <>
      <main
        id="main-content"
        className="relative flex min-h-dvh flex-col gap-16 overflow-x-hidden pb-28 sm:gap-20"
      >
        <Hero />
        <Projects />
        <Services />
        <FAQ />
        <Contact />
      </main>

    </>
  );
}
