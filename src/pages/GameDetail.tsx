import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { games } from '../data/games';
import { useLanguage } from '../contexts/LanguageContext';
import { translateGenre } from '../lib/utils';
import { ShoppingCart, X } from "lucide-react";

interface StoreLink {
  platform: 'Steam' | 'Epic' | 'PlayStation' | 'Xbox' | 'GooglePlay';
  url: string;
}
interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
}

interface GameData {
  id: string;
  title: string;
  developer: string;
  releaseDate: string;
  platforms: string[];
  status: 'released' | 'in-development' | 'coming-soon' | 'demo';
  description: string;
  longDescription: string;
  image: string;
  gallery: GalleryItem[];
  genre: string;
  stores?: StoreLink[];
}

function getGameData(slug: string): GameData | null {
  const gameFromData = games.find(game => game.id === slug);
  if (!gameFromData) return null;

  const gameDetails: Record<string, Omit<GameData, 'id' | 'title' | 'image' | 'status' | 'platforms' | 'releaseDate' | 'longDescription'>> = {
    'star-bind': {
      developer: 'Alien Games Studio',
      genre: 'action-adventure',
      description: 'Uma aventura espacial épica em um universo aberto',
        stores: [
          {platform: 'Steam',
          url: 'https://store.steampowered.com/app/2760830/Star_Bind/'
          }
      ],
      gallery: [
        { type: 'video', url: '/assets/games/star-bind/gallery/video.mp4', thumbnail: '/assets/games/star-bind/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/star-bind/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/star-bind/gallery/img2.avif' },
        { type: 'image', url: '/assets/games/star-bind/gallery/img3.avif' },
        { type: 'image', url: '/assets/games/star-bind/gallery/img4.avif' },
        { type: 'image', url: '/assets/games/star-bind/gallery/img5.avif' },
      ],
    },
    'vapor-stories': {
      developer: 'Alien Games Studio',
      genre: 'action-adventure',
      description: 'Uma história de mistério e aventura em um mundo steampunk',
        stores: [
          {platform: 'Steam',
          url: '#'
          }
      ],
      gallery: [
        { type: 'video', url: '/assets/games/vapor-stories/gallery/video.mp4', thumbnail: '/assets/games/vapor-stories/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/vapor-stories/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/vapor-stories/gallery/img2.avif' },
        { type: 'image', url: '/assets/games/vapor-stories/gallery/img3.avif' },
        { type: 'image', url: '/assets/games/vapor-stories/gallery/img4.avif' }
      ]
    },
    'cell-wars': {
      developer: 'Alien Games Studio',
      genre: 'strategy',
      description: 'Construa, lute e domine em um mundo microscópico',
       stores: [
        {platform: 'GooglePlay',
        url: 'https://play.google.com/store/apps/details?id=com.AlienX.CellWars&hl=pt_BR'
        }
      ],
      gallery: [
        { type: 'video', url: '/assets/games/cell-wars/gallery/video.mp4', thumbnail: '/assets/games/cell-wars/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/cell-wars/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/cell-wars/gallery/img2.avif' },
        { type: 'image', url: '/assets/games/cell-wars/gallery/img3.avif' },
        { type: 'image', url: '/assets/games/cell-wars/gallery/img4.avif' },
        { type: 'image', url: '/assets/games/cell-wars/gallery/img5.avif' }
      ]
    },
    'eco-city-planner': {
      developer: 'Alien Games Studio',
      genre: 'simulation',
      description: 'Construa a cidade sustentável do futuro',
       stores: [
        {platform: 'Steam',
        url: 'https://store.steampowered.com/app/3908930/Eco_City_Planner/'
        }
     ],
      gallery: [
        { type: 'video', url: '/assets/games/eco-city-planner/gallery/video.mp4', thumbnail: '/assets/games/eco-city-planner/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/eco-city-planner/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/eco-city-planner/gallery/img2.avif' },
        { type: 'image', url: '/assets/games/eco-city-planner/gallery/img3.avif' },
        { type: 'image', url: '/assets/games/eco-city-planner/gallery/img4.avif' },
        { type: 'image', url: '/assets/games/eco-city-planner/gallery/img5.avif' },
        { type: 'image', url: '/assets/games/eco-city-planner/gallery/img6.avif' }
      ]
      
    },
    'hero-vs-1000': {
      developer: 'Alien Games Studio',
      genre: 'action',
      description: 'Um herói contra milhares de inimigos',
      stores: [
        {platform: 'Steam',
        url: 'https://store.steampowered.com/app/2981760/Hero_Vs_1000/'
        }
     ],
      gallery: [
        { type: 'video', url: '/assets/games/hero-vs-1000/gallery/video.mp4', thumbnail: '/assets/games/hero-vs-1000/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/hero-vs-1000/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/hero-vs-1000/gallery/img2.avif' },
        { type: 'image', url: '/assets/games/hero-vs-1000/gallery/img3.avif' },
        { type: 'image', url: '/assets/games/hero-vs-1000/gallery/img4.avif' },
        { type: 'image', url: '/assets/games/hero-vs-1000/gallery/img5.avif' },
        { type: 'image', url: '/assets/games/hero-vs-1000/gallery/img6.avif' },
        { type: 'image', url: '/assets/games/hero-vs-1000/gallery/img7.avif' },
        { type: 'image', url: '/assets/games/hero-vs-1000/gallery/img8.avif' }
      ]
    },
    'office-hero': {
      developer: 'Alien Games Studio',
      genre: 'adventure',
      description: 'A rotina do escritório nunca foi tão heroica',
      stores: [
        {platform: 'Steam',
        url: '#'
        }
    ],
      gallery: [
        { type: 'video', url: '/assets/games/office-hero/gallery/video.mp4', thumbnail: '/assets/games/office-hero/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/office-hero/gallery/img1.avif' },
        { type: 'image', url: '/assets/games/office-hero/gallery/img2.avif' },
        { type: 'image', url: '/assets/games/office-hero/gallery/img3.avif' },
        { type: 'image', url: '/assets/games/office-hero/gallery/img4.avif' }
      ]
    }
  };

  const details = gameDetails[slug] || {
    developer: 'Alien Games Studio',
    genre: 'Ação/Aventura',
    description: 'Um jogo incrível da Alien Games',
    gallery: [{ type: 'image', url: '/assets/games/StarBindCardImage.png' }],
  };

  return {
    ...gameFromData,
    ...details,
    longDescription: '', // Will be set from translations
  };
}

