import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWENTY_NINTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'Actually...',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['NAMITO'],
    },
    center: ['nakanishiaruno'],
    fukujin: 'row-1-2',
    formations: {
      firstRow: [
        'umezawaminami',
        'yamashitamizuki',
        'nakanishiaruno',
        'saitouasuka',
        'akimotomanatsu',
      ],
      secondRow: [
        'kuboshiori',
        'kakiharuka',
        'yodayuuki',
        'endousakura',
        'tsutsuiayame',
      ],
      thirdRow: [
        'tamuramayu',
        'kakehashisayaka',
        'seimiyarei',
        'suzukiayane',
        'higuchihina',
        'iwamotorenka',
        'shibatayuna',
        'hayakawaseira',
      ],
    },
  }),
  createSongRaw({
    title: '深読み',
    type: 'coupling',
    center: [],
    formations: {
      firstRow: [
        'umezawaminami',
        'yamashitamizuki',
        'nakanishiaruno',
        'saitouasuka',
        'akimotomanatsu',
        'kuboshiori',
        'kakiharuka',
        'yodayuuki',
        'endousakura',
        'tsutsuiayame',
        'tamuramayu',
        'kakehashisayaka',
        'seimiyarei',
        'suzukiayane',
        'higuchihina',
        'iwamotorenka',
        'shibatayuna',
        'hayakawaseira',
      ],
    },
    performersType: {
      single: '29',
      name: 'selected',
    },
  }),
  createSongRaw({
    title: '価値あるもの',
    type: 'unit',
    center: [],
    formations: {
      firstRow: [
        'kuboshiori',
        'sakaguchitamami',
        'nakamurareno',
        'endousakura',
        'kakiharuka',
        'kanagawasaya',
        'kitagawayuri',
        'satourika',
      ],
    },
  }),
  createSongRaw({
    title: '忘れないといいな',
    type: 'solo',
    solo: 'kitanohinako',
  }),
  createSongRaw({
    title: '届かなくたって…',
    type: 'under',
    center: [],
    formations: {
      firstRow: [
        'itouriria',
        'kanagawasaya',
        'kitagawayuri',
        'kuromiharuka',
        'sakaguchitamami',
        'satoukaede',
        'satourika',
        'nakamurareno',
        'hayashiruna',
        'matsuomiyu',
        'mukaihazuki',
        'yakubomio',
        'yamazakirena',
        'yumikinao',
        'yoshidaayanochristie',
        'wadamaaya',
      ],
    },
  }),
  createSongRaw({
    title: '絶望の一秒前',
    type: 'fifth generation',
    center: [],
    formations: {
      firstRow: [
        'inouenagi',
        'ichinosemiku',
        'sugawarasatsuki',
        'ogawaaya',
        'tomisatonao',
        'okudairoha',
        'nakanishiaruno',
        'iokimao',
      ],
    },
  }),
  createSongRaw({
    title: '好きになってみた',
    type: 'coupling',
    center: [],
    formations: {
      firstRow: [
        'umezawaminami',
        'yamashitamizuki',
        'nakanishiaruno',
        'saitouasuka',
        'akimotomanatsu',
        'kuboshiori',
        'kakiharuka',
        'yodayuuki',
        'endousakura',
        'tsutsuiayame',
        'tamuramayu',
        'kakehashisayaka',
        'seimiyarei',
        'suzukiayane',
        'higuchihina',
        'iwamotorenka',
        'shibatayuna',
        'hayakawaseira',
      ],
    },
    performersType: {
      single: '29',
      name: 'selected',
    },
  }),
];
