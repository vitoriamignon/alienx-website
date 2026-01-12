import HeroSection from '../components/Hero';
import GameCard from '../components/GameCard';
import { games } from '../data/games';
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Games Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-textPrimary mb-6 tracking-wide">
              {t.home.gamesSection.title} <span className="text-accent-green">{t.home.gamesSection.titleHighlight}</span>
            </h2>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              {t.home.gamesSection.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-accent-green rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent-red rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent-yellow rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-textPrimary mb-8 tracking-wide">
            {t.home.aboutSection.title} <span className="text-accent-green">{t.home.aboutSection.titleHighlight}</span>
          </h2>

          <div className="space-y-6 text-lg text-textSecondary leading-relaxed">
            {t.home.aboutSection.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12">
            <button className="px-6 py-3 border border-textSecondary text-textSecondary hover:border-accent-green hover:text-accent-green transition-colors duration-300 rounded-lg">
              {t.home.aboutSection.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
