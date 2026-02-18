"use client";

import { useParams } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  IconArrowLeft,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiPrisma, SiMongodb, SiMysql,
  SiDocker, SiGit, SiJest, SiCypress, SiAdobephotoshop, SiFigma, SiIonic,
  SiVercel, SiGithub, SiGitlab, SiNotion, SiFlutter, SiHtml5, SiCss3,
  SiJavascript, SiWordpress, SiXcode, SiAmazonwebservices
} from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { FaPenFancy } from "react-icons/fa";
import { useLang } from "@/context/LangContext";
import { getProjectById } from "@/lib/projects";

// Mapping des technologies vers leurs icônes et couleurs
const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Nest": { icon: SiNestjs, color: "#E0234E" },
  "NestJS": { icon: SiNestjs, color: "#E0234E" },
  "Prisma": { icon: SiPrisma, color: "#2D3748" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Mysql": { icon: SiMysql, color: "#4479A1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "Jest": { icon: SiJest, color: "#C21325" },
  "Cypress": { icon: SiCypress, color: "#17202C" },
  "Photoshop": { icon: SiAdobephotoshop, color: "#31A8FF" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "Flutter": { icon: SiFlutter, color: "#02569B" },
  "Vercel": { icon: SiVercel, color: "#000000" },
  "Github": { icon: SiGithub, color: "#181717" },
  "Notion": { icon: SiNotion, color: "#000000" },
  "Ionic": { icon: SiIonic, color: "#3880FF" },
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiCss3, color: "#1572B6" },
  "Javascript": { icon: SiJavascript, color: "#F7DF1E" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "Wordpress": { icon: SiWordpress, color: "#21759B" },
  "Supabase": { icon: RiSupabaseLine, color: "#3ECF8E" },
  "Xcode": { icon: SiXcode, color: "#147EFB" },
  "AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
  "Excalidraw": { icon: FaPenFancy, color: "#000000" },
};

export default function ProjectPage() {
  const params = useParams();
  const { language } = useLang();
  const project = getProjectById(params.id as string, language);
  const [showAllTech, setShowAllTech] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "design" | "deployment">("design");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            {language === "fr" ? "Projet non trouvé" : "Project not found"}
          </h1>
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all"
          >
            <IconArrowLeft size={20} />
            {language === "fr" ? "Retour aux projets" : "Back to projects"}
          </Link>
        </div>
      </div>
    );
  }

  const visibleTech = showAllTech ? project.stack : project.stack?.slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <Image
              src={zoomedImage}
              alt="Zoomed image"
              width={1920}
              height={1080}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-all"
        >
          <IconArrowLeft size={18} />
          {language === "fr" ? "Retour" : "Back"}
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Category */}
          <p className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">
            {project.designation}
          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
            {project.name}
          </h1>

          {/* Tech Stack */}
          {project.stack && project.stack.length > 0 && (
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {visibleTech?.map((tech) => {
                  const techInfo = techIcons[tech];
                  const Icon = techInfo?.icon;

                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full font-medium"
                    >
                      {Icon ? (
                        <Icon style={{ color: techInfo.color }} size={16} />
                      ) : null}
                      {tech}
                    </span>
                  );
                })}
                {project.stack.length > 8 && (
                  <button
                    onClick={() => setShowAllTech(!showAllTech)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    {showAllTech
                      ? language === "fr"
                        ? "Voir moins"
                        : "See less"
                      : language === "fr"
                      ? "Voir plus"
                      : "See more"}
                    {showAllTech ? (
                      <IconChevronUp size={14} />
                    ) : (
                      <IconChevronDown size={14} />
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Main Image */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={project.srcs[0]}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            {language === "fr" ? "À propos" : "About"}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.quote}
          </p>
        </motion.div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              Galerie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={img}
                    alt={`${project.name} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              {language === "fr" ? "Fonctionnalités" : "Features"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Architecture
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {project.architecture.description}
            </p>

            {project.architecture.image && (
              <div
                className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-8 cursor-pointer group"
                onClick={() => setZoomedImage(project.architecture?.image || null)}
              >
                <Image
                  src={project.architecture.image}
                  alt={`${project.name} architecture`}
                  fill
                  className="object-contain bg-white transition-opacity group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {project.architecture.points.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Code Snippets - Images and Detailed Descriptions */}
        {((project.codeSnippets && project.codeSnippets.length > 0) || project.design || project.deployment) && (
          <div className="mb-20">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">
              {language === "fr" ? "Description Détaillée" : "Detailed Description"}
            </h2>

            {/* Toggle Tabs */}
            <div className="flex flex-wrap gap-3 mb-12">
              {project.design && (
                <button
                  onClick={() => setActiveTab("design")}
                  className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300
                    ${activeTab === "design"
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {language === "fr" ? "Processus de Conception" : "Design Process"}
                </button>
              )}
              <button
                onClick={() => setActiveTab("frontend")}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeTab === "frontend"
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                Front-end
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeTab === "backend"
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                Back-end
              </button>
              {project.deployment && (
                <button
                  onClick={() => setActiveTab("deployment")}
                  className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300
                    ${activeTab === "deployment"
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {language === "fr" ? "Déploiement" : "Deployment"}
                </button>
              )}
            </div>

            {/* Design Process Content */}
            {activeTab === "design" && project.design && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xl text-gray-600 leading-relaxed mb-12">
                  {project.design.description}
                </p>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
                  {project.design.methods.map((method, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className={`
                        group relative overflow-hidden rounded-3xl border border-gray-200 bg-white
                        hover:shadow-2xl hover:border-gray-300 transition-all duration-300
                        ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                        ${idx === 3 ? 'lg:col-span-2' : ''}
                      `}
                    >
                      {method.image && (
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
                          <Image
                            src={method.image}
                            alt={method.name}
                            fill
                            className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                      )}

                      <div className="relative h-full flex flex-col justify-end p-6 z-10">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                          {method.name}
                        </h3>
                        <p className="text-gray-200 leading-relaxed text-sm line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {method.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Filtered Content (Frontend/Backend) */}
            {(activeTab === "frontend" || activeTab === "backend") && (
              <>
                <div className="space-y-20">
                  {project.codeSnippets
                    ?.filter(snippet => snippet.category === activeTab)
                    .map((snippet, idx) =>
                    snippet.code ? (
                      <div key={idx}>
                        {/* Separator for sections after the first one */}
                        {idx > 0 && (
                          <div className="mb-16 pt-16 border-t-2 border-gray-200" />
                        )}

                        {/* Image for detailed description */}
                        {snippet.image && (
                          <div
                            className="relative h-[600px] md:h-[700px] mb-8 cursor-pointer rounded-2xl overflow-hidden group"
                            onClick={() => setZoomedImage(snippet.image || null)}
                          >
                            <Image
                              src={snippet.image}
                              alt={snippet.title}
                              fill
                              className="object-contain transition-opacity group-hover:opacity-90"
                            />
                            {/* Zoom indicator */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Title and Description */}
                        <div className="mb-8">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            {snippet.title}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {snippet.description}
                          </p>
                        </div>

                        {/* Detailed text */}
                        <div className="border-l-4 border-gray-400 pl-8 py-4">
                          <div
                            className="text-base text-gray-800 leading-relaxed whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: snippet.code }}
                          />
                        </div>
                      </div>
                    ) : null
                  )}
                </div>

                {/* Empty State */}
                {project.codeSnippets?.filter(snippet => snippet.category === activeTab).length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">
                      {language === "fr"
                        ? "Aucun contenu disponible pour cette section"
                        : "No content available for this section"}
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Deployment Content */}
            {activeTab === "deployment" && project.deployment && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  {project.deployment.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                  className="text-xl text-gray-600 leading-relaxed mb-10"
                >
                  {project.deployment.description}
                </motion.p>

                {/* Architecture Diagram */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                  className="bg-slate-900 border border-slate-700 p-6 md:p-8 rounded-2xl mb-8 overflow-hidden relative"
                >
                  <div className="absolute inset-0 opacity-[0.03]">
                    <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                  </div>

                  <div className="relative">
                    <h4 className="text-center font-bold text-white text-lg mb-1">
                      {language === "fr" ? "Architecture de déploiement" : "Deployment Architecture"}
                    </h4>
                    <p className="text-center text-sm text-slate-400 mb-8">
                      {language === "fr"
                        ? "Du git push à la mise en production"
                        : "From git push to production"}
                    </p>

                    {/* Desktop SVG */}
                    <svg viewBox="0 0 780 260" className="w-full h-auto hidden md:block" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
                        </marker>
                        <marker id="arr-g" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                          <polygon points="0 0, 8 3, 0 6" fill="#10b981" />
                        </marker>
                      </defs>
                      <style>{`
                        @keyframes dash { from { stroke-dashoffset: 16; } to { stroke-dashoffset: 0; } }
                        .dashed { animation: dash 0.7s linear infinite; }
                      `}</style>

                      {/* Row 1: CI/CD Pipeline */}
                      {/* Developer */}
                      <rect x="10" y="30" width="90" height="70" rx="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="55" y="60" textAnchor="middle" fontSize="20">👨‍💻</text>
                      <text x="55" y="82" textAnchor="middle" fontSize="8" fill="#38bdf8" fontWeight="600">{language === "fr" ? "Développeur" : "Developer"}</text>

                      <line x1="105" y1="65" x2="148" y2="65" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr)" className="dashed" />
                      <text x="127" y="58" textAnchor="middle" fontSize="7" fill="#94a3b8">git push</text>

                      {/* GitLab */}
                      <rect x="155" y="30" width="90" height="70" rx="12" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
                      <text x="200" y="60" textAnchor="middle" fontSize="20">🦊</text>
                      <text x="200" y="82" textAnchor="middle" fontSize="8" fill="#f97316" fontWeight="600">GitLab CI</text>

                      <line x1="250" y1="65" x2="293" y2="65" stroke="#f97316" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr)" className="dashed" />
                      <text x="272" y="58" textAnchor="middle" fontSize="7" fill="#94a3b8">build + test</text>

                      {/* Docker */}
                      <rect x="300" y="30" width="90" height="70" rx="12" fill="#1e293b" stroke="#0ea5e9" strokeWidth="1.5" />
                      <text x="345" y="60" textAnchor="middle" fontSize="20">🐳</text>
                      <text x="345" y="82" textAnchor="middle" fontSize="8" fill="#0ea5e9" fontWeight="600">Docker Hub</text>

                      <line x1="395" y1="65" x2="438" y2="65" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr)" className="dashed" />
                      <text x="417" y="58" textAnchor="middle" fontSize="7" fill="#94a3b8">docker pull</text>

                      {/* AWS EC2 */}
                      <rect x="445" y="20" width="120" height="90" rx="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                      <text x="505" y="16" textAnchor="middle" fontSize="8" fill="#f59e0b" fontWeight="700">AWS EC2</text>
                      <text x="505" y="55" textAnchor="middle" fontSize="18">⚙️</text>
                      <text x="505" y="74" textAnchor="middle" fontSize="8" fill="#f59e0b" fontWeight="600">Backend API</text>
                      <text x="505" y="86" textAnchor="middle" fontSize="7" fill="#64748b">NestJS + MySQL</text>

                      <line x1="570" y1="65" x2="613" y2="65" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-g)" className="dashed" />

                      {/* Production */}
                      <rect x="620" y="20" width="150" height="90" rx="14" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
                      <text x="695" y="50" textAnchor="middle" fontSize="22">✅</text>
                      <text x="695" y="70" textAnchor="middle" fontSize="9" fill="#10b981" fontWeight="700">{language === "fr" ? "En production" : "Production"}</text>
                      <text x="695" y="85" textAnchor="middle" fontSize="7" fill="#64748b">eduka.vercel.app</text>
                      {/* Pulse circle */}
                      <circle cx="765" cy="28" r="4" fill="#10b981">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>

                      {/* Row 2: Vercel (frontend direct path) */}
                      <rect x="155" y="160" width="90" height="60" rx="12" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
                      <text x="200" y="188" textAnchor="middle" fontSize="16">▲</text>
                      <text x="200" y="206" textAnchor="middle" fontSize="8" fill="#e2e8f0" fontWeight="600">Vercel</text>

                      {/* GitLab → Vercel */}
                      <line x1="200" y1="105" x2="200" y2="155" stroke="#64748b" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr)" className="dashed" />
                      <text x="215" y="133" fontSize="7" fill="#94a3b8">auto-deploy</text>

                      {/* Vercel → Production */}
                      <line x1="250" y1="190" x2="620" y2="100" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arr-g)" className="dashed" />
                      <text x="420" y="140" textAnchor="middle" fontSize="7" fill="#10b981">Frontend (React)</text>

                      {/* Monitoring label */}
                      <rect x="445" y="170" width="120" height="50" rx="10" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" />
                      <text x="505" y="192" textAnchor="middle" fontSize="8" fill="#8b5cf6" fontWeight="600">Monitoring</text>
                      <text x="505" y="206" textAnchor="middle" fontSize="7" fill="#64748b">Kuma + CloudWatch</text>

                      {/* Monitoring → AWS */}
                      <line x1="505" y1="165" x2="505" y2="115" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" markerEnd="url(#arr)" />

                      {/* Legend */}
                      <text x="15" y="250" fontSize="7" fill="#64748b">
                        {language === "fr" ? "--- Lignes pointillées = flux automatisé" : "--- Dashed lines = automated flow"}
                      </text>
                    </svg>

                    {/* Mobile version */}
                    <div className="flex flex-col items-center gap-3 md:hidden">
                      {[
                        { emoji: "👨‍💻", label: language === "fr" ? "Développeur" : "Developer", sub: "git push", border: "border-sky-400" },
                        { emoji: "🦊", label: "GitLab CI", sub: "build + test", border: "border-orange-500" },
                        { emoji: "🐳", label: "Docker Hub", sub: "docker pull", border: "border-sky-500" },
                        { emoji: "⚙️", label: "AWS EC2", sub: "NestJS + MySQL", border: "border-amber-500" },
                        { emoji: "✅", label: language === "fr" ? "Production" : "Production", sub: "eduka.vercel.app", border: "border-emerald-500" },
                      ].map((s, i) => (
                        <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.12 }} className="flex flex-col items-center">
                          <div className={`w-20 h-20 bg-slate-800 border-2 ${s.border} rounded-xl flex flex-col items-center justify-center`}>
                            <span className="text-2xl">{s.emoji}</span>
                            <span className="text-[9px] font-semibold text-slate-300">{s.label}</span>
                          </div>
                          <span className="text-[8px] text-slate-500 mt-0.5">{s.sub}</span>
                          {i < 4 && (
                            <svg width="10" height="18" viewBox="0 0 10 18" className="text-slate-600 my-1">
                              <line x1="5" y1="0" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3">
                                <animate attributeName="stroke-dashoffset" from="12" to="0" dur="0.7s" repeatCount="indefinite" />
                              </line>
                              <polygon points="2,12 5,18 8,12" fill="currentColor" />
                            </svg>
                          )}
                        </motion.div>
                      ))}
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 rounded-full border border-slate-700">
                          <span className="text-xs">▲</span>
                          <span className="text-[9px] text-slate-400">Vercel (Frontend)</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 rounded-full border border-purple-500/30">
                          <span className="text-[9px] text-purple-400">Monitoring</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3 Cards: Vercel, Docker+AWS, Monitoring */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="bg-white border border-slate-200 p-5 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <SiVercel className="text-white" size={16} />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Vercel</h4>
                    </div>
                    <p className="text-xs text-slate-600 mb-3">
                      {language === "fr"
                        ? "Le frontend React est déployé automatiquement sur Vercel. Chaque commit sur GitLab déclenche une mise à jour en production."
                        : "The React frontend is automatically deployed on Vercel. Each GitLab commit triggers a production update."}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      {language === "fr" ? "Déploiement automatique" : "Auto-deploy"}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="bg-white border border-slate-200 p-5 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex -space-x-1">
                        <div className="w-7 h-7 bg-sky-500 rounded-lg flex items-center justify-center z-10">
                          <SiDocker className="text-white" size={14} />
                        </div>
                        <div className="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center">
                          <SiAmazonwebservices className="text-white" size={14} />
                        </div>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Docker + AWS</h4>
                    </div>
                    <p className="text-xs text-slate-600 mb-3">
                      {language === "fr"
                        ? "Le backend NestJS est containerisé avec Docker et déployé sur une instance AWS EC2. L'image est stockée sur Docker Hub."
                        : "The NestJS backend is containerized with Docker and deployed on an AWS EC2 instance. The image is stored on Docker Hub."}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded-full">
                      {language === "fr" ? "Idée de déploiement" : "Deployment plan"}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="bg-white border border-slate-200 p-5 rounded-xl"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">📊</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Monitoring</h4>
                    </div>
                    <p className="text-xs text-slate-600 mb-3">
                      {language === "fr"
                        ? "Surveillance continue avec Kuma Uptime (disponibilité) et AWS CloudWatch (métriques et logs). Tests de charge avec JMeter."
                        : "Continuous monitoring with Kuma Uptime (availability) and AWS CloudWatch (metrics and logs). Load testing with JMeter."}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-purple-700 bg-purple-50 border border-purple-200 px-2 py-1 rounded-full">
                      {language === "fr" ? "Idée de surveillance" : "Monitoring plan"}
                    </span>
                  </motion.div>
                </div>

                {project.deployment.image && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-10 cursor-pointer group"
                    onClick={() => setZoomedImage(project.deployment?.image || null)}
                  >
                    <Image
                      src={project.deployment.image}
                      alt={`${project.name} deployment`}
                      fill
                      className="object-contain bg-white transition-opacity group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                  }}
                  className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl flex items-start gap-3"
                >
                  <span className="text-xl">✅</span>
                  <p className="text-emerald-800 leading-relaxed text-sm">
                    {project.deployment.conclusion}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
