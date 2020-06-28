/* eslint-disable no-nested-ternary */
import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import Tags from './Tags';
import { rootBg, borderRadius, text, media, rhythm } from '../theme';
import { Link } from './Common';
import Box from './Common/Box';

export interface CardProps {
  title: string;
  subtitle: string;
  link?: string;
  tags: string[];
  children?: React.ReactNode;
  Image?: any;
}

export default function Card({
  title,
  subtitle,
  link,
  tags,
  children,
  Image,
}: CardProps) {
  const go = () => (link ? navigate(link) : null);

  return (
    <Wrapper>
      <div className="header">
        <h4 className="title">
          {link ? <Link to={link}>{title}</Link> : title}
        </h4>
      </div>

      {Image || <Box onClick={go}>{Image}</Box>}

      <div className="body">
        {subtitle && <p className="header">{subtitle}</p>}
        {children}
      </div>

      {tags && <Tags tags={tags} />}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 12em 1fr max-content;
  grid-template-columns: 1fr;
  align-content: flex-start;
  color: ${text};
  border-radius: ${borderRadius};
  cursor: pointer;
  :hover {
    background: ${rootBg};
    .gatsby-image-wrapper {
      transform: scale(1.01);
    }
  }
  transition: all 0.25s ease 0s;
  .header {
    padding: 0 0.5em;
    overflow: hidden;
    .title {
      margin-bottom: 0.5em;
      padding: 0.5em 0.25em;
      overflow: hidden;
      font-size: 1.25em;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }
  }
  .body {
    padding: 1em 0.5em;

    .subtitle {
      margin-bottom: 0;
    }
  }

  .tags {
    margin: 0;
    padding: 0 0.5em 0.25em 0.5em;
    color: ${text};
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  gap: ${rhythm(1)};

  ${media.greaterThan('md')`
      grid-template-columns: repeat(2, 1fr);
    `}

  ${media.greaterThan('lg')`
      grid-template-columns: repeat(3, 1fr);
    `}
`;
