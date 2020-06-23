import styled from 'styled-components';
import { base, bg, borderColor, borderRadius, media, muted, navbarHeight, rhythm, text } from '../../theme';

export const StyledHeader = styled.header`
  padding-bottom: ${rhythm(1)};
  border-bottom: 1px solid ${borderColor};
`;

export const StyledInfo = styled.small`
  color: ${muted};
  font-weight: bold;
  font-style: italic;
`;
export const ImgDetail = styled.em`
  width: 100%;
  text-align: center;
`;
export const Article = styled.article`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns:
    minmax(1em, 1fr)
    [main-start] minmax(300px, 720px) [main-end]
    minmax(1em, 1fr);
  gap: ${rhythm(1.5)} 0;
  color: ${text};
  background: ${bg};

  > * {
    grid-column: main;
    width: 100%;
    margin: 0;
  }

  .thumbnail {
    max-height: calc(50vh - ${navbarHeight} - ${rhythm(1.5)});
  }

  ${media.greaterThan('sm')`
    img {
      border-radius: ${borderRadius};
    }
    iframe {
      border: 2px solid ${borderColor};
      border-radius: ${borderRadius};
    }
  `};

  #disqus_thread {
    background: ${base.light};
    border-radius: 0;

    ${media.greaterThan('sm')`
      border-radius: ${borderRadius};
    `};
  }
`;
