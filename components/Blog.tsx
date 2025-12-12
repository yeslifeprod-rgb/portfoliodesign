"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LangContext";
import { Particles } from "@/components/ui/particles";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BookOpen, Code, Zap, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  category: string;
  tags: string[];
  icon: React.ElementType;
  href: string;
  cta: {
    fr: string;
    en: string;
  };
}

// 📝 TES ARTICLES DE BLOG ICI
// Pour ajouter un nouvel article, copie ce format et change les valeurs
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: {
      fr: "L'IA et le futur du développement",
      en: "AI and the future of development",
    },
    description: {
      fr: "L'intelligence artificielle transforme notre façon de coder. Je partage mes réflexions sur comment elle va révolutionner le développement web.",
      en: "Artificial intelligence is transforming how we code. I share my thoughts on how it will revolutionize web development.",
    },
    category: "Tech",
    tags: ["IA", "Innovation", "Web Dev"],
    icon: Code,
    href: "#",
    cta: {
      fr: "Lire l'article",
      en: "Read article",
    },
  },
  {
    id: 2,
    title: {
      fr: "Design minimaliste et UX moderne",
      en: "Minimalist design and modern UX",
    },
    description: {
      fr: "Le minimalisme n'est pas juste une tendance, c'est une philosophie. Découvrez comment créer des interfaces épurées qui captivent.",
      en: "Minimalism isn't just a trend, it's a philosophy. Discover how to create clean interfaces that captivate users.",
    },
    category: "Design",
    tags: ["UI/UX", "Minimalisme", "Design"],
    icon: BookOpen,
    href: "#",
    cta: {
      fr: "Lire l'article",
      en: "Read article",
    },
  },
  {
    id: 3,
    title: {
      fr: "Performance web : les bonnes pratiques",
      en: "Web performance: best practices",
    },
    description: {
      fr: "Un site rapide est un site qui convertit. Explorons les techniques essentielles pour optimiser les performances de vos applications.",
      en: "A fast site is a site that converts. Let's explore essential techniques to optimize your web app performance.",
    },
    category: "Performance",
    tags: ["Performance", "Optimisation", "Next.js"],
    icon: Zap,
    href: "#",
    cta: {
      fr: "Lire l'article",
      en: "Read article",
    },
  },
];

const Blog: React.FC = () => {
  const { language } = useLang();

  // Catégories avec couleurs personnalisées
  const categoryColors: Record<string, { from: string; to: string }> = {
    Tech: {
      from: "#3b82f6",
      to: "#8b5cf6",
    },
    Design: {
      from: "#a855f7",
      to: "#ec4899",
    },
    Performance: {
      from: "#10b981",
      to: "#06b6d4",
    },
  };

  // Tous les tags uniques
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  return (
    <section
      id="blog"
      className="w-full bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* MagicUI Animated Grid Pattern Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className="absolute inset-0 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
      />

      {/* MagicUI Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={30}
        ease={80}
        color="#60a5fa"
        refresh={false}
      />

      {/* Effet de fond animé */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header avec MagicUI Orbiting Circles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="inline-block mb-4 relative w-32 h-16 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            {/* MagicUI Orbiting Circles around badge */}
            <OrbitingCircles radius={60} duration={20} iconSize={8}>
              <div className="size-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
              <div className="size-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <div className="size-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-300" />
            </OrbitingCircles>

            {/* Badge with shimmer effect */}
            <span className="relative inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg overflow-hidden z-10">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "linear",
                }}
              />
              <span className="relative">✨ Blog</span>
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
            {language === "fr" ? "Mes Réflexions" : "My Thoughts"}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {language === "fr"
              ? "Explorez mes pensées sur les sujets qui me passionnent"
              : "Explore my thoughts on topics I'm passionate about"}
          </p>
        </motion.div>

        {/* MagicUI Marquee - Tags défilants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Marquee pauseOnHover className="[--duration:30s]">
            {allTags.map((tag, idx) => (
              <div
                key={`${tag}-${idx}`}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 shadow-sm mx-2"
              >
                #{tag}
              </div>
            ))}
          </Marquee>
        </motion.div>

        {/* Blog Posts Grid avec MagicCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <MagicCard
                className="cursor-pointer h-full p-6 flex flex-col justify-between"
                gradientSize={300}
                gradientFrom={categoryColors[post.category]?.from || categoryColors.Tech.from}
                gradientTo={categoryColors[post.category]?.to || categoryColors.Tech.to}
                gradientOpacity={0.2}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
                    <post.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${categoryColors[post.category]?.from}15, ${categoryColors[post.category]?.to}15)`,
                      color: categoryColors[post.category]?.from,
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title[language]}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.description[language]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href={post.href}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group"
                  whileHover={{ x: 5 }}
                >
                  <span>{post.cta[language]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </MagicCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            {language === "fr"
              ? "Plus d'articles à venir bientôt..."
              : "More articles coming soon..."}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            {language === "fr" ? "Tous les articles" : "All articles"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
