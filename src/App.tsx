import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Presskit from "./pages/Presskit";
import { LanguageProvider } from "./contexts/LanguageContext";
import Contact from "./pages/Contact";
import { GameDetail } from "./pages/GameDetail";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
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
          <Route path="/about" element={<About />} />

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