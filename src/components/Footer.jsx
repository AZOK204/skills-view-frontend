import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className=" text-gray-300 py-4 mt-7">
      <div className="lg:container mx-auto px-10 lg:px-30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm justify-items-center">
          {/* Logo Section */}
          <div className='md:justify-self-start text-center'>
            <img src={logo} alt="" />
            <p className="text-sm">L'analyse vidéo pour tous.</p>
          </div>

          {/* Links Sections */}
          <div className='text-center md:text-left'>
            <h4 className="text-white font-semibold mb-4 text-[16px]">Produit</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition">Accueil</a></li>
              <li><a href="#" className="hover:text-primary transition">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-primary transition">Tarifs</a></li>
              <li><a href="#" className="hover:text-primary transition">Démos</a></li>
            </ul>
          </div>

          <div className='text-center md:text-left'>
            <h4 className="text-white font-semibold mb-4  text-[16px] ">Entreprise</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition">À propos</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition">Carrières</a></li>

            </ul>
          </div>

          <div className='text-center md:text-left'>
            <h4 className="text-white font-semibold mb-4  text-[16px]">Légal</h4>
            <ul className="space-y-2">
              <li><a href="/terms-of-use" className="hover:text-primary transition">confidentialité</a></li>
              <li><a href="/legal-notice" className="hover:text-primary transition">Mentions légal</a></li>
            </ul>
          </div>
        </div>
        <div className=" mt-8">
          <p className="text-center text-sm text-gray-400">
            © 2025 Skills View. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
