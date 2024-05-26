import { Media, MediaType } from '@/models/Media';

export interface MediaListProps {
  mediaType: MediaType;
  medias: Media[];
}
