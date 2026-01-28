import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se existir um 'hash' na URL (ex: #jogos), NÃO rola para o topo.
    // Isso permite que o HashLink faça o trabalho dele de levar até a seção.
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Adicionamos 'hash' aqui para o React monitorar essa mudança também

  return null;
}