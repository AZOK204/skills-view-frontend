import React from 'react';
import { useInView } from '../utils/hooks';

const LegalNotice = () => {
  const [titleRef, titleVisible] = useInView();
  const [sectionRef, sectionVisible] = useInView();

  const sections = [
    {
      id: 'editor',
      title: '1. Éditeur du site',
      content: `
        <strong>Le site SkillsView.org est édité par :</strong>
        <strong>El Seghetto Mathis</strong><br />
        <strong>Nom commercial :</strong> SkillsView & Conseil<br />
        <strong>Responsable légal :</strong> Mathis Seghetto<br />
        <strong>Forme juridique :</strong> Entreprise individuelle<br />
        <strong>SIRET :</strong> 993 849 827 00015<br />
        <strong>SIREN :</strong> 993 849 827<br />
        <strong>Capital social :</strong> 0 €<br />
        <strong>Adresse e-mail :</strong> <a href="mailto:contact@skillsview.org" className="text-primary hover:underline">contact@skillsview.org</a>
      `
    },
    {
      id: 'hosting',
      title: '2. Hébergeur du site',
      content: `
        <strong>Le site SkillsView.org est hébergé par :</strong>
        <strong>O2Switch</strong><br />
        SAS au capital de 100 000 €<br />
        <strong>RCS Clermont-Ferrand :</strong> 510 909 807<br />
        <strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France<br />
        <strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">https://www.o2switch.fr</a>
      `
    },
    {
      id: 'publisher-director',
      title: '3. Directeur de la publication',
      content: `
        <strong>Mathis Seghetto</strong>, en qualité de fondateur et représentant légal de SkillsView & Conseil.<br />
        <strong>Contact :</strong> <a href="mailto:contact@skillsview.org" className="text-primary hover:underline">contact@skillsview.org</a>
      `
    },
    {
      id: 'intellectual-property',
      title: '4. Propriété intellectuelle',
      content: `
        L'ensemble du contenu du site SkillsView.org, incluant les textes, graphismes, images, vidéos, logos, 
        icônes et éléments logiciels, est la propriété exclusive de SkillsView & Conseil, sauf mentions contraires.<br />
        
        Toute reproduction, distribution, modification ou utilisation de tout ou partie du site sans autorisation 
        écrite préalable est strictement interdite et constitue une violation du Code de la propriété intellectuelle.
      `
    },
    {
      id: 'personal-data',
      title: '5. Données personnelles et respect du RGPD',
      content: `
        Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679), SkillsView s'engage 
        à protéger les données personnelles collectées via le site SkillsView.org.<br />
        
        <strong>Données collectées :</strong><br />
        • Nom<br />
        • Prénom<br />
        • Adresse e-mail<br />
        
        <strong>Finalités de la collecte :</strong><br />
        • Gestion des comptes utilisateurs<br />
        • Communication et support client<br />
        • Gestion des abonnements et paiements<br />
        
        Ces données ne sont ni vendues, ni partagées avec des tiers non autorisés.<br />
        
        <strong>Droits des utilisateurs :</strong><br />
        Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD, vous disposez d'un 
        droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.<br />
        
        Pour exercer ces droits, vous pouvez contacter : 
        <a href="mailto:contact@skillsview.org" className="text-primary hover:underline">📩 contact@skillsview.org</a>
      `
    },
    {
      id: 'cookies',
      title: '6. Cookies',
      content: `
        Le site SkillsView.org n'utilise pas de cookies de suivi, de mesure d'audience ou publicitaires.
      `
    },
    {
      id: 'subscriptions',
      title: '7. Abonnements et services en ligne',
      content: `
        Le site SkillsView.org propose des abonnements payants donnant accès à des fonctionnalités avancées 
        de la plateforme.<br />
        
        Les conditions d'utilisation et de vente des abonnements sont précisées dans les Conditions Générales de 
        Vente (CGV) et les Conditions Générales d'Utilisation (CGU) disponibles sur le site.
      `
    },
    {
      id: 'liability',
      title: '8. Responsabilité',
      content: `
        SkillsView & Conseil s'efforce d'assurer au mieux l'exactitude des informations publiées sur son site. 
        Cependant, elle ne saurait être tenue responsable :<br />
        
        • D'erreurs ou omissions éventuelles<br />
        • D'une interruption du service<br />
        • De dommages directs ou indirects liés à l'utilisation du site
      `
    },
    {
      id: 'governing-law',
      title: '9. Droit applicable',
      content: `
        Les présentes mentions légales sont soumises au droit français. En cas de litige, et sauf disposition 
        légale contraire, les tribunaux compétents seront ceux du ressort du siège social de l'éditeur.
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
            Mentions légales
          </h1>
          <p className="text-gray-300  ">
            Informations légales et conditions d'utilisation de Skills View (SkillsView.org)
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-dark">
        <div className="container mx-auto max-w-3xl">
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
            <h3 className="text-xl font-bold text-white mb-4">Vous avez une question ?</h3>
            <p className="text-gray-300 mb-4">
              Pour toute question concernant ces mentions légales ou notre politique de confidentialité, 
              veuillez nous contacter :
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>
                <strong>Email :</strong>{' '}
                <a href="mailto:contact@skillsview.org" className="text-primary hover:underline">
                  contact@skillsview.org
                </a>
              </li>
              <li>
                <strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France
              </li>
              <li>
                <strong>Entreprise :</strong> SkillsView & Conseil (SIRET : 993 849 827 00015)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
