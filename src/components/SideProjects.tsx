import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Card, { Cards } from './Card';
import useSideProjectsQuery from '../graphql/SideProjectsQuery';

interface Props {
  limit?: number | false;
}

const Websites = ({ limit = false }: Props) => {
  const websites = useSideProjectsQuery();

  return (
    <Cards>
      {websites
        .slice(0, limit || websites.length)
        .map(({ id, title, description, tags, link, image }) => (
          <Card
            key={id}
            title={title}
            subtitle={description}
            tags={tags}
            img={image.childImageSharp}
          >
            <OutboundLink href={link} target="_blank_">
              View Site
            </OutboundLink>
          </Card>
        ))}
    </Cards>
  );
};

export default Websites;
