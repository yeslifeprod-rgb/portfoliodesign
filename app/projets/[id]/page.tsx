import type { Metadata } from "next";
import { getProjectById } from "@/lib/projects";
import ProjectPageClient from "./ProjectPageClient";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id, "fr");
  if (!project) return {};

  const description = project.quote?.slice(0, 160) ?? "";
  const image = project.srcs?.[0];

  return {
    title: `${project.name} — Benhouss`,
    description,
    openGraph: {
      title: `${project.name} — Benhouss`,
      description,
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Benhouss`,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  return <ProjectPageClient id={id} />;
}
