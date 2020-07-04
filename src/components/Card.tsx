import { motion } from 'framer-motion';
import { Link, navigateTo } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import '../utils/index.module.css';
import { media } from '../theme';

type CardProps = {
  title?: string;
  excerpt?: string;
  date?: string;
  path?: string;
  Image?: any;
  linkText?: string;
};

export default function Card({
  title,
  excerpt,
  date,
  path,
  Image,
  linkText,
  children,
}: PropsWithChildren<CardProps>) {
  function handleImgClick(event: React.MouseEvent) {
    navigateTo(event.currentTarget.id);
  }

  return (
    <Styled>
      <div className="Card--container--body">
        {date && <small className="date"> {date}</small>}
        {title && <h2>{path ? <Link to={path}>{title}</Link> : title}</h2>}
        {excerpt && <div>{excerpt}</div>}
        {path && <Link to={path}>{linkText}</Link>}
        {children}
      </div>

      {Image && (
        <motion.div
          id={path}
          onClick={handleImgClick}
          className="Card--container--image"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.975 }}
        >
          {Image}
        </motion.div>
      )}
    </Styled>
  );
}

const Styled = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: ${({ theme }) => theme.space[2]};

  margin-bottom: ${({ theme }) => theme.space[4]};

  ${media.greaterThan('sm')``};

  .Card--container--body {
    /* grid-column: 2 / -1; */
  }
  .Card--container--image {
    /* grid-column: 1 / 2; */
    /* height: 100%; */
    cursor: pointer;
  }

  h2 {
    margin: 0;
  }
`;

Card.defaultProps = {
  linkText: 'Read',
};
