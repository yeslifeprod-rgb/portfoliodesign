"use client";

import React from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs,
  SiNodedotjs, SiNestjs, SiPrisma, SiMongodb, SiPostgresql, SiMysql,
  SiDocker, SiGit, SiJest, SiCypress, SiAdobephotoshop, SiFigma
} from "react-icons/si";
import { FaPenFancy } from "react-icons/fa"; // Excalidraw (icône stylisée)

interface StackItem {
  Icon: React.ElementType;
  name: string;
  color: string;
}

/* Liste des stacks sans catégories */
const stacks: StackItem[] = [
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiVuedotjs, name: "Vue.js", color: "#42B883" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { Icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
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
      className="bg-white text-gray-900 px-6 sm:px-10 md:px-20 py-32 "
    >
      {/* Titre centré */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 ">
      🧠 Stack
      </h2>

      {/* Contenu flexible */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Liste des stacks */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {stacks.map(({ Icon, name, color }, index) => (
              <div
                key={index}
                className="stack-card flex flex-col items-center justify-center text-center gap-2 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all"
              >
                <Icon className="text-4xl" style={{ color }} />
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vidéo à droite */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src="/assets/stack.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Stack;
