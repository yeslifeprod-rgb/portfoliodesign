"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { A4_H, A4_W, BORDER, TEXT_DARK } from "../components/cv-data";
import { ToyotaHelpdeskCVContent } from "./toyota-helpdesk-content";

export default function ToyotaHelpdeskCV() {
  const [scale, setScale] = useState(1);

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
        <p className="text-[10px] text-gray-400 text-right leading-tight max-w-[210px]">Version ciblée Toyota Valenciennes — Technicien Helpdesk</p>
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
          <header style={{ padding: "1.7rem 3.8rem 1rem", borderBottom: `1px solid ${BORDER}`, flexShrink: 0 }}>
            <h1 style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 4px" }}>Ilyes Ghardi</h1>
            <h2 style={{ fontSize: "14px", fontWeight: 800, margin: "0 0 5px", letterSpacing: "-0.015em", textTransform: "uppercase" }}>
              Technicien Helpdesk — Profil développeur web & mobile
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", margin: "0 0 8px" }}>
              {["Diagnostic d’incidents", "Support utilisateurs", "Déploiement", "Réseaux", "Documentation", "Anglais technique"].map((kw) => (
                <span key={kw} style={{ background: "#eff6ff", color: "#1d4ed8", padding: "2px 8px", borderRadius: "999px", fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.03em" }}>{kw}</span>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 0", fontSize: "10px", color: "#374151" }}>
              <span><strong>Tél :</strong> 07 67 50 72 04</span><span style={{ margin: "0 8px", color: "#d1d5db" }}>|</span>
              <span><strong>Lieu :</strong> Valenciennes</span><span style={{ margin: "0 8px", color: "#d1d5db" }}>|</span>
              <span><strong>Email :</strong> ilyesghardi@outlook.com</span><span style={{ margin: "0 8px", color: "#d1d5db" }}>|</span>
              <span><strong>LinkedIn :</strong> linkedin.com/in/ilyes-g-46b0982b8</span>
            </div>
          </header>
          <ToyotaHelpdeskCVContent />
        </article>
      </div>
    </main>
  );
}
