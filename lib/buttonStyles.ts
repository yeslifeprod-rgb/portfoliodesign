/**
 * Styles de boutons partagés par le hero et la carte de contact.
 *
 * Ils étaient écrits deux fois, avec des surfaces différentes : le bouton
 * secondaire utilisait `bg-background` dans Contact et `bg-card` dans Hero,
 * or le thème donne la même valeur à ces deux tokens (#ffffff en clair,
 * #020817 en sombre). Le bouton n'avait donc aucun contraste avec son
 * support. Il s'appuie désormais sur `bg-muted`.
 */
export const BUTTON_PRIMARY =
  "group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-small font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 disabled:opacity-60";

/**
 * Bouton secondaire : contour sur fond de page.
 *
 * `bg-card` vaut la même valeur que `bg-background` dans ce thème, donc
 * le remplissage est volontairement plat — c'est la bordure qui délimite
 * le bouton. Le survol le fait apparaître.
 */
export const BUTTON_SECONDARY =
  "group inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-small font-semibold text-foreground shadow-xs transition hover:border-primary/40 hover:bg-muted";
