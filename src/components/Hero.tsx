import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full Bleed with Light Bloom */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-110 contrast-105"
        style={{
          backgroundImage: `url('/assets/hero-bg.jpg')`,
          filter: 'brightness(1.1) contrast(1.05) saturate(1.1)'
        }}
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />

      {/* Light Bloom Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-red/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-yellow/10 rounded-full blur-2xl opacity-25"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Text */}
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-textPrimary leading-tight mb-8 drop-shadow-lg">
            {t.hero.title}
          </h1>
        </div>

        {/* Subtle accent line */}
        <div className="w-24 h-1 bg-accent-green mx-auto rounded-full animate-fade-in-delay"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-textSecondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-textSecondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
