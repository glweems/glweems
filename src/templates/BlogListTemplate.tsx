import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Article from '../components/Article';
import Pager, { PagerProps } from '../components/Pager';
import SEO from '../components/SEO';
import { BlogListQuery } from '../types/generated';
import Layout from '../layout/Layout';
import SideMenu from '../layout/SideMenu';
export interface PageContext extends PagerProps {
  pageNumber: number;
  humanPageNumber: number;
  skip: number;
  limit: number;
  numberOfPages: number;
}

export default function ArticleListTemplate({
  data,
  pageContext,
}: PageProps<BlogListQuery, PageContext>) {
  return (
    <Layout>
      <SEO
        title={`Blog Posts Results ${pageContext.pageNumber} of ${pageContext.numberOfPages}`}
      />

      <aside className="left">
        <SideMenu />
      </aside>

      <main>
        {data.allMarkdownRemark.posts.map(({ frontmatter, ...post }) => {
          return (
            <Article
              key={post.id}
              title={frontmatter.title}
              excerpt={post.excerpt}
              date={frontmatter.date}
              path={`/blog${frontmatter.path}`}
              Image={
                <Img
                  draggable={false}
                  alt={`${frontmatter.title} thumbnail image`}
                  fixed={frontmatter.thumbnail.childImageSharp.fixed}
                />
              }
            />
          );
        })}

        <Pager
          previousPagePath={pageContext.previousPagePath}
          nextPagePath={pageContext.nextPagePath}
        />
      </main>
    </Layout>
  );
}

export const Query = graphql`
  query BlogList($skip: Int, $limit: Int) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          id
          date(formatString: "MMMM DD, YYYY")
          path
          title
          subtitle
          tags
          thumbnail {
            id
            relativePath
            publicURL
            childImageSharp {
              fixed(
                height: 200
                width: 200
                traceSVG: { color: "#d0c1fa", background: "transparent" }
                cropFocus: CENTER
              ) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
