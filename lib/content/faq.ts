/**
 * Source unique des questions fréquentes.
 *
 * Alimente à la fois le composant FAQ et le JSON-LD `FAQPage` du layout —
 * les deux listes étaient écrites séparément, ce que Google traite comme
 * un balisage non conforme au contenu affiché.
 *
 * Les cinq objections reprises sont celles de melhor.fr, reformulées :
 * un développeur seul, la facturation, la durée, le coût comparé à une
 * agence, les urgences. Ce sont les cinq questions qu'un prospect se pose
 * avant d'écrire — pas des rubriques de présentation.
 *
 * ⚠️ Les réponses 2, 4 et 5 engagent le fonctionnement commercial et
 * n'ont pas été validées par l'éditeur du site. À relire avant diffusion.
 */
export const faqItems = [
  {
    question: "Un développeur seul, ce n'est pas risqué face à une équipe ?",
    answer:
      "C'est l'inverse du risque habituel : personne entre vous et le code. Pas de chef de projet qui traduit votre besoin, pas d'information perdue entre deux intervenants, pas de développeur remplacé en cours de route. Sur des périmètres courts et cadrés, un seul interlocuteur va plus vite qu'une équipe à coordonner.",
  },
  {
    question: "Sur quelle base facturez-vous ?",
    answer:
      "Au forfait quand le périmètre est défini, à la journée quand la mission reste ouverte. Dans les deux cas, le montant est fixé avant de commencer, après le premier échange. Pas de facturation à la surprise.",
  },
  {
    question: "Une mission ponctuelle ou un accompagnement dans la durée ?",
    answer:
      "Les deux. Une intervention courte et clairement délimitée, ou un suivi continu si le produit évolue. Vous décidez après la première étape livrée, pas avant.",
  },
  {
    question: "En quoi un freelance revient moins cher qu'une agence ?",
    answer:
      "Vous payez la personne qui écrit le code, pas la structure autour. Une agence facture aussi la coordination, la marge commerciale et le temps passé à se transmettre le contexte en interne. À travail égal, ce sont ces postes qui disparaissent.",
  },
  {
    question: "Et si j'ai une urgence en production ?",
    answer:
      "Je ne vends pas d'astreinte permanente : ce serait un engagement que je ne pourrais pas tenir seul. Sur une mission en cours, un blocage en production passe devant le reste. En dehors, je vous dis sous 24 h si je peux intervenir ou non.",
  },
] as const;
