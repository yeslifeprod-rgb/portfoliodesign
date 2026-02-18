"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  IconChevronLeft,
  IconChevronRight,
  IconArrowRight,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiPrisma, SiMongodb, SiMysql,
  SiDocker, SiGit, SiJest, SiCypress, SiAdobephotoshop, SiFigma, SiIonic,
  SiVercel, SiGithub, SiNotion, SiFlutter, SiHtml5, SiCss3,
  SiJavascript, SiWordpress, SiXcode, SiAmazonwebservices
} from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { FaPenFancy } from "react-icons/fa";
import { useLang } from "@/context/LangContext";

type Project = {
  id: string;
  quote: string;
  name: string;
  designation: string;
  srcs: string[];
  stack?: string[];
};

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

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const { language } = useLang();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllTech, setShowAllTech] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowAllTech(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowAllTech(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setShowAllTech(false);
  };

  return (
    <section
      id="projets"
      className="bg-white px-6 sm:px-8 md:px-12 lg:px-24 py-16 sm:py-20 md:py-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            {language === "fr" ? "🗂️ Projets" : "🗂️ Projects"}
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            {language === "fr"
              ? "Découvrez mes réalisations"
              : "Discover my work"}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative group">
          {/* Main Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="w-full"
              >
                {/* Large Image */}
                <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={projects[currentIndex].srcs[0]}
                    alt={projects[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content Below Image */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 max-w-3xl"
                >
                  <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                    {projects[currentIndex].designation}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
                    {projects[currentIndex].name}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {projects[currentIndex].quote}
                  </p>

                  {/* Tech Stack */}
                  {projects[currentIndex].stack && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {(showAllTech
                        ? projects[currentIndex].stack
                        : projects[currentIndex].stack.slice(0, 8)
                      ).map((tech) => {
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
                      {projects[currentIndex].stack.length > 8 && (
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
                  )}

                  {/* View Details Button */}
                  <Link
                    href={`/projets/${projects[currentIndex].id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all group"
                  >
                    {language === "fr" ? "En savoir plus" : "Learn more"}
                    <IconArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-[175px] md:top-[225px] -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100"
            aria-label="Previous project"
          >
            <IconChevronLeft size={24} className="text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-[175px] md:top-[225px] -translate-y-1/2 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100"
            aria-label="Next project"
          >
            <IconChevronRight size={24} className="text-gray-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-gray-900"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative h-32 rounded-2xl overflow-hidden transition-all ${
                index === currentIndex
                  ? "ring-2 ring-gray-900 scale-[1.02]"
                  : "opacity-70 hover:opacity-100 hover:scale-[1.02]"
              }`}
            >
              <Image
                src={project.srcs[0]}
                alt={project.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-sm font-medium truncate drop-shadow-lg">
                  {project.name}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
