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
    srcs: ["/assets/num4/num4.gif", "/assets/num4/num4.png"],
    gallery: ["/assets/num4/num4.gif", "/assets/num4/num4.png"],
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
    ],
    features:
      language === "fr"
        ? [
            "Landing page d'acquisition optimisée pour la conversion",
            "Intégration des paiements iOS avec RevenueCat",
            "Développement frontend/backend Next.js",
            "Collaboration directe avec le fondateur et le CTO",
            "Application mobile Flutter avec publication App Store",
            "Infrastructure cloud déployée sur AWS et Vercel",
          ]
        : [
            "Acquisition landing page optimized for conversion",
            "iOS payment integration with RevenueCat",
            "Next.js frontend/backend development",
            "Direct collaboration with founder and CTO",
            "Flutter mobile app with App Store publication",
            "Cloud infrastructure deployed on AWS and Vercel",
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
    gridSize: "md:col-span-2 lg:col-span-1",
  };
}
