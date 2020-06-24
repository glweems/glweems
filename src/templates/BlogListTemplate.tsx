import { graphql, navigate, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Article from '../components/Article';
import { BlogListQuery } from '../types/generated';
export interface PageContext {
  pageNumber: number;
  humanPageNumber: number;
  skip: number;
  limit: number;
  numberOfPages: number;
  previousPagePath: string;
  nextPagePath: string;
}

export default function ArticleListTemplate(props: PageProps<BlogListQuery, PageContext>) {
  const handleClick: React.MouseEventHandler<{ name: string }> = (event) => {
    navigate(event.currentTarget.name);
  };

  const { previousPagePath, nextPagePath } = props.pageContext;
  return (
    <div>
      {props.data.allMarkdownRemark.posts.map(({ frontmatter, ...post }) => {
        return (
          <div key={post.id}>
            <Article
              title={frontmatter.title}
              excerpt={post.excerpt}
              date={frontmatter.date}
              path={frontmatter.path}
              Image={
                <Img
                  draggable={false}
                  alt={`${frontmatter.title} thumbnail image`}
                  fluid={frontmatter.thumbnail.childImageSharp.fluid}
                />
              }
            />
          </div>
        );
      })}
      <div
        css={`
          display: flex;
        `}
      >
        <button name={previousPagePath} disabled={previousPagePath === ''} onClick={handleClick}>
          Prev
        </button>
        <button name={nextPagePath} disabled={nextPagePath === ''} onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export const BlogList = graphql`
  query BlogList($skip: Int, $limit: Int) {
    allMarkdownRemark(skip: $skip, limit: $limit, sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        id
        excerpt(pruneLength: 75)
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
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
