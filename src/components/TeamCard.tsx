import { useLanguage } from "../contexts/LanguageContext";

interface TeamCardProps {
  name: string;
  roleKey: string;
  image: string;
}

export default function TeamCard({ name, roleKey, image }: TeamCardProps) {
  const { t } = useLanguage();

  const getRoleLabel = () => {
    const roles = t.aboutPage.team.roles;
    return roles[roleKey as keyof typeof roles] || roleKey;
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-surface border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-green/10">
      
      {/* Container da Imagem */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
      </div>

      {/* Conteúdo */}
      <div className="relative p-6 pt-0 -mt-8 z-10">
        <h3 className="text-xl font-bold text-textPrimary group-hover:text-accent-green transition-colors font-poppins">
          {name}
        </h3>
        
        {/* Usando a função auxiliar para o texto do cargo */}
        <p className="mt-1 text-sm font-medium text-textSecondary uppercase tracking-wider">
          {getRoleLabel()}
        </p>
        
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent-green transition-all duration-300 group-hover:w-full" />
      </div>
    </div>
  );
}