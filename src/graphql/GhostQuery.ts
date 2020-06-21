import { graphql, useStaticQuery } from 'gatsby';
import { GhostQuery } from './_types/GhostQuery';
import { FluidObject } from 'gatsby-image';

const useGhostQuery = (): FluidObject => {
  // const { ghost } = useStaticQuery<GhostQuery>(graphql`
  //   query GhostQuery {
  //     ghost: file(relativePath: { eq: "ghost.png" }) {
  //       childImageSharp {
  //         fixed(height: 40) {
  //           ...GatsbyImageSharpFixed_withWebp_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `);
  // return ghost;
};

export default useGhostQuery;
