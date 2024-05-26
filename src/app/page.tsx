import { FeaturedFilm } from '@/components/FeaturedFilm/FeaturedFilm';
import { Film } from '@/models/Film';
import { HomePageProps } from './types';
import { TrailerModal } from '@/components/TrailerModal/TrailerModal';
import { Carousel } from '@/components/Carousel/Carousel';
import { TvShow } from '@/models/TvShow';
import { TRENDING_FILMS_TITLE, TRENDING_TV_SHOWS_TITLE } from './settings';
import { filmsService } from '@/services/api/films/filmsService';
import { tvShowsService } from '@/services/api/tvShows/tvShowsService';

export default async function Home({ searchParams }: HomePageProps) {
  const trailerUrl = searchParams?.play;

  const films: Film[] = await filmsService.getFilms();
  const featuredFilm: Film = await filmsService.getFeaturedFilm();

  const tvShows: TvShow[] = await tvShowsService.getTvShows();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FeaturedFilm {...featuredFilm} />
      <Carousel data={films} title={TRENDING_FILMS_TITLE} mediaType="film" />
      <Carousel
        data={tvShows}
        title={TRENDING_TV_SHOWS_TITLE}
        mediaType="tv-show"
      />
      {trailerUrl && <TrailerModal trailerUrl={trailerUrl} />}
    </main>
  );
}
