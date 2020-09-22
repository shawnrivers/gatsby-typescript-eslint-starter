/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { TextSwitchLinkGroup } from 'client/components/molecules/TextSwitchLinkGroup';
import { ArtworkCard } from 'client/components/molecules/cards/ArtworkCard';
import { PageContent } from 'client/components/templates/Page';
import { TextDivider } from 'client/components/molecules/TextDivider';
import { commonStyles } from 'client/styles/tokens';
import {
  DiscographyUrlFilter,
  getAlbumUrl,
  getDiscographyUrl,
} from 'client/utils/urls';
import { CdGroupByYear } from 'pages/discography';
import { useTranslations } from 'client/hooks/useTranslations';

export type DiscographyPageProps = {
  currentFilter: DiscographyUrlFilter;
  cdGroupsByYear: CdGroupByYear[];
};

export const DiscographyPage: React.FC<DiscographyPageProps> = props => {
  const { currentFilter, cdGroupsByYear } = props;
  const { Translation } = useTranslations();

  return (
    <PageContent title="discography">
      <React.Fragment>
        <TextSwitchLinkGroup
          variant="h4"
          textOn="onBackground"
          capitalize
          links={[
            {
              text: <Translation text="singles" />,
              isSwitchedOn: currentFilter === 'singles',
              to: getDiscographyUrl('singles'),
            },
            {
              text: <Translation text="albums" />,
              isSwitchedOn: currentFilter === 'albums',
              to: getDiscographyUrl('albums'),
            },
            {
              text: <Translation text="all" />,
              isSwitchedOn: currentFilter === 'all',
              to: getDiscographyUrl('all'),
            },
          ]}
          css={css`
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            text-transform: capitalize;
          `}
        />
        {cdGroupsByYear.map(cdGroup => (
          <section key={cdGroup.year}>
            <TextDivider text={cdGroup.year} element="h2" />
            <ul
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: auto;
              `}
            >
              {cdGroup.cds.map(cd => (
                <li key={cd.key}>
                  <ArtworkCard
                    to={getAlbumUrl(cd.key)}
                    artwork={cd.artworks[0].url}
                    number={cd.number}
                    type={cd.type}
                    title={cd.title}
                    titleElement="h3"
                    borderRadius="s"
                    padding="s"
                    css={css`
                      width: 175px;
                      margin: ${commonStyles.spacing.xs};
                    `}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </React.Fragment>
    </PageContent>
  );
};
