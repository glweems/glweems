import React from 'react';
import Box from './Common/Box';
import Tag from './Tag';

export interface TagsProps {
  tags?: string[];
  limit?: number;
}

const Tags: React.FC<TagsProps> = ({ tags, limit }) => {
  if (!tags) return null;
  return (
    <Box
      className="tags"
      display="flex"
      alignContent="center"
      alignItems="center"
    >
      {tags.slice(0, limit || tags.length).map((tag) => (
        <Tag
          key={tag}
          css={`
            margin-right: ${({ theme }) => theme.space[2]};
          `}
        >
          {tag}
        </Tag>
      ))}
    </Box>
  );
};

Tags.defaultProps = {
  limit: 3,
};

export default Tags;
