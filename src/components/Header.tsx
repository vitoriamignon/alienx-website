import logoAlienx from "../assets/logo-alienx.png";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10">
      <div className="relative w-full px-4 py-4">

        {/* Menu à esquerda */}
        <nav className="flex items-center gap-8 text-sm text-textSecondary">
          <a href="/#games" className="hover:text-white transition">
            Games
          </a>
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/#contact" className="hover:text-white transition">
            Contact
          </a>
          <a href="/presskit" className="hover:text-white transition">
            Presskit
          </a>
        </nav>

        {/* Logo centralizada */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            src={logoAlienx}
            alt="AlienX Game Studio"
            className="h-6 md:h-7"
          />
        </div>

        {/* Idioma à direita */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-textSecondary">
          <button className="hover:text-white transition">PT</button>
          <span className="mx-1">|</span>
          <button className="hover:text-white transition">EN</button>
        </div>

      </div>
    </header>
  );
}
