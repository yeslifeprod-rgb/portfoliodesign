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
        <div className="container">
          <div className="footer-grid">
            {/* Bloc 1 */}
            <div className="school-section">
              <h3 className="school-title">
                <BiBookAlt className="book-icon" />
                Portfolio Ilyes{" "}
              </h3>
              <p className="school-text">
                {language === "fr"
                  ? "Développeur fullstack à Lille"
                  : "Fullstack developer based in Lille"}
              </p>
            </div>

            {/* Bloc 2 */}
            <div className="school-section">
              <div className="social-grid">
                <a
                  href="https://www.linkedin.com/in/ilyes-g-46b0982b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <BiLogoLinkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:yeslife.prod@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <BiEnvelope size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bas de page simple */}
          <div className="footer-bottom">
            <p>
              {language === "fr" ? (
                <>
                  © {year} Portfolio Ilyes — Tous droits réservés • Fait avec ❤
                </>
              ) : (
                <>
                  © {year} Ilyes — All rights reserved • Made with ❤
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
