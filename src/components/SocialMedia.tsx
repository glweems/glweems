import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';

interface IconData {
  name: string;
  link: string;
  Icon: IconDefinition;
}

const data: IconData[] = [
  {
    name: 'Facebook',
    link: 'https://facebook.com/cheatdaycheesecakes',
    Icon: faFacebook,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/cheatdaycheesecake',
    Icon: faInstagram,
  },
  {
    name: 'Yelp',
    link: 'https://yelp.com/biz/cheat-day-cheescakes-denton',
    Icon: faYelp,
  },
];

interface IconSize {
  size:
    | '1x'
    | 'xs'
    | 'lg'
    | 'sm'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x'
    | undefined;
}

interface LinkData extends IconSize {
  name: string;
  link: string;
  Icon: IconDefinition;
}

interface SocialMediaIconsProps extends LinkData {
  fontSize?: string;
  marginRight?: string;
  items?: LinkData[];
  noIcon?: boolean;
  noText?: boolean;
}

const SocialMediaIcon = ({
  name,
  link,
  Icon,
  fontSize,
  marginRight,
  noText,
  noIcon,
  size,
}: SocialMediaIconsProps) => (
  <div style={{ fontSize, marginRight }}>
    <a href={link} target="_blank_">
      {noIcon ? null : (
        <FontAwesomeIcon icon={Icon} style={{ marginRight: '0.75em' }} size={size} />
      )}
      {noText ? null : name}
    </a>
  </div>
);

const SocialMediaIcons = ({
  fontSize = '1em',
  marginRight = '0.5em',
  noText,
  noIcon,
  size,
}: SocialMediaIconsProps) =>
  data.map((item: any) => (
    <SocialMediaIcon
      key={item.name}
      {...item}
      size={size}
      noIcon={noIcon}
      noText={noText}
      fontSize={fontSize}
      marginRight={marginRight}
    />
  ));

export default SocialMediaIcons;
