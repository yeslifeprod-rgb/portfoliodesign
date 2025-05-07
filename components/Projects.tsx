"use client";

import { AnimatedTestimonials } from "./animated-testimonials";
import { useLang } from "@/context/LangContext";

export function Projects() {
  const { language } = useLang();

  const testimonials = [
    {
      quote:
        language === "fr"
          ? "EDUKA est une application web conçue pour faciliter le covoiturage des enfants lors d’activités extra-scolaires. Les responsables peuvent y créer et gérer des groupes ainsi que des événements, tandis que les parents peuvent proposer ou rejoindre des trajets. L’application a été développée à distance par une équipe de 4 développeurs fullstack, avec un fort accent sur la sécurité des données des enfants."
          : "EDUKA is a web application designed to facilitate carpooling for children's extracurricular activities. Managers can create and manage groups and events, while parents can offer or join rides. The app was developed remotely by a team of four fullstack developers, with a strong focus on data and child safety.",
      name: "EDUKA",
      designation:
        language === "fr"
          ? "ALT - Application de covoiturage extra-scolaire"
          : "ALT - Carpooling App for Kids' Activities",
      srcs: ["/assets/eduka/Eduka.webp","/assets/eduka/eduka1.png","/assets/eduka/eduka5.png"],
      stack: [
        "Figma", "React", "Tailwind", "TypeScript", "Nest", "Git",
        "Vercel", "Prisma", "Mysql", "Cypress", "Jest", "Ionic", "MongoDB", "Docker",
      ],
    },
    {
      quote:
        language === "fr"
          ? "Ce portfolio a été entièrement conçu et développé par moi, sans utiliser de template générique. Il reflète ma créativité et mon identité. Réalisé avec React, Next.js et TypeScript, et déployé sur Vercel, il met en avant mes projets, mon parcours et mes compétences. Une intégration avec Nodemailer permet également un contact direct via le formulaire."
          : "This portfolio was entirely designed and developed by me, without using a generic template. It reflects my creativity and identity. Built with React, Next.js, and TypeScript, and deployed on Vercel, it showcases my projects, background, and skills. A Nodemailer integration allows direct contact via the form.",
      name: "Portfolio personnel",
      designation: language === "fr" ? "Design de portfolio" : "Portfolio Design",
      srcs: ["/assets/portfolio/portfolio.png"], 
      stack: ["Figma", "React", "NextJS", "Tailwind", "TypeScript", "Git", "Vercel"],
    },
    {
      quote:
        language === "fr"
          ? "J'ai conçu et géré un serveur GTA V RP en utilisant la plateforme FiveM. Mon objectif était de créer et personnaliser les scripts (en Lua et Vue.js), de les intégrer au serveur, et d'assurer leur bon fonctionnement côté base de données. Ce projet m’a permis de combiner logique back-end et immersion utilisateur dans un univers fictif."
          : "I designed and managed a GTA V RP server using the FiveM platform. My goal was to create and customize scripts (in Lua and Vue.js), integrate them into the server, and ensure proper database operations. This project allowed me to combine back-end logic with user immersion in a fictional world.",
      name: "Serveur GTA V / FIVEM",
      designation: language === "fr" ? "Projet solo" : "Solo project",
      srcs: ["/assets/gta/Gta.webp"],
      stack: ["Figma", "Vue", "Lua", "Tailwind", "Mysql"],
    },
  ];

  return (
    <section
      id="projets"
      className="bg-white text-gray-900 px-6 sm:px-10 md:px-20 py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-10 font-sans">
          {language === "fr" ? "🗂️ Projets" : "🗂️ Projects"}
        </h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
}
