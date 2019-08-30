/* eslint-disable no-nested-ternary */
import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { media } from '../utils/theme';
import Tags from './Tags';
import { Child } from '..';

interface Card {
  title: string;
  subtitle: string;
  link?: string;
  tags: string[];
  children?: Child;
  Image?: React.ReactElement;
}

const StyledCard = styled.div`
  display: grid;
  grid-template-rows: auto 12em 1fr auto;
  grid-template-columns: 1fr;
  align-content: flex-start;
  color: ${props => props.theme.colors.muted};
  background: ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};
  :hover {
    box-shadow: ${props => props.theme.hoverShadow};
    transform: scale(1.0125);
  }
  transition: all 0.7s ease 0s;
`;

const Header = styled.div`
  padding: 0 0.5em;
  overflow: hidden;
  .title {
    margin: 0;
    padding: 0.5em 0.25em;
    overflow: hidden;
    color: ${props => props.theme.colors.yellow};
    font-size: 1.25em;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
`;

const Body = styled.div`
  padding: 0.5em 0.5em;
  background: ${props => props.theme.colors.bg};
`;

const Footer = styled.div`
  margin: 0;
  padding: 0 0.5em 0.25em 0.5em;
  overflow: hidden;
  color: ${props => props.theme.colors.green};
`;

const Card = ({
  title = 'Card Title',
  subtitle = 'This is the cards subtitle',
  link,
  tags = ['one', 'two', 'three'],
  children,
  Image,
}: Card) => {
  const go = () => (link ? navigate(link) : null);

  return (
    <StyledCard onClick={go}>
      <Header>
        <h4 className="title">{title}</h4>
      </Header>
      {Image || { Image }}

      <Body>
        <p>{subtitle}</p>
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
