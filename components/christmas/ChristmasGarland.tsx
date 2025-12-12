"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Guirlande de Noël avec ampoules colorées animées
 */
export const ChristmasGarland: React.FC = () => {
  const bulbColors = [
    "#ff4444", // rouge
    "#ffcc00", // jaune/or
    "#44ff44", // vert
    "#4488ff", // bleu
    "#ff44ff", // rose
    "#ff8844", // orange
  ];

  const bulbCount = 18;
  const bulbs = Array.from({ length: bulbCount }, (_, i) => ({
    id: i,
    color: bulbColors[i % bulbColors.length],
    delay: i * 0.1,
  }));

  return (
    <div className="absolute top-20 left-0 right-0 z-40 pointer-events-none overflow-hidden h-14">
      {/* Fil de la guirlande */}
      <svg
        viewBox="0 0 1000 45"
        className="w-full h-10 absolute top-0"
        preserveAspectRatio="none"
      >
        <path
          d="M0,8 Q55,38 110,8 Q165,38 220,8 Q275,38 330,8 Q385,38 440,8 Q495,38 550,8 Q605,38 660,8 Q715,38 770,8 Q825,38 880,8 Q935,38 1000,8"
          fill="none"
          stroke="#2d5a27"
          strokeWidth="3"
        />
      </svg>

      {/* Ampoules */}
      <div className="absolute top-0 left-0 right-0 flex justify-around px-6">
        {bulbs.map((bulb) => (
          <motion.div
            key={bulb.id}
            className="relative"
            style={{
              marginTop: bulb.id % 2 === 0 ? "3px" : "20px",
            }}
          >
            <div
              className="w-2 h-2.5 mx-auto rounded-t-sm"
              style={{ backgroundColor: "#4a4a4a" }}
            />
            <motion.div
              className="w-3.5 h-5 rounded-full mx-auto"
              style={{
                backgroundColor: bulb.color,
                boxShadow: `0 0 8px ${bulb.color}`,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  `0 0 5px ${bulb.color}`,
                  `0 0 15px ${bulb.color}, 0 0 25px ${bulb.color}`,
                  `0 0 5px ${bulb.color}`,
                ],
              }}
              transition={{
                duration: 1.2,
                delay: bulb.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
