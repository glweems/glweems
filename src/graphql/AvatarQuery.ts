import { useStaticQuery, graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';

interface Props {
  file: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

const useAvatarQuery = (): Props =>
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
