import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import Card, { Cards } from './Card';

import useDesignsQuery from '../graphql/useDesignsQuery';

interface Props {
  limit?: number | false;
}

const Designs = ({ limit = false }: Props) => {
  const designs = useDesignsQuery();

  return (
    <Cards>
      {designs
        .slice(0, limit || designs.length)
        .map(({ slug, name, description, tags, childImageSharp }) => (
          <Card
            key={`${slug}-${name}`}
            title={name}
            subtitle={description}
            tags={tags}
            link={`/${slug}`}
            Image={
              <Img
                alt={name}
                fluid={childImageSharp.fluid as FluidObject}
                draggable={false}
              />
            }
          />
        ))}
    </Cards>
  );
};

export default Designs;
