/**
 * Source unique des questions fréquentes.
 *
 * Alimente à la fois le composant FAQ et le JSON-LD `FAQPage` du layout —
 * les deux listes étaient écrites séparément, ce que Google traite comme
 * un balisage non conforme au contenu affiché.
 *
 * Les questions restent centrées sur la décision du client : comprendre le
 * cadre, savoir comment commencer et vérifier si le profil correspond.
 */
export const faqItems = [
  {
    question: "Est-ce qu'un seul développeur peut suffire ?",
    answer:
      "Pour un périmètre clair, oui. Vous échangez directement avec la personne qui construit le produit, sans retransmettre le contexte à plusieurs intervenants. Si le projet demande une équipe plus large, je vous le dirai dès le cadrage.",
  },
  {
    question: "Comment définissez-vous le budget ?",
    answer:
      "Après avoir compris le besoin, je propose un périmètre et un format adaptés : une étape définie ou une intervention plus ouverte. Vous savez ce qui est prévu avant de décider.",
  },
  {
    question: "Peut-on commencer par une petite étape ?",
    answer:
      "Oui. On choisit un besoin précis, on le rend concret, puis vous décidez de la suite avec plus de visibilité.",
  },
  {
    question: "Pouvez-vous reprendre un projet existant ?",
    answer:
      "Oui. Je peux commencer par comprendre la base, reproduire un problème, corriger une fonctionnalité ou remettre le déploiement en ordre sans repartir de zéro.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "On vérifie que la livraison répond au besoin prévu. Ensuite, vous pouvez continuer seul, me confier une nouvelle évolution ou prévoir un suivi ponctuel. Le cadre dépend de ce dont le produit a réellement besoin.",
  },
] as const;
