import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTrail, animated as a } from 'react-spring';
import { transparentize } from 'polished';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { socialMedia } from '../utils/data';
import Flex from './Flex';
import { SocialMediaIconsProps, SocialIconProps } from '../index';

const IconLink = styled(OutboundLink)<{ color: string; mode?: 'light' | 'dark' }>`
  padding: 0.5em;
  color: ${props => (props.mode ? props.theme.colors[props.mode] : props.color)};
  text-align: center;
  border-radius: 0.5em;
  :hover {
    background: ${props => transparentize(0.8, props.theme.lightColors.muted)};
  }
`;

export const SocialIcon = ({ name, link, icon, color, size, mode, show }: SocialIconProps) => {
  const WhatToShow = ({ decide }: { decide: 'text' | 'icon' | undefined }) => {
    if (decide === 'icon') {
      return <FontAwesomeIcon icon={icon} size={size} style={{ marginRight: '.5em' }} />;
    }
    if (decide === 'text') {
      return <span>{name}</span>;
    }
    return (
      <>
        <FontAwesomeIcon icon={icon} size={size} style={{ marginRight: '.5em' }} />
        <span>{name}</span>
      </>
    );
  };

  return (
    <IconLink href={link} color={color} mode={mode} target="_blank_">
      <WhatToShow decide={show} />
    </IconLink>
  );
};

const SocialMediaIcons = ({
  withAnimation = true,
  delay = 1250,
  size = 'lg',
  mode,
  show,
}: SocialMediaIconsProps) => {
  const [toggle, set] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(state => !state);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const trail = useTrail(socialMedia.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: toggle ? 1 : 0,
    from: { opacity: 0 },
  });

  return withAnimation ? (
    <Flex>
      {trail.map(({ ...rest }, i) => (
        <a.div
          key={socialMedia[i].name}
          className="trails-text"
          style={{
            ...rest,
          }}
        >
          <SocialIcon
            key={socialMedia[i].name}
            {...socialMedia[i]}
            mode={mode}
            size={size}
            show={show}
          />
        </a.div>
      ))}
    </Flex>
  ) : (
    <>
      {socialMedia.map(icon => (
        <SocialIcon key={icon.name} {...icon} mode={mode} size={size} show={show} />
      ))}
    </>
  );
};

export default SocialMediaIcons;
