import { graphql, useStaticQuery } from 'gatsby';
import { SEOQuery } from './_types/SEOQuery';

const useSEOQuery = () => {
  const data = useStaticQuery<SEOQuery>(graphql`
    query SEOQuery {
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
  `);
  const defaultTitle = data.site?.siteMetadata?.defaultTitle;
  const titleTemplate = data.site?.siteMetadata?.titleTemplate;
  const defaultDescription = data.site?.siteMetadata?.defaultDescription;
  const url = data.site?.siteMetadata?.url;
  const defaultImage = data.site?.siteMetadata?.defaultImage;

  return { defaultTitle, titleTemplate, defaultDescription, url, defaultImage };
};

export default useSEOQuery;
