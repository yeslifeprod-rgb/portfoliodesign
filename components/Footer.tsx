"use client";

import React, { useEffect, useRef } from "react";
import { 
  BiLogoLinkedin, 
  BiEnvelope,
  BiCopyright,
  BiChevronUp,
  BiBookAlt
} from "react-icons/bi";
import "./Footer.css";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { Icon: BiLogoLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "#60A5FA" },
    { Icon: BiEnvelope, href: "mailto:your@email.com", label: "Email", color: "#2563EB" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    footerRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="school-footer">
      <div className="grid-pattern">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="school-section animate-on-scroll fade-up">
              <h3 className="school-title">
                <BiBookAlt className="book-icon" />
                Université School
              </h3>
              <p className="school-text">Éducation de qualité pour tous.</p>
            </div>
            <div className="school-section animate-on-scroll fade-up delay-2">
              <div className="social-grid">
                {socialLinks.map(({ Icon, href, label, color }, index) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item animate-on-scroll fade-up"
                    style={{ 
                      "--delay": `${index * 0.1}s`,
                      "--hover-color": color 
                    } as React.CSSProperties}
                    aria-label={`Lien vers ${label}`}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-divider animate-on-scroll fade-up delay-4" />
          <div className="footer-bottom animate-on-scroll fade-up delay-5">
            <p className="copyright-text">
              <BiCopyright className="inline-block" /> {new Date().getFullYear()} 
              <span className="highlight">Tous droits réservés</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut accessible */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll-top"
        aria-label="Retour en haut de la page"
      >
        <BiChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
