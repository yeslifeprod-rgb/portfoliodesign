"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { useLang } from "@/context/LangContext";
import { getProjectById } from "@/lib/projects";
import { stackIcons } from "@/lib/stackIcons";
import { ProjectSnippetList } from "./ProjectSnippet";
import {
  HeroCarousel,
  QuoteSection,
  StorySection,
  BusinessCaseSection,
  MetricsGrid,
  ArchitectureSection,
  FeaturesGrid,
  DeploymentSection,
  DesignSection,
  LiveUrlButton,
  PlayStoreSection,
} from "./sections";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";

interface Props {
  id: string;
}

export default function ProjectPageClient({ id }: Props) {
  const { language } = useLang();
  const project = getProjectById(id, language);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [githubChoiceOpen, setGithubChoiceOpen] = useState(false);
  // Accent plein du thème : --brand-accent n'existe plus dans globals.css.
  const projectGradient = "var(--primary)";

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGithubChoiceOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  type TabId = "design" | "frontend" | "backend" | "deployment";
  const hasCategorized = project?.codeSnippets?.some(s => s.category) ?? false;
  const initialTab: TabId = project?.design && hasCategorized ? "design" : "frontend";
  const [activeTab, setActiveTab] = useState<TabId>(initialTab);

  if (!project) return null;

  const tabs: { id: TabId; label: string }[] = [
    ...(project.design && hasCategorized
      ? [{ id: "design" as const, label: language === "fr" ? "Processus de conception" : "Design Process" }]
      : []),
    ...(hasCategorized ? [{ id: "frontend" as const, label: "Front-end" }] : []),
    ...(hasCategorized ? [{ id: "backend" as const, label: "Back-end" }] : []),
    ...(project.deployment && hasCategorized
      ? [{ id: "deployment" as const, label: language === "fr" ? "Déploiement" : "Deployment" }]
      : []),
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden font-sans">

      {/* Navigation */}
      <nav className="fixed top-8 left-8 z-50">
        <Link
          href="/#projets"
          className="group relative overflow-hidden flex items-center gap-2.5 px-4 py-2 rounded-full text-primary-foreground text-caption font-black uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300"
          style={{ background: projectGradient }}
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <IconArrowLeft size={14} className="relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="relative z-10">{language === "fr" ? "Retour" : "Back"}</span>
        </Link>
      </nav>

      {/* Image Zoom overlay */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-8 cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-full max-h-full"
            >
              <Image
                src={zoomedImage}
                alt="Zoomed"
                width={1600}
                height={900}
                className="rounded-lg object-contain shadow-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-48 pb-32">

        {/* ── Hero ── */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-caption font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {project.designation}
            </p>
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-12 text-foreground">
              {project.name}
            </h1>

            {project.stack && (
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => {
                  const icon = stackIcons[tech];
                  return (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-caption font-bold tracking-tight"
                    >
                      {icon && <icon.Icon size={13} style={{ color: icon.color }} />}
                      {tech}
                    </Badge>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Carousel below h1 */}
          {project.gallery && project.gallery.length > 0 && (
            <HeroCarousel images={project.gallery} onZoom={setZoomedImage} />
          )}
        </div>

        {/* ── Content sections ── */}
        {project.quote && <QuoteSection quote={project.quote} />}

        {project.story && (
          <StorySection story={project.story} language={language} />
        )}

        {project.businessCase && (
          <BusinessCaseSection businessCase={project.businessCase} language={language} />
        )}

        {project.metrics && <MetricsGrid metrics={project.metrics} language={language} />}

        {project.architecture && (
          <ArchitectureSection
            architecture={project.architecture}
            language={language}
            onZoom={setZoomedImage}
          />
        )}

        {project.features && <FeaturesGrid features={project.features} language={language} />}

        {project.playstoreImages && project.playstoreImages.length > 0 && (
          <PlayStoreSection
            images={project.playstoreImages}
            language={language}
            onZoom={setZoomedImage}
          />
        )}

        {/* ── Code Snippets / Design / Deployment — tabbed ── */}
        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-8 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">
                {language === "fr" ? "Implémentation technique" : "Technical Implementation"}
              </h2>
              <div className="flex-1 h-[1px] bg-border" />
            </div>

            {hasCategorized ? (
              <>
                <div className="flex justify-start mb-8 overflow-x-auto pb-1">
                  <div className="flex p-1 bg-card rounded-full border border-border gap-0.5 shrink-0">
                    {tabs.map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`group relative overflow-hidden rounded-full text-caption font-black uppercase tracking-widest px-6 py-2 whitespace-nowrap transition-all duration-300 ${
                          activeTab === tab.id
                            ? "text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        style={activeTab === tab.id ? { background: projectGradient } : {}}
                      >
                        {activeTab === tab.id && (
                          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                        )}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    {activeTab === "design" && project.design && (
                      <DesignSection design={project.design} language={language} onZoom={setZoomedImage} />
                    )}
                    {(activeTab === "frontend" || activeTab === "backend") && (
                      <ProjectSnippetList
                        snippets={project.codeSnippets!.filter(s => s.category === activeTab)}
                        onZoom={setZoomedImage}
                        language={language}
                      />
                    )}
                    {activeTab === "deployment" && project.deployment && (
                      <DeploymentSection deployment={project.deployment} language={language} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <ProjectSnippetList
                snippets={project.codeSnippets!}
                onZoom={setZoomedImage}
                language={language}
              />
            )}
          </div>
        )}

        {project.liveUrl && <LiveUrlButton liveUrl={project.liveUrl} language={language} />}

        {project.githubUrls && (
          <div className="mb-16 flex justify-center">
            <div className="relative">
              <button
                onClick={() => setGithubChoiceOpen((v) => !v)}
                className="group relative inline-flex items-center gap-3 rounded-xl border border-border bg-background px-5 py-3 text-foreground shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-foreground" aria-hidden="true">
                  <path d="M12 .5C5.7.5.5 5.8.5 12.2c0 5.1 3.2 9.5 7.8 11 .6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.5.8 1.5 1.4 0 1.6 2.6 1.1 2.6 1.1.1-.8.4-1.1.8-1.4-2.5-.3-5.1-1.2-5.1-5.2 0-1.2.4-2.1 1.2-2.9-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.2 1.2.9-.2 1.9-.3 2.8-.3s1.9.1 2.8.3c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.6.1 2.9.8.8 1.2 1.7 1.2 2.9 0 4-2.6 4.8-5.1 5.2.4.3.8.9.8 1.8v2.6c0 .3.2.7.8.6 4.6-1.5 7.8-5.9 7.8-11C23.5 5.8 18.3.5 12 .5z"/>
                </svg>
                <span className="text-sm font-medium">{language === "fr" ? "Voir sur GitHub" : "View on GitHub"}</span>
              </button>
              {githubChoiceOpen && (
                <div className="absolute left-1/2 top-full z-20 mt-3 w-[340px] -translate-x-1/2 rounded-2xl border border-border bg-background p-3 shadow-xl">
                  <p className="px-1 pb-3 text-caption font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                    {language === "fr" ? "Choisir le dépôt" : "Choose repository"}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    <a
                      href={project.githubUrls.front}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
                      onClick={() => setGithubChoiceOpen(false)}
                    >
                      <span className="font-semibold">{language === "fr" ? "Front-end React" : "React front-end"}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground group-hover:text-foreground">GitHub</span>
                    </a>
                    <a
                      href={project.githubUrls.back}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
                      onClick={() => setGithubChoiceOpen(false)}
                    >
                      <span className="font-semibold">{language === "fr" ? "Back-end NestJS" : "NestJS back-end"}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground group-hover:text-foreground">GitHub</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      <footer className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text={project.name} />
      </footer>
    </div>
  );
}
