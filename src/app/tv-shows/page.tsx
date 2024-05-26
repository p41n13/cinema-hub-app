import { MediaList } from '@/components/MediaList/MediaList';
import { TvShow } from '@/models/TvShow';
import { tvShowsService } from '@/services/api/tvShows/tvShowsService';

export default async function TvShows() {
  const tvShows: TvShow[] = await tvShowsService.getTvShows();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MediaList medias={tvShows} mediaType="tv-show" />
    </main>
  );
}
