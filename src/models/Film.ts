export interface Film {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;
  coverUrl: string;
  trailerUrl: string;
  userScore: number;
  genres: string[];
  releaseDate: string;
  duration: string;
  isTrending: boolean;
  isFeatured: boolean;
}
