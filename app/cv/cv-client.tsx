"use client";

import { useEffect, useState } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { A4_H, A4_W, BORDER, GRAD_H, TEXT_DARK, TEXT_MID } from "./components/cv-data";
import { CVContent } from "./components/cv-content";

export default function CVClient() {
  const [scale, setScale] = useState(1);

  const handleExportPDF = async () => {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    window.print();
  };

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) (nav as HTMLElement).style.display = "none";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const resize = () => {
      const sw = window.innerWidth - 32;
      const sh = window.innerHeight - 32;
      setScale(Math.max(Math.min(sw / A4_W, sh / A4_H, 1), 0.1));
    };

    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      const n = document.querySelector("nav");
      if (n) (n as HTMLElement).style.display = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <main className="fixed inset-0 z-[70] overflow-hidden flex items-center justify-center" style={{ background: "#ffffff" }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @page { size: A4; margin: 0; }
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: 794px !important;
            height: 1123px !important;
            overflow: visible !important;
            background: #ffffff !important;
          }
          nav, [data-cv-hidden] { display: none !important; }
          main {
            position: absolute !important;
            left: 0 !important; top: 0 !important;
            width: 794px !important; height: 1123px !important;
            margin: 0 !important; padding: 0 !important;
            background: #ffffff !important;
            z-index: auto !important;
            overflow: visible !important;
            transform: none !important;
          }
          main > div {
            position: relative !important;
            width: 794px !important; height: 1123px !important;
            margin: 0 !important; padding: 0 !important;
            transform: none !important;
            display: block !important;
          }
          [data-cv-sheet] {
            position: relative !important;
            left: auto !important; top: auto !important;
            width: 794px !important; height: 1123px !important;
            transform: none !important;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            margin: 0 !important; padding: 0 !important;
            overflow: visible !important;
          }
          [data-cv-keyword] {
            background: #eff6ff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          a, a[data-cv-link] {
            color: #1d4ed8 !important;
            text-decoration: underline !important;
            text-decoration-color: #1d4ed8 !important;
          }
          a[data-cv-link]::after {
            content: none;
          }
          [aria-hidden] {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `,
        }}
      />

      <div data-cv-hidden className="absolute right-6 top-6 z-30 flex flex-col items-end gap-1.5">
        <Button
          onClick={handleExportPDF}
          variant="gradient"
          size="sm"
          className="rounded-full text-[11px] font-semibold shadow-2xl px-4 py-2"
        >
          <Printer className="w-3.5 h-3.5 mr-1.5" />
          Imprimer / PDF
        </Button>
        <p className="text-[10px] text-gray-400 text-right leading-tight max-w-[200px]">
          Pour les liens cliquables, choisir <span className="font-semibold text-gray-500">« Enregistrer en PDF »</span> dans Chrome (pas le dialogue système)
        </p>
      </div>

      <div className="relative z-10 shrink-0" style={{ width: A4_W * scale, height: A4_H * scale }}>
        <article
          data-cv-sheet
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: A4_W,
            height: A4_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            background: "#ffffff",
            borderRadius: 14,
            boxShadow: "0 32px 80px rgba(29,78,216,0.14), 0 4px 20px rgba(0,0,0,0.05)",
            border: `1px solid ${BORDER}`,
            overflow: "hidden",
            fontFamily: "var(--font-sans)",
            color: TEXT_DARK,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header
            style={{
              padding: "1.7rem 3.8rem 1rem",
              borderBottom: `1px solid ${BORDER}`,
              fontFamily: "var(--font-sans)",
              flexShrink: 0,
            }}
          >
            <h1 style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 4px", color: TEXT_DARK }}>
              Ilyes Ghardi
            </h1>
            <h2 style={{ fontSize: "14px", fontWeight: 800, color: TEXT_DARK, margin: "0 0 4px", letterSpacing: "-0.015em", textTransform: "uppercase" }}>
              Concepteur-Développeur d'applications
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", margin: "0 0 8px" }}>
              {["JavaScript", "SQL", "Node.js", "NestJS", "React", "Docker"].map((kw) => (
                <span key={kw} data-cv-keyword style={{ background: "#eff6ff", color: "#1d4ed8", padding: "2px 8px", borderRadius: "999px", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.03em" }}>
                  {kw}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 0", fontSize: "10px", color: TEXT_MID, fontWeight: 400 }}>
              {[
                { label: "Tél :", text: "07 67 50 72 04", href: "tel:+33767507204" },
                { label: "Lieu :", text: "Lille, France" },
                { label: "Email :", text: "ilyesghardi@outlook.com", href: "mailto:ilyesghardi@outlook.com" },
                { label: "LinkedIn :", text: "linkedin.com/in/ilyes-g-46b0982b8", href: "https://www.linkedin.com/in/ilyes-g-46b0982b8/" },
                { label: "GitHub :", text: "github.com/yeslifeprod-rgb", href: "https://github.com/yeslifeprod-rgb" },
                { label: "Portfolio :", text: "benhouss.site", href: "https://www.benhouss.site/" },
              ].map((item, i, arr) => (
                <span key={i} style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, color: TEXT_DARK, marginRight: "3px" }}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} data-cv-link target={item.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline", fontWeight: 400, textUnderlineOffset: "2px" }}>
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                  {i < arr.length - 1 && <span style={{ margin: "0 8px", color: "#d1d5db", fontWeight: 300 }}>|</span>}
                </span>
              ))}
            </div>
          </header>

          <CVContent />
        </article>
      </div>
    </main>
  );
}
