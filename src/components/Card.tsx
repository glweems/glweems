/* eslint-disable no-nested-ternary */
import React from 'react';
import { navigate } from 'gatsby';
import styled, { StyledFunction } from 'styled-components';
import { truncate } from '../utils/helpers';
import { media, Image } from '../utils/theme';
import Tags from './Tags';
import { BehanceImage } from '../declaration';

interface Card {
  title: string;
  subtitle: string;
  link?: string;
  tags: string[];
  children: any;
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

const Card = ({
  title = 'Card Title',
  subtitle = 'This is the cards subtitle',
  link,
  tags = ['one', 'two', 'three'],
  children,
}: Card) => {
  const go = () => (link ? navigate(link) : null);

  return (
    <StyledCard onClick={go}>
      {children}
      <Header>{truncate(title, 60)}</Header>
      <Subtitle>{subtitle}</Subtitle>
      <Footer>{<Tags items={tags} />}</Footer>
    </StyledCard>
  );
};

export default Card;

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
