import { graphql, useStaticQuery } from 'gatsby';
import { SeoQuery } from '..';

const useSEOQuery = (): SeoQuery =>
  useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          url
          defaultImage: image
        }
      }
    }
  `);

export default useSEOQuery;
