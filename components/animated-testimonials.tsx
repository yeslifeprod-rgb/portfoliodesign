"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiLua, SiNodedotjs, SiFigma, SiNestjs, SiPrisma, SiVercel,
  SiMysql, SiGit, SiDocker, SiCypress, SiJest, SiIonic, SiMongodb,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri"; // ✅ Supabase line icon

const stackIcons: Record<string, React.ReactNode> = {
  React: <SiReact size={24} className="text-[#61DAFB]" />,
  NextJS: <SiNextdotjs size={24} className="text-black" />,
  Tailwind: <SiTailwindcss size={24} className="text-[#38B2AC]" />,
  TypeScript: <SiTypescript size={24} className="text-[#3178C6]" />,
  Lua: <SiLua size={24} className="text-[#000080]" />,
  NodeJS: <SiNodedotjs size={24} className="text-[#339933]" />,
  Supabase: <RiSupabaseLine size={24} className="text-[#3ECF8E]" />, // ✅ ici
  Figma: <SiFigma size={24} className="text-[#F24E1E]" />,
  Nest: <SiNestjs size={24} className="text-[#E0234E]" />,
  Prisma: <SiPrisma size={24} className="text-[#2D3748]" />,
  Vercel: <SiVercel size={24} className="text-black" />,
  Mysql: <SiMysql size={24} className="text-[#00758F]" />,
  Nodemailer: <MdEmail size={24} className="text-[#009dff]" />,
  Git: <SiGit size={24} className="text-[#F1502F]" />,
  YouTrack: <FaTasks size={24} className="text-[#000000]" />,
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

const exampleTestimonials: Testimonial[] = [
  {
    name: "Ilyes Le Dev",
    designation: "Développeur fullstack basé à Lille",
    quote:
      "J'ai utilisé Supabase pour synchroniser en temps réel les données de mon SaaS. Sa simplicité et sa puissance m'ont permis d'aller droit au but.",
    srcs: ["/images/ilyes-profile.jpg"],
    stack: ["Supabase", "NextJS", "TypeScript", "Tailwind"],
  },
];

export const AnimatedTestimonials = ({
  testimonials = exampleTestimonials,
  autoplay = false,
}: {
  testimonials?: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [initialRotation, setInitialRotation] = useState(0);

  const current = testimonials[active];
  const hasMultipleImages = current.srcs.length > 1;

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
    setImageIndex(0);
  };

  const handlePrev = () => {
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

  useEffect(() => {
    setInitialRotation(Math.floor(Math.random() * 21) - 10);
  }, [imageIndex, active]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 font-sans antialiased">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="relative h-64 w-full sm:h-72 md:h-80 lg:h-[24rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.srcs[imageIndex]}
              initial={{ opacity: 0, scale: 0.9, z: -100, rotate: initialRotation }}
              animate={{
                opacity: 1,
                scale: 1,
                z: 0,
                rotate: 0,
                y: [0, -80, 0],
              }}
              exit={{ opacity: 0, scale: 0.9, z: 100, rotate: initialRotation }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 origin-bottom"
            >
              <Image
                src={current.srcs[imageIndex]}
                alt={current.name}
                width={500}
                height={500}
                draggable={false}
                className="h-full w-full rounded-3xl object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {hasMultipleImages && (
            <>
              <div className="absolute inset-0 flex justify-between items-center px-4">
                <button onClick={prevImage} className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition">
                  <IconArrowLeft size={20} />
                </button>
                <button onClick={nextImage} className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition">
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
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Texte */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-black">{current.name}</h3>
            <p className="text-sm text-gray-700">{current.designation}</p>

            <motion.p className="mt-6 text-base sm:text-lg italic font-medium text-black leading-relaxed">
              {current.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.06 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {current.stack && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
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
          </motion.div>

          <div className="flex gap-4 pt-10">
            <button onClick={handlePrev} className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
              <IconArrowLeft className="h-5 w-5 text-black group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button onClick={handleNext} className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
              <IconArrowRight className="h-5 w-5 text-black group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
