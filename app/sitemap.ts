import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

const SITE_URL = "https://www.benhouss.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getAllProjects("fr").map((project) => ({
    url: `${SITE_URL}/projets/${project.id}`,
    lastModified: new Date("2026-06-03"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Pages services dédiées par keyword
    {
      url: `${SITE_URL}/services/nextjs-lille`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/nestjs`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/ionic-lille`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/concepteur-application-lille`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/developpeur-frontend-lille`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/services/developpeur-cdi-lille`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/services/developpeur-lille`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/developpeur-freelance-lille`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/developpeur-remote-france`,
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectEntries,
  ];
}
