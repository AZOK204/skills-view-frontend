import axiosInstance from './axiosInstance';

/**
 * Service d'authentification - Mock pour maintenant
 * À intégrer avec le backend réel lors du développement
 */

// Mock users storage (remplacer par appel API réel)
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'ilyes@gmail.com',
    password: '12345678',
    clubName: 'FC Paris',
  },
];

export const authService = {
  /**
   * Connexion utilisateur
   * @param {string} email
   * @param {string} password
   * @returns {Promise}
   */
  login: async (email, password) => {
    try {
      // Mock API call - remplacer par:
      // const response = await axiosInstance.post('/auth/login', { email, password });
      
      const user = mockUsers.find((u) => u.email === email && u.password === password);
      if (!user) {
        throw new Error('Identifiants invalides');
      }

      const mockToken = `token_${Date.now()}`;
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('user', JSON.stringify(user));

      return { success: true, user, token: mockToken };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  /**
   * Inscription nouvel utilisateur
   * @param {object} userData - { name, email, password, clubName }
   * @returns {Promise}
   */
  signup: async (userData) => {
    try {
      // Mock API call - remplacer par:
      // const response = await axiosInstance.post('/auth/signup', userData);
      
      const newUser = {
        id: mockUsers.length + 1,
        ...userData,
      };
      mockUsers.push(newUser);

      const mockToken = `token_${Date.now()}`;
      localStorage.setItem('authToken', mockToken);
      localStorage.setItem('user', JSON.stringify(newUser));

      return { success: true, user: newUser, token: mockToken };
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  },

  /**
   * Déconnexion
   */
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  /**
   * Récupérer l'utilisateur actuel
   */
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  /**
   * Vérifier si l'utilisateur est connecté
   */
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },
};

export default authService;
