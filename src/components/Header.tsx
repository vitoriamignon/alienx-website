import { useState } from "react";
import logoAlienx from "../assets/logo-alienx.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b border-white/10">
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
        <nav className="hidden md:flex items-center gap-6 text-white text-sm w-full">
          <a href="#sobre" className="hover:text-green-400 transition">
            Sobre
          </a>
          <a href="#jogos" className="hover:text-green-400 transition">
            Jogos
          </a>
          <a href="#presskit" className="hover:text-green-400 transition">
            Presskit
          </a>
          <a href="#contato" className="hover:text-green-400 transition">
            Contato
          </a>

          {/* IDIOMA */}
         <button className="ml-auto border border-white/30 px-3 py-1 rounded text-xs hover:border-green-400 hover:text-green-400 transition">
          PT | EN
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
        <nav className="md:hidden flex flex-col gap-4 px-6 py-4 text-white bg-black border-t border-white/10">
          <a onClick={() => setOpen(false)} href="#sobre">Sobre</a>
          <a onClick={() => setOpen(false)} href="#jogos">Jogos</a>
          <a onClick={() => setOpen(false)} href="#presskit">Presskit</a>
          <a onClick={() => setOpen(false)} href="#contato">Contato</a>

          <button className="mt-4 border border-white/30 px-3 py-1 rounded text-xs w-fit">
            PT | EN
          </button>
        </nav>
      )}
    </header>
  );
}
