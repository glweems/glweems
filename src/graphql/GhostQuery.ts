import { useStaticQuery, graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';

const useGhostQuery = (): { childImageSharp: { fixed: FixedObject } } => {
  const { ghost } = useStaticQuery(graphql`
    query GhostQuery {
      ghost: file(relativePath: { eq: "ghost.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return ghost;
};

export default useGhostQuery;
