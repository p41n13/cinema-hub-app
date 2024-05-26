import { FeaturedFilm } from '@/components/FeaturedFilm/FeaturedFilm';
import { TrailerModal } from '@/components/TrailerModal/TrailerModal';
import { Film as FilmType } from '@/models/Film';
import { FilmPageProps } from './types';
import { filmsService } from '@/services/api/films/filmsService';

export default async function Film({ params, searchParams }: FilmPageProps) {
  const trailerUrl = searchParams?.play;
  const film: FilmType = await filmsService.getFilmById(params?.id);

  return (
    <main className="">
      <FeaturedFilm {...film} />
      {trailerUrl && <TrailerModal trailerUrl={trailerUrl} />}
    </main>
  );
}
