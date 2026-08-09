import { Entry } from "../components/cv-entry";
import { SectionTitle } from "../components/cv-primitives";
import { TEXT_DARK, TEXT_LIGHT, TEXT_MID } from "../components/cv-data";

const experiences = [
  {
    period: "2023 – 2024",
    title: "Concepteur Développeur d’Applications — ALT Incubateur",
    company: "Équipe de 4 développeurs fullstack · travail à distance",
    bullets: [
      "Diagnostiqué et corrigé des problèmes applicatifs en m’appuyant sur des tests Cypress/Jest et des reproductions ciblées.",
      "Documenté les choix techniques, les procédures et les évolutions pour faciliter le travail de l’équipe.",
      "Développé et testé des API REST Node.js avec gestion des rôles, authentification et bases MySQL.",
      "Utilisé Docker, AWS EC2, Git et une CI/CD pour maintenir des environnements stables et reproductibles.",
      "Travaillé en Agile Scrum avec YouTrack, code reviews et échanges réguliers entre développeurs.",
    ],
  },
  {
    period: "2025",
    title: "Stagiaire Développeur Fullstack — Num4",
    company: "Plaine Images, Roubaix · plateforme musicale",
    bullets: [
      "Analysé les besoins et les dysfonctionnements avec le fondateur et le CTO afin de prioriser les corrections.",
      "Testé et simulé l’application sur plusieurs appareils iOS avec Xcode.",
      "Intégré RevenueCat pour les achats in-app et vérifié le comportement des parcours concernés.",
      "Développé et optimisé une interface Next.js avec un score Lighthouse supérieur à 80.",
    ],
  },
  {
    period: "Complémentaire",
    title: "Assistance informatique — matériel, logiciels & réseau",
    company: "Interventions à distance et sur site · téléphone, messagerie et visioconférence",
    bullets: [
      "Accompagné des utilisateurs sur des problèmes matériels et logiciels, à distance ou en présentiel, jusqu’à la résolution.",
      "Reproduit les incidents en reprenant le parcours de l’utilisateur sur son équipement et en comparant avec un autre matériel.",
      "Installé et configuré des composants, périphériques, systèmes et logiciels sur Windows, Linux et macOS.",
      "Diagnostiqué des problèmes de connexion avec ping, ipconfig et Filius ; remplacé du matériel réseau défectueux et testé les postes et câbles.",
      "Installé des imprimantes connectées en Wi-Fi, configuré des appareils mobiles et préparé ou vérifié du matériel informatique.",
    ],
  },
  {
    period: "2026 – présent",
    title: "Projet personnel — TeamsFinder",
    company: "SaaS en production · plus de 50 utilisateurs",
    companyLink: "https://theteamsfinder.com/en",
    bullets: [
      "Fait évoluer et maintenu une plateforme web et un back-office en production.",
      "Suivi les échanges entre l’interface, les API, la base Supabase et des services externes.",
      "Mis en place des automatisations et des webhooks Discord pour fiabiliser la circulation des informations.",
    ],
  },
];

