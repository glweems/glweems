/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';
import { truncate } from '../utils/helpers';
import { media } from '../utils/theme';
import Tags from './Tags';
import { BehanceImage } from '../declaration';

interface Card {
  title: string;
  subtitle: string;
  img: object;
  link?: string;
  tags: string[];
  images?: BehanceImage[];
  slider?: boolean;
}

const Header = styled.h4`
  color: ${props => props.theme.colors.yellow};
  margin-top: 0;
  margin-bottom: 0.5em;
  padding: 0 0.5em;
  cursor: pointer;
`;
const Subtitle = styled.small`
  padding: 0.5em 1em;
  margin: 0;
  color: ${props => props.theme.colors.muted};
  background: ${props => props.theme.colors.bg};
  overflow: hidden;
`;

const AnimatedImg = animated(Img);

const Image = styled(AnimatedImg)`
  cursor: pointer;
`;

const Footer = styled.div`
  color: ${props => props.theme.colors.green};
  overflow: hidden;
  margin: 0;
  padding: 0 0.5em 0.25em 0.5em;
  border: 2px solid ${props => props.theme.colors.bg};
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 4.5em 2em;
  gap: 0 0.25em;
  grid-template-areas:
    'Header Header'
    'Subtitle Image'
    'Footer Image';

  ${Header} {
    grid-area: Header;
  }

  ${Subtitle} {
    grid-area: Subtitle;
    border-top-left-radius: ${props => props.theme.borderRadius};
  }

  ${Footer} {
    grid-area: Footer;
    border-bottom-left-radius: ${props => props.theme.borderRadius};
  }

  ${Image} {
    grid-area: Image;
    border-top-right-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
  }

  ${media.greaterThan('sm')`
    grid-template-columns: 1fr;
    grid-template-rows: 2.4em 8em  auto  auto;

    grid-template-areas:
      'Header'
      'Image'
      'Subtitle'
      'Footer';

    ${Subtitle} {
      border-radius: 0;
    }

    ${Footer} {
      border-radius: 0;
      border-bottom-left-radius: ${props => props.theme.borderRadius};
      border-bottom-right-radius: ${props => props.theme.borderRadius};
    }

    ${Image} {
      grid-area: Image;
      border-radius: 0;
      border-top-right-radius: ${props => props.theme.borderRadius};
      border-top-left-radius: ${props => props.theme.borderRadius};
    }

  `};
`;

const Card = ({ title, subtitle, img, link, tags, images }: Card) => {
  const go = () => (link ? navigate(link) : null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = img
    ? null
    : !images || currentIndex >= images.length - 1
    ? 0
    : currentIndex + 1;

  const changeImage = () => (img ? null : setCurrentIndex(!img ? nextIndex : null));

  return (
    <StyledCard onMouseEnter={changeImage} onMouseLeave={changeImage} onClick={go}>
      <Header>{truncate(title, 60)}</Header>
      <Subtitle>{subtitle}</Subtitle>
      <Footer>{<Tags items={tags} />}</Footer>
      {img && !images ? (
        <Image {...img} />
      ) : (
        <Image fluid={images[currentIndex].childImageSharp.fluid} />
      )}
    </StyledCard>
  );
};

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1.5em;
  ${media.greaterThan('sm')`
    grid-template-columns: repeat(2, 1fr);
`}
  ${media.greaterThan('lg')`
    grid-template-columns: repeat(3, 1fr);
`}
`;

export default Card;
