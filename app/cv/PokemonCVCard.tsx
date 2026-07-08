"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const CV_SRC = "/assets/CV/cv-ghardi-ilyes.png";
const RATIO = 3308 / 4604; // proportions réelles de l'image (≈ A4)

export function PokemonCVCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 250, damping: 25 });

  const glareX = useSpring(mx, { stiffness: 300, damping: 30 });
  const glareY = useSpring(my, { stiffness: 300, damping: 30 });
  const glareXPct = useTransform(glareX, (v) => `${v * 100}%`);
  const glareYPct = useTransform(glareY, (v) => `${v * 100}%`);
  const glareBg = useMotionTemplate`radial-gradient(500px circle at ${glareXPct} ${glareYPct}, rgba(255,255,255,0.55), transparent 55%)`;
  const holoBg = useMotionTemplate`linear-gradient(115deg, transparent 20%, rgba(29,78,216,0.35) 35%, rgba(14,165,233,0.35) 45%, rgba(236,72,153,0.3) 55%, rgba(250,204,21,0.3) 65%, transparent 80%)`;
  const holoPos = useMotionTemplate`${glareXPct} ${glareYPct}`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div style={{ perspective: 1600 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
          width: "min(90vw, calc(88vh * " + RATIO + "))",
          maxWidth: "640px",
          aspectRatio: RATIO,
        }}
        className="relative rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(29,78,216,0.25)]"
      >
        <Image
          src={CV_SRC}
          alt="CV Ilyes Ghardi — Développeur Full Stack"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 88vw, 480px"
          priority
        />

        {/* Halo holographique mobile */}
        <motion.div
          className="pointer-events-none absolute inset-0 mix-blend-color-dodge"
          style={{ background: holoBg, backgroundPosition: holoPos, backgroundSize: "250% 250%" }}
        />
        {/* Reflet spéculaire */}
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: glareBg }} />
      </motion.div>
    </div>
  );
}
