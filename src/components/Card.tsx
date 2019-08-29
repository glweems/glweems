/* eslint-disable no-nested-ternary */
import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { FluidObject, FixedObject } from 'gatsby-image';
import { media, Image } from '../utils/theme';
import Tags from './Tags';
import { Child } from '..';

interface Card {
  title: string;
  subtitle: string;
  link?: string;
  tags: string[];
  children?: Child;
  img: {
    fluid: FluidObject;
    fixed: FixedObject;
  };
}

const Header = styled.h4`
  margin-top: 0;
  margin-bottom: 0.5em;
  padding: 0 0.5em;
  color: ${props => props.theme.colors.yellow};
  cursor: pointer;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0.5em 1em;
  overflow: hidden;
  color: ${props => props.theme.colors.muted};
  font-size: 15px;
  line-height: 1.5;
  background: ${props => props.theme.colors.bg};
`;

const Footer = styled.div`
  margin: 0;
  padding: 0 0.5em 0.25em 0.5em;
  overflow: hidden;
  color: ${props => props.theme.colors.green};
  border: 2px solid ${props => props.theme.colors.bg};
`;

const StyledCard = styled.div`
  display: grid;
  grid-template-areas:
    'Header Header'
    'Body Image'
    'Footer Image';
  grid-template-rows: 1fr 4.5em 2em;
  grid-template-columns: 3fr 1fr;
  gap: 0 0.25em;

  ${Header} {
    grid-area: Header;
  }

  ${Body} {
    grid-area: Body;
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
      'Body'
      'Footer';

    ${Body} {
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
  img,
}: Card) => {
  const go = () => (link ? navigate(link) : null);

  return (
    <StyledCard onClick={go}>
      <Image {...img} />
      <Header>{title}</Header>
      <Body>
        <small>{subtitle}</small>
        {children}
      </Body>
      <Footer>{<Tags items={tags} />}</Footer>
    </StyledCard>
  );
};

export default Card;

export const Cards = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 1.5em;
  ${media.greaterThan('sm')`
    grid-template-columns: repeat(2, 1fr);
`}
  ${media.greaterThan('lg')`
    grid-template-columns: repeat(3, 1fr);
`}
`;
