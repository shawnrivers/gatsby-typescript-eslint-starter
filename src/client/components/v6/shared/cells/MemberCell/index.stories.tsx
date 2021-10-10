import { css } from '@emotion/react';
import type { Meta, Story } from '@storybook/react';
import { MemberCell, MemberCellProps } from '.';
import { ThemeDecorator } from 'storybook/ThemeDecorator';

export default {
  title: 'Components/Shared/Cells/MemberCell',
  decorators: [ThemeDecorator()],
  component: MemberCell,
} as Meta<MemberCellProps>;

const Template: Story<MemberCellProps> = props => {
  return (
    <div
      css={css`
        width: 200px;
        height: 280px;
      `}
    >
      <MemberCell {...props}></MemberCell>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  href: '/',
  name: 'Saito Asuka',
  nameLang: 'en',
  number: 1,
  caption: 'fukujin',
  image: {
    sm: '/images/members/singles/27/saitouasuka@1x.jpg',
    md: '/images/members/singles/27/saitouasuka@2x.jpg',
    lg: '/images/members/singles/27/saitouasuka@3x.jpg',
  },
};

export const Japanese = Template.bind({});
Japanese.args = {
  href: '/',
  name: '齋藤飛鳥',
  nameLang: 'ja',
  number: 1,
  caption: 'fukujin',
  image: {
    sm: '/images/members/singles/27/saitouasuka@1x.jpg',
    md: '/images/members/singles/27/saitouasuka@2x.jpg',
    lg: '/images/members/singles/27/saitouasuka@3x.jpg',
  },
};

export const LongName = Template.bind({});
LongName.args = {
  href: '/',
  name: 'Yoshida AyanoChristie',
  nameLang: 'en',
  number: 18,
  image: {
    sm: '/images/members/singles/27/yoshidaayanochristie@1x.jpg',
    md: '/images/members/singles/27/yoshidaayanochristie@2x.jpg',
    lg: '/images/members/singles/27/yoshidaayanochristie@3x.jpg',
  },
};

export const NoNumber = Template.bind({});
NoNumber.args = {
  href: '/',
  name: 'Saito Asuka',
  caption: 'fukujin',
  image: {
    sm: '/images/members/singles/27/saitouasuka@1x.jpg',
    md: '/images/members/singles/27/saitouasuka@2x.jpg',
    lg: '/images/members/singles/27/saitouasuka@3x.jpg',
  },
};

export const NoCaption = Template.bind({});
NoCaption.args = {
  href: '/',
  name: 'Saito Asuka',
  nameLang: 'en',
  number: 1,
  image: {
    sm: '/images/members/singles/27/saitouasuka@1x.jpg',
    md: '/images/members/singles/27/saitouasuka@2x.jpg',
    lg: '/images/members/singles/27/saitouasuka@3x.jpg',
  },
};

export const NotLink = Template.bind({});
NotLink.args = {
  name: 'Kojima Haruna',
  nameLang: 'en',
  number: 1,
  caption: 'center',
  image: {
    sm: '/images/members/others/kojimaharuna@1x.jpg',
    md: '/images/members/others/kojimaharuna@2x.jpg',
    lg: '/images/members/others/kojimaharuna@3x.jpg',
  },
};
