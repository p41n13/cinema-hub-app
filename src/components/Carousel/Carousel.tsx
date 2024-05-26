'use client';

import { FC, useRef, useState } from 'react';
import { MediaCard } from '../MediaCard/MediaCard';
import { HIDE_FADE_SCROLL_OFFSET } from './carousel.settings';
import { CarouselProps } from './carousel.types';

export const Carousel: FC<CarouselProps> = ({ data, title, mediaType }) => {
  console.log('data: ', data);
  const scrollRef = useRef(null);
  const [shouldRenderFadeElement, setShouldRenderFadeElements] = useState(true);

  if (!data.length) {
    return null;
  }

  const carouselItems = data.map((media) => (
    <div key={media.id.toString()} className="shrink-0 mr-10">
      <MediaCard media={media} mediaType={mediaType} />
    </div>
  ));

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;

      if (scrollLeft > HIDE_FADE_SCROLL_OFFSET && shouldRenderFadeElement) {
        setShouldRenderFadeElements(false);
      } else if (
        scrollLeft <= HIDE_FADE_SCROLL_OFFSET &&
        !shouldRenderFadeElement
      ) {
        setShouldRenderFadeElements(true);
      }
    }
  };

  const opacity = shouldRenderFadeElement ? 'opacity-100' : 'opacity-0';

  return (
    <div className="w-full px-24 pb-10">
      {title && <h2 className="text-2xl font-bold py-10">{title}</h2>}
      <div
        className={`relative after:w-16 after:absolute after:top-0 after:right-0 after:h-full after:bg-gradient-to-r after:from-transparent after:to-black duration-1000 after:${opacity}`}>
        <div
          ref={scrollRef}
          className="scrollbar-thin scrollbar-thumb-white scrollbar-track-black overflow-x-scroll"
          onScroll={handleScroll}>
          <div className="flex shrink-0 grow-0 w-full pb-6">
            {carouselItems}
          </div>
        </div>
      </div>
    </div>
  );
};
