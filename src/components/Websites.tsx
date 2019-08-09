import React from 'react';
import useWebsiteQuery from '../graphql/WebsitesQuery';
import Card, { Cards } from './Card';
import { Image } from '../utils/theme';

interface Props {
  limit?: number;
}

const Websites = ({ limit }: Props) => {
  const websites = useWebsiteQuery();
  const shown = websites.slice(0, limit || websites.length);
  return (
    <Cards>
      {shown.map(({ name, description, tags, url, screenshot }) => (
        <Card key={name} title={name} subtitle={description} tags={tags} link={url}>
          <Image fluid={screenshot.childImageSharp.fluid} />
        </Card>
      ))}
    </Cards>
  );
};

export default Websites;
