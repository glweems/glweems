import loadable from '@loadable/component';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import RehypeReact from 'rehype-react';
import styled, { useTheme } from 'styled-components';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import Pager from '../components/Pager';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import Tags from '../components/Tags';
import { media } from '../theme';
import { DiscussionEmbedProps } from '../types/disqus-react';
import { BlogTemplateQuery } from '../types/generated';
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
    <React.Fragment>
      <SEO
        article
        title={frontmatter.title}
        description={frontmatter.subtitle}
        keywords={frontmatter.tags}
        image={frontmatter.thumbnail.publicURL}
      />

      <Article className={`${mode}-mode`}>
        <header>
          <h1 className="blog-title">{frontmatter.title}</h1>

          <p className="blog-subtitle">{frontmatter.subtitle}</p>

          <small className="date">
            {frontmatter.date} - {post.timeToRead} min read
          </small>

          <Tags tags={frontmatter.tags} />

          <Img
            draggable={false}
            fluid={frontmatter.thumbnail.childImageSharp.fluid}
            alt={`${frontmatter.title} thumbnail`}
          />
        </header>

        <Content elements={post.htmlAst} />
      </Article>

      <ShareButtons
        title={frontmatter.title}
        url={post.url}
        tags={frontmatter.tags}
      />

      <DiscussionEmbed
        shortname={site.siteMetadata.disqusShortName}
        config={{
          url: post.url,
          identifier: post.disqusIdentifier,
          title: frontmatter.title,
        }}
      />

      <Pager
        previousPagePath={pageContext.prev}
        previousPageText={data.prev?.frontmatter?.previousPageText}
        nextPagePath={pageContext?.next}
        nextPageText={data.next?.frontmatter?.nextPageText}
      />
    </React.Fragment>
  );
}

export const Query = graphql`
  query BlogTemplate($slug: String!, $prev: String, $next: String) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      url
      disqusIdentifier
      timeToRead
      htmlAst
      ...Frontmatter
    }
    prev: markdownRemark(frontmatter: { path: { eq: $prev } }) {
      frontmatter {
        previousPagePath: path
        previousPageText: title
      }
    }
    next: markdownRemark(frontmatter: { path: { eq: $next } }) {
      frontmatter {
        nextPagePath: path
        nextPageText: title
      }
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
  gap: ${({ theme }) => theme.space[2]} 0;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bg};

  > * {
    grid-column: main;
    width: 100%;
    margin: 0;
  }

  ${media.greaterThan('sm')`
    img {
      border-radius: ${({ theme }) => theme.borderRadius};
    }
    iframe {
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  `};

  header {
    .blog-title,
    .blog-subtitle,
    .date,
    .tags {
      margin-bottom: ${({ theme }) => theme.space[4]}px;
    }
  }
`;

export const Content: React.FC<{ elements: object }> = ({ elements }) => {
  const html = new rehypeReact({
    createElement: React.createElement,
    components: {
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
    },
  });

  return html.Compiler(elements).props.children;
};
