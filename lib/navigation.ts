export interface NavItem {
  label: { fr: string; en: string };
  href: string;
}

export const navLinks: NavItem[] = [
  { label: { fr: "Accueil", en: "Home" }, href: "#home" },
  { label: { fr: "Services", en: "Services" }, href: "#services" },
  { label: { fr: "Projets", en: "Projects" }, href: "#projets" },
  { label: { fr: "Méthode", en: "Method" }, href: "#methode" },
  { label: { fr: "Contact", en: "Contact" }, href: "#contact" },
];
