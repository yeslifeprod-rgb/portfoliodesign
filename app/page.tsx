import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import Stack from "@/components/Stack";
import HomeSection from "@/components/Home";

import { Projects } from "@/components/Projects";
import ButtonCV from "@/components/ButtonCV";
import Experiences from "@/components/Experiences";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center space-y-16 p-6">
        {/* Section Accueil */}

        <HomeSection />

        <ButtonCV />

        {/* Section Projets */}

        <Projects />

        {/* Section Stack (Compétences) */}

        <Stack />

        {/* Section Expériences */}

        <Experiences />

        {/* Section Contact */}

        <Contact />
      </main>

      {/* Section Footer */}
      <Footer />
    </>
  );
}
