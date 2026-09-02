"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { A4_H, A4_W, BORDER, BLUE_2, TEXT_DARK } from "../components/cv-data";
import { ToyotaHelpdeskCVContent } from "./toyota-helpdesk-content";

export default function ToyotaHelpdeskCV() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Le Navbar global rend deux <nav> distincts (dock desktop + barre
    // mobile) : il faut les masquer tous les deux, sinon celle qui n'est
    // pas la première reste dans le DOM et le focus clavier sur /cv.
    const navs = document.querySelectorAll("nav");
    navs.forEach((n) => {
      (n as HTMLElement).style.display = "none";
    });
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
      navs.forEach((n) => {
        (n as HTMLElement).style.display = "";
      });
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <main className="fixed inset-0 z-[70] overflow-hidden flex items-center justify-center" style={{ background: "#ffffff" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @page { size: A4; margin: 0; }
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          html, body { margin: 0 !important; padding: 0 !important; width: 794px !important; height: 1123px !important; overflow: visible !important; }
          nav, [data-cv-hidden] { display: none !important; }
          main { position: absolute !important; left: 0 !important; top: 0 !important; width: 794px !important; height: 1123px !important; background: #fff !important; overflow: visible !important; }
          main > div, [data-cv-sheet] { position: relative !important; width: 794px !important; height: 1123px !important; transform: none !important; margin: 0 !important; border: 0 !important; border-radius: 0 !important; box-shadow: none !important; overflow: visible !important; }
          [aria-hidden] { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      ` }} />

      <div data-cv-hidden className="absolute right-6 top-6 z-30 flex flex-col items-end gap-1.5">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-[11px] font-semibold text-gray-600 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors"
        >
          <Download className="w-3.5 h-3.5 mr-1.5" />
          Imprimer / PDF
        </button>
        <p className="text-[10px] text-gray-400 text-right leading-tight max-w-[210px]">Version ciblée Toyota — Technicien Helpdesk</p>
      </div>

      <div className="relative z-10 shrink-0" style={{ width: A4_W * scale, height: A4_H * scale }}>
        <article
          data-cv-sheet
          style={{
            position: "absolute", left: 0, top: 0, width: A4_W, height: A4_H,
            transform: `scale(${scale})`, transformOrigin: "top left", background: "#ffffff",
            borderRadius: 14, boxShadow: "0 32px 80px rgba(29,78,216,0.14), 0 4px 20px rgba(0,0,0,0.05)",
            border: `1px solid ${BORDER}`, overflow: "hidden", fontFamily: "var(--font-sans)", color: TEXT_DARK,
            display: "flex", flexDirection: "column",
          }}
        >
          <header style={{ padding: "1.6rem 3.8rem 1rem", flexShrink: 0 }}>
            <h1 style={{ fontSize: "31px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 4px" }}>Ilyes Ghardi</h1>
            <h2 style={{ fontSize: "14px", fontWeight: 800, margin: "0 0 6px", letterSpacing: "-0.015em", textTransform: "uppercase" }}>
              Technicien support — Systèmes & réseaux
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", margin: "0 0 9px" }}>
              {["Support informatique", "Diagnostic & réseaux", "Linux & systèmes"].map((kw) => (
                <span key={kw} style={{ background: "#eff6ff", color: "#1d4ed8", padding: "3px 8px", borderRadius: "999px", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.02em" }}>{kw}</span>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", columnGap: "18px", rowGap: "3px", fontSize: "10px", lineHeight: 1.3, color: "#374151" }}>
              <span style={{ whiteSpace: "nowrap" }}><strong>Tél :</strong> <a href="tel:+33767507204" style={{ color: BLUE_2, textDecoration: "none", fontStyle: "italic" }}>07 67 50 72 04</a></span>
              <span style={{ whiteSpace: "nowrap" }}><strong>Adresse :</strong> Bruay-sur-l’Escaut</span>
              <span style={{ whiteSpace: "nowrap" }}><strong>Email :</strong> <a href="mailto:ilyesghardi@outlook.com" style={{ color: BLUE_2, textDecoration: "none", fontStyle: "italic" }}>ilyesghardi@outlook.com</a></span>
              <span style={{ whiteSpace: "nowrap" }}><strong>LinkedIn :</strong> <a href="https://linkedin.com/in/ilyes-g-46b0982b8" target="_blank" rel="noopener noreferrer" style={{ color: BLUE_2, textDecoration: "none", fontStyle: "italic" }}>linkedin.com/in/ilyes-g-46b0982b8</a></span>
            </div>
          </header>
          <ToyotaHelpdeskCVContent />
        </article>
      </div>
    </main>
  );
}
