import { graphql, useStaticQuery } from 'gatsby'

const useSEOQuery = () => {
  const {
    site: {
      siteMetadata: { defaultTitle, titleTemplate, defaultDescription, url, defaultImage }
    }
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          url: siteUrl
          defaultImage: image
        }
      }
    }
  `)

  return { defaultTitle, titleTemplate, defaultDescription, url, defaultImage }
}

export default useSEOQuery
