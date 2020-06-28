import * as React from 'react';
import { Helmet } from 'react-helmet';
import useSEOQuery from '../graphql/SEOQuery';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  article?: boolean;
  tags?: string[];
  config: {
    title?: string;
    description?: string;
    image?: string;
    path?: string;
    article?: boolean;
    tags?: string[];
  };
}

export default function SEO({ title, description, image, article, path, tags }: SEOProps) {
  const { defaultTitle, titleTemplate, defaultDescription, url, defaultImage } = useSEOQuery();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image || defaultImage}`,
    url: `${url}${path || '/'}`,
  };

  return (
    <Helmet title={seo.title as any} titleTemplate={titleTemplate as any}>
      <meta name="description" content={seo?.description as any} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {tags && <meta name="keywords" content={tags.toString()} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

const defaultConfig = {
  article: false,
  tags: ['designer', 'developer', 'react', 'gatsby'],
};

SEO.defaultProps = {
  config: defaultConfig,
};
