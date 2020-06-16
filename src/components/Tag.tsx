import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { secondaryTheme } from '../theme';
import kebabCase from 'lodash/kebabCase';

interface TagProps {
  tag: string;
  prefix?: string;
}

export default function Tag({ tag, prefix = '/tags/' }: TagProps): ReactElement {
  return <Wrapper to={`${prefix}${kebabCase(tag)}`}>{tag}</Wrapper>;
}

const Wrapper = styled(Link)`
  ${secondaryTheme};
  display: block;
  padding: 5px 10px;
  color: inherit;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  line-height: 22px;
  white-space: nowrap;
  text-transform: lowercase;
  text-decoration: none;
  border-radius: 3px;
`;