export function ToyotaHelpdeskCVContent() {
  return (
    <div style={{ flex: 1, padding: "1rem 3.8rem 0.65rem", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <section style={{ marginBottom: "0.65rem" }}>
        <SectionTitle>Profil</SectionTitle>
        <p style={{ fontSize: "10px", lineHeight: 1.45, color: TEXT_MID, margin: 0, textAlign: "justify", borderLeft: "3px solid #2563eb", paddingLeft: "10px" }}>
          Concepteur Développeur d’Applications titulaire d’un <strong style={{ color: TEXT_DARK }}>titre RNCP niveau 6</strong>, avec une expérience en équipe technique et un SaaS personnel en production. Habitué à <strong style={{ color: TEXT_DARK }}>analyser des dysfonctionnements, reproduire des incidents, tester des configurations et documenter des solutions</strong>, je souhaite élargir mes compétences vers le support informatique et les réseaux en environnement industriel. Je peux contribuer au diagnostic applicatif et au travail avec les équipes techniques, tout en développant mes compétences sur les postes, le réseau, la téléphonie et les imprimantes.
        </p>
      </section>

      <section style={{ marginBottom: "0.55rem" }}>
        <SectionTitle>Expérience professionnelle</SectionTitle>
        {experiences.map((e) => <Entry key={e.title} {...e} type="" />)}
      </section>

      <section style={{ marginBottom: "0.55rem" }}>
        <SectionTitle>Méthodes de support</SectionTitle>
        <ul style={{ margin: 0, padding: "5px 10px 5px 22px", color: TEXT_MID, fontSize: "10px", lineHeight: 1.35 }}>
          <li>Reformuler une demande, recueillir les informations utiles et expliquer simplement la cause d’une panne à un utilisateur non technique.</li>
          <li>Prioriser plusieurs demandes, assurer le suivi par téléphone, messagerie ou visioconférence et communiquer jusqu’à la résolution.</li>
          <li>Utiliser une procédure, une checklist ou une documentation technique ; suivre les tâches avec YouTrack ou GitHub Issues.</li>
          <li>Remplacer rapidement un équipement défaillant pour limiter l’interruption, puis récupérer le matériel en panne pour réparation.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "0.55rem" }}>
        <SectionTitle>Environnement technique</SectionTitle>
        <div style={{ borderRadius: "6px", padding: "6px 10px", display: "flex", flexDirection: "column", gap: "3px" }}>
          <div style={{ fontSize: "10px", color: TEXT_MID, lineHeight: 1.32 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Support & diagnostic :</strong> interventions à distance ou sur site, reproduction, tests comparatifs, explication utilisateur, suivi jusqu’à résolution</div>
          <div style={{ fontSize: "10px", color: TEXT_MID, lineHeight: 1.32 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Postes & matériel :</strong> Windows, Linux, macOS, composants, périphériques, imprimantes Wi-Fi, appareils mobiles, préparation de matériel</div>
          <div style={{ fontSize: "10px", color: TEXT_MID, lineHeight: 1.32 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Réseaux & services :</strong> ping, ipconfig, Filius, câbles et équipements réseau, ports Docker, API REST, HTTP</div>
          <div style={{ fontSize: "10px", color: TEXT_MID, lineHeight: 1.32 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>Systèmes & déploiement :</strong> Docker, AWS EC2, Git, CI/CD, environnements reproductibles</div>
          <div style={{ fontSize: "10px", color: TEXT_MID, lineHeight: 1.32 }}><strong style={{ color: TEXT_DARK, marginRight: "5px" }}>À approfondir dans le poste :</strong> SCCM, Cisco/VLAN, SOTI/MDM, support postes et imprimantes de production</div>
        </div>
      </section>

      <section style={{ marginBottom: "0.55rem" }}>
        <SectionTitle>Formation</SectionTitle>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div><h4 style={{ fontSize: "12px", fontWeight: 700, color: TEXT_DARK, margin: 0 }}>Concepteur Développeur d’Applications web & mobile</h4><p style={{ fontSize: "10px", color: TEXT_LIGHT, margin: 0, fontStyle: "italic" }}>ALT/BZH · RNCP niveau 6 — Bac+4</p></div>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "#2563eb" }}>2024</span>
        </div>
      </section>

      <section>
        <SectionTitle>Langues & informations complémentaires</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "0.75fr 2.15fr", gap: "10px", fontSize: "10px", color: TEXT_MID, lineHeight: 1.42 }}>
          <div><strong style={{ color: TEXT_DARK }}>Anglais :</strong> B1 — technique</div>
          <div><strong style={{ color: TEXT_DARK }}>Mobilité :</strong> Valenciennes / Onnaing</div>
        </div>
      </section>
    </div>
  );
}
