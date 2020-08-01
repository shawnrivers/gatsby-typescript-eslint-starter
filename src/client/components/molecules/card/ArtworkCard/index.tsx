/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { GridArtworkImage } from 'client/components/atoms/image/GirdArtworkImage';
import { Typography } from 'client/components/atoms/Typography';
import { toCdNumber } from 'utils/strings';
import { Card, CardProps } from 'client/components/atoms/Card';
import { FocusPerformers } from 'server/actors/Discography/models';

export const ArtworkCard: React.FC<
  CardProps & {
    artwork: string;
    title: string;
    number: string;
    type: string;
    focusPerformers?: FocusPerformers;
  }
> = props => {
  const { artwork, title, number, type, ...cardProps } = props;
  return (
    <Card {...cardProps}>
      <GridArtworkImage src={artwork} alt={number} />
      <Typography
        variant="h6"
        textColor={{ on: 'onBackground', variant: 'variant1' }}
        css={css`
          text-transform: capitalize;
          margin-top: 0.5em;
          text-align: center;
        `}
      >
        {toCdNumber(number)} {type}
      </Typography>
      <Typography
        variant="em2"
        ellipsis
        css={css`
          margin-top: 0.5em;
          line-height: 1.2;
          text-align: center;
        `}
      >
        {title}
      </Typography>
    </Card>
  );
};
