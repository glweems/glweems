import { motion } from 'framer-motion';
import { Link, navigateTo } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import '../utils/index.module.css';

type ArticleProps = {
  title?: string;
  excerpt?: string;
  date?: string;
  path?: string;
  Image?: any;
  linkText?: string;
};

export default function Article({
  title,
  excerpt,
  date,
  path,
  Image,
  linkText,
}: ArticleProps) {
  function handleImgClick(event: React.MouseEvent) {
    navigateTo(event.currentTarget.id);
  }

  return (
    <Styled>
      <div>
        {date && <small className="date"> {date}</small>}
        {title && <h2>{path ? <Link to={path}>{title}</Link> : title}</h2>}
        {excerpt && <div>{excerpt}</div>}
        {path && <Link to={path}>{linkText}</Link>}
      </div>

      {Image && (
        <motion.div
          id={path}
          onClick={handleImgClick}
          className="article--container--image"
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
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.space[2]};

  margin-bottom: ${({ theme }) => theme.space[4]};

  .article--container--image {
    cursor: pointer;
  }
  h2 {
    margin: 0;
  }
`;

Article.defaultProps = {
  linkText: 'Read',
};
