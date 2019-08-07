import { useStaticQuery, graphql } from 'gatsby';

const useAvitarQuery = () =>
  useStaticQuery(graphql`
    query AvitarQuery {
      file(relativePath: { eq: "ghost.png" }) {
        childImageSharp {
          ...FixedImage
        }
      }
    }
  `);

export default useAvitarQuery;
