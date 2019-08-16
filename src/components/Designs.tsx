import React from 'react';
import Card from './Card';
import UseDesignsQuery from '../graphql/DesignsQuery';

interface Props {
  limit?: number;
}

const Designs = ({ limit }: Props) => {
  const designs = UseDesignsQuery();
  const shown = designs.slice(0, limit || designs.length);
  return shown.map(({ slug, name, description, tags, cover }) => (
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
