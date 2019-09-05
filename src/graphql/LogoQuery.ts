import { useStaticQuery, graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';

const useLogoQuery = (): { childImageSharp: { fixed: FixedObject } } => {
  const { logo } = useStaticQuery(graphql`
    query GlweemsQuery {
      logo: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fixed(height: 45) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return logo;
};

export default useLogoQuery;
