import { useStaticQuery, graphql } from 'gatsby';

const useAvitarQuery = () =>
  useStaticQuery(graphql`
    query AvitarQuery {
      file(relativePath: { eq: "ghost.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

export default useAvitarQuery;
