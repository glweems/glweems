import React from 'react';
import styled from 'styled-components';

const StyledTags = styled.div`
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: hidden;
  text-overflow: hidden;
`;

const Tag = styled.span`
  background: ${(props: StyleProps) => props.theme.dark};
  border-radius: 0.5em;
  font-size: 13px;
  padding: 0 0.4em 0.3em;
  color: $muted;
  margin-right: 0.75em;
`;

const Tags = ({ items }: { items: string[] }) => (
  <StyledTags>
    {items.map(item => (
      <Tag key={item}>{item}</Tag>
    ))}
  </StyledTags>
);

export default Tags;
