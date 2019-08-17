import React from 'react';
import Card from './Card';
import useTutorialsQuery from '../graphql/TutorialsQuery';

interface Props {
  limit?: number | false;
}

const Tutorials = ({ limit = false }: Props) => {
  const tutorials = useTutorialsQuery();

  return tutorials
    .slice(0, limit || tutorials.length)
    .map(({ id, title, excerpt, tags, path, thumbnail }) => (
      <Card
        key={id}
        title={title}
        subtitle={excerpt}
        tags={tags}
        link={path}
        img={thumbnail.childImageSharp}
      />
    ));
};

export default Tutorials;
