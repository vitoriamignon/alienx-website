import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import logoAlienx from "../assets/logo-alienx.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Estilo padrão para os links de texto (Cor Verde + Brilho Neon)
  const navLinkClass = "hover:text-accent-green transition-all duration-300 hover:drop-shadow-[0_0_8px_#B6FF2E]";

  return (
    <header className="w-full bg-background border-b border-white/10 fixed top-0 left-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="relative flex items-center h-16 px-4 gap-6 max-w-7xl mx-auto">

        {/* MENU HAMBÚRGUER — MOBILE */}
        <button
          className="text-white text-2xl md:hidden transition-colors hover:text-accent-green hover:drop-shadow-[0_0_5px_#B6FF2E]"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* MENU DESKTOP — ESQUERDA */}
        <nav className="hidden md:flex items-center gap-6 text-textPrimary text-sm w-full font-poppins font-medium">
          {/* Link para a Página ABOUT (Rota) */}
          <Link to="/about" className={navLinkClass}>
            {t.nav.about}
          </Link>

          {/* Link para a Seção JOGOS (Âncora na Home com / na frente) */}
          <a href="/#jogos" className={navLinkClass}>
            {t.nav.games}
          </a>

          {/* Link para a Página PRESSKIT (Rota) */}
          <Link to="/presskit" className={navLinkClass}>
            {t.nav.presskit}
          </Link>

          {/* Link para a Seção CONTATO (Âncora na Home com / na frente) */}
          <Link to="/contact" className={navLinkClass}>
                {t.nav.contact}
              </Link>

          {/* IDIOMA - Botão com borda brilhante */}
          <button
            onClick={toggleLanguage}
            className="ml-auto border border-white/30 px-3 py-1 rounded text-xs transition-all duration-300 font-bold hover:border-accent-green hover:text-accent-green hover:shadow-[0_0_10px_#B6FF2E] hover:bg-accent-green/10"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>

        {/* LOGO — SEMPRE CENTRALIZADA */}
        <Link 
          to="/" 
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
            <img
              src={logoAlienx}
              alt="AlienX"
              // Efeito Neon na Logo: Drop Shadow Verde + Brilho Aumentado
              className="h-8 transition-all duration-300 hover:drop-shadow-[0_0_15px_#B6FF2E] hover:brightness-110 hover:-translate-y-0.5"
            />
        </Link>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 py-4 text-textPrimary bg-surface border-t border-white/10 shadow-xl">
          <Link onClick={() => setOpen(false)} to="/about" className={navLinkClass}>
            {t.nav.about}
          </Link>
          <a onClick={() => setOpen(false)} href="/#jogos" className={navLinkClass}>
            {t.nav.games}
          </a>
          <Link onClick={() => setOpen(false)} to="/presskit" className={navLinkClass}>
            {t.nav.presskit}
          </Link>
          <a onClick={() => setOpen(false)} href="/#contato" className={navLinkClass}>
            {t.nav.contact}
          </a>

          <button
            onClick={() => { toggleLanguage(); setOpen(false); }}
            className="mt-4 border border-white/30 px-3 py-1 rounded text-xs w-fit transition-all duration-300 font-bold hover:border-accent-green hover:text-accent-green hover:shadow-[0_0_10px_#B6FF2E]"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </nav>
      )}
    </header>
  );
}