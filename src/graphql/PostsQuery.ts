import { useStaticQuery, graphql } from 'gatsby';
import { PostsQuery } from '..';

const usePostsQuery = () => {
  const { allMarkdownRemark }: PostsQuery = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark {
        nodes {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            id
            title
            path
            date
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return allMarkdownRemark.nodes;
};

export default usePostsQuery;
