import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </LanguageProvider>
  );
}

export default App;
