import { useStaticQuery, graphql } from 'gatsby';

const useGlweemsQuery = () =>
  useStaticQuery(graphql`
    query GlweemsQuery {
      file(relativePath: { eq: "glweems.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

export default useGlweemsQuery;
