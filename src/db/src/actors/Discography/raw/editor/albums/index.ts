import { DiscographyRawArray } from 'db/src/actors/Discography/models';
import { FOURTH_ALBUM } from 'db/src/actors/Discography/raw/editor/albums/4';
import { UNDER_ALBUM } from 'db/src/actors/Discography/raw/editor/albums/under';
import { THIRD_ALBUM } from 'db/src/actors/Discography/raw/editor/albums/3';
import { SECOND_ALBUM } from 'db/src/actors/Discography/raw/editor/albums/2';
import { FIRST_ALBUM } from 'db/src/actors/Discography/raw/editor/albums/1';
import { BEST_ALBUM } from 'db/src/actors/Discography/raw/editor/albums/best';

export const albumsRawArray: DiscographyRawArray = [
  FOURTH_ALBUM,
  UNDER_ALBUM,
  THIRD_ALBUM,
  SECOND_ALBUM,
  FIRST_ALBUM,
  BEST_ALBUM,
];
