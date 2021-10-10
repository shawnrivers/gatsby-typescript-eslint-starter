import { css } from '@emotion/react';
import Link from 'next/link';
import { Typography } from 'client/components/atoms/Typography';
import { commonStyles } from 'client/styles/tokens';
import { getColorVarName } from 'client/styles/tokens/colors';
import { ImageUrl } from 'server/types/commons';
import {
  CoverImage,
  parentAnimationStyles,
} from 'client/components/v6/shared/images/CoverImage';

const getWrapperStyles = (isLink: boolean) => css`
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: bottom;
  cursor: ${isLink ? 'pointer' : 'default'};

  ${isLink ? parentAnimationStyles : undefined};
`;

const LinkWrapper: React.FC<{
  href?: string;
  children: React.ReactNode;
}> = props => {
  const { href, children } = props;

  return href !== undefined ? (
    <Link href={href} passHref>
      <a css={getWrapperStyles(true)}>{children}</a>
    </Link>
  ) : (
    <div css={getWrapperStyles(false)}>{children}</div>
  );
};

export type SongCellProps = {
  href?: string;
  title: string;
  titleLang: string;
  number?: string | number;
  caption?: string;
  image: ImageUrl;
};

export const SongCell: React.FC<SongCellProps> = props => {
  return (
    <LinkWrapper href={props.href}>
      <div
        css={css`
          width: 100%;
          height: 100%;
          border: 2px solid var(${getColorVarName('onBackground', 'standard')});
          border-radius: ${commonStyles.borderRadius.xxs};
          overflow: hidden;
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            z-index: 0;
          `}
        >
          <div
            css={css`
              flex: 0 0 auto;
              display: flex;
              align-items: center;
              border-bottom: 1px solid
                var(${getColorVarName('onBackground', 'standard')});
            `}
          >
            {props.number && (
              <span
                css={css`
                  flex: 0 0 32px;
                  align-self: stretch;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  border-right: 1px solid
                    var(${getColorVarName('onBackground', 'standard')});
                  background-color: var(
                    ${getColorVarName('background', 'standard')}
                  );
                `}
              >
                <Typography
                  variant="em2"
                  element="span"
                  css={css`
                    color: var(${getColorVarName('onBackground', 'standard')});
                  `}
                >
                  {props.number}
                </Typography>
              </span>
            )}
            <Typography
              variant="h8"
              element="h3"
              lang={props.titleLang}
              ellipsis
              css={css`
                flex: 1;
                display: inline;
                text-align: center;
                line-height: 1.5;
                color: var(${getColorVarName('onBackground', 'standard')});
                padding: ${commonStyles.spacing.xxs};
                background-color: var(
                  ${getColorVarName('background', 'variant0')}
                );
              `}
            >
              {props.title}
            </Typography>
          </div>
          <CoverImage
            image={props.image}
            caption={props.caption}
            objectPosition="center"
            css={css`
              flex: 1;
            `}
          />
        </div>
      </div>
    </LinkWrapper>
  );
};
