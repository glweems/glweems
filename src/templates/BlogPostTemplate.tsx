import loadable from '@loadable/component';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { Fragment } from 'react';
import RehypeReact from 'rehype-react';
import styled from 'styled-components';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import Tags from '../components/Tags';
import { BlogTemplateQuery } from '../queries';
import { media } from '../theme';
import { DiscussionEmbedProps } from '../types/disqus-react';
import '../utils/syntax.css';

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

  return (
    <Fragment>
      <SEO
        article
        title={frontmatter.title}
        description={frontmatter.subtitle}
        keywords={frontmatter.tags}
        image={frontmatter.thumbnail.publicURL}
      />

      <Styled>
        <header>
          <h1 className="blog-title">{frontmatter.title}</h1>

          <Img
            className="tbn"
            draggable={false}
            fluid={frontmatter.thumbnail.childImageSharp.fluid}
            alt={`${frontmatter.title} thumbnail`}
          />

          <p className="blog-subtitle">{frontmatter.subtitle}</p>

          <small className="date">
            {frontmatter.date} - {post.timeToRead} min read
          </small>

          <Tags tags={frontmatter.tags} />
        </header>
        <article>
          <Content elements={post.htmlAst} />
        </article>
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
      </Styled>
    </Fragment>
  );
}

const Styled = styled.div`
  header,
  article,
  #disqus_thread {
    max-width: 800px;
    margin: auto;
    padding: ${({ theme }) => theme.space[5]};
  }
  #disqus_thread {
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: ${({ theme }) => theme.space[1]};
  }
  .tbn {
    margin-bottom: ${({ theme }) => theme.space[5]};
  }

  blockquote,
  iframe {
    margin-right: -${({ theme }) => theme.space[5]};
    margin-left: -${({ theme }) => theme.space[5]};
  }

  ${media.greaterThan('sm')`
      padding: ${({ theme }) => theme.space[10]};

      blockquote,
      iframe {
      }
  `};
`;

export const Query = graphql`
  query BlogTemplate($slug: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      url
      disqusIdentifier
      timeToRead
      htmlAst
      ...Frontmatter
      editOnGithub
    }

    site {
      siteMetadata {
        twitterHandle
        disqusShortName
      }
    }
  }
`;

const artileComponents = {
  em: styled.em`
    width: 100%;
    text-align: center;
  `,
  blockquote: styled.blockquote`
    padding: ${({ theme }) => theme.space[5]};
    color: ${({ theme }) => theme.colors.muted};
    font-style: italic;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
  `,
  ul: styled.ul`
    list-style-position: inside;
  `,
  a: (props) => <OutboundLink {...props} />,
};

export const Content: React.FC<{ elements: object }> = ({ elements }) => {
  const html = new rehypeReact({
    createElement: React.createElement,
    components: artileComponents,
  });

  return html.Compiler(elements).props.children;
};
