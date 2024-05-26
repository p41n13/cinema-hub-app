'use client';

import { FC } from 'react';
import { MediaListProps } from './mediaList.types';
import { MediaCard } from '../MediaCard/MediaCard';

export const MediaList: FC<MediaListProps> = ({ medias, mediaType }) => {
  const mediaList = medias?.map((media) => (
    <div key={media.id} className="shrink-0 w-1/4 mb-12">
      <MediaCard media={media} mediaType={mediaType} />
    </div>
  ));

  return (
    <div className="flex flex-wrap pt-20 w-full py-12 px-24">{mediaList}</div>
  );
};
