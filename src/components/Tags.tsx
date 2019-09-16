import React from 'react';
import styled from 'styled-components';
import * as config from '../style';

const StyledTags = styled.div`
  display: flex;
  > *:not(:last-child) {
    margin-right: 0.75em;
  }
  margin-bottom: 0.5em;
`;

const Tag = styled.small`
  padding: 0.3em 0.5em;
  color: ${config.bg};
  font-weight: bold;
  font-size: 65%;
  text-transform: uppercase;
  vertical-align: middle;
  background: ${config.primary};
  border-radius: 0.5em;
`;

const Tags = ({ items }: { items: string[] }) => (
  <StyledTags>
    {items.slice(0, 3).map(item => (
      <Tag key={item}>{item.toLocaleLowerCase()}</Tag>
    ))}
  </StyledTags>
);

export default Tags;
