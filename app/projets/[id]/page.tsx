import type { Metadata } from "next";
import { getAllProjects, getProjectById } from "@/lib/projects";
import ProjectPageClient from "./ProjectPageClient";

type Props = { params: Promise<{ id: string }> };
const SITE_URL = "https://www.benhouss.site";

function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, SITE_URL).toString();
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export async function generateStaticParams() {
  return getAllProjects("fr").map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id, "fr");
  if (!project) return {};

  const canonical = `${SITE_URL}/projets/${project.id}`;
  const description = stripHtml(project.quote ?? "").slice(0, 160);
  const image = project.srcs?.[0] ? toAbsoluteUrl(project.srcs[0]) : undefined;
  const title = `${project.name} | Projet ${project.designation} | Benhouss`;

  return {
    title,
    description,
    keywords: [
      project.name,
      project.designation,
      ...(project.stack ?? []),
      "portfolio développeur full stack",
      "projet Next.js",
      "développeur Lille",
    ],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id, "fr");

  if (!project) {
    return <ProjectPageClient id={id} />;
  }

  const canonical = `${SITE_URL}/projets/${project.id}`;
  const description = stripHtml(project.quote ?? "").slice(0, 160);
  const image = project.srcs?.[0] ? toAbsoluteUrl(project.srcs[0]) : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonical}#project`,
    name: project.name,
    description,
    url: canonical,
    image,
    author: {
      "@type": "Person",
      name: "Benhouss",
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      name: "Benhouss",
      url: SITE_URL,
    },
    keywords: project.stack?.join(", "),
    genre: project.designation,
    inLanguage: "fr-FR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectPageClient id={id} />
    </>
  );
}
