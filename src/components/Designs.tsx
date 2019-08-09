import React from 'react';
import Card, { Cards } from './Card';
import UseDesignsQuery from '../graphql/DesignsQuery';
import { Image } from '../utils/theme';

interface Props {
  limit?: number;
}

const Designs = ({ limit }: Props) => {
  const designs = UseDesignsQuery();
  const shown = designs.slice(0, limit || designs.length);
  return (
    <Cards>
      {shown.map(({ slug, name, description, tags, cover }) => (
        <Card key={slug} title={name} subtitle={description} tags={tags} link={`designs/${slug}`}>
          <Image fluid={cover.childImageSharp.fluid} />
        </Card>
      ))}
    </Cards>
  );
};

export default Designs;
