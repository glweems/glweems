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
          ...FluidImage
        }
      }
    }
  }
`;

export const FixedImage = graphql`
  fragment FixedImage on ImageSharp {
    fixed(width: 125, height: 125) {
      ...GatsbyImageSharpFixed
    }
  }
`;

export const FluidImage = graphql`
  fragment FluidImage on ImageSharp {
    fluid {
      ...GatsbyImageSharpFluid_withWebp_noBase64
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
            ...FluidImage
          }
        }
      }
    }
  }
`;

export default { BehanceCard };