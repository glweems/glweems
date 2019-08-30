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
    fluid(maxWidth: 630, traceSVG: { background: "#181D2B", color: "#d0c1fa", threshold: 6 }) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
`;

export const Frontmatter = graphql`
  fragment Frontmatter on MarkdownRemark {
    excerpt(pruneLength: 150)
    frontmatter {
      id
      date(formatString: "MMMM DD, YYYY")
      path
      title
      subtitle
      tags
      next
      thumbnail {
        id
        childImageSharp {
          ...FluidImage
        }
      }
    }
  }
`;
