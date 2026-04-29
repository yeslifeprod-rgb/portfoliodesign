import type { Project } from "./types";

export function getNum4Project(language: string): Project {
  return {
    id: "num4",
    quote:
      language === "fr"
        ? "Num4 est une plateforme musicale développée en startup à Plaine Images (Roubaix). J'ai travaillé en collaboration directe avec le fondateur et le CTO sur le développement frontend/backend Next.js, l'intégration des paiements iOS avec RevenueCat, et l'optimisation d'une landing page d'acquisition."
        : "Num4 is a music platform developed in a startup at Plaine Images (Roubaix). I worked in direct collaboration with the founder and CTO on Next.js frontend/backend development, iOS payment integration with RevenueCat, and optimization of an acquisition landing page.",
    name: "Num4",
    designation:
      language === "fr"
        ? "Startup musicale — Plaine Images, Roubaix"
        : "Music startup — Plaine Images, Lille",
    srcs: ["/assets/num4/num4.gif"],
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
      "AWS",
      "Xcode",
      "RevenueCat",
      "Figma",
      "i18n",
    ],
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
    metrics:
      language === "fr"
        ? [
            { label: "Environnement", value: "Startup" },
            { label: "Paiements iOS", value: "Intégrés" },
            { label: "Landing page", value: "Déployée" },
            { label: "Collaboration", value: "CTO direct" },
          ]
        : [
            { label: "Environment", value: "Startup" },
            { label: "iOS Payments", value: "Integrated" },
            { label: "Landing Page", value: "Shipped" },
            { label: "Collaboration", value: "Direct CTO" },
          ],
    businessCase:
      language === "fr"
        ? {
            problem:
              "Refonte complète de la landing page d'une startup musicale et intégration des paiements sur application mobile iOS.",
            role: "Refonte UX/UI, développement Next.js, intégration des paiements iOS (RevenueCat) et tests sur Xcode.",
            result:
              "Optimisation du SEO, augmentation du trafic et amélioration du taux de conversion.",
          }
        : {
            problem:
              "Complete redesign of a music startup's landing page and integration of payments on iOS mobile application.",
            role: "UX/UI redesign, Next.js development, iOS payment integration (RevenueCat) and Xcode testing.",
            result:
              "SEO optimization, traffic increase and conversion rate improvement.",
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
