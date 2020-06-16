import React from 'react';
import Img from 'gatsby-image';
import Card, { Cards } from './Card';

import useDesignsQuery from '../graphql/useDesignsQuery';

interface Props {
  limit?: number | false;
}

const Designs = ({ limit = false }: Props) => {
  const designs = useDesignsQuery();

  return (
    <Cards>
      {designs.slice(0, limit || designs.length).map(({ slug, name, description, tags, childImageSharp }) => (
        <Card
          key={slug}
          title={name}
          subtitle={description}
          tags={tags}
          link={`/${slug}`}
          Image={<Img alt={name} fluid={childImageSharp.fluid} />}
        />
      ))}
    </Cards>
  );
};

export default Designs;
