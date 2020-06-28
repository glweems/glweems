import loadable from '@loadable/component';
import { graphql, PageProps } from 'gatsby';
import * as React from 'react';
import { useTheme } from 'styled-components';
import Box from '../../components/Common/Box';
import SEO from '../../components/SEO';
import { base, borderRadius, media } from '../../theme';
import { DiscussionEmbedProps } from '../../types/disqus-react';
import { BlogTemplateQuery } from '../../types/generated';
import { Content, Header } from './components';
import { Article } from './styles';
import { SwitchPages } from './SwitchPages';
import ShareButtons from '../../components/ShareButtons';

const DiscussionEmbed = loadable<DiscussionEmbedProps>(() =>
  import('disqus-react').then((module) => module.DiscussionEmbed)
);

export default function BlogTemplate({ data: { post, prev, next, site } }: PageProps<BlogTemplateQuery>) {
  const { isDarkMode } = useTheme();
  const { twitterHandle, disqusShortName } = site.siteMetadata;
  const { url, disqusIdentifier } = post;
  const { title, path, tags, subtitle: description, thumbnail } = post.frontmatter;
  const seoConfig = { title, path, tags, description, article: true, image: thumbnail };
  const shareConfig = { url, twitterHandle, title, tags };

  return [
    <SEO {...seoConfig} />,
    <Article className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header frontmatter={post.frontmatter} timeToRead={post.timeToRead} />
      <Content elements={post.htmlAst} />
    </Article>,
    <Box
      marginY={3}
      container
      css={`
        max-width: 720px;
        margin: 0 auto;
        #disqus_thread {
          background: ${base.light};
          border-radius: 0;
          ${media.greaterThan('sm')`
            border-radius: ${borderRadius};
          `};
        }
      `}
    >
      <SwitchPages config={{ prev, next }} />
      <ShareButtons config={shareConfig} />
      <DiscussionEmbed shortname={disqusShortName} config={{ url, identifier: disqusIdentifier, title }} />
    </Box>
  ];
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
        title: subtitle
        path
      }
    }
    next: markdownRemark(frontmatter: { path: { eq: $next } }) {
      frontmatter {
        title: subtitle
        path
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
