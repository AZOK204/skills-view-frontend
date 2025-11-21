/**
 * Exemples d'utilisation des hooks personnalisés
 * À consulter pour comprendre comment utiliser les hooks dans votre code
 */

/**
 * EXEMPLE 1 : useForm Hook
 * Utilisation dans un composant de formulaire
 */

/*
import { useForm } from '../utils/hooks';

function MyFormComponent() {
  const { values, errors, loading, handleChange, handleSubmit, reset } = useForm(
    { name: '', email: '' },
    async (values) => {
      // Votre logique de soumission
      console.log('Form submitted:', values);
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <p>{errors.name}</p>}
      
      <button type="submit" disabled={loading}>
        {loading ? 'Envoi...' : 'Soumettre'}
      </button>
    </form>
  );
}
*/

/**
 * EXEMPLE 2 : useToggle Hook
 * Utilisation pour ouvrir/fermer modals, dropdowns, etc.
 */

/*
import { useToggle } from '../utils/hooks';

function ModalComponent() {
  const { isOpen, toggle, open, close } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle Modal</button>
      
      {isOpen && (
        <div>
          <h2>Mon Modal</h2>
          <button onClick={close}>Fermer</button>
        </div>
      )}
    </div>
  );
}
*/

/**
 * EXEMPLE 3 : useApi Hook
 * Utilisation pour faire des appels API
 */

/*
import { useApi } from '../utils/hooks';
import matchService from '../services/matchService';

function MatchesListComponent() {
  const { data, loading, error, execute } = useApi(
    matchService.getAllMatches,
    []
  );

  useEffect(() => {
    execute();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <ul>
      {data?.map((match) => (
        <li key={match.id}>{match.teamName} vs {match.opponentName}</li>
      ))}
    </ul>
  );
}
*/

/**
 * EXEMPLE 4 : useAuth Hook
 * Utilisation pour l'authentification
 */

/*
import { useAuth } from '../utils/hooks';

function LoginComponent() {
  const { user, loading, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      console.log('Connecté avec succès');
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  if (user) {
    return (
      <div>
        <p>Bienvenue {user.name}</p>
        <button onClick={logout}>Déconnexion</button>
      </div>
    );
  }

  return (
    <div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
    </div>
  );
}
*/

/**
 * EXEMPLE 5 : usePagination Hook
 * Utilisation pour paginer une liste
 */

/*
import { usePagination } from '../utils/hooks';

function PaginatedListComponent({ items }) {
  const { paginatedItems, currentPage, totalPages, nextPage, prevPage } = 
    usePagination(items, 10);

  return (
    <div>
      <ul>
        {paginatedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Précédent
        </button>
        <p>Page {currentPage} sur {totalPages}</p>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>
    </div>
  );
}
*/

export const hookExamples = {
  useForm: 'Gère l\'état d\'un formulaire avec validation et soumission',
  useToggle: 'Toggle un état booléen pour modals, dropdowns, etc.',
  useApi: 'Gère les appels API avec loading et erreurs',
  useAuth: 'Gère l\'authentification utilisateur',
  usePagination: 'Pagine une liste d\'éléments',
};
