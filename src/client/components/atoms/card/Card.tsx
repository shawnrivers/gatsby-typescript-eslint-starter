/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Link } from 'gatsby';
import { useTheme } from 'client/styles/tokens';
import { BorderRadiusKey } from 'client/styles/borderRadius';
import { ElevationKey } from 'client/styles/elevation';
import { ThemeColorVariants } from 'client/styles/colors';
import { SpacingKey } from 'client/styles/spacing';

type CardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  borderRadius?: BorderRadiusKey;
  elevation?: ElevationKey;
  surfaceColor?: keyof ThemeColorVariants;
  padding?: SpacingKey;
};

export const CardContent: React.FC<CardContentProps> = props => {
  const {
    children,
    borderRadius = 'l',
    elevation = 4,
    surfaceColor = 'standard',
    padding = 'm',
    ...restProps
  } = props;

  const theme = useTheme();

  return (
    <div
      css={css`
        border-radius: ${theme.borderRadius[borderRadius]};
        box-shadow: ${theme.elevation[elevation].boxShadow};
        background-color: ${theme.colors.theme.surface[surfaceColor]};
        position: relative;
        overflow: hidden;
      `}
      {...restProps}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: ${theme.elevation[elevation].whiteOverlayTransparency};
        `}
      >
        <div
          css={css`
            padding: ${theme.spacing[padding]};
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export type CardProps = CardContentProps & {
  to?: string;
};

export const Card: React.FC<CardProps> = props => {
  const { to, children, ...restProps } = props;

  return to ? (
    <Link to={to}>
      <CardContent {...restProps}>{children}</CardContent>
    </Link>
  ) : (
    <CardContent {...restProps}>{children}</CardContent>
  );
};
