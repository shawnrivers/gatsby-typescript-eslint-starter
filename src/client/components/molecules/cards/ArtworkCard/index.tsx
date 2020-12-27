/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  GridArtworkImage,
  GridArtworkImageProps,
} from 'client/components/atoms/images/GirdArtworkImage';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { toCdNumber } from 'utils/strings';
import { Card, CardProps } from 'client/components/atoms/Card';

export const ArtworkCard: React.FC<
  CardProps & {
    title: string;
    image: GridArtworkImageProps;
    titleElement?: TypographyProps['element'];
    number: string;
    type: string;
  }
> = props => {
  const {
    image,
    title,
    titleElement = 'div',
    number,
    type,
    ...cardProps
  } = props;
  return (
    <Card {...cardProps}>
      <article>
        <GridArtworkImage {...image} alt="" />
        <Typography
          variant="h7"
          element="div"
          textColor={{ on: 'onBackground', variant: 'variant1' }}
          css={css`
            display: block;
            margin-top: 0.5em;
            text-align: center;
          `}
        >
          {toCdNumber(number)} {type}
        </Typography>
        <Typography
          variant="em2"
          element={titleElement}
          ellipsis
          css={css`
            display: block;
            margin-top: 0.5em;
            line-height: 1.2;
            text-align: center;
          `}
          lang="ja"
        >
          {title}
        </Typography>
      </article>
    </Card>
  );
};
