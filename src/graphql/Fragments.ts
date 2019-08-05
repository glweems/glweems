import { graphql } from 'gatsby';

export const BehanceCard = graphql`
  fragment BehanceCard on behanceProjects {
    id
    slug
    name
    description
    tags
  }
`;

export const BehanceCovers = graphql`
  fragment BehanceCoverImages on Query {
    behanceCoverImages: allFile(
      filter: {
        relativeDirectory: { regex: "/gatsby-source-behance-images/" }
        name: { eq: "cover" }
      }
    ) {
      nodes {
        relativeDirectory
        childImageSharp {
          ...FluidSvg
        }
      }
    }
  }
`;

export const FluidSvg = graphql`
  fragment FluidSvg on ImageSharp {
    fluid(maxWidth: 700, traceSVG: { background: "#1a1e28", color: "#c6c7c6" }) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
`;

export const Frontmater = graphql`
  fragment Frontmatter on File {
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
            ...FluidSvg
          }
        }
      }
    }
  }
`;

export default { BehanceCard };
