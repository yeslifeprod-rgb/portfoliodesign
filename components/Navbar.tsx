"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LangContext";

const WaveUnderline = () => (
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
);

const Navbar: React.FC = () => {
  const { language, setLanguage } = useLang();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "projets", label: language === "fr" ? "Projets" : "Projects", href: "#projets" },
    { id: "stack", label: "Stack", href: "#stack" },
    { id: "experience", label: language === "fr" ? "Expérience" : "Experience", href: "#experience" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

      setActiveSection(foundActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 w-full backdrop-blur-md text-black z-50 
        transition-all duration-300 font-['DM_Sans']
        ${isScrolled ? "md:bg-white/5 bg-white/95" : "md:bg-transparent bg-white/80"}
        py-4 px-6 md:shadow-none shadow-sm
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex justify-center items-center relative">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 items-center">
          {navigation.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className={`
                relative text-lg transition-colors duration-300 
                cursor-pointer hover:text-black
                ${activeSection === item.id ? "text-black" : "text-gray-600"}
              `}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {item.label}
              {activeSection === item.id && <WaveUnderline />}
            </motion.a>
          ))}
        </div>

        {/* Lang Switch - always on right */}
        <div className="absolute right-14 md:right-6 top-1/2 -translate-y-1/2 flex gap-2 items-center">
          <button
            onClick={() => setLanguage("fr")}
            className={`text-sm font-bold ${language === "fr" ? "text-blue-600" : "text-gray-500"}`}
            aria-label="Passer en français"
          >
            FR 🇫🇷
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => setLanguage("en")}
            className={`text-sm font-bold ${language === "en" ? "text-blue-600" : "text-gray-500"}`}
            aria-label="Switch to English"
          >
            EN 🇬🇧
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu mobile"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={32} className="stroke-[1.5]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={32} className="stroke-[1.5]" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="
                absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md
                shadow-sm rounded-b-2xl overflow-hidden
                flex flex-col items-center gap-4 py-6 md:hidden
              "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative w-4/5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    className={`
                      relative text-lg transition-colors duration-300 
                      rounded-lg block text-center py-2 px-8
                      hover:bg-white/10
                      ${activeSection === item.id ? "text-black bg-white/20" : "text-gray-600"}
                    `}
                  >
                    {item.label}
                    {activeSection === item.id && <WaveUnderline />}
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
