import { motion } from 'framer-motion';
import { Link, navigate } from 'gatsby';
import { transparentize } from 'polished';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Icon from '../assets/book.svg';
import Box from './Common/Box';
import Button from './Common/Button';

type CardProps = {
  title?: string;
  excerpt?: string;
  date?: string;
  path?: string;
  Image?: any;
  linkText?: string;
  tags?: string[];
};

export default function Card({
  title,
  excerpt,
  date,
  path,
  Image,
  linkText,
  children,
  tags,
}: PropsWithChildren<CardProps>) {
  function handleImgClick(event: React.MouseEvent) {
    navigate(event.currentTarget.id);
  }

  return (
    <Styled>
      <Box className="Card--content" pl={2}>
        {tags && <div></div>}
        {title && (
          <h2 className="Card--title">
            {path ? <Link to={path}>{title}</Link> : title}
          </h2>
        )}
        {date && <small className="date"> {date}</small>}
        <div className="Card--body">
          {excerpt && <p className="Card--excerpt">{excerpt}</p>}
          {path && (
            <Button
              as={Link}
              to={path}
              className="Card--link"
              aria-label={`View ${title}`}
              variant="primary"
            >
              {linkText}
            </Button>
          )}
          {children}
        </div>
      </Box>

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
  grid-template-areas: 'image content';
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space[4]};

  .Card--body {
    padding: ${({ theme }) => theme.space[1]};
  }
  .Card--link {
  }

  .Card--title {
    color: ${({ theme }) => theme.colors.text};
  }
  .Card--excerpt {
    color: ${({ theme }) => transparentize(0.2, theme.colors.text)};
  }
  .Card--container--image {
    grid-area: image;
  }
`;

Card.defaultProps = {
  linkText: 'Read',
};
