import loadable from '@loadable/component';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import RehypeReact from 'rehype-react';
import styled, { useTheme } from 'styled-components';
import Box from '../components/Common/Box';
import Link from '../components/Common/Link';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import Tags from '../components/Tags';
import { BlogTemplateQuery } from '../queries';
import { DiscussionEmbedProps } from '../types/disqus-react';
import '../utils/syntax.css';
import Container from '../components/Common/Container';

let rehypeReact: any;
rehypeReact = RehypeReact;
export interface PageContext {
  slug: string;
  prev: string;
  next: string;
}

const DiscussionEmbed = loadable<DiscussionEmbedProps>(
  () => import('disqus-react').then((module) => module.DiscussionEmbed),
  { fallback: <LoadingSpinner /> }
);

export default function BlogTemplate({
  data,
  pageContext,
}: PageProps<BlogTemplateQuery, PageContext>) {
  const { post, site } = data;
  const { frontmatter } = data.post;
  const { mode } = useTheme();

  return (
    <Container>
      <SEO
        article
        title={frontmatter.title}
        description={frontmatter.subtitle}
        keywords={frontmatter.tags}
        image={frontmatter.thumbnail.publicURL}
      />

      <Article as="article" className={`${mode}-mode`}>
        <header>
          <h1 className="blog-title">{frontmatter.title}</h1>

          <p className="blog-subtitle">{frontmatter.subtitle}</p>

          <small className="date">
            {frontmatter.date} - {post.timeToRead} min read
          </small>

          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            <Tags tags={frontmatter.tags} />

            <ShareButtons
              title={frontmatter.title}
              url={post.url}
              tags={frontmatter.tags}
            />
          </Box>

          <Img
            draggable={false}
            fluid={frontmatter.thumbnail.childImageSharp.fluid}
            alt={`${frontmatter.title} thumbnail`}
          />
        </header>

        <Content elements={post.htmlAst} />
      </Article>

      <DiscussionEmbed
        shortname={site.siteMetadata.disqusShortName}
        config={{
          url: post.url,
          identifier: post.disqusIdentifier,
          title: frontmatter.title,
        }}
      />
    </Container>
  );
}

export const Query = graphql`
  query BlogTemplate($slug: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      url
      disqusIdentifier
      timeToRead
      htmlAst
      ...Frontmatter
    }

    site {
      siteMetadata {
        twitterHandle
        disqusShortName
      }
    }
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns:
    minmax(1em, 1fr)
    [main-start] minmax(300px, 720px) [main-end]
    minmax(1em, 1fr);
  gap: ${({ theme }) => theme.space[4]} 0;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bg};

  > * {
    grid-column: main;
    width: 100%;
    /* margin: 0; */
  }

  header {
    .blog-title,
    .blog-subtitle,
    .date,
    .tags {
      margin-bottom: ${({ theme }) => theme.space[4]};
    }
  }
`;
const artileComponents = {
  em: styled.em`
    width: 100%;
    text-align: center;
  `,
  blockquote: styled.blockquote`
    padding: 0.25em 0 0.25em 1em;
    color: ${({ theme }) => theme.colors.muted};
    font-style: italic;
    background-color: ${({ theme }) => theme.colors.rootBg};
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
  `,
  ul: styled.ul`
    list-style-position: inside;
  `,
  a: Link,
};

export const Content: React.FC<{ elements: object }> = ({ elements }) => {
  const html = new rehypeReact({
    createElement: React.createElement,
    components: artileComponents,
  });

  return html.Compiler(elements).props.children;
};
