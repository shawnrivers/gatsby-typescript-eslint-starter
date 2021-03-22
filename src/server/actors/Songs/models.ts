import { MemberNameKey } from 'server/actors/Members/constants/memberName';
import { SongType } from 'server/actors/Songs/constants/songType';
import { SongTitle } from 'server/actors/Songs/constants/songTitle';
import { UnitName } from 'server/actors/Units/constants/unitName';
import { DiscographyType } from 'server/actors/Discography/types';
import { CdTitle } from 'server/actors/Discography/constants/cdTitle';

export type SongRaw = {
  title: SongTitle;
  key: string;
  musicVideo: string;
  type: SongType;
  creators: {
    lyrics: string[];
    compose: string[];
    arrange: string[];
    direct: string[];
  };
  performers: {
    center: MemberNameKey[];
    fukujin: {
      type: 'row-1' | 'row-1-2' | 'irregular' | null;
      members: MemberNameKey[];
    };
    solo: MemberNameKey | '';
    unit: UnitName | '';
  };
  formations: {
    firstRow: MemberNameKey[];
    secondRow: MemberNameKey[];
    thirdRow: MemberNameKey[];
    fourthRow: MemberNameKey[];
  };
};

type InCd = {
  title: CdTitle | '';
  number: string;
};

export type SongResult = SongRaw & {
  single: InCd;
  albums: InCd[];
  otherCds: InCd[];
  artwork: string;
  performersTag: {
    name: string;
    album:
      | {
          type: DiscographyType;
          number: string;
        }
      | {
          type: null;
          number: null;
        };
  };
};

export type SongsRawArray = SongRaw[];
export type SongsRawObject = Record<SongTitle, SongRaw>;
export type SongsResultArray = SongResult[];
