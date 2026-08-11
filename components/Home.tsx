"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function Home() {
  const { language } = useLang();
  const fr = language === "fr";

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.14),transparent_32%),linear-gradient(180deg,rgba(37,99,235,0.04),transparent_44%)] dark:bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.2),transparent_32%),linear-gradient(180deg,rgba(37,99,235,0.08),transparent_44%)]" />
      <div className="relative mx-auto grid min-h-[min(860px,100vh)] max-w-6xl items-center gap-12 px-6 py-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-40">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {fr ? "Freelance backend · Lille / remote" : "Freelance backend · Lille / remote"}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            {fr ? "Je corrige et déploie vos " : "I fix and deploy your "}
            <span className="text-primary">API Node.js/NestJS</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {fr
              ? "Bugs REST, authentification, PostgreSQL/Prisma et environnements Docker pour SaaS et applications web."
              : "REST bugs, authentication, PostgreSQL/Prisma and Docker environments for SaaS and web applications."}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projets"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {fr ? "Voir mes projets" : "See my projects"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {fr ? "Me contacter" : "Contact me"}
            </Link>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground">
            {fr
              ? "Disponible pour des missions courtes de correction backend, diagnostic API et déploiement Docker."
              : "Available for short backend fixes, API diagnostics and Docker deployment missions."}
          </p>

          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Lille · Hauts-de-France · Remote
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative rounded-2xl border border-border bg-card/80 p-6 shadow-2xl shadow-primary/5 backdrop-blur">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-xs text-muted-foreground">backend-check.ts</span>
              <span className="text-xs text-emerald-500">ready to ship</span>
            </div>
            <pre className="overflow-x-auto font-mono text-sm leading-7 text-muted-foreground">
              <code>{`const intervention = {
  stack: ["Node.js", "NestJS", "PostgreSQL"],
  diagnose: true,
  tests: "maintained",
  delivery: "documented",
};`}</code>
            </pre>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              {["API REST", "Auth & roles", "Prisma", "Docker Compose"].map((item) => (
                <span key={item} className="rounded-md border border-border bg-background/70 px-3 py-2 text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
