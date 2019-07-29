import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faMediumM,
  faBehance,
  faLinkedinIn,
  faGithub,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';

interface IconData {
  name: string;
  link: string;
  icon: IconDefinition;
}

const data: IconData[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/glweems',
    icon: faLinkedinIn,
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@glweems',
    icon: faMediumM,
  },
  {
    name: 'Behance',
    link: 'https://www.behance.net/glweems',
    icon: faBehance,
  },
  {
    name: 'Github',
    link: 'https://github.com/glweems',
    icon: faGithub,
  },
  {
    name: 'Codepen',
    link: 'https://codepen.io/glweems',
    icon: faCodepen,
  },
];

interface SocialMediaIconProps {
  name: string;
  link: string;
  icon: IconDefinition;
  fontSize: string;
  marginRight: string;
  noText: boolean;
  noIcon: boolean;
  size:
    | 'xs'
    | 'lg'
    | 'sm'
    | '1x'
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
  horizontal: boolean;
}

const SocialMediaIcon = ({
  name,
  link,
  icon,
  fontSize,
  marginRight,
  noText,
  noIcon,
  size,
}: SocialMediaIconProps) => (
  <div style={{ fontSize, marginRight }}>
    <a href={link} target="_blank_">
      {noIcon ? null : (
        <FontAwesomeIcon icon={icon} style={{ marginRight: '0.75em' }} size={size} />
      )}
      {noText ? null : name}
    </a>
  </div>
);

interface SocialMediaIcons {
  name: string;
  link: string;
  icon: IconDefinition;
  fontSize: string;
  marginRight: string;
  noText: boolean;
  noIcon: boolean;
  size:
    | 'xs'
    | 'lg'
    | 'sm'
    | '1x'
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
  horizontal: boolean;
}

const SocialMediaIcons = ({
  marginRight = '0.5em',
  noText,
  noIcon,
  size,
  horizontal = false,
}: SocialMediaIcons) => (
  <div className={horizontal ? 'flex' : ''}>
    {data.map(item => (
      <SocialMediaIcon
        key={item.name}
        {...item}
        size={size}
        noIcon={noIcon}
        noText={noText}
        marginRight={marginRight}
      />
    ))}
  </div>
);

export default SocialMediaIcons;
