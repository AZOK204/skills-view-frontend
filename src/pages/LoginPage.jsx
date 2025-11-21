import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import authService from '../services/authService';
import { validators, errorMessages } from '../utils/validators';
import logo from '../assets/logo.png';
const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // State Login
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // State Signup
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    clubName: '',
  });

  /** Validation du formulaire de login  */
  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) {
      newErrors.email = errorMessages.fieldsRequired;
    } else if (!validators.email(loginData.email)) {
      newErrors.email = errorMessages.invalidEmail;
    }

    if (!loginData.password) {
      newErrors.password = errorMessages.fieldsRequired;
    }

    return newErrors;
  };

  /** Validation du formulaire de signup */
  const validateSignup = () => {
    const newErrors = {};
    if (!signupData.name || !validators.name(signupData.name)) {
      newErrors.name = errorMessages.invalidName;
    }
    if (!signupData.email || !validators.email(signupData.email)) {
      newErrors.email = errorMessages.invalidEmail;
    }
    if (!signupData.password || !validators.password(signupData.password)) {
      newErrors.password = errorMessages.invalidPassword;
    }
    if (!signupData.clubName || !validators.clubName(signupData.clubName)) {
      newErrors.clubName = errorMessages.invalidClubName;
    }
    return newErrors;
  };

  /** Gestion du login */
  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = validateLogin();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await authService.login(loginData.email, loginData.password);
      navigate('/dashboard');
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  /** Gestion du signup */
  const handleSignup = async (e) => {
    e.preventDefault();
    const newErrors = validateSignup();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await authService.signup(signupData);
      navigate('/dashboard');
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen bg-dark'>
     <div
      className="h-screen background-color-login flex items-center justify-center p-4   opacity-100"
 
    >
      <div className="fixed top-0 left-0 m-3">
      <img src={logo} alt="logo"  className='w-28' />

      </div>
      {/* Card Conteneur */}
      <div className="w-full max-w-[400px] bg-[#FFFFFF0D] shadow-[0px_8px_24px_0px_#00000080] backdrop-blur-md p-8 pb-12 rounded-2xl">

        {/* Toggle Login/Signup */}
        <div className="flex items-center justify-center gap-3 mb-5 ">
          <button
            onClick={() => {
              setIsLogin(true);
              setErrors({});
            }}
            className={`flex-1 py-2.5 px-4  border-b-[3px]  transition-all font-semibold font-alt ${
              isLogin
                ? ' text-white border-b-[#7C3AED]'
                : 'border-transparent text-chateau   cursor-pointer '
            }`}
          >
            Se connecter
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
              setErrors({});
            }}
             className={`flex-1 py-2.5 px-4  border-b-[3px]  transition-all font-semibold  font-alt  ${
              !isLogin
                ? ' text-white border-b-[#7C3AED]'
                : 'border-transparent text-chateau cursor-pointer '
            }`}
          >
Créer un compte
          </button>
        </div>

        {/* Erreur globale */}
        {errors.submit && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-6 text-sm">
            {errors.submit}
          </div>
        )}

        {/* LOGIN FORM */}
        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              error={errors.email}
              required
            />

            <Input
              type="password"
              placeholder="Mot de passe"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              error={errors.password}
              required
            />

            {/* <a href="#" className="text-sm text-primary hover:underline block">
              Mot de passe oublié?
            </a> */}

            <Button
              primary
              type="submit"
              className="w-full gradient-btn-prpl rounded-lg p-3 font-alt font-bold leading-6"
              disabled={loading}
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>
        ) : (
          /* SIGNUP FORM */
          <form onSubmit={handleSignup} className="space-y-6">
            <Input
              type="text"
              placeholder="Nom complet"
              value={signupData.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
              error={errors.name}
              required
            />

            <Input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              error={errors.email}
              required
            />

            <Input
              type="password"
              placeholder="Mot de passe"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              error={errors.password}
              required
            />

            <Input
              type="text"
              placeholder="Votre club ou 'Indépendant' "
              value={signupData.clubName}
              onChange={(e) =>
                setSignupData({ ...signupData, clubName: e.target.value })
              }
              error={errors.clubName}
              required
            />

            <Button
              primary
              type="submit"
              className="w-full gradient-btn-prpl rounded-lg p-3 font-alt font-bold leading-6 "
              disabled={loading}
            >
              {loading ? 'Création...' : 'Créer un compte'}
            </Button>
          </form>
        )}
      </div>
    </div>
      </div>
    
 
  );
};

export default LoginPage;
