import React from 'react';
import Img from 'gatsby-image';
import Card, { Cards } from './Card';
import UseDesignsQuery from '../graphql/DesignsQuery';

interface Props {
  limit?: number | false;
}

const Designs = ({ limit = false }: Props) => {
  const designs = UseDesignsQuery();

  return (
    <Cards>
      {designs
        .slice(0, limit || designs.length)
        .map(({ slug, name, description, tags, cover }) => (
          <Card
            key={slug}
            title={name}
            subtitle={description}
            tags={tags}
            link={`/${slug}`}
            Image={<Img alt={name} fluid={cover.childImageSharp.fluid} />}
          />
        ))}
    </Cards>
  );
};

export default Designs;
