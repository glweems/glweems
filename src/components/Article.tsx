import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import { Theme } from '../theme';
import '../utils/index.module.css';

type ArticleProps = {
  title?: string;
  excerpt?: string;
  date?: string;
  path?: string;
  Image?: any;
  linkText?: string;
};

export default function Article({ title, excerpt, date, path, Image, linkText }: ArticleProps) {
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 1fr 200px;
        grid-template-rows: 200px;
        gap: ${(props: { theme: Theme }) => props.theme.space[2]}px;
        padding: ${(props: { theme: Theme }) => props.theme.space[2]}px;
      `}
    >
      <div>
        {title && (
          <h2>
            <Link to={path}>{title}</Link>
          </h2>
        )}
        {excerpt && <div>{excerpt}</div>}
        {date && <div>{date}</div>}
        {path && <Link to={path}>{linkText}</Link>}
      </div>
      <div>
        {Image && (
          <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.975 }}>
            {Image}
          </motion.div>
        )}
      </div>
    </div>
  );
}

Article.defaultProps = {
  linkText: 'Read',
};
