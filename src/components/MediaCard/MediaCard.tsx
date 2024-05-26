import { FC } from 'react';
import { MediaCardProps } from './mediaCard.types';
import Image from 'next/image';
import Link from 'next/link';

export const MediaCard: FC<MediaCardProps> = ({ media, mediaType }) => {
  const { id, title, posterUrl } = media;
  return (
    <div className="max-w-[250px] m-auto">
      <Link href={`/${mediaType}/${id}`}>
        <Image
          className="w-100"
          width={250}
          height={250}
          src={posterUrl}
          alt={title}
        />
      </Link>
      <h2 className="text-md pt-2">{title}</h2>
    </div>
  );
};
