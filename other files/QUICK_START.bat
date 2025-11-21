@echo off
REM Fichier de commandes utiles pour Skills View (Windows)

echo.
echo ========================================
echo  SKILLS VIEW - QUICK START
echo ========================================
echo.

echo === COMMANDES DEMARRAGE ===
echo npm run dev          # Lancer le serveur de developpement
echo npm run build        # Build pour production
echo npm run preview      # Previsualiser le build
echo npm run lint         # Lint le code
echo.

echo === COMMANDES INSTALLATION ===
echo npm install          # Installer les dependances
echo npm audit fix        # Corriger les failles de securite
echo.

echo === COMMANDES CLEANUP ===
echo rmdir /s /q node_modules ^& npm install  # Reinstaller les dependances
echo rmdir /s /q dist                         # Supprimer le build
echo.

echo === DEMARRAGE RAPIDE ===
echo 1. npm install
echo 2. npm run dev
echo 3. Ouvrir http://localhost:5173
echo.

echo === STRUCTURE DU PROJET ===
echo skills-view/
echo  +-- src/
echo  +-- components/     (Button, Navbar, Footer, etc.)
echo  +-- pages/          (LandingPage, LoginPage, Dashboard)
echo  +-- services/       (authService, matchService, etc.)
echo  +-- utils/          (validators, mockData, hooks)
echo  +-- App.jsx
echo  +-- main.jsx
echo  +-- index.css
echo.

echo === URLs DEVELOPPEMENT ===
echo http://localhost:5173         # Landing Page
echo http://localhost:5173/login   # Login/Signup
echo http://localhost:5173/dashboard  # Dashboard
echo.

echo === TEST CREDENTIALS ===
echo Email: john@example.com
echo Password: password123
echo.

echo === FICHIERS DOCUMENTATION ===
echo README.md                    # General
echo INSTALLATION.md              # Installation detaillee
echo PROJECT_SUMMARY.md           # Resume complet
echo API_INTEGRATION_GUIDE.md     # Integration backend
echo DEPLOYMENT_GUIDE.md          # Deploiement
echo HOOKS_EXAMPLES.md            # Exemples hooks
echo.

echo ✅ Skills View setup complete!
echo.
pause
