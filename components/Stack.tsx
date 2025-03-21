"use client";

import React from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs,
  SiNodedotjs, SiNestjs, SiPrisma, SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiJest, SiCypress, SiAdobephotoshop, SiFigma, SiIonic
} from "react-icons/si";
import { FaPenFancy } from "react-icons/fa";
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
  { Icon: SiVuedotjs, name: "Vue.js", color: "#42B883" },
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
      className="bg-white text-gray-900 px-6 sm:px-10 md:px-20 py-32"
    >
      {/* Animation sur le titre */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-bold text-center mb-16"
      >
        🧠 Stack
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto"
      >
        {/* STACK ANIMATION GAUCHE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stacks.map(({ Icon, name, color }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="stack-card flex flex-col items-center justify-center text-center gap-2 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
              >
                <Icon className="text-4xl" style={{ color }} />
                <span className="text-sm">{name}</span>
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
            className="w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stack;
