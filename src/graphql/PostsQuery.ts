import { graphql, useStaticQuery } from 'gatsby';
import { PostsQuery } from '../types/generated';

const usePostsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery<PostsQuery>(graphql`
    query Posts {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          ...BlogPost
        }
      }
    }
  `);

  return allMarkdownRemark.nodes;
};

export default usePostsQuery;
