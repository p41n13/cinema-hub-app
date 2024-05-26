import { Media, MediaType } from '@/models/Media';

export interface CarouselProps {
  data: Media[];
  title?: string;
  mediaType: MediaType;
}