function getStatusColor(status: string) {
  switch (status) {
    case 'released':
      return 'bg-accent-green text-background';
    case 'in-development':
      return 'bg-sky-500 text-white';
    case 'coming-soon':
      return 'bg-accent-red text-textPrimary';
    case 'demo':
      return 'bg-purple-600 text-white';
    default:
      return 'bg-surface text-textPrimary';
  }
}

export function GameDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [game, setGame] = useState<GameData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  // Fallback translations in case they're not defined in the translation files
  const translations = {
    status: {
      released: t.gameDetail?.status?.released || 'Disponível',
      inDevelopment: t.gameDetail?.status?.inDevelopment || 'Em Desenvolvimento',
      comingSoon: t.gameDetail?.status?.comingSoon || 'Em Breve',
      demo: t.gameDetail?.status?.demo || 'Versão Demo'
    },
    availableOn: t.gameDetail?.availableOn || 'Disponível em:',
    releaseDate: t.gameDetail?.releaseDate || 'Lançamento:',
    aboutGame: t.gameDetail?.aboutGame || 'Sobre o Jogo',
    developer: t.gameDetail?.developer || 'Desenvolvedor',
    genre: t.gameDetail?.genre || 'Gênero',
    platforms: t.gameDetail?.platforms || 'Plataformas',
    navigation: t.gameDetail?.navigation || {
      previous: 'Anterior',
      next: 'Próximo',
      viewImage: 'Ver imagem',
      viewVideo: 'Ver vídeo'
    },
    media: t.gameDetail?.media || 'Mídia',
    loading: t.loading || 'Carregando...'
  };

