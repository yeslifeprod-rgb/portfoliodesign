"use client";

import { Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CVPage() {
  // Masquer la navbar sur cette page
  useEffect(() => {
    document.body.style.paddingTop = "0";
    const navbar = document.querySelector("nav");
    if (navbar) {
      (navbar as HTMLElement).style.display = "none";
    }

    return () => {
      document.body.style.paddingTop = "";
      const navbar = document.querySelector("nav");
      if (navbar) {
        (navbar as HTMLElement).style.display = "";
      }
    };
  }, []);
  return (
    <main className="h-screen overflow-hidden bg-background">
      {/* Background blur orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "color-mix(in srgb, var(--primary) 8%, transparent)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl"
          style={{
            background: "color-mix(in srgb, var(--primary) 6%, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col p-4 lg:p-6">
        {/* Main CV Container - A4 format */}
        <motion.div
          className="flex-1 relative min-h-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glassmorphic container - A4 proportions */}
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border bg-card/80 backdrop-blur-xl shadow-2xl"
            style={{
              borderColor: "color-mix(in srgb, var(--border) 60%, transparent)",
              width: "min(95vw, calc(95vh * 0.707))", // Agrandi
              height: "95vh", // Agrandi
              maxWidth: "850px", // Agrandi
            }}
          >
            {/* Top bar - Apple style */}
            <div
              className="flex items-center justify-between border-b px-4 lg:px-6 py-3 bg-card/60 backdrop-blur-sm"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--border) 40%, transparent)",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>

              <div
                className="flex items-center gap-1 rounded-full px-3 py-1.5"
                style={{
                  background:
                    "color-mix(in srgb, var(--muted) 50%, transparent)",
                }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                <span className="text-xs font-medium text-muted-foreground px-2">
                  CV-Benhouss.pdf
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  href="/cv/CV-GHARDI-ILYES.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors"
                  style={{
                    background:
                      "color-mix(in srgb, var(--muted) 30%, transparent)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    background:
                      "color-mix(in srgb, var(--muted) 50%, transparent)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>PDF</span>
                </motion.a>

                <motion.a
                  href="/cv/CV-GHARDI-ILYES.pdf"
                  download="CV-Benhouss.pdf"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-all duration-300"
                  style={{
                    background: "var(--primary)",
                    boxShadow:
                      "0 4px 20px color-mix(in srgb, var(--primary) 25%, transparent)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 6px 25px color-mix(in srgb, var(--primary) 35%, transparent)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Télécharger</span>
                </motion.a>
              </div>
            </div>

            {/* CV Content - PDF as Image */}
            <div
              className="h-[calc(100%-4rem)] overflow-y-auto p-3 lg:p-4"
              style={{
                background: "color-mix(in srgb, var(--muted) 10%, transparent)",
              }}
            >
              <div
                className="h-full overflow-hidden rounded-[1.5rem] border bg-card shadow-lg"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--border) 30%, transparent)",
                }}
              >
                {/* Loading state overlay */}
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  style={{ pointerEvents: "none" }}
                >
                  <div className="flex items-center gap-3 rounded-full bg-card/90 px-6 py-3 shadow-lg backdrop-blur-sm">
                    <div
                      className="h-5 w-5 animate-spin rounded-full border-2 border-t-primary"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--primary) 20%, transparent)",
                        borderTopColor: "var(--primary)",
                      }}
                    />
                    <span className="text-sm font-medium text-muted-foreground">
                      Chargement du CV...
                    </span>
                  </div>
                </motion.div>

                <div className="h-full">
                  <iframe
                    src="/cv/CV-GHARDI-ILYES.pdf"
                    title="CV Benhouss - Développeur Full Stack Web & Mobile"
                    className="w-full h-full rounded-[1.5rem]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtle glow effect */}
          <div
            className="absolute inset-0 -z-10 rounded-[2rem] blur-xl"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--primary) 5%, transparent), transparent 70%)",
            }}
          />
        </motion.div>

        {/* Footer info - Fixed height */}
        <motion.div
          className="flex-shrink-0 mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        ></motion.div>
      </div>
    </main>
  );
}
