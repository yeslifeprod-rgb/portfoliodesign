"use client";

import React from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiNestjs, SiPrisma, SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiJest, SiCypress, SiAdobephotoshop, SiFigma, SiIonic
} from "react-icons/si";
import { FaPenFancy } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri"; 
import { motion } from "framer-motion";

interface StackItem {
  Icon: React.ElementType;
  name: string;
  color: string;
}

const stacks: StackItem[] = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: RiSupabaseLine, name: "Supabase", color: "#3ECF8E" }, 
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { Icon: SiIonic, name: "Ionic", color: "#3880FF" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { Icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiJest, name: "Jest", color: "#C21325" },
  { Icon: SiCypress, name: "Cypress", color: "#17202C" },
  { Icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: FaPenFancy, name: "Excalidraw", color: "#000000" },
];

const Stack: React.FC = () => {
  return (
    <section
      id="stack"
      className="bg-white text-gray-900 px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16"
      >
        🧠 Stack
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto"
      >
        {/* STACK ANIMATION GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {stacks.map(({ Icon, name, color }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="stack-card flex flex-col items-center justify-center text-center gap-2 bg-white border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-all"
              >
                <Icon className="text-3xl md:text-4xl" style={{ color }} />
                <span className="text-xs md:text-sm">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VIDÉO ANIMATION DROITE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <video
            src="/assets/stack.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stack;
