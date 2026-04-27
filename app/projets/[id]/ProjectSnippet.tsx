"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { IconMaximize, IconCheck, IconCopy } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface Snippet {
  title: string;
  description: string;
  code: string;
  image?: string;
  category?: string;
}

interface SnippetsListProps {
  snippets: Snippet[];
  onZoom: (img: string) => void;
  language: string;
}

/* ── Right panel ── */
function SnippetDetail({ snippet, onZoom, language }: {
  snippet: Snippet;
  onZoom: (img: string) => void;
  language: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = snippet.code.replace(/<[^>]*>/g, "");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const raw = snippet.code || "";
  // Si le code contient des balises HTML de prose → affichage texte
  const isHtmlProse = /<strong|<em/.test(raw);
  const rawCode = raw
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  return (
    <motion.div
      key={snippet.title}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      {/* Description */}
      <p
        className="text-[15px] text-foreground leading-[1.8] pb-5 border-b border-border font-medium"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {snippet.description}
      </p>

      {/* Image */}
      {snippet.image && (
        <div
          className="relative aspect-video rounded-xl overflow-hidden bg-muted/30 border border-border cursor-zoom-in group"
          onClick={() => onZoom(snippet.image!)}
        >
          <Image
            src={snippet.image}
            alt={snippet.title}
            fill
            className="object-contain p-6 group-hover:scale-[1.02] transition-transform duration-700"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border shadow-sm">
              <IconMaximize size={12} className="text-muted-foreground" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                {language === "fr" ? "Agrandir" : "Expand"}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Code / prose content */}
      <div className="space-y-3">
        {isHtmlProse ? (
          /* ── Texte prose ── */
          <div
            className="text-[15px] text-foreground leading-[2]
              [&>strong]:block [&>strong]:font-black [&>strong]:text-foreground
              [&>strong]:text-[11px] [&>strong]:uppercase [&>strong]:tracking-[0.2em]
              [&>strong]:mt-6 [&>strong]:mb-1 first:[&>strong]:mt-0
              [&>em]:not-italic [&>em]:font-semibold [&>em]:text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
            dangerouslySetInnerHTML={{ __html: raw }}
          />
        ) : (
          /* ── Bloc code ── */
          <>
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
              {language === "fr" ? "Code source" : "Source code"}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-foreground/30 hover:bg-accent transition-all duration-200 group"
            >
              {copied
                ? <IconCheck size={10} className="text-primary" />
                : <IconCopy size={10} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              }
              <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                {copied
                  ? (language === "fr" ? "Copié !" : "Copied!")
                  : (language === "fr" ? "Copier" : "Copy")}
              </span>
            </button>
          </div>
          <div className="rounded-xl border border-border/50 bg-[#0d1117] shadow-xl overflow-hidden mt-3">
            {/* Window header */}
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-border/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm"></div>
              </div>
            </div>
            {/* Numéros de ligne + code */}
            <div className="overflow-x-auto py-4">
              <table className="w-full border-collapse" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>
                <tbody>
                  {rawCode.split("\n").map((line, i) => (
                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                      <td
                        className="select-none text-right pr-4 pl-4 py-0.5 text-slate-500/60 border-r border-slate-700/50 w-12 shrink-0"
                        style={{ fontSize: 11, lineHeight: "1.8", fontVariantNumeric: "tabular-nums" }}
                      >
                        {i + 1}
                      </td>
                      <td
                        className="pl-5 pr-6 py-0.5 text-slate-300 whitespace-pre leading-[1.8]"
                        dangerouslySetInnerHTML={{ __html: line || "&nbsp;" }}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main: left list + right detail ── */
export function ProjectSnippetList({ snippets, onZoom, language }: SnippetsListProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = snippets[activeIndex];

  return (
    <div className="flex gap-0 rounded-2xl border border-border overflow-hidden max-h-[600px] shadow-sm">

      {/* LEFT — list */}
      <div className="w-[240px] shrink-0 border-r border-border bg-muted/20 overflow-y-auto">
        {/* Header */}
        <div className="px-5 py-4 border-b border-border">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
            {language === "fr" ? "Sections" : "Sections"}
          </p>
        </div>

        {snippets.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`
              w-full flex items-start gap-3 px-4 py-3.5 border-b border-border last:border-b-0
              transition-all duration-200 group text-left
              ${activeIndex === i
                ? "bg-primary"
                : "hover:bg-accent/60"
              }
            `}
          >
            <span className={`
              flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center
              text-[9px] font-black tabular-nums transition-all duration-200
              ${activeIndex === i
                ? "bg-primary-foreground text-primary"
                : "bg-border text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
              }
            `}>
              {i + 1}
            </span>
            <span className={`
              text-[11px] font-semibold leading-snug transition-colors duration-200 whitespace-normal
              ${activeIndex === i
                ? "text-primary-foreground"
                : "text-muted-foreground group-hover:text-foreground"
              }
            `}>
              {s.title}
            </span>
          </button>
        ))}
      </div>

      {/* RIGHT — detail */}
      <div className="flex-1 min-w-0 p-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          {active && (
            <SnippetDetail
              key={activeIndex}
              snippet={active}
              onZoom={onZoom}
              language={language}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Legacy compat ── */
export function ProjectSnippet({ title, description, code, image, onZoom, language }: {
  title: string; description: string; code: string; image?: string;
  index: number; onZoom: (img: string) => void; language: string;
}) {
  return (
    <ProjectSnippetList
      snippets={[{ title, description, code, image }]}
      onZoom={onZoom}
      language={language}
    />
  );
}
