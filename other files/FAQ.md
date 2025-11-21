# ❓ FAQ - Questions Fréquemment Posées

---

## 🚀 Démarrage & Installation

### Q: Comment démarrer le projet?
**A:** 
```bash
cd skills-view
npm install
npm run dev
```
Le projet s'ouvre automatiquement sur `http://localhost:5173`

### Q: Je n'ai pas Node.js installé?
**A:** Téléchargez-le sur https://nodejs.org (version 18+)

### Q: Quel éditeur utiliser?
**A:** VS Code est recommandé avec extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier

### Q: Mon port 5173 est utilisé?
**A:** Lancez sur un autre port:
```bash
npm run dev -- --port 3000
```

---

## 📁 Structure & Organisation

### Q: Où ajouter un nouveau composant?
**A:** Dans `src/components/` avec le pattern:
```jsx
// src/components/MyComponent.jsx
function MyComponent() {
  return <div>Content</div>;
}
export default MyComponent;
```

### Q: Comment créer une nouvelle page?
**A:** Dans `src/pages/` et ajouter la route dans `App.jsx`:
```jsx
<Route path="/ma-page" element={<MyPage />} />
```

### Q: Où mettre mes images?
**A:** Dans `src/assets/` ou utiliser des URLs externes (Unsplash dans ce boilerplate)

### Q: Comment organiser le code?
**A:** 
- `components/` → Réutilisables
- `pages/` → Pages principales
- `services/` → API calls
- `utils/` → Helpers et hooks

---

## 🎨 Styling & Design

### Q: Comment changer les couleurs?
**A:** Modifier `tailwind.config.js`:
```javascript
colors: {
  primary: '#6EBA6E',
  dark: '#0B1024',
}
```

### Q: Comment ajouter du CSS custom?
**A:** Dans `src/index.css`:
```css
.ma-classe {
  @apply px-4 py-2 rounded-lg;
}
```

### Q: Comment faire responsive?
**A:** Utiliser les breakpoints Tailwind:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* md = tablet, lg = desktop */}
</div>
```

### Q: Tailwind n'apparaît pas?
**A:** 
1. Vérifier `tailwind.config.js`
2. Vérifier `src/index.css` a les directives @tailwind
3. Restart le server (`npm run dev`)

---

## 🔐 Authentification

### Q: Comment implémenter le vrai login?
**A:** Voir `API_INTEGRATION_GUIDE.md` - Remplacer les mock calls dans `authService.js`:

```javascript
// Remplacer:
const user = mockUsers.find(...);

