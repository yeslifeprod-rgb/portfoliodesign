// Re-export everything from the per-project files.
// Each project lives in lib/projects/<name>.ts for easy editing.
export type { Project } from "./projects/types";
export {
  getAllProjects,
  getProjectById,
  getTeamsFinderProject,
  getNum4Project,
  getPortfolioProject,
  getEdukaProject,
  getGtaProject,
} from "./projects/index";
