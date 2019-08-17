import React from 'react';
import Card from './Card';
import useWebsiteQuery from '../graphql/WebsitesQuery';

interface Props {
  limit?: number | false;
}

const Websites = ({ limit = false }: Props) => {
  const websites = useWebsiteQuery();

  return websites
    .slice(0, limit || websites.length)
    .map(({ name, description, tags, url, screenshot }) => (
      <Card
        key={name}
        title={name}
        subtitle={description}
        tags={tags}
        img={screenshot.childImageSharp}
      >
        <a href={url} target="_blank_">
          View Site
        </a>
      </Card>
    ));
};

export default Websites;
