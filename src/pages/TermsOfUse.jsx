import React from 'react';
import { useInView } from '../utils/hooks';

const TermsOfUse = () => {
  const [titleRef, titleVisible] = useInView();
  const [sectionRef, sectionVisible] = useInView();

  const sections = [
    {
      id: 'object',
      title: '1. Objet',
      content: `
        Les présentes Conditions Générales d'Utilisation (CGU) définissent les règles d'accès et d'utilisation de la 
        plateforme SkillsView.org, éditée par El Seghetto Mathis, nom commercial SkillsView & Conseil.<br />
        
        La plateforme propose un service SaaS permettant aux clubs amateurs, analystes et joueurs de football de :<br />
        • Importer et analyser des vidéos de matchs<br />
        • Générer des statistiques et visualisations individuelles ou collectives<br />
        • Accéder à des clips découpés par joueur<br />
        • Bénéficier d'un espace personnel sécurisé<br />
        
        En utilisant SkillsView.org, l'utilisateur accepte sans réserve les présentes CGU.
      `
    },
    {
      id: 'target-audience',
      title: '2. Public cible',
      content: `
        La plateforme est destinée aux :<br />
        • Clubs amateurs<br />
        • Analystes sportifs<br />
        • Joueurs individuels
      `
    },
    {
      id: 'account-access',
      title: '3. Accès et création de compte',
      content: `
        Pour accéder aux fonctionnalités complètes de SkillsView, l'utilisateur doit créer un compte en fournissant :<br />
        • Nom et prénom<br />
        • Adresse e-mail valide<br />
        
        L'accès gratuit limité est possible pour tester certaines fonctionnalités, mais certaines options (analyse 
        complète, téléchargements de clips, PDF) nécessitent un abonnement payant.
      `
    },
    {
      id: 'subscriptions-payments',
      title: '4. Abonnements et paiements',
      content: `
        • Les abonnements sont proposés selon différentes formules (mensuelles ou annuelles)<br />
        • Les paiements sont effectués via Stripe, un prestataire tiers sécurisé<br />
        • L'utilisateur peut résilier son abonnement à tout moment via son espace personnel
      `
    },
    {
      id: 'content-ownership',
      title: '5. Propriété et usage des contenus',
      content: `
        • L'utilisateur conserve la propriété totale de ses vidéos et données<br />
        
        • SkillsView n'acquiert aucun droit de propriété sur les contenus importés ; la plateforme se réserve 
        uniquement le droit de traitement et d'analyse pour fournir le service<br />
        
        • SkillsView n'est pas responsable des contenus importés, y compris tout contenu illégal, offensant ou 
        protégé par droit d'auteur
      `
    },
    {
      id: 'obligations-prohibitions',
      title: '6. Obligations et interdictions',
      content: `
        <strong>L'utilisateur s'engage à :</strong><br />
        • Fournir des informations exactes lors de la création du compte<br />
        • Utiliser la plateforme uniquement à des fins personnelles ou liées à son club<br />
        
        <strong>Il est strictement interdit :</strong><br />
        • De partager son compte avec un tiers<br />
        • D'utiliser les vidéos ou statistiques à des fins commerciales sans autorisation<br />
        • D'altérer, copier ou distribuer les contenus du site sans autorisation
      `
    },
    {
      id: 'account-deletion',
      title: '7. Suppression de compte',
      content: `
        L'utilisateur peut supprimer son compte à tout moment depuis son espace personnel. La suppression entraîne 
        la perte des vidéos stockées sur le serveur, mais les statistiques et exports PDF déjà générés restent la 
        propriété de l'utilisateur.
      `
    },
    {
      id: 'liability',
      title: '8. Responsabilité',
      content: `
        SkillsView & Conseil met tout en œuvre pour assurer la disponibilité et la sécurité du service, mais ne peut 
        être tenue responsable :<br />
        • Des interruptions du service<br />
        • Des erreurs ou omissions dans les analyses<br />
        • Des contenus importés par l'utilisateur
      `
    },
    {
      id: 'personal-data',
      title: '9. Protection des données personnelles',
      content: `
        Conformément au RGPD, SkillsView collecte uniquement les données nécessaires : nom, prénom, adresse e-mail.<br />
        
        Ces données sont utilisées pour :<br />
        • La gestion du compte<br />
        • La communication avec l'utilisateur<br />
        • La gestion des abonnements et paiements<br />
        
        Pour exercer vos droits d'accès, rectification ou suppression, contactez : 
        <a href="mailto:contact@skillsview.org" className="text-primary hover:underline">contact@skillsview.org</a>
      `
    },
    {
      id: 'modifications',
      title: '10. Modification des CGU',
      content: `
        SkillsView se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés 
        de toute modification significative. La poursuite de l'utilisation du site constitue une acceptation des 
        nouvelles conditions.
      `
    },
    {
      id: 'governing-law',
      title: '11. Droit applicable',
      content: `
        Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution 
        relève des tribunaux compétents du ressort du siège social de SkillsView & Conseil.
      `
    }
  ];

  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-dark border-b border-gray-700">
        <div className="container mx-auto">
          <h1
            ref={titleRef}
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 fade-in-up-scroll ${
              titleVisible ? 'visible' : ''
            }`}
          >
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
            SkillsView.org - Conditions régissant votre utilisation de notre plateforme
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-dark">
        <div className="container mx-auto max-w-3xl">
          {/* Intro */}
          <div className="mb-12 p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-3">Introduction</h2>
            <p className="text-gray-300">
              Bienvenue sur SkillsView.org. Ces Conditions Générales d'Utilisation (CGU) régissent votre accès et 
              votre utilisation de notre site web, de nos services et de nos applications. Veuillez lire attentivement 
              ces conditions avant d'utiliser notre plateforme.
            </p>
          </div>

          {/* Last Updated */}
          <div className="mb-12 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-sm">
              <strong>Dernière mise à jour :</strong> novembre 2025
              
               {/* {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} */}
            </p>
          </div>

          {/* Sections */}
          {sections.map((section, idx) => (
            <div
              key={section.id}
              ref={idx === 0 ? sectionRef : null}
              className={`mb-10 ${
                idx === 0 ? `fade-in-up-scroll ${sectionVisible ? 'visible' : ''}` : ''
              }`}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {section.title}
              </h2>
              <div
                className="text-gray-300 text-base sm:text-lg leading-8 space-y-4"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-16 p-6 bg-linear-to-r from-primary/10 to-transparent rounded-lg border border-primary/30">
            <h3 className="text-xl font-bold text-white mb-4">Besoin d'aide ?</h3>
            <p className="text-gray-300 mb-4">
              Si vous avez des questions ou des préoccupations concernant ces Conditions Générales d'Utilisation, 
              n'hésitez pas à nous contacter.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>
                <strong>Email :</strong>{' '}
                <a href="mailto:contact@skillsview.com" className="text-primary hover:underline">
                  contact@skillsview.com
                </a>
              </li>
              <li>
                <strong>Support :</strong>{' '}
                <a href="https://support.skillsview.com" className="text-primary hover:underline">
                  Accès au support
                </a>
              </li>
              <li>
                <strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France
              </li>
            </ul>
          </div>

          {/* Related Documents */}
          <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Documents connexes</h3>
            <ul className="text-gray-300 space-y-2">
      
              <li>
                <a href="/legal-notice" className="text-primary hover:underline">
                  → Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
