"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/context/LangContext";
import { GridBackgroundDemo } from "@/components/Grid";
import Navbar from "@/components/Navbar";

const Hero = () => {
  const { language } = useLang();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      {/* Navbar fixée en haut */}
      <Navbar />

      <GridBackgroundDemo>
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 pt-16 font-['DM_Sans']"
        >
          {/* Vidéo à gauche */}
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-56 h-56 object-cover rounded-full"
              >
                <source src="/assets/animation.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          </div>

          {/* Texte à droite */}
          <div className="md:w-2/3 text-center md:text-left px-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-gray-900 leading-tight tracking-wide drop-shadow-lg"
            >
              Ilyes <br /> Ghardi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-lg text-gray-700 max-w-xl leading-relaxed tracking-wide"
            >
              {language === "fr" ? (
                <>
                  Je m'appelle <strong>Ilyes Ghardi</strong>, concepteur d'applications web et mobile, passionné par la création d’expériences interactives modernes et fluides, alliant performance et design innovant.
                </>
              ) : (
                <>
                  My name is <strong>Ilyes Ghardi</strong>, a web and mobile application designer passionate about crafting modern, seamless interactive experiences that combine performance and innovative design.
                </>
              )}
            </motion.p>
          </div>
        </motion.section>
      </GridBackgroundDemo>
    </div>
  );
};

export default Hero;
