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

/** Fil d'ariane structuré : Google l'affiche à la place de l'URL brute. */
function breadcrumbJsonLd(project: { id: string; name: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projets",
        item: `${SITE_URL}/#projets`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${SITE_URL}/projets/${project.id}`,
      },
    ],
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id, "fr");
  if (!project) return {};

  const canonical = `${SITE_URL}/projets/${project.id}`;
  const description = stripHtml(project.quote ?? "").slice(0, 160);
  // srcs[0] est un GIF d'aperçu pouvant peser plusieurs dizaines de Mo —
  // au-delà de ce que les plateformes sociales acceptent, et au mauvais
  // ratio. On ne le déclare que s'il s'agit d'une image légère ; sinon
  // Next retombe sur l'OG générée par app/opengraph-image.tsx.
  // Quand la page déclare son propre bloc `openGraph`, Next ne retombe
  // pas sur app/opengraph-image.tsx : il faut la désigner explicitement,
  // sinon la page part sans aucune image de partage.
  const preview = project.srcs?.[0];
  const image =
    preview && !preview.endsWith(".gif")
      ? toAbsoluteUrl(preview)
      : `${SITE_URL}/opengraph-image`;
  const title = `${project.name} | ${project.designation} | Benhouss`;

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
      images: [{ url: image, width: 1200, height: 630 }],
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
  // srcs[0] est un GIF d'aperçu pouvant peser plusieurs dizaines de Mo —
  // au-delà de ce que les plateformes sociales acceptent, et au mauvais
  // ratio. On ne le déclare que s'il s'agit d'une image légère ; sinon
  // Next retombe sur l'OG générée par app/opengraph-image.tsx.
  // Quand la page déclare son propre bloc `openGraph`, Next ne retombe
  // pas sur app/opengraph-image.tsx : il faut la désigner explicitement,
  // sinon la page part sans aucune image de partage.
  const preview = project.srcs?.[0];
  const image =
    preview && !preview.endsWith(".gif")
      ? toAbsoluteUrl(preview)
      : `${SITE_URL}/opengraph-image`;

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(project)),
        }}
      />
      <ProjectPageClient id={id} />
    </>
  );
}
