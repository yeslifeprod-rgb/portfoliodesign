"use client";

import { useRef } from "react";
import { useLang } from "@/context/LangContext";
import { GridBackgroundDemo } from "@/components/Grid";
import Navbar from "@/components/Navbar";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

const Hero = () => {
  const { language } = useLang();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      <Navbar />

      <GridBackgroundDemo>
        <LazyMotion features={domAnimation}>
          <m.section
            ref={sectionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 pt-24 sm:pt-32 font-['DM_Sans']"
          >
            {/* Vidéo */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-full"
                  poster="/assets/preview.jpg" // ✅ Poster optionnel
                >
                  <source src="/assets/animation.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>
            </div>

            {/* Texte */}
            <div className="w-full md:w-2/3 text-center md:text-left px-2 sm:px-6">
              {/* ✅ Pas d’animation sur le h1 pour optimiser le LCP */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase text-gray-900 leading-tight tracking-wide drop-shadow-lg">
                Ilyes <br /> Ghardi
              </h1>

              {/* Animation légère autorisée sur le paragraphe */}
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed tracking-wide"
              >
               {language === "fr" ? (
  <>
    Je suis <strong>Ilyes Ghardi</strong>, développeur full stack web et mobile passionné par la création d’expériences interactives fluides, modernes et performantes, au design innovant.
  </>
) : (
  <>
    I'm <strong>Ilyes Ghardi</strong>, a full stack web and mobile developer passionate about crafting seamless, modern, and high-performance interactive experiences with innovative design.
  </>
)}

              </m.p>
            </div>
          </m.section>
        </LazyMotion>
      </GridBackgroundDemo>
    </div>
  );
};

export default Hero;
