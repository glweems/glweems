import { graphql, useStaticQuery } from 'gatsby'
import { GhostQuery } from './_types/GhostQuery'

const useGhostQuery = () => {
  const { ghost } = useStaticQuery<GhostQuery>(graphql`
    query GhostQuery {
      ghost: file(relativePath: { eq: "ghost.png" }) {
        childImageSharp {
          fixed(height: 40) {
            base64
            tracedSVG
            aspectRatio
            srcWebp
            originalName
            src
            srcSet
            srcSetWebp
            height
            width
          }
        }
      }
    }
  `)
  return ghost
}

export default useGhostQuery
