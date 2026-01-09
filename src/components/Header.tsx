export function Header(){
    return (
        <header>
          <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          ALIENX
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-textSecondary">
          <li>
            <a href="/#games" className="hover:text-textPrimary transition">
              Games
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-textPrimary transition">
              About
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:text-textPrimary transition">
              Contact
            </a>
          </li>
          <li>
            <a href="/presskit" className="hover:text-textPrimary transition">
              Presskit
            </a>
          </li>
        </ul>
      </nav>
        </header>
    )
}