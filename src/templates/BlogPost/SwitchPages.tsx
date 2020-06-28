import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faHandPointLeft, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../../components/Common/Container';
import { muted } from '../../theme';
import { rhythm } from '../../utils/typography';
import { BlogTemplateQuery } from '../../types/generated';
import { Link } from 'gatsby';

interface Props {
  config: {
    prev: BlogTemplateQuery['prev'];
    next: BlogTemplateQuery['next'];
  };
}
type PostLinkProps = {
  info: { prev: BlogTemplateQuery['prev']; next: BlogTemplateQuery['next'] };
  direction: 'prev' | 'next';
  icon: IconDefinition;
} & any;

const PostLink: React.FC<PostLinkProps> = ({ info, direction, icon }) => {
  return info && info.frontmatter && info.frontmatter.path && info.frontmatter.title ? (
    <div className={direction}>
      <small>{direction}</small>
      <br />
      <Link to={info.frontmatter.path}>
        {direction !== 'prev' || <FaIcon icon={icon} size="1x" />}
        {info.frontmatter.title}
        {direction !== 'next' || <FaIcon icon={icon} size="1x" />}
      </Link>
    </div>
  ) : (
    <div />
  );
};

export const SwitchPages: React.FC<Props> = ({ config: { prev, next } }) => {
  return (
    <Container>
      <Wrapper>
        <PostLink info={prev} direction="prev" icon={faHandPointLeft} />
        <PostLink info={next} direction="next" icon={faHandPointRight} />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${rhythm(1)};

  small {
    color: ${muted};
    font-weight: bold;
    letter-spacing: 1px;
  }

  svg {
    opacity: 0.5;
  }

  .link {
    font-size: 95%;
  }

  .prev {
    float: left;
    text-align: left;
    svg {
      margin-right: ${rhythm(0.5)};
    }
  }

  .next {
    float: right;
    text-align: right;
    svg {
      margin-left: ${rhythm(0.5)};
    }
  }
`;
