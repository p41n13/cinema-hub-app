import { MediaList } from '@/components/MediaList/MediaList';
import { Film } from '@/models/Film';
import { filmsService } from '@/services/api/films/filmsService';

export default async function Films() {
  const films: Film[] = await filmsService.getFilms();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MediaList medias={films} mediaType="film" />
    </main>
  );
}
