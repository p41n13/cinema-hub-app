'use client';

import Image from 'next/image';
import { FC } from 'react';
import { FeaturedFilmProps } from './featuredFilm.types';
import Link from 'next/link';
import { BACKGROUND_IMAGE_LINEAR_GRADIENT } from './featuredFilm.settings';
import { usePathname } from 'next/navigation';

export const FeaturedFilm: FC<FeaturedFilmProps> = ({
  id,
  title,
  coverUrl,
  posterUrl,
  trailerUrl,
  overview,
  releaseDate,
  genres,
  duration,
}) => {
  const containerStyle = {
    backgroundImage: `${BACKGROUND_IMAGE_LINEAR_GRADIENT}, url(${coverUrl})`,
  };

  const pathname = usePathname();

  return (
    <div
      className="w-full h-screen bg-cover px-10 flex justify-center items-center"
      style={containerStyle}>
      <div className="flex">
        <Link href={`/film/${id}`}>
          <Image
            src={posterUrl}
            className="max-w-hero-w max-h-hero-h rounded-lg hover:scale-105 duration-500"
            width={400}
            height={650}
            alt={title}
          />
        </Link>
        <div className="pl-10 py-4">
          <h3 className="uppercase text-xs tracking-widest mb-3 before:inline-block before:w-14 before:h-px before:bg-white before:relative before:align-middle before:mr-2">
            Cinema Hub&apos;s choice
          </h3>
          <Link
            href={`/film/${id}`}
            className="text-3xl font-bold mb-1 hover:text-indigo-600 duration-500">
            {title}
          </Link>
          <p className="mb-4">
            {releaseDate} | {genres?.join(', ')} | {duration}
          </p>
          <p className="mb-8 max-w-md text-xl font-light">{overview}</p>
          <Link
            href={`${pathname}/?play=${trailerUrl}`}
            scroll={false}
            className="bg-black py-3 px-6 rounded-full bg-indigo-600 hover:bg-white hover:text-indigo-600 duration-500">
            Play Trailer
          </Link>
        </div>
      </div>
    </div>
  );
};
