import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Presskit from "./pages/Presskit";
import { LanguageProvider } from "./contexts/LanguageContext";
import Contact from "./pages/Contact";
import { GameDetail } from "./pages/GameDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Desenvolvedores from "./pages/Desenvolvedores";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        
        {/* ADICIONE ESTA LINHA AQUI: */}
        <ScrollToTop />

        <Routes>
          {/* Rota da Home */}
          <Route 
            path="/" 
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            } 
          />

          {/* Rota Sobre*/}
          <Route path="/about"
           element={
            <MainLayout>
             <About />
            </MainLayout>
             }
              />

             {/* Rota  Presskit */}
          <Route 
            path="/presskit" 
            element={
              <MainLayout>
                <Presskit />
              </MainLayout>
            } 
          />  
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
          <Route
            path="/privacy"
            element={
              <MainLayout>
                <PrivacyPolicy />
              </MainLayout>
            }
          />
          <Route
            path="/desenvolvedores"
            element={
              <MainLayout>
                <Desenvolvedores />
              </MainLayout>
            }
          />
          {/* Rota Dinâmica para Detalhes do Jogo */}
          <Route
            path="/games/:slug"
            element={
              <MainLayout>
                <GameDetail />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;