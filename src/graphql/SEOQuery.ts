import { graphql, useStaticQuery } from 'gatsby';

interface SeoQuery {
  site: {
    siteMetadata: {
      defaultTitle: string;
      titleTemplate: string;
      defaultDescription: string;
      url: string;
      image: string;
      defaultImage: string;
    };
  };
}

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
