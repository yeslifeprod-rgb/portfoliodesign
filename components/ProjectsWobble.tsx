"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import {
  IconCode,
  IconLayout,
  IconListCheck,
  IconPhoto,
  IconX,
  IconSparkles
} from "@tabler/icons-react";
import { useLang } from "@/context/LangContext";

type Project = {
  quote: string;
  name: string;
  designation: string;
  srcs: string[];
  stack?: string[];
  gallery?: string[];
  codeSnippets?: {
    title: string;
    description: string;
    code: string;
    language: string;
  }[];
  architecture?: {
    description: string;
    image?: string;
    points: string[];
  };
  features?: string[];
  gridSize?: string;
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { language } = useLang();

  // Block body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-slate-900 to-black p-6 md:p-12 overflow-y-auto"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 p-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 rounded-2xl transition-all hover:rotate-90 duration-300 hover:scale-110 z-50"
      >
        <IconX size={28} className="text-white" />
      </button>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section with Image */}
        <div className="relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden mb-8 shadow-2xl">
          <Image
            src={project.srcs[0]}
            alt={project.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <IconSparkles className="text-yellow-400" size={32} />
                <span className="text-lg text-white/90 font-semibold">{project.designation}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                {project.name}
              </h1>
              {project.stack && (
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="px-5 py-2.5 text-sm bg-white/20 backdrop-blur-xl text-white rounded-full font-bold border border-white/30 hover:bg-white/30 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Description Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <IconPhoto className="text-white" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {language === "fr" ? "À propos" : "About"}
              </h2>
            </div>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              {project.quote}
            </p>
          </motion.div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-8">
                <IconPhoto className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Galerie</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="relative h-64 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
                  >
                    <Image
                      src={img}
                      alt={`${project.name} ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-8">
                <IconListCheck className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {language === "fr" ? "Fonctionnalités" : "Features"}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + idx * 0.05 }}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </div>
                    <p className="text-white/95 leading-relaxed text-base">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <IconLayout className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-white">Architecture</h2>
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                {project.architecture.description}
              </p>
              <div className="space-y-4">
                {project.architecture.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + idx * 0.05 }}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-white/20"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    <p className="text-white/95 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Code Snippets */}
          {project.codeSnippets && project.codeSnippets.length > 0 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-8">
                <IconCode className="text-white" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {language === "fr" ? "Extraits de code" : "Code Snippets"}
                </h2>
              </div>
              <div className="space-y-6">
                {project.codeSnippets.map((snippet, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + idx * 0.1 }}
                    className="bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10"
                  >
                    <div className="bg-white/10 px-6 py-4 border-b border-white/10">
                      <h4 className="font-bold text-lg text-white">{snippet.title}</h4>
                      <p className="text-sm text-white/70 mt-1">{snippet.description}</p>
                    </div>
                    <div className="p-6 overflow-x-auto">
                      <pre className="text-sm text-green-300">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsWobble({ projects }: { projects: Project[] }) {
  const { language } = useLang();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projets"
      className="bg-gradient-to-b from-white via-gray-50 to-white px-6 sm:px-8 md:px-12 lg:px-24 py-20 sm:py-24 md:py-32 lg:py-40 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-7xl">🗂️</span>
          </motion.div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-gray-900 tracking-tight">
            {language === "fr" ? "Projets" : "Projects"}
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            {language === "fr"
              ? "Découvrez mes réalisations et projets techniques"
              : "Discover my achievements and technical projects"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* EDUKA - Large card */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
            <div className="max-w-xs relative z-10">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {projects[0].name}
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                {projects[0].designation}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {projects[0].stack?.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(projects[0]);
                }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-pink-800 rounded-lg font-semibold text-sm hover:bg-white/90 transition-all cursor-pointer relative z-20"
              >
                Voir plus
                <IconSparkles size={16} />
              </button>
            </div>
            <Image
              src={projects[0].srcs[0]}
              width={500}
              height={500}
              alt={projects[0].name}
              className="absolute -right-10 lg:-right-[30%] xl:-right-[25%] -bottom-10 object-cover h-[80%] w-auto rounded-2xl"
            />
          </WobbleCard>

          {/* Portfolio - Regular card */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-900">
            <div className="relative z-10">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {projects[1].name}
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                {projects[1].designation}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(projects[1]);
                }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold text-sm hover:bg-white/90 transition-all cursor-pointer relative z-20"
              >
                Voir plus
                <IconSparkles size={16} />
              </button>
            </div>
          </WobbleCard>

          {/* GTA V - Wide card */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-gradient-to-r from-indigo-900 to-purple-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm relative z-10">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {projects[2].name}
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                {projects[2].designation}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {projects[2].stack?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(projects[2]);
                }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-indigo-900 rounded-lg font-semibold text-sm hover:bg-white/90 transition-all cursor-pointer relative z-20"
              >
                Voir plus
                <IconSparkles size={16} />
              </button>
            </div>
            <Image
              src={projects[2].srcs[0]}
              width={500}
              height={500}
              alt={projects[2].name}
              className="absolute -right-10 md:-right-[35%] lg:-right-[15%] -bottom-10 object-cover h-[85%] w-auto rounded-2xl"
            />
          </WobbleCard>

          {/* NoteShare - Regular card */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-purple-900">
            <div className="relative z-10">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {projects[3].name}
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                {projects[3].designation}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(projects[3]);
                }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-purple-900 rounded-lg font-semibold text-sm hover:bg-white/90 transition-all cursor-pointer relative z-20"
              >
                Voir plus
                <IconSparkles size={16} />
              </button>
            </div>
          </WobbleCard>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
