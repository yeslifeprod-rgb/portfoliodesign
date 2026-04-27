import type { Project } from "../types";
import { getEdukaMeta } from "./meta";
import { getEdukaArchitecture } from "./architecture";
import { getEdukaFrontendSnippets } from "./snippets/frontend";
import { getEdukaBackendSnippets } from "./snippets/backend";
import { getEdukaDeployment } from "./deployment";
import { getEdukaDesign } from "./design";

export function getEdukaProject(language: string): Project {
  return {
    ...getEdukaMeta(language),
    architecture: getEdukaArchitecture(language),
    codeSnippets: [
      ...getEdukaFrontendSnippets(language),
      ...getEdukaBackendSnippets(language),
    ],
    deployment: getEdukaDeployment(language),
    design: getEdukaDesign(language),
  };
}
