import React from 'react';
import Card from './Card';
import UseDesignsQuery from '../graphql/DesignsQuery';

interface Props {
  limit?: number | false;
}

const Designs = ({ limit = false }: Props) => {
  const designs = UseDesignsQuery();

  return designs
    .slice(0, limit || designs.length)
    .map(({ slug, name, description, tags, cover }) => (
      <Card
        key={slug}
        title={name}
        subtitle={description}
        tags={tags}
        link={`designs/${slug}`}
        img={cover.childImageSharp}
      />
    ));
};

export default Designs;
