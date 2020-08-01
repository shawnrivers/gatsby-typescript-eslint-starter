/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  Typography,
  TypographyProps,
} from 'client/components/atoms/Typography';
import { Card, CardProps } from 'client/components/atoms/Card';
import { GridMemberImage } from 'client/components/atoms/image/GridMemberImage';

export const MemberCard: React.FC<
  CardProps & {
    profileImage: string;
    name: string;
    textSize?: TypographyProps['variant'];
  }
> = props => {
  const { profileImage, name, textSize = 'em1', ...cardProps } = props;
  return (
    <Card {...cardProps}>
      <GridMemberImage src={profileImage} alt={name} />
      <Typography
        variant={textSize}
        css={css`
          margin-top: 1em;
          line-height: 1.2;
          overflow-x: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        `}
      >
        {name}
      </Typography>
    </Card>
  );
};
