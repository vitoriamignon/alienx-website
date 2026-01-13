export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'released' | 'in-development' | 'coming-soon';
  platforms: string[];
  releaseDate?: string;
}

export const games: Game[] = [
  {
    id: "star-bind",
    title: "Star Bind",
    description:
      "Uma aventura estelar onde você conecta estrelas para salvar a galáxia em uma jornada épica.",
    image: "/assets/games/StarBindCardImage.png",
    status: "released",
    platforms: ["PC", "Mobile"],
    releaseDate: "2024",
  },
  {
    id: "vapor-stories",
    title: "Vapor Stories",
    description:
      "Histórias envolventes em um mundo de vapor e mistério, explorando narrativas profundas.",
    image: "/assets/games/VaporStoriesCardImage.PNG",
    status: "released",
    platforms: ["PC", "PS5"],
    releaseDate: "2024",
  },
  {
    id: "cell-wars",
    title: "Cell Wars",
    description:
      "Batalhas épicas em um universo celular, onde células lutam por supremacia.",
    image: "/assets/games/CellWarsCardImage.PNG",
    status: "released",
    platforms: ["PC", "Xbox"],
    releaseDate: "2024",
  },
];
