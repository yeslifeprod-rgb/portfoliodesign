import type { Project } from "./types";

export function getNum4Project(language: string): Project {
  return {
    id: "num4",
    quote:
      language === "fr"
        ? "Num4 devait expliquer son offre musicale plus clairement et permettre un abonnement iOS sans détour. J'ai travaillé directement avec le fondateur et le CTO sur ces deux points."
        : "Num4 is a music platform developed in a startup at Plaine Images (Roubaix). I worked in direct collaboration with the founder and CTO on Next.js frontend/backend development, iOS payment integration with RevenueCat, and optimization of an acquisition landing page.",
    name: "Num4",
    designation:
      language === "fr"
        ? "Startup musicale — Plaine Images, Roubaix"
        : "Music startup — Plaine Images, Lille",
    srcs: ["/assets/num4/num4.gif"],
    video: "/assets/num4/num4.mp4",
    testimonial: {
      quote:
        "T'as bien fait avancer le projet. T'as fait du très bon taf. Et si t'as besoin d'une reco n'hésite pas.",
      name: "Mathis",
      role: "CTO / Co-fondateur, Num4",
    },
    gallery: ["/assets/num4/num4.gif"],
    liveUrl: "https://num4-lp.vercel.app/",
    stack: [
      "Next.js",
      "Flutter",
      "TypeScript",
      "React",
      "Tailwind",
      "Vercel",
      "Prisma",
      "PostgreSQL",
      "AWS",
      "Xcode",
      "RevenueCat",
      "Figma",
      "i18n",
    ],
    story: language === "fr"
      ? {
          title: "Clarifier l'offre et sécuriser l'abonnement",
          paragraphs: [
            "La page d'acquisition ne rendait pas encore l'offre assez évidente, et le parcours d'abonnement iOS devait être relié au produit.",
            "Avec le fondateur et le CTO, j'ai repris l'interface, développé les parties Next.js et intégré RevenueCat. Chaque choix est resté lié à un usage réel, pas seulement à la maquette.",
            "La proposition est plus facile à comprendre et le paiement iOS suit maintenant le parcours de la plateforme.",
          ],
        }
      : {
          title: "Making a music offer easier to understand",
          paragraphs: [
            "Num4 needed to explain its offer more clearly and give iOS users a reliable subscription path. The work covered both acquisition and in-app payments.",
            "Working directly with the founder and CTO, I redesigned the interface, developed the Next.js parts and connected the purchase flow to RevenueCat.",
            "The landing page became clearer and iOS payments were integrated into the product flow.",
          ],
        },
    features:
      language === "fr"
        ? [
            "Landing page d'acquisition optimisée pour la conversion",
            "Mise en place de l'i18n pour le support multi-langues (Anglais/Français)",
            "Intégration des paiements iOS avec RevenueCat",
            "Développement frontend/backend Next.js",
            "Collaboration directe avec le fondateur et le CTO",
          ]
        : [
            "Acquisition landing page optimized for conversion",
            "Implementation of i18n for multi-language support (English/French)",
            "iOS payment integration with RevenueCat",
            "Next.js frontend/backend development",
            "Direct collaboration with founder and CTO",
          ],
    businessCase:
      language === "fr"
        ? {
            problem:
              "La landing page devait mieux présenter le produit et le parcours de paiement iOS devait être intégré.",
            role: "Refonte UX/UI, développement Next.js et intégration RevenueCat testée sur Xcode.",
            result:
              "Une page d'acquisition plus claire et un parcours de paiement iOS relié au produit.",
          }
        : {
            problem:
              "Complete redesign of a music startup's landing page and integration of payments on iOS mobile application.",
            role: "UX/UI redesign, Next.js development, iOS payment integration (RevenueCat) and Xcode testing.",
            result:
              "Acquisition landing page, Next.js development and iOS payment integration.",
          },
    architecture:
      language === "fr"
        ? {
            description:
              "Mise en place d'un tunnel de paiement complexe reliant l'écosystème Apple App Store au backend Next.js via RevenueCat.",
            points: [
              "Intégration du SDK Flutter RevenueCat pour la gestion des achats",
              "Configuration de l'App Store Connect (SKU, Sandbox testers)",
              "Développement de webhooks Next.js pour la validation asynchrone",
              "Synchronisation des droits d'accès utilisateur en temps réel",
            ],
          }
        : {
            description:
              "Implementation of a complex payment tunnel connecting the Apple App Store ecosystem to the Next.js backend via RevenueCat.",
            points: [
              "RevenueCat Flutter SDK integration for purchase management",
              "App Store Connect configuration (SKUs, Sandbox testers)",
              "Next.js webhooks development for asynchronous validation",
              "Real-time user access rights synchronization",
            ],
          },
    gridSize: "md:col-span-2 lg:col-span-1",
  };
}
