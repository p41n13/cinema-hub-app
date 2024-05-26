export interface TvShow {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;
  coverUrl: string;
  trailerUrl: string;
  userScore: number;
  genres: string[];
  isTrending: boolean;
}
