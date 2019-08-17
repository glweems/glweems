import { useStaticQuery, graphql } from 'gatsby';

const useAvatarQuery = () =>
  useStaticQuery(graphql`
    query AvatarQuery {
      file(relativePath: { eq: "ghost.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

export default useAvatarQuery;
