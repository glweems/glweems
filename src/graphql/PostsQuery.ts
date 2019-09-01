import { useStaticQuery, graphql } from 'gatsby';
import { PostsQuery } from '..';

const usePostsQuery = () => {
  const { allMarkdownRemark }: PostsQuery = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark {
        nodes {
          id
          excerpt(pruneLength: 150)
          ...Frontmatter
        }
      }
    }
  `);

  return allMarkdownRemark.nodes;
};

export default usePostsQuery;
