# 🧪 Guide de Test - Skills View

Ce guide vous aide à tester toutes les fonctionnalités du boilerplate.

---

## 🚀 Préparation

```bash
cd skills-view
npm install
npm run dev
```

Ouvrir: `http://localhost:5173`

---

## 📋 Tests Landing Page

### URL: `http://localhost:5173/`

#### ✅ Navbar
- [ ] Logo "Skills View" visible
- [ ] Menu items visibles sur desktop
- [ ] Bouton "Connexion" cliquable
- [ ] Menu mobile sur petit écran (< 768px)
- [ ] Responsive sur tablet (768px - 1024px)

#### ✅ Hero Section
- [ ] Titre et sous-titre affichés
- [ ] Deux boutons visibles (Démarrer, En savoir plus)
- [ ] Image à droite chargée
- [ ] Carte flottante "Total Stats 12,000" visible
- [ ] Deux petites images flottantes visibles sur desktop
- [ ] Section responsive sur mobile

#### ✅ Services Section
- [ ] Titre "Nos Services" affiché
- [ ] Grid 3x2 sur desktop (3 par ligne)
- [ ] Grid 2x3 sur tablet
- [ ] Grid 1x6 sur mobile (1 par ligne)
- [ ] 6 cartes avec images chargées
- [ ] Hover effect sur les cartes

#### ✅ Features Section
- [ ] Titre et description affichés
- [ ] Image à droite
- [ ] Layout deux colonnes sur desktop
- [ ] Layout une colonne sur mobile

