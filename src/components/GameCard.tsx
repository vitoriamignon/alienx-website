import type { Game } from '../data/games';
import { useLanguage } from '../contexts/LanguageContext';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { t } = useLanguage();

  const getGameKey = (id: string) => {
    const mapping: { [key: string]: string } = {
      'cosmic-void': 'cosmicVoid',
      'neural-shadows': 'neuralShadows',
      'echoes-of-eternity': 'echoesOfEternity'
    };
    return mapping[id] || id;
  };

  const getStatusColor = (status: Game['status']) => {
    switch (status) {
      case 'released':
        return 'bg-accent-green text-black';
      case 'in-development':
        return 'bg-accent-yellow text-black';
      case 'coming-soon':
        return 'bg-accent-red text-white';
      default:
        return 'bg-surface text-textPrimary';
    }
  };

  const getStatusText = (status: Game['status']) => {
    switch (status) {
      case 'released':
        return t.gameCard.released;
      case 'in-development':
        return t.gameCard.inDevelopment;
      case 'coming-soon':
        return t.gameCard.comingSoon;
      default:
        return status;
    }
  };

  return (
    <div className="group bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/10 hover:border-accent-green/50">
      {/* Desktop: Horizontal Layout */}
      <div className="hidden md:flex">
        {/* Image Section */}
        <div className="relative w-2/5">
          <div
            className="aspect-[4/3] bg-cover bg-center"
            style={{ backgroundImage: `url(${game.image})` }}
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          {/* Status Badge */}
          <div className={`self-start px-4 py-2 rounded text-sm font-bold mb-4 ${getStatusColor(game.status)}`}>
            {getStatusText(game.status)}
          </div>

          {/* Title */}
          <h3 className="text-3xl font-serif font-bold text-textPrimary mb-3 group-hover:text-accent-green transition-colors duration-300">
            {game.title}
          </h3>

          {/* Description */}
          <p className="text-textSecondary text-base leading-relaxed mb-6 flex-grow">
            {t.games[getGameKey(game.id) as keyof typeof t.games]?.description || game.description}
          </p>

          {/* Platforms and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              {game.platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 bg-black/30 text-textSecondary text-sm rounded border border-white/20 hover:border-accent-green hover:text-accent-green transition-colors duration-300"
                >
                  {platform}
                </span>
              ))}
            </div>

            {/* Release Date */}
            {game.releaseDate && (
              <div className="text-textSecondary text-sm">
                {game.releaseDate}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical Layout */}
      <div className="md:hidden">
        {/* Image Section */}
        <div className="relative">
          <div
            className="aspect-video bg-cover bg-center"
            style={{ backgroundImage: `url(${game.image})` }}
          />
          {/* Overlay for mobile */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Status Badge */}
          <div className={`inline-block px-3 py-1 rounded text-xs font-bold mb-3 ${getStatusColor(game.status)}`}>
            {getStatusText(game.status)}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-serif font-bold text-textPrimary mb-3 group-hover:text-accent-green transition-colors duration-300">
            {game.title}
          </h3>

          {/* Description */}
          <p className="text-textSecondary text-sm leading-relaxed mb-4">
            {t.games[getGameKey(game.id) as keyof typeof t.games]?.description || game.description}
          </p>

          {/* Platforms */}
          <div className="flex flex-wrap gap-2 mb-4">
            {game.platforms.map((platform) => (
              <span
                key={platform}
                className="px-2 py-1 bg-black/30 text-textSecondary text-xs rounded border border-white/20"
              >
                {platform}
              </span>
            ))}
          </div>

          {/* Release Date */}
          {game.releaseDate && (
            <div className="text-textSecondary text-xs">
              {t.gameCard.releasedIn} {game.releaseDate}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
