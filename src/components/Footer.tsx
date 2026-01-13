import { useLanguage } from "../contexts/LanguageContext";
import logoAlienx from "../assets/logo-alienx.png";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
              src={logoAlienx}
              alt="AlienX"
              className="h-12 mb-4"
            />
            <p className="text-textSecondary text-sm leading-relaxed max-w-md">
              {t.footer.description}
            </p>
          </div>

          {/* Jogos */}
          <div>
            <h3 className="text-textPrimary font-bold mb-4">
              {t.footer.games}
            </h3>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li>
                <a
                  href="#"
                  className="hover:text-accent-green transition-colors"
                >
                  Star Bind
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-green transition-colors"
                >
                  Vapor Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-green transition-colors"
                >
                  Cell Wars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-green transition-colors"
                >
                  {t.footer.seeAll}
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-textPrimary font-bold mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li>
                <a
                  href="#"
                  className="hover:text-accent-green transition-colors"
                >
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-green transition-colors"
                >
                  {t.footer.careers}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-green transition-colors"
                >
                  {t.footer.pressKit}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-green transition-colors"
                >
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="text-textSecondary hover:text-accent-green transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-textSecondary hover:text-accent-green transition-colors"
          >
            <span className="sr-only">YouTube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-textSecondary hover:text-accent-green transition-colors"
          >
            <span className="sr-only">Discord</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3333-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textSecondary text-sm">{t.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-textSecondary">
            <a href="#" className="hover:text-accent-green transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-accent-green transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
