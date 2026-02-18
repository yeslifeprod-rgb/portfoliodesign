"use client";

import { IconArrowLeft, IconArrowRight, IconChevronDown, IconChevronUp, IconCode, IconLayout, IconListCheck, IconPhoto } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LangContext";

import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiLua, SiNodedotjs, SiFigma, SiNestjs, SiPrisma, SiVercel,
  SiMysql, SiGit, SiDocker, SiCypress, SiJest, SiIonic, SiMongodb,
  SiVuedotjs,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";

const stackIcons: Record<string, React.ReactNode> = {
  React: <SiReact size={24} className="text-[#61DAFB]" />,
  NextJS: <SiNextdotjs size={24} className="text-black" />,
  Tailwind: <SiTailwindcss size={24} className="text-[#38B2AC]" />,
  TypeScript: <SiTypescript size={24} className="text-[#3178C6]" />,
  Vue: <SiVuedotjs size={24} className="text-[#42b883]" />,
  Lua: <SiLua size={24} className="text-[#000080]" />,
  NodeJS: <SiNodedotjs size={24} className="text-[#339933]" />,
  Supabase: <RiSupabaseLine size={24} className="text-[#3ECF8E]" />,
  Figma: <SiFigma size={24} className="text-[#F24E1E]" />,
  Nest: <SiNestjs size={24} className="text-[#E0234E]" />,
  Prisma: <SiPrisma size={24} className="text-[#2D3748]" />,
  Vercel: <SiVercel size={24} className="text-black" />,
  Mysql: <SiMysql size={24} className="text-[#00758F]" />,
  Nodemailer: <MdEmail size={24} className="text-[#009dff]" />,
  Git: <SiGit size={24} className="text-[#F1502F]" />,
  YouTrack: <FaTasks size={24} className="text-black" />,
  Docker: <SiDocker size={24} className="text-[#2496ED]" />,
  Cypress: <SiCypress size={24} className="text-[#17202C]" />,
  Jest: <SiJest size={24} className="text-[#C21325]" />,
  Ionic: <SiIonic size={24} className="text-[#3880FF]" />,
  MongoDB: <SiMongodb size={24} className="text-[#47A248]" />,
};