const formatDate = (dateString?: string) => {
  if (!dateString) return translations.status.comingSoon;

  const parsedDate = new Date(dateString);

  if (isNaN(parsedDate.getTime())) {
    return translations.status.comingSoon;
  }

  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    timeZone: 'UTC'
  };

  const language = localStorage.getItem('language') || 'pt';

  return parsedDate.toLocaleDateString(
    language === 'pt' ? 'pt-BR' : 'en-US',
    options
  );
};

  useEffect(() => {
    const timer = setTimeout(() => {
      const gameData = getGameData(slug || '');
      if (gameData) {
        const gameKey = slug?.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()) || '';        gameData.longDescription = (t.games as any)[gameKey]?.longDescription || '';
      }
      setGame(gameData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [slug, t]);

  if (loading || !game) {
    return (
      <div className="min-h-screen bg-background text-textPrimary flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 border-4 border-accent-green border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-textSecondary">{translations.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-textPrimary">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${game.image})`, filter: 'brightness(0.4)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 h-full flex items-end pb-16 md:pb-24 relative z-10">
          <div className="max-w-4xl w-full">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(game.status)}`}>
                {game.status === 'released'
                  ? translations.status.released
                  : game.status === 'in-development'
                  ? translations.status.inDevelopment
                  : game.status === 'coming-soon'
                  ? translations.status.comingSoon
                  : translations.status.demo}
              </span>
              <span className="text-textSecondary">•</span>
              <span className="text-textSecondary">{translateGenre(game.genre, t)}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">{game.title}</h1>
            
            {/* --- INÍCIO: BOTÃO ÚNICO (COM LÓGICA DE MODAL) --- */}
            {game.stores && game.stores.length > 0 && (
              <div className="mt-6 mb-8">
                <a
                  href={game.stores[0].url}
                  onClick={(e) => {
                    // LÓGICA: Se o link for '#', abre o modal e não muda de página
                    if (game.stores![0].url === '#') {
                      e.preventDefault();
                      setShowModal(true);
                    }
                  }}
                  target={game.stores[0].url === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    w-16 h-12 
                    rounded-lg
                    bg-[#B6FF2E] 
                    text-black
                    shadow-[0_0_15px_rgba(182,255,46,0.4)]
                    hover:brightness-110 
                    hover:scale-105
                    active:scale-95
                    cursor-pointer
                    transition-all duration-300
                  "
                  aria-label="Comprar Jogo"
                >
                  <ShoppingCart size={24} strokeWidth={2.5} />
                </a>
              </div>
            )}

            {game.platforms && game.platforms.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-textSecondary">{translations.availableOn}</span>
                  <div className="flex gap-2">
                    {game.platforms.map((platform, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-surface text-xs rounded border border-textPrimary/20"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {game.releaseDate && <div className="mt-4 text-textSecondary">{translations.releaseDate} {formatDate(game.releaseDate)}</div>}
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 -mt-16">
        <div className="container mx-auto px-4">
          {/* Seção de Descrição */}
          <section className="bg-surface rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">{translations.aboutGame}</h2>
            <p className="text-textSecondary leading-relaxed">{game.longDescription}</p>
          </section>

          {/* Seção de Mídia */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{translations.media}</h2>
            
            {/* Visualização principal da mídia */}
            <div className="relative w-full h-64 md:h-96 bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden mb-4">
              {game.gallery[selectedImage]?.type === 'video' ? (
                <video 
                  src={game.gallery[selectedImage].url} 
                  className="w-full h-full object-contain" 
                  controls
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <img 
                  src={game.gallery[selectedImage]?.url} 
                  alt={`${translations.navigation.viewImage} ${selectedImage + 1}`}
                  className="w-full h-full object-contain cursor-pointer"
                  onClick={() => setSelectedImage(selectedImage)}
                />
              )}
              
              {/* Navegação entre as mídias */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prev => (prev === 0 ? game.gallery.length - 1 : prev - 1));
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                aria-label={translations.navigation.previous}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(prev => (prev === game.gallery.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                aria-label={translations.navigation.next}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Indicador de posição */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                {selectedImage + 1} / {game.gallery.length}
              </div>
            </div>
            
            {/* Miniaturas */}
            <div className="flex space-x-2 md:space-x-3 overflow-x-auto py-2 px-1 -mx-1 scrollbar-hide">
              {game.gallery.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-2 ring-accent-green transform scale-105'
                      : 'opacity-70 hover:opacity-100 ring-1 ring-textPrimary/20'
                  }`}
                  aria-label={`${item.type === 'video' ? translations.navigation.viewVideo : translations.navigation.viewImage} ${index + 1}`}
                >
                  <img 
                    src={item.thumbnail || item.url} 
                    alt={`${item.type === 'video' ? translations.navigation.viewVideo : translations.navigation.viewImage} ${index + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
{/* --- MODAL DE "EM DESENVOLVIMENTO" --- */}
{showModal && (
        // O fundo escuro (clicar nele fecha o modal)
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          {/* A caixa do modal (clicar nela NÃO fecha) */}
          <div 
            className="bg-surface border border-white/10 rounded-2xl p-8 max-w-md w-full relative shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Botão X para fechar */}
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-textSecondary hover:text-[#B6FF2E] transition-colors"
            >
              <X size={24} />
            </button>

            {/* Conteúdo */}
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

              {/* BOTÃO ENTENDI - COM O NOVO ESTILO HOVER VERDE */}
              <button
                onClick={() => setShowModal(false)}
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
    </div>
  );
}
