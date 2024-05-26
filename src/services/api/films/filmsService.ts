import { Film } from '@/models/Film';
import { fetchData } from '../api';
import { ENDPOINTS } from '../api.settings';

const getFilms = async (): Promise<Film[]> => {
  const films: Film[] = await fetchData(ENDPOINTS.FILMS);

  return films;
};

const getFeaturedFilm = async (): Promise<Film> => {
  const searchQuery = `isFeatured=true`;

  const featuredFilm: Film = await fetchData(
    `${ENDPOINTS.FILMS}?${searchQuery}`,
  );

  return featuredFilm;
};

const getFilmById = async (id: string): Promise<Film> => {
  const film: Film = await fetchData(`${ENDPOINTS.FILMS}/${id}`);

  return film;
};

export const filmsService = {
  getFilms,
  getFilmById,
  getFeaturedFilm,
};
