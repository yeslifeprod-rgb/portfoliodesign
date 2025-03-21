"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: "Google", src: "/logos/google.svg" },
  { name: "Apple", src: "/logos/apple.svg" },
  { name: "Amazon", src: "/logos/amazon.svg" },
  { name: "Netflix", src: "/logos/netflix.svg" },
  { name: "Spotify", src: "/logos/spotify.svg" },
  { name: "Tesla", src: "/logos/tesla.svg" },
  { name: "Adobe", src: "/logos/adobe.svg" },
  { name: "Microsoft", src: "/logos/microsoft.svg" },
];

const LogoMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      x: "-100%",
      ease: "none",
      repeat: -1,
      duration: 25,
    });

    ScrollTrigger.create({
      trigger: marqueeRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        const newSpeed = 12 + (1 - self.progress) * 20;
        gsap.to(marqueeRef.current, { duration: newSpeed });
      },
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
      {/* Effet flou sur les côtés */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700 opacity-25"></div>

      {/* Conteneur principal */}
      <div className="relative flex overflow-hidden">
        <div ref={marqueeRef} className="flex space-x-16 whitespace-nowrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 sm:h-20 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img src={logo.src} alt={logo.name} className="h-12 sm:h-16 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
