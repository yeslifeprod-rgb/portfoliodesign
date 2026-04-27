#!/bin/bash

# ============================================
# 🚀 Portfolio Design - Script d'automatisation
# Fini les validations manuelles !
# ============================================

set -e

# Couleurs pour le terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Se placer à la racine du projet
cd "$(dirname "$0")"

# Fonctions utilitaires
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[OK]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

show_help() {
  echo -e "${CYAN}"
  echo "╔══════════════════════════════════════════════╗"
  echo "║     Portfolio Design - Commandes rapides     ║"
  echo "╠══════════════════════════════════════════════╣"
  echo "║                                              ║"
  echo "║  dev        → Lancer le serveur dev          ║"
  echo "║  build      → Build de production            ║"
  echo "║  start      → Lancer en mode production      ║"
  echo "║  lint       → Vérifier le code (ESLint)      ║"
  echo "║  lint:fix   → Corriger auto les erreurs lint ║"
  echo "║  typecheck  → Vérifier les types TypeScript  ║"
  echo "║  clean      → Nettoyer le cache et .next     ║"
  echo "║  install    → Installer les dépendances      ║"
  echo "║  update     → Mettre à jour les packages     ║"
  echo "║  deploy     → Build + deploy Netlify         ║"
  echo "║  check      → Lint + TypeCheck + Build       ║"
  echo "║  sitemap    → Générer le sitemap             ║"
  echo "║  fonts      → Générer les text paths         ║"
  echo "║  fresh      → Clean install (from scratch)   ║"
  echo "║                                              ║"
  echo "╚══════════════════════════════════════════════╝"
  echo -e "${NC}"
}

cmd_dev() {
  log_info "Lancement du serveur de développement..."
  npx next dev
}

cmd_build() {
  log_info "Build de production en cours..."
  npm run build
  log_success "Build terminé avec succès !"
}

cmd_start() {
  log_info "Lancement en mode production..."
  npx next start
}

cmd_lint() {
  log_info "Vérification du code avec ESLint..."
  npx next lint
  log_success "Aucune erreur de lint !"
}

cmd_lint_fix() {
  log_info "Correction automatique des erreurs de lint..."
  npx next lint --fix
  log_success "Corrections appliquées !"
}

cmd_typecheck() {
  log_info "Vérification des types TypeScript..."
  npx tsc --noEmit
  log_success "Aucune erreur de type !"
}

cmd_clean() {
  log_info "Nettoyage du cache et des fichiers temporaires..."
  rm -rf .next
  rm -rf node_modules/.cache
  log_success "Cache nettoyé !"
}

cmd_install() {
  log_info "Installation des dépendances..."
  npm install
  log_success "Dépendances installées !"
}

cmd_update() {
  log_info "Mise à jour des packages..."
  npm update
  log_success "Packages mis à jour !"
}

cmd_deploy() {
  log_info "Lancement du pipeline de déploiement..."
  echo ""
  log_info "Étape 1/3 — Lint"
  npx next lint
  log_success "Lint OK"
  echo ""
  log_info "Étape 2/3 — Build"
  npm run build
  log_success "Build OK"
  echo ""
  log_info "Étape 3/3 — Deploy Netlify"
  if command -v netlify &> /dev/null; then
    netlify deploy --prod
    log_success "Déployé sur Netlify !"
  else
    log_warn "Netlify CLI non installé. Installe-le avec : npm i -g netlify-cli"
    log_info "Le build est prêt, tu peux deploy manuellement ou via Git push."
  fi
}

cmd_check() {
  log_info "Vérification complète du projet..."
  echo ""
  log_info "1/3 — Lint"
  npx next lint
  log_success "Lint OK"
  echo ""
  log_info "2/3 — TypeCheck"
  npx tsc --noEmit
  log_success "TypeCheck OK"
  echo ""
  log_info "3/3 — Build"
  npm run build
  log_success "Build OK"
  echo ""
  log_success "Tout est bon ! Prêt pour le déploiement."
}

cmd_sitemap() {
  log_info "Génération du sitemap..."
  npx next-sitemap
  log_success "Sitemap généré !"
}

cmd_fonts() {
  log_info "Génération des text paths (police DMSans)..."
  node scripts/generate-text-paths.mjs
  log_success "Text paths générés !"
}

cmd_fresh() {
  log_warn "Réinstallation complète du projet..."
  rm -rf node_modules
  rm -rf .next
  rm -rf package-lock.json
  npm install
  log_success "Installation fraîche terminée !"
}

# Router principal
case "${1:-help}" in
  dev)        cmd_dev ;;
  build)      cmd_build ;;
  start)      cmd_start ;;
  lint)       cmd_lint ;;
  lint:fix)   cmd_lint_fix ;;
  typecheck)  cmd_typecheck ;;
  clean)      cmd_clean ;;
  install)    cmd_install ;;
  update)     cmd_update ;;
  deploy)     cmd_deploy ;;
  check)      cmd_check ;;
  sitemap)    cmd_sitemap ;;
  fonts)      cmd_fonts ;;
  fresh)      cmd_fresh ;;
  help|*)     show_help ;;
esac
