"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";

const WaveUnderline = React.memo(() => (
  <motion.div
    className="absolute -bottom-1 left-0 right-0 h-[8px] overflow-hidden w-[37px] mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
      <motion.path
        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </svg>
  </motion.div>
));

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLang();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const navigation = useMemo(
    () => [
      {
        id: "projets",
        label: language === "fr" ? "Projets" : "Projects",
        href: "#projets",
      },
      { id: "stack", label: "Stack", href: "#stack" },
      {
        id: "experience",
        label: language === "fr" ? "Expérience" : "Experience",
        href: "#experience",
      },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    [language]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      // Show/hide navbar on scroll direction
      if (currentY > lastScrollY.current && currentY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentY;

      // Active section detection
      let foundActiveSection: string | null = null;
      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            foundActiveSection = item.id;
          }
        }
      });
      if (foundActiveSection !== activeSection) {
        setActiveSection(foundActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation, activeSection]);

  return (
    <motion.nav
        className={`
          fixed top-0 left-0 w-full z-50 backdrop-blur-md text-black
          transition-all duration-300 font-['DM_Sans']
          ${
            isScrolled
              ? "md:bg-white/5 bg-white/95"
              : "md:bg-transparent bg-white/80"
          }
          py-4 px-6 md:shadow-none shadow-sm
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        {/* Lang switch */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setLanguage("fr")}
            className={`text-sm font-bold ${
              language === "fr" ? "text-blue-600" : "text-gray-500"
            }`}
            aria-label="Passer en français"
          >
            🇫🇷 FR
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => setLanguage("en")}
            className={`text-sm font-bold ${
              language === "en" ? "text-blue-600" : "text-gray-500"
            }`}
            aria-label="Switch to English"
          >
            🇬🇧 EN
          </button>
        </div>

        {/* Nav desktop */}
        <div className="hidden md:flex gap-12 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`
                relative text-lg transition-colors duration-300
                cursor-pointer hover:text-black
                ${activeSection === item.id ? "text-black" : "text-gray-600"}
              `}
            >
              {item.label}
              {activeSection === item.id && <WaveUnderline />}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile nav visible directement */}
      <div className="flex md:hidden mt-4 justify-around w-full">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`relative text-sm font-semibold px-2 py-1 transition-colors duration-200 ${
              activeSection === item.id ? "text-blue-600" : "text-gray-600"
            }`}
          >
            {item.label}
            {activeSection === item.id && <WaveUnderline />}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
