/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Container } from 'reactstrap';
import Card, { Cards } from '../components/Card';
import { mergedBehance } from '../utils/helpers';
import UseDesignsPageQuery from '../graphql/DesignsPageQuery';

const Designs = () => {
  const { behanceImages, allBehanceProjects } = UseDesignsPageQuery();

  const behance = mergedBehance(allBehanceProjects.nodes, behanceImages.nodes);

  return (
    <Container>
      <h1>Graphic Design Projects</h1>
      <Cards>
        {behance.map(node => (
          <Card
            key={node.slug}
            title={node.name}
            subtitle={node.description}
            img={node}
            tags={node.tags}
            link={`designs/${node.slug}`}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default Designs;
