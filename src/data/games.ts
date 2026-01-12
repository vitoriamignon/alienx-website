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
    id: 'cosmic-void',
    title: 'Cosmic Void',
    description: 'Uma jornada épica através do vazio cósmico, onde cada decisão molda o destino da galáxia.',
    image: '/assets/games/cosmic-void.jpg',
    status: 'in-development',
    platforms: ['PC', 'PS5', 'Xbox'],
  },
  {
    id: 'neural-shadows',
    title: 'Neural Shadows',
    description: 'Mergulhe na mente coletiva em um thriller cyberpunk onde realidade e ilusão se confundem.',
    image: '/assets/games/neural-shadows.jpg',
    status: 'coming-soon',
    platforms: ['PC', 'PS5'],
  },
  {
    id: 'echoes-of-eternity',
    title: 'Echoes of Eternity',
    description: 'Explore ruínas antigas e desvende mistérios que ecoam através do tempo.',
    image: '/assets/games/echoes-eternity.jpg',
    status: 'released',
    platforms: ['PC', 'Switch', 'Mobile'],
    releaseDate: '2024',
  },
];
