"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiLua,
  SiNodedotjs,
  SiFigma,
  SiNestjs,
  SiPrisma,
  SiVercel,
  SiMysql,
  SiGit,
} from "react-icons/si";

import { MdEmail } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  stack?: string[];
};

const stackIcons: Record<string, React.ReactNode> = {
  React: <SiReact size={24} title="React" className="text-[#61DAFB]" />,
  NextJS: <SiNextdotjs size={24} title="Next.js" className="text-black" />,
  Tailwind: <SiTailwindcss size={24} title="Tailwind CSS" className="text-[#38B2AC]" />,
  TypeScript: <SiTypescript size={24} title="TypeScript" className="text-[#3178C6]" />,
  Vue: <SiVuedotjs size={24} title="Vue.js" className="text-[#42B883]" />,
  Lua: <SiLua size={24} title="Lua" className="text-[#000080]" />,
  NodeJS: <SiNodedotjs size={24} title="Node.js" className="text-[#339933]" />,
  Figma: <SiFigma size={24} title="Figma" className="text-[#F24E1E]" />,
  Nest: <SiNestjs size={24} title="NestJS" className="text-[#E0234E]" />,
  Prisma: <SiPrisma size={24} title="Prisma" className="text-[#2D3748]" />,
  Vercel: <SiVercel size={24} title="Vercel" className="text-black" />,
  Mysql: <SiMysql size={24} title="MySQL" className="text-[#00758F]" />,
  Nodemailer: <MdEmail size={24} title="Nodemailer" className="text-[#009dff]" />,
  Git: <SiGit size={24} title="Git" className="text-[#F1502F]" />,
  YouTrack: <FaTasks size={24} title="YouTrack" className="text-[#000000]" />,
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 15000); // 🔁 15 sec par slide
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 font-sans antialiased">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        {/* Image responsive */}
        <div className="relative h-64 w-full sm:h-72 md:h-80 lg:h-[24rem]">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: "0", scale: 0.9, z: -100, rotate: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{ opacity: "0", scale: 0.9, z: 100, rotate: randomRotateY() }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Texte responsive */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-700">
              {testimonials[active].designation}
            </p>

            <motion.p className="mt-6 text-base sm:text-lg italic font-medium text-black leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.06 * index, // ⚠️ ralentissement global ici
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            {/* Stack */}
            {testimonials[active].stack && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {testimonials[active].stack!.map((tech) => (
                  <span
                    key={tech}
                    className="transition-transform hover:scale-110"
                    aria-label={tech}
                    title={tech}
                  >
                    {stackIcons[tech]}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          <div className="flex gap-4 pt-10">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-black/10"
            >
              <IconArrowLeft className="h-5 w-5 text-black group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-black/10"
            >
              <IconArrowRight className="h-5 w-5 text-black group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
