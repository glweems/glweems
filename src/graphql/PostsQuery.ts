import { useStaticQuery, graphql } from 'gatsby'
import { BlogPost } from '..'

const usePostsQuery = (): BlogPost[] => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          ...BlogPost
        }
      }
    }
  `)

  return allMarkdownRemark.nodes
}

export default usePostsQuery
