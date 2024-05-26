import { Film } from './Film';
import { TvShow } from './TvShow';

export type Media = Film | TvShow;

export type MediaType = 'film' | 'tv-show';
