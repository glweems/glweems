import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface TagProps {
  tag: string;
  prefix?: string;
}

export default function Tag({
  tag,
  prefix = '/tags/',
  ...props
}: TagProps): ReactElement {
  return (
    <Wrapper to={`${prefix}${kebabCase(tag)}`} {...props}>
      {tag}
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  display: block;
  padding: 5px 10px;
  color: inherit;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 22px;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 3px;
`;

Tag.displayName = 'Tag';
