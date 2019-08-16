import React from 'react';
import Card from './Card';
import useTutorialsQuery from '../graphql/TutorialsQuery';

interface Props {
  limit?: number;
}

const Tutorials = ({ limit }: Props) => {
  const tutorials = useTutorialsQuery();
  const shown = tutorials.slice(0, limit || tutorials.length);

  return shown.map(({ id, title, excerpt, tags, path, thumbnail }) => (
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
