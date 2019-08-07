import { useStaticQuery, graphql } from 'gatsby';

const useAvitarQuery = () =>
  useStaticQuery(graphql`
    query AvitarQuery {
      file(relativePath: { eq: "ghost.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

export default useAvitarQuery;
