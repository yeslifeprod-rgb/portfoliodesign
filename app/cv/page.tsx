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
          className="cv-sheet flex flex-col overflow-hidden"
          style={{ width: 794, minHeight: 1123, boxShadow: "0 4px 24px rgba(0,0,0,0.10)", borderRadius: 8, background: "#fff" }}
        >
          <CVHeader />

          <div className="flex flex-1">
            <CVSidebar />
            <CVMain />
          </div>

          <footer
            className="shrink-0 px-8 py-2.5 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
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
