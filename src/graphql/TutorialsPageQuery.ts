import { useStaticQuery, graphql } from 'gatsby';

interface TutorialsPageQuery {
  markdownFiles: GQLNodes<MarkdownRemark>;
}

const useTutorialsPageQuery = (): TutorialsPageQuery =>
  useStaticQuery(graphql`
    query TutorialsPageQuery {
      markdownFiles: allFile(
        filter: { gitRemote__NODE: { ne: null }, childMarkdownRemark: { id: { ne: null } } }
      ) {
        nodes {
          id
          sourceInstanceName
          relativeDirectory
          childMarkdownRemark {
            excerpt(pruneLength: 100)
            frontmatter {
              title
              path
              date
              subtitle
              tags
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

export default useTutorialsPageQuery;
