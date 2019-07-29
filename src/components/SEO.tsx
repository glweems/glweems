import React from 'react';
import { Helmet } from 'react-helmet-async';
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

interface SiteMetadata {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: string;
  defaultImage?: string;
}

const SEO = ({ title, description, image, article, pathname }: SiteMetadata) => {
  const {
    site: {
      siteMetadata: { defaultTitle, titleTemplate, defaultDescription, url, defaultImage },
    },
  }: SeoQuery = useStaticQuery(graphql`
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

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image || defaultImage}`,
    url: `${url}${pathname || '/'}`,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && <meta property="og:type" content="article" />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && <meta property="og:description" content={seo.description} />}
        {seo.image && <meta property="og:image" content={seo.image} />}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && <meta name="twitter:description" content={seo.description} />}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </>
  );
};

export default SEO;
