import { graphql, Link } from 'gatsby';
import React from 'react';
import { IndexPageQuery } from '../types/generated';
import '../utils/index.module.css';
import Img from 'gatsby-image';
import { Theme } from '../theme';

interface IndexPageProps {
  data: IndexPageQuery;
}
type ArticleProps = {
  title?: string;
  excerpt?: string;
  date?: string;
  path?: string;
  Image?: any;
  linkText?: string;
};

function Article({ title, excerpt, date, path, Image, linkText }: ArticleProps) {
  console.log('Image: ', Image);
  return (
    <div
      css={`
        display: grid;
        grid-template-columns: 1fr 200px;
        grid-template-rows: 200px;
        gap: ${(props: { theme: Theme }) => props.theme.space[2]}px;
        padding: ${(props: { theme: Theme }) => props.theme.space[2]}px;
      `}
    >
      <div>
        {title && (
          <h2>
            <Link to={path}>{title}</Link>
          </h2>
        )}
        {excerpt && <div>{excerpt}</div>}
        {date && <div>{date}</div>}
        {path && <Link to={path}>{linkText}</Link>}
      </div>
      <div>{Image && Image}</div>
    </div>
  );
}

Article.defaultProps = {
  linkText: 'Read'
};

export default function IndexPage({ data, ...props }: IndexPageProps) {
  return (
    <div>
      {data.allMarkdownRemark.posts.map(({ frontmatter, ...post }) => {
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
    </div>
  );
}

export const Query = graphql`
  query IndexPage {
    allMarkdownRemark(skip: 0, limit: 4, sort: { fields: [frontmatter___date], order: DESC }) {
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
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
