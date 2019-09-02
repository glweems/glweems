import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTrail, animated as a } from 'react-spring';
import { transparentize } from 'polished';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { SizeProp, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { socialMedia } from '../utils/data';
import Flex from './Flex';

// const IconLink = styled(OutboundLink)<IconLinkProps>`
//   display: flex;
//   align-content: center;
//   margin: 0 auto;
//   padding: 0.5em 0.25em;
//   text-align: center;
//   border-radius: 0.5em;
//   :hover {
//     background: ${props => transparentize(0.8, props.theme.lightColors.muted)};
//   }
// `;

export interface SocialMediaIconsProps {
  delay?: number;
  size?: SizeProp;
  withAnimation?: boolean;
  show?: 'text' | 'icon' | undefined;
}

interface ColorOptions {
  light: string;
  dark: string;
}

export interface SocialIconProps {
  name: string;
  link: string;
  icon: IconDefinition;
  size: SizeProp;
  show?: 'text' | 'icon' | undefined;
  colors: ColorOptions;
}

interface IconLinkProps {
  colors: ColorOptions;
}

const IconLink = styled(OutboundLink)<IconLinkProps>`
  padding: 0.5em;
  color: ${props =>
    !props.theme.isDarkMode ? props.colors.dark : props.colors.light};
  text-align: center;
  border-radius: 0.5em;
  :hover {
    background: ${props => transparentize(0.8, props.theme.lightColors.muted)};
  }
`;

export const SocialIcon = ({
  name,
  link,
  icon,
  color,
  size,
  show,
  colors,
}: SocialIconProps) => {
  const WhatToShow = ({ decide }: { decide: 'text' | 'icon' | undefined }) => {
    if (decide === 'icon') {
      return (
        <FontAwesomeIcon
          icon={icon}
          size={size}
          style={{ marginRight: '.5em' }}
        />
      );
    }
    if (decide === 'text') {
      return <span>{name}</span>;
    }
    return (
      <div>
        <FontAwesomeIcon
          icon={icon}
          size={size}
          style={{ marginRight: '.5em' }}
        />
        <span>{name}</span>
      </div>
    );
  };

  return (
    <IconLink href={link} color={color} colors={colors} target="_blank_">
      <WhatToShow decide={show} />
    </IconLink>
  );
};

const SocialMediaIcons = ({
  withAnimation = true,
  delay = 1250,
  size = 'lg',
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
      {trail.map(({ opacity }, i) => (
        <a.div
          key={socialMedia[i].name}
          className="trails-text"
          style={{
            opacity,
          }}
        >
          <SocialIcon
            key={socialMedia[i].name}
            {...socialMedia[i]}
            size={size}
            show={show}
            colors={socialMedia[i].colors}
          />
        </a.div>
      ))}
    </Flex>
  ) : (
    socialMedia.map(({ name, link, icon, colors }) => (
      <SocialIcon
        key={name}
        name={name}
        link={link}
        icon={icon}
        colors={colors}
        size={size}
        show={show}
      />
    ))
  );
};

export default SocialMediaIcons;
