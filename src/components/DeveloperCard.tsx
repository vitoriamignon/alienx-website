import { useLanguage } from "../contexts/LanguageContext";

interface DeveloperCardProps {
  name: string;
  linkedinUrl: string;
}

export default function DeveloperCard({ name, linkedinUrl }: DeveloperCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-surface border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-green/10">
      
      {/* Conteúdo */}
      <div className="p-6">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xl font-bold text-textPrimary group-hover:text-accent-green transition-colors font-poppins text-center"
          aria-label={`LinkedIn de ${name}`}
        >
          {name}
        </a>
        
        <div className="mt-4 flex justify-center">
          <span className="inline-block px-3 py-1 text-xs font-medium text-textSecondary border border-white/20 rounded-full group-hover:border-accent-green group-hover:text-accent-green transition-colors">
            LinkedIn
          </span>
        </div>
        
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent-green transition-all duration-300 group-hover:w-full" />
      </div>
    </div>
  );
}