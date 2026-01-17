import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../data/games';
import { games } from '../data/games';
import { useLanguage } from '../contexts/LanguageContext';

interface GameCardProps {
  gameId: string;
}

export default function GameCard({ gameId }: GameCardProps) {
  const { t } = useLanguage();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      // Mock API call
      const foundGame = games.find(g => g.id === gameId);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 100));
      setGame(foundGame || null);
      setLoading(false);
    };
    fetchGame();
  }, [gameId]);

  const getGameKey = (id: string) => {
    const mapping: { [key: string]: string } = {
      'star-bind': 'starBind',
      'vapor-stories': 'vaporStories',
      'cell-wars': 'cellWars',
      'eco-city-planner': 'ecoCityPlanner',
      'hero-vs-1000': 'heroVs1000',
      'office-hero': 'officeHero',
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

  if (loading || !game) {
    return (
      <div className="group bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/10 hover:border-accent-green/50 animate-pulse">
        <div className="hidden md:flex">
          <div className="w-[510px] h-[270px] bg-gray-700"></div>
          <div className="flex-1 p-8 space-y-4">
            <div className="h-6 bg-gray-700 rounded w-1/4"></div>
            <div className="h-8 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="flex gap-2">
              <div className="h-6 bg-gray-700 rounded w-16"></div>
              <div className="h-6 bg-gray-700 rounded w-16"></div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="w-[510px] h-[270px] bg-gray-700"></div>
          <div className="p-6 space-y-3">
            <div className="h-5 bg-gray-700 rounded w-1/3"></div>
            <div className="h-6 bg-gray-700 rounded w-2/3"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="flex gap-2">
              <div className="h-5 bg-gray-700 rounded w-12"></div>
              <div className="h-5 bg-gray-700 rounded w-12"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link 
      to={`/games/${game.id}`}
      className="block group bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/10 hover:border-accent-green/50"
    >
      {/* Desktop: Horizontal Layout */}
      <div className="hidden md:flex">
        {/* Image Section */}
        <div className="relative w-[510px] h-[270px]">
          <img
            src={game.image}
            alt={game.title}
            className="w-[510px] h-[270px] object-fill "
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          {/* Status Badge */}
          <div
            className={`self-start px-4 py-2 rounded text-sm font-bold mb-4 ${getStatusColor(
              game.status
            )}`}
          >
            {getStatusText(game.status)}
          </div>

          {/* Title */}
          <h3 className="text-3xl font-poppins font-bold text-textPrimary mb-3 group-hover:text-accent-green transition-colors duration-300">
            {game.title}
          </h3>

          {/* Description */}
          <p className="text-textSecondary text-base leading-relaxed mb-6 flex-grow">
            {t.games[getGameKey(game.id) as keyof typeof t.games]?.description}
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
        <div className="relative w-[510px] h-[270px]">
          <img
            src={game.image}
            alt={game.title}
            className="w-[510px] h-[270px] object-cover"
          />
          {/* Overlay for mobile */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Status Badge */}
          <div
            className={`inline-block px-3 py-1 rounded text-xs font-bold mb-3 ${getStatusColor(
              game.status
            )}`}
          >
            {getStatusText(game.status)}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-poppins font-bold text-textPrimary mb-3 group-hover:text-accent-green transition-colors duration-300">
            {game.title}
          </h3>

          {/* Description */}
          <p className="text-textSecondary text-sm leading-relaxed mb-4">
            {t.games[getGameKey(game.id) as keyof typeof t.games]?.description}
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
    </Link>
  );
}