#### ✅ Reviews Section
- [ ] Titre "Ce que disent nos clients"
- [ ] 3 cartes affichées
- [ ] Carte du milieu décalée de 15px vers le bas
- [ ] Images de profil chargées
- [ ] Noms et noms des équipes affichés
- [ ] Background slate-custom (#334155)

#### ✅ Pricing Section
- [ ] Titre "Plans de Tarification"
- [ ] 3 cartes visibles
- [ ] Carte "Pro" en évidence (plus grande, différente couleur)
- [ ] Badge "POPULAIRE" sur la carte Pro
- [ ] Features listées avec checkmarks
- [ ] Boutons CTA colorés

#### ✅ CTA Section
- [ ] Titre "Rejoignez la nouvelle génération..."
- [ ] Sous-titre visible
- [ ] 2 boutons affichés
- [ ] Boutons responsifs

#### ✅ Footer
- [ ] Logo et tagline à gauche
- [ ] 3 colonnes de liens à droite
- [ ] Copyright en bas
- [ ] Background gris foncé

### 📱 Responsive Tests
- [ ] Mobile (< 768px): Pas de scroll horizontal, tout visible
- [ ] Tablet (768px-1024px): Layout adapté, 2 colonnes où applicable
- [ ] Desktop (> 1024px): Layout complet 3 colonnes

---

## 🔐 Tests Login/Signup Page

### URL: `http://localhost:5173/login`

#### ✅ Design
- [ ] Logo "Skills View" en haut
- [ ] Fond avec gradients visible
- [ ] Card blanche centrée
- [ ] Responsive sur mobile

#### ✅ Login Form
1. Cliquer sur onglet "Se connecter"
   - [ ] Onglet actif (background vert)
   - [ ] Formulaire affiché

2. Vider et soumettre
   - [ ] Message d'erreur "Identifiants invalides" ou "Champs obligatoires"
   - [ ] Form ne se soumet pas

3. Entrer email: `john@example.com`
   - [ ] Pas d'erreur email

4. Laisser password vide
   - [ ] Erreur "Champ obligatoire" ou similaire

5. Entrer credentials corrects:
   - Email: `john@example.com`
   - Password: `password123`
   - [ ] Clic "Se connecter"
   - [ ] Redirection vers Dashboard
   - [ ] Message "Bienvenue" au top

#### ✅ Signup Form
1. Cliquer sur onglet "S'inscrire"
   - [ ] Onglet actif
   - [ ] Formulaire signup affiché (4 champs)

2. Tester validations:
   - [ ] Nom vide: erreur
   - [ ] Email invalide (ex: "test"): erreur
   - [ ] Password < 8 caractères: erreur
   - [ ] Club name vide: erreur

3. Remplir tous les champs correctement:
   - Nom: `Pierre Martin`
   - Email: `pierre@example.com`
   - Password: `password123`
   - Club: `Paris FC`
   - [ ] Clic "Créer un compte"
   - [ ] Redirection vers Dashboard

#### ✅ Toggle
- [ ] Switch entre Login et Signup fluidement
- [ ] Erreurs effacées lors du switch
- [ ] Formulaires effacés lors du switch

---

## 📊 Tests Dashboard

### URL: `http://localhost:5173/dashboard` (après login)

#### ✅ Sidebar
1. Desktop (> 768px):
   - [ ] Sidebar visible à gauche
   - [ ] Logo "Skills" dans le header
   - [ ] 4 items de menu:
     - [ ] Aperçu (📊)
     - [ ] Analyses de match (⚽)
     - [ ] Clips enregistrés (🎬)
     - [ ] Mon abonnement (💳)
   - [ ] Item actif en vert
   - [ ] Bouton Déconnexion en rouge en bas

2. Mobile (< 768px):
   - [ ] Bouton toggle (☰) en haut à gauche
   - [ ] Clic toggle: sidebar s'ouvre
   - [ ] Overlay sombre derrière
   - [ ] Clic overlay: sidebar se ferme

#### ✅ Top Bar
- [ ] "Bienvenue" + nom d'utilisateur affichés
- [ ] Bouton toggle menu sur mobile

#### ✅ Content Area
- [ ] "Bienvenue dans votre dashboard" affiché
- [ ] 3 stat cards visibles:
  - [ ] Matchs analysés (12)
  - [ ] Clips enregistrés (45)
  - [ ] Heure totale (180h)

#### ✅ Last Match Section
- [ ] "Dernier match analysé" affiché
- [ ] Match info: Équipes, score, date
- [ ] Stats du match (passes, tirs)
- [ ] Info visuelle attrayante

#### ✅ Action Buttons
- [ ] "Importer une vidéo" cliquable
- [ ] "Voir mes clips" cliquable
- [ ] Responsive sur mobile

#### ✅ Logout
1. Cliquer sur "Déconnexion"
   - [ ] Redirection vers Login
   - [ ] Formulaires vidés
   - [ ] State utilisateur effacé

---

## 🔄 Tests de Navigation

### Navigation Routes
- [ ] `/` → Landing Page
- [ ] `/login` → Login/Signup
- [ ] `/dashboard` → Dashboard (après login)
- [ ] `/nonexistent` → 404 page

### Protections
- [ ] Aller à `/dashboard` sans login → Redirection vers login
- [ ] Login → Aller à `/` → Landing charge
- [ ] Dashboard → Clic logout → Retour à login

---

## 📱 Tests Responsive

### Breakpoints à Tester
1. **Mobile**: 375px (iPhone)
2. **Mobile Large**: 425px (Pixel)
3. **Tablet**: 768px (iPad)
4. **Laptop**: 1024px (MacBook)
5. **Desktop**: 1440px (Monitor)

### Pour chaque breakpoint:
- [ ] Pas de scroll horizontal
- [ ] Tous les éléments visibles
- [ ] Texte lisible
- [ ] Boutons cliquables
- [ ] Images chargées correctement

---

## 🎨 Tests Styling

### Couleurs
- [ ] Primary (vert #6EBA6E) utilisé correctement
- [ ] Fond (noir #0B1024) sur landing
- [ ] Slate custom (#334155) sur reviews
- [ ] Blanc sur texte important

### Typography
- [ ] Titres lisibles
- [ ] Paragraphes bien espacés
- [ ] Listes bien formatées

### Spacing
- [ ] Pas d'éléments serrés
- [ ] Hiérarchie visuelle claire
- [ ] Padding/margin cohérent

---

## ⚡ Tests Performance

### Loading
- [ ] Landing page charge < 3s
- [ ] Images chargent depuis Unsplash
- [ ] Aucun lag lors du scroll
- [ ] Transitions fluides

### DevTools (F12)
- [ ] Pas d'erreurs console
- [ ] Pas de warnings majeurs
- [ ] Network: < 50 requêtes
- [ ] Bundle size raisonnable

---

## 🧪 Tests Formulaires

### Validation en Temps Réel
- [ ] Erreurs disparaissent quand on corrige
- [ ] Messages d'erreur clairs
- [ ] Pas d'erreurs fausses positives

### States du Formulaire
- [ ] Bouton "En cours..." pendant la soumission
- [ ] Bouton désactivé pendant le traitement
- [ ] Redirection après succès
- [ ] Message d'erreur globale si problème

---

## 🔐 Tests Sécurité

- [ ] Pas de passwords en console
- [ ] Tokens en localStorage (pas en state exposé)
- [ ] Pas de données sensibles en dur
- [ ] Logout efface bien les données

---

## 💾 Tests Persistance

### localStorage
- [ ] Après login, token sauvegardé
- [ ] User info sauvegardée
- [ ] Refresh page → Encore connecté
- [ ] Logout → Données effacées
- [ ] Refresh après logout → Pas d'erreur

---

## 🎯 Tests Finaux (Avant Production)

- [ ] Tous les tests ci-dessus passent ✅
- [ ] Aucune erreur console 
- [ ] Responsive sur tous les breakpoints
- [ ] Performance acceptable
- [ ] Pas de données sensibles exposées
- [ ] Navigation fluide
- [ ] Forms validées correctement

---

## 📝 Checklist Rapide

Copier-coller pour tester rapidement:

```
Landing Page:
- [ ] Hero visible
- [ ] Services 3x2 grid
- [ ] Reviews 3 cartes
- [ ] Pricing 3 plans
- [ ] Footer complet

Login Page:
- [ ] Forms valident
- [ ] Toggle fonctionne
- [ ] Credentials de test OK

Dashboard:
- [ ] Sidebar visible (desktop)
- [ ] Stats affichées
- [ ] Last match info
- [ ] Logout fonctionne

Responsive:
- [ ] Mobile OK
- [ ] Tablet OK
- [ ] Desktop OK

General:
- [ ] Pas d'erreurs console
- [ ] Performance OK
- [ ] Navigation fluide
```

---

## 🐛 Troubleshooting Tests

| Problème | Solution |
|----------|----------|
| Images ne chargent pas | Vérifier connexion internet, Unsplash accessible |
| Page blanche | Vérifier console (F12), erreur JavaScript |
| Styles manquent | Vérifier tailwind.config.js, restart dev server |
| Redirection échoue | Vérifier React Router setup |
| localStorage vide | Vérifier navigateur permet localStorage |

---

## ✅ C'est Testé!

Une fois tous les tests passés, votre boilerplate est **prêt pour le développement**! 🚀

**Happy Testing! 🧪**
