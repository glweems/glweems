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

export const Frontmatter = graphql`
  fragment Frontmatter on File {
    childMarkdownRemark {
      excerpt(pruneLength: 150)
      frontmatter {
        date
        path
        title
        subtitle
        codesandbox
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

export default { BehanceCard, BehanceCovers, FixedImage, FluidImage, Frontmatter };
