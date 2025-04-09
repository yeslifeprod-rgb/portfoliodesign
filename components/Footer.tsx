"use client";

import React from "react";
import { useLang } from "@/context/LangContext";
import { BiLogoLinkedin, BiEnvelope, BiBookAlt } from "react-icons/bi";
import "./Footer.css";

const Footer: React.FC = () => {
  const { language } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="school-footer">
      <div className="grid-pattern">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section 1 */}
            <div className="school-section">
              <h3 className="school-title">
                <BiBookAlt className="book-icon" />
                Portfolio Ilyes{" "}
                <span aria-hidden="true" data-nosnippet>
                  Ghardi
                </span>
              </h3>
              <p className="school-text">
                {language === "fr" ? (
                  <>Développeur fullstack à Lille</>
                ) : (
                  <>Fullstack developer based in Lille</>
                )}
              </p>
            </div>

            {/* Section 2 */}
            <div className="school-section">
              <div className="social-grid">
                <a
                  href="https://www.linkedin.com/in/ilyes-g-46b0982b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                  aria-label={
                    language === "fr"
                      ? "Lien vers LinkedIn"
                      : "Link to LinkedIn"
                  }
                  style={
                    { "--hover-color": "#60A5FA" } as React.CSSProperties
                  }
                >
                  <BiLogoLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:ilyesghardi@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                  aria-label={
                    language === "fr" ? "Lien vers Email" : "Link to Email"
                  }
                  style={
                    { "--hover-color": "#2563EB" } as React.CSSProperties
                  }
                >
                  <BiEnvelope size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Barre animée */}
          <div className="w-full h-[1px] bg-gray-300 mt-8 mb-4 animate-pulse" />

          {/* Bas de page */}
          <div className="text-center text-sm text-gray-600">
            <p className="flex justify-center items-center gap-1">
              {language === "fr" ? (
                <>
                  © {year} Portfolio Ilyes{" "}
                  <span aria-hidden="true" data-nosnippet>
                    Ghardi
                  </span>{" "}
                  — Tous droits réservés • Fait avec{" "}
                </>
              ) : (
                <>
                  © {year} Ilyes{" "}
                  <span aria-hidden="true" data-nosnippet>
                    Ghardi
                  </span>{" "}
                  — All rights reserved • Made with{" "}
                </>
              )}
              <span className="animate-ping-slow text-red-500 text-base">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
