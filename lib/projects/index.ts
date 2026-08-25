export type { Project } from "./types";

export { getNum4Project } from "./num4";
export { getEdukaProject } from "./eduka";
export { getTeamsFinderProject } from "./teamsfinder";

export { getGtaProject } from "./gta-v-fivem";
export { getPortfolioProject } from "./portfolio";
export { getHermesProject } from "./hermes";

import { getNum4Project } from "./num4";
import { getEdukaProject } from "./eduka";
import { getTeamsFinderProject } from "./teamsfinder";

import { getPortfolioProject } from "./portfolio";
import { getHermesProject } from "./hermes";
import type { Project } from "./types";

/**
 * Projets affichés sur la home.
 *
 * Uniquement du travail client ou livré : Hermes est un environnement de
 * travail personnel, il diluait la preuve commerciale au milieu de
 * missions rémunérées.
 */
export function getHomeProjects(language: string): Project[] {
  return [
    getTeamsFinderProject(language), // live, +50 utilisateurs
    getNum4Project(language),        // mission startup, témoignage CTO
    getEdukaProject(language),       // équipe de 4 en remote, RGPD, tests E2E
    getHermesProject(language),      // environnement de travail sur VPS
  ];
}

/**
 * Tous les projets disposant d'une page dédiée.
 *
 * Distinct de `getHomeProjects` : cette liste alimente
 * `generateStaticParams` et le sitemap. Les confondre ferait disparaître
 * du site les projets simplement retirés de la home.
 */
export function getAllProjects(language: string): Project[] {
  return getHomeProjects(language);
}

export function getProjectById(id: string, language: string): Project | null {
  const projects = [
    ...getAllProjects(language),
    getPortfolioProject(language),
  ];

  return projects.find((p) => p.id === id) ?? null;
}
