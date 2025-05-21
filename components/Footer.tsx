"use client";

import React from "react";
import { useLang } from "@/context/LangContext";
import { BiEnvelope, BiBookAlt } from "react-icons/bi";
import { SiGitlab } from "react-icons/si";
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
                Portfolio Benhouss
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
                {/* GitLab officiel en couleur */}
                <a
                  href="https://gitlab.com/yeslife.prod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                >
                  <SiGitlab size={20} color="#FC6D26" /> {/* Couleur officielle */}
                  <span>GitLab</span>
                </a>

                {/* Email */}
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

          {/* Bas de page */}
          <div className="footer-bottom">
            <p>
              {language === "fr" ? (
                <>
                  © {year} Benhouss — Tous droits réservés • Fait avec ❤
                </>
              ) : (
                <>
                  © {year} Benhouss — All rights reserved • Made with ❤
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
