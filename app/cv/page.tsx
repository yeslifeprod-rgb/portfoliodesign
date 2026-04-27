"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { CVHeader } from "./components/CVHeader";
import { CVSidebar } from "./components/CVSidebar";
import { CVMain } from "./components/CVMain";

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          nav, .print-hidden { display: none !important; }
          html, body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          @page { size: A4; margin: 0; }
          .cv-sheet { box-shadow: none !important; border-radius: 0 !important; }
        }
      `}</style>

      <div className="print-hidden fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => window.print()}
          className="gap-2 shadow-xl rounded-full px-5"
          style={{ background: "#e11d48", color: "#fff", border: "none" }}
        >
          <Printer className="h-4 w-4" />
          Imprimer / PDF
        </Button>
      </div>

      <div className="min-h-screen bg-zinc-200 flex justify-center items-start py-12 print:py-0 print:bg-white print:block">
        <div
          className="cv-sheet flex flex-col overflow-hidden relative"
          style={{ width: 794, minHeight: 1123, boxShadow: "0 8px 48px rgba(0,0,0,0.22)", borderRadius: 8, background: "#fff" }}
        >
          {/* Decorative blobs */}
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <div style={{ position: "absolute", top: -80, left: -80, width: 320, height: 300, background: "rgba(225,29,72,0.1)", filter: "blur(32px)", borderRadius: "62% 38% 70% 30% / 45% 55% 45% 55%" }} />
            <div style={{ position: "absolute", top: "30%", right: -70, width: 260, height: 240, background: "rgba(225,29,72,0.08)", filter: "blur(28px)", borderRadius: "38% 62% 30% 70% / 55% 45% 55% 45%" }} />
            <div style={{ position: "absolute", bottom: -60, left: "28%", width: 300, height: 260, background: "rgba(225,29,72,0.09)", filter: "blur(30px)", borderRadius: "50% 50% 38% 62% / 60% 40% 60% 40%" }} />
            <div style={{ position: "absolute", top: "58%", left: -40, width: 200, height: 180, background: "rgba(225,29,72,0.07)", filter: "blur(24px)", borderRadius: "70% 30% 55% 45% / 40% 60% 40% 60%" }} />
          </div>

          <CVHeader />

          <div className="flex flex-1 relative" style={{ zIndex: 1 }}>
            <CVSidebar />
            <CVMain />
          </div>

          <footer
            className="relative shrink-0 px-8 py-2.5 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(225,29,72,0.2)", zIndex: 1 }}
          >
            <span className="text-[8px] font-semibold text-zinc-400 tracking-widest uppercase">
              Ghardi Ilyès — Développeur Full Stack
            </span>
            <a href="https://benhouss.site" target="_blank" rel="noopener noreferrer"
              className="text-[8px] text-red-400 hover:text-red-500 transition-colors font-medium">
              benhouss.site
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
