"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Composant de Père Noël volant avec son traîneau
 * Traverse la page de droite à gauche périodiquement
 */
export const FlyingSanta: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[9997]"
      aria-hidden="true"
    >
      <motion.div
        className="absolute top-[15%] text-6xl md:text-8xl"
        initial={{ x: "110vw" }}
        animate={{ x: "-120vw" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatDelay: 40,
          ease: "linear",
        }}
      >
        {/* Traîneau et rennes */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Rennes (3) */}
          <motion.div
            className="text-4xl md:text-6xl"
            animate={{ y: [0, -10, 0, -5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🦌
          </motion.div>
          <motion.div
            className="text-4xl md:text-6xl"
            animate={{ y: [-5, -15, -5, -10, -5] }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🦌
          </motion.div>
          <motion.div
            className="text-4xl md:text-6xl"
            animate={{ y: [0, -8, 0, -12, 0] }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🦌
          </motion.div>

          {/* Traîneau avec Père Noël */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -12, 0, -8, 0],
              rotate: [-2, 2, -2, 1, -2],
            }}
            transition={{
              duration: 1.5,
              delay: 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="text-5xl md:text-7xl drop-shadow-2xl">
              🛷
            </div>
            {/* Père Noël dans le traîneau */}
            <motion.div
              className="absolute -top-6 md:-top-10 left-2 md:left-4 text-4xl md:text-6xl"
              animate={{
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🎅
            </motion.div>

            {/* Sac de cadeaux */}
            <div className="absolute -top-4 md:-top-6 -right-3 md:-right-4 text-3xl md:text-5xl">
              🎁
            </div>
          </motion.div>
        </div>

        {/* Traînée d'étoiles */}
        <motion.div
          className="absolute top-1/2 left-0 -translate-y-1/2 flex gap-4 md:gap-6 text-2xl md:text-4xl"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>✨</span>
          <span>⭐</span>
          <span>✨</span>
          <span>⭐</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
