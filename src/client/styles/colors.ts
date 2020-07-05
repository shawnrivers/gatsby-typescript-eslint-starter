export const GLOBAL_COLORS = {
  white: '#FFFFFF',
  gray0: '#E5E5E5',
  gray1: '#CCCCCC',
  gray2: '#B2B2B2',
  gray3: '#999999',
  gray4: '#808080',
  gray5: '#666666',
  gray6: '#4D4D4D',
  gray7: '#333333',
  gray8: '#1A1A1A',
  purple0: '#E2B4EA',
  purple1: '#CB78D9',
  purple2: '#AE37C3',
  purple3: '#812990',
  purple4: '#601F6B',
  purpleDull0: '#DDD3DE',
  purpleDull1: '#B29BB5',
  purpleDull2: '#8A6A90',
  purpleDull3: '#664F6A',
  purpleDull4: '#4A3E4C',
  red0: '#F4B3C0',
  red1: '#EF90A3',
  red2: '#E54F6D',
  red3: '#BF1C3D',
  red4: '#971630',
  redDull0: '#D8CFD1',
  redDull1: '#C9B6BA',
  redDull2: '#A98B91',
  redDull3: '#7E5D64',
  redDull4: '#644A4F',
  yellow0: '#FBE297',
  yellow1: '#FAD566',
  yellow2: '#F8C630',
  yellow3: '#CA9907',
  yellow4: '#947005',
  yellowDull0: '#D1CDC1',
  yellowDull1: '#BCB6A4',
  yellowDull2: '#A49C84',
  yellowDull3: '#787059',
  yellowDull4: '#585241',
};

export type GlobalColorKey = keyof typeof GLOBAL_COLORS;

export type ThemeColors = {
  primary: {
    standard: string;
    variant: string;
  };
  secondary: {
    standard: string;
    variant: string;
  };
  background: {
    standard: string;
    variant: string;
  };
  surface: {
    standard: string;
    variant: string;
  };
  onPrimary: {
    standard: string;
    variant: string;
  };
  onSecondary: {
    standard: string;
    variant: string;
  };
  onBackground: {
    standard: string;
    variant: string;
  };
  onSurface: {
    standard: string;
    variant: string;
  };
};

export type ThemeKey = 'light' | 'dark';

export type Themes = Record<ThemeKey, ThemeColors>;
