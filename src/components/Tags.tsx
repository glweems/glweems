import React from 'react';
import styled from 'styled-components';

const StyledTags = styled.div`
  white-space: nowrap;
  overflow-x: auto;
`;

const Tag = styled.small`
  border-radius: 0.5em;
  /* font-size: 11px; */
  padding: 0 0.4em 0.3em;
  color: ${props => props.theme.lightColors.bg};
  margin-right: 0.25em;
`;

const Tags = ({ items }: { items: string[] }) => (
  <StyledTags>
    {items.map(item => (
      <Tag key={item}>#{item.toLocaleLowerCase()}</Tag>
    ))}
  </StyledTags>
);

export default Tags;
