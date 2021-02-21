/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/core';
import { ThemeProvider } from '@emotion/react';
import * as React from 'react';
import 'focus-visible';
import { themes } from 'client/styles/tokens';
import { useDarkModeMediaQuery } from 'client/store/theme/hook/useDarkModeMediaQuery';
import { useLocalStorageThemeMode } from 'client/store/theme/hook/useLocalStorageThemeMode';
import { useThemeContext } from 'client/store/theme/hook/useThemeContext';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';

/**
 * NOTE:
 * EmotionThemeProvider should be put used as a descendant of ThemeContextProvider.
 */
export const EmotionThemeProvider: React.FC = props => {
  const { themeKey } = useThemeContext();

  useDarkModeMediaQuery();
  useLocalStorageThemeMode();

  return (
    <ThemeProvider theme={themes[themeKey]}>
      <Global
        styles={css`
          :root {
            --white: #ffffff;
            --gray0: #e5e5e5;
            --gray1: #cccccc;
            --gray2: #b2b2b2;
            --gray3: #999999;
            --gray4: #808080;
            --gray5: #666666;
            --gray6: #4d4d4d;
            --gray7: #333333;
            --gray8: #1a1a1a;
            --purple0: #e2b4ea;
            --purple1: #cb78d9;
            --purple2: #ae37c3;
            --purple3: #812990;
            --purple4: #601f6b;
            --purpledull0: #f4f0f4;
            --purpledull1: #ddd3de;
            --purpledull2: #b29bb5;
            --purpledull3: #664f6a;
            --purpledull4: #4a3e4c;
            --red0: #f4b3c0;
            --red1: #ef90a3;
            --red2: #e54f6d;
            --red3: #bf1c3d;
            --red4: #971630;
            --reddull0: #d8cfd1;
            --reddull1: #c9b6ba;
            --reddull2: #a98b91;
            --reddull3: #7e5d64;
            --reddull4: #644a4f;
            --yellow0: #fbe297;
            --yellow1: #fad566;
            --yellow2: #f8c630;
            --yellow3: #ca9907;
            --yellow4: #947005;
            --yellowdull0: #d1cdc1;
            --yellowdull1: #bcb6a4;
            --yellowdull2: #a49c84;
            --yellowdull3: #787059;
            --yellowdull4: #585241;

            --glow-stick-color-red: #fb9090;
            --glow-stick-color-yellow: #f7dd7f;
            --glow-stick-color-white: #ffffff;
            --glow-stick-color-blue: #7fbaf7;
            --glow-stick-color-green: #a3ffaa;
            --glow-stick-color-purple: #dc9af7;
            --glow-stick-color-black: #595959;
            --glow-stick-color-pink: #ff90d4;
            --glow-stick-color-orange: #ffba75;
            --glow-stick-color-light-blue: #4bded7;
            --glow-stick-color-yellow-green: #d2ff87;
            --glow-stick-color-none: #ffffff;
          }

          html[data-theme='light'] body {
            --color-primary-standard: var(--purple1);
            --color-primary-variant0: var(--purple2);
            --color-primary-variant1: var(--purple3);
            --color-secondary-standard: var(--yellow0);
            --color-secondary-variant0: var(--yellow1);
            --color-secondary-variant1: var(--yellow2);
            --color-background-standard: var(--white);
            --color-background-variant0: var(--gray1);
            --color-background-variant1: var(--gray3);
            --color-surface-standard: var(--white);
            --color-surface-variant0: var(--gray1);
            --color-surface-variant1: var(--gray3);
            --color-onPrimary-standard: var(--white);
            --color-onPrimary-variant0: var(--gray1);
            --color-onPrimary-variant1: var(--gray3);
            --color-onSecondary-standard: var(--gray8);
            --color-onSecondary-variant0: var(--gray6);
            --color-onSecondary-variant1: var(--gray4);
            --color-onBackground-standard: var(--gray8);
            --color-onBackground-variant0: var(--gray5);
            --color-onBackground-variant1: var(--gray3);
            --color-onSurface-standard: var(--gray8);
            --color-onSurface-variant0: var(--gray5);
            --color-onSurface-variant1: var(--gray3);

            --elevation-white-overlay-transparency-0: none;
            --elevation-white-overlay-transparency-1: none;
            --elevation-white-overlay-transparency-2: none;
            --elevation-white-overlay-transparency-3: none;
            --elevation-white-overlay-transparency-4: none;
            --elevation-white-overlay-transparency-5: none;
            --elevation-white-overlay-transparency-6: none;
            --elevation-white-overlay-transparency-7: none;
            --elevation-white-overlay-transparency-8: none;
            --elevation-white-overlay-transparency-9: none;
            --elevation-white-overlay-transparency-10: none;
            --elevation-white-overlay-transparency-11: none;
            --elevation-white-overlay-transparency-12: none;
            --elevation-white-overlay-transparency-13: none;
            --elevation-white-overlay-transparency-14: none;
            --elevation-white-overlay-transparency-15: none;
            --elevation-white-overlay-transparency-16: none;
            --elevation-white-overlay-transparency-17: none;
            --elevation-white-overlay-transparency-18: none;
            --elevation-white-overlay-transparency-19: none;
            --elevation-white-overlay-transparency-20: none;
            --elevation-white-overlay-transparency-21: none;
            --elevation-white-overlay-transparency-23: none;
            --elevation-white-overlay-transparency-24: none;
          }

          html[data-theme='dark'] body {
            --color-primary-standard: var(--purple1);
            --color-primary-variant0: var(--purple2);
            --color-primary-variant1: var(--purple3);
            --color-secondary-standard: var(--yellow0);
            --color-secondary-variant0: var(--yellow1);
            --color-secondary-variant1: var(--yellow2);
            --color-background-standard: var(--gray8);
            --color-background-variant0: var(--gray6);
            --color-background-variant1: var(--gray4);
            --color-surface-standard: var(--gray8);
            --color-surface-variant0: var(--gray6);
            --color-surface-variant1: var(--gray4);
            --color-onPrimary-standard: var(--white);
            --color-onPrimary-variant0: var(--gray1);
            --color-onPrimary-variant1: var(--gray3);
            --color-onSecondary-standard: var(--gray8);
            --color-onSecondary-variant0: var(--gray6);
            --color-onSecondary-variant1: var(--gray4);
            --color-onBackground-standard: var(--white);
            --color-onBackground-variant0: var(--gray1);
            --color-onBackground-variant1: var(--gray3);
            --color-onSurface-standard: var(--white);
            --color-onSurface-variant0: var(--gray1);
            --color-onSurface-variant1: var(--gray3);

            --elevation-white-overlay-transparency-0: rgba(255, 255, 255, 0);
            --elevation-white-overlay-transparency-1: rgba(255, 255, 255, 0.05);
            --elevation-white-overlay-transparency-2: rgba(255, 255, 255, 0.07);
            --elevation-white-overlay-transparency-3: rgba(255, 255, 255, 0.08);
            --elevation-white-overlay-transparency-4: rgba(255, 255, 255, 0.09);
            --elevation-white-overlay-transparency-5: rgba(255, 255, 255, 0.1);
            --elevation-white-overlay-transparency-6: rgba(255, 255, 255, 0.11);
            --elevation-white-overlay-transparency-7: rgba(255, 255, 255, 0.11);
            --elevation-white-overlay-transparency-8: rgba(255, 255, 255, 0.12);
            --elevation-white-overlay-transparency-9: rgba(255, 255, 255, 0.12);
            --elevation-white-overlay-transparency-10: rgba(
              255,
              255,
              255,
              0.13
            );
            --elevation-white-overlay-transparency-11: rgba(
              255,
              255,
              255,
              0.13
            );
            --elevation-white-overlay-transparency-12: rgba(
              255,
              255,
              255,
              0.14
            );
            --elevation-white-overlay-transparency-13: rgba(
              255,
              255,
              255,
              0.14
            );
            --elevation-white-overlay-transparency-14: rgba(
              255,
              255,
              255,
              0.14
            );
            --elevation-white-overlay-transparency-15: rgba(
              255,
              255,
              255,
              0.14
            );
            --elevation-white-overlay-transparency-16: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-17: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-18: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-19: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-20: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-21: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-23: rgba(
              255,
              255,
              255,
              0.15
            );
            --elevation-white-overlay-transparency-24: rgba(
              255,
              255,
              255,
              0.16
            );
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          ul,
          ol,
          li {
            margin-block-end: 0;
            margin-block-start: 0;
            margin-inline-end: 0;
            margin-inline-start: 0;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Helvetica Neue', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--color-background-standard);
            /* transition-property: background-color, color;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out; */
          }

          a {
            color: inherit;
            text-decoration: inherit;
            outline: inherit;

            :focus {
              outline-offset: 0;
            }
          }

          ul,
          ol {
            list-style-type: none;
            padding-inline-start: 0;
          }

          button {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font: inherit;
            margin: 0;
            outline: inherit;
            padding: 0;
          }

          input {
            margin: 0;
            border: 0;
            padding: 0;
            display: inline-block;
            vertical-align: middle;
            white-space: normal;
            background: none;
          }

          .js-focus-visible :focus:not(.focus-visible) {
            outline: none;
          }

          .focus-visible {
            outline: auto;
          }
        `}
      />
      <div>{props.children}</div>
    </ThemeProvider>
  );
};
