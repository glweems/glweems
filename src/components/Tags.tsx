import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

interface TagsProps {
  tags?: string[];
  className?: string;
  limit?: number;
}

const Tags: React.FC<TagsProps> = ({ tags, className, limit }) => {
  if (!tags) return null;
  return (
    <Wrapper className={`tags keen-slider ${className}`}>
      {tags.slice(0, limit || tags.length).map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  > *:not(:last-child) {
    margin-right: 0.75em;
  }
  margin-bottom: 0.5em;
`;

Tags.defaultProps = {
  limit: 3
};

export default Tags;
