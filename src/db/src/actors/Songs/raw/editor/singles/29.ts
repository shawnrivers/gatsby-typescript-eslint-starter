import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const TWENTY_NINTH_SINGLE_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'Actually...',
    type: 'title',
    creators: {
      lyrics: ['秋元康'],
      compose: ['NAMITO'],
      arrange: ['APAZZI'],
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
    creators: {
      lyrics: ['秋元康'],
      compose: ['高木龍一'],
      arrange: ['高木龍一'],
    },
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
    center: ['kuboshiori'],
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '谷地学'],
      direct: ['東市篤憲'],
    },
    formations: {
      firstRow: ['endousakura', 'kuboshiori', 'kakiharuka'],
      secondRow: [
        'nakamurareno',
        'kitagawayuri',
        'kanagawasaya',
        'satourika',
        'sakaguchitamami',
      ],
    },
  }),
  createSongRaw({
    title: '忘れないといいな',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['伊藤心太郎'],
      arrange: ['伊藤心太郎'],
      direct: ['伊藤衆人'],
    },
    solo: 'kitanohinako',
  }),
  createSongRaw({
    title: '届かなくたって…',
    type: 'under',
    center: ['satoukaede'],
    creators: {
      lyrics: ['秋元康'],
      compose: ['外山大輔'],
      arrange: ['外山大輔'],
      direct: ['Hiroya Brian Nakano'],
    },
    formations: {
      firstRow: [
        'sakaguchitamami',
        'yumikinao',
        'satoukaede',
        'kanagawasaya',
        'satourika',
      ],
      secondRow: [
        'hayashiruna',
        'matsuomiyu',
        'yamazakirena',
        'nakamurareno',
        'kitagawayuri',
      ],
      thirdRow: [
        'yoshidaayanochristie',
        'itouriria',
        'mukaihazuki',
        'wadamaaya',
        'kuromiharuka',
        'yakubomio',
      ],
    },
  }),
  createSongRaw({
    title: '絶望の一秒前',
    type: 'fifth generation',
    center: [],
    creators: {
      lyrics: ['秋元康'],
      compose: ['ツキダタダシ'],
      arrange: ['若田部誠'],
    },
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
    creators: {
      lyrics: ['秋元康'],
      compose: ['youth case'],
      arrange: ['youth case'],
    },
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
