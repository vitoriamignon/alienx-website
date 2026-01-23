export interface Game {
  id: string;
  title: string;
  developer: string;
  releaseDate: string;
  platforms: string[];
  status: 'released' | 'in-development' | 'coming-soon' | 'demo';
  description: string;
  longDescription: string;
  image: string;
  genre: string;
  stores?: {
    platform: 'Steam' | 'Epic' | 'PlayStation' | 'Xbox' | 'GooglePlay';
    url: string;
  }[];
}

export const games: Game[] = [
  {
    id: "star-bind",
    title: "Star Bind",
    developer: "Alien Games Studio",
    releaseDate: "breve",
    platforms: ["PC"],
    status: "coming-soon",
    description: "",
    longDescription: "",
    image: "/assets/games/star-bind/card.png",
    genre: "action-adventure",
    stores: [
      {platform: 'Steam',
      url: 'https://store.steampowered.com/app/2760830/Star_Bind/'
      }],
  },
  {
    id: "vapor-stories",
    title: "Vapor Stories",
    developer: "Alien Games Studio",
    releaseDate: "breve",
    platforms: ["PC"],
    status: "in-development",
    description: "",
    longDescription: "",
    image: "/assets/games/vapor-stories/card.png",
    genre: "action-adventure",
    stores: [
      {platform: 'Steam',
      url: '#'
      }],
  },
  {
    id: "cell-wars",
    title: "Cell Wars",
    developer: "Alien Games Studio",
    releaseDate: "2025-09-27",
    platforms: ["Android"],
    status: "released",
    description: "",
    longDescription: "",
    image: "/assets/games/cell-wars/card.png",
    genre: "strategy",
    stores: [
      {platform: 'GooglePlay',
      url: 'https://play.google.com/store/apps/details?id=com.AlienX.CellWars&hl=pt_BR'
      }],
  },
  {
    id: "eco-city-planner",
    title: "Eco City Planner",
    developer: "Alien Games Studio",
    releaseDate: "breve",
    platforms: ["PC"],
    status: "demo",
    description: "",
    longDescription: "",
    image: "/assets/games/eco-city-planner/card.png",
    genre: "simulation",
    stores: [
      {platform: 'Steam',
      url: 'https://store.steampowered.com/app/3908930/Eco_City_Planner/'
      }],
  },
  {
    id: "hero-vs-1000",
    title: "Hero vs 1000",
    developer: "Alien Games Studio",
    releaseDate: "2024-06-07",
    platforms: ["PC"],
    status: "released",
    description: "",
    longDescription: "",
    image: "/assets/games/hero-vs-1000/card.png",
    genre: "action",
    stores: [
      {platform: 'Steam',
      url: 'https://store.steampowered.com/app/2981760/Hero_Vs_1000/'
      }],
  },
  {
    id: "office-hero",
    title: "Office Hero",
    developer: "Alien Games Studio",
    releaseDate: "breve",
    platforms: ["PC"],
    status: "in-development",
    description: "",
    longDescription: "",
    image: "/assets/games/office-hero/card.png",
    genre: "adventure",
    stores: [
      {platform: 'Steam',
      url: '#'
      }],
  }
];
