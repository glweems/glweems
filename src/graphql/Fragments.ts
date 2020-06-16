import { graphql } from 'gatsby'

export const FixedImage = graphql`
  fragment FixedImage on ImageSharp {
    fixed(width: 125, height: 125) {
      base64
      tracedSVG
      aspectRatio
      srcWebp
      srcSetWebp
      originalName
    }
  }
`

export const FluidImage = graphql`
  fragment FluidImage on ImageSharp {
    fluid(maxWidth: 630, traceSVG: { background: "#181D2B", color: "#d0c1fa", threshold: 6 }) {
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
`

export const Frontmatter = graphql`
  fragment Frontmatter on MarkdownRemark {
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
        relativePath
        publicURL
        childImageSharp {
          ...FluidImage
        }
      }
    }
  }
`

export const BlogPost = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    excerpt(pruneLength: 75)
    timeToRead
    ...Frontmatter
  }
`
