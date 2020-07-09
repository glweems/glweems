import { graphql } from 'gatsby';

export const FixedImage = graphql`
  fragment FixedImage on ImageSharp {
    fixed(
      # width: $width
      # height: $height
      traceSVG: { color: "#d0c1fa", background: "transparent" }
      cropFocus: CENTER
    ) {
      ...GatsbyImageSharpFixed_withWebp_tracedSVG
    }
  }
`;

export const FluidImage = graphql`
  fragment FluidImage on ImageSharp {
    fluid(
      traceSVG: { color: "#d0c1fa", background: "transparent" }
      cropFocus: CENTER
    ) {
      ...GatsbyImageSharpFluid_withWebp_tracedSVG
    }
  }
`;

export const Frontmatter = graphql`
  fragment Frontmatter on MarkdownRemark {
    frontmatter {
      id
      date(formatString: "MMMM YYYY")
      path
      title
      subtitle
      tags
      next
      thumbnail {
        id
        relativePath
        publicURL
        childImageSharp {
          ...FluidImage
        }
      }
    }
  }
`;

export const BlogPost = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    excerpt(pruneLength: 75)
    timeToRead
    ...Frontmatter
  }
`;

export const DesignCard = graphql`
  fragment DesignCard on DesignsYaml {
    name
    description
    slug
    fields {
      thumbnail {
        childImageSharp {
          fixed(
            width: 200
            height: 200
            traceSVG: { color: "#d0c1fa", background: "transparent" }
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;

export const BlogPostCard = graphql`
  fragment BlogPostCard on MarkdownRemark {
    id
    excerpt(pruneLength: 200)
    frontmatter {
      id
      title
      path
      subtitle
      date(formatString: "MMMM YYYY")
      thumbnail {
        childImageSharp {
          fixed(
            width: 200
            height: 200
            traceSVG: { color: "#d0c1fa", background: "transparent" }
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;
