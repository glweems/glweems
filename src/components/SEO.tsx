import React from 'react';
import { Helmet } from 'react-helmet-async';
import useSEOQuery from '../graphql/SEOQuery';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: string;
  defaultImage?: string;
  keywords?: string[];
}

const SEO = ({ title, description, image, article, pathname, keywords }: SEOProps) => {
  const {
    site: {
      siteMetadata: { defaultTitle, titleTemplate, defaultDescription, url, defaultImage },
    },
  } = useSEOQuery();

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
        {keywords ? <meta name="keywords" content={keywords.toString()} /> : null}
        {seo.description && <meta property="og:description" content={seo.description} />}
        {seo.image && <meta property="og:image" content={seo.image} />}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && <meta name="twitter:description" content={seo.description} />}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </>
  );
};

export default SEO;
