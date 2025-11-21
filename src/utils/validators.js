export const validators = {
  /**
   * Valider email
   */
  email: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  /**
   * Valider mot de passe (min 8 caractères)
   */
  password: (password) => {
    return password && password.length >= 8;
  },

  /**
   * Valider nom
   */
  name: (name) => {
    return name && name.trim().length >= 2;
  },

  /**
   * Valider nom de club
   */
  clubName: (clubName) => {
    return clubName && clubName.trim().length >= 2;
  },
};

/**
 * Messages d'erreur
 */
export const errorMessages = {
  invalidEmail: 'Adresse email invalide',
  invalidPassword: 'Le mot de passe doit contenir au moins 8 caractères',
  invalidName: 'Le nom doit contenir au moins 2 caractères',
  invalidClubName: 'Le nom du club doit contenir au moins 2 caractères',
  fieldsRequired: 'Tous les champs sont obligatoires',
};

export default validators;
