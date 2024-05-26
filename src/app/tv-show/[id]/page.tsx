import { TrailerModal } from '@/components/TrailerModal/TrailerModal';
import { TvShowPageProps } from './types';
import { tvShowsService } from '@/services/api/tvShows/tvShowsService';
import { Film } from '@/models/Film';
import { FeaturedFilm } from '@/components/FeaturedFilm/FeaturedFilm';

export default async function TvShow({
  params,
  searchParams,
}: TvShowPageProps) {
  const trailerUrl = searchParams?.play;
  const film = (await tvShowsService.getTvShowById(
    params?.id,
  )) as unknown as Film;

  return (
    <main className="">
      <FeaturedFilm {...film} />
      {trailerUrl && <TrailerModal trailerUrl={trailerUrl} />}
    </main>
  );
}
