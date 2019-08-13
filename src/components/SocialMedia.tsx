import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faMediumM,
  faBehance,
  faLinkedinIn,
  faCodepen,
  faGithubAlt,
} from '@fortawesome/free-brands-svg-icons';
import { useTrail, animated as a } from 'react-spring';
import Flex from './Flex';

interface IconData {
  name: string;
  link: string;
  icon: IconDefinition;
  color: string;
}

const items: IconData[] = [
  {
    name: `Github`,
    link: `https://github.com/glweems`,
    icon: faGithubAlt,
    color: `#333`,
  },
  {
    name: `LinkedIn`,
    link: `https://www.linkedin.com/in/glweems`,
    icon: faLinkedinIn,
    color: `#0077B5`,
  },
  {
    name: `Medium`,
    link: `https://medium.com/@glweems`,
    icon: faMediumM,
    color: `#00ab6c`,
  },
  {
    name: `Behance`,
    link: `https://www.behance.net/glweems`,
    icon: faBehance,
    color: `#1769ff`,
  },
  {
    name: `Codepen`,
    link: `https://codepen.io/glweems`,
    icon: faCodepen,
    color: `#ff3c41`,
  },
];

interface SocialMediaIconProps {
  name: string;
  link: string;
  icon: IconDefinition;
  fontSize?: string;
  marginRight?: string;
  noText?: boolean;
  noIcon?: boolean;
  size?:
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
  horizontal?: boolean;
}

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
    {items.map(({ name, link, icon, color }) => (
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
export const AnimatedSociaMedia = ({ delay = 1250 }: Props) => {
  const [toggle, set] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(state => !state);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Flex>
      {trail.map(({ x, ...rest }, i) => (
        <a.div
          key={items[i].name}
          className="trails-text"
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,0,${x}px)`),
          }}
        >
          <IconLink
            href={items[i].link}
            target="_blank_"
            iconColor={items[i].color}
            // style={{ width }}
          >
            <FontAwesomeIcon icon={items[i].icon} size="lg" />
          </IconLink>
        </a.div>
      ))}
    </Flex>
  );
};

export default SocialMediaIcons;
