import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que o caminho (pathname) mudar, joga a tela para o topo (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}