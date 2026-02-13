import { useLanguage } from "../contexts/LanguageContext";
import { HyperText } from "@/components/HyperText";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image - Full Bleed with Light Bloom */}
      <div
        className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/assets/hero-bg.png')`,
          // Removi o 'filter' antigo que deixava a imagem muito brilhante/estourada
        }}
      />

      {/* Dark Overlay Gradient - Mantive para ajudar no degradê inferior */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />

      {/* Light Bloom Effects - Mantido */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-red/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-yellow/10 rounded-full blur-2xl opacity-25"></div>
      </div>

      {/* Content - Mantido igual */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-slide-up">
            <HyperText
              duration={1000}
              animateOnHover={false}
              startOnView={true}
              className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-textPrimary leading-tight mb-8 [text-shadow:0_0_15px_#B6FF2E,0_0_30px_#B6FF2E]"           >
              {t.hero.title}
            </HyperText>
        </div>
      </div>

      {/* Scroll Indicator Interativo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group z-20"
        onClick={() => {
          // Rola suavemente para a seção de jogos
          document.getElementById('jogos')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {/* Texto que aparece no Hover */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-max text-[10px] font-bold tracking-[0.2em] text-[#B6FF2E] opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(182,255,46,0.8)]">
          ROLE PARA BAIXO
        </span>

        {/* Ícone do Mouse */}
        <div className="w-6 h-10 border-2 border-textSecondary rounded-full flex justify-center transition-all duration-300 group-hover:border-[#B6FF2E] group-hover:shadow-[0_0_15px_#B6FF2E,inset_0_0_10px_rgba(182,255,46,0.2)]">
          {/* Rodinha do Mouse */}
          <div className="w-1 h-3 bg-textSecondary rounded-full mt-2 animate-pulse transition-colors duration-300 group-hover:bg-[#B6FF2E]"></div>
        </div>
      </div>
    </section>
  );
}