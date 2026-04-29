"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { useLang } from "@/context/LangContext";
import { getProjectById } from "@/lib/projects";
import { stackIcons } from "@/lib/stackIcons";
import { ProjectSnippetList } from "./ProjectSnippet";
import {
  HeroCarousel,
  QuoteSection,
  BusinessCaseSection,
  MetricsGrid,
  ArchitectureSection,
  FeaturesGrid,
  DeploymentSection,
  DesignSection,
  LiveUrlButton,
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
  const projectGradient = "linear-gradient(148deg, #0b05e7 0%, #1d4ed8 40%, #4bdfff 100%)";

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
          className="group relative overflow-hidden flex items-center gap-2.5 px-4 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-[0_4px_16px_rgba(11,5,231,0.3)] hover:shadow-[0_6px_24px_rgba(75,223,255,0.4)] transition-all duration-300"
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
                className="rounded-lg object-contain shadow-2xl"
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
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-4">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-bold tracking-tight"
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

        {/* ── Code Snippets / Design / Deployment — tabbed ── */}
        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-8 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-black">
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
                        className={`group relative overflow-hidden rounded-full text-[10px] font-black uppercase tracking-widest px-6 py-2 whitespace-nowrap transition-all duration-300 ${
                          activeTab === tab.id
                            ? "text-white shadow-[0_4px_16px_rgba(4,3,231,0.3)]"
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

      </main>

      <footer className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text={project.name} />
      </footer>
    </div>
  );
}
