/* eslint-disable no-nested-ternary */
import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import theme from 'styled-theming';
import Tags from './Tags';
import { Child } from '..';
import * as config from '../style';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 12em 1fr auto;
  grid-template-columns: 1fr;
  align-content: flex-start;
  color: ${config.muted};
  background: ${config.rootBg};
  border-radius: ${config.borderRadius};
  box-shadow: ${config.shadow};
  :hover {
    box-shadow: ${config.hoverShadow};
    transform: scale(1.0125);
  }
  transition: all 0.7s ease 0s;
`;

export const Header = styled.div`
  padding: 0 0.5em;
  overflow: hidden;
  .title {
    margin: 0;
    padding: 0.5em 0.25em;
    overflow: hidden;
    color: ${theme('mode', {
      light: config.red,
      dark: config.yellow,
    })};
    font-size: 1.25em;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
`;

export const Body = styled.div`
  padding: 0.5em 0.5em;
`;

export const Footer = styled.div`
  margin: 0;
  padding: 0 0.5em 0.25em 0.5em;
  overflow: hidden;
  color: ${config.green};
`;

interface Card {
  title: string;
  subtitle: string;
  link?: string;
  tags: string[];
  children?: Child;
  Image?: React.ReactElement;
}

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
    <Wrapper onClick={go}>
      <Header>
        <h4 className="title">{title}</h4>
      </Header>
      {Image || { Image }}

      <Body>
        <p>{subtitle}</p>
        {children}
      </Body>
      <Footer>{<Tags items={tags} />}</Footer>
    </Wrapper>
  );
};

export default Card;

export const Cards = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  gap: 1.5em;
  ${config.media.greaterThan('sm')`
    grid-template-columns: repeat(2, 1fr);
`}
`;
