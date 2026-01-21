import { Link } from "react-router-dom";
import { games } from "../data/games";
import { useLanguage } from "../contexts/LanguageContext";
import logoAlienx from "../assets/logo-alienx.png";

export default function Presskit() {
  const { t } = useLanguage();

  const gridClasses =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch";

  const cardBase =
    "h-full bg-surface border border-[rgba(255,255,255,0.08)] rounded-lg " +
    "p-4 md:p-6 transition-colors flex flex-col hover:bg-surface/80";

  const ctaClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded transition-colors " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-green/60";

  const actionsRow =
    "mt-auto flex flex-col gap-2 md:flex-row md:items-center md:gap-3";

  const imageAspect = "aspect-[4/3] md:aspect-[16/9]";

  const gameTranslationKey = {
    "cell-wars": "cellWars",
    "office-hero": "officeHero",
    "hero-vs-1000": "heroVs1000",
    "star-bind": "starBind",
    "eco-city-planner": "ecoCityPlanner",
    "vapor-stories": "vaporStories",
  } as const;

  // 🔹 LINKS EXTERNOS DE PRESSKIT (só colocar os jogos que tiverem)
  const presskitLinks: Record<string, string> = {
    "star-bind": "https://impress.games/press-kit/alienx/star-bind",
    "eco-city-planner": "https://impress.games/press-kit/alienx/eco-city-planner",
    "hero-vs-1000": "https://impress.games/press-kit/alienx/hero-vs-1000",
    // se não tiver presskit externo, é só NÃO colocar aqui
  };

  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-textPrimary mb-8 md:mb-12 text-center font-poppins">
          {t.presskit.title}
        </h1>

        <div className={gridClasses}>
          {/* Company Card */}
          <div className={cardBase}>
            <div className={`${imageAspect} w-full mb-4`}>
              <img
                src={logoAlienx}
                alt="AlienX Game Studio"
                className="w-full h-full object-contain rounded"
                loading="lazy"
              />
            </div>

            <h2 className="text-xl font-bold text-textPrimary mb-3">
              AlienX Game Studio
            </h2>

            <p className="text-sm text-textSecondary mb-6 leading-relaxed">
              {t.presskit.companyDescription}
            </p>

            <div className={actionsRow}>
              <Link
                to="/about"
                className={`${ctaClasses} bg-accent-green text-black hover:bg-accent-green/80 w-full md:w-90`}
              >
                {t.presskit.viewDetails}
              </Link>
            </div>
          </div>

          {/* Game Cards */}
          {games.map((game) => {
            const translationKey =
              gameTranslationKey[game.id as keyof typeof gameTranslationKey];

            const externalPresskit = presskitLinks[game.id];

            return (
              <div key={game.id} className={cardBase}>
                <div className={`${imageAspect} w-full mb-4`}>
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover rounded"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-xl font-bold text-textPrimary mb-2 break-words">
                  {game.title}
                </h2>

                <p className="text-sm text-textSecondary mb-6 leading-relaxed">
                  {t.games?.[translationKey as keyof typeof t.games]
                    ?.description ?? ""}
                </p>

                {externalPresskit ? (
                  <a
                    href={externalPresskit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${ctaClasses} bg-accent-green text-black hover:bg-accent-green/80 w-full md:w-auto mt-auto`}
                  >
                    {t.presskit.viewDetails}
                  </a>
                ) : (
                  <Link
                    to={`/games/${game.id}`}
                    className={`${ctaClasses} bg-accent-green text-black hover:bg-accent-green/80 w-full md:w-auto mt-auto`}
                  >
                    {t.presskit.viewDetails}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
