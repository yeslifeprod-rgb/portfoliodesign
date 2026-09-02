import { Entry } from "../components/cv-entry";
import { SectionTitle } from "../components/cv-primitives";
import { TEXT_DARK, TEXT_LIGHT, TEXT_MID } from "../components/cv-data";

const experiences = [
  {
    period: "2026 – présent",
    title: "Projet personnel — TeamsFinder",
    company: "SaaS gaming connecté à un catalogue de +500 000 jeux · +50 utilisateurs actifs",
    companyLink: "https://theteamsfinder.com/en",
    bullets: [
      "Faire évoluer la plateforme web et le back-office avec Next.js, React, TypeScript et Supabase.",
      "Développer et faire évoluer une API GraphQL et des services Node.js pour la recherche, les comptes et les contenus.",
      "Intégrer un catalogue de plus de 500 000 jeux, les paiements Stripe et le SEO international en français, anglais et espagnol.",
    ],
  },
  {
    period: "2025",
    title: "Stagiaire Développeur Fullstack — Num4",
    company: "Plaine Images, Roubaix · plateforme musicale",
    companyLink: "https://num4-lp.vercel.app/",
    bullets: [
      "Concevoir le wireframe, la maquette et développer la landing page avec Next.js, en travaillant la navigation, les performances et le référencement.",
      "Collaborer directement avec le CEO et le CTO sur l’UX/UI, puis contribuer au paiement iOS avec RevenueCat et à sa synchronisation avec PostgreSQL.",
      "Utiliser Xcode pour tester et simuler l’application sur plusieurs appareils iOS et vérifier sa stabilité.",
    ],
  },
  {
    period: "2023 – 2024",
    title: "Concepteur Développeur d’Applications — ALT Incubateur",
    company: "Conception et développement d’applications · équipe de 4 développeurs",
    bullets: [
      "Concevoir la maquette et développer le front-end React ainsi que l’application mobile Ionic.",
      "Modéliser la base de données et développer le back-end avec Node.js, Prisma, MySQL et API REST, en intégrant l’authentification JWT/bcrypt, les principes RGPD/OWASP et des architectures monolithiques ou microservices.",
      "Étudier l’architecture matériel/logiciel, l’architecture système, Linux, la virtualisation et Docker.",
      "Étudier les réseaux IT et simuler une architecture avec Filius ; aborder le firewall, le DNS, les noms de domaine et le reverse proxy.",
      "Mettre en place un serveur personnel avec Host4Free, AWS et DuckDNS, puis suivre le monitoring.",
      "Mettre en place des tests avec Cypress et Jest, documenter le projet et suivre les tâches avec YouTrack en méthode Agile.",
    ],
  },
];

export function ToyotaHelpdeskCVContent() {
  return (
    <div style={{ flex: 1, padding: "1.3rem 3.8rem 1rem", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <section style={{ marginBottom: "0.95rem" }}>
        <SectionTitle>Profil</SectionTitle>
        <p style={{ fontSize: "10.5px", lineHeight: 1.6, color: TEXT_MID, margin: 0, textAlign: "justify", borderLeft: "3px solid #2563eb", paddingLeft: "11px" }}>
          <strong style={{ color: TEXT_DARK }}>Concepteur Développeur d’Applications</strong>, avec une expérience en développement web et mobile et des bases acquises en systèmes et réseaux. Habitué à analyser un dysfonctionnement, tester une correction et documenter une solution. Curieux et motivé, je souhaite rejoindre Toyota dans le secteur industriel pour mettre ces bases au service du support informatique et approfondir mes compétences en réseaux.
        </p>
      </section>

      <section style={{ marginBottom: "0.8rem" }}>
        <SectionTitle>Expériences & projets</SectionTitle>
        {experiences.map((e) => <Entry key={e.title} {...e} type="" />)}
      </section>

      <section style={{ marginBottom: "0.8rem" }}>
        <SectionTitle>Compétences techniques</SectionTitle>
        <div style={{ borderRadius: "6px", padding: "8px 11px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ fontSize: "10.5px", color: TEXT_MID, lineHeight: 1.5 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Diagnostic :</strong> analyser un incident, reproduire un problème, tester une correction et documenter la solution</div>
          <div style={{ fontSize: "10.5px", color: TEXT_MID, lineHeight: 1.5 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Systèmes :</strong> Linux, Docker, virtualisation, architecture matériel/logiciel, AWS EC2 et monitoring</div>
          <div style={{ fontSize: "10.5px", color: TEXT_MID, lineHeight: 1.5 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Réseaux :</strong> bases réseau, ping, ipconfig, câblage, Filius, firewall, DNS, DuckDNS et reverse proxy</div>
          <div style={{ fontSize: "10.5px", color: TEXT_MID, lineHeight: 1.5 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Développement & données :</strong> React, Ionic, Next.js, Node.js, API REST/GraphQL, SQL, Supabase, Cypress et Jest</div>
        </div>
      </section>

      <section style={{ marginBottom: "0.8rem" }}>
        <SectionTitle>Formation</SectionTitle>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><h4 style={{ fontSize: "12.5px", fontWeight: 700, color: TEXT_DARK, margin: 0 }}>Concepteur Développeur d’Applications</h4><p style={{ fontSize: "10.5px", color: TEXT_LIGHT, margin: "2px 0 0", fontStyle: "italic" }}>ALT/BZH · Bac+4</p></div>
          <span style={{ fontSize: "10.5px", fontWeight: 600, color: "#2563eb", fontStyle: "italic" }}>2024</span>
        </div>
      </section>

      <section>
        <SectionTitle>Soft skills & langues</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "0.75fr 2.15fr", gap: "10px", fontSize: "10.5px", color: TEXT_MID, lineHeight: 1.55 }}>
          <div><strong style={{ color: TEXT_DARK }}>Anglais :</strong> B2</div>
          <div><strong style={{ color: TEXT_DARK }}>Qualités :</strong> curieux · déterminé · esprit d’équipe</div>
        </div>
      </section>
    </div>
  );
}
