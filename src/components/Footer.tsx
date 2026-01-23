import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useLanguage } from "../contexts/LanguageContext";
import logoAlienx from "../assets/logo-alienx.png";
import { games } from '../data/games'; 

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const iconClass = "text-textSecondary transition-all duration-300 hover:text-accent-green hover:drop-shadow-[0_0_8px_#B6FF2E] hover:scale-110";

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* COLUNA 1: Logo, Descrição e ENDEREÇO */}
          <div className="md:col-span-2">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logoAlienx}
                alt="AlienX"
                className="h-12 mb-4 hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-textSecondary text-sm leading-relaxed max-w-md mb-6">
              {t.footer.description}
            </p>

            {/* ENDEREÇO + EMAIL (Texto simples) */}
            <div className="text-textSecondary text-sm leading-relaxed space-y-1 border-t border-white/10 pt-4 max-w-xs">
              <p className="font-bold text-white mb-2">Endereço</p>
              <p>21911-130</p>
              <p>Rio de Janeiro, Rio de Janeiro, BR</p>
              <p className="mt-2">
                contact@alienphalanx.com
              </p>
            </div>
          </div>

          {/* COLUNA 2: LISTA DE JOGOS */}
          <div>
            <h3 className="text-textPrimary font-bold mb-4 uppercase">
              {t.footer.games || "Jogos"}
            </h3>
            <ul className="space-y-2 text-sm text-textSecondary">
              {games.map((game) => (
                <li key={game.id}>
                  <Link
                    to={`/games/${game.id}`}
                    className="hover:text-accent-green transition-colors"
                  >
                    {game.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: PÁGINAS */}
          <div>
            <h3 className="text-textPrimary font-bold mb-4 uppercase">
              {t.footer.pages || "PÁGINAS"}
            </h3>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li>
                {/* ALTERAÇÃO AQUI: onClick força a subida da tela */}
                <Link
                  to="/" 
                  className="hover:text-accent-green transition-colors"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent-green transition-colors"
                >
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  to="/presskit"
                  className="hover:text-accent-green transition-colors"
                >
                  Presskit
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent-green transition-colors"
                >
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- ÍCONES SOCIAIS --- */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h4 className="text-white font-bold mb-4 text-sm tracking-wider">
            {t.footer.followUs || "Siga-nos"}
          </h4>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/AlienXgamestudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={iconClass}
            >
              <FaFacebookF size={24} />
            </a>

            <a
              href="https://www.instagram.com/alienxgamestudio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={iconClass}
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://x.com/AlienXstudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className={iconClass}
            >
              <FaXTwitter size={24} />
            </a>

            <a
              href="https://discord.com/invite/WvfQJsjdeJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className={iconClass}
            >
              <FaDiscord size={24} />
            </a>

            <a
              href="https://www.tiktok.com/@alienxgamestudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className={iconClass}
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textSecondary text-sm">© {currentYear} {t.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-textSecondary">
            <Link to="/privacy" className="hover:text-accent-green transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
