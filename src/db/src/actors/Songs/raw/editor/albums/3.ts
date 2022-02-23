import { SongRaw } from 'db/src/actors/Songs/models';
import { createSongRaw } from 'db/src/actors/Songs/raw/creator';

export const THIRD_ALBUM_SONGS: SongRaw[] = [
  createSongRaw({
    title: 'スカイダイビング',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['菅井達司'],
      arrange: ['菅井達司'],
    },
    formations: {
      firstRow: [
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'itoumarika',
        'inouesayuri',
        'etoumisa',
        'kitanohinako',
        'saitouasuka',
        'saitouyuuri',
        'sakuraireika',
        'shiraishimai',
        'shinuchimai',
        'takayamakazumi',
        'teradaranze',
        'nakadakana',
        'nishinonanase',
        'higuchihina',
        'hoshinominami',
        'horimiona',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
    },
  }),
  createSongRaw({
    title: '君が扇いでくれた',
    type: 'under',
    creators: {
      lyrics: ['秋元康'],
      compose: ['中山聡', '足立優'],
      arrange: ['野中"まさ"雄一'],
    },
    center: ['watanabemiria'],
    formations: {
      firstRow: [
        'watanabemiria',
        'itoukarin',
        'itoujunna',
        'kawagohina',
        'kawamuramahiro',
        'saitouchiharu',
        'sagaraiori',
        'sasakikotoko',
        'suzukiayane',
        'noujouami',
        'yamazakirena',
        'wadamaaya',
      ],
    },
  }),
  createSongRaw({
    title: '思い出ファースト',
    type: 'third generation',
    creators: {
      lyrics: ['秋元康'],
      compose: ['ミサマサカリヲ'],
      arrange: ['遠藤ナオキ'],
      direct: ['岡川太郎'],
    },
    center: ['oozonomomoko'],
    formations: {
      firstRow: ['kuboshiori', 'oozonomomoko', 'yamashitamizuki'],
      secondRow: ['sakaguchitamami', 'yodayuuki', 'itouriria', 'iwamotorenka'],
      thirdRow: [
        'umezawaminami',
        'mukaihazuki',
        'nakamurareno',
        'satoukaede',
        'yoshidaayanochristie',
      ],
    },
  }),
  createSongRaw({
    title: '設定温度',
    type: 'selected',
    creators: {
      lyrics: ['秋元康'],
      compose: ['石井亮輔'],
      arrange: ['APAZZI'],
    },
    formations: {
      firstRow: [
        'akimotomanatsu',
        'ikutaerika',
        'ikomarina',
        'itoumarika',
        'inouesayuri',
        'etoumisa',
        'kitanohinako',
        'saitouasuka',
        'saitouyuuri',
        'sakuraireika',
        'shiraishimai',
        'shinuchimai',
        'takayamakazumi',
        'teradaranze',
        'nakadakana',
        'nishinonanase',
        'higuchihina',
        'hoshinominami',
        'horimiona',
        'matsumurasayuri',
        'wakatsukiyumi',
      ],
      secondRow: [
        'itoukarin',
        'itoujunna',
        'kawagohina',
        'kawamuramahiro',
        'saitouchiharu',
        'sagaraiori',
        'sasakikotoko',
        'suzukiayane',
        'noujouami',
        'yamazakirena',
        'watanabemiria',
        'wadamaaya',
      ],
      thirdRow: [
        'itouriria',
        'iwamotorenka',
        'umezawaminami',
        'oozonomomoko',
        'kuboshiori',
        'sakaguchitamami',
        'satoukaede',
        'nakamurareno',
        'mukaihazuki',
        'yamashitamizuki',
        'yoshidaayanochristie',
        'yodayuuki',
      ],
    },
  }),
  createSongRaw({
    title: 'Rewindあの日',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['藤木テツ'],
      arrange: ['佐々木裕'],
    },
    formations: {
      firstRow: ['sakuraireika', 'nishinonanase', 'wakatsukiyumi'],
    },
  }),
  createSongRaw({
    title: 'ごめんね、スムージー',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['YASUSHI WATANABE'],
      arrange: ['YASUSHI WATANABE'],
    },
    formations: {
      firstRow: ['itoumarika', 'inouesayuri', 'nakamotohimeka'],
    },
  }),
  createSongRaw({
    title: '醜い私',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['外山大輔'],
      arrange: ['APAZZI'],
    },
    formations: {
      firstRow: ['etoumisa', 'saitouyuuri', 'shinuchimai'],
    },
  }),
  createSongRaw({
    title: '硬い殻のように抱きしめたい',
    type: 'solo',
    creators: {
      lyrics: ['秋元康'],
      compose: ['杉山勝彦'],
      arrange: ['杉山勝彦', '三谷秀甫', '谷地学'],
    },
    solo: 'saitouasuka',
  }),
  createSongRaw({
    title: '満月が消えた',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['SaSA'],
      arrange: ['SaSA'],
    },
    formations: {
      firstRow: ['ikutaerika', 'ikomarina', 'hoshinominami'],
    },
  }),
  createSongRaw({
    title: 'ワタボコリ',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['ハサミマン'],
      arrange: ['ハサミマン'],
    },
    formations: {
      firstRow: ['kitanohinako', 'teradaranze', 'horimiona'],
    },
  }),
  createSongRaw({
    title: '流星ディスコティック',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['Masayoshi Kawabata'],
      arrange: ['Masayoshi Kawabata'],
    },
    formations: {
      firstRow: ['shiraishimai', 'matsumurasayuri'],
    },
  }),
  createSongRaw({
    title: '忘却と美学',
    type: 'unit',
    creators: {
      lyrics: ['秋元康'],
      compose: ['早川博隆'],
      arrange: ['早川博隆'],
    },
    formations: {
      firstRow: ['akimotomanatsu', 'takayamakazumi'],
    },
  }),
];
