import { graphql } from 'gatsby';

export const FixedImage = graphql`
  fragment FixedImage on ImageSharp {
    fixed(
      width: $width
      height: $height
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
export const ResponsiveCardTbn = graphql`
  fragment ResponsiveCardTbn on File {
    sm: childImageSharp {
      fixed(
        width: 100
        height: 100
        quality: 60
        traceSVG: { color: "#d0c1fa", background: "transparent" }
        cropFocus: CENTER
      ) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }

    md: childImageSharp {
      fixed(
        width: 125
        height: 125
        quality: 60
        traceSVG: { color: "#d0c1fa", background: "transparent" }
        cropFocus: CENTER
      ) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
    lg: childImageSharp {
      fixed(
        width: 200
        height: 200
        quality: 60
        traceSVG: { color: "#d0c1fa", background: "transparent" }
        cropFocus: CENTER
      ) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
  }
`;

export const DesignCard = graphql`
  fragment DesignCard on DesignsYaml {
    name
    description
    slug
    fields {
      thumbnail {
        ...ResponsiveCardTbn
      }
    }
  }
`;

export const BlogPostCard = graphql`
  fragment BlogPostCard on MarkdownRemark {
    id
    frontmatter {
      id
      title
      path
      subtitle
      date(formatString: "MMMM YYYY")
      thumbnail {
        ...ResponsiveCardTbn
      }
    }
  }
`;

export const GithubCard = graphql`
  fragment GithubCard on GithubPinneditems {
    openGraphImageUrl
    name
    url
    createdAt(formatString: "MMMM YYYY")
    description
    homepageUrl
    id
    thumbnail {
      ...ResponsiveCardTbn
    }
  }
`;
