import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Game } from '../data/games';
import { games } from '../data/games';
import { useLanguage } from '../contexts/LanguageContext';
import { ShoppingCart, X } from 'lucide-react'; // 1. IMPORT NOVO

interface GameCardProps {
  gameId: string;
}

export default function GameCard({ gameId }: GameCardProps) {
  const { t } = useLanguage();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  // 2. ESTADO NOVO DO MODAL
  const [showModal, setShowModal] = useState(false);

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
        return 'bg-sky-500 text-white';
      case 'coming-soon':
        return 'bg-accent-red text-white';
      case 'demo':
        return 'bg-purple-600 text-white';
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
      case 'demo':
        return t.gameCard.demo || 'Versão Demo';
      default:
        return status;
    }
  };

  // 3. LÓGICA DO CLIQUE NO CARRINHO
  const handleCartClick = (e: React.MouseEvent, storeUrl?: string) => {
    e.preventDefault(); // Impede que o Link do card seja ativado
    e.stopPropagation();

    if (!storeUrl || storeUrl === '#') {
      setShowModal(true);
    } else {
      window.open(storeUrl, '_blank');
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

  // 4. PEGAR LINK DA LOJA
  const primaryStoreUrl = game.stores && game.stores.length > 0 ? game.stores[0].url : undefined;

  return (
    <>
      <Link 
        to={`/games/${game.id}`}
        className="block group bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/10 hover:border-accent-green/50 relative"
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
              className={`self-start px-4 py-2 rounded text-sm font-bold mb-4 uppercase ${getStatusColor(
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
            <div className="flex items-center justify-between mt-auto">
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

              {/* 5. BOTÃO DESKTOP (Substituindo a data ou ao lado dela) */}
              {primaryStoreUrl && (
                <button
                  onClick={(e) => handleCartClick(e, primaryStoreUrl)}
                  className="
                    flex items-center justify-center
                    w-12 h-10 
                    rounded-lg
                    bg-[#B6FF2E] 
                    text-black
                    shadow-[0_0_10px_rgba(182,255,46,0.3)]
                    hover:scale-105
                    hover:brightness-110
                    active:scale-95
                    transition-all duration-300
                    z-20
                  "
                >
                  <ShoppingCart size={20} strokeWidth={2.5} />
                </button>
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
              className={`inline-block px-3 py-1 rounded text-xs font-bold mb-3 uppercase ${getStatusColor(
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
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {game.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="px-2 py-1 bg-black/30 text-textSecondary text-xs rounded border border-white/20"
                  >
                    {platform}
                  </span>
                ))}
              </div>

               {/* 6. BOTÃO MOBILE */}
               {primaryStoreUrl && (
                <button
                  onClick={(e) => handleCartClick(e, primaryStoreUrl)}
                  className="
                    flex items-center justify-center
                    w-10 h-9 
                    rounded-lg
                    bg-[#B6FF2E] 
                    text-black
                    shadow-[0_0_10px_rgba(182,255,46,0.3)]
                    active:scale-95
                    transition-all duration-300
                    z-20 ml-2
                  "
                >
                  <ShoppingCart size={18} strokeWidth={2.5} />
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* 7. MODAL (Fora do Link para evitar bugs de clique) */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowModal(false);
          }}
        >
          <div 
            className="bg-surface border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-2xl animate-fade-in-up"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }} 
          >
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowModal(false);
              }}
              className="absolute top-4 right-4 text-textSecondary hover:text-[#B6FF2E] transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#B6FF2E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-[#B6FF2E] w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                Em Desenvolvimento
              </h3>
              
              <p className="text-textSecondary text-lg mb-8 leading-relaxed">
                Este jogo ainda está sendo preparado com muito carinho pela nossa equipe e não possui data prevista de lançamento.
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowModal(false);
                }}
                className="
                  border border-white/30 
                  text-white 
                  font-medium 
                  py-3 px-10 
                  rounded-xl 
                  transition-all duration-300 
                  hover:border-[#B6FF2E] 
                  hover:text-[#B6FF2E] 
                  hover:bg-[#B6FF2E]/5
                  hover:shadow-[0_0_15px_rgba(182,255,46,0.2)]
                "
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}