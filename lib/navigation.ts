export interface NavItem {
  label: { fr: string; en: string };
  href: string;
}

export const navLinks: NavItem[] = [
  { label: { fr: "Accueil", en: "Home" }, href: "#home" },
  { label: { fr: "À propos", en: "About" }, href: "#about" },
  { label: { fr: "Projets", en: "Projects" }, href: "#projets" },
  { label: { fr: "Stack", en: "Stack" }, href: "#stack" },
  { label: { fr: "Expérience", en: "Experience" }, href: "#experience" },
  { label: { fr: "Contact", en: "Contact" }, href: "#contact" },
];
