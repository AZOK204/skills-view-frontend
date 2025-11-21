# ✅ Checklist de Déploiement - Skills View

## 🎯 Avant le Déploiement

### 1. Vérification du Code
- [ ] Pas d'erreurs console
- [ ] Pas de warnings importants
- [ ] Code formaté et indenté
- [ ] Imports inutilisés supprimés
- [ ] console.log() de debug supprimés

### 2. Configuration
- [ ] `.env` configuré correctement
- [ ] VITE_API_URL pointe vers le bon backend
- [ ] Tokens d'authentification gérés correctement
- [ ] Variables sensibles en `.env` (jamais en dur)

### 3. Tests
- [ ] Landing page s'affiche correctement
- [ ] Login/Signup fonctionnent (mock ou réel)
- [ ] Dashboard accessible après login
- [ ] Responsive sur mobile/tablet/desktop
- [ ] Pas de page blanche

### 4. Performance
- [ ] Images optimisées
- [ ] Code splitting activé (Vite le fait)
- [ ] Aucune dépendance inutilisée
- [ ] Build size < 500KB (gzippé)

### 5. Sécurité
- [ ] Pas de tokens stockés en dur
- [ ] HTTPS pour l'API
- [ ] CORS configuré côté backend
- [ ] XSS protégé (React le fait par défaut)
- [ ] CSRF tokens si nécessaire

---

## 🚀 Commandes Déploiement

### Build Production
```bash
npm run build
```

### Vérifier le Build
```bash
npm run preview
```

### Size Analysis
```bash
npm install -g vite-plugin-visualizer
# Puis ajouter à vite.config.js et relancer
```

---

## 📦 Plateforme de Déploiement : Vercel

### 1. Créer un compte Vercel
- Aller sur https://vercel.com
- S'inscrire avec GitHub

### 2. Connecter le repository
```bash
npm i -g vercel
vercel
```

### 3. Configuration vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev"
}
```

### 4. Variables d'environnement
Dans le dashboard Vercel:
- Ajouter `VITE_API_URL`
- Ajouter toute autre variable nécessaire

---

## 🔧 Alternative : Netlify

### 1. Créer un compte Netlify
- Aller sur https://netlify.com
- S'inscrire

### 2. Connecter repository Git

### 3. Configuration netlify.toml
```toml
[build]
  command = "npm run build"
  publish = "dist"

[dev]
  command = "npm run dev"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[env]
  VITE_API_URL = "https://api.example.com/api"
```

---

## 🌐 Alternative : AWS Amplify

### 1. Installation CLI
```bash
npm install -g @aws-amplify/cli
amplify configure
```

### 2. Créer projet
```bash
amplify init
amplify hosting add
amplify publish
```

---

## 📋 Checklist Post-Déploiement

### 1. Vérification Site
- [ ] Site accessible via URL
- [ ] HTTPS activé
- [ ] Pas d'erreurs 404
- [ ] Refresh page fonctionne (rewrite rule configurée)
- [ ] Assets charges correctement

### 2. Vérification Fonctionnalité
- [ ] Landing page responsive
- [ ] Login/Signup fonctionne
- [ ] Dashboard accessible
- [ ] API calls fonctionnent
- [ ] Pas d'erreurs CORS

### 3. Monitoring
- [ ] Analytics configurées (Google Analytics)
- [ ] Error tracking (Sentry, etc.)
- [ ] Uptime monitoring
- [ ] Performance monitoring

### 4. SEO
- [ ] Meta tags OK
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Open Graph tags
- [ ] Google Search Console

---

## 🔄 Mise à Jour Continue

### GitHub Actions CI/CD (Optional)
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main, develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        run: vercel --prod
```

---

## 🐛 Troubleshooting Déploiement

### Site montre "cannot find module"
- [ ] Vérifier tous les imports
- [ ] Vérifier les chemins relatifs
- [ ] Npm install à nouveau

### Style TailwindCSS ne charge pas
- [ ] Vérifier tailwind.config.js
- [ ] Vérifier postcss.config.js
- [ ] Rebuild le projet

### Images ne charge pas
- [ ] Vérifier les URLs
- [ ] Vérifier CORS de Unsplash/CDN
- [ ] Télécharger les images en local

### API calls échouent
- [ ] Vérifier VITE_API_URL dans .env
- [ ] Vérifier CORS côté backend
- [ ] Vérifier token d'auth
- [ ] Vérifier console du navigateur

---

## 📊 Monitoring & Analytics

### Google Analytics
```html
<!-- Ajouter dans index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Sentry pour Error Tracking
```bash
npm install @sentry/react
```

---

## 🎉 C'est Prêt!

Votre application est maintenant:
- ✅ Construite
- ✅ Testée
- ✅ Déployée
- ✅ Monitoring

Bon déploiement! 🚀

---

## 📞 Support

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