// Par:
const response = await axiosInstance.post('/auth/login', { email, password });
```

### Q: Comment gérer les tokens?
**A:** Ils sont automatiquement gérés par `axiosInstance`:
```javascript
// Intercepteur ajoute le token à chaque requête
config.headers.Authorization = `Bearer ${token}`;
```

### Q: Comment protéger une page?
**A:** Vérifier dans le composant:
```jsx
useEffect(() => {
  if (!authService.isAuthenticated()) {
    navigate('/login');
  }
}, []);
```

### Q: Comment logout?
**A:** Utiliser `authService.logout()` qui efface le token et redirect

---

## 🔌 API & Services

### Q: Comment appeler une API?
**A:** Utiliser les services dans `src/services/`:
```javascript
import matchService from './services/matchService';
const matches = await matchService.getAllMatches();
```

### Q: Comment ajouter un nouvel endpoint?
**A:** Créer une fonction dans le service correspondant:
```javascript
export const myService = {
  myFunction: async (param) => {
    const response = await axiosInstance.get('/endpoint', { param });
    return response.data;
  },
};
```

### Q: Comment gérer les erreurs d'API?
**A:** Les intercepteurs gèrent automatiquement, mais vous pouvez aussi:
```javascript
try {
  await authService.login(email, password);
} catch (error) {
  setErrors({ submit: error.message });
}
```

### Q: CORS error?
**A:** Configurer votre backend pour accepter les requêtes:
```javascript
// Backend (Node.js/Express)
app.use(cors({ origin: 'http://localhost:5173' }));
```

---

## 🧩 Composants

### Q: Comment créer un composant?
**A:** 
```jsx
function MyComponent({ prop1, prop2 }) {
  return <div>{prop1} {prop2}</div>;
}
export default MyComponent;
```

### Q: Comment passer des props?
**A:**
```jsx
<MyComponent prop1="valeur" prop2={variable} />
```

### Q: Comment utiliser le hook useForm?
**A:** Voir `HOOKS_EXAMPLES.md` pour tous les exemples

### Q: Comment réutiliser un composant?
**A:** C'est l'intérêt! Importer et utiliser partout:
```jsx
import Button from '../components/Button';
<Button primary onClick={() => {}}>Texte</Button>
```

---

## 📱 Responsive

### Q: Comment tester le responsive?
**A:** 
1. F12 pour ouvrir DevTools
2. Ctrl+Shift+M pour toggle Device Toolbar
3. Choisir différentes résolutions

### Q: Mon site scroll horizontal?
**A:** 
1. Vérifier les largeurs en CSS
2. Utiliser `md:` et `lg:` breakpoints
3. Tester avec DevTools

### Q: Comment faire un élément caché sur mobile?
**A:** Utiliser les responsive classes:
```jsx
<div className="hidden md:block">Visible sur tablet/desktop</div>
```

---

## 🚀 Build & Déploiement

### Q: Comment faire un build production?
**A:** 
```bash
npm run build
```
Génère un dossier `dist/` prêt pour production

### Q: Comment tester le build localement?
**A:** 
```bash
npm run preview
```

### Q: Où déployer?
**A:** Voir `DEPLOYMENT_GUIDE.md` - Recommandé:
- Vercel (meilleur pour React/Vite)
- Netlify
- AWS Amplify

### Q: Quel est la taille du build?
**A:** Environ 300-400KB gzippé (acceptable)

---

## 🐛 Debugging

### Q: Comment déboguer?
**A:** 
1. F12 → Console
2. Vérifier les erreurs
3. Ajouter des console.log
4. Utiliser DevTools React Extension

### Q: Mes variables d'environnement ne chargent pas?
**A:** 
1. Mettre `VITE_` en préfixe: `VITE_API_URL`
2. Redémarrer le serveur après modification
3. Accéder via `import.meta.env.VITE_API_URL`

### Q: Page blanche?
**A:** 
1. Vérifier console (F12)
2. Vérifier les imports
3. Vérifier React.StrictMode n'a d'erreurs

### Q: Les styles ne chargent pas?
**A:** 
1. Vérifier `tailwind.config.js`
2. Vérifier `src/index.css`
3. Restart le serveur

---

## 📚 Apprentissage

### Q: Comment apprendre React?
**A:** 
- Officiel: https://react.dev
- Ce boilerplate: Regarder le code commenté
- YouTube: React tutorials

### Q: Comment apprendre TailwindCSS?
**A:** 
- https://tailwindcss.com/docs
- Copier-coller les classes dans ce projet
- Essayer des combinaisons

### Q: Comment apprendre Vite?
**A:** 
- https://vitejs.dev/guide
- Généralement vous n'en aurez pas besoin pour développer

### Q: Comment apprendre React Router?
**A:** 
- https://reactrouter.com
- Regarder `App.jsx` dans ce projet

---

## 🔄 Mise à Jour & Maintenance

### Q: Comment mettre à jour npm packages?
**A:** 
```bash
npm update              # Mises à jour mineurs
npm install <package>@latest  # Package spécifique
```

### Q: Comment vérifier les failles de sécurité?
**A:** 
```bash
npm audit
npm audit fix
```

### Q: Dois-je utiliser Yarn au lieu de npm?
**A:** Non, npm est inclus. Mais Yarn fonctionne aussi:
```bash
yarn install
yarn dev
```

---

## 💡 Tips & Tricks

### Raccourcis VS Code
- `Ctrl+Shift+P` → Command Palette
- `Ctrl+K Ctrl+S` → Keyboard Shortcuts
- `Ctrl+/` → Comment selection

### Plugins utiles VS Code
- Prettier (format code)
- ESLint (lint code)
- Thunder Client (test API)

### Les meilleures pratiques
1. Componentiez tout ✂️
2. Réutilisez vos composants 🔄
3. Testez en responsive 📱
4. Validez vos formulaires ✅
5. Gérez les erreurs 🚨

---

## 🆘 Besoin d'Aide?

### Avant de demander aide:
1. Vérifier la console (F12)
2. Lire les messages d'erreur
3. Consulter `README.md`
4. Consulter ce FAQ
5. Google l'erreur

### Ressources
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [MDN Docs](https://developer.mozilla.org)

---

## ✅ Avant Production

### Checklist Final
- [ ] Tests passent
- [ ] Console propre (no errors)
- [ ] Build sans erreur: `npm run build`
- [ ] Responsive testé
- [ ] API intégrée
- [ ] Variables d'environnement configurées
- [ ] Pas de console.log() en dur
- [ ] Performance acceptable

---

## 🎉 Vous Êtes Prêt!

Avec ce FAQ, vous devriez pouvoir résoudre 90% des problèmes!

**Happy Coding! 🚀**

---

*Dernière mise à jour: Novembre 2025*
