/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Auparavant : serif -> var(--font-sans).
        // Tous les `font-serif` du site rendaient donc du Poppins.
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },

      /* ── Échelle typographique ──────────────────────────────
         Remplace les text-[9px] / [10px] / [1.65rem] arbitraires.
         Plancher de lisibilité : 12px.                        */
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.12em", fontWeight: "600" }],
        caption: ["0.75rem", { lineHeight: "1.125rem" }],
        small: ["0.875rem", { lineHeight: "1.375rem" }],
        body: ["1rem", { lineHeight: "1.65" }],
        lead: ["1.0625rem", { lineHeight: "1.7" }],
        h3: ["1.125rem", { lineHeight: "1.4", letterSpacing: "-0.015em", fontWeight: "600" }],
        h2: ["clamp(1.5rem, 3.2vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.025em", fontWeight: "600" }],
        h1: ["clamp(2rem, 5.5vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.035em", fontWeight: "600" }],
        stat: ["clamp(1.75rem, 4vw, 2.25rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "600" }],
      },

      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        success: "var(--success)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },

      /* Tout dérive de --radius. Plus de rounded-3xl à côté de rounded-md. */
      borderRadius: {
        sm: "calc(var(--radius) - 6px)",
        md: "calc(var(--radius) - 3px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 10px)",
      },

      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },

      /* Largeur de contenu unique. 42rem = le max-w-2xl du portfolio de
         référence : c'est cette contrainte qui rend les sections discrètes,
         pas la taille des titres. */
      maxWidth: {
        content: "42rem",
      },

      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.85)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "70%, 100%": { transform: "scale(1.9)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
