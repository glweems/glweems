import React from 'react';
import Card from './Card';
import useWebsiteQuery from '../graphql/WebsitesQuery';

interface Props {
  limit?: number;
}

const Websites = ({ limit }: Props) => {
  const websites = useWebsiteQuery();
  const shown = websites.slice(0, limit || websites.length);

  return shown.map(({ name, description, tags, url, screenshot }) => (
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
