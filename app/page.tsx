import HomeSection from "@/components/Home";
import About from "@/components/About";
import { Projects } from "@/components/Projects";
import Stack from "@/components/Stack";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex flex-col min-h-screen w-full overflow-x-hidden bg-background text-foreground"
    >
      <HomeSection />
      <About />
      <Projects />
      <Stack />
      <Experiences />
      <Testimonials />
      <Contact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.benhouss.site/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Êtes-vous disponible en freelance à Lille ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui, disponible en freelance et CDI, basé à Lille (59) avec possibilité de full remote." },
          },
          {
            "@type": "Question",
            name: "Quelles technologies maîtrisez-vous ?",
            acceptedAnswer: { "@type": "Answer", text: "Next.js, React, NestJS, Ionic, Node.js, TypeScript, Prisma, MySQL, MongoDB, Docker, Tailwind CSS, Framer Motion, Vercel, Git, Jest, Cypress, Figma." },
          },
          {
            "@type": "Question",
            name: "Êtes-vous certifié Concepteur Développeur d'Applications ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui, titulaire du titre RNCP Niveau 6 — Concepteur Développeur d'Applications (Bac+4), obtenu à l'ALT Incubateur de Lille." },
          },
          {
            "@type": "Question",
            name: "Développez-vous des applications mobiles avec Ionic ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui, j'ai développé des applications mobiles cross-platform avec Ionic et React, notamment pour une application open source de gestion extra-scolaire." },
          },
          {
            "@type": "Question",
            name: "Êtes-vous disponible pour un CDI à Lille ?",
            acceptedAnswer: { "@type": "Answer", text: "Oui, ouvert aux opportunités CDI à Lille ou full remote. 2+ ans d'expérience, je cherche une équipe ambitieuse." },
          },
        ],
      }) }} />
    </main>
  );
}
