"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  const current = testimonials[active];
  const hasMultipleImages = current.srcs.length > 1;

  const handleNext = () => {
    setIsNext(true);
    setActive((prev) => (prev + 1) % testimonials.length);
    setImageIndex(0);
  };

  const handlePrev = () => {
    setIsNext(false);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setImageIndex(0);
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
      </div>
    </section>
  );
};
