import * as fs from 'fs';
import {
  CDS,
  CdTitle,
  SingleTitle,
  AlbumTitle,
  OtherCdTitle,
} from 'server/actors/Discography/constants/cdTitle';
import { DiscographyRaw } from 'server/actors/Discography/models';
import { CdType, OtherCdKind } from 'server/actors/Discography/types';
import { NO_ARTWORK_IMAGE_SRC } from 'server/constants/paths';
import {
  convertImageFilePath,
  getResponsiveImageUrls,
} from 'server/utils/path';

export const convertCdArtwork = ({
  cdHasArtworks,
  cdNumber,
  cdArtworkType,
  cdKind,
}: {
  cdHasArtworks: DiscographyRaw['hasArtworks'];
  cdNumber: DiscographyRaw['number'];
  cdArtworkType: CdType;
  cdKind: DiscographyRaw['type'];
}): string => {
  let imageSrcBasePath = '';

  switch (cdKind) {
    case 'single':
      imageSrcBasePath = 'artworks/singles';
      break;
    case 'album':
      imageSrcBasePath = 'artworks/albums';
      break;
    case 'digital':
      imageSrcBasePath = 'artworks/digital';
      break;
    default:
      imageSrcBasePath = '';
      break;
  }

  if (!cdHasArtworks) {
    return NO_ARTWORK_IMAGE_SRC;
  }

  const imageSrc = `${imageSrcBasePath}/${cdNumber}/${cdArtworkType}.jpg`;

  if (fs.existsSync('./public/images/' + imageSrc)) {
    return imageSrc;
  }

  return NO_ARTWORK_IMAGE_SRC;
};

const convertCdArtworks = ({
  cdArtworkTypes,
  cdHasArtworks,
  cdNumber,
  cdKind,
}: {
  cdArtworkTypes: DiscographyRaw['artworkTypes'];
  cdHasArtworks: DiscographyRaw['hasArtworks'];
  cdNumber: DiscographyRaw['number'];
  cdKind: DiscographyRaw['type'];
}): DiscographyRaw['artworks'] => {
  const artworksResult = [];

  for (const cdArtworkType of cdArtworkTypes) {
    artworksResult.push({
      url: getResponsiveImageUrls(
        convertImageFilePath(
          convertCdArtwork({
            cdHasArtworks,
            cdNumber,
            cdArtworkType,
            cdKind,
          })
        )
      ),
      type: cdArtworkType,
    });
  }

  return artworksResult;
};

const createCdRaw = ({
  title,
  number,
  release,
  cdTypes,
  shopping,
  songs,
  type,
  underMembers,
  trainees,
  skips,
  previousSingleNumber,
}: {
  title: CdTitle;
  number: DiscographyRaw['number'];
  release: DiscographyRaw['release'];
  cdTypes?: DiscographyRaw['artworkTypes'];
  shopping?: DiscographyRaw['shopping'];
  songs: Omit<DiscographyRaw['songs'][0], 'number'>[];
  type: DiscographyRaw['type'];
  underMembers?: DiscographyRaw['underMembers'];
  trainees?: DiscographyRaw['behindPerformers']['trainees'];
  skips?: DiscographyRaw['behindPerformers']['skips'];
  previousSingleNumber: DiscographyRaw['previousSingleNumber'];
}): DiscographyRaw => {
  const hasArtworks =
    cdTypes !== undefined && cdTypes.length > 0 ? true : false;
  const artworkTypes = cdTypes ?? [];

  return {
    title,
    key: CDS[title].key,
    type,
    number,
    release,
    hasArtworks,
    artworkTypes,
    artworks: convertCdArtworks({
      cdArtworkTypes: artworkTypes,
      cdHasArtworks: hasArtworks,
      cdNumber: number,
      cdKind: type,
    }),
    shopping: shopping ?? [],
    songs: songs.map((song, index) => ({
      number: index + 1,
      title: song.title,
      inCdType: song.inCdType,
    })),
    underMembers: underMembers ?? [],
    behindPerformers: {
      trainees: trainees ?? [],
      skips: skips ?? [],
    },
    previousSingleNumber,
  };
};

export const createSingleRaw = (params: {
  title: SingleTitle;
  number: DiscographyRaw['number'];
  release: DiscographyRaw['release'];
  cdTypes?: DiscographyRaw['artworkTypes'];
  shopping?: DiscographyRaw['shopping'];
  songs: Omit<DiscographyRaw['songs'][0], 'number'>[];
  underMembers?: DiscographyRaw['underMembers'];
  trainees?: DiscographyRaw['behindPerformers']['trainees'];
  skips?: DiscographyRaw['behindPerformers']['skips'];
}): DiscographyRaw => {
  return createCdRaw({
    title: params.title,
    type: 'single',
    number: params.number,
    cdTypes: params.cdTypes,
    release: params.release,
    shopping: params.shopping,
    songs: params.songs,
    underMembers: params.underMembers,
    trainees: params.trainees,
    skips: params.skips,
    previousSingleNumber: params.number,
  });
};

export const createAlbumRaw = (params: {
  title: AlbumTitle;
  number: DiscographyRaw['number'];
  release: DiscographyRaw['release'];
  previousSingle: DiscographyRaw['previousSingleNumber'];
  cdTypes?: DiscographyRaw['artworkTypes'];
  shopping?: DiscographyRaw['shopping'];
  songs: Omit<DiscographyRaw['songs'][0], 'number'>[];
}): DiscographyRaw => {
  return createCdRaw({
    title: params.title,
    type: 'album',
    number: params.number,
    cdTypes: params.cdTypes,
    release: params.release,
    shopping: params.shopping,
    songs: params.songs,
    previousSingleNumber: params.previousSingle,
  });
};

export const createOtherCdRaw = (params: {
  title: OtherCdTitle;
  number: DiscographyRaw['number'];
  type: OtherCdKind;
  release: DiscographyRaw['release'];
  previousSingle: DiscographyRaw['previousSingleNumber'];
  cdTypes?: DiscographyRaw['artworkTypes'];
  shopping?: DiscographyRaw['shopping'];
  songs: Omit<DiscographyRaw['songs'][0], 'number'>[];
}): DiscographyRaw => {
  return createCdRaw({
    title: params.title,
    type: params.type,
    number: params.number,
    cdTypes: params.cdTypes,
    release: params.release,
    shopping: params.shopping,
    songs: params.songs,
    previousSingleNumber: params.previousSingle,
  });
};
