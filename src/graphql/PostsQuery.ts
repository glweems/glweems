import { graphql, useStaticQuery } from 'gatsby';
import { PostsQuery } from './_types/PostsQuery';

const usePostsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery<PostsQuery>(graphql`
    query PostsQuery {
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
