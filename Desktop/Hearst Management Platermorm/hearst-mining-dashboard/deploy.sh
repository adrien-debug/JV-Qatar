#!/bin/bash

# 🚀 SCRIPT DE DÉPLOIEMENT FLY.IO — HEARST MINING DASHBOARD

set -e

echo "🚀 DÉPLOIEMENT HEARST MINING DASHBOARD SUR FLY.IO"
echo "=================================================="
echo ""

# Couleurs
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Étape 1 : Vérifier Fly CLI
echo -e "${BLUE}[1/5]${NC} Vérification de Fly CLI..."
if ! command -v flyctl &> /dev/null; then
    echo -e "${YELLOW}❌ Fly CLI non installée${NC}"
    echo "Installer depuis : https://fly.io/docs/getting-started/installing-flyctl/"
    exit 1
fi
echo -e "${GREEN}✅ Fly CLI détectée${NC}"

# Étape 2 : Vérifier authentification
echo -e "${BLUE}[2/5]${NC} Vérification de l'authentification..."
if ! flyctl auth whoami &> /dev/null; then
    echo -e "${YELLOW}⚠️  Non authentifié. Connexion en cours...${NC}"
    flyctl auth login
fi
echo -e "${GREEN}✅ Authentification OK${NC}"

# Étape 3 : Vérifier les fichiers
echo -e "${BLUE}[3/5]${NC} Vérification des fichiers..."
FILES=("DASHBOARD__52_.html" "Dockerfile" "nginx.conf" "fly.toml")
for file in "${FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo -e "${YELLOW}❌ Fichier manquant: $file${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ $file${NC}"
done

# Étape 4 : Déployer
echo -e "${BLUE}[4/5]${NC} Déploiement sur Fly.io..."
flyctl deploy

# Étape 5 : Vérifier le statut
echo -e "${BLUE}[5/5]${NC} Vérification du statut..."
sleep 5
flyctl status

echo ""
echo -e "${GREEN}=================================================="
echo "🎉 DÉPLOIEMENT RÉUSSI !"
echo "=================================================="
echo -e "${NC}"

# Afficher l'URL
APP_NAME=$(flyctl config get app)
echo -e "${YELLOW}📱 Dashboard en ligne :${NC}"
echo -e "${BLUE}https://${APP_NAME}.fly.dev${NC}"
echo ""
echo "Commandes utiles :"
echo "  • Voir les logs        : flyctl logs -f"
echo "  • Redéployer           : flyctl deploy"
echo "  • Ouvrir l'app         : flyctl open"
echo "  • SSH console          : flyctl ssh console"
echo ""
