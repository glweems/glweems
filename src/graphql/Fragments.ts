import { graphql } from 'gatsby';

export const FixedImage = graphql`
  fragment FixedImage on ImageSharp {
    fixed(width: $width, height: $height) {
      originalName
      base64
      tracedSVG
      aspectRatio
      srcWebp
      srcSetWebp
      originalName
      width
      height
      srcSet
      srcSetWebp
      base64
      aspectRatio
    }
  }
`;

export const FluidImage = graphql`
  fragment FluidImage on ImageSharp {
    fluid(
      maxWidth: 630
      traceSVG: { background: "transparent", color: "#d0c1fa", threshold: 6 }
    ) {
      base64
      tracedSVG
      srcWebp
      srcSetWebp
      originalImg
      originalName
      aspectRatio
      sizes
      presentationWidth
      presentationHeight
      src
      srcSet
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
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
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

export const DesignArticle = graphql`
  fragment DesignArticle on DesignsYaml {
    name
    description
    slug
  }
`;

export const BlogPostArticle = graphql`
  fragment BlogPostArticle on MarkdownRemark {
    id
    excerpt(pruneLength: 200)
    frontmatter {
      id
      title
      path
      date(formatString: "MMMM YYYY")
      thumbnail {
        childImageSharp {
          fluid(
            traceSVG: { color: "#d0c1fa", background: "transparent" }
            cropFocus: CENTER
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`;
