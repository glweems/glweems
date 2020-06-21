import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import useSiteTags from '../hooks/useSiteTags';
import { remainingHeight, rhythm, secondaryTheme } from '../theme';
import { Divider, Tag } from './Common';

interface Tag {
  tag: string;
  qty: number;
}

const Wrapper = styled.div`
  height: 100%;
  max-height: ${remainingHeight};
  padding: ${rhythm(2)} 0;
  overflow: auto;
  ${secondaryTheme};
  h2 {
    margin-bottom: 0;
  }

  .tags-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const TagBar: React.FC<{}> = () => {
  const { tags, qty } = useSiteTags();
  return (
    <Wrapper className="tagbar">
      <h2>{qty} tags</h2>
      <Divider />
      <div className="tags-wrapper">
        {tags.map(({ tag, qty }: Tag) => (
          <Tag key={tag} to={`/tags/${_.kebabCase(tag)}/`}>
            {tag} ({qty})
          </Tag>
        ))}
      </div>
    </Wrapper>
  );
};
