import { useStaticQuery, graphql } from 'gatsby'
import { PostsQuery } from '..'

const usePostsQuery = () => {
  const { allMarkdownRemark }: PostsQuery = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          excerpt
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
      }
    }
  `)

  return allMarkdownRemark.nodes
}

export default usePostsQuery
