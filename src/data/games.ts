export interface Game {
  description: ReactNode;
  id: string;
  title: string;
  image: string;
  status: 'released' | 'in-development' | 'coming-soon';
  platforms: string[];
  releaseDate?: string;
}

export const games: Game[] = [
  {
    id: "star-bind",
    title: "Star Bind",
    image: "/assets/games/StarBindCardImage.png",
    status: "released",
    platforms: ["PC", "Mobile"],
    releaseDate: "2024",
  },
  {
    id: "vapor-stories",
    title: "Vapor Stories",
    image: "/assets/games/VaporStoriesCardImage.PNG",
    status: "released",
    platforms: ["PC", "PS5"],
    releaseDate: "2024",
  },
  {
    id: "cell-wars",
    title: "Cell Wars",
    image: "/assets/games/CellWarsCardImage.PNG",
    status: "released",
    platforms: ["PC", "Xbox"],
    releaseDate: "2024",
  },
  {
    id: "eco-city-planner",
    title: "Eco City Planner",
    image: "/assets/games/ecocityplanner.png",
    status: "released",
    platforms: ["PC", "Mobile"],
    releaseDate: "2024",
  },
  {
    id: "hero-vs-1000",
    title: "Hero vs 1000",
    image: "/assets/games/herovs1000.png",
    status: "in-development",
    platforms: ["PC", "PS5"],
  },
  {
    id: "office-hero",
    title: "Office Hero",
    image: "/assets/games/officehero.png",
    status: "coming-soon",
    platforms: ["PC", "Mobile", "Switch"],
  },
];
