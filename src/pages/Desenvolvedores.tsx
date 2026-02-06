import MainLayout from "../layouts/MainLayout";
import DeveloperCard from "../components/DeveloperCard";
import { developers } from "../data/developers";
import { useLanguage } from "../contexts/LanguageContext";

export default function Desenvolvedores() {
  const { t } = useLanguage();

  return (
    <div className="bg-background min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-textPrimary mb-6 font-poppins">
            {t.footer.developers}
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto font-sans">
            {t.desenvolvedores.description}
          </p>
        </div>
      </section>

      {/* 2. Desenvolvedores */}
      <section className="py-20 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-textPrimary inline-block relative font-poppins">
                {t.desenvolvedores.title}
                <span className="block h-1 w-full bg-accent-green mt-2 rounded-full" />
              </h2>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developers.map((developer, index) => (
              <div 
                key={index} 
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <DeveloperCard 
                  name={developer.name}
                  linkedinUrl={developer.linkedinUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
