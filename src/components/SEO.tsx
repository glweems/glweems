import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import packageJson from '../../package.json';
import { SeoQuery } from '../queries';

export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string[];
};

export default function SEO({
  title,
  description,
  image,
  article,
  keywords,
}: SEOProps) {
  const { pathname } = useLocation();
  const { site, openGraphImg } = useStaticQuery<SeoQuery>(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || openGraphImg.publicURL,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: site.siteMetadata.languageCode }}
    >
      {title && <title>{seo.title}</title>}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {keywords && <meta name="keywords" content={keywords.toString()} />}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  keywords: packageJson.keywords,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        languageCode
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        twitterUsername: twitterHandle
      }
    }
    openGraphImg: file(name: { eq: "open-graph" }) {
      publicURL
    }
  }
`;
