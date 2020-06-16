import { graphql } from 'gatsby';
import * as React from 'react';
import { useTheme } from 'styled-components';
import { Container } from '../../components/Common';
import SEO from '../../components/SEO';
import { HtmlAst } from '../../utils/HtmlAst';
import { Comments, Header, ShareButtons } from './components';
import { Article } from './styles';
import { PostDirection, SwitchPages } from './SwitchPages';

interface Post {
  id: string;
  timeToRead: number;
  excerpt: string;
  htmlAst: object;
  frontmatter: any;
  url: string;
  disqusIdentifier: string;
}

interface Props {
  data: {
    post: Post;
    prev: PostDirection;
    next: PostDirection;
    site: { siteMetadata: { twitterHandle: string; disqusShortName: string } };
  };
}

const BlogTemplate: React.FC<Props> = ({ data: { post, prev, next, site } }) => {
  const { mode } = useTheme();
  const { twitterHandle, disqusShortName } = site.siteMetadata;
  const { url, disqusIdentifier } = post;
  const { title, path, tags, subtitle: description, thumbnail } = post.frontmatter;
  const seoConfig = { title, path, tags, description, article: true, image: thumbnail.publicUrl };
  const shareConfig = { url, twitterHandle, title, tags };
  const disqusConfig = { disqusShortName, identifier: disqusIdentifier, url, title };

  return (
    <>
      <SEO config={seoConfig} />
      <Article className={mode}>
        <Header frontmatter={post.frontmatter} timeToRead={post.timeToRead} />
        <HtmlAst elements={post.htmlAst} />
      </Article>
      <Container style={{ maxWidth: '720px', margin: '0 auto' }}>
        <SwitchPages config={{ prev, next }} />
        <ShareButtons config={shareConfig} />
        <Comments config={disqusConfig} />
      </Container>
    </>
  );
};

export default BlogTemplate;

export const BlogTemplateQuery = graphql`
  query BlogTemplateQuery($slug: String!, $prev: String, $next: String) {
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
