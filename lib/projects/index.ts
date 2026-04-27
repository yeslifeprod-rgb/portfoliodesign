export type { Project } from "./types";

export { getNum4Project } from "./num4";
export { getEdukaProject } from "./eduka";
export { getTeamsFinderProject } from "./teamsfinder";

export { getGtaProject } from "./gta-v-fivem";
export { getPortfolioProject } from "./portfolio";

import { getNum4Project } from "./num4";
import { getEdukaProject } from "./eduka";
import { getTeamsFinderProject } from "./teamsfinder";

import { getGtaProject } from "./gta-v-fivem";
import { getPortfolioProject } from "./portfolio";
import type { Project } from "./types";

export function getAllProjects(language: string): Project[] {
  return [
    getTeamsFinderProject(language),
    getNum4Project(language),
    getPortfolioProject(language),
    getEdukaProject(language),
    getGtaProject(language),
  ];
}

export function getProjectById(id: string, language: string): Project | null {
  return getAllProjects(language).find((p) => p.id === id) ?? null;
}