type Testimonial = {
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
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const { language } = useLang();

  const current = testimonials[active];
  const hasMultipleImages = current.srcs.length > 1;

  const handleNext = () => {
    setIsNext(true);
    setActive((prev) => (prev + 1) % testimonials.length);
    setImageIndex(0);
    setIsExpanded(false);
    setActiveTab("overview");
  };

  const handlePrev = () => {
    setIsNext(false);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setImageIndex(0);
    setIsExpanded(false);
    setActiveTab("overview");
  };

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % current.srcs.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + current.srcs.length) % current.srcs.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 15000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <section aria-labelledby="testimonial-title">
      <div className="mx-auto max-w-6xl px-4 py-16 font-sans antialiased">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative h-64 w-full sm:h-72 md:h-80 lg:h-[24rem] overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.srcs[imageIndex] + active}
                initial={{
                  opacity: 0,
                  x: isNext ? 100 : -100,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: isNext ? -100 : 100,
                  scale: 0.95,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={current.srcs[imageIndex]}
                  alt={`Image de ${current.name}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {hasMultipleImages && (
              <>
                <div className="absolute inset-0 flex justify-between items-center px-4">
                  <button
                    onClick={prevImage}
                    className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                    aria-label="Image précédente"
                  >
                    <IconArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
                    aria-label="Image suivante"
                  >
                    <IconArrowRight size={20} />
                  </button>
                </div>
                <div className="absolute bottom-3 w-full flex justify-center gap-2">
                  {current.srcs.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImageIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        idx === imageIndex ? "bg-black" : "bg-gray-300"
                      }`}
                      aria-label={`Voir l'image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Texte */}
          <div className="flex flex-col justify-between py-4">
            <motion.figure
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <figcaption>
                <h3
                  id="testimonial-title"
                  className="text-xl sm:text-2xl font-bold text-black"
                >
                  {current.name}
                </h3>
                <p className="text-sm text-gray-700">{current.designation}</p>
              </figcaption>

              <blockquote className="mt-6 text-base sm:text-lg italic font-medium text-black leading-relaxed">
                {current.quote}
              </blockquote>

              {current.stack && (
                <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  {current.stack.map((tech) => (
                    <span
                      key={tech}
                      className="group relative flex items-center justify-center transition-transform hover:scale-110"
                      aria-label={tech}
                    >
                      {stackIcons[tech] || (
                        <span className="text-xs text-red-500">❓ {tech}</span>
                      )}
                      <span className="absolute bottom-full mb-1 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </motion.figure>

            {/* Bouton Voir plus / Voir moins */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {isExpanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
              {isExpanded
                ? (language === "fr" ? "Voir moins" : "See less")
                : (language === "fr" ? "Voir plus" : "See more")
              }
            </button>

            {/* Flèches navigation centrées mobile */}
            <div className="flex justify-center sm:justify-start gap-4 pt-10">
              <button
                onClick={handlePrev}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
                aria-label="Témoignage précédent"
              >
                <IconArrowLeft className="h-5 w-5 text-white group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleNext}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
                aria-label="Témoignage suivant"
              >
                <IconArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Section expansible */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-8 border-t border-gray-200 pt-8">
                {/* Onglets */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: "overview", label: language === "fr" ? "Aperçu" : "Overview", icon: <IconPhoto size={18} /> },
                    { id: "code", label: "Code", icon: <IconCode size={18} /> },
                    { id: "architecture", label: "Architecture", icon: <IconLayout size={18} /> },
                    { id: "features", label: language === "fr" ? "Fonctionnalités" : "Features", icon: <IconListCheck size={18} /> },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                        activeTab === tab.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Contenu des onglets */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === "overview" && current.gallery && (
                      <div>
                        <h4 className="text-xl font-bold mb-4">
                          {language === "fr" ? "Galerie" : "Gallery"}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {current.gallery.map((img, idx) => (
                            <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                              <Image
                                src={img}
                                alt={`${current.name} screenshot ${idx + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === "code" && (
                      <div>
                        <h4 className="text-xl font-bold mb-4">
                          {language === "fr" ? "Extraits de code" : "Code Snippets"}
                        </h4>
                        {current.codeSnippets && current.codeSnippets.length > 0 ? (
                          <div className="space-y-6">
                            {current.codeSnippets.map((snippet, idx) => (
                              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                                  <h5 className="font-semibold text-lg">{snippet.title}</h5>
                                  <p className="text-sm text-gray-600 mt-1">{snippet.description}</p>
                                </div>
                                <div className="bg-gray-900 text-gray-100 p-4 overflow-x-auto">
                                  <pre className="text-sm">
                                    <code>{snippet.code}</code>
                                  </pre>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">
                            {language === "fr"
                              ? "Aucun extrait de code disponible."
                              : "No code snippets available."}
                          </p>
                        )}
                      </div>
                    )}

                    {activeTab === "architecture" && (
                      <div>
                        <h4 className="text-xl font-bold mb-4">
                          {language === "fr" ? "Architecture technique" : "Technical Architecture"}
                        </h4>
                        {current.architecture ? (
                          <>
                            <p className="text-gray-700 text-base leading-relaxed mb-6">
                              {current.architecture.description}
                            </p>
                            {current.architecture.image && (
                              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mb-6">
                                <Image
                                  src={current.architecture.image}
                                  alt="Architecture diagram"
                                  fill
                                  className="object-contain bg-gray-50"
                                />
                              </div>
                            )}
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                              <h5 className="font-semibold text-lg mb-3">
                                {language === "fr" ? "Points clés :" : "Key Points:"}
                              </h5>
                              <ul className="space-y-2">
                                {current.architecture.points.map((point, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span className="text-gray-700">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <p className="text-gray-500 italic">
                            {language === "fr"
                              ? "Aucune information d'architecture disponible."
                              : "No architecture information available."}
                          </p>
                        )}
                      </div>
                    )}

                    {activeTab === "features" && (
                      <div>
                        <h4 className="text-xl font-bold mb-4">
                          {language === "fr" ? "Fonctionnalités principales" : "Main Features"}
                        </h4>
                        {current.features && current.features.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {current.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
                              >
                                <div className="flex items-start">
                                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                                    {idx + 1}
                                  </div>
                                  <p className="text-gray-800 leading-relaxed">{feature}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">
                            {language === "fr"
                              ? "Aucune fonctionnalité listée."
                              : "No features listed."}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
