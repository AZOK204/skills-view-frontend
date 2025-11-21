#!/bin/bash
# Fichier de commandes utiles pour Skills View

# 🚀 DÉMARRAGE & DÉVELOPPEMENT
echo "=== COMMANDES DÉMARRAGE ==="
echo "npm run dev          # Lancer le serveur de développement"
echo "npm run build        # Build pour production"
echo "npm run preview      # Prévisualiser le build"
echo "npm run lint         # Lint le code"

# 📦 INSTALLATION
echo ""
echo "=== COMMANDES INSTALLATION ==="
echo "npm install          # Installer les dépendances"
echo "npm audit fix        # Corriger les failles de sécurité"

# 🧹 CLEANUP
echo ""
echo "=== COMMANDES CLEANUP ==="
echo "rm -rf node_modules && npm install  # Réinstaller les dépendances"
echo "rm -rf dist                         # Supprimer le build"

# 🔍 DEBUGGING
echo ""
echo "=== COMMANDES DEBUGGING ==="
echo "npm run dev          # Mode développement avec HMR"
echo "node --version       # Vérifier la version Node"
echo "npm --version        # Vérifier la version NPM"

# 📁 STRUCTURE PROJET
echo ""
echo "=== STRUCTURE CRÉÉE ==="
echo "skills-view/"
echo "├── src/"
echo "│   ├── components/   (Button, Navbar, Footer, etc.)"
echo "│   ├── pages/        (LandingPage, LoginPage, Dashboard)"
echo "│   ├── services/     (authService, matchService, etc.)"
echo "│   ├── utils/        (validators, mockData, hooks)"
echo "│   └── assets/"
echo "├── public/"
echo "├── package.json"
echo "├── vite.config.js"
echo "├── tailwind.config.js"
echo "└── README.md"

# 🌐 URLs DÉVELOPPEMENT
echo ""
echo "=== URLs DÉVELOPPEMENT ==="
echo "http://localhost:5173         # Landing Page"
echo "http://localhost:5173/login   # Login/Signup"
echo "http://localhost:5173/dashboard  # Dashboard"

# 🔐 TEST CREDENTIALS
echo ""
echo "=== TEST CREDENTIALS ==="
echo "Email: john@example.com"
echo "Password: password123"

# 📚 FICHIERS DOCUMENTATION
echo ""
echo "=== DOCUMENTATION ==="
echo "README.md                    # Général"
echo "INSTALLATION.md              # Installation détaillée"
echo "PROJECT_SUMMARY.md           # Résumé complet"
echo "API_INTEGRATION_GUIDE.md     # Intégration backend"
echo "DEPLOYMENT_GUIDE.md          # Déploiement"
echo "HOOKS_EXAMPLES.md            # Exemples hooks"

echo ""
echo "✅ Skills View setup complete!"
