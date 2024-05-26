import { TvShow } from '@/models/TvShow';
import { fetchData } from '../api';
import { ENDPOINTS } from '../api.settings';

const getTvShows = async (): Promise<TvShow[]> => {
  const tvShows: TvShow[] = await fetchData(ENDPOINTS.TV_SHOWS);

  return tvShows;
};

const getFeaturedTvShow = async (): Promise<TvShow> => {
  const searchQuery = `isFeatured=true`;

  const featuredTvShow: TvShow = await fetchData(
    `${ENDPOINTS.TV_SHOWS}?${searchQuery}`,
  );

  return featuredTvShow;
};

const getTvShowById = async (id: string): Promise<TvShow> => {
  const tvShow: TvShow = await fetchData(`${ENDPOINTS.TV_SHOWS}/${id}`);

  return tvShow;
};

export const tvShowsService = { getTvShows, getTvShowById, getFeaturedTvShow };
