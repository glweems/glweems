import { useStaticQuery, graphql } from 'gatsby';

interface DesignsPageQuery {
  allBehanceProjects: Nodes<BehanceProject>;
  behanceImages: Nodes<BehanceImage>;
}

const UseDesignsPageQuery = (): DesignsPageQuery =>
  useStaticQuery(graphql`
    query DesignsPageQuery {
      allBehanceProjects {
        nodes {
          slug
          name
          description
          tags
        }
      }
      behanceImages: allFile(
        filter: {
          relativeDirectory: { regex: "/gatsby-source-behance-images/" }
          name: { eq: "cover" }
        }
      ) {
        nodes {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 700, traceSVG: { background: "#1a1e28", color: "#c6c7c6" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `);

export default UseDesignsPageQuery;
