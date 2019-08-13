import React, { useState, useEffect } from 'react';
import { animated, useTrail } from 'react-spring';
import StyledCard, { Cards as StyledCards } from './Card';
import useTutorialsQuery from '../graphql/TutorialsQuery';

const Card = animated(StyledCard);
const Cards = animated(StyledCards);
interface Props {
  limit?: number;
  delay?: number;
}

const Tutorials = ({ limit, delay = 2000 }: Props) => {
  const tutorials = useTutorialsQuery();
  const shown = tutorials.slice(0, limit || tutorials.length);
  const [toggle, set] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      set(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const trail = useTrail(shown.length, {
    config: { mass: 5, tension: 3000, friction: 200 },
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 100,
    from: { opacity: 0, x: 100 },
  });

  return (
    <Cards>
      {trail.map(({ x, ...rest }, i) => (
        <animated.div style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
          <Card
            key={shown[i].id}
            title={shown[i].title}
            subtitle={shown[i].excerpt}
            tags={shown[i].tags}
            link={shown[i].path}
            img={shown[i].thumbnail.childImageSharp}
          />
        </animated.div>
      ))}
    </Cards>
  );
};

export default Tutorials;
