import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { useTrail, animated as a } from 'react-spring';
import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faBehance,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { socialMedia, SocialMedia } from '../utils/data';
import Flex from './Flex';

export const socialMediaData = {
  github: {
    name: 'Github',
    link: 'https://github.com/glweems',
    icon: faGithubAlt,
    color: '#333',
    colors: {
      light: '#f7f7f7',
      dark: '#333',
    },
  },
  linkedin: {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/glweems',
    icon: faLinkedinIn,
    color: '#0077B5',
    colors: {
      light: '#0077B5',
      dark: '#0077B5',
    },
  },
  medium: {
    name: 'Medium',
    link: 'https://medium.com/@glweems',
    icon: faMediumM,
    color: '#00ab6c',
    colors: {
      light: '#00ab6c',
      dark: '#00ab6c',
    },
  },
  behance: {
    name: 'Behance',
    link: 'https://www.behance.net/glweems',
    icon: faBehance,
    color: '#1769ff',
    colors: {
      light: '#1769ff',
      dark: '#1769ff',
    },
  },
  codepen: {
    name: 'Codepen',
    link: 'https://codepen.io/glweems',
    icon: faCodepen,
    color: '#ff3c41',
    colors: {
      light: '#ff3c41',
      dark: '#ff3c41',
    },
  },
};

interface SocialIcon {
  account: SocialMedia;
}
export const SocialIcon = ({ account: { name, link, icon, color } }: SocialIcon) => {
  return (
    <IconLink href={link} iconColor={color}>
      <FontAwesomeIcon icon={icon} />
    </IconLink>
  );
};

const IconLink = styled('a')<{ iconColor: string }>`
  width: 3em;
  margin-right: 1em;
  text-align: center;
  background: ${props => props.theme.colors.light};
  border: 2px solid ${props => props.theme.lightColors.muted};
  border-radius: 0.75em;
  vertical-align: middle;
  padding: 0.5em;
  color: ${props => props.iconColor};
  :hover {
    background: ${props => props.theme.darkColors.light};
  }
  svg {
    margin: 0;

    padding: 0;
  }
`;

const SocialMediaIcons = () => (
  <>
    {socialMedia.map(({ name, link, icon, color }) => (
      <IconLink key={name} href={link} target="_blank_" iconColor={color}>
        <FontAwesomeIcon icon={icon} size="lg" />
      </IconLink>
    ))}
  </>
);

const config = { mass: 5, tension: 2000, friction: 200 };
interface Props {
  delay?: number;
}
export const AnimatedSocialMedia = ({ delay = 1250 }: Props) => {
  const [toggle, set] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(state => !state);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const trail = useTrail(socialMedia.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Flex>
      {trail.map(({ ...rest }, i) => (
        <a.div
          key={socialMedia[i].name}
          className="trails-text"
          style={{
            ...rest,
          }}
        >
          <IconLink href={socialMedia[i].link} target="_blank_" iconColor={socialMedia[i].color}>
            <FontAwesomeIcon icon={socialMedia[i].icon} size="lg" />
          </IconLink>
        </a.div>
      ))}
    </Flex>
  );
};

export default SocialMediaIcons;
