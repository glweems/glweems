import { useStaticQuery, graphql } from 'gatsby';
import { PostsQuery } from '..';

const usePostsQuery = () => {
  const { allMdx }: PostsQuery = useStaticQuery(graphql`
    query PostsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            id
            date(formatString: "MMMM DD, YYYY")
            path
            title
            subtitle
            tags
            next
            thumbnail {
              id
              childImageSharp {
                ...FluidImage
              }
            }
          }
        }
      }
    }
  `);

  return allMdx.nodes;
};

export default usePostsQuery;
