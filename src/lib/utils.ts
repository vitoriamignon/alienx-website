import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Translations = {
  genres?: Record<string, string>;
};

export function translateGenre(genre: string | string[], t: Translations): string {
  if (!t.genres) return Array.isArray(genre) ? genre.join('/') : genre;

  const translateSingle = (g: string): string => {
    const normalizedGenre = g.toLowerCase().replace(/\s*\/\s*/g, '-');
    return t.genres![normalizedGenre] || g;
  };

  if (Array.isArray(genre)) {
    return genre.map(translateSingle).join('/');
  }

  return translateSingle(genre);
}
