export type ExperienceType =
  | "stage"
  | "immersion-professionnelle"
  | "formation"
  | "projet-perso";

export interface Experience {
  id: number;
  number: string;
  type: ExperienceType;
  title: string;
  company: string;
  years: string;
  description: string[];
  skills: string[];
  projectLink?: { href: string; label: string };
}

export function getExperiences(language: string): Experience[] {
  return [
    {
      id: 1,
      number: "01",
      type: "stage",
      title:
        language === "fr"
          ? "Stagiaire Développeur Fullstack"
          : "Full Stack Developer Intern",
      company:
        language === "fr"
          ? "Num4 | Plateforme musicale — Plaine Images"
          : "Num4 | Music platform — Plaine Images",
      years: "2025",
      description:
        language === "fr"
          ? [
              "Développement front et back en Next.js pour livrer une application web réactive et performante",
              "Intervention sur la fonctionnalité de paiement iOS avec intégration de RevenueCat",
              "Utilisation de Xcode pour tester et simuler l'application sur différents appareils iOS",
              "Conception d'une landing page performante pour optimiser l'acquisition",
              "Collaboration directe avec le fondateur et le CTO",
            ]
          : [
              "Developed front-end and back-end with Next.js for a responsive, high-performance web app",
              "Implemented iOS payment functionality with RevenueCat integration",
              "Used Xcode to test and simulate the app on various iOS devices",
              "Designed a high-performance landing page to optimize acquisition",
              "Collaborated directly with the founder and CTO",
            ],
      skills: [
        "Next.js", "Flutter", "TypeScript", "React", "Figma",
        "Tailwind", "Vercel", "Prisma", "AWS", "Github", "Xcode", "Notion",
      ],
      projectLink: {
        href: "/projets/num4",
        label: language === "fr" ? "Voir le projet Num4" : "View Num4 project",
      },
    },
    {
      id: 2,
      number: "02",
      type: "immersion-professionnelle",
      title:
        language === "fr"
          ? "Concepteur Développeur d'Applications"
          : "Application Developer Designer",
      company: "ALT Incubateur",
      years: "2023 — 2024",
      description:
        language === "fr"
          ? [
              "Front-end React JS et mobile Ionic pour une application open source de gestion extra-scolaire",
              "Back-end Node JS avec Prisma, JWT et bcrypt pour sécuriser l'authentification",
              "Transition vers microservices avec NestJS et MySQL",
              "Conteneurisation Docker pour un environnement stable et reproductible",
              "Agile Scrum, tests Cypress et Jest",
              "Obtention du titre CDA (RNCP Bac +4)",
            ]
          : [
              "Front-end React JS and mobile Ionic for an open source extracurricular management app",
              "Back-end Node JS with Prisma, JWT and bcrypt for secure authentication",
              "Transition to microservices with NestJS and MySQL",
              "Docker containerization for stable, reproducible environment",
              "Agile Scrum, Cypress and Jest testing",
              "Earned CDA professional title (Level 6 - RNCP Bac +4)",
            ],
      skills: [
        "React", "NestJS", "Prisma", "MySQL", "TypeScript",
        "Ionic", "Node.js", "Docker", "Cypress", "Jest",
      ],
      projectLink: {
        href: "/projets/eduka",
        label: language === "fr" ? "Voir le projet Eduka" : "View Eduka project",
      },
    },
    {
      id: 3,
      number: "03",
      type: "formation",
      title:
        language === "fr"
          ? "Formations initiales — Web & Numérique"
          : "Initial Training — Web & Digital",
      company: "1Formation · O'clock",
      years: "2022 — 2023",
      description:
        language === "fr"
          ? [
              "Développement front-end, back-end et méthodologies agiles",
              "Découverte des métiers du numérique : développement, cybersécurité, design",
            ]
          : [
              "Frontend, backend development and agile methodologies",
              "Digital careers discovery: development, cybersecurity, design",
            ],
      skills: ["HTML", "CSS", "Javascript", "Wordpress"],
    },
  ];
}
