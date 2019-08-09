import React from 'react';
import Card, { Cards } from './Card';
import useTutorialsQuery from '../graphql/TutorialsQuery';

interface Props {
  limit?: number;
}

const Tutorials = ({ limit }: Props) => {
  const tutorials = useTutorialsQuery();
  const shown = tutorials.slice(0, limit || tutorials.length);
  return (
    <Cards>
      {shown.map(tutorial => (
        <Card
          key={tutorial.id}
          title={tutorial.title}
          subtitle={tutorial.excerpt}
          tags={tutorial.tags}
          link={tutorial.path}
          img={tutorial.thumbnail.childImageSharp}
        />
      ))}
    </Cards>
  );
};

export default Tutorials;
