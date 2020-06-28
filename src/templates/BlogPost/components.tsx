import Img from 'gatsby-image';
import * as React from 'react';
import RehypeReact from 'rehype-react';
import { Blockquote, Subtitle, Title } from '../../components/Common/Typography';
import Tags from '../../components/Tags';
import { BlogTemplateQuery } from '../../types/generated';
import { ImgDetail, StyledHeader } from './styles';
let rehypeReact: any;
rehypeReact = RehypeReact;

interface HeaderProps {
  frontmatter: BlogTemplateQuery['post']['frontmatter'];
  timeToRead: number;
}

export const Header: React.FC<HeaderProps> = ({ frontmatter, timeToRead }) => (
  <StyledHeader>
    <div>
      <Title>{frontmatter.title}</Title>
      <Subtitle>{frontmatter.subtitle}</Subtitle>
      <div className="info">
        <small className="date">
          {frontmatter.date} - {timeToRead} min read
        </small>
        <Tags tags={frontmatter.tags} />
      </div>
      <Img className="thumbnail" fluid={frontmatter.thumbnail.childImageSharp.fluid} />
    </div>
  </StyledHeader>
);

export const Content: React.FC<{ elements: object }> = ({ elements }) => {
  const html = new rehypeReact({
    createElement: React.createElement,
    components: { em: ImgDetail, blockquote: Blockquote },
  });

  return html.Compiler(elements).props.children;
};
