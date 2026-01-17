export interface Game {
  id: string;
  title: string;
  developer: string;
  releaseDate: string;
  platforms: string[];
  status: 'released' | 'in-development' | 'coming-soon';
  description: string;
  longDescription: string;
  image: string;
  genre: string;
}

export const games: Game[] = [
  {
    id: "star-bind",
    title: "Star Bind",
    developer: "Alien Games Studio",
    releaseDate: "2023-11-15",
    platforms: ["PC", "PlayStation 5", "Xbox Series X"],
    status: "released",
    description: "",
    longDescription: "",
    image: "/assets/games/star-bind/card.png",
    genre: "Ação/Aventura"
  },
  {
    id: "vapor-stories",
    title: "Vapor Stories",
    developer: "Alien Games Studio",
    releaseDate: "2024-03-22",
    platforms: ["PC", "PlayStation 5"],
    status: "released",
    description: "",
    longDescription: "",
    image: "/assets/games/vapor-stories/card.png",
    genre: "Ação/Aventura"
  },
  {
    id: "cell-wars",
    title: "Cell Wars",
    developer: "Alien Games Studio",
    releaseDate: "2024-06-15",
    platforms: ["PC", "Xbox Series X"],
    status: "in-development",
    description: "",
    longDescription: "",
    image: "/assets/games/cell-wars/card.png",
    genre: "Estratégia"
  },
  {
    id: "eco-city-planner",
    title: "Eco City Planner",
    developer: "Alien Games Studio",
    releaseDate: "2024-09-30",
    platforms: ["PC", "Mobile"],
    status: "coming-soon",
    description: "",
    longDescription: "",
    image: "/assets/games/eco-city-planner/card.png",
    genre: "Simulação"
  },
  {
    id: "hero-vs-1000",
    title: "Hero vs 1000",
    developer: "Alien Games Studio",
    releaseDate: "2024-12-10",
    platforms: ["PC", "PlayStation 5"],
    status: "in-development",
    description: "",
    longDescription: "",
    image: "/assets/games/hero-vs-1000/card.png",
    genre: "Ação"
  },
  {
    id: "office-hero",
    title: "Office Hero",
    developer: "Alien Games Studio",
    releaseDate: "2025-02-15",
    platforms: ["PC", "Mobile", "Nintendo Switch"],
    status: "coming-soon",
    description: "",
    longDescription: "",
    image: "/assets/games/office-hero/card.png",
    genre: "Aventura"
  }
];
