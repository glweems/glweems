import React from 'react';
import styled from 'styled-components';

const StyledTags = styled.div`
  overflow-x: auto;
  white-space: nowrap;
`;

const Tag = styled.small`
  margin-right: 0.25em;
  padding: 0 0.4em 0.3em;
  color: ${props => props.theme.lightColors.bg};
  border-radius: 0.5em;
`;

const Tags = ({ items }: { items: string[] }) => (
  <StyledTags>
    {items.map(item => (
      <Tag key={item}>#{item.toLocaleLowerCase()}</Tag>
    ))}
  </StyledTags>
);

export default Tags;
