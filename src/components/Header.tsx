import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import logoAlienx from "../assets/logo-alienx.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="w-full bg-background border-b border-white/10">
      <div className="relative flex items-center h-16 px-4 gap-6">

        {/* MENU HAMBÚRGUER — MOBILE */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* MENU DESKTOP — ESQUERDA */}
        <nav className="hidden md:flex items-center gap-6 text-textPrimary text-sm w-full">
          <a href="#sobre" className="hover:text-accent-green transition">
            {t.nav.about}
          </a>
          <a href="#jogos" className="hover:text-accent-green transition">
            {t.nav.games}
          </a>
          <a href="#presskit" className="hover:text-accent-green transition">
            {t.nav.presskit}
          </a>
          <a href="#contato" className="hover:text-accent-green transition">
            {t.nav.contact}
          </a>

          {/* IDIOMA */}
         <button
           onClick={toggleLanguage}
           className="ml-auto border border-white/30 px-3 py-1 rounded text-xs hover:border-accent-green hover:text-accent-green transition"
         >
           {language === 'pt' ? 'EN' : 'PT'}
         </button>
        </nav>

        {/* LOGO — SEMPRE CENTRALIZADA */}
        <img
          src={logoAlienx}
          alt="AlienX"
          className="absolute left-1/2 -translate-x-1/2 h-8"
        />
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 py-4 text-textPrimary bg-background border-t border-white/10">
          <a onClick={() => setOpen(false)} href="#sobre" className="hover:text-accent-green transition">{t.nav.about}</a>
          <a onClick={() => setOpen(false)} href="#jogos" className="hover:text-accent-green transition">{t.nav.games}</a>
          <a onClick={() => setOpen(false)} href="#presskit" className="hover:text-accent-green transition">{t.nav.presskit}</a>
          <a onClick={() => setOpen(false)} href="#contato" className="hover:text-accent-green transition">{t.nav.contact}</a>

          <button
            onClick={() => { toggleLanguage(); setOpen(false); }}
            className="mt-4 border border-white/30 px-3 py-1 rounded text-xs w-fit hover:border-accent-green hover:text-accent-green transition"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>
      )}
    </header>
  );
}
