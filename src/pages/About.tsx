import MainLayout from "../layouts/MainLayout";
import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/team";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <div className="bg-background min-h-screen">
        
        {/* 1. Hero Section */}
        <section className="relative pt-32 pb-20 px-6 md:px-12 animate-fade-in">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-textPrimary mb-6 font-poppins">
              {t.aboutPage.hero.title}
            </h1>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto font-sans">
              {t.aboutPage.hero.subtitle}
            </p>
          </div>
        </section>

        {/* 2. História e Trajetória */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 mb-20">
            <div className="border-l-4 border-accent-green pl-6 py-2 animate-slide-up">
              <h2 className="text-2xl font-bold text-textPrimary mb-4 uppercase tracking-widest font-poppins">
                {t.aboutPage.history.originTitle}
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed">
                {t.aboutPage.history.originText}
              </p>
            </div>
            <div className="border-l-4 border-accent-red pl-6 py-2 animate-slide-up [animation-delay:200ms]">
              <h2 className="text-2xl font-bold text-textPrimary mb-4 uppercase tracking-widest font-poppins">
                {t.aboutPage.history.trajectoryTitle}
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed">
                {t.aboutPage.history.trajectoryText}
              </p>
            </div>
          </div>

          {/* NOVA SEÇÃO: FOTO DA EQUIPE */}
          <div className="max-w-6xl mx-auto mb-20 animate-fade-in">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/assets/team/Equipe.avif" 
                alt="Equipe AlienX" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent p-8">
                <h3 className="text-2xl font-bold text-white">Nosso Time</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Cards Individuais */}
        <section className="py-10 px-6 md:px-12 bg-background relative">
          <div className="absolute inset-0 bg-surface/30 skew-y-3 transform origin-bottom-right -z-10" />
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-textPrimary inline-block relative font-poppins">
                {t.aboutPage.team.title}
                <span className="block h-1 w-full bg-accent-green mt-2 rounded-full" />
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className={`animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <TeamCard 
                    name={member.name}
                    roleKey={member.roleKey}
                    image={member.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}