import React from 'react';
import styled from 'styled-components';
import * as config from '../theme';

const StyledTags = styled.div`
  display: flex;
  > *:not(:last-child) {
    margin-right: 0.75em;
  }
  margin-bottom: 0.5em;
`;

const Tag = styled.small`
  padding: 0.3em 0.5em;
  color: ${config.base.dark};
  font-weight: bold;
  font-size: 65%;
  text-transform: uppercase;
  vertical-align: middle;
  background: ${config.purple};
  border-radius: 0.5em;
`;

const Tags = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => (
  <StyledTags className={`hashtags ${className}`}>
    {items.slice(0, 3).map(item => (
      <Tag key={item} className="hashtag">
        {item.toLocaleLowerCase()}
      </Tag>
    ))}
  </StyledTags>
);

export default Tags;
